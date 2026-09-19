/**
 * Lightweight client-side ZIP generator in pure TypeScript.
 * Zero external dependencies. Uses store mode (compression method 0).
 */

function makeCrcTable(): Uint32Array {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
}

const CRC_TABLE = makeCrcTable();

export function crc32(data: Uint8Array): number {
  let crc = 0 ^ -1;
  for (let i = 0; i < data.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

export interface ZipFileEntry {
  name: string;
  data: Uint8Array;
}

/**
 * Creates a valid ZIP archive Blob from an array of file entries.
 */
export function createZipBlob(files: ZipFileEntry[]): Blob {
  const encoder = new TextEncoder();
  const fileParts: Uint8Array[] = [];
  const cdParts: Uint8Array[] = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = file.data;
    const crc = crc32(dataBytes);
    const size = dataBytes.length;

    // Local file header: 30 bytes
    const localHeader = new Uint8Array(30);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true); // Local header signature
    localView.setUint16(4, 20, true); // Version needed to extract (2.0)
    localView.setUint16(6, 0, true); // General purpose bit flag
    localView.setUint16(8, 0, true); // Compression method (0 = Stored)
    localView.setUint16(10, 0, true); // File last mod time
    localView.setUint16(12, 0, true); // File last mod date
    localView.setUint32(14, crc, true); // CRC-32
    localView.setUint32(18, size, true); // Compressed size
    localView.setUint32(22, size, true); // Uncompressed size
    localView.setUint16(26, nameBytes.length, true); // File name length
    localView.setUint16(28, 0, true); // Extra field length

    fileParts.push(localHeader, nameBytes, dataBytes);

    // Central directory header: 46 bytes
    const cdHeader = new Uint8Array(46);
    const cdView = new DataView(cdHeader.buffer);
    cdView.setUint32(0, 0x02014b50, true); // Central directory header signature
    cdView.setUint16(4, 20, true); // Version made by
    cdView.setUint16(6, 20, true); // Version needed
    cdView.setUint16(8, 0, true); // Flags
    cdView.setUint16(10, 0, true); // Method (0 = Stored)
    cdView.setUint16(12, 0, true); // Mod time
    cdView.setUint16(14, 0, true); // Mod date
    cdView.setUint32(16, crc, true); // CRC-32
    cdView.setUint32(20, size, true); // Compressed size
    cdView.setUint32(24, size, true); // Uncompressed size
    cdView.setUint16(28, nameBytes.length, true); // Filename length
    cdView.setUint16(30, 0, true); // Extra field length
    cdView.setUint16(32, 0, true); // Comment length
    cdView.setUint16(34, 0, true); // Disk number start
    cdView.setUint16(36, 0, true); // Internal attributes
    cdView.setUint32(38, 0, true); // External attributes
    cdView.setUint32(42, offset, true); // Relative offset of local header

    cdParts.push(cdHeader, nameBytes);
    offset += 30 + nameBytes.length + size;
  }

  const cdOffset = offset;
  let cdSize = 0;
  for (const part of cdParts) {
    cdSize += part.length;
  }

  // End of central directory record: 22 bytes
  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);
  eocdView.setUint32(0, 0x06054b50, true); // EOCD signature
  eocdView.setUint16(4, 0, true); // Disk number
  eocdView.setUint16(6, 0, true); // Disk with CD
  eocdView.setUint16(8, files.length, true); // Number of entries on disk
  eocdView.setUint16(10, files.length, true); // Total entries
  eocdView.setUint32(12, cdSize, true); // Size of central directory
  eocdView.setUint32(16, cdOffset, true); // Offset of central directory
  eocdView.setUint16(20, 0, true); // Comment length

  const allParts = [...fileParts, ...cdParts, eocd];
  const totalLength = allParts.reduce((sum, p) => sum + p.length, 0);
  const combined = new Uint8Array(totalLength);
  let pos = 0;
  for (const part of allParts) {
    combined.set(part, pos);
    pos += part.length;
  }

  return new Blob([combined], { type: 'application/zip' });
}
