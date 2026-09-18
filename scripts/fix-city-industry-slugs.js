const fs = require('fs');

const path = 'src/content/cities.ts';
let content = fs.readFileSync(path, 'utf8');

const mapping = {
  '"industrySlug": "education"': '"industrySlug": "school"',
  '"industrySlug": "culinary"': '"industrySlug": "restaurant"',
  '"industrySlug": "fishery"': '"industrySlug": "agriculture"',
  '"industrySlug": "textile"': '"industrySlug": "fashion"',
  '"industrySlug": "hospitality"': '"industrySlug": "hotel"',
  '"industrySlug": "furniture"': '"industrySlug": "interior-design"',
  '"industrySlug": "footwear"': '"industrySlug": "manufacturing"',
  '"industrySlug": "mining"': '"industrySlug": "engineering"',
  '"industrySlug": "maritime"': '"industrySlug": "logistics"',
};

let totalReplaced = 0;
for (const [from, to] of Object.entries(mapping)) {
  const matches = (content.match(new RegExp(from, 'g')) || []).length;
  if (matches > 0) {
    content = content.replaceAll(from, to);
    totalReplaced += matches;
    console.log(`Replaced ${from} -> ${to} (${matches} times)`);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Total replaced: ${totalReplaced}`);