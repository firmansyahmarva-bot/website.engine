import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const appDir = path.join(projectRoot, 'src/app');

// Professional SVG matching JasaWebsite brand (Blue #2563EB with white LayoutTemplate icon)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#1E3A8A" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Rounded App Icon Background -->
  <rect x="24" y="24" width="464" height="464" rx="112" fill="url(#bgGrad)" filter="url(#shadow)"/>
  <rect x="24" y="24" width="464" height="464" rx="112" fill="none" stroke="#60A5FA" stroke-width="4" stroke-opacity="0.5"/>

  <!-- Web Browser Window / Layout Structure -->
  <g transform="translate(96, 96)" fill="none" stroke="#FFFFFF" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
    <!-- Outer Browser Window -->
    <rect x="0" y="0" width="320" height="320" rx="40"/>
    <!-- Top Nav Header Line -->
    <line x1="0" y1="96" x2="320" y2="96"/>
    <!-- Sidebar Column Line -->
    <line x1="112" y1="96" x2="112" y2="320"/>
    <!-- Content Cards -->
    <line x1="168" y1="160" x2="264" y2="160" stroke-width="24" stroke-opacity="0.9"/>
    <line x1="168" y1="224" x2="240" y2="224" stroke-width="24" stroke-opacity="0.6"/>
  </g>

  <!-- Accent Speed Sparkle in Top Right -->
  <circle cx="396" cy="116" r="16" fill="#FBBF24"/>
</svg>`;

async function main() {
  console.log('Generating favicon and icon assets...');

  // 1. Write SVG to public and src/app
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent, 'utf8');
  console.log('✓ Created public/favicon.svg & src/app/icon.svg');

  // 2. Generate PNG sizes
  const svgBuffer = Buffer.from(svgContent);

  // 32x32 PNG for favicon.ico
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), png32);
  console.log('✓ Created public/favicon.ico');

  // 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');

  // 192x192 Android / PWA
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Created public/icon-192.png');

  // 512x512 High-Res
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Created public/icon-512.png');

  console.log('All favicon assets generated successfully!');
}

main().catch(console.error);