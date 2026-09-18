const fs = require('fs');
const path = require('path');

const cityDataDir = path.resolve('scripts', 'city-data');
const batchFiles = [
  'batch1.json',
  'batch2.json',
  'batch3.json',
  'batch4.json',
  'batch5.json',
  'batch6.json',
];

const allCities = [];
const seenSlugs = new Set();
const errors = [];

for (const bf of batchFiles) {
  const filePath = path.join(cityDataDir, bf);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing batch file: ${bf}`);
    continue;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    errors.push(`JSON parse error in ${bf}: ${err.message}`);
    continue;
  }

  if (!Array.isArray(data)) {
    errors.push(`${bf} does not contain an array`);
    continue;
  }

  for (const city of data) {
    if (!city.slug) {
      errors.push(`City missing slug in ${bf}`);
      continue;
    }
    if (seenSlugs.has(city.slug)) {
      errors.push(`Duplicate city slug: ${city.slug}`);
    }
    seenSlugs.add(city.slug);

    // Validate required fields
    const required = [
      'name',
      'slug',
      'province',
      'districts',
      'landmarkContext',
      'localBusinessCulture',
      'dominantPlatformHabit',
      'competitorLandscape',
      'localSearchBehavior',
      'seasonalFactor',
      'connectivityProfile',
      'industryDeepDive',
      'localFaqs',
      'nearbyCitySlugs',
      'relevantIndustrySlugs',
      'typicalPriceExpectation',
      'economicProfile',
      'seoTitle',
      'seoDescription',
      'seoKeywords',
    ];

    for (const req of required) {
      if (!city[req]) {
        errors.push(`City '${city.slug}' in ${bf} is missing required field '${req}'`);
      }
    }

    if (!Array.isArray(city.districts) || city.districts.length < 5) {
      errors.push(`City '${city.slug}' has fewer than 5 districts (${city.districts ? city.districts.length : 0})`);
    }

    if (!Array.isArray(city.industryDeepDive) || city.industryDeepDive.length < 3) {
      errors.push(`City '${city.slug}' has fewer than 3 industryDeepDive entries`);
    }

    if (!Array.isArray(city.localFaqs) || city.localFaqs.length < 5) {
      errors.push(`City '${city.slug}' has fewer than 5 localFaqs (${city.localFaqs ? city.localFaqs.length : 0})`);
    }

    allCities.push(city);
  }
}

if (errors.length > 0) {
  console.error('Validation errors found:');
  errors.forEach(e => console.error(' -', e));
  process.exit(1);
}

console.log(`Validation passed! All ${allCities.length} cities are valid and complete.`);

// Compile into src/content/cities.ts
const header = `import { CityEntity } from '@/types';\n\nexport const CITIES: CityEntity[] = `;
const tsContent = header + JSON.stringify(allCities, null, 2) + `;\n\nexport const INDONESIAN_CITIES = CITIES;\n`;

fs.writeFileSync(path.resolve('src', 'content', 'cities.ts'), tsContent, 'utf8');
console.log(`Successfully compiled src/content/cities.ts with ${allCities.length} cities!`);
