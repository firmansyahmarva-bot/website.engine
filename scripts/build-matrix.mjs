import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read cities from cities.ts
const citiesContent = fs.readFileSync(path.join(__dirname, '../src/content/cities.ts'), 'utf8');
const cityJsonMatch = citiesContent.match(/export const CITIES: CityEntity\[\] = (\[[\s\S]*?\]);/);
let cities = [];
if (cityJsonMatch) {
  cities = JSON.parse(cityJsonMatch[1]);
}

const targetCitySlugs = [
  'jakarta',
  'surabaya',
  'bandung',
  'medan',
  'semarang',
  'makassar',
  'denpasar',
  'batam',
  'bekasi',
  'tangerang'
];

const selectedCities = targetCitySlugs.map(slug => cities.find(c => c.slug === slug)).filter(Boolean);

const industries = [
  {
    key: 'konstruksi',
    industryId: 'construction',
    name: 'Konstruksi & Pemborong Bangunan',
    recommendedPackage: 'Paket Custom Enterprise (Rp 7.500.000+)',
    designs: ['industrial', 'modern-corporate'],
    features: ['Galeri Portofolio Proyek & Progres Fisik', 'Verifikasi Dokumen Legalitas (SBU/LPJK)', 'Sertifikasi Mutu ISO & K3 (HSE)', 'Modul Pengajuan RFP & Unduh Profil Perusahaan'],
    essentialSections: [
      { title: 'Katalog Portofolio Struktur & Sipil', explanation: 'Pameran dokumentasi gedung komersial, jembatan, fasilitas pabrik, dan proyek perumahan yang telah selesai.' },
      { title: 'Kepatuhan Regulasi & Sertifikat K3', explanation: 'Tampilan legalitas badan usaha, sertifikat ISO 9001/45001, dan rekor zero-accident untuk evaluasi tender.' },
      { title: 'Daftar Alat Berat & Kapasitas Batching Plant', explanation: 'Spesifikasi kesiapan armada crane, excavator, dan workshop pabrikasi untuk jaminan mobilisasi cepat.' }
    ],
    getProblems: (city) => [
      `Gagal lolos prakualifikasi tender rekanan B2B/BUMN di ${city.name} akibat website profil perusahaan tidak dapat diverifikasi secara daring.`,
      `Calon pemilik proyek ragu terhadap rekam jejak fisik karena dokumentasi proyek sebelumnya berserakan di media sosial tanpa klasifikasi.`,
      `Situs lambat diakses panitia lelang dan konsultan MK saat meninjau spesifikasi dan legalitas.`
    ],
    getFaqs: (city) => [
      { question: `Apakah website kontraktor ini siap untuk verifikasi tender B2B di ${city.name}?`, answer: `Ya, seluruh arsitektur website dirancang memenuhi standar verifikasi administrasi dan teknis pengadaan vendor di wilayah ${city.name}, lengkap dengan dokumen legalitas dan company profile unduhan.` },
      { question: `Apakah portofolio proyek bisa difilter berdasarkan jenis pekerjaan dan area kecamatan di ${city.name}?`, answer: `Tentu. Portofolio dilengkapi filter kategori (gedung komersial, perumahan, infrastruktur jalan/MEP) sehingga calon mitra dapat langsung melihat hasil kerja di area terkait.` },
      { question: `Bagaimana alur pengiriman dokumen RFP (Request for Proposal) melalui website?`, answer: `Website dilengkapi formulir penawaran terenkripsi yang memungkinkan calon klien mengunggah berkas BoQ (Bill of Quantities) atau gambar kerja teknis langsung ke email dan WhatsApp tim estimator Anda.` },
      { question: `Berapa estimasi waktu pengerjaan website konstruksi di ${city.name}?`, answer: `Untuk company profile konstruksi lengkap dengan galeri proyek dan legalitas berkisar antara 7 hingga 14 hari kerja.` }
    ]
  },
  {
    key: 'klinik',
    industryId: 'clinic',
    name: 'Klinik Pratama, Estetika & Spesialis',
    recommendedPackage: 'Paket Bisnis (Rp 3.500.000)',
    designs: ['clean-minimal', 'modern-corporate'],
    features: ['Jadwal Praktik Dokter Real-time', 'Reservasi Antrean WhatsApp Otomatis', 'Peta Navigasi & Jam Buka Poliklinik', 'Katalog Layanan & Transparansi Biaya Tindakan'],
    essentialSections: [
      { title: 'Direktori Dokter Spesialis & Profil SIP', explanation: 'Kredibilitas dokter penanggung jawab, jadwal praktik mingguan, dan latar belakang keilmuan medis.' },
      { title: 'Fasilitas & Standar Higienitas Medis', explanation: 'Visual ruang tindakan steril, peralatan medis mutakhir, dan sertifikasi akreditasi fasilitas kesehatan.' },
      { title: 'Sistem Booking Konsultasi Cepat', explanation: 'Alur pendaftaran pasien tanpa antre berbelit langsung terhubung ke nomor antrean resepsionis klinik.' }
    ],
    getProblems: (city) => [
      `Pasien di ${city.name} frustrasi karena jadwal praktik dokter di Google Maps tidak akurat dan nomor telepon klinik sulit dihubungi.`,
      `Klinik kehilangan calon pasien perawatan premium karena website tidak menampilkan suasana ruang perawatan yang higienis.`,
      `Admin resepsionis kewalahan membalas pertanyaan tarif dasar yang sama berulang kali di WhatsApp.`
    ],
    getFaqs: (city) => [
      { question: `Apakah pasien di ${city.name} bisa langsung booking jadwal dokter melalui website?`, answer: `Bisa. Tombol booking WhatsApp langsung mengisi nama pasien, pilihan poliklinik/dokter, dan perkiraan jam kedatangan secara terstruktur.` },
      { question: `Apakah jadwal dokter dapat diperbarui secara mandiri saat ada perubahan shift?`, answer: `Ya, sistem kami menyediakan panel admin ringan atau opsi pembaruan instan tanpa harus mengerti kode pemrograman.` },
      { question: `Apakah website klinik ini aman dan mematuhi etika periklanan medis IDI/Kemenkes?`, answer: `Seluruh konten dan tata letak disesuaikan dengan etika promosi fasilitas kesehatan tanpa klaim berlebihan, mengedepankan edukasi preventif dan transparansi informasi.` },
      { question: `Bagaimana optimasi lokal agar klinik mudah ditemukan di Google Maps ${city.name}?`, answer: `Kami menyertakan integrasi Schema MedicalClinic, embedding Google Maps terverifikasi, dan meta data geo-targeting wilayah ${city.name}.` }
    ]
  },
  {
    key: 'kuliner',
    industryId: 'restaurant',
    name: 'Restoran, Kafe & Bisnis Kuliner',
    recommendedPackage: 'Paket Starter UMKM / Bisnis (Rp 1.500.000 - Rp 3.500.000)',
    designs: ['creative-bold', 'clean-minimal'],
    features: ['Menu Digital Responsif & QR Code Dinamis', 'Reservasi Meja & VIP Room', 'Integrasi Google Maps & Rute Navigasi', 'Katalog Catering & Pemesanan Bento Box'],
    essentialSections: [
      { title: 'Buku Menu Digital dengan Foto Menggugah Selera', explanation: 'Daftar hidangan unggulan lengkap dengan harga transparan, label halal/diet khusus, dan deskripsi cita rasa.' },
      { title: 'Pemesanan Catering & Event Private', explanation: 'Paket prasmanan kantor, nasi kotak syukuran, dan peminjaman area untuk arisan atau gathering.' },
      { title: 'Suasana Restoran & Galeri Instagram Live', explanation: 'Foto interior estetik, area outdoor bebas asap rokok, dan ketersediaan colokan listrik / Wi-Fi kencang.' }
    ],
    getProblems: (city) => [
      `Pengunjung di ${city.name} ragu datang karena tidak ada kepastian daftar harga dan menu halal di pencarian Google.`,
      `Restoran kehilangan pesanan katering korporat puluhan juta karena hanya mengandalkan feed media sosial yang cepat tenggelam.`,
      `File menu PDF yang dibagikan via chat terlalu berat diunduh pelanggan pada koneksi seluler.`
    ],
    getFaqs: (city) => [
      { question: `Apakah menu makanan bisa dibuka cepat tanpa unduh file PDF berat?`, answer: `Pasti. Kami membangun menu web statis Next.js yang terbuka dalam sekejap (< 1 detik) di seluruh smartphone tanpa perlu download PDF.` },
      { question: `Bagaimana sistem reservasi meja dan VIP room bekerja?`, answer: `Pelanggan memilih tanggal, jam kedatangan, dan jumlah tamu pada formulir singkat yang otomatis mengirim pesan rapi ke WhatsApp manajer restoran.` },
      { question: `Apakah bisa digunakan sebagai menu QR Code di meja makan restoran?`, answer: `Ya, kami sediakan cetak QR code yang langsung mengarah ke halaman menu online dengan tampilan responsif.` },
      { question: `Apakah cocok untuk usaha katering dan nasi bento di ${city.name}?`, answer: `Sangat cocok. Dilengkapi paket pilihan harga katering per porsi dan kalkulator simulasi jumlah pesanan.` }
    ]
  },
  {
    key: 'properti',
    industryId: 'property',
    name: 'Developer Properti & Real Estate',
    recommendedPackage: 'Paket Custom Enterprise (Rp 5.500.000 - Rp 15.000.000)',
    designs: ['luxury-real-estate', 'modern-corporate'],
    features: ['Katalog Tipe Unit & Denah Arsitektur', 'Kalkulator Simulasi KPR Interaktif', 'Virtual Tour 360 / Galeri Progres', 'Booking Survei Lokasi WhatsApp'],
    essentialSections: [
      { title: 'Koleksi Tipe Rumah & Denah Lantai', explanation: 'Spesifikasi luas tanah, luas bangunan, jumlah kamar tidur, dan material bangunan utama.' },
      { title: 'Simulasi Angsuran KPR Bank Rekanan', explanation: 'Kalkulator interaktif bagi calon pembeli untuk memperkirakan uang muka (DP) dan cicilan bulanan.' },
      { title: 'Keunggulan Lokasi & Akses Transportasi', explanation: 'Jarak tempuh menuju pintu tol terdekat, stasiun, pusat perbelanjaan, dan sekolah unggulan di kawasan sekitar.' }
    ],
    getProblems: (city) => [
      `Pencari hunian di ${city.name} beralih ke perumahan kompetitor karena website pengembang tidak memiliki simulasi KPR yang jelas.`,
      `Iklan berbayar (Meta Ads / Google Ads) boros anggaran karena landing page perumahan lambat dan formulir survei tidak ramah ponsel.`,
      `Brosur digital tidak bisa diperbarui saat tipe unit tertentu sudah terjual (Sold Out).`
    ],
    getFaqs: (city) => [
      { question: `Apakah website sudah termasuk kalkulator simulasi cicilan KPR?`, answer: `Ya, kami sediakan kalkulator interaktif dengan suku bunga bank acuan terkini sehingga calon buyer langsung memahami estimasi cicilan per bulan.` },
      { question: `Apakah status unit (Tersedia, Booking, Terjual) dapat diubah berkala?`, answer: `Tentu, badge ketersediaan tipe klaster dapat diperbarui sewaktu-waktu dengan mudah.` },
      { question: `Bagaimana cara mengarahkan lead iklan Google Ads ke formulir survei lokasi?`, answer: `Landing page dirancang dengan CTA 'Jadwalkan Kunjungan Show Unit' yang terintegrasi pixel conversion tracking Meta & Google Tag Manager.` },
      { question: `Apakah bisa menampilkan video tour atau link 360 Virtual Tour?`, answer: `Sangat bisa. Kami menyediakan modul embed YouTube/Matterport yang ringan dan tidak membebani kecepatan loading halaman.` }
    ]
  },
  {
    key: 'tour-travel',
    industryId: 'travel',
    name: 'Tour, Travel & Rental Transportasi',
    recommendedPackage: 'Paket Bisnis (Rp 3.500.000)',
    designs: ['creative-bold', 'clean-minimal'],
    features: ['Itinerary Paket Wisata Harian & Open Trip', 'Katalog Armada Rental & Tarif Sewa', 'Formulir Booking WhatsApp Instan', 'Legalitas Izin Resmi Kemenag/Kemenparekraf'],
    essentialSections: [
      { title: 'Rundown Lengkap Itinerary Perjalanan', explanation: 'Jadwal destinasi per hari, fasilitas yang termasuk/tidak termasuk, dan rekomendasi perlengkapan wisata.' },
      { title: 'Katalog Pilihan Armada Mobil & Bus Pariwisata', explanation: 'Spesifikasi armada bersih, tahun kendaraan, kapasitas penumpang, dan inklusi sopir + BBM.' },
      { title: 'Testimoni & Dokumentasi Rombongan Wisata', explanation: 'Foto keceriaan rombongan gathering perusahaan dan ulasan kepuasan peserta trip sebelumnya.' }
    ],
    getProblems: (city) => [
      `Wisatawan ragu memesan paket liburan atau rental mobil di ${city.name} karena maraknya penipuan travel bodong tanpa kantor fisik yang kredibel.`,
      `Calon klien malas membaca rincian itinerary panjang berformat gambar buram di feed Instagram.`,
      `Perusahaan di ${city.name} kesulitan meminta penawaran resmi paket gathering karyawan karena website tidak memiliki formulir invoice b2b.`
    ],
    getFaqs: (city) => [
      { question: `Apakah website agen wisata ini aman dari stigma penipuan online?`, answer: `Sangat aman. Kami menonjolkan legalitas resmi NIB/TDUP, alamat kantor operasional, rekening bank atas nama badan usaha, dan galeri rombongan nyata.` },
      { question: `Bagaimana calon pelanggan memesan paket trip tertentu?`, answer: `Tiap halaman paket dilengkapi tombol WhatsApp dengan format teks otomatis yang menyebutkan nama paket trip, tanggal rencana, dan jumlah peserta.` },
      { question: `Apakah bisa menampilkan tabel harga sewa mobil harian Lepas Kunci vs All-In Sopir?`, answer: `Ya, tabel tarif sewa mobil dibuat rapi, responsif, dan mudah dibaca langsung dari layar ponsel.` },
      { question: `Apakah paket open trip bisa ditandai tanggal keberangkatannya?`, answer: `Tentu, terdapat jadwal kalender open trip bulanan yang dapat diperbarui berkala.` }
    ]
  },
  {
    key: 'konsultan',
    industryId: 'consultant',
    name: 'Konsultan Bisnis, Manajemen & Pajak',
    recommendedPackage: 'Paket Professional Business / Enterprise (Rp 3.500.000 - Rp 7.500.000)',
    designs: ['modern-corporate', 'clean-minimal'],
    features: ['Pemaparan Metodologi & Framework Kerja', 'Studi Kasus Keberhasilan Klien Terukur', 'Profil Senior Partners & Sertifikasi Keahlian', 'Booking Sesi Diagnostic Call'],
    essentialSections: [
      { title: 'Pilar Layanan Konsultasi & Ruang Lingkup', explanation: 'Penjelasan spesifik pendampingan manajemen operasional, restrukturisasi keuangan, audit pajak, atau kepatuhan hukum.' },
      { title: 'Studi Kasus Hasil Transformasi Bisnis', explanation: 'Cerita nyata peningkatan efisiensi biaya, pertumbuhan laba, atau kelancaran perizinan yang dialami klien terdahulu.' },
      { title: 'Profil Dewan Pakar & Konsultan Utama', explanation: 'Riwayat sertifikasi (CPA, BKP, CMC), rekam jejak industri, dan artikel kepemimpinan pemikiran.' }
    ],
    getProblems: (city) => [
      `Direksi dan pemilik usaha di ${city.name} meragukan kapabilitas konsultan yang hanya memiliki kartu nama tanpa situs web profesional.`,
      `Calon klien korporat enggan menghubungi karena tidak ada gambaran metodologi kerja dan standar kerahasiaan data (NDA).`,
      `Konsultan kesulitan menetapkan rate honorarium premium karena branding digital tampak setara dengan tenaga freelance pemula.`
    ],
    getFaqs: (city) => [
      { question: `Apakah website konsultan ini mampu meyakinkan jajaran direksi (C-Level) di ${city.name}?`, answer: `Ya. Desain mengadopsi estetika korporat internasional dengan tata letak minimalis berwibawa, menekankan studi kasus dan kepatuhan standar profesional.` },
      { question: `Apakah ada fitur untuk menjadwalkan konsultasi awal via Zoom/Google Meet?`, answer: `Tersedia integrasi link penjadwalan meeting online atau formulir pengajuan diagnostic call.` },
      { question: `Bisakah menyertakan klausul kerahasiaan informasi (NDA) di website?`, answer: `Bisa, kami cantumkan pernyataan etika profesi dan jaminan perlindungan data rahasia klien di setiap halaman penawaran.` },
      { question: `Berapa lama website konsultan bisnis selesai dibuat?`, answer: `Rata-rata 5 sampai 10 hari kerja setelah materi profil dan foto partner kami terima.` }
    ]
  },
  {
    key: 'manufaktur',
    industryId: 'manufacturing',
    name: 'Pabrik & Industri Manufaktur B2B',
    recommendedPackage: 'Paket Custom Enterprise (Rp 7.500.000 - Rp 25.000.000)',
    designs: ['industrial', 'modern-corporate'],
    features: ['Katalog Kapasitas Mesin & Output Harian', 'Standarisasi Mutu ISO & Hasil Uji Lab', 'Alur Kerja Maklon / OEM / ODM', 'Pengajuan Dokumen Tender & Penawaran Grosir'],
    essentialSections: [
      { title: 'Spesifikasi Mesin & Kapasitas Produksi Pabrik', explanation: 'Kapasitas tonase harian, luas area workshop, dan teknologi otomatisasi industri yang dioperasikan.' },
      { title: 'Kontrol Mutu & Standar Pengujian Laboratorium', explanation: 'SOP pengawasan kualitas bahan baku, sertifikat ISO 9001, dan sertifikat uji ketahanan produk.' },
      { title: 'Skema Pemesanan Kustom OEM / ODM / Maklon', explanation: 'Panduan MOQ (Minimum Order Quantity), alur pembuatan sampel prototipe, dan durasi pengiriman kontainer.' }
    ],
    getProblems: (city) => [
      `Pabrik di kawasan industri ${city.name} kehilangan order ekspor dan tender distributor karena situs web terlihat kuno dan tidak mobile-friendly.`,
      `Buyer enterprise kesulitan mengunduh lembar spesifikasi teknis (TDS / MSDS) material produk.`,
      `Tim marketing pabrik kewalahan menyeleksi pertanyaan pembeli eceran karena website tidak memperjelas batasan pesanan grosir (MOQ).`
    ],
    getFaqs: (city) => [
      { question: `Apakah website pabrik manufaktur di ${city.name} ini mendukung bahasa Inggris untuk ekspor?`, answer: `Bisa. Platform kami mendukung arsitektur multi-bahasa terstruktur dengan hreflang valid untuk pasar ekspor global.` },
      { question: `Bagaimana memfilter agar hanya pembeli B2B / Grosir yang menghubungi pabrik?`, answer: `Kami mencantumkan ketentuan Minimum Order Quantity (MOQ) dan formulir pengadaan khusus yang mewajibkan input nama badan usaha serta volume pesanan.` },
      { question: `Apakah dokumen sertifikat mutu dan brosur katalog mesin aman diakses?`, answer: `Seluruh file katalog dioptimasi dengan CDN super cepat sehingga buyer luar kota dapat mengunduh dokumen secara instan.` },
      { question: `Apakah ada optimasi agar pabrik kami muncul saat pencarian distributor nasional?`, answer: `Pasti. Dilengkapi SEO on-page industri manufaktur terarah, Schema Organization manufaktur, dan penargetan kata kunci B2B.` }
    ]
  },
  {
    key: 'hotel',
    industryId: 'hotel',
    name: 'Hotel, Resort & Hospitality',
    recommendedPackage: 'Paket Professional Business / Enterprise (Rp 5.500.000 - Rp 15.000.000)',
    designs: ['luxury-real-estate', 'clean-minimal'],
    features: ['Katalog Tipe Kamar & Fasilitas Amenitas', 'Sistem Direct Booking WhatsApp Tanpa Komisi OTA', 'Peta Lokasi & Panduan Wisata Sekitar', 'Galeri Foto Kamar Resolusi Tinggi Super Cepat'],
    essentialSections: [
      { title: 'Galeri Tipe Kamar & Detail Tempat Tidur', explanation: 'Ukuran kamar, tipe kasur, pemandangan jendela, fasilitas sarapan, dan perlengkapan kamar mandi.' },
      { title: 'Fasilitas Kolam Renang, Spa & Restoran', explanation: 'Daya tarik relaksasi bagi tamu menginap, ruang pertemuan MICE, dan ballroom acara pernikahan.' },
      { title: 'Rekomendasi Destinasi Wisata Sekitar Hotel', explanation: 'Daftar atraksi wisata, kafe populer, dan akses bandara terdekat dari titik akomodasi.' }
    ],
    getProblems: (city) => [
      `Hotel di ${city.name} terbebani komisi tinggi Online Travel Agent (OTA) hingga 15-20% karena tidak memiliki kanal direct booking mandiri yang meyakinkan.`,
      `Tamu mengeluhkan loading website hotel sangat berat karena foto kamar tidak dikompresi dengan format WebP generasi modern.`,
      `Informasi fasilitas ballroom untuk acara pernikahan atau gathering kantor tidak jelas di website.`
    ],
    getFaqs: (city) => [
      { question: `Bagaimana sistem direct booking WhatsApp menghemat biaya komisi OTA hotel di ${city.name}?`, answer: `Tamu diarahkan memesan langsung ke resepsionis via WhatsApp dengan tawaran harga terbaik (Best Rate Guarantee), memangkas potongan komisi 15-20% yang biasa ditarik pihak ketiga.` },
      { question: `Apakah galeri foto kamar yang banyak akan membuat website lambat?`, answer: `Tidak. Semua gambar menggunakan format WebP generasi terbaru dengan lazy loading cerdas sehingga loading tetap secepat kilat (< 1 detik).` },
      { question: `Apakah bisa menampilkan paket sewa ballroom meeting dan resepsi pernikahan?`, answer: `Bisa, disediakan seksi khusus MICE & Wedding dengan daftar kapasitas tempat duduk dan unduhan proposal paket makanan.` },
      { question: `Apakah website terhubung dengan Google Bisnisku (Google Maps Hotel)?`, answer: `Ya, kami sertakan link integrasi langsung ke listing Maps resmi untuk kemudahan rute tamu yang berkendara.` }
    ]
  }
];

