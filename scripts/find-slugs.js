const fs = require('fs');
const glossary = fs.readFileSync('src/content/glossary.ts', 'utf8');
const slugRegex = /slug:\ ([^''"]+)['"]/g
let m;
const slugs = [];
while ((m = slugRegex.exec(glossary)) !== null) {
  slugs.push(m[1]);
}
for (const s of slugs) {
  if (s.includes('schema') || s.includes('ssg') || s.includes('static') || s.includes('conversion') || s.includes('konversi') || s.includes('cvr')) {
    console.log('GLOSSARY MATCH:', s);
  }
}

const cities = fs.readFileSync('src/content/cities.ts', 'utf8');
while ((m = slugRegex.exec(cities)) !== null) {
  if (m[1].includes('jakarta')) {
    console.log('CITY MATCH:', m[1]);
  }
}
