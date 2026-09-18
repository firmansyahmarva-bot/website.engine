import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outDir = path.resolve('public', 'og');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(unsafe) {
  return String(unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wordWrap(text, maxChars = 32) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const w of words) {
    if ((currentLine + ' ' + w).trim().length <= maxChars) {
      currentLine = (currentLine + ' ' + w).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = w;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.slice(0, 3); // Max 3 lines
}

function generateSvgOG({ title, subtitle, badge, accent = '#38bdf8', category = 'B2B PLATFORM' }) {
  const titleLines = wordWrap(title, 28);
  const titleFontSize = titleLines.length > 2 ? 40 : 48;
  const lineHeight = titleFontSize * 1.25;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#111827" />
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#glow)" />

  <!-- Subtle grid lines -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="1">
    <path d="M0,70 H1200 M0,140 H1200 M0,210 H1200 M0,280 H1200 M0,350 H1200 M0,420 H1200 M0,490 H1200 M0,560 H1200" />
    <path d="M100,0 V630 M200,0 V630 M300,0 V630 M400,0 V630 M500,0 V630 M600,0 V630 M700,0 V630 M800,0 V630 M900,0 V630 M1000,0 V630 M1100,0 V630" />
  </g>

  <!-- Top Logo & Category Bar -->
  <g transform="translate(80, 70)">
    <rect width="36" height="36" rx="8" fill="url(#accentGrad)" />
    <path d="M10 25 L18 10 L26 25 Z" fill="#ffffff" />
    <text x="50" y="25" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800" letter-spacing="-0.5">
      JasaWebsite<tspan fill="${accent}">.id</tspan>
    </text>
    <rect x="260" y="5" width="${Math.max(140, category.length * 10)}" height="26" rx="13" fill="#1e293b" stroke="#334155" />
    <text x="${260 + Math.max(140, category.length * 10) / 2}" y="22" fill="${accent}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">
      ${escapeXml(category)}
    </text>
  </g>

  <!-- Title & Headline -->
  <g transform="translate(80, 190)">
    ${titleLines
      .map(
        (line, idx) =>
          `<text x="0" y="${idx * lineHeight}" fill="#ffffff" font-family="system-ui, sans-serif" font-size="${titleFontSize}" font-weight="900" letter-spacing="-1">${escapeXml(
            line
          )}</text>`
      )
      .join('\n')}
    <text x="0" y="${titleLines.length * lineHeight + 40}" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20" font-weight="400">
      ${escapeXml(subtitle)}
    </text>
  </g>

  <!-- Badge / Features Card -->
  <g transform="translate(80, 420)">
    <rect x="0" y="0" width="220" height="42" rx="10" fill="#1e293b" stroke="#334155" />
    <text x="110" y="26" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">
      ✓ Next.js 16 + SSG
    </text>

    <rect x="236" y="0" width="240" height="42" rx="10" fill="#1e293b" stroke="#334155" />
    <text x="356" y="26" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">
      ✓ PageSpeed 100/100
    </text>

    <rect x="492" y="0" width="220" height="42" rx="10" fill="#1e293b" stroke="#334155" />
    <text x="602" y="26" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">
      ✓ Handoff WhatsApp
    </text>
  </g>

  <!-- Bottom Bar -->
  <g transform="translate(80, 540)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#334155" stroke-width="1" />
    <text x="0" y="36" fill="#64748b" font-family="system-ui, monospace" font-size="13">
      ${escapeXml(badge || 'Verified Enterprise Platform • Core Web Vitals Guaranteed')}
    </text>
    <text x="1040" y="36" fill="${accent}" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="end">
      jasawebsite.net
    </text>
  </g>
</svg>`;
}

async function renderPng(svg, filename) {
  const targetPath = path.join(outDir, filename);
  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .png({ compressionLevel: 8 })
    .toFile(targetPath);
}

async function main() {
  console.log('Generating 1200x630 PNG Open Graph images for all pages...');
  const tasks = [];

  // 1. Core pages
  const corePages = [
    {
      slug: 'home',
      title: 'Platform Jasa Pembuatan Website & Solusi SEO B2B',
      subtitle: 'Arsitektur Next.js 16 ultra cepat, optimasi Google Search & GEO AI',
      accent: '#2563eb',
      category: 'ENTERPRISE PLATFORM',
    },
    {
      slug: 'website-packages',
      title: 'Paket Pembuatan Website Bisnis & Perusahaan',
      subtitle: 'Pilihan paket Starter UMKM, Professional Business, & Custom Enterprise',
      accent: '#3b82f6',
      category: 'PAKET KOMERSIAL',
    },
    {
      slug: 'pricing',
      title: 'Kalkulator & Struktur Biaya Website Transparan',
      subtitle: 'Breakdown biaya pembuatan website tanpa biaya bulanan tersembunyi',
      accent: '#3b82f6',
      category: 'TRANSPARANSI BIAYA',
    },
    {
      slug: 'configure',
      title: 'Konfigurator Paket Website Mandiri',
      subtitle: 'Simulasikan kebutuhan halaman, bahasa, fitur, dan integrasi CRM',
      accent: '#6366f1',
      category: 'INTERACTIVE TOOL',
    },
    {
      slug: 'designs',
      title: 'Katalog 10 Konsep Desain Arsitektur Visual B2B',
      subtitle: 'Eksplorasi konsep visual korporat, teknologi, advisory, dan ritel',
      accent: '#8b5cf6',
      category: 'KATALOG DESAIN',
    },
    {
      slug: 'showcase',
      title: 'Showcase Komponen UI & Desain Website Modern',
      subtitle: 'Koleksi 11 kategori komponen antarmuka web responsif dan interaktif',
      accent: '#a855f7',
      category: 'SHOWCASE UI',
    },
    {
      slug: 'panduan',
      title: 'Pusat Panduan & Glosarium Website Modern',
      subtitle: 'Ensiklopedia teknis Core Web Vitals, SEO, Next.js, dan konversi',
      accent: '#10b981',
      category: 'KNOWLEDGE HUB',
    },
    {
      slug: 'components',
      title: 'Katalog Komponen UI & Layout Siap Pakai',
      subtitle: 'Komponen modular responsif siap pakai untuk website perusahaan',
      accent: '#06b6d4',
      category: 'KOMPONEN UI',
    },
    {
      slug: 'code',
      title: 'Pustaka Contoh Kode & Arsitektur Teknis',
      subtitle: 'Standar rekayasa kode Next.js, schema JSON-LD, dan optimasi CSS',
      accent: '#0ea5e9',
      category: 'CODE LIBRARY',
    },
    {
      slug: 'audit-gratis',
      title: 'Audit Website & SEO Gratis untuk Bisnis Anda',
      subtitle: 'Analisis komprehensif kecepatan muat, SEO on-page, dan peluang konversi',
      accent: '#f59e0b',
      category: 'FREE AUDIT MAGNET',
    },
  ];

  for (const page of corePages) {
    const svg = generateSvgOG({
      title: page.title,
      subtitle: page.subtitle,
      accent: page.accent,
      category: page.category,
    });
    tasks.push(renderPng(svg, `${page.slug}.png`));
  }

  // 2. Showcase subpages (11)
  const showcaseSubs = [
    'navbar',
    'footer',
    'hero',
    'typography',
    'button',
    'color',
    'animation',
    'card',
    'form',
    'section',
    'gallery',
  ];

  for (const sub of showcaseSubs) {
    const title = `Showcase Komponen: ${sub.charAt(0).toUpperCase() + sub.slice(1)} Web`;
    const svg = generateSvgOG({
      title,
      subtitle: `Pratinjau interaktif variasi ${sub} dengan toggle desktop dan mobile`,
      accent: '#8b5cf6',
      category: 'SHOWCASE KOMPONEN',
    });
    tasks.push(renderPng(svg, `showcase-${sub}.png`));
  }

  // 3. Glossary entries (from glossary.ts)
  try {
    const glossaryRaw = fs.readFileSync('src/content/glossary.ts', 'utf8');
    const glossaryMatches = [...glossaryRaw.matchAll(/"slug":\s*"([^"]+)",[\s\S]*?"term":\s*"([^"]+)"/g)];
    for (const match of glossaryMatches) {
      const gSlug = match[1];
      const gTerm = match[2];
      const svg = generateSvgOG({
        title: gTerm,
        subtitle: `Panduan lengkap, langkah penerapan bisnis, dan tabel evaluasi teknis`,
        accent: '#10b981',
        category: 'GLOSARIUM & PANDUAN',
      });
      tasks.push(renderPng(svg, `panduan-${gSlug}.png`));
    }
  } catch (e) {
    console.warn('Glossary parse warning:', e.message);
  }

  // 4. City entries (from cities.ts)
  try {
    const citiesRaw = fs.readFileSync('src/content/cities.ts', 'utf8');
    const cityMatches = [...citiesRaw.matchAll(/name:\s*'([^']+)',[\s\S]*?slug:\s*'([^']+)'/g)];
    for (const match of cityMatches) {
      const cName = match[1];
      const cSlug = match[2];
      const svg = generateSvgOG({
        title: `Jasa Pembuatan Website ${cName} Profesional`,
        subtitle: `Solusi website bisnis berkecepatan tinggi, SEO lokal, & garansi teknis`,
        accent: '#0284c7',
        category: `LAYANAN KOTA • ${cName.toUpperCase()}`,
      });
      tasks.push(renderPng(svg, `jasa-pembuatan-website-${cSlug}.png`));
    }
  } catch (e) {
    console.warn('Cities parse warning:', e.message);
  }

  // 5. Industry entries (from industries.ts)
  try {
    const indRaw = fs.readFileSync('src/content/industries.ts', 'utf8');
    const indMatches = [...indRaw.matchAll(/name:\s*{\s*id:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'/g)];
    for (const match of indMatches) {
      const indName = match[1];
      const indSlug = match[2];
      const svg = generateSvgOG({
        title: `Jasa Pembuatan Website ${indName}`,
        subtitle: `Arsitektur website spesifik industri dengan fitur dan alur konversi teruji`,
        accent: '#f59e0b',
        category: `INDUSTRI • ${indName.toUpperCase()}`,
      });
      tasks.push(renderPng(svg, `industries-${indSlug}.png`));
    }
  } catch (e) {
    console.warn('Industries parse warning:', e.message);
  }

  // 6. Website Types (from website-types.ts)
  try {
    const typeRaw = fs.readFileSync('src/content/website-types.ts', 'utf8');
    const typeMatches = [...typeRaw.matchAll(/name:\s*{\s*id:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'/g)];
    for (const match of typeMatches) {
      const typeName = match[1];
      const typeSlug = match[2];
      const svg = generateSvgOG({
        title: `Jasa Pembuatan ${typeName}`,
        subtitle: `Rancangan struktur halaman, fitur bawaan, dan estimasi biaya terstandar`,
        accent: '#06b6d4',
        category: `TIPE WEBSITE • ${typeName.toUpperCase()}`,
      });
      tasks.push(renderPng(svg, `website-types-${typeSlug}.png`));
    }
  } catch (e) {
    console.warn('Website types parse warning:', e.message);
  }

  // 7. Perbandingan (from comparisons.ts)
  try {
    const compRaw = fs.readFileSync('src/content/comparisons.ts', 'utf8');
    const compMatches = [...compRaw.matchAll(/slug:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)'/g)];
    for (const match of compMatches) {
      const cSlug = match[1];
      const cTitle = match[2];
      const svg = generateSvgOG({
        title: cTitle,
        subtitle: 'Perbandingan teknis komprehensif, fitur, kelebihan, kekurangan, dan rekomendasi',
        accent: '#6366f1',
        category: 'PERBANDINGAN TEKNOLOGI',
      });
      tasks.push(renderPng(svg, `perbandingan-${cSlug}.png`));
    }
  } catch (e) {
    console.warn('Comparisons OG parse warning:', e.message);
  }

  // 8. Biaya (from costs.ts)
  try {
    const costRaw = fs.readFileSync('src/content/costs.ts', 'utf8');
    const costMatches = [...costRaw.matchAll(/slug:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)'/g)];
    for (const match of costMatches) {
      const cSlug = match[1];
      const cTitle = match[2];
      const svg = generateSvgOG({
        title: cTitle,
        subtitle: 'Panduan rincian biaya, tier harga UMKM vs Korporat, waspada hidden cost, dan ROI',
        accent: '#10b981',
        category: 'PANDUAN BIAYA WEBSITE',
      });
      tasks.push(renderPng(svg, `biaya-${cSlug}.png`));
    }
  } catch (e) {
    console.warn('Cost guides OG parse warning:', e.message);
  }

  // 9. Tools (from tools.ts)
  try {
    const toolRaw = fs.readFileSync('src/content/tools.ts', 'utf8');
    const toolMatches = [...toolRaw.matchAll(/slug:\s*'([^']+)',[\s\S]*?name:\s*'([^']+)'/g)];
    for (const match of toolMatches) {
      const tSlug = match[1];
      const tName = match[2];
      const svg = generateSvgOG({
        title: tName,
        subtitle: 'Alat bantu online gratis tanpa registrasi, cepat, aman, dan instan digunakan',
        accent: '#ec4899',
        category: 'ONLINE FREE TOOL',
      });
      tasks.push(renderPng(svg, `tools-${tSlug}.png`));
    }
  } catch (e) {
    console.warn('Tools OG parse warning:', e.message);
  }

  // 10. English Locale Pages
  const enPages = [
    { slug: 'en', title: 'Global B2B Web Engineering & Architecture', subtitle: 'Next.js 16 SSG, 100/100 Core Web Vitals, & instant conversion workflows', accent: '#3b82f6', category: 'GLOBAL PLATFORM' },
    { slug: 'en-website-packages', title: 'Enterprise Web Development Packages', subtitle: 'Transparent starter, business, and enterprise website tiers in USD & SGD', accent: '#3b82f6', category: 'PACKAGES & PRICING' },
    { slug: 'en-pricing', title: 'Interactive Web Development Cost Calculator', subtitle: 'Simulate pages, add-on modules, and infrastructure pricing in real-time', accent: '#6366f1', category: 'COST ESTIMATOR' },
    { slug: 'en-designs', title: '10 Architectural Visual Design Concepts', subtitle: 'Explore high-converting corporate, technical, editorial, and retail concepts', accent: '#8b5cf6', category: 'DESIGN CATALOG' },
  ];
  for (const page of enPages) {
    const svg = generateSvgOG({
      title: page.title,
      subtitle: page.subtitle,
      accent: page.accent,
      category: page.category,
    });
    tasks.push(renderPng(svg, `${page.slug}.png`));
  }

  // Execute all in parallel batches of 20 to avoid file descriptor limits
  const BATCH_SIZE = 25;
  for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
    const batch = tasks.slice(i, i + BATCH_SIZE);
    await Promise.all(batch);
  }

  console.log(`Successfully generated ${tasks.length} 1200x630 PNG Open Graph images into public/og/`);
}

main().catch(console.error);
