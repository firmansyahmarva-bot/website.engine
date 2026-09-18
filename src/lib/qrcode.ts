/**
 * Pure TypeScript QR Code Generator (ISO/IEC 18004 Compliant)
 * 100% Client-side, zero external dependencies, zero API calls.
 */

// GF(256) arithmetic with primitive polynomial x^8 + x^4 + x^3 + x^2 + 1 (0x11d)
const GF256_EXP = new Uint8Array(512);
const GF256_LOG = new Uint8Array(256);

(function initGF256() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF256_EXP[i] = x;
    GF256_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) {
      x ^= 0x11d;
    }
  }
  for (let i = 255; i < 512; i++) {
    GF256_EXP[i] = GF256_EXP[i - 255];
  }
})();

function gfMul(x: number, y: number): number {
  if (x === 0 || y === 0) return 0;
  return GF256_EXP[GF256_LOG[x] + GF256_LOG[y]];
}

function rsGeneratorPoly(numEcBytes: number): Uint8Array {
  let poly = new Uint8Array([1]);
  for (let i = 0; i < numEcBytes; i++) {
    const factor = new Uint8Array([1, GF256_EXP[i]]);
    const nextPoly = new Uint8Array(poly.length + 1);
    for (let j = 0; j < poly.length; j++) {
      nextPoly[j] ^= gfMul(poly[j], factor[0]);
      nextPoly[j + 1] ^= gfMul(poly[j], factor[1]);
    }
    poly = nextPoly;
  }
  return poly;
}

function rsComputeRemainder(data: Uint8Array, numEcBytes: number): Uint8Array {
  const genPoly = rsGeneratorPoly(numEcBytes);
  const remainder = new Uint8Array(numEcBytes);
  for (let i = 0; i < data.length; i++) {
    const factor = data[i] ^ remainder[0];
    remainder.copyWithin(0, 1);
    remainder[numEcBytes - 1] = 0;
    for (let j = 0; j < numEcBytes; j++) {
      remainder[j] ^= gfMul(genPoly[j + 1], factor);
    }
  }
  return remainder;
}

interface QRVersionSpec {
  version: number;
  totalData: number;
  ecPerBlock: number;
  g1Blocks: number;
  g1Data: number;
  g2Blocks: number;
  g2Data: number;
  align: number[];
}

// QR Version Specs for Error Correction Level M (Medium, 15% recovery)
const QR_SPECS_M: (QRVersionSpec | null)[] = [
  null,
  { version: 1, totalData: 16, ecPerBlock: 10, g1Blocks: 1, g1Data: 16, g2Blocks: 0, g2Data: 0, align: [] },
  { version: 2, totalData: 28, ecPerBlock: 16, g1Blocks: 1, g1Data: 28, g2Blocks: 0, g2Data: 0, align: [6, 18] },
  { version: 3, totalData: 44, ecPerBlock: 26, g1Blocks: 1, g1Data: 44, g2Blocks: 0, g2Data: 0, align: [6, 22] },
  { version: 4, totalData: 64, ecPerBlock: 18, g1Blocks: 2, g1Data: 32, g2Blocks: 0, g2Data: 0, align: [6, 26] },
  { version: 5, totalData: 86, ecPerBlock: 24, g1Blocks: 2, g1Data: 43, g2Blocks: 0, g2Data: 0, align: [6, 30] },
  { version: 6, totalData: 108, ecPerBlock: 16, g1Blocks: 4, g1Data: 27, g2Blocks: 0, g2Data: 0, align: [6, 34] },
  { version: 7, totalData: 124, ecPerBlock: 18, g1Blocks: 4, g1Data: 31, g2Blocks: 0, g2Data: 0, align: [6, 22, 38] },
  { version: 8, totalData: 154, ecPerBlock: 22, g1Blocks: 4, g1Data: 38, g2Blocks: 2, g2Data: 39, align: [6, 24, 42] },
  { version: 9, totalData: 182, ecPerBlock: 22, g1Blocks: 3, g1Data: 36, g2Blocks: 2, g2Data: 37, align: [6, 26, 46] },
  { version: 10, totalData: 216, ecPerBlock: 26, g1Blocks: 4, g1Data: 40, g2Blocks: 1, g2Data: 41, align: [6, 28, 50] },
];

function selectVersion(dataLen: number): number {
  for (let v = 1; v <= 10; v++) {
    const spec = QR_SPECS_M[v];
    if (!spec) continue;
    const headerBits = (v <= 9 ? 8 : 16) + 4;
    const neededBytes = Math.ceil((headerBits + dataLen * 8 + 4) / 8);
    if (neededBytes <= spec.totalData) {
      return v;
    }
  }
  return 10;
}

