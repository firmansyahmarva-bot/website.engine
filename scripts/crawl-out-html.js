const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const allHtmlFiles = [];

function collectHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      collectHtml(fullPath);
    } else if (entry.name.endsWith('.html')) {
      allHtmlFiles.push(fullPath);
    }
  }
}

collectHtml(outDir);
console.log('Total HTML files to inspect:', allHtmlFiles.length);

// Build set of valid routes
const validRoutes = new Set();
for (const file of allHtmlFiles) {
  let rel = path.relative(outDir, file).replace(/\\/g, '/');
  if (rel === 'index.html') {
    validRoutes.add('/');
  } else if (rel.endsWith('/index.html')) {
    validRoutes.add('/' + rel.replace('/index.html', ''));
  } else if (rel.endsWith('.html')) {
    validRoutes.add('/' + rel.replace('.html', ''));
  }
}

// Add public static files
const publicDir = path.join(__dirname, '..', 'public');
function collectPublic(dir, base = '') {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      collectPublic(path.join(dir, e.name), base + '/' + e.name);
    } else {
      validRoutes.add(base + '/' + e.name);
    }
  }
}
collectPublic(publicDir);

console.log('Total valid endpoints (pages + static assets):', validRoutes.size);

const deadLinks = [];
const linkRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;

for (const htmlPath of allHtmlFiles) {
  const content = fs.readFileSync(htmlPath, 'utf8');
  const relSource = path.relative(outDir, htmlPath).replace(/\\/g, '/');
  
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1];
    
    // Skip external links, tel, mailto, javascript, hash-only
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) continue;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('#')) continue;
    
    // Strip hash and query params
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue; // hash only
    
    // Normalize path
    let normalized = cleanHref;
    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    
    // Check if valid
    if (!validRoutes.has(normalized)) {
      deadLinks.push({
        source: relSource,
        brokenHref: href,
        cleanTarget: normalized
      });
    }
  }
}

console.log('\n=== REAL DEAD LINKS FOUND ACROSS ALL 425 HTML PAGES: ' + deadLinks.length + ' ===');
const uniqueDead = {};
for (const dl of deadLinks) {
  if (!uniqueDead[dl.cleanTarget]) {
    uniqueDead[dl.cleanTarget] = [];
  }
  uniqueDead[dl.cleanTarget].push(dl.source);
}

for (const [target, sources] of Object.entries(uniqueDead)) {
  console.log(`\n404 Target: ${target}`);
  console.log(`  Found in ${sources.length} pages (e.g. ${sources.slice(0, 3).join(', ')})`);
}