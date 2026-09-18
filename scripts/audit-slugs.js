const fs = require('fs');

const txt = fs.readFileSync('src/content/glossary.ts', 'utf8');
const slugs = [...txt.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total glossary entries:', slugs.length);

const cannibal = slugs.filter(s => s.includes('kanibal') || s.includes('cannibal'));
console.log('Cannibal entries:', cannibal);

// Check duplicate or near duplicate slugs
const sorted = [...slugs].sort();
const nearDups = [];
for (let i = 0; i < sorted.length - 1; i++) {
  if (sorted[i] === sorted[i + 1]) {
    nearDups.push(['EXACT DUP', sorted[i]]);
  }
}
console.log('Duplicates:', nearDups);
