const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const outDir = path.resolve('public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'hero-preview',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    width: 600,
    height: 380,
  },
  {
    name: 'avatar-budi',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    width: 80,
    height: 80,
  },
  {
    name: 'avatar-linda',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    width: 80,
    height: 80,
  },
  {
    name: 'avatar-hendra',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    width: 80,
    height: 80,
  },
  {
    name: 'design-modern-corporate',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-premium-corporate',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-minimal-business',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-bold-creative',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-professional-services',
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-industrial',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-technology',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-restaurant',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-training-education',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
  {
    name: 'design-ecommerce-retail',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    width: 400,
    height: 240,
  },
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchBuffer(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', (d) => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function fallbackSvg(name, width, height) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="14" font-weight="bold">
      ${name}
    </text>
  </svg>`;
}

async function processAll() {
  for (const item of imagesToDownload) {
    let buf;
    try {
      console.log(`Downloading: ${item.name}...`);
      buf = await fetchBuffer(item.url);
    } catch (err) {
      console.warn(`Fetch failed for ${item.name}, generating fallback:`, err.message);
      buf = Buffer.from(fallbackSvg(item.name, item.width * 2, item.height * 2));
    }

    // 1x WebP
    const path1x = path.join(outDir, `${item.name}.webp`);
    await sharp(buf)
      .resize(item.width, item.height, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path1x);

    // 2x WebP (for Retina displays)
    const path2x = path.join(outDir, `${item.name}@2x.webp`);
    await sharp(buf)
      .resize(item.width * 2, item.height * 2, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path2x);

    console.log(`Saved: ${item.name}.webp (1x and 2x)`);
  }
}

processAll().then(() => console.log('All images converted to local WebP!')).catch(console.error);