function encodeData(text: string, version: number): Uint8Array {
  const spec = QR_SPECS_M[version]!;
  const encoder = new TextEncoder();
  const utf8 = encoder.encode(text);
  const dataLen = utf8.length;
  const lengthBits = version <= 9 ? 8 : 16;

  const bits: number[] = [];
  function pushBits(val: number, count: number) {
    for (let i = count - 1; i >= 0; i--) {
      bits.push((val >> i) & 1);
    }
  }

  // Byte mode indicator: 0100
  pushBits(0b0100, 4);
  pushBits(dataLen, lengthBits);
  for (let i = 0; i < dataLen; i++) {
    pushBits(utf8[i], 8);
  }

  // Terminator (up to 4 zeroes)
  const maxBits = spec.totalData * 8;
  const termLen = Math.min(4, maxBits - bits.length);
  for (let i = 0; i < termLen; i++) {
    bits.push(0);
  }

  // Pad to multiple of 8
  while (bits.length % 8 !== 0) {
    bits.push(0);
  }

  // Pad bytes: 0xEC and 0x11 alternating
  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (bits.length < maxBits) {
    pushBits(padBytes[padIdx % 2], 8);
    padIdx++;
  }

  const dataCodewords = new Uint8Array(spec.totalData);
  for (let i = 0; i < spec.totalData; i++) {
    let byteVal = 0;
    for (let b = 0; b < 8; b++) {
      byteVal = (byteVal << 1) | bits[i * 8 + b];
    }
    dataCodewords[i] = byteVal;
  }

  const numBlocks = spec.g1Blocks + spec.g2Blocks;
  const blocksData: Uint8Array[] = [];
  const blocksEc: Uint8Array[] = [];

  let offset = 0;
  for (let i = 0; i < spec.g1Blocks; i++) {
    const slice = dataCodewords.slice(offset, offset + spec.g1Data);
    offset += spec.g1Data;
    blocksData.push(slice);
    blocksEc.push(rsComputeRemainder(slice, spec.ecPerBlock));
  }
  for (let i = 0; i < spec.g2Blocks; i++) {
    const slice = dataCodewords.slice(offset, offset + spec.g2Data);
    offset += spec.g2Data;
    blocksData.push(slice);
    blocksEc.push(rsComputeRemainder(slice, spec.ecPerBlock));
  }

  const finalSequence: number[] = [];
  const maxDataBlockLen = Math.max(spec.g1Data, spec.g2Data || 0);
  for (let i = 0; i < maxDataBlockLen; i++) {
    for (let b = 0; b < numBlocks; b++) {
      if (i < blocksData[b].length) {
        finalSequence.push(blocksData[b][i]);
      }
    }
  }

  for (let i = 0; i < spec.ecPerBlock; i++) {
    for (let b = 0; b < numBlocks; b++) {
      finalSequence.push(blocksEc[b][i]);
    }
  }

  return new Uint8Array(finalSequence);
}

interface MatrixObj {
  size: number;
  matrix: (number | null)[][];
  isFunction: boolean[][];
}

function create2DArray<T>(size: number, initial: T): T[][] {
  const result: T[][] = [];
  for (let r = 0; r < size; r++) {
    const row: T[] = [];
    for (let c = 0; c < size; c++) {
      row.push(initial);
    }
    result.push(row);
  }
  return result;
}

function createMatrix(version: number): MatrixObj {
  const size = 17 + 4 * version;
  const matrix: (number | null)[][] = create2DArray<number | null>(size, null);
  const isFunction: boolean[][] = create2DArray<boolean>(size, false);

  function setModule(r: number, c: number, val: boolean, func = true) {
    matrix[r][c] = val ? 1 : 0;
    if (func) isFunction[r][c] = true;
  }

  function placeFinder(top: number, left: number) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isDark = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
        setModule(top + r, left + c, isDark);
      }
    }
    // White Separator
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const row = top + r;
        const col = left + c;
        if (row >= 0 && row < size && col >= 0 && col < size) {
          if (!isFunction[row][col]) {
            setModule(row, col, false);
          }
        }
      }
    }
  }

  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    if (!isFunction[6][i]) setModule(6, i, i % 2 === 0);
    if (!isFunction[i][6]) setModule(i, 6, i % 2 === 0);
  }

  // Alignment patterns
  const spec = QR_SPECS_M[version]!;
  const coords = spec.align;
  for (const r of coords) {
    for (const c of coords) {
      if (isFunction[r][c]) continue;
      for (let dr = -2; dr <= 2; dr++) {
        for (let dc = -2; dc <= 2; dc++) {
          const isBlack = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
          setModule(r + dr, c + dc, isBlack);
        }
      }
    }
  }

  // Dark module
  setModule(4 * version + 9, 8, true);

  function markFunc(r: number, c: number) {
    if (r >= 0 && r < size && c >= 0 && c < size) {
      isFunction[r][c] = true;
    }
  }

  // Reserve format information area
  for (let i = 0; i < 9; i++) {
    markFunc(8, i);
    markFunc(i, 8);
  }
  for (let i = 0; i < 8; i++) {
    markFunc(8, size - 1 - i);
    markFunc(size - 1 - i, 8);
  }

  return { size, matrix, isFunction };
}

