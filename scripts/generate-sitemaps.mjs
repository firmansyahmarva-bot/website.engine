import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://jasawebsite.net';
const currentDate = new Date().toISOString().split('T')[0];

function buildUrlSet(urls) {
  const items = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod || currentDate}</lastmod>
    <changefreq>${u.changefreq || 'weekly'}</changefreq>
    <priority>${u.priority || '0.8'}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

function buildSitemapIndex(sitemaps) {
  const items = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${s}</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

async function run() {
  const publicDir = path.join(__dirname, '../public');

  // 1. Core pages
  const coreUrls = [
    { loc: `${SITE_URL}/`, priority: '1.0' },
    { loc: `${SITE_URL}/website-packages`, priority: '0.95' },
    { loc: `${SITE_URL}/pricing`, priority: '0.95' },
    { loc: `${SITE_URL}/audit-gratis`, priority: '0.95' },
    { loc: `${SITE_URL}/configure`, priority: '0.9' },
    { loc: `${SITE_URL}/designs`, priority: '0.9' },
    { loc: `${SITE_URL}/showcase`, priority: '0.9' },
    { loc: `${SITE_URL}/panduan`, priority: '0.9' },
    { loc: `${SITE_URL}/perbandingan`, priority: '0.9' },
    { loc: `${SITE_URL}/biaya`, priority: '0.9' },
    { loc: `${SITE_URL}/tools`, priority: '0.9' },
    { loc: `${SITE_URL}/components`, priority: '0.8' },
    { loc: `${SITE_URL}/code`, priority: '0.8' },
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), buildUrlSet(coreUrls), 'utf8');

  // 2. Panduan (Glossary)
  let panduanUrls = [];
  const glossaryPath = path.join(__dirname, '../src/content/glossary.ts');
  if (fs.existsSync(glossaryPath)) {
    const content = fs.readFileSync(glossaryPath, 'utf8');
    const slugMatches = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    const uniqueSlugs = [...new Set(slugMatches)];
    panduanUrls = uniqueSlugs.map((slug) => ({
      loc: `${SITE_URL}/panduan/${slug}`,
      priority: '0.85',
      changefreq: 'monthly',
    }));
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-panduan.xml'), buildUrlSet(panduanUrls), 'utf8');

  // 3. Kota (Cities)
  let kotaUrls = [];
  const citiesPath = path.join(__dirname, '../src/content/cities.ts');
  if (fs.existsSync(citiesPath)) {
    const content = fs.readFileSync(citiesPath, 'utf8');
    const slugMatches = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    const uniqueSlugs = [...new Set(slugMatches)];
    kotaUrls = uniqueSlugs.map((slug) => ({
      loc: `${SITE_URL}/jasa-pembuatan-website-${slug}`,
      priority: '0.85',
    }));
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-kota.xml'), buildUrlSet(kotaUrls), 'utf8');

  // 4. Showcase & Demos
  const showcaseSubs = ['navbar', 'footer', 'hero', 'typography', 'button', 'color', 'animation', 'card', 'form', 'section', 'gallery'];
  const showcaseUrls = showcaseSubs.map((s) => ({ loc: `${SITE_URL}/showcase/${s}`, priority: '0.8' }));
  const designsPath = path.join(__dirname, '../src/content/designs.ts');
  if (fs.existsSync(designsPath)) {
    const content = fs.readFileSync(designsPath, 'utf8');
    const demoSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(demoSlugs)].forEach((slug) => {
      showcaseUrls.push({ loc: `${SITE_URL}/demos/${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-showcase.xml'), buildUrlSet(showcaseUrls), 'utf8');

  // 5. Industri & Website Types
  const industriUrls = [
    { loc: `${SITE_URL}/industries`, priority: '0.95', changefreq: 'weekly' }
  ];
  const indPath = path.join(__dirname, '../src/content/industries.ts');
  if (fs.existsSync(indPath)) {
    const content = fs.readFileSync(indPath, 'utf8');
    const indSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(indSlugs)].forEach((slug) => {
      industriUrls.push({ loc: `${SITE_URL}/industries/${slug}`, priority: '0.9' });
    });
  }
  const wtPath = path.join(__dirname, '../src/content/website-types.ts');
  if (fs.existsSync(wtPath)) {
    const content = fs.readFileSync(wtPath, 'utf8');
    const wtSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(wtSlugs)].forEach((slug) => {
      industriUrls.push({ loc: `${SITE_URL}/website-types/${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-industri.xml'), buildUrlSet(industriUrls), 'utf8');

  // 6. Perbandingan
  const compUrls = [];
  const compPath = path.join(__dirname, '../src/content/comparisons.ts');
  if (fs.existsSync(compPath)) {
    const content = fs.readFileSync(compPath, 'utf8');
    const compSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(compSlugs)].forEach((slug) => {
      compUrls.push({ loc: `${SITE_URL}/perbandingan/${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-perbandingan.xml'), buildUrlSet(compUrls), 'utf8');

  // 7. Biaya
  const biayaUrls = [];
  const biayaPath = path.join(__dirname, '../src/content/costs.ts');
  if (fs.existsSync(biayaPath)) {
    const content = fs.readFileSync(biayaPath, 'utf8');
    const costSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(costSlugs)].forEach((slug) => {
      biayaUrls.push({ loc: `${SITE_URL}/biaya/${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-biaya.xml'), buildUrlSet(biayaUrls), 'utf8');

  // 8. Tools
  const toolUrls = [];
  const toolsPath = path.join(__dirname, '../src/content/tools.ts');
  if (fs.existsSync(toolsPath)) {
    const content = fs.readFileSync(toolsPath, 'utf8');
    const toolSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(toolSlugs)].forEach((slug) => {
      toolUrls.push({ loc: `${SITE_URL}/tools/${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-tools.xml'), buildUrlSet(toolUrls), 'utf8');

  // 9. Matrix (Industry x City)
  const matrixUrls = [];
  const matrixPath = path.join(__dirname, '../src/content/matrix.ts');
  if (fs.existsSync(matrixPath)) {
    const content = fs.readFileSync(matrixPath, 'utf8');
    const mSlugs = [...content.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    [...new Set(mSlugs)].forEach((slug) => {
      matrixUrls.push({ loc: `${SITE_URL}/jasa-website-${slug}`, priority: '0.85' });
    });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap-matrix.xml'), buildUrlSet(matrixUrls), 'utf8');

  // 10. English Locale
  const enUrls = [
    { loc: `${SITE_URL}/en`, priority: '0.9' },
    { loc: `${SITE_URL}/en/website-packages`, priority: '0.85' },
    { loc: `${SITE_URL}/en/pricing`, priority: '0.85' },
    { loc: `${SITE_URL}/en/designs`, priority: '0.85' },
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), buildUrlSet(enUrls), 'utf8');

  // 11. Root Sitemap Index
  const sitemapList = [
    `${SITE_URL}/sitemap-pages.xml`,
    `${SITE_URL}/sitemap-panduan.xml`,
    `${SITE_URL}/sitemap-kota.xml`,
    `${SITE_URL}/sitemap-showcase.xml`,
    `${SITE_URL}/sitemap-industri.xml`,
    `${SITE_URL}/sitemap-perbandingan.xml`,
    `${SITE_URL}/sitemap-biaya.xml`,
    `${SITE_URL}/sitemap-tools.xml`,
    `${SITE_URL}/sitemap-matrix.xml`,
    `${SITE_URL}/sitemap-en.xml`,
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildSitemapIndex(sitemapList), 'utf8');

  console.log(`Generated modular XML sitemaps:
- sitemap-pages.xml (${coreUrls.length})
- sitemap-panduan.xml (${panduanUrls.length})
- sitemap-kota.xml (${kotaUrls.length})
- sitemap-showcase.xml (${showcaseUrls.length})
- sitemap-industri.xml (${industriUrls.length})
- sitemap-perbandingan.xml (${compUrls.length})
- sitemap-biaya.xml (${biayaUrls.length})
- sitemap-tools.xml (${toolUrls.length})
- sitemap-matrix.xml (${matrixUrls.length})
- sitemap-en.xml (${enUrls.length})
- sitemap.xml (index pointing to all 10 sub-sitemaps)`);
}

run();