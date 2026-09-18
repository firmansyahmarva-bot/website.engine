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
const brokenLinks = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hrefRegex = /href=["'`](\/[a-zA-Z0-9_\-\/]+)["'`#?]/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let rawPath = match[1];
    if (rawPath.startsWith('/_next') || rawPath.startsWith('/api') || rawPath.includes('$')) continue;
    const publicFilePath = path.join(projectRoot, 'public', rawPath);
    if (fs.existsSync(publicFilePath)) {
      continue;
    }
    const normalized = rawPath === '/' ? '/' : rawPath.replace(/\/T/, '');
    if (!existingRoutes.has(normalized)) {
      brokenLinks.push({
        file: path.relative(projectRoot, filePath),
        link: rawPath,
        line: content.substring(0, match.index).split('\n').length
      });
    }
  }
}

function walkSrc(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      walkSrc(path.join(dir, entry.name));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      checkFile(path.join(dir, entry.name));
    }
  }
}

walkSrc(srcDir);

console.log('\n--- BROKEN LINKS FOUND (' + brokenLinks.length + ') ---');
console.log(JSON.stringify(brokenLinks, null, 2));
