const fs = require('fs');
const path = require('path');

const validTiers = ['metro', 'large', 'mid'];

const requiredKeys = [
  'name',
  'slug',
  'province',
  'tier',
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
  'seoKeywords'
];

const batchFiles = [
  'scripts/city-data/batch1.json',
  'scripts/city-data/batch2.json',
  'scripts/city-data/batch3.json',
  'scripts/city-data/batch4.json',
  'scripts/city-data/batch5.json',
  'scripts/city-data/batch6.json'
];

const expectedBatches = {
  'batch1.json': [
    'jakarta',
    'surabaya',
    'bandung',
    'medan',
    'semarang',
    'makassar',
    'palembang',
    'tangerang',
    'tangerang-selatan',
    'bekasi'
  ],
  'batch2.json': [
    'depok',
    'bogor',
    'batam',
    'pekanbaru',
    'bandar-lampung',
    'malang',
    'padang',
    'denpasar',
    'samarinda',
    'balikpapan'
  ],
  'batch3.json': [
    'banjarmasin',
    'pontianak',
    'cimahi',
    'jambi',
    'surakarta',
    'yogyakarta',
    'cilegon',
    'serang',
    'cirebon',
    'sukabumi'
  ],
  'batch4.json': [
    'tasikmalaya',
    'karawang',
    'purwokerto',
    'tegal',
    'pekalongan',
    'kudus',
    'magelang',
    'kediri',
    'sidoarjo',
    'gresik'
  ],
  'batch5.json': [
    'jember',
    'banyuwangi',
    'mataram',
    'kupang',
    'manado',
    'palu',
    'kendari',
    'ambon',
    'jayapura',
    'sorong',
    'cilacap'
  ],
  'batch6.json': [
    'madiun',
    'probolinggo',
    'pasuruan',
    'mojokerto',
    'blitar',
    'batu',
    'salatiga',
    'tarakan',
    'bontang',
    'pangkalpinang',
    'tanjung-pinang'
  ]
};

let totalErrors = 0;
const allSlugs = new Set();

batchFiles.forEach((file) => {
  const basename = path.basename(file);
  console.log(`\nValidating ${file}...`);
  if (!fs.existsSync(file)) {
    console.error(`ERROR: File ${file} does not exist!`);
    totalErrors++;
    return;
  }

  let data;
  try {
    const content = fs.readFileSync(file, 'utf8');
    data = JSON.parse(content);
  } catch (err) {
    console.error(`ERROR: File ${file} is not valid JSON!`, err.message);
    totalErrors++;
    return;
  }

  if (!Array.isArray(data)) {
    console.error(`ERROR: ${file} root is not an array!`);
    totalErrors++;
    return;
  }

  const expectedSlugs = expectedBatches[basename];
  if (data.length !== expectedSlugs.length) {
    console.error(`ERROR: ${file} has ${data.length} items, expected ${expectedSlugs.length}!`);
    totalErrors++;
  }
  const fileSlugs = data.map((c) => c.slug);
  console.log(`  Slugs: ${fileSlugs.join(', ')}`);

  expectedSlugs.forEach((expectedSlug, idx) => {
    if (fileSlugs[idx] !== expectedSlug) {
      console.error(
        `  ERROR: Item ${idx} has slug '${fileSlugs[idx]}', expected '${expectedSlug}'`
      );
      totalErrors++;
    }
  });

  data.forEach((city, idx) => {
    const cityName = city.name || `item-${idx}`;

    if (allSlugs.has(city.slug)) {
      console.error(`  ERROR: Duplicate slug detected: '${city.slug}'`);
      totalErrors++;
    }
    allSlugs.add(city.slug);

    requiredKeys.forEach((key) => {
      if (city[key] === undefined || city[key] === null || city[key] === '') {
        console.error(`  ERROR in ${cityName}: Missing or empty key '${key}'`);
        totalErrors++;
      }
    });

    if (!validTiers.includes(city.tier)) {
      console.error(
        `  ERROR in ${cityName}: Invalid tier '${city.tier}'. Must be one of ${validTiers.join(', ')}`
      );
      totalErrors++;
    }

    if (!Array.isArray(city.districts) || city.districts.length < 5 || city.districts.length > 8) {
      console.error(
        `  ERROR in ${cityName}: districts length must be between 5 and 8, got ${city.districts ? city.districts.length : 0}`
      );
      totalErrors++;
    }

    if (!Array.isArray(city.industryDeepDive) || city.industryDeepDive.length !== 3) {
      console.error(
        `  ERROR in ${cityName}: industryDeepDive must have exactly 3 entries, got ${city.industryDeepDive ? city.industryDeepDive.length : 0}`
      );
      totalErrors++;
    } else {
      city.industryDeepDive.forEach((idd, iddIdx) => {
        if (!idd.industrySlug || !idd.localAngle || idd.localAngle.length < 20) {
          console.error(
            `  ERROR in ${cityName}: industryDeepDive[${iddIdx}] is missing industrySlug or localAngle is too short.`
          );
          totalErrors++;
        }
      });
    }

    if (!Array.isArray(city.localFaqs) || city.localFaqs.length !== 5) {
      console.error(
        `  ERROR in ${cityName}: localFaqs must have exactly 5 entries, got ${city.localFaqs ? city.localFaqs.length : 0}`
      );
      totalErrors++;
    } else {
      city.localFaqs.forEach((faq, faqIdx) => {
        if (!faq.question || !faq.answer || faq.answer.length < 20) {
          console.error(
            `  ERROR in ${cityName}: localFaqs[${faqIdx}] is missing question or answer is too short.`
          );
          totalErrors++;
        }
      });
    }

    if (!Array.isArray(city.nearbyCitySlugs) || city.nearbyCitySlugs.length === 0) {
      console.error(`  ERROR in ${cityName}: nearbyCitySlugs must be a non-empty array.`);
      totalErrors++;
    }

    if (!Array.isArray(city.relevantIndustrySlugs) || city.relevantIndustrySlugs.length === 0) {
      console.error(`  ERROR in ${cityName}: relevantIndustrySlugs must be a non-empty array.`);
      totalErrors++;
    }

    if (!Array.isArray(city.seoKeywords) || city.seoKeywords.length === 0) {
      console.error(`  ERROR in ${cityName}: seoKeywords must be a non-empty array.`);
      totalErrors++;
    }
  });
});

console.log('\n----------------------------------------');
if (totalErrors === 0) {
  console.log('ALL 6 BATCHES ARE VALID JSON AND STRICTLY MATCH THE SCHEMA!');
  console.log(`Total cities validated: ${allSlugs.size}`);
} else {
  console.error(`VALIDATION FAILED WITH ${totalErrors} ERRORS.`);
  process.exit(1);
}
