const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'out');
const existingRoutes = new Set();

function walkOut(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      walkOut(path.join(dir, entry.name), baseRoute + '/' + entry.name);
    } else if (entry.name.endsWith('.html')) {
      const routeName = entry.name === 'index.html' 
        ? (baseRoute || '/') 
        : baseRoute + '/' + entry.name.replace('.html', '');
      existingRoutes.add(routeName);
    }
  }
}

walkOut(outDir);
console.log('Total valid routes in out/:', existingRoutes.size);

const srcDir = path.join(projectRoot, 'src');
const issues = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(projectRoot, filePath);

  // 1. Check hrefs: /panduan/..., /jasa-..., /showcase/..., etc.
  const hrefRegex = /href=["'`](\/[a-zA-Z0-9_\-\/]+)["ig`?]/g;
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    let rawPath = m[1];
    if (rawPath.startsWith('/_next') || rawPath.startsWith('/api') || rawPath.includes('$')) continue;
    if (relPath === 'src\\content\\code-examples.ts') continue; // dummy code snippets
    const publicFilePath = path.join(projectRoot, 'public', rawPath);
    if (fs.existsSync(publicFilePath)) continue;
    const normalized = rawPath === '/' ? '/' : rawPath.replace(/\/$/, '');
    if (!existingRoutes.has(normalized)) {
      issues.push({ type: 'href', file: relPath, link: rawPath });
    }
  }
}

function walkSrc(absDir) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      walkSrc(path.join(absDir, entry.name));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      checkFile(path.join(absDir, entry.name));
    }
  }
}

walkSrc(srcDir);

console.log('\n=== BROKEN LINKS ISMUES (' + issues.length + ') ===');
for (const iss of issues) {
  console.log([iss.type], iss.file, '->' + iss.link);
}
