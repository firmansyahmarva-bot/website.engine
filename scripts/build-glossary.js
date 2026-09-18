const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'glossary-data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).sort();

let allEntries = [];
for (const f of files) {
  const fullPath = path.join(dataDir, f);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  allEntries = allEntries.concat(data);
}

const header = `import { GlossaryEntry } from '@/types';\n\nexport const GLOSSARY: GlossaryEntry[] = `;
const body = JSON.stringify(allEntries, null, 2);
const footer = `;\n`;

fs.writeFileSync(path.join(__dirname, '../src/content/glossary.ts'), header + body + footer, 'utf8');
console.log('Successfully compiled glossary.ts with ' + allEntries.length + ' entries.');
