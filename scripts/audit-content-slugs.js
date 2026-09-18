const fs = require('fs');

const glossaryRaw = fs.readFileSync('src/content/glossary.ts', 'utf8');
const slugs = new Set();
const slugRegex = /"slug":\s*"([^"]+)"/g;
let m;
while ((m = slugRegex.exec(glossaryRaw)) !== null) {
  slugs.add(m[1]);
}
console.log('Total glossary entries:', slugs.size);

const relRegex = /"relatedSlugs":\s*\[([^\]]*)\]/gs;
let broken = 0;
let rm;
while ((rm = relRegex.exec(glossaryRaw)) !== null) {
  const items = rm[1].match(/"([^"]+)"/g) || [];
  for (const item of items) {
    const s = item.replace(/"/g, '');
    if (!slugs.has(s)) {
      console.log('Broken related slug in glossary:', s);
      broken++;
    }
  }
}
console.log('Total broken relatedSlugs in glossary:', broken);

const citiesRaw = fs.readFileSync('src/content/cities.ts', 'utf8');
const citySlugs = new Set();
while ((m = slugRegex.exec(citiesRaw)) !== null) {
  citySlugs.add(m[1]);
}
console.log('Total cities:', citySlugs.size);

const nearbyRegex = /"nearbyCitySlugs":\s*\[([^\]]*)\]/gs;
let brokenCities = 0;
while ((rm = nearbyRegex.exec(citiesRaw)) !== null) {
  const items = rm[1].match(/"([^"]+)"/g) || [];
  for (const item of items) {
    const s = item.replace(/"/g, '');
    if (!citySlugs.has(s)) {
      console.log('Broken nearby city slug:', s);
      brokenCities++;
    }
  }
}
console.log('Total broken nearby cities:', brokenCities);