const fs = require('fs');

const indRaw = fs.readFileSync('src/content/industries.ts', 'utf8');
const validInd = new Set();
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = slugRegex.exec(indRaw)) !== null) {
  validInd.add(m[1]);
}

const citiesRaw = fs.readFileSync('src/content/cities.ts', 'utf8');
const diveRegex = /"industrySlug":\s*"([^"]+)"/g;
const invalidDives = new Map();

while ((m = diveRegex.exec(citiesRaw)) !== null) {
  const slug = m[1];
  if (!validInd.has(slug)) {
    invalidDives.set(slug, (invalidDives.get(slug) || 0) + 1);
  }
}

console.log('Invalid industrySlug in cities.ts:');
for (const [slug, count] of invalidDives.entries()) {
  console.log(`  ${slug}: ${count} occurrences`);
}