import fs from 'fs';
import path from 'path';

// Import datasets
// Since these are TS files, we can read and extract or import them using ts-node or simple regex / parser
// Let's create an ESM generator that reads the parsed data or extracts cleanly
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function main() {
  // Read glossary entries from built glossary file or scripts/glossary-data
  const glossaryRaw = fs.readFileSync(path.join(rootDir, 'src', 'content', 'glossary.ts'), 'utf-8');
  const citiesRaw = fs.readFileSync(path.join(rootDir, 'src', 'content', 'cities.ts'), 'utf-8');
  const industriesRaw = fs.readFileSync(path.join(rootDir, 'src', 'content', 'industries.ts'), 'utf-8');

  // Build llms.txt (concise standard)
  const llmsSummary = `# WebsitePlatform.id

> Platform Jasa Pembuatan Website & Solusi SEO B2B Berperforma Tinggi di Indonesia.

WebsitePlatform.id mengembangkan website bisnis modern berbasis Next.js 16, React 19, dan Tailwind CSS dengan arsitektur Static Site Generation (SSG). Menghadirkan jaminan skor Google Core Web Vitals 100/100, zero-vulnerability security, optimasi GEO (Generative Engine Optimization), dan alur konversi WhatsApp instan.

## Layanan & Paket Utama

- [Daftar Paket Website](https://websiteplatform.id/website-packages): Pilihan paket Starter UMKM (Rp 1.250.000), Professional Business (Rp 2.950.000), dan Enterprise Custom (Rp 6.500.000+).
- [Transparansi Harga](https://websiteplatform.id/pricing): Breakdown struktur biaya, add-on fitur, dan perbandingan spesifikasi teknis.
- [Kalkulator Konfigurasi Website](https://websiteplatform.id/configure): Simulasi biaya mandiri berdasarkan kebutuhan halaman, bahasa, fitur, dan integrasi CRM.
- [Katalog Desain & Demo](https://websiteplatform.id/designs): 10 konsep arsitektur visual untuk beragam industri (Modern Corporate, Tech SaaS, Luxury, Industrial, dsb.).
- [Showcase Komponen UI](https://websiteplatform.id/showcase): Eksplorasi interaktif navbar, hero, form, tipografi, warna, dan animasi pure CSS.
- [Pusat Panduan & Glosarium](https://websiteplatform.id/panduan): 93 ensiklopedia teknis Core Web Vitals, SEO teknis, Next.js, dan optimasi konversi.

## Jangkauan Wilayah Layanan (62 Kota di Indonesia)

WebsitePlatform.id melayani pembuatan website untuk korporat, B2B, dan UMKM di 62 kota besar dan kabupaten di Indonesia, termasuk Jakarta, Surabaya, Bandung, Medan, Semarang, Makassar, Batam, Denpasar, Balikpapan, Palembang, dan sekitarnya dengan penyesuaian konteks ekonomi lokal dan integrasi Google Maps.

## Keunggulan Arsitektur Teknis

1. **Kecepatan Instan (SSG)**: HTML & Schema dibuat saat build-time, disajikan melalui CDN Edge dengan TTFB < 50ms.
2. **Core Web Vitals Sempurna**: LCP < 1.0s, INP < 50ms, CLS = 0.00.
3. **SEO & GEO Ready**: Skema JSON-LD terstruktur (LocalBusiness, Organization, DefinedTerm, FAQPage, HowTo, TechArticle) untuk pengenalan Google Search dan AI Engine (ChatGPT, Perplexity, Claude, Gemini).
4. **Keamanan Tanpa Kompromi**: Bebas database runtime MySQL publik dan tanpa plugin pihak ketiga yang rentan dieksploitasi.
5. **Handoff Penjualan WhatsApp**: Formulir RFQ terhubung langsung ke format chat WhatsApp penjualan terstruktur.

## Kontak & Pemesanan

- Website: https://websiteplatform.id
- WhatsApp: +62 851-8314-1624
- Email: halo@websiteplatform.id
`;

  // Build llms-full.txt (comprehensive)
  const llmsFull = `# WebsitePlatform.id — Dokumen Pengetahuan Komprehensif (Full Context)

> Dokumentasi arsitektur, paket komersial, portofolio industri, ensiklopedia istilah teknis, dan cakupan wilayah untuk agen AI (LLMs), mesin pencari semantik, dan mitra bisnis.

---

## 1. TENTANG PERUSAHAAN & PLATFORM

WebsitePlatform.id adalah penyedia layanan rekayasa perangkat lunak web dan optimasi keterlihatan digital (SEO & GEO) untuk korporat, B2B, manufaktur, lembaga profesional, dan pelaku usaha di Indonesia.

### Filosofi Rekayasa:
- **Zero WordPress / Zero CMS Bloat**: Kami tidak menggunakan CMS monolitik usang dengan puluhan plugin yang memperlambat website dan rentan hack.
- **Modern Jamstack & Next.js 16**: Website dibangun dengan Next.js 16, React 19, TypeScript 5, dan Tailwind CSS 4 yang diekspor sebagai aset statis murni.
- **Edge Deployment**: Website dihosting pada shared hosting berperforma tinggi atau CDN Edge global, memangkas biaya server tahunan klien hingga 80%.

---

## 2. PAKET & STRUKTUR HARGA

### A. Paket Starter UMKM
- **Biaya**: Rp 1.250.000 (One-time investment)
- **Waktu Pengerjaan**: 3 - 5 Hari Kerja
- **Target**: Usaha mikro, toko fisik lokal, freelancer, produk tunggal, landing page promo.
- **Spesifikasi**: Hingga 3 halaman utama, 100% Mobile Responsive, Tombol WhatsApp Direct, Integrasi Google Maps, Setup SSL/HTTPS, Basic On-Page SEO.

### B. Paket Professional Business
- **Biaya**: Rp 2.950.000 (One-time investment)
- **Waktu Pengerjaan**: 7 - 10 Hari Kerja
- **Target**: Perusahaan berkembang, biro jasa, kontraktor, distributor, klinik, holding company.
- **Spesifikasi**: Hingga 7 halaman terstruktur, Katalog Layanan/Produk Modular, Filter & Search Interaktif, Multi-CTA WhatsApp & RFQ Form, Schema JSON-LD Organisasi & Lokal, Core Web Vitals 100/100, Garansi Teknis 60 Hari.

### C. Paket Enterprise Custom
- **Biaya**: Mulai Rp 6.500.000 (Sesuai Spesifikasi)
- **Waktu Pengerjaan**: 14 - 21 Hari Kerja
- **Target**: Eksportir B2B, pabrik manufaktur besar, firma hukum ternama, institusi pendidikan, jaringan ritel nasional.
- **Spesifikasi**: Halaman dinamis tanpa batas, Fitur Multi-Bahasa (ID/EN/AR), Portal Unduhan Brosur/Katalog PDF, Kalkulator Estimasi Kustom, Pelatihan Tim Mandiri, Prioritas SLA Support 1 Tahun.

---

## 3. SHOWCASE 10 KONSEP DESAIN ARSITEKTURAL

1. **Modern Corporate**: Biru safir elegan, modular, fokus B2B & investor trust.
2. **Premium Executive**: Obsidian & champagne amber, font serif berkelas untuk firma hukum & wealth management.
3. **Minimal Business**: Whitespace lapang khas Nordik, razor-sharp borders untuk konsultan strategi & studio arsitektur.
4. **Bold Creative**: Tipografi ekspresif dan kontras tinggi untuk agensi pemasaran digital & production house.
5. **Professional Services**: Desain berbasis pembuktian keahlian, studi kasus, dan booking konsultasi untuk akuntan, konsultan pajak, dan SDM.
6. **Industrial & Manufacturing**: Tabel spesifikasi kapasitas, sertifikasi ISO, dan fasilitas pabrik untuk tender B2B.
7. **Technology & SaaS**: Kartu fitur modular, API preview, dan visualisasi produk komputasi awan.
8. **Culinary & Dining**: Visual hidangan menggugah selera, menu digital responsif, dan reservasi meja cepat.
9. **Training & Academy**: Struktur kurikulum, profil instruktur, dan formulir pendaftaran peserta bootcamp/kursus.
10. **E-Commerce & Retail**: Katalog produk dengan filter kategori, badge garansi, dan checkout WhatsApp instan.

---

## 4. ENS IKLOPEDIA PANDUAN TEKNIS (93 ISTILAH)

WebsitePlatform.id mendokumentasikan 93 istilah teknis web di https://websiteplatform.id/panduan yang mencakup:
- **Core Web Vitals**: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), Time to First Byte (TTFB), First Contentful Paint (FCP).
- **Arsitektur Web**: Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), Client-Side Rendering (CSR), Headless Architecture, Edge Computing.
- **SEO & Schema**: Schema Markup, JSON-LD, BreadcrumbList, LocalBusiness Schema, FAQ Schema, Canonical Tag, Crawl Budget, XML Sitemap, Robots.txt.
- **Konversi & Marketing**: Call to Action (CTA), Conversion Rate Optimization (CRO), Lead Capture, A/B Testing, Return on Ad Spend (ROAS).

---

## 5. CAKUPAN 62 KOTA DI INDONESIA

Layanan pembuatan website profesional kami menjangkau 62 kota di Indonesia dengan landing page spesifik per kota:
Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Utara, Jakarta Timur, Surabaya, Bandung, Medan, Semarang, Makassar, Palembang, Tangerang, Tangerang Selatan, Bekasi, Depok, Bogor, Batam, Pekanbaru, Bandar Lampung, Padang, Denpasar, Malang, Samarinda, Balikpapan, Banjarmasin, Pontianak, Manado, Yogyakarta, Surakarta (Solo), Cirebon, Serang, Jambi, Mataram, Kupang, Bengkulu, Banda Aceh, Palu, Ambon, Jayapura, Kendari, Sukabumi, Tasikmalaya, Pekalongan, Tegal, Magelang, Kediri, Blitar, Madiun, Probolinggo, Pasuruan, Mojokerto, Batu, Cimahi, Banjarbaru, Tarakan, Singkawang, Palangka Raya, Bontang, Bitung, Gorontalo, Sorong, Pangkal Pinang.

---

## 6. HUBUNGI KAMI

- Alamat Web: https://websiteplatform.id
- Konsultasi WhatsApp: +62 851-8314-1624
- Layanan Pelanggan: halo@websiteplatform.id
- Alamat Teknis: Jakarta & Surabaya, Indonesia
`;

  fs.writeFileSync(path.join(rootDir, 'public', 'llms.txt'), llmsSummary, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'public', 'llms-full.txt'), llmsFull, 'utf-8');
  console.log('Successfully generated public/llms.txt and public/llms-full.txt');
}

main().catch(console.error);