function placeData(matrixObj: MatrixObj, codewords: Uint8Array) {
  const { size, matrix, isFunction } = matrixObj;
  let bitIdx = 0;
  const totalBits = codewords.length * 8;

  let right = size - 1;
  let upward = true;

  while (right > 0) {
    if (right === 6) right--;
    const colList = [right, right - 1];
    const rowList = upward
      ? Array.from({ length: size }, (_, i) => size - 1 - i)
      : Array.from({ length: size }, (_, i) => i);

    for (const r of rowList) {
      for (const c of colList) {
        if (!isFunction[r][c]) {
          let bit = 0;
          if (bitIdx < totalBits) {
            const byteIdx = Math.floor(bitIdx / 8);
            const b = 7 - (bitIdx % 8);
            bit = (codewords[byteIdx] >> b) & 1;
            bitIdx++;
          }
          matrix[r][c] = bit;
        }
      }
    }
    right -= 2;
    upward = !upward;
  }
}

// Precomputed 15-bit format information for EC Level M, masks 0..7
const FORMAT_INFO_M = [
  0b101010000010010, // mask 0
  0b101000100111101, // mask 1
  0b101111001101100, // mask 2
  0b101101101000011, // mask 3
  0b100010111111001, // mask 4
  0b100000011010110, // mask 5
  0b100111110000111, // mask 6
  0b100101010101000, // mask 7
];

function applyMaskAndFormat(matrixObj: MatrixObj, maskIdx: number): boolean[][] {
  const { size, matrix, isFunction } = matrixObj;
  const result: boolean[][] = create2DArray<boolean>(size, false);

  function isMasked(r: number, c: number): boolean {
    switch (maskIdx) {
      case 0: return (r + c) % 2 === 0;
      case 1: return r % 2 === 0;
      case 2: return c % 3 === 0;
      case 3: return (r + c) % 3 === 0;
      case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5: return ((r * c) % 2) + ((r * c) % 3) === 0;
      case 6: return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0;
      case 7: return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0;
      default: return false;
    }
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFunction[r][c]) {
        result[r][c] = (matrix[r][c] || 0) === 1;
      } else {
        const flip = isMasked(r, c);
        const original = (matrix[r][c] || 0) === 1;
        result[r][c] = flip ? !original : original;
      }
    }
  }

  // Format info placement
  const bits = FORMAT_INFO_M[maskIdx];
  const tlCoords = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5],
    [8, 7], [8, 8], [7, 8], [5, 8], [4, 8], [3, 8],
    [2, 8], [1, 8], [0, 8]
  ];
  for (let i = 0; i < 15; i++) {
    const bit = ((bits >> (14 - i)) & 1) === 1;
    const [r, c] = tlCoords[i];
    result[r][c] = bit;
  }

  // Around top-right & bottom-left
  for (let i = 0; i < 7; i++) {
    const bit = ((bits >> (14 - i)) & 1) === 1;
    result[size - 1 - i][8] = bit;
  }
  for (let i = 0; i < 8; i++) {
    const bit = ((bits >> (7 - i)) & 1) === 1;
    result[8][size - 8 + i] = bit;
  }

  return result;
}

/**
 * Generate 2D boolean matrix of QR Code modules (true = dark, false = light)
 */
export function generateQRCodeMatrix(text: string): boolean[][] {
  if (!text) {
    return create2DArray<boolean>(21, false);
  }
  const version = selectVersion(new TextEncoder().encode(text).length);
  const codewords = encodeData(text, version);
  const matrixObj = createMatrix(version);
  placeData(matrixObj, codewords);
  return applyMaskAndFormat(matrixObj, 0);
}

export interface QRCodeRenderOptions {
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  margin?: number;
}

/**
 * Generate pure SVG string of QR code
 */
export function generateQRCodeSVG(text: string, options: QRCodeRenderOptions = {}): string {
  const {
    size = 260,
    foregroundColor = '#0f172a',
    backgroundColor = '#ffffff',
    margin = 4,
  } = options;

  const matrix = generateQRCodeMatrix(text);
  const moduleCount = matrix.length;
  const viewBoxSize = moduleCount + margin * 2;
  const rects: string[] = [];

  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      if (matrix[r][c]) {
        rects.push(`<rect x="${c + margin}" y="${r + margin}" width="1" height="1" fill="${foregroundColor}"/>`);
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" width="${size}" height="${size}">
  <rect width="${viewBoxSize}" height="${viewBoxSize}" fill="${backgroundColor}"/>
  ${rects.join('')}
</svg>`;
}

/**
 * Render QR code to an HTML canvas element for PNG export
 */
export function renderQRCodeToCanvas(
  canvas: HTMLCanvasElement,
  text: string,
  options: QRCodeRenderOptions = {}
): void {
  const {
    size = 300,
    foregroundColor = '#0f172a',
    backgroundColor = '#ffffff',
    margin = 4,
  } = options;

  const matrix = generateQRCodeMatrix(text);
  const moduleCount = matrix.length;
  const totalGrid = moduleCount + margin * 2;

  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, size, size);

  // Scale
  const cellSize = size / totalGrid;
  ctx.fillStyle = foregroundColor;

  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      if (matrix[r][c]) {
        const x = Math.round((c + margin) * cellSize);
        const y = Math.round((r + margin) * cellSize);
        const w = Math.ceil(cellSize);
        const h = Math.ceil(cellSize);
        ctx.fillRect(x, y, w, h);
      }
    }
  }
}