const matrix = [];

for (const ind of industries) {
  for (const city of selectedCities) {
    const slug = `${ind.key}-${city.slug}`;
    const title = `Jasa Pembuatan Website ${ind.name} di ${city.name}`;
    const tagline = `Solusi rekayasa website berstandar Next.js kelas dunia untuk sektor ${ind.name.toLowerCase()} di wilayah ${city.name} dan sekitarnya.`;
    const description = `Jasa pembuatan website ${ind.name.toLowerCase()} di ${city.name}. Desain elegan, loading di bawah 1 detik, struktur SEO lokal terarah, dan alur konversi WhatsApp instan untuk akselerasi pertumbuhan bisnis Anda.`;

    const districts = city.districts && city.districts.length > 0
      ? city.districts.slice(0, 5)
      : ['Pusat Bisnis', 'Kawasan Komersial', 'Pusat Kota'];

    const heroProblems = ind.getProblems(city);
    const localFaqs = ind.getFaqs(city);

    const matrixEntity = {
      slug,
      industrySlug: ind.key,
      citySlug: city.slug,
      industryId: ind.industryId,
      industryName: ind.name,
      cityName: city.name,
      province: city.province,
      title,
      tagline,
      description,
      marketContext: city.economicProfile || `Pusat pertumbuhan bisnis yang dinamis di ${city.province}.`,
      heroProblems,
      districts,
      landmarkContext: city.landmarkContext || `Menjangkau pusat bisnis strategis di kota ${city.name}.`,
      localBusinessCulture: city.localBusinessCulture || `Pelaku usaha di ${city.name} mengutamakan reputasi, kecepatan respons, dan transparansi portofolio kerja.`,
      pricingExpectation: ind.recommendedPackage,
      recommendedPackage: ind.recommendedPackage,
      recommendedDesigns: ind.designs,
      recommendedFeatures: ind.features,
      essentialSections: ind.essentialSections,
      faqs: localFaqs,
      seoTitle: `${title} | Profesional & Cepat`,
      seoDescription: description,
      seoKeywords: [
        `jasa website ${ind.key} ${city.slug}`,
        `jasa pembuatan website ${ind.key} ${city.name.toLowerCase()}`,
        `web developer ${ind.key} di ${city.name.toLowerCase()}`,
        `bikin web ${ind.key} ${city.name.toLowerCase()}`,
        `vendor website ${city.name.toLowerCase()}`
      ]
    };

    matrix.push(matrixEntity);
  }
}

