const fs = require('fs');
const path = require('path');

// Read compiled cities
const citiesCode = fs.readFileSync('src/content/cities.ts', 'utf8');
// Evaluate cities array
const citiesMatch = citiesCode.match(/export const CITIES: CityEntity\[\] = (\[[\s\S]*?\]);\s*export const INDONESIAN_CITIES/);
if (!citiesMatch) {
  console.error('Could not extract CITIES array from src/content/cities.ts');
  process.exit(1);
}

const cities = eval(citiesMatch[1]);
console.log(`Loaded ${cities.length} cities for overlap audit.`);

// Function to generate the full plain-text string of a city page
function generateCityPageText(city) {
  const parts = [];
  parts.push(`Jasa Pembuatan Website ${city.name}: Arsitektur Digital Modern untuk Ekosistem Bisnis ${city.name}`);
  parts.push(city.economicProfile);
  parts.push(city.localBusinessCulture);
  parts.push(city.dominantPlatformHabit);
  parts.push(city.landmarkContext);
  parts.push(city.districts.join(' '));
  parts.push(city.competitorLandscape);
  parts.push(city.seasonalFactor);
  parts.push(city.connectivityProfile);

  for (const dive of city.industryDeepDive) {
    parts.push(`Sektor ${dive.industrySlug} di ${city.name}`);
    parts.push(dive.localAngle);
  }

  for (const faq of city.localFaqs) {
    parts.push(faq.question);
    parts.push(faq.answer);
  }

  // Add shared boilerplate (exact text from the template)
  parts.push("Pilihan Paket Pembuatan Website Standar Harga Resmi");
  parts.push("Paket Starter UMKM Rp 1.250.000 Waktu pengerjaan 4 hari kerja. 3 Halaman Lengkap Responsif Ponsel & Tablet Tombol WhatsApp Otomatis Setup SEO Google & SSL");
  parts.push("Paket Professional Business Rp 2.950.000 Waktu pengerjaan 7 hari kerja. 7 Halaman Lengkap Responsif Ponsel & Tablet Tombol WhatsApp Otomatis Setup SEO Google & SSL");
  parts.push("Paket Custom Enterprise Rp 6.500.000 Waktu pengerjaan 14 hari kerja. Halaman Dinamis Tanpa Batas Integrasi CRM & Sistem Kustom SLA Prioritas");
  parts.push("Pertanyaan yang Sering Diajukan Pemilik Bisnis Rencanakan Website Bisnis Isi formulir ringkas di bawah. Tim teknis kami akan merespons estimasi pengerjaan dalam 15 menit. Konsultasi Gratis");

  return parts.join('\n');
}

// Tokenize text into normalized words (lowercased, alphanumeric)
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

// 3-gram word sequence for semantic & phrase overlap
function getNGrams(tokens, n = 3) {
  const ngrams = new Set();
  for (let i = 0; i <= tokens.length - n; i++) {
    ngrams.add(tokens.slice(i, i + n).join(' '));
  }
  return ngrams;
}

// Line overlap (exact line match after trim)
function getLineOverlap(textA, textB) {
  const linesA = new Set(textA.split('\n').map(l => l.trim().toLowerCase()).filter(l => l.length > 10));
  const linesB = new Set(textB.split('\n').map(l => l.trim().toLowerCase()).filter(l => l.length > 10));
  
  let shared = 0;
  for (const l of linesA) {
    if (linesB.has(l)) shared++;
  }
  const minLines = Math.min(linesA.size, linesB.size);
  return minLines > 0 ? (shared / minLines) * 100 : 0;
}

// Measure 10 random city pairs
const randomPairs = [
  ['jakarta', 'medan'],
  ['salatiga', 'tarakan'],
  ['surabaya', 'makassar'],
  ['bandung', 'semarang'],
  ['batam', 'denpasar'],
  ['balikpapan', 'pekanbaru'],
  ['palembang', 'pontianak'],
  ['yogyakarta', 'cirebon'],
  ['jember', 'manado'],
  ['ambon', 'jayapura'],
];

console.log('\n================================================================================');
console.log('              CITY PAIR DUPLICATION & OVERLAP AUDIT (TARGET: < 45%)            ');
console.log('================================================================================');
console.log('| City A             | City B             | Line Overlap | 3-gram Overlap | Status  |');
console.log('|--------------------|--------------------|--------------|----------------|---------|');

let maxLineOverlap = 0;
let maxNGramOverlap = 0;
let passedAll = true;

for (const [slugA, slugB] of randomPairs) {
  const cityA = cities.find(c => c.slug === slugA);
  const cityB = cities.find(c => c.slug === slugB);

  if (!cityA || !cityB) {
    console.error(`Missing city: ${slugA} or ${slugB}`);
    continue;
  }

  const textA = generateCityPageText(cityA);
  const textB = generateCityPageText(cityB);

  // Line overlap
  const lineOverlapPct = getLineOverlap(textA, textB);
  if (lineOverlapPct > maxLineOverlap) maxLineOverlap = lineOverlapPct;

  // 3-gram overlap
  const tokensA = tokenize(textA);
  const tokensB = tokenize(textB);
  const ngramsA = getNGrams(tokensA, 3);
  const ngramsB = getNGrams(tokensB, 3);

  let sharedNGrams = 0;
  for (const ng of ngramsA) {
    if (ngramsB.has(ng)) sharedNGrams++;
  }
  const minNGrams = Math.min(ngramsA.size, ngramsB.size);
  const ngramOverlapPct = minNGrams > 0 ? (sharedNGrams / minNGrams) * 100 : 0;
  if (ngramOverlapPct > maxNGramOverlap) maxNGramOverlap = ngramOverlapPct;

  const status = (lineOverlapPct <= 45 && ngramOverlapPct <= 45) ? 'PASS ✅' : 'FAIL ❌';
  if (status.includes('FAIL')) passedAll = false;

  console.log(
    `| ${cityA.name.padEnd(18)} | ${cityB.name.padEnd(18)} | ${lineOverlapPct.toFixed(1).padStart(10)}%  | ${ngramOverlapPct.toFixed(1).padStart(12)}%  | ${status.padEnd(7)} |`
  );
}

console.log('================================================================================');
console.log(`Max Line Overlap   : ${maxLineOverlap.toFixed(1)}% (Limit: 45.0%)`);
console.log(`Max 3-gram Overlap : ${maxNGramOverlap.toFixed(1)}% (Limit: 45.0%)`);
console.log(`Overall Gate Result: ${passedAll ? 'ALL 10 PAIRS PASSED (< 45%)' : 'GATE FAILED'}`);
console.log('================================================================================\n');

if (!passedAll) process.exit(1);
