import { CityEntity } from '@/types';

export const CITIES: CityEntity[] = [
  {
    name: 'Jakarta',
    slug: 'jakarta',
    province: 'DKI Jakarta',
    dominantIndustries: ['finance', 'consultant', 'technology', 'law-firm'],
    economicProfile: 'Sebagai pusat bisnis, perbankan, dan kantor pusat korporasi terbesar di Indonesia, Jakarta menuntut standar website bertaraf internasional dengan kecepatan tinggi, kredibilitas tinggi, dan kepatuhan hukum yang ketat untuk memenangkan kepercayaan mitra korporat dan investor.',
    typicalPriceExpectation: 'Rp 3.500.000 - Rp 25.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website perusahaan di Jakarta?', answer: 'Untuk standar korporasi dan jasa profesional di Jakarta, biaya mulai dari Rp 2.500.000 untuk profil bisnis hingga Rp 15.000.000+ untuk platform terintegrasi sistem lengkap.' },
      { question: 'Apakah bisa meeting langsung di kantor Jakarta?', answer: 'Kami melayani konsultasi langsung tatap muka di wilayah Jabodetabek serta pertemuan daring via Google Meet / Zoom kapan pun dibutuhkan.' },
      { question: 'Berapa lama proses pembuatan website di Jakarta?', answer: 'Waktu pengerjaan berkisar antara 5 hingga 14 hari kerja tergantung kelengkapan materi profil perusahaan Anda.' }
    ],
    nearbyCitySlugs: ['tangerang', 'tangerang-selatan', 'bekasi', 'depok', 'bogor'],
    relevantIndustrySlugs: ['consultant', 'law-firm', 'finance', 'contractor', 'logistics'],
    seoTitle: 'Jasa Pembuatan Website Jakarta Profesional & Terpercaya | Next.js SEO',
    seoDescription: 'Jasa pembuatan website Jakarta untuk perusahaan, B2B, dan UMKM. Desain modern kelas dunia, super cepat, skor PageSpeed 95+, dan teroptimasi SEO Google.',
    seoKeywords: ['jasa pembuatan website jakarta', 'bikin website perusahaan jakarta', 'web developer jakarta profesional', 'jasa web design jakarta murah']
  },
  {
    name: 'Surabaya',
    slug: 'surabaya',
    province: 'Jawa Timur',
    dominantIndustries: ['manufacturing', 'logistics', 'trading', 'contractor'],
    economicProfile: 'Surabaya adalah pusat perdagangan, manufaktur, dan gerbang logistik logistik kawasan timur Indonesia. Perusahaan manufaktur dan distributor di Surabaya membutuhkan website berkinerja tinggi untuk memamerkan kapasitas pabrik dan portofolio proyek kepada mitra nasional.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah cocok untuk pabrik dan distributor di Surabaya?', answer: 'Sangat cocok. Kami berpengalaman membangun website katalog industri, portofolio kontraktor, dan profil distributor dengan integrasi WhatsApp sales cepat.' },
      { question: 'Apakah website sudah termasuk optimasi SEO lokal Surabaya?', answer: 'Ya, seluruh halaman sudah dioptimasi kata kunci lokal Jawa Timur dan didaftarkan ke Google Search Console.' }
    ],
    nearbyCitySlugs: ['sidoarjo', 'gresik', 'malang', 'kediri'],
    relevantIndustrySlugs: ['manufacturing', 'logistics', 'contractor', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Surabaya Profesional & Cepat | Garansi SEO',
    seoDescription: 'Jasa pembuatan website profesional di Surabaya untuk pabrik, kontraktor, distributor, dan UMKM. Tampilan modern, cepat diakses ponsel, dan siap closing WhatsApp.',
    seoKeywords: ['jasa pembuatan website surabaya', 'bikin web surabaya', 'web design surabaya murah', 'pembuat website profesional surabaya']
  },
  {
    name: 'Bandung',
    slug: 'bandung',
    province: 'Jawa Barat',
    dominantIndustries: ['creative', 'fashion', 'education', 'tourism', 'culinary'],
    economicProfile: 'Bandung dikenal sebagai episentrum industri kreatif, fashion, teknologi rintisan, dan perguruan tinggi unggulan. Pelaku usaha di Bandung membutuhkan website dengan estetika visual tinggi, tipografi modern, dan integrasi katalog interaktif.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah desain website bisa disesuaikan dengan selera visual kreatif Bandung?', answer: 'Tentu. Kami menyediakan berbagai konsep visual mulai dari Minimal Neo-Corporate hingga Modern Glassmorphism yang estetik dan elegan.' },
      { question: 'Berapa biaya pembuatan website toko kreatif di Bandung?', answer: 'Paket UMKM dan brand kreatif kami mulai dari Rp 1.500.000 dengan fitur katalog foto WebP dan tombol order WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['cimahi', 'sukabumi', 'tasikmalaya', 'cirebon'],
    relevantIndustrySlugs: ['education', 'fashion', 'culinary', 'creative', 'consultant'],
    seoTitle: 'Jasa Pembuatan Website Bandung Estetik & Cepat | Web Design Terbaik',
    seoDescription: 'Jasa buat website di Bandung untuk brand kreatif, studio, bisnis kuliner, dan perusahaan. Desain elegan, responsif ponsel, dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website bandung', 'bikin web bandung', 'web designer bandung', 'jasa website murah bandung']
  },
  {
    name: 'Medan',
    slug: 'medan',
    province: 'Sumatera Utara',
    dominantIndustries: ['plantation', 'trading', 'logistics', 'healthcare', 'culinary'],
    economicProfile: 'Medan adalah kota metropolitan terbesar di Pulau Sumatera dan pusat perdagangan komoditas perkebunan sawit, karet, serta ekspor-impor. Kehadiran website profesional sangat penting untuk membangun reputasi dagang antar pulau.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah melayani pembuatan website perkebunan dan trading di Medan?', answer: 'Ya, kami melayani pembuatan profil perusahaan agro-industri, trading, dan klinik kesehatan dengan standar tata letak profesional.' },
      { question: 'Bagaimana sistem pembayaran untuk klien di Medan?', answer: 'Pembayaran dapat dilakukan aman melalui transfer bank atau Virtual Account dengan termin bertahap (DP dan pelunasan setelah selesai).' }
    ],
    nearbyCitySlugs: ['pekanbaru', 'padang', 'batam'],
    relevantIndustrySlugs: ['plantation', 'logistics', 'trading', 'clinic'],
    seoTitle: 'Jasa Pembuatan Website Medan Profesional | Solusi Bisnis & Perusahaan',
    seoDescription: 'Jasa bikin website di Medan untuk perusahaan perkebunan, distributor, klinik, dan bisnis komersial. Loading cepat, bergaransi, dan ramah SEO.',
    seoKeywords: ['jasa pembuatan website medan', 'bikin web medan', 'web design medan terpercaya', 'jasa website perusahaan medan']
  },
  {
    name: 'Semarang',
    slug: 'semarang',
    province: 'Jawa Tengah',
    dominantIndustries: ['manufacturing', 'logistics', 'port', 'tourism', 'contractor'],
    economicProfile: 'Semarang berkembang sangat pesat sebagai pusat industri manufaktur baru di Jawa Tengah dengan kawasan industri terpadu seperti KIT Kendal dan BSB City. Pabrik dan vendor proyek di Semarang membutuhkan website kredibel untuk tender.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website kontraktor & pabrik di Semarang?', answer: 'Paket profil perusahaan manufaktur di Semarang mulai dari Rp 2.500.000 lengkap dengan portofolio proyek dan sertifikasi mutu ISO.' }
    ],
    nearbyCitySlugs: ['kudus', 'tegal', 'pekalongan', 'surakarta', 'magelang'],
    relevantIndustrySlugs: ['manufacturing', 'contractor', 'logistics', 'port'],
    seoTitle: 'Jasa Pembuatan Website Semarang Berkualitas | Bikin Web Perusahaan Cepat',
    seoDescription: 'Jasa pembuatan website profesional di Semarang untuk kawasan industri, vendor proyek, dan UKM. Kecepatan maksimal dengan Next.js dan SEO lengkap.',
    seoKeywords: ['jasa pembuatan website semarang', 'bikin website semarang', 'web designer semarang', 'jasa web semarang murah']
  },
  {
    name: 'Makassar',
    slug: 'makassar',
    province: 'Sulawesi Selatan',
    dominantIndustries: ['maritime', 'logistics', 'trading', 'fishery', 'hospitality'],
    economicProfile: 'Sebagai hub utama logistik dan transportasi laut kawasan Indonesia Timur, bisnis di Makassar membutuhkan etalase digital resmi untuk menjangkau pasar lintas pulau dan mitra internasional.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 14.000.000',
    localFaqs: [
      { question: 'Apakah bisa melayani pembuatan website ekspedisi laut di Makassar?', answer: 'Tentu, kami merancang website ekspedisi dan logistik dengan fitur pelacakan rute, daftar armada, dan tombol WhatsApp sales cepat.' }
    ],
    nearbyCitySlugs: ['palu', 'kendari', 'manado'],
    relevantIndustrySlugs: ['logistics', 'maritime', 'fishery', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Makassar Terpercaya | Solusi Digital Indonesia Timur',
    seoDescription: 'Jasa bikin website di Makassar untuk ekspedisi, perikanan, maritim, dan bisnis lokal. Cepat, aman, bergaransi, dan teroptimasi Google.',
    seoKeywords: ['jasa pembuatan website makassar', 'bikin web makassar', 'jasa web design makassar', 'web developer makassar']
  },
  {
    name: 'Palembang',
    slug: 'palembang',
    province: 'Sumatera Selatan',
    dominantIndustries: ['mining', 'plantation', 'construction', 'culinary', 'trading'],
    economicProfile: 'Palembang adalah pusat ekonomi Sumatera bagian selatan dengan sektor unggulan energi pertambangan batubara, perkebunan karet/sawit, dan konstruksi infrastruktur.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah website cocok untuk profil kontraktor tambang di Palembang?', answer: 'Sangat cocok, kami menyediakan desain bertema heavy industry dengan galeri alat berat dan rekam jejak K3.' }
    ],
    nearbyCitySlugs: ['bandar-lampung', 'jambi', 'padang'],
    relevantIndustrySlugs: ['mining', 'plantation', 'contractor', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Palembang Profesional | Web Perusahaan & UKM',
    seoDescription: 'Jasa buat website di Palembang untuk kontraktor, perkebunan, pertambangan, dan bisnis kuliner. Loading instan dan ramah pencarian Google.',
    seoKeywords: ['jasa pembuatan website palembang', 'bikin web palembang', 'jasa web design palembang', 'pembuat website palembang']
  },
  {
    name: 'Tangerang',
    slug: 'tangerang',
    province: 'Banten',
    dominantIndustries: ['manufacturing', 'logistics', 'industrial-estate', 'trading'],
    economicProfile: 'Tangerang adalah kawasan seribu industri dengan ribuan pabrik dan gudang manufaktur. Kebutuhan website korporat berstandar ekspor sangat tinggi untuk menjangkau pembeli B2B global.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 18.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website multi-bahasa (Indonesia & Inggris) di Tangerang?', answer: 'Bisa, sistem kami siap untuk arsitektur multi-bahasa lengkap dengan tag hreflang resmi untuk pasar ekspor.' }
    ],
    nearbyCitySlugs: ['jakarta', 'tangerang-selatan', 'cilegon', 'serang'],
    relevantIndustrySlugs: ['manufacturing', 'logistics', 'industrial-estate', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Tangerang untuk Pabrik & B2B | Next.js Cepat',
    seoDescription: 'Jasa pembuatan website di Tangerang untuk pabrik, pergudangan, kontraktor, dan perusahaan. Desain modern, cepat, dan terbukti tembus halaman 1 Google.',
    seoKeywords: ['jasa pembuatan website tangerang', 'bikin web pabrik tangerang', 'web design tangerang b2b', 'jasa website industri tangerang']
  },
  {
    name: 'Tangerang Selatan',
    slug: 'tangerang-selatan',
    province: 'Banten',
    dominantIndustries: ['property', 'education', 'healthcare', 'technology', 'retail'],
    economicProfile: 'Tangerang Selatan (BSD, Bintaro, Alam Sutera) dihuni oleh segmen masyarakat berpendapatan menengah ke atas. Website bisnis di Tangsel wajib memiliki desain elegan, bersih, dan kemudahan navigasi seluler.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 16.000.000',
    localFaqs: [
      { question: 'Apakah cocok untuk klinik dokter, sekolah, dan agen properti di Tangsel?', answer: 'Sangat ideal. Kami memiliki template khusus klinik, sekolah swasta, dan agen properti dengan fitur booking konsultasi.' }
    ],
    nearbyCitySlugs: ['jakarta', 'tangerang', 'depok', 'bogor'],
    relevantIndustrySlugs: ['real-estate', 'clinic', 'education', 'consultant'],
    seoTitle: 'Jasa Pembuatan Website Tangerang Selatan (BSD & Bintaro) | Web Elegan',
    seoDescription: 'Jasa bikin website modern di Tangerang Selatan (BSD, Serpong, Bintaro) untuk klinik, properti, dan bisnis profesional. Loading super cepat tanpa jeda.',
    seoKeywords: ['jasa pembuatan website tangerang selatan', 'bikin web bsd', 'web design bintaro', 'jasa website tangsel murah']
  },
  {
    name: 'Bekasi',
    slug: 'bekasi',
    province: 'Jawa Barat',
    dominantIndustries: ['automotive', 'manufacturing', 'logistics', 'retail', 'services'],
    economicProfile: 'Bekasi adalah pusat industri otomotif dan manufaktur elektronik terbesar di Asia Tenggara (Cikarang, MM2100, Jababeka). Website vendor manufaktur di Bekasi harus memenuhi standar kepatuhan industri tinggi.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 18.000.000',
    localFaqs: [
      { question: 'Apakah melayani pembuatan website vendor kawasan industri Cikarang & Bekasi?', answer: 'Ya, kami memiliki keahlian khusus membangun website rekanan pabrik Cikarang dan MM2100 dengan katalog spesifikasi mesin presisi.' }
    ],
    nearbyCitySlugs: ['jakarta', 'karawang', 'depok', 'bogor'],
    relevantIndustrySlugs: ['manufacturing', 'automotive', 'logistics', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Bekasi & Cikarang | Spesialis Industri & Vendor',
    seoDescription: 'Jasa pembuatan website di Bekasi dan kawasan industri Cikarang untuk pabrik, vendor otomotif, dan kontraktor. Skor PageSpeed 95+ bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website bekasi', 'bikin web cikarang', 'web design bekasi pabrik', 'jasa website vendor industri bekasi']
  },
  {
    name: 'Depok',
    slug: 'depok',
    province: 'Jawa Barat',
    dominantIndustries: ['education', 'technology', 'creative', 'healthcare', 'culinary'],
    economicProfile: 'Depok sebagai kota pendidikan terkemuka (kampus UI dan Gunadarma) memiliki banyak talenta teknologi dan UKM kuliner/edukasi yang membutuhkan media pemasaran digital yang kredibel.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website untuk lembaga bimbingan belajar & kursus di Depok?', answer: 'Paket bimbingan belajar dan sekolah kursus di Depok mulai dari Rp 1.500.000 sudah termasuk formulir pendaftaran siswa online.' }
    ],
    nearbyCitySlugs: ['jakarta', 'bogor', 'tangerang-selatan', 'bekasi'],
    relevantIndustrySlugs: ['education', 'clinic', 'culinary', 'technology'],
    seoTitle: 'Jasa Pembuatan Website Depok Murah & Cepat | Desain Modern Terpercaya',
    seoDescription: 'Jasa buat website di Depok untuk lembaga pendidikan, klinik, UMKM, dan profesional. Tampilan kekinian, responsif HP, dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website depok', 'bikin web depok', 'jasa website murah depok', 'web design depok']
  },
  {
    name: 'Bogor',
    slug: 'bogor',
    province: 'Jawa Barat',
    dominantIndustries: ['tourism', 'hospitality', 'agriculture', 'education', 'property'],
    economicProfile: 'Bogor adalah pusat riset pertanian tropis dan destinasi wisata favorit Jabodetabek. Hotel, resort, villa, dan agrobisnis di Bogor membutuhkan website visual yang menarik minat wisatawan.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website villa atau resort wisata di Puncak Bogor?', answer: 'Tentu, kami menyertakan galeri foto resolusi tinggi berformat WebP ringan dan tombol pesan kamar via WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['depok', 'jakarta', 'sukabumi', 'bekasi'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'agriculture', 'real-estate'],
    seoTitle: 'Jasa Pembuatan Website Bogor Terbaik | Solusi Bisnis Wisata & Properti',
    seoDescription: 'Jasa bikin website di Bogor untuk resort villa, agrobisnis, jasa kontraktor, dan UMKM. Tampilan memikat, loading instan, dan siap mendatangkan prospek.',
    seoKeywords: ['jasa pembuatan website bogor', 'bikin web bogor murah', 'web design bogor', 'jasa website villa bogor']
  },
  {
    name: 'Batam',
    slug: 'batam',
    province: 'Kepulauan Riau',
    dominantIndustries: ['shipyard', 'electronics', 'logistics', 'trade-free-zone', 'tourism'],
    economicProfile: 'Batam sebagai Kawasan Perdagangan Bebas (FTZ) berbatasan langsung dengan Singapura. Perusahaan galangan kapal (shipyard), manufaktur elektronik, dan logistik di Batam memerlukan website berskala global.',
    typicalPriceExpectation: 'Rp 3.000.000 - Rp 20.000.000',
    localFaqs: [
      { question: 'Apakah website mendukung transaksi mata uang asing atau dwibahasa?', answer: 'Ya, arsitektur kami siap dikonfigurasikan dengan format multibahasa dan konversi mata uang (SGD/USD/IDR).' }
    ],
    nearbyCitySlugs: ['pekanbaru', 'medan', 'jakarta'],
    relevantIndustrySlugs: ['maritime', 'manufacturing', 'logistics', 'trade-free-zone'],
    seoTitle: 'Jasa Pembuatan Website Batam Standar Internasional | FTZ & Shipyard',
    seoDescription: 'Jasa pembuatan website di Batam untuk industri manufaktur, galangan kapal, logistik, dan perusahaan ekspor. Cepat, aman, dan siap bersaing global.',
    seoKeywords: ['jasa pembuatan website batam', 'bikin web batam', 'web development batam', 'web design batam international']
  },
  {
    name: 'Pekanbaru',
    slug: 'pekanbaru',
    province: 'Riau',
    dominantIndustries: ['petroleum', 'palm-oil', 'plantation', 'trading', 'hospitality'],
    economicProfile: 'Pekanbaru adalah urat nadi bisnis perkebunan kelapa sawit, industri pulp and paper, dan migas di Sumatera. Kebutuhan website profil kontraktor dan supplier perkebunan sangat vital untuk tender B2B.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk perusahaan supplier alat sawit dan pupuk di Pekanbaru?', answer: 'Sangat bisa, kami merancang katalog produk agro-industri dengan unduhan brosur PDF dan kontak sales cepat.' }
    ],
    nearbyCitySlugs: ['padang', 'medan', 'jambi', 'batam'],
    relevantIndustrySlugs: ['plantation', 'petroleum', 'contractor', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Pekanbaru Profesional | Bisnis Sawit & Migas',
    seoDescription: 'Jasa buat website di Pekanbaru untuk kontraktor, perkebunan kelapa sawit, distributor, dan bisnis jasa. Loading cepat dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website pekanbaru', 'bikin web pekanbaru', 'web design pekanbaru terpercaya', 'jasa website riau']
  },
  {
    name: 'Bandar Lampung',
    slug: 'bandar-lampung',
    province: 'Lampung',
    dominantIndustries: ['agriculture', 'food-processing', 'logistics', 'port', 'tourism'],
    economicProfile: 'Sebagai pintu gerbang Pulau Sumatera dari Jawa, Bandar Lampung memiliki aktivitas logistik pelabuhan Bakauheni/Panjang serta pengolahan hasil bumi (kopi, tapioka, nanas) yang memerlukan profil digital resmi.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Berapa hari pengerjaan website untuk bisnis di Lampung?', answer: 'Rata-rata 5 hingga 10 hari kerja setelah materi foto dan profil usaha Anda kami terima.' }
    ],
    nearbyCitySlugs: ['palembang', 'jakarta', 'cilegon', 'serang'],
    relevantIndustrySlugs: ['agriculture', 'logistics', 'food-processing', 'port'],
    seoTitle: 'Jasa Pembuatan Website Bandar Lampung Cepat & Murah | Web Bisnis',
    seoDescription: 'Jasa bikin website di Bandar Lampung untuk bisnis logistik, perkebunan kopi, pengolahan pangan, dan UKM. Kecepatan maksimal dengan jaminan SEO.',
    seoKeywords: ['jasa pembuatan website bandar lampung', 'bikin web lampung', 'web design lampung', 'jasa website lampung murah']
  },
  {
    name: 'Malang',
    slug: 'malang',
    province: 'Jawa Timur',
    dominantIndustries: ['tourism', 'education', 'technology-startup', 'agriculture', 'culinary'],
    economicProfile: 'Malang dan Kota Batu adalah destinasi wisata pegunungan favorit sekaligus kota pelajar dengan ekosistem startup teknologi yang giat. Desain website di Malang menuntut estetika segar dan kemudahan akses mobile.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah melayani pembuatan website untuk paket tour & travel di Malang/Batu?', answer: 'Ya, kami melayani pembuatan website paket wisata Bromo & Batu dengan form booking dan integrasi chat WhatsApp.' }
    ],
    nearbyCitySlugs: ['surabaya', 'sidoarjo', 'kediri', 'jember'],
    relevantIndustrySlugs: ['tourism', 'education', 'technology', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Malang & Batu | Desain Modern untuk Wisata & Edukasi',
    seoDescription: 'Jasa pembuatan website di Malang dan Batu untuk biro wisata, sekolah/kampus, kuliner, dan startup. Cepat dibuka di ponsel dan ramah Google.',
    seoKeywords: ['jasa pembuatan website malang', 'bikin web malang', 'web design batu malang', 'jasa website wisata malang']
  },
  {
    name: 'Padang',
    slug: 'padang',
    province: 'Sumatera Barat',
    dominantIndustries: ['trading', 'culinary', 'tourism', 'cement-industry', 'education'],
    economicProfile: 'Padang dikenal dengan jaringan bisnis perantau Minang, kuliner legendaris, dan industri semen. Website profesional membantu pengusaha lokal memperluas jangkauan pasar ke seluruh Indonesia.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk toko oleh-oleh kuliner Padang?', answer: 'Bisa, kami melengkapi website kuliner dengan katalog oleh-oleh dan tombol order WhatsApp langsung ke admin toko.' }
    ],
    nearbyCitySlugs: ['pekanbaru', 'jambi', 'medan'],
    relevantIndustrySlugs: ['culinary', 'tourism', 'trading', 'education'],
    seoTitle: 'Jasa Pembuatan Website Padang Terpercaya | Web Toko & Perusahaan',
    seoDescription: 'Jasa buat website di Padang untuk bisnis kuliner, distributor, biro perjalanan, dan perusahaan. Desain modern, loading cepat, bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website padang', 'bikin web padang', 'web design sumatera barat', 'jasa web padang murah']
  },
  {
    name: 'Denpasar',
    slug: 'denpasar',
    province: 'Bali',
    dominantIndustries: ['tourism', 'hospitality', 'creative-agency', 'handicraft', 'wellness'],
    economicProfile: 'Denpasar dan kawasan sekitarnya di Bali adalah panggung etalase pariwisata global. Klien membutuhkan website kelas dunia dengan foto-foto tajam berkecepatan tinggi dan dukungan multi-bahasa.',
    typicalPriceExpectation: 'Rp 3.000.000 - Rp 25.000.000',
    localFaqs: [
      { question: 'Apakah website bisa berbahasa Inggris untuk turis mancanegara?', answer: 'Tentu, sistem kami sangat ramah multi-bahasa dan dioptimalkan untuk SEO internasional (hreflang).' }
    ],
    nearbyCitySlugs: ['mataram', 'surabaya', 'banyuwangi'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'creative', 'wellness', 'real-estate'],
    seoTitle: 'Jasa Pembuatan Website Denpasar Bali | Standar Internasional & Cepat',
    seoDescription: 'Jasa pembuatan website di Denpasar Bali untuk villa, resort, restoran, spa, dan agen tur. Tampilan visual mewah, responsif ponsel, dan ramah SEO global.',
    seoKeywords: ['jasa pembuatan website denpasar', 'web design bali', 'bikin web bali profesional', 'website villa bali']
  },
  {
    name: 'Samarinda',
    slug: 'samarinda',
    province: 'Kalimantan Timur',
    dominantIndustries: ['mining', 'forestry', 'trading', 'infrastructure', 'port'],
    economicProfile: 'Samarinda sebagai ibu kota Kalimantan Timur dan gerbang penyangga utama Ibu Kota Nusantara (IKN) mengalami lonjakan kebutuhan infrastruktur dan jasa konstruksi yang membutuhkan kredibilitas profil digital.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah melayani kontraktor penyedia proyek IKN di Kalimantan Timur?', answer: 'Ya, kami berpengalaman merancang profil vendor konstruksi dan suplai material untuk proyek-proyek IKN dan BUMN.' }
    ],
    nearbyCitySlugs: ['balikpapan', 'banjarmasin', 'pontianak'],
    relevantIndustrySlugs: ['mining', 'contractor', 'logistics', 'infrastructure'],
    seoTitle: 'Jasa Pembuatan Website Samarinda Terpercaya | Vendor Proyek & IKN',
    seoDescription: 'Jasa bikin website di Samarinda untuk kontraktor proyek, pertambangan, dan perusahaan perdagangan. Desain kokoh, loading instan, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website samarinda', 'bikin web samarinda', 'web design samarinda k计划', 'jasa website ikn samarinda']
  },
  {
    name: 'Balikpapan',
    slug: 'balikpapan',
    province: 'Kalimantan Timur',
    dominantIndustries: ['oil-and-gas', 'logistics', 'port', 'contractor', 'services'],
    economicProfile: 'Balikpapan adalah kota minyak dan pintu gerbang udara/laut utama menuju IKN. Perusahaan migas dan jasa perkapalan di Balikpapan menuntut standar kepatuhan teknis dan tampilan korporat kredibel.',
    typicalPriceExpectation: 'Rp 3.000.000 - Rp 18.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website perusahaan migas di Balikpapan?', answer: 'Paket profil korporasi migas dan heavy engineering mulai dari Rp 3.000.000 dengan sertifikasi keamanan SSL dan portofolio K3 lengkap.' }
    ],
    nearbyCitySlugs: ['samarinda', 'banjarmasin', 'makassar'],
    relevantIndustrySlugs: ['oil-and-gas', 'logistics', 'port', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Balikpapan Profesional | Spesialis Migas & Logistik',
    seoDescription: 'Jasa pembuatan website di Balikpapan untuk perusahaan migas, logistik laut, dan kontraktor IKN. Desain profesional kelas atas, cepat, dan bergaransi.',
    seoKeywords: ['jasa pembuatan website balikpapan', 'bikin web balikpapan', 'web design balikpapan migas', 'jasa website perusahaan balikpapan']
  },
  {
    name: 'Banjarmasin',
    slug: 'banjarmasin',
    province: 'Kalimantan Selatan',
    dominantIndustries: ['mining', 'coal', 'trading', 'river-transport', 'culinary'],
    economicProfile: 'Banjarmasin (Kota Seribu Sungai) adalah pusat perdagangan komoditas batubara, kayu, dan transportasi air Kalimantan Selatan yang membutuhkan website B2B untuk relasi bisnis nasional.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website untuk usaha tambang dan logistik tongkang di Banjarmasin?', answer: 'Bisa, kami merancang situs profil perusahaan tambang batubara dan transportasi tongkang dengan tata letak elegan.' }
    ],
    nearbyCitySlugs: ['balikpapan', 'samarinda', 'pontianak'],
    relevantIndustrySlugs: ['mining', 'logistics', 'trading', 'maritime'],
    seoTitle: 'Jasa Pembuatan Website Banjarmasin Kalsel | Web Perusahaan & Dagang',
    seoDescription: 'Jasa bikin website di Banjarmasin untuk perusahaan tambang, logistik tongkang, distributor, dan UMKM. Cepat, aman, dan siap mendatangkan leads.',
    seoKeywords: ['jasa pembuatan website banjarmasin', 'bikin web banjarmasin', 'web design banjarmasin kalsel', 'jasa website murah banjarmasin']
  },
  {
    name: 'Pontianak',
    slug: 'pontianak',
    province: 'Kalimantan Barat',
    dominantIndustries: ['plantation', 'palm-oil', 'wood-processing', 'trading', 'border-trade'],
    economicProfile: 'Pontianak di garis khatulistiwa adalah pusat bisnis sawit dan perdagangan lintas batas dengan Malaysia/Sarawak. Kredibilitas profil digital menjadi syarat utama kemitraan lintas negara.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah proses pembuatan website bisa dikerjakan secara jarak jauh (online)?', answer: 'Tentu, 100% proses koordinasi, pengiriman draft desain, dan revisi dapat dilakukan via WhatsApp dan Google Meet secara cepat.' }
    ],
    nearbyCitySlugs: ['banjarmasin', 'samarinda', 'batam', 'jakarta'],
    relevantIndustrySlugs: ['plantation', 'trading', 'manufacturing', 'logistics'],
    seoTitle: 'Jasa Pembuatan Website Pontianak Kalbar | Desain Cepat & Ramah SEO',
    seoDescription: 'Jasa pembuatan website profesional di Pontianak untuk perkebunan sawit, distributor, klinik, dan bisnis dagang. Kecepatan maksimal, bergaransi.',
    seoKeywords: ['jasa pembuatan website pontianak', 'bikin web pontianak', 'web design pontianak kalbar', 'jasa website kalbar']
  },
  {
    name: 'Cimahi',
    slug: 'cimahi',
    province: 'Jawa Barat',
    dominantIndustries: ['military-tech', 'textile', 'animation', 'creative', 'education'],
    economicProfile: 'Cimahi bertransformasi menjadi pusat industri kreatif animasi digital, pendidikan militer, dan industri tekstil yang membutuhkan kehadiran web modern yang gesit.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website untuk studio kreatif dan animasi di Cimahi?', answer: 'Mulai dari Rp 1.500.000 sudah termasuk showcase portofolio animasi berkecepatan tinggi.' }
    ],
    nearbyCitySlugs: ['bandung', 'sukabumi', 'cirebon'],
    relevantIndustrySlugs: ['creative', 'textile', 'education', 'technology'],
    seoTitle: 'Jasa Pembuatan Website Cimahi | Solusi Studio Animasi & Bisnis Lokal',
    seoDescription: 'Jasa buat website di Cimahi untuk studio kreatif, pabrik tekstil, dan UMKM. Tampilan memukau, responsif di HP, dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website cimahi', 'bikin web cimahi', 'web design cimahi', 'jasa web murah cimahi']
  },
  {
    name: 'Jambi',
    slug: 'jambi',
    province: 'Jambi',
    dominantIndustries: ['palm-oil', 'rubber', 'coal', 'forestry', 'trading'],
    economicProfile: 'Jambi mengandalkan kekuatan ekonomi perkebunan kelapa sawit, karet, dan batubara. Website B2B membantu para supplier dan kontraktor lokal memenangkan kepercayaan klien besar.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah website sudah termasuk pendaftaran di Google Bisnisku?', answer: 'Ya, kami membantu integrasi Google Maps dan pendaftaran sitemap ke Google Search Console.' }
    ],
    nearbyCitySlugs: ['palembang', 'pekanbaru', 'padang'],
    relevantIndustrySlugs: ['plantation', 'mining', 'trading', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Jambi Terpercaya | Web Perusahaan Sawit & Karet',
    seoDescription: 'Jasa bikin website di Jambi untuk perusahaan perkebunan sawit, kontraktor tambang, dan distributor. Loading cepat, bergaransi SEO, dan aman.',
    seoKeywords: ['jasa pembuatan website jambi', 'bikin web jambi', 'web design jambi murah', 'jasa website perusahaan jambi']
  },
  {
    name: 'Surakarta',
    slug: 'surakarta',
    province: 'Jawa Tengah',
    dominantIndustries: ['textile', 'batik', 'culinary', 'tourism', 'creative'],
    economicProfile: 'Surakarta (Solo) adalah pusat kebudayaan batik, industri garmen tekstil, dan kuliner Jawa terkemuka. Pengrajin batik dan pengusaha Solo memerlukan website katalog elegan untuk menjangkau pasar nasional.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah cocok untuk galeri batik dan toko kuliner di Solo?', answer: 'Sangat cocok, kami menyediakan tampilan galeri produk elegan dengan tombol pesan WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['semarang', 'yogyakarta', 'magelang', 'kudus'],
    relevantIndustrySlugs: ['textile', 'culinary', 'tourism', 'creative'],
    seoTitle: 'Jasa Pembuatan Website Solo (Surakarta) | Bikin Web Batik & Bisnis Cepat',
    seoDescription: 'Jasa pembuatan website di Solo (Surakarta) untuk produsen batik, kuliner, dan bisnis jasa. Desain elegan, responsif ponsel, dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website solo', 'jasa pembuatan website surakarta', 'bikin web solo murah', 'web design solo']
  },
  {
    name: 'Yogyakarta',
    slug: 'yogyakarta',
    province: 'DI Yogyakarta',
    dominantIndustries: ['education', 'tourism', 'creative-agency', 'software', 'craft'],
    economicProfile: 'Yogyakarta sebagai kota pelajar dan budaya memiliki ribuan pengembang perangkat lunak, startup, biro wisata, dan seniman kriya. Website di Jogja menuntut kreativitas desain dan arsitektur kode mutakhir.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah menggunakan arsitektur web modern seperti Next.js?', answer: 'Ya, seluruh website kami dibangun menggunakan Next.js App Router murni dengan skor Google PageSpeed di atas 95.' }
    ],
    nearbyCitySlugs: ['surakarta', 'magelang', 'semarang', 'purwokerto'],
    relevantIndustrySlugs: ['education', 'tourism', 'software', 'creative', 'craft'],
    seoTitle: 'Jasa Pembuatan Website Jogja (Yogyakarta) | Web Cepat, Modern & SEO',
    seoDescription: 'Jasa pembuatan website di Jogja untuk biro wisata, sekolah/kampus, agensi, dan startup. Desain modern kelas dunia, super gesit, dan teroptimasi SEO.',
    seoKeywords: ['jasa pembuatan website jogja', 'jasa pembuatan website yogyakarta', 'bikin web jogja murah', 'web design yogyakarta']
  },
  {
    name: 'Cilegon',
    slug: 'cilegon',
    province: 'Banten',
    dominantIndustries: ['steel-industry', 'petrochemical', 'heavy-manufacturing', 'port'],
    economicProfile: 'Cilegon (Kota Baja) adalah rumah bagi pabrik baja Krakatau Steel dan kluster petrokimia raksasa. Website industri di Cilegon membutuhkan tampilan tangguh, sertifikasi K3, dan spesifikasi material teknis presisi.',
    typicalPriceExpectation: 'Rp 3.000.000 - Rp 20.000.000',
    localFaqs: [
      { question: 'Apakah bisa merancang website untuk vendor industri baja dan kimia di Cilegon?', answer: 'Sangat bisa, kami berpengalaman merancang profil vendor petrokimia dan baja dengan portofolio spesifikasi teknis lengkap.' }
    ],
    nearbyCitySlugs: ['serang', 'tangerang', 'jakarta', 'bandar-lampung'],
    relevantIndustrySlugs: ['steel', 'manufacturing', 'petrochemical', 'port'],
    seoTitle: 'Jasa Pembuatan Website Cilegon | Spesialis Pabrik Baja & Petrokimia',
    seoDescription: 'Jasa buat website di Cilegon untuk industri baja, petrokimia, vendor proyek, dan logistik pelabuhan. Desain berstandar B2B, cepat dan aman.',
    seoKeywords: ['jasa pembuatan website cilegon', 'bikin web cilegon', 'web design cilegon industri', 'jasa website pabrik cilegon']
  },
  {
    name: 'Serang',
    slug: 'serang',
    province: 'Banten',
    dominantIndustries: ['manufacturing', 'agriculture', 'logistics', 'government', 'trading'],
    economicProfile: 'Serang sebagai ibu kota Provinsi Banten dan kawasan industri Cikande terus berkembang menjadi pusat manufaktur penyangga ibu kota yang membutuhkan website kredibel.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website untuk pabrik di Cikande Serang?', answer: 'Paket industri Cikande mulai dari Rp 2.500.000 lengkap dengan profil pabrik dan integrasi WhatsApp sales.' }
    ],
    nearbyCitySlugs: ['cilegon', 'tangerang', 'jakarta'],
    relevantIndustrySlugs: ['manufacturing', 'logistics', 'agriculture', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Serang Banten | Web Perusahaan & Pabrik Cikande',
    seoDescription: 'Jasa pembuatan website di Serang Banten untuk pabrik kawasan Cikande, kontraktor, dan UMKM. Desain modern, loading instan, bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website serang', 'bikin web serang banten', 'web design serang cikande', 'jasa website serang murah']
  },
  {
    name: 'Cirebon',
    slug: 'cirebon',
    province: 'Jawa Barat',
    dominantIndustries: ['rattan-craft', 'port', 'culinary', 'tourism', 'trading'],
    economicProfile: 'Cirebon adalah pusat ekspor kerajinan rotan dunia, industri perikanan, dan kuliner pesisir. Pelaku ekspor di Cirebon membutuhkan website berstandar internasional untuk menarik buyer luar negeri.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat katalog produk rotan untuk ekspor luar negeri?', answer: 'Tentu, kami menyajikan galeri produk dengan foto tajam terkompresi WebP dan deskripsi multi-bahasa.' }
    ],
    nearbyCitySlugs: ['bandung', 'tegal', 'pekalongan', 'semarang'],
    relevantIndustrySlugs: ['craft', 'port', 'culinary', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Cirebon | Web Ekspor Rotan, Wisata & Bisnis',
    seoDescription: 'Jasa bikin website di Cirebon untuk pengrajin ekspor rotan, kuliner, dan bisnis jasa. Kecepatan maksimal, elegan, dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website cirebon', 'bikin web cirebon', 'web design cirebon ekspor', 'jasa website cirebon murah']
  },
  {
    name: 'Sukabumi',
    slug: 'sukabumi',
    province: 'Jawa Barat',
    dominantIndustries: ['agriculture', 'bottled-water', 'tourism-geopark', 'tea-plantation'],
    economicProfile: 'Sukabumi memiliki potensi agribisnis, air minum dalam kemasan, dan pariwisata UNESCO Ciletuh Geopark yang membutuhkan website representatif untuk mendatangkan wisatawan dan pembeli.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Berapa lama website geopark / wisata Sukabumi selesai dibuat?', answer: 'Pengerjaan berkisar 5-7 hari kerja lengkap dengan panduan navigasi dan form pemesanan tur.' }
    ],
    nearbyCitySlugs: ['bogor', 'bandung', 'cianjur'],
    relevantIndustrySlugs: ['tourism', 'agriculture', 'beverage', 'hospitality'],
    seoTitle: 'Jasa Pembuatan Website Sukabumi | Solusi Digital Wisata & Agribisnis',
    seoDescription: 'Jasa pembuatan website di Sukabumi untuk resort geopark, agribisnis, dan UKM. Tampilan menarik, cepat diakses ponsel, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website sukabumi', 'bikin web sukabumi', 'web design sukabumi geopark', 'jasa website sukabumi murah']
  },
  {
    name: 'Tasikmalaya',
    slug: 'tasikmalaya',
    province: 'Jawa Barat',
    dominantIndustries: ['handicraft', 'embroidery-bordir', 'culinary', 'trading', 'education'],
    economicProfile: 'Tasikmalaya adalah pusat kerajinan bordir, payung geulis, dan anyaman mendong Jawa Barat. Website toko online dan profil pengrajin membuka pasar langsung ke konsumen nasional.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk toko bordir dan konveksi di Tasikmalaya?', answer: 'Sangat bisa, kami merancang katalog bordir dan seragam dengan fitur chat WhatsApp otomatis.' }
    ],
    nearbyCitySlugs: ['bandung', 'cirebon', 'ciamis'],
    relevantIndustrySlugs: ['craft', 'textile', 'culinary', 'education'],
    seoTitle: 'Jasa Pembuatan Website Tasikmalaya | Web Bordir, Kerajinan & Bisnis',
    seoDescription: 'Jasa buat website di Tasikmalaya untuk pengrajin bordir, industri kreatif, dan bisnis dagang. Desain elegan, responsif ponsel, dan bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website tasikmalaya', 'bikin web tasikmalaya', 'web design tasikmalaya bordir', 'jasa website tasik murah']
  },
  {
    name: 'Karawang',
    slug: 'karawang',
    province: 'Jawa Barat',
    dominantIndustries: ['automotive-assembly', 'industrial-estate', 'manufacturing', 'agriculture'],
    economicProfile: 'Karawang adalah lumbung padi yang telah menjelma menjadi ibu kota otomotif Indonesia (KIIC, Surya Cipta). Vendor suku cadang dan kontraktor pabrik membutuhkan profil website resmi untuk verifikasi pengadaan vendor.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 18.000.000',
    localFaqs: [
      { question: 'Apakah melayani vendor pabrik otomotif di KIIC Karawang?', answer: 'Ya, kami berpengalaman membangun profil kontraktor mekanikal elektrikal dan vendor manufaktur KIIC Karawang.' }
    ],
    nearbyCitySlugs: ['bekasi', 'jakarta', 'purwakarta'],
    relevantIndustrySlugs: ['automotive', 'manufacturing', 'contractor', 'logistics'],
    seoTitle: 'Jasa Pembuatan Website Karawang & KIIC | Spesialis Vendor Pabrik Otomotif',
    seoDescription: 'Jasa pembuatan website di Karawang untuk vendor otomotif, pabrik kawasan industri KIIC/Surya Cipta, dan kontraktor. Skor PageSpeed 95+ bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website karawang', 'bikin web kiic karawang', 'web design karawang pabrik', 'jasa website industri karawang']
  },
  {
    name: 'Purwokerto',
    slug: 'purwokerto',
    province: 'Jawa Tengah',
    dominantIndustries: ['education', 'tourism-baturraden', 'culinary', 'healthcare', 'services'],
    economicProfile: 'Purwokerto (Banyumas) sebagai pusat pendidikan di Jawa Tengah barat daya memiliki banyak klinik kesehatan, hotel Baturraden, dan UMKM makanan khas yang membutuhkan etalase online profesional.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 9.000.000',
    localFaqs: [
      { question: 'Berapa biaya bikin website klinik atau dokter di Purwokerto?', answer: 'Paket klinik kesehatan dan praktik dokter di Purwokerto mulai dari Rp 1.500.000 lengkap dengan jadwal praktik dan booking online.' }
    ],
    nearbyCitySlugs: ['tegal', 'cilacap', 'magelang', 'semarang'],
    relevantIndustrySlugs: ['education', 'tourism', 'clinic', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Purwokerto & Banyumas | Cepat, Elegan & Murah',
    seoDescription: 'Jasa bikin website di Purwokerto untuk klinik, hotel Baturraden, kampus, dan UMKM. Tampilan modern, loading instan, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website purwokerto', 'bikin web banyumas', 'web design purwokerto murah', 'jasa website baturraden']
  },
  {
    name: 'Tegal',
    slug: 'tegal',
    province: 'Jawa Tengah',
    dominantIndustries: ['metal-casting', 'shipyard', 'culinary-warteg', 'trading', 'textile'],
    economicProfile: 'Tegal dijuluki Jepangnya Indonesia karena keahlian industri pengecoran logam dan galangan kapal rakyat. Pengusaha logam Tegal memerlukan website katalog presisi untuk memasok kebutuhan industri nasional.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk pabrik cor logam dan perkapalan Tegal?', answer: 'Bisa, kami menyajikan spesifikasi material logam dan kapasitas mesin bubut secara detail.' }
    ],
    nearbyCitySlugs: ['pekalongan', 'cirebon', 'purwokerto', 'semarang'],
    relevantIndustrySlugs: ['metal-casting', 'maritime', 'manufacturing', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Tegal | Web Cor Logam, Perkapalan & Bisnis',
    seoDescription: 'Jasa pembuatan website di Tegal untuk industri pengecoran logam, galangan kapal, dan usaha dagang. Desain profesional, cepat, dan teroptimasi SEO.',
    seoKeywords: ['jasa pembuatan website tegal', 'bikin web tegal murah', 'web design tegal logam', 'jasa web perusahaan tegal']
  },
  {
    name: 'Pekalongan',
    slug: 'pekalongan',
    province: 'Jawa Tengah',
    dominantIndustries: ['batik-capital', 'fishery-port', 'textile', 'trading', 'creative'],
    economicProfile: 'Pekalongan adalah Kota Batik Dunia UNESCO dan pusat pelabuhan perikanan Jawa Tengah. Produsen batik Pekalongan membutuhkan website toko online cepat untuk penjualan grosir ke seluruh nusantara.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah website bisa digunakan untuk katalog grosir batik Pekalongan?', answer: 'Sangat bisa, dilengkapi fitur unduh katalog PDF dan tombol pesan langsung ke WhatsApp admin grosir.' }
    ],
    nearbyCitySlugs: ['tegal', 'semarang', 'kudus', 'cirebon'],
    relevantIndustrySlugs: ['textile', 'fishery', 'craft', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Pekalongan | Web Grosir Batik & Bisnis Perikanan',
    seoDescription: 'Jasa bikin website di Pekalongan untuk produsen batik, industri perikanan, dan UMKM. Tampilan memikat, loading cepat di ponsel, dan ramah SEO.',
    seoKeywords: ['jasa pembuatan website pekalongan', 'bikin web batik pekalongan', 'web design pekalongan murah', 'jasa website toko pekalongan']
  },
  {
    name: 'Kudus',
    slug: 'kudus',
    province: 'Jawa Tengah',
    dominantIndustries: ['tobacco-clove', 'electronics-polytron', 'paper', 'culinary', 'confectionery'],
    economicProfile: 'Kudus adalah kota industri rokok kretek terbesar dan basis manufaktur elektronik Polytron. Bisnis di Kudus mengutamakan efisiensi biaya, reliabilitas tinggi, dan reputasi merek solid.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 14.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website perusahaan manufaktur di Kudus?', answer: 'Mulai dari Rp 2.500.000 untuk profil industri lengkap dengan sistem keamanan SSL dan sertifikasi mutu.' }
    ],
    nearbyCitySlugs: ['semarang', 'pati', 'jepara', 'surakarta'],
    relevantIndustrySlugs: ['manufacturing', 'electronics', 'paper', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Kudus Profesional | Solusi Web Pabrik & Industri',
    seoDescription: 'Jasa buat website di Kudus untuk perusahaan manufaktur, percetakan, dan UMKM. Desain modern kelas korporat, cepat dan bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website kudus', 'bikin web kudus', 'web design kudus industri', 'jasa website kudus murah']
  },
  {
    name: 'Magelang',
    slug: 'magelang',
    province: 'Jawa Tengah',
    dominantIndustries: ['heritage-borobudur', 'military-academy', 'agriculture', 'tourism-hospitality'],
    economicProfile: 'Magelang adalah rumah bagi Candi Borobudur dan Akademi Militer. Bisnis perhotelan, paket wisata heritage, dan agribisnis sayur di Magelang memerlukan website visual yang memikat turis dan mitra.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website hotel dan glamping di sekitar Borobudur?', answer: 'Tentu, kami menyematkan galeri foto estetik WebP dan formulir reservasi kamar langsung terhubung ke WhatsApp.' }
    ],
    nearbyCitySlugs: ['yogyakarta', 'purwokerto', 'semarang', 'surakarta'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'agriculture', 'education'],
    seoTitle: 'Jasa Pembuatan Website Magelang & Borobudur | Web Wisata & Hotel',
    seoDescription: 'Jasa pembuatan website di Magelang untuk hotel, biro wisata Borobudur, dan agribisnis. Desain estetik, loading super cepat, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website magelang', 'bikin web borobudur magelang', 'web design magelang', 'jasa website hotel magelang']
  },
  {
    name: 'Kediri',
    slug: 'kediri',
    province: 'Jawa Timur',
    dominantIndustries: ['tobacco-gudang-garam', 'sugar-mills', 'airport-dhoho', 'trading'],
    economicProfile: 'Kediri dengan kehadiran Bandara Internasional Dhoho baru kini menjadi magnet investasi industri Jawa Timur bagian selatan. Pelaku usaha di Kediri membutuhkan website profesional untuk menyambut ekspansi pasar.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah website sudah siap menyambut pembeli dari luar kota via Bandara Dhoho?', answer: 'Ya, seluruh struktur SEO lokal Kediri kami rancang agar mudah ditemukan oleh pendatang dan mitra bisnis baru.' }
    ],
    nearbyCitySlugs: ['malang', 'surabaya', 'madiun', 'blitar'],
    relevantIndustrySlugs: ['manufacturing', 'agriculture', 'trading', 'infrastructure'],
    seoTitle: 'Jasa Pembuatan Website Kediri Profesional | Solusi Bisnis Era Bandara Dhoho',
    seoDescription: 'Jasa bikin website di Kediri untuk perusahaan, distributor, agribisnis, dan UMKM. Desain modern, cepat dibuka di HP, dan teroptimasi SEO.',
    seoKeywords: ['jasa pembuatan website kediri', 'bikin web kediri dhoho', 'web design kediri murah', 'jasa website perusahaan kediri']
  },
  {
    name: 'Sidoarjo',
    slug: 'sidoarjo',
    province: 'Jawa Timur',
    dominantIndustries: ['manufacturing', 'leather-craft-tangulangin', 'logistics', 'fishery-shrimp'],
    economicProfile: 'Sidoarjo sebagai penyangga utama Surabaya memiliki ribuan pabrik, pergudangan modern dekat Bandara Juanda, serta sentra kerajinan kulit Tanggulangin. Website B2B sangat krusial bagi distributor di Sidoarjo.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 14.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website toko kerajinan kulit Tanggulangin Sidoarjo?', answer: 'Mulai dari Rp 1.500.000 untuk katalog produk tas dan sepatu kulit lengkap dengan tombol order WhatsApp.' }
    ],
    nearbyCitySlugs: ['surabaya', 'gresik', 'malang', 'mojokerto'],
    relevantIndustrySlugs: ['manufacturing', 'craft', 'logistics', 'fishery'],
    seoTitle: 'Jasa Pembuatan Website Sidoarjo | Spesialis Pabrik, Gudang & Kerajinan',
    seoDescription: 'Jasa pembuatan website di Sidoarjo untuk industri manufaktur, pergudangan Juanda, dan kerajinan kulit. Skor PageSpeed 95+, loading cepat dan bergaransi.',
    seoKeywords: ['jasa pembuatan website sidoarjo', 'bikin web sidoarjo', 'web design sidoarjo pabrik', 'jasa website tanggulangin sidoarjo']
  },
  {
    name: 'Gresik',
    slug: 'gresik',
    province: 'Jawa Timur',
    dominantIndustries: ['cement-industry', 'petrochemical-fertilizer', 'port-jipe', 'heavy-manufacturing'],
    economicProfile: 'Gresik adalah kawasan industri petrokimia, semen, dan smelter tembaga terpadu (Kawasan Ekonomi Khusus JIIPE). Kontraktor dan vendor industri di Gresik wajib memiliki profil digital kredibel.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 18.000.000',
    localFaqs: [
      { question: 'Apakah melayani pembuatan website vendor KEK JIIPE Gresik?', answer: 'Ya, kami melayani perancangan website kontraktor mekanikal, elektrikal, dan logistik pelabuhan JIIPE Gresik.' }
    ],
    nearbyCitySlugs: ['surabaya', 'sidoarjo', 'lamongan'],
    relevantIndustrySlugs: ['manufacturing', 'petrochemical', 'port', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Gresik & KEK JIIPE | Web Industri & Vendor Proyek',
    seoDescription: 'Jasa buat website di Gresik untuk industri semen, pupuk petrokimia, vendor KEK JIIPE, dan kontraktor. Desain kokoh, cepat, bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website gresik', 'bikin web jiipe gresik', 'web design gresik industri', 'jasa website pabrik gresik']
  },
  {
    name: 'Jember',
    slug: 'jember',
    province: 'Jawa Timur',
    dominantIndustries: ['tobacco-export', 'coffee-cocoa', 'fashion-carnival', 'education'],
    economicProfile: 'Jember terkenal dengan ekspor tembakau cerutu kualitas dunia, perkebunan kopi, serta event internasional Jember Fashion Carnaval (JFC). Pelaku agribisnis di Jember membutuhkan profil web ekspor resmi.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website untuk agribisnis kopi & tembakau di Jember?', answer: 'Paket agribisnis ekspor di Jember mulai dari Rp 2.000.000 lengkap dengan sertifikasi mutu produk dan multi-bahasa.' }
    ],
    nearbyCitySlugs: ['banyuwangi', 'malang', 'lumajang', 'probolinggo'],
    relevantIndustrySlugs: ['agriculture', 'creative', 'education', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Jember | Solusi Web Agribisnis, Kopi & Fashion',
    seoDescription: 'Jasa bikin website di Jember untuk pengusaha kopi, tembakau, biro jasa, dan UMKM. Tampilan memukau, responsif di ponsel, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website jember', 'bikin web jember', 'web design jember murah', 'jasa website kopi jember']
  },
  {
    name: 'Banyuwangi',
    slug: 'banyuwangi',
    province: 'Jawa Timur',
    dominantIndustries: ['tourism-ijen', 'fishery-port', 'agriculture', 'creative-economy'],
    economicProfile: 'Banyuwangi sukses bertransformasi menjadi magnet ekowisata dunia (Kawah Ijen) dan pusat pengalengan ikan Muncar. Pengelola hotel, tour operator, dan eksportir ikan memerlukan website prima.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk operator open trip Kawah Ijen Banyuwangi?', answer: 'Tentu, kami menyertakan form booking trip, galeri foto blue fire, dan tombol chat WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['jember', 'denpasar', 'malang'],
    relevantIndustrySlugs: ['tourism', 'fishery', 'hospitality', 'agriculture'],
    seoTitle: 'Jasa Pembuatan Website Banyuwangi | Web Ekowisata Kawah Ijen & Bisnis',
    seoDescription: 'Jasa pembuatan website di Banyuwangi untuk biro wisata Ijen, hotel resort, pengalengan ikan, dan UMKM. Loading instan dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website banyuwangi', 'bikin web ijen banyuwangi', 'web design banyuwangi', 'jasa website wisata banyuwangi']
  },
  {
    name: 'Mataram',
    slug: 'mataram',
    province: 'Nusa Tenggara Barat',
    dominantIndustries: ['tourism-lombok', 'mandalika-gp', 'pearl-culture', 'agriculture'],
    economicProfile: 'Mataram (Lombok) menjadi sorotan dunia berkat Sirkuit Internasional Mandalika MotoGP dan wisata Gili. Pengusaha hotel, mutiara air laut, dan transportasi di Lombok membutuhkan website yang meyakinkan wisatawan internasional.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 14.000.000',
    localFaqs: [
      { question: 'Apakah website bisa menampilkan harga dalam mata uang Rupiah dan Dolar?', answer: 'Bisa, sistem kami siap dikonfigurasikan dengan tampilan konversi mata uang multi-kurs untuk wisatawan asing.' }
    ],
    nearbyCitySlugs: ['denpasar', 'kupang', 'surabaya'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'pearl', 'sports-event'],
    seoTitle: 'Jasa Pembuatan Website Mataram Lombok | Standar Wisata & Mandalika',
    seoDescription: 'Jasa buat website di Mataram Lombok untuk hotel resort Mandalika, rental mobil, mutiara, dan UMKM. Cepat, elegan, dan siap mendatangkan turis.',
    seoKeywords: ['jasa pembuatan website mataram', 'bikin web lombok', 'web design mandalika lombok', 'jasa website wisata lombok']
  },
  {
    name: 'Kupang',
    slug: 'kupang',
    province: 'Nusa Tenggara Timur',
    dominantIndustries: ['fishery', 'cattle-ranch', 'tourism-labuan-bajo', 'renewable-energy'],
    economicProfile: 'Kupang adalah pusat pemerintahan dan perdagangan NTT, serta gerbang penghubung menuju destinasi premium Labuan Bajo. Pelaku usaha di Kupang membutuhkan website untuk memperkuat hubungan dagang antarpulau.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa melayani pembuatan website dari jarak jauh untuk Kupang NTT?', answer: 'Sangat bisa, koordinasi kami lakukan 100% digital via WhatsApp dan video call tanpa hambatan geografis.' }
    ],
    nearbyCitySlugs: ['mataram', 'denpasar', 'makassar'],
    relevantIndustrySlugs: ['fishery', 'cattle', 'tourism', 'renewable-energy'],
    seoTitle: 'Jasa Pembuatan Website Kupang NTT | Web Bisnis & Pariwisata Andal',
    seoDescription: 'Jasa bikin website di Kupang NTT untuk usaha perikanan, peternakan, biro wisata, dan jasa profesional. Loading cepat di jaringan seluler dan bergaransi.',
    seoKeywords: ['jasa pembuatan website kupang', 'bikin web kupang ntt', 'web design kupang', 'jasa website ntt terpercaya']
  },
  {
    name: 'Manado',
    slug: 'manado',
    province: 'Sulawesi Utara',
    dominantIndustries: ['tourism-bunaken', 'fishery-tuna', 'coconut-processing', 'mining'],
    economicProfile: 'Manado adalah gerbang pariwisata bahari dunia (Taman Nasional Bunaken) dan pusat ekspor ikan tuna ke Jepang. Pengelola resort diving dan eksportir perikanan di Manado memerlukan website berskala internasional.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website diving resort Bunaken dengan reservasi online?', answer: 'Tentu, kami merancang paket diving dengan form reservasi jadwal dan integrasi WhatsApp sales.' }
    ],
    nearbyCitySlugs: ['makassar', 'gorontalo', 'ternate'],
    relevantIndustrySlugs: ['tourism', 'fishery', 'hospitality', 'agriculture'],
    seoTitle: 'Jasa Pembuatan Website Manado | Standar Bunaken & Ekspor Perikanan',
    seoDescription: 'Jasa pembuatan website di Manado untuk diving resort, eksportir tuna, hotel, dan bisnis jasa. Tampilan memukau, super cepat, dan ramah SEO global.',
    seoKeywords: ['jasa pembuatan website manado', 'bikin web manado', 'web design bunaken manado', 'jasa website diving manado']
  },
  {
    name: 'Palu',
    slug: 'palu',
    province: 'Sulawesi Tengah',
    dominantIndustries: ['nickel-mining', 'special-economic-zone', 'agriculture-cocoa', 'fishery'],
    economicProfile: 'Palu dan sekitarnya (Morowali) mengalami ledakan hilirisasi pertambangan nikel raksasa. Kontraktor dan supplier di Palu membutuhkan website profil B2B untuk lolos verifikasi vendor pertambangan.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 13.000.000',
    localFaqs: [
      { question: 'Apakah melayani website supplier alat tambang nikel di Palu & Morowali?', answer: 'Ya, kami melayani profil vendor industri tambang nikel dengan portofolio legalitas K3 lengkap.' }
    ],
    nearbyCitySlugs: ['makassar', 'kendari', 'manado'],
    relevantIndustrySlugs: ['mining', 'manufacturing', 'contractor', 'agriculture'],
    seoTitle: 'Jasa Pembuatan Website Palu Sulteng | Vendor Tambang Nikel & Bisnis',
    seoDescription: 'Jasa buat website di Palu untuk vendor pertambangan nikel, kontraktor, dan agribisnis. Desain profesional kelas korporat, cepat dan ramah Google.',
    seoKeywords: ['jasa pembuatan website palu', 'bikin web palu sulteng', 'web design palu tambang', 'jasa website vendor morowali palu']
  },
  {
    name: 'Kendari',
    slug: 'kendari',
    province: 'Sulawesi Tenggara',
    dominantIndustries: ['nickel-smelting', 'fishery', 'agriculture', 'port-logistics'],
    economicProfile: 'Kendari adalah episentrum smelter nikel dan perikanan laut Sulawesi Tenggara. Perusahaan ekspedisi dan kontraktor tambang di Kendari menuntut website yang kredibel untuk memenangkan tender.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 13.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website kontraktor di Kendari?', answer: 'Mulai dari Rp 2.500.000 untuk website profil kontraktor lengkap dengan katalog proyek dan sertifikasi ISO.' }
    ],
    nearbyCitySlugs: ['makassar', 'palu', 'ambon'],
    relevantIndustrySlugs: ['mining', 'fishery', 'logistics', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Kendari Sultra | Solusi Web Tambang & Logistik',
    seoDescription: 'Jasa bikin website di Kendari untuk kontraktor smelter nikel, perikanan, dan ekspedisi logistik. Loading cepat di jaringan seluler dan bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website kendari', 'bikin web kendari sultra', 'web design kendari tambang', 'jasa website kendari murah']
  },
  {
    name: 'Ambon',
    slug: 'ambon',
    province: 'Maluku',
    dominantIndustries: ['fishery', 'spices-nutmeg', 'marine-tourism', 'music-city'],
    economicProfile: 'Ambon (City of Music) adalah pusat perdagangan rempah pala legendaris dan perikanan laut dalam Maluku yang membutuhkan jembatan digital untuk memasarkan produknya secara nasional.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah website bisa diakses cepat dengan koneksi internet pulau di Maluku?', answer: 'Ya, arsitektur SSG kami menghasilkan HTML ringan yang langsung terbuka instan bahkan pada jaringan 3G/4G hemat kuota.' }
    ],
    nearbyCitySlugs: ['sorong', 'jayapura', 'makassar', 'kendari'],
    relevantIndustrySlugs: ['fishery', 'spices', 'tourism', 'music'],
    seoTitle: 'Jasa Pembuatan Website Ambon Maluku | Web Perikanan, Rempah & Wisata',
    seoDescription: 'Jasa pembuatan website di Ambon untuk usaha perikanan, komoditas rempah pala, biro wisata, dan UMKM. Cepat, aman, dan bergaransi resmi.',
    seoKeywords: ['jasa pembuatan website ambon', 'bikin web ambon maluku', 'web design ambon', 'jasa website maluku terpercaya']
  },
  {
    name: 'Jayapura',
    slug: 'jayapura',
    province: 'Papua',
    dominantIndustries: ['infrastructure', 'fishery', 'forestry', 'trading', 'government-services'],
    economicProfile: 'Jayapura sebagai gerbang utama Tanah Papua memiliki aktivitas pembangunan infrastruktur, perikanan laut Pasifik, dan perdagangan antarwilayah yang memerlukan website representatif.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah melayani konsultasi pengerjaan website untuk klien di Jayapura Papua?', answer: 'Ya, kami melayani konsultasi penuh melalui WhatsApp dan Google Meet dengan jadwal waktu yang fleksibel.' }
    ],
    nearbyCitySlugs: ['sorong', 'ambon', 'makassar'],
    relevantIndustrySlugs: ['infrastructure', 'fishery', 'trading', 'logistics'],
    seoTitle: 'Jasa Pembuatan Website Jayapura Papua | Web Profesional & Cepat',
    seoDescription: 'Jasa bikin website di Jayapura untuk kontraktor infrastruktur, perikanan, distributor, dan bisnis lokal Papua. Desain modern, loading cepat, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website jayapura', 'bikin web papua jayapura', 'web design jayapura', 'jasa website terpercaya papua']
  },
  {
    name: 'Sorong',
    slug: 'sorong',
    province: 'Papua Barat Daya',
    dominantIndustries: ['tourism-raja-ampat', 'oil-and-gas', 'fishery', 'port-logistics'],
    economicProfile: 'Sorong adalah gerbang utama menuju surga wisata dunia Raja Ampat serta pusat industri minyak dan perikanan Papua Barat Daya. Operator tur dan kapal phinisi membutuhkan website berkelas internasional.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 16.000.000',
    localFaqs: [
      { question: 'Apakah bisa merancang website booking paket wisata Raja Ampat & kapal phinisi?', answer: 'Sangat bisa, kami merancang website paket tour Raja Ampat dengan galeri foto WebP tajam dan tombol chat booking WhatsApp.' }
    ],
    nearbyCitySlugs: ['jayapura', 'ambon', 'manado'],
    relevantIndustrySlugs: ['tourism', 'maritime', 'fishery', 'oil-and-gas'],
    seoTitle: 'Jasa Pembuatan Website Sorong | Spesialis Wisata Raja Ampat & Bisnis',
    seoDescription: 'Jasa buat website di Sorong untuk operator tour Raja Ampat, perkapalan phinisi, perikanan, dan migas. Tampilan mewah, loading secepat kilat.',
    seoKeywords: ['jasa pembuatan website sorong', 'bikin web raja ampat sorong', 'web design sorong papua barat', 'jasa website wisata raja ampat']
  },
  {
    name: 'Cilacap',
    slug: 'cilacap',
    province: 'Jawa Tengah',
    dominantIndustries: ['oil-refinery-pertamina', 'port', 'fishery', 'cement', 'contractor'],
    economicProfile: 'Cilacap adalah kota industri kilang minyak terbesar di Pulau Jawa (Refinery Unit IV Pertamina) dan pelabuhan samudera selatan. Kontraktor kilang membutuhkan website profil terverifikasi K3.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 13.000.000',
    localFaqs: [
      { question: 'Apakah melayani website vendor kilang Pertamina di Cilacap?', answer: 'Ya, kami berpengalaman merancang profil vendor mekanikal elektrikal kilang dengan portofolio K3 lengkap.' }
    ],
    nearbyCitySlugs: ['purwokerto', 'tegal', 'kebumen'],
    relevantIndustrySlugs: ['oil-and-gas', 'port', 'fishery', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Cilacap | Web Vendor Kilang Minyak & Industri',
    seoDescription: 'Jasa pembuatan website di Cilacap untuk vendor kilang minyak, kontraktor, dan perikanan pelabuhan. Desain kokoh, cepat, dan bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website cilacap', 'bikin web cilacap', 'web design cilacap kilang', 'jasa website vendor cilacap']
  },
  {
    name: 'Madiun',
    slug: 'madiun',
    province: 'Jawa Timur',
    dominantIndustries: ['train-manufacturing-inka', 'agriculture-brem', 'textile', 'education'],
    economicProfile: 'Madiun (Kota Pendekar) adalah pusat industri perkeretaapian nasional (PT INKA) dan agribisnis Jawa Timur barat daya yang membutuhkan kehadiran web representatif.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 9.500.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website UMKM makanan khas & brem di Madiun?', answer: 'Mulai dari Rp 1.500.000 untuk etalase katalog produk lengkap dengan tombol beli via WhatsApp.' }
    ],
    nearbyCitySlugs: ['kediri', 'solo', 'ngawi', 'ponorogo'],
    relevantIndustrySlugs: ['manufacturing', 'agriculture', 'culinary', 'education'],
    seoTitle: 'Jasa Pembuatan Website Madiun | Web Industri Kereta, Kuliner & UKM',
    seoDescription: 'Jasa bikin website di Madiun untuk vendor industri manufaktur, makanan khas brem, dan bisnis jasa. Cepat dibuka di ponsel dan ramah Google.',
    seoKeywords: ['jasa pembuatan website madiun', 'bikin web madiun murah', 'web design madiun', 'jasa website ukm madiun']
  },
  {
    name: 'Probolinggo',
    slug: 'probolinggo',
    province: 'Jawa Timur',
    dominantIndustries: ['tourism-bromo', 'fishery-port', 'agriculture-mango', 'logistics'],
    economicProfile: 'Probolinggo adalah gerbang utara menuju Bromo serta pelabuhan perikanan dan perkebunan mangga. Agen wisata dan eksportir perikanan di Probolinggo memerlukan media promosi digital yang handal.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 10.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website paket wisata Bromo & jeep tour di Probolinggo?', answer: 'Bisa, lengkap dengan form pemesanan sewa jeep Bromo dan integrasi chat WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['pasuruan', 'malang', 'jember', 'surabaya'],
    relevantIndustrySlugs: ['tourism', 'fishery', 'agriculture', 'hospitality'],
    seoTitle: 'Jasa Pembuatan Website Probolinggo | Web Wisata Bromo & Perikanan',
    seoDescription: 'Jasa buat website di Probolinggo untuk agen wisata Bromo, persewaan jeep, perikanan, dan UMKM. Desain menarik, loading cepat, dan ramah SEO.',
    seoKeywords: ['jasa pembuatan website probolinggo', 'bikin web bromo probolinggo', 'web design probolinggo', 'jasa website wisata bromo']
  },
  {
    name: 'Pasuruan',
    slug: 'pasuruan',
    province: 'Jawa Timur',
    dominantIndustries: ['industrial-estate-pieer', 'metal-foundry', 'agriculture-apple', 'furniture'],
    economicProfile: 'Pasuruan (PIER) menampung puluhan industri manufaktur multinasional dan sentra mebel kayu. Kebutuhan website B2B vendor kawasan industri sangat tinggi untuk verifikasi rekanan.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 13.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk pabrik di kawasan industri PIER Pasuruan?', answer: 'Ya, kami berpengalaman membangun profil pabrik kawasan PIER dengan standar keamanan tinggi.' }
    ],
    nearbyCitySlugs: ['sidoarjo', 'surabaya', 'malang', 'probolinggo'],
    relevantIndustrySlugs: ['manufacturing', 'furniture', 'industrial-estate', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Pasuruan & PIER | Spesialis Pabrik & Mebel',
    seoDescription: 'Jasa pembuatan website di Pasuruan untuk pabrik kawasan industri PIER, mebel kayu, dan kontraktor. Desain profesional, cepat, dan bergaransi SEO.',
    seoKeywords: ['jasa pembuatan website pasuruan', 'bikin web pier pasuruan', 'web design pasuruan pabrik', 'jasa website pasuruan murah']
  },
  {
    name: 'Mojokerto',
    slug: 'mojokerto',
    province: 'Jawa Timur',
    dominantIndustries: ['history-majapahit', 'footwear-industry', 'agriculture', 'manufacturing-ngoro'],
    economicProfile: 'Mojokerto adalah pusat kawasan industri Ngoro Industrial Park (NIP) dan sentra industri alas kaki/sepatu. Pelaku bisnis di Mojokerto membutuhkan website katalog untuk melayani pesanan tender dan grosir.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Berapa biaya pembuatan website untuk pabrik di Ngoro Mojokerto?', answer: 'Mulai dari Rp 2.500.000 untuk profil pabrik lengkap dengan sertifikasi mutu dan galeri produksi.' }
    ],
    nearbyCitySlugs: ['sidoarjo', 'surabaya', 'jombang', 'pasuruan'],
    relevantIndustrySlugs: ['manufacturing', 'footwear', 'tourism', 'contractor'],
    seoTitle: 'Jasa Pembuatan Website Mojokerto & Ngoro | Web Industri & Sentra Sepatu',
    seoDescription: 'Jasa bikin website di Mojokerto untuk pabrik kawasan Ngoro (NIP), produsen sepatu, dan UKM. Loading instan, desain modern, dan teroptimasi SEO.',
    seoKeywords: ['jasa pembuatan website mojokerto', 'bikin web ngoro mojokerto', 'web design mojokerto', 'jasa website sepatu mojokerto']
  },
  {
    name: 'Blitar',
    slug: 'blitar',
    province: 'Jawa Timur',
    dominantIndustries: ['poultry-farming', 'koi-fish', 'heritage-bung-karno', 'agriculture'],
    economicProfile: 'Blitar adalah sentra peternakan telur ayam dan budidaya ikan koi terbesar di Indonesia. Peternak dan pembudidaya Blitar memerlukan website untuk memasok pasar langsung tanpa tengkulak.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 9.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk katalog budidaya ikan koi Blitar?', answer: 'Bisa, dilengkapi galeri video & foto koi beresolusi tinggi dengan tombol order WhatsApp.' }
    ],
    nearbyCitySlugs: ['kediri', 'malang', 'tulungagung'],
    relevantIndustrySlugs: ['poultry', 'fishery', 'agriculture', 'tourism'],
    seoTitle: 'Jasa Pembuatan Website Blitar | Web Peternakan Telur, Koi & Bisnis',
    seoDescription: 'Jasa pembuatan website di Blitar untuk peternak telur ayam, pembudidaya ikan koi, dan UMKM. Tampilan menarik, cepat di ponsel, dan ramah Google.',
    seoKeywords: ['jasa pembuatan website blitar', 'bikin web koi blitar', 'web design blitar murah', 'jasa website peternakan blitar']
  },
  {
    name: 'Batu',
    slug: 'batu',
    province: 'Jawa Timur',
    dominantIndustries: ['tourism-theme-park', 'apple-plantation', 'hospitality-villa', 'culinary'],
    economicProfile: 'Kota Batu adalah episentrum pariwisata keluarga Jawa Timur dengan puluhan themepark dan ratusan villa. Pemilik villa dan pengelola wisata di Batu membutuhkan website yang memikat reservasi langsung.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website persewaan villa di Batu Malang?', answer: 'Tentu, lengkap dengan foto kamar estetik WebP, daftar fasilitas, dan tombol booking WhatsApp instan.' }
    ],
    nearbyCitySlugs: ['malang', 'kediri', 'pasuruan'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'agriculture', 'culinary'],
    seoTitle: 'Jasa Pembuatan Website Kota Batu | Web Sewa Villa, Wisata & Apel',
    seoDescription: 'Jasa bikin website di Kota Batu untuk persewaan villa, paket wisata, restoran, dan agribisnis apel. Desain estetik, loading cepat, dan ramah SEO.',
    seoKeywords: ['jasa pembuatan website batu', 'bikin web villa batu malang', 'web design kota batu', 'jasa website wisata batu']
  },
  {
    name: 'Salatiga',
    slug: 'salatiga',
    province: 'Jawa Tengah',
    dominantIndustries: ['education-uksw', 'culinary-ting-ting', 'textile', 'confectionery'],
    economicProfile: 'Salatiga adalah kota pendidikan toleran yang sejuk di lereng Merbabu dengan industri kuliner khas dan pabrik garmen ekspor yang membutuhkan media promosi digital modern.',
    typicalPriceExpectation: 'Rp 1.500.000 - Rp 9.500.000',
    localFaqs: [
      { question: 'Berapa hari pengerjaan website untuk bisnis kuliner di Salatiga?', answer: 'Rata-rata 5-7 hari kerja sudah siap tayang dan terindeks di pencarian Google.' }
    ],
    nearbyCitySlugs: ['semarang', 'surakarta', 'magelang'],
    relevantIndustrySlugs: ['education', 'culinary', 'textile', 'services'],
    seoTitle: 'Jasa Pembuatan Website Salatiga | Cepat, Modern & Terjangkau',
    seoDescription: 'Jasa pembuatan website di Salatiga untuk lembaga edukasi, kuliner oleh-oleh, garmen, dan UMKM. Loading instan dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website salatiga', 'bikin web salatiga murah', 'web design salatiga', 'jasa website edukasi salatiga']
  },
  {
    name: 'Tarakan',
    slug: 'tarakan',
    province: 'Kalimantan Utara',
    dominantIndustries: ['fishery-prawn', 'oil-and-gas', 'border-trade', 'wood-processing'],
    economicProfile: 'Tarakan adalah pusat ekonomi Kalimantan Utara dengan ekspor udang windu berkualitas tinggi dan perikanan laut. Eksportir dan kontraktor di Tarakan memerlukan profil web B2B kredibel.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 12.000.000',
    localFaqs: [
      { question: 'Apakah melayani pembuatan website untuk eksportir udang di Tarakan?', answer: 'Ya, kami merancang situs profil eksportir hasil laut dengan sertifikasi karantina mutu internasional.' }
    ],
    nearbyCitySlugs: ['balikpapan', 'samarinda', 'manado'],
    relevantIndustrySlugs: ['fishery', 'oil-and-gas', 'trading', 'maritime'],
    seoTitle: 'Jasa Pembuatan Website Tarakan Kaltara | Web Ekspor Udang & Perikanan',
    seoDescription: 'Jasa bikin website di Tarakan Kalimantan Utara untuk eksportir hasil laut, kontraktor migas, dan bisnis dagang. Cepat, aman, dan bergaransi.',
    seoKeywords: ['jasa pembuatan website tarakan', 'bikin web tarakan kaltara', 'web design tarakan', 'jasa website kaltara']
  },
  {
    name: 'Bontang',
    slug: 'bontang',
    province: 'Kalimantan Timur',
    dominantIndustries: ['fertilizer-pupuk-kaltim', 'lng-badak', 'petrochemical', 'contractor'],
    economicProfile: 'Bontang adalah kota industri petrokimia pupuk terbesar (Pupuk Kaltim) dan pengolahan gas alam cair (Badak LNG). Vendor industri di Bontang wajib memiliki website berstandar SHE dan ISO.',
    typicalPriceExpectation: 'Rp 2.500.000 - Rp 15.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk vendor proyek migas & pabrik pupuk di Bontang?', answer: 'Tentu, kami merancang profil vendor industri berat dengan portofolio K3 dan legalitas usaha lengkap.' }
    ],
    nearbyCitySlugs: ['samarinda', 'balikpapan', 'sangatta'],
    relevantIndustrySlugs: ['petrochemical', 'oil-and-gas', 'contractor', 'manufacturing'],
    seoTitle: 'Jasa Pembuatan Website Bontang Kaltim | Spesialis Vendor Pupuk & LNG',
    seoDescription: 'Jasa buat website di Bontang untuk vendor industri petrokimia, kontraktor migas, dan penyedia jasa proyek. Desain kokoh kelas B2B, cepat dan aman.',
    seoKeywords: ['jasa pembuatan website bontang', 'bikin web bontang kaltim', 'web design bontang migas', 'jasa website pabrik bontang']
  },
  {
    name: 'Pangkalpinang',
    slug: 'pangkalpinang',
    province: 'Kepulauan Bangka Belitung',
    dominantIndustries: ['tin-mining', 'palm-oil', 'pepper-lada-putih', 'marine-tourism'],
    economicProfile: 'Pangkalpinang (Bangka Belitung) terkenal dengan timah, lada putih Muntok White Pepper, dan wisata pantai batu granit. Pengusaha komoditas dan biro wisata memerlukan etalase digital resmi.',
    typicalPriceExpectation: 'Rp 1.800.000 - Rp 11.000.000',
    localFaqs: [
      { question: 'Apakah bisa membuat website paket wisata pantai Bangka Belitung?', answer: 'Bisa, lengkap dengan galeri foto pantai berformat WebP ringan dan tombol chat booking WhatsApp.' }
    ],
    nearbyCitySlugs: ['palembang', 'batam', 'jakarta'],
    relevantIndustrySlugs: ['mining', 'agriculture', 'tourism', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Pangkalpinang | Web Wisata Bangka & Komoditas',
    seoDescription: 'Jasa pembuatan website di Pangkalpinang Bangka Belitung untuk biro wisata pantai, lada putih, dan bisnis lokal. Loading cepat dan ramah SEO Google.',
    seoKeywords: ['jasa pembuatan website pangkalpinang', 'bikin web bangka belitung', 'web design pangkalpinang', 'jasa website babel murah']
  },
  {
    name: 'Tanjung Pinang',
    slug: 'tanjung-pinang',
    province: 'Kepulauan Riau',
    dominantIndustries: ['heritage-tourism', 'government', 'fishery', 'border-trade', 'bintan-resort'],
    economicProfile: 'Tanjung Pinang (Pulau Bintan) memiliki resort internasional dan perdagangan kepulauan. Pelaku usaha di Tanjung Pinang membutuhkan website dwibahasa untuk menarik wisatawan Singapura dan Malaysia.',
    typicalPriceExpectation: 'Rp 2.000.000 - Rp 13.000.000',
    localFaqs: [
      { question: 'Apakah bisa untuk resort wisata dan tour di Pulau Bintan?', answer: 'Sangat bisa, kami merancang situs resort dengan tampilan mewah dan formulir reservasi online.' }
    ],
    nearbyCitySlugs: ['batam', 'pekanbaru', 'singapura'],
    relevantIndustrySlugs: ['tourism', 'hospitality', 'fishery', 'trading'],
    seoTitle: 'Jasa Pembuatan Website Tanjung Pinang Bintan | Standar Wisata Dunia',
    seoDescription: 'Jasa bikin website di Tanjung Pinang dan Bintan untuk resort, biro wisata, perikanan, dan bisnis jasa. Tampilan elegan, responsif ponsel, dan bergaransi.',
    seoKeywords: ['jasa pembuatan website tanjung pinang', 'bikin web bintan', 'web design tanjungpinang kepri', 'jasa website bintan resort']
  }
];

export const INDONESIAN_CITIES = CITIES;
