const fs = require('fs');
const indRaw = fs.readFileSync('src/content/industries.ts', 'utf8');
const slugs = [];
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = slugRegex.exec(indRaw)) !== null) {
  slugs.push(m[1]);
}
console.log('Valid industry slugs in industries.ts (' + slugs.length + '):');
console.log(slugs.sort().join(', '));