console.log(`Generated ${matrix.length} matrix entities.`);

const fileContent = `import { MatrixEntity } from '@/types';

/**
 * 80 Programmatic Industry x City Matrix Entities
 * Curated: Top 8 High-Demand Industries x Top 10 Major Indonesian Cities
 */
export const MATRIX_ENTITIES: MatrixEntity[] = ${JSON.stringify(matrix, null, 2)};

export function getMatrixBySlug(slug: string): MatrixEntity | undefined {
  return MATRIX_ENTITIES.find((m) => m.slug === slug);
}

export function getMatrixByIndustryAndCity(
  industrySlug: string,
  citySlug: string
): MatrixEntity | undefined {
  return MATRIX_ENTITIES.find(
    (m) => m.industrySlug === industrySlug && m.citySlug === citySlug
  );
}

export function getMatrixEntitiesByCity(citySlug: string): MatrixEntity[] {
  return MATRIX_ENTITIES.filter((m) => m.citySlug === citySlug);
}

export function getMatrixEntitiesByIndustry(industrySlug: string): MatrixEntity[] {
  return MATRIX_ENTITIES.filter((m) => m.industrySlug === industrySlug);
}

export function getAllMatrixSlugs(): string[] {
  return MATRIX_ENTITIES.map((m) => m.slug);
}
`;

fs.writeFileSync(path.join(__dirname, '../src/content/matrix.ts'), fileContent, 'utf8');
console.log('Successfully written src/content/matrix.ts');