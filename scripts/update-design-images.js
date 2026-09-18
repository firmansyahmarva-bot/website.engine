const fs = require('fs');

let content = fs.readFileSync('src/content/designs.ts', 'utf8');

const mapping = {
  'modern-corporate': '/images/design-modern-corporate.webp',
  'premium-corporate': '/images/design-premium-corporate.webp',
  'minimal-business': '/images/design-minimal-business.webp',
  'bold-creative': '/images/design-bold-creative.webp',
  'professional-services': '/images/design-professional-services.webp',
  'industrial': '/images/design-industrial.webp',
  'technology': '/images/design-technology.webp',
  'restaurant': '/images/design-restaurant.webp',
  'training-education': '/images/design-training-education.webp',
  'ecommerce-retail': '/images/design-ecommerce-retail.webp',
};

for (const [id, localUrl] of Object.entries(mapping)) {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?imageUrl:\\s*)'[^']+'`, 'm');
  content = content.replace(regex, `$1'${localUrl}'`);
}

fs.writeFileSync('src/content/designs.ts', content, 'utf8');
console.log('Successfully updated designs.ts with local WebP images');
