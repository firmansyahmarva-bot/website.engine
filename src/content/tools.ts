export type ToolCategory = 'SEO' | 'Marketing' | 'Performance' | 'Design & UX';

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  badge?: string;
  iconName: string;
  features: string[];
  howToUse: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  ctaType: 'configure' | 'website-packages' | 'audit-gratis';
  ctaTitle: string;
  ctaDescription: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  relatedToolSlugs: string[];
}

export const TOOLS: ToolItem[] = [
  {
    id: 'meta-tag-generator',
    slug: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    title: 'Meta Tag & Open Graph Generator',
    tagline: 'Buat tag HTML meta title, description, Open Graph, dan Twitter Card dengan live SERP preview & copy instan.',
    description:
      'Alat praktis untuk mengenerate meta tags lengkap untuk SEO Google, kartu media sosial Facebook, WhatsApp, dan Twitter/X. Lengkap dengan validasi panjang karakter dan format Next.js 16 metadata.',
    category: 'SEO',
    badge: 'Paling Populer',
    iconName: 'Tags',
    features: [
      'Generator tag SEO standar (Title, Description, Canonical, Robots, Keywords)',
      'Generator Open Graph tags untuk Facebook, WhatsApp, dan LinkedIn',
      'Generator Twitter / X Summary Card tags',
      'Live Google SERP preview & Social Card preview langsung di browser',
      'Ekspor dalam 2 format: Tag HTML mentah (<head>) & Object Next.js 16 Metadata',
      '100% Client-side tanpa login dan tanpa batasan pemakaian',
    ],
    howToUse: [
      {
        step: 'Masukkan Informasi Halaman',
        detail: 'Ketik judul halaman, deskripsi meta, URL kanonikal, nama brand, dan tautan gambar pratinjau (Open Graph image 1200x630px).',
      },
      {
        step: 'Periksa Live Preview & Indikator Panjang',
        detail: 'Pastikan judul berkisar 50-60 karakter dan deskripsi 140-160 karakter agar tidak terpotong pada hasil pencarian Google.',
      },
      {
        step: 'Salin Kode & Tempel ke Website',
        detail: 'Klik tombol "Salin HTML" untuk situs HTML biasa atau "Salin Next.js Metadata" untuk proyek Next.js / React Anda.',
      },
    ],
    faqs: [
      {
        question: 'Berapa panjang ideal untuk meta title dan meta description?',
        answer:
          'Meta title idealnya terdiri dari 50–60 karakter (atau maksimal 600 pixel pada desktop) agar tidak terpotong elipsis (...) di Google SERP. Untuk meta description, panjang optimal adalah 140–160 karakter (maksimal 960 pixel).',
      },
      {
        question: 'Apakah Open Graph tags mempengaruhi peringkat SEO Google?',
        answer:
          'Secara langsung Open Graph tidak menaikkan ranking Google, namun secara tidak langsung meningkatkan Click-Through Rate (CTR) saat link dibagikan di WhatsApp, LinkedIn, atau media sosial, yang mendatangkan traffic organik berkualitas.',
      },
      {
        question: 'Berapa ukuran gambar yang disarankan untuk og:image?',
        answer:
          'Rasio standar yang disarankan adalah 1.91:1 dengan dimensi 1200 x 630 pixel dalam format JPG, PNG, atau WebP dengan kompresi di bawah 300 KB agar cepat dimuat oleh crawler.',
      },
    ],
    ctaType: 'audit-gratis',
    ctaTitle: 'Ingin Struktur SEO & Meta Tag Website Anda Terpasang Sempurna?',
    ctaDescription:
      'Dapatkan audit website gratis dari tim JasaWebsite. Kami menganalisis struktur On-Page SEO, Core Web Vitals, dan visibilitas schema website Anda.',
    seoTitle: 'Meta Tag Generator Online Gratis - Buat Tag Open Graph & SEO',
    seoDescription:
      'Generator meta tag SEO dan Open Graph tags gratis. Buat meta title, description, og:image, dan Twitter cards otomatis dengan live SERP preview & copy instan.',
    seoKeywords: [
      'meta tag generator',
      'open graph generator',
      'generator meta tag online',
      'buat meta tag seo',
      'og image generator tag',
      'twitter card generator',
    ],
    relatedToolSlugs: ['og-preview', 'serp-character-counter', 'schema-generator'],
  },
  {
    id: 'whatsapp-link-generator',
    slug: 'whatsapp-link-generator',
    name: 'WhatsApp Link Generator',
    title: 'WhatsApp Direct Link & QR Code Generator',
    tagline: 'Buat link wa.me kustom dengan teks pesan otomatis serta unduh QR code SVG/PNG berkualitas tinggi.',
    description:
      'Buat link WhatsApp instan (wa.me) dengan pesan pembuka otomatis untuk closing penjualan, customer care, dan promosi campaign. Dilengkapi generator QR code instan berbasis pure vector SVG tanpa dependensi server.',
    category: 'Marketing',
    badge: 'Favorit Pebisnis',
    iconName: 'MessageSquare',
    features: [
      'Format nomor otomatis: otomatis membersihkan angka 0, +, spasi, dan tanda hubung ke format internasional +62',
      'Koleksi template pesan pembuka siap pakai (Tanya Harga, Pesan Produk, Konsultasi Web, Reservasi)',
      'Generator QR Code murni (Vector SVG & High-Res PNG) tanpa kirim data ke server pihak ketiga',
      'Pilihan warna kustom QR Code (Emerald WhatsApp, Slate Modern, Blue Navy)',
      'Tombol "Test di WhatsApp" untuk mencoba langsung di browser atau handphone',
      'Snippet kode tombol WhatsApp HTML siap tempel untuk website',
    ],
    howToUse: [
      {
        step: 'Ketik Nomor WhatsApp',
        detail: 'Masukkan nomor handphone tujuan. Anda dapat mengetik dengan awalan 08xxx atau 628xxx; sistem otomatis memformatnya menjadi format resmi internasional.',
      },
      {
        step: 'Tuliskan Pesan Pembuka Otomatis',
        detail: 'Tulis pesan yang ingin otomatis muncul ketika calon pelanggan mengklik tautan, atau pilih salah satu template cepat yang kami sediakan.',
      },
      {
        step: 'Salin Tautan atau Unduh QR Code',
        detail: 'Salin link wa.me untuk dipasang pada bio Instagram, TikTok, atau tombol website, atau unduh QR Code untuk materi cetak promosi seperti brosur, meja kasir, dan banner.',
      },
    ],
    faqs: [
      {
        question: 'Apakah data nomor WhatsApp saya tersimpan di server?',
        answer:
          'Sama sekali tidak. Generator ini bekerja 100% di sisi browser Anda (client-side). Tidak ada satu pun nomor handphone maupun isi pesan yang dikirimkan ke server luar demi privasi maksimal Anda.',
      },
      {
        question: 'Format nomor seperti apa yang benar untuk link wa.me?',
        answer:
          'Format resmi WhatsApp menggunakan kode negara tanpa tanda tambah atau tanda pisah. Contoh nomor Indonesia 0812-3336-7191 menjadi format 6281233367191. Alat ini memformatnya secara otomatis.',
      },
      {
        question: 'Apakah QR code yang diunduh bisa dicetak dalam ukuran besar?',
        answer:
          'Ya, Anda dapat mengunduh dalam format Vector SVG yang dapat diskalakan tanpa pecah ke ukuran berapa pun (spanduk, baliho, standing banner), atau PNG beresolusi tinggi.',
      },
    ],
    ctaType: 'configure',
    ctaTitle: 'Pasang Tombol WhatsApp Otomatis di Website Bisnis Anda',
    ctaDescription:
      'Semua website yang kami bangun di JasaWebsite telah dilengkapi tombol WhatsApp mengambang (floating CTA) cerdas dengan pre-filled teks sesuai halaman yang sedang dilihat calon klien.',
    seoTitle: 'WhatsApp Link Generator & QR Code Gratis - Buat Link wa.me',
    seoDescription:
      'Buat link WhatsApp kustom (wa.me) dengan pesan pembuka otomatis dan unduh QR code SVG / PNG instan. Aman, 100% gratis tanpa pendaftaran.',
    seoKeywords: [
      'whatsapp link generator',
      'buat link wa me',
      'qr code whatsapp gratis',
      'link wa otomatis pesan',
      'generator tautan whatsapp bisnis',
    ],
    relatedToolSlugs: ['utm-builder', 'roas-calculator', 'og-preview'],
  },
  {
    id: 'website-speed-estimator',
    slug: 'website-speed-estimator',
    name: 'Website Speed Estimator',
    title: 'Estimator Kecepatan Website & Core Web Vitals',
    tagline: 'Simulasi estimasi waktu muat mobile 4G, Time to First Byte (TTFB), dan analisis risiko Google Core Web Vitals.',
    description:
      'Kalkulator simulasi performa web untuk memprediksi waktu muat (loading speed), estimasi Largest Contentful Paint (LCP), dan potensi risiko Core Web Vitals berdasarkan bobot aset, gambar, dan skrip pihak ketiga.',
    category: 'Performance',
    badge: 'Teknis Akurat',
    iconName: 'Gauge',
    features: [
      'Simulasi TTFB berdasarkan arsitektur (Next.js SSG Edge vs Dynamic PHP / WordPress)',
      'Estimasi waktu muat koneksi seluler 4G Indonesia (Rata-rata 15 Mbps vs Slow 4G 3 Mbps)',
      'Analisis risiko metrik Google Core Web Vitals (LCP, INP, dan CLS)',
      'Pengukur skor performa visual interaktif (0 - 100)',
      'Rincian pemborosan bandwidth antara aset gambar uncompressed vs format modern WebP/AVIF',
      'Rekomendasi taktis untuk memangkas waktu muat hingga di bawah 1 detik',
    ],
    howToUse: [
      {
        step: 'Tentukan Bobot & Jumlah Gambar',
        detail: 'Geser slider untuk menginput perkiraan ukuran total halaman (KB/MB) dan jumlah gambar yang dimuat pada beranda.',
      },
      {
        step: 'Atur Jumlah Skrip Pihak Ketiga & Arsitektur',
        detail: 'Pilih tipe arsitektur website (misal Static SSG vs CMS WordPress) dan jumlah skrip eksternal (Google Analytics, Meta Pixel, widget chat, dsb).',
      },
      {
        step: 'Evaluasi Skor & Rekomendasi Optimasi',
        detail: 'Lihat simulasi kecepatan waktu muat dalam detik serta panduan teknis untuk mencapai skor Core Web Vitals hijau 100/100.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa waktu muat website sangat penting untuk bisnis?',
        answer:
          'Data riset Google menunjukkan bahwa 53% pengguna mobile akan meninggalkan website yang membutuhkan waktu muat lebih dari 3 detik. Setiap keterlambatan 1 detik menurunkan tingkat konversi hingga 7%.',
      },
      {
        question: 'Apa perbedaan mendasar Next.js SSG dibanding CMS WordPress biasa?',
        answer:
          'Website Next.js SSG (Static Site Generation) di-compile menjadi file statis HTML/CSS murni dan disajikan dari Global Edge CDN dengan TTFB kurang dari 80ms. Sedangkan WordPress harus memproses database MySQL dan puluhan plugin PHP di server untuk setiap kali pengunjung membuka halaman.',
      },
      {
        question: 'Berapa standar metrik Core Web Vitals yang dianggap "Baik" oleh Google?',
        answer:
          'Google menetapkan standar "Good" untuk LCP (Largest Contentful Paint) di bawah 2.5 detik, INP (Interaction to Next Paint) di bawah 200 ms, dan CLS (Cumulative Layout Shift) di bawah 0.1.',
      },
    ],
    ctaType: 'audit-gratis',
    ctaTitle: 'Website Anda Lambat? Dapatkan Laporan Audit Kecepatan Gratis',
    ctaDescription:
      'Kami akan menguji URL website bisnis Anda menggunakan Google PageSpeed Insights & Chrome UX Report secara mendalam dan memberikan langkah perbaikan konkret.',
    seoTitle: 'Website Speed Estimator - Kalkulator Simulasi Kecepatan Web & CWV',
    seoDescription:
      'Estimasi waktu muat website pada jaringan mobile 4G, simulasi TTFB, dan risiko Google Core Web Vitals. Pelajari cara mencapai skor performa 100/100.',
    seoKeywords: [
      'website speed estimator',
      'cek kecepatan website',
      'kalkulator loading web',
      'estimasi core web vitals',
      'uji performa website mobile',
    ],
    relatedToolSlugs: ['viewport-tester', 'serp-character-counter', 'contrast-checker'],
  },
  {
    id: 'roas-calculator',
    slug: 'roas-calculator',
    name: 'ROAS & Breakeven Calculator',
    title: 'Kalkulator ROAS, CPA & Breakeven Ads',
    tagline: 'Hitung Return on Ad Spend, Biaya per Akuisisi (CPA), profit bersih, dan target impas iklan digital Anda.',
    description:
      'Kalkulator keuangan iklan digital untuk mengevaluasi efektivitas kampanye Meta Ads, Google Ads, atau TikTok Ads. Ketahui apakah kampanye iklan Anda benar-benar menghasilkan laba bersih atau hanya membakar modal.',
    category: 'Marketing',
    badge: 'Analisis Finansial',
    iconName: 'Calculator',
    features: [
      'Kalkulasi ROAS instan dalam rasio multiplier (e.g. 4.5x) dan persentase (e.g. 450%)',
      'Hitung Breakeven ROAS (BEP) otomatis berdasarkan margin produk / HPP',
      'Kalkulasi Biaya per Akuisisi (CPA) dan profit bersih setelah dikurangi modal barang',
      'Status kesehatan iklan: Rugi, Impas, Sehat, atau Skala Besar (Scale-Up Ready)',
      'Simulator target omset: ketahui berapa budget iklan yang dibutuhkan untuk target laba tertentu',
      'Preset industri: Toko Online E-commerce, B2B Jasa/Lead Gen, Kuliner F&B, dan Produk Digital',
    ],
    howToUse: [
      {
        step: 'Input Budget Iklan & Pendapatan',
        detail: 'Masukkan total biaya iklan yang Anda belanjakan dan total pendapatan (omset) yang dihasilkan dari kampanye tersebut.',
      },
      {
        step: 'Masukkan Margin Produk / HPP',
        detail: 'Ketik persentase Margin Keuntungan atau Harga Pokok Penjualan (HPP) agar kalkulator dapat menghitung laba bersih riil setelah beban barang.',
      },
      {
        step: 'Lihat Analisis Breakeven & Laba Bersih',
        detail: 'Tinjau apakah ROAS Anda berada di atas ambang batas BEP dan pelajari saran optimasi landing page untuk mendongkrak konversi.',
      },
    ],
    faqs: [
      {
        question: 'Apa rumus menghitung ROAS dan apa bedanya dengan ROI?',
        answer:
          'ROAS (Return on Ad Spend) dihitung dengan rumus: (Total Pendapatan Iklan ÷ Total Biaya Iklan). ROAS hanya mengukur efisiensi belanja iklan kotor. Sedangkan ROI (Return on Investment) memperhitungkan seluruh modal operasional dan HPP: (Laba Bersih ÷ Total Pengeluaran) x 100%.',
      },
      {
        question: 'Bagaimana cara menentukan Breakeven ROAS (BEP)?',
        answer:
          'Breakeven ROAS adalah batas minimal di mana iklan tidak rugi dan tidak untung. Rumusnya adalah 1 ÷ Margin Keuntungan Kotor. Jika margin keuntungan Anda 25%, maka BEP ROAS adalah 1 ÷ 0.25 = 4.0x.',
      },
      {
        question: 'Mengapa landing page berkecepatan tinggi dapat menaikkan ROAS?',
        answer:
          'Saat calon pembeli mengklik iklan berbayar, setiap detik keterlambatan loading membuat 10-20% calon pembeli menutup tab sebelum melihat produk Anda. Landing page super cepat mengurangi drop-off dan melipatgandakan konversi penjualan dari traffic yang sama.',
      },
    ],
    ctaType: 'configure',
    ctaTitle: 'Tingkatkan ROAS Iklan Anda dengan Landing Page Berkonversi Tinggi',
    ctaDescription:
      'Bangun landing page bisnis modern dengan struktur copy teruji, loading di bawah 1 detik, dan alur checkout WhatsApp instan bersama JasaWebsite.',
    seoTitle: 'Kalkulator ROAS & Breakeven Ads Online Gratis - Hitung CPA & Profit',
    seoDescription:
      'Kalkulator ROAS, CPA, dan Breakeven iklan gratis untuk Meta Ads, Google Ads, dan TikTok Ads. Hitung margin keuntungan bersih dan target skala iklan Anda.',
    seoKeywords: [
      'kalkulator roas',
      'hitung return on ad spend',
      'breakeven roas calculator',
      'rumus hitung cpa iklan',
      'kalkulator profit ads',
    ],
    relatedToolSlugs: ['utm-builder', 'whatsapp-link-generator', 'website-speed-estimator'],
  },
  {
    id: 'schema-generator',
    slug: 'schema-generator',
    name: 'Schema Markup Generator',
    title: 'Generator Schema Markup JSON-LD',
    tagline: 'Buat structured data JSON-LD berstandar Schema.org untuk LocalBusiness, Organization, dan FAQPage.',
    description:
      'Buat kode schema markup terstruktur format JSON-LD yang direkomendasikan resmi oleh Google. Tingkatkan tampilan rich snippets, bintang rating, daftar cabang bisnis lokal, dan akordeon FAQ pada halaman pencarian Google.',
    category: 'SEO',
    badge: 'Rich Snippet Ready',
    iconName: 'Code2',
    features: [
      'Mendukung tipe schema esensial: LocalBusiness, ProfessionalService, Organization, dan FAQPage',
      'Dukungan input lokasi bisnis lokal: Alamat lengkap, kota, nomor telepon, rentang harga, jam buka, dan koordinat GPS',
      'Daftar FAQ interaktif dinamis: Tambah dan hapus pertanyaan serta jawaban secara instan',
      'Ekspor JSON-LD valid berstandar Schema.org dan kompatibel Google Search Console',
      'Salin kode instan dengan tombol sekali klik & opsi unduh file .jsonld',
      'Tautan langsung ke pengujian resmi Google Rich Results Test',
    ],
    howToUse: [
      {
        step: 'Pilih Tipe Schema',
        detail: 'Pilih jenis entitas yang ingin Anda buat (LocalBusiness untuk toko fisik/kantor lokal, Organization untuk perusahaan, atau FAQPage untuk halaman tanya jawab).',
      },
      {
        step: 'Lengkapi Data Entitas',
        detail: 'Isi formulir seperti nama usaha, nomor telepon, alamat, jam operasional, atau daftar pertanyaan dan jawaban.',
      },
      {
        step: 'Salin Kode JSON-LD ke Header Website',
        detail: 'Klik "Salin Kode JSON-LD" dan tempelkan di dalam tag <script type="application/ld+json"> pada halaman website Anda.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa website membutuhkan Schema Markup JSON-LD?',
        answer:
          'Schema markup membantu robot perayap Google memahami konteks konten website Anda secara terstruktur. Ini memungkinkan website Anda tampil dengan Rich Snippets (cuplikan kaya) seperti akordeon FAQ, bintang ulasan, alamat bisnis, dan tombol telepon langsung di SERP.',
      },
      {
        question: 'Di mana kode JSON-LD harus diletakkan?',
        answer:
          'Google merekomendasikan meletakkan tag <script type="application/ld+json"> di dalam elemen <head>, namun meletakkannya di dalam <body> juga tetap didukung dan diproses oleh Google.',
      },
      {
        question: 'Bagaimana cara menguji apakah schema saya sudah valid?',
        answer:
          'Anda dapat mengujinya melalui alat resmi "Google Rich Results Test" (google.com/test/rich-results) atau Schema.org Validator dengan menempelkan kode JSON-LD yang dihasilkan alat ini.',
      },
    ],
    ctaType: 'website-packages',
    ctaTitle: 'Semua Paket Website Kami Sudah Dilengkapi Schema Terintegrasi',
    ctaDescription:
      'Dari schema Breadcrumb, Organization, LocalBusiness hingga FAQPage sudah otomatis terpasang rapi di setiap halaman website JasaWebsite.',
    seoTitle: 'Schema Markup Generator JSON-LD Gratis - LocalBusiness & FAQ',
    seoDescription:
      'Generator schema markup JSON-LD online gratis. Buat kode structured data untuk LocalBusiness, Organization, dan FAQPage dengan copy instan dan validasi Google.',
    seoKeywords: [
      'schema markup generator',
      'json ld generator',
      'buat schema localbusiness',
      'faq schema generator',
      'google structured data builder',
    ],
    relatedToolSlugs: ['meta-tag-generator', 'serp-character-counter', 'og-preview'],
  },
  {
    id: 'og-preview',
    slug: 'og-preview',
    name: 'Open Graph Social Previewer',
    title: 'Open Graph & Social Share Card Previewer',
    tagline: 'Simulasi visual tampilan tautan website Anda saat dibagikan ke WhatsApp, Facebook, Twitter/X, dan LinkedIn.',
    description:
      'Uji dan pastikan kartu pratinjau (link preview card) website Anda terlihat menarik, profesional, dan bebas teks terpotong sebelum tautan dibagikan ke calon klien atau grup komunitas.',
    category: 'Marketing',
    badge: 'Multi-Platform',
    iconName: 'Share2',
    features: [
      'Simulasi visual 4 platform besar sekaligus: WhatsApp Chat Bubble, Facebook Newsfeed, Twitter/X Large Card, dan LinkedIn Post',
      'Pemilihan gambar pratinjau instan dengan opsi URL kustom atau koleksi preset demo',
      'Peringatan dini untuk gambar vertikal/persegi yang berisiko terpotong pada format horizontal 1200x630px',
      'Generator tag Open Graph & Twitter Card sinkron otomatis dengan input pratinjau',
      'Tombol salin tag HTML lengkap sekali klik',
    ],
    howToUse: [
      {
        step: 'Ketik Judul, Deskripsi & URL',
        detail: 'Masukkan judul halaman yang menarik perhatian, ringkasan deskripsi, serta tautan halaman website yang ingin diuji.',
      },
      {
        step: 'Tentukan URL Gambar Pratinjau',
        detail: 'Tempelkan URL gambar banner (og:image) atau gunakan salah satu gambar preset yang disediakan.',
      },
      {
        step: 'Bandingkan Tampilan Antar-Platform',
        detail: 'Beralih antar-tab platform (WhatsApp, Facebook, Twitter/X, LinkedIn) untuk memastikan tidak ada teks yang terpotong secara canggung.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa gambar website saya tidak muncul saat dibagikan ke WhatsApp?',
        answer:
          'Penyebab umumnya adalah: ukuran file gambar terlalu besar (di atas 300 KB), gambar tidak dapat diakses publik, format gambar tidak didukung (gunakan JPG atau PNG standar), atau WhatsApp masih menyimpan cache lama URL Anda.',
      },
      {
        question: 'Bagaimana cara memaksa WhatsApp / Facebook memperbarui tampilan cache link?',
        answer:
          'Untuk Facebook, Anda dapat menggunakan alat "Facebook Sharing Debugger" dan klik "Scrape Again". Untuk WhatsApp, Anda dapat menambahkan parameter dummy di akhir URL (misal: website.com?v=2) untuk memaksa WhatsApp membaca ulang meta tag baru.',
      },
    ],
    ctaType: 'configure',
    ctaTitle: 'Tingkatkan Brand Image Bisnis Anda dengan Desain Web Kelas Dunia',
    ctaDescription:
      'Website yang rapi saat dibagikan di WhatsApp dan media sosial meningkatkan kepercayaan calon klien seketika. Konfigurasikan website impian Anda sekarang.',
    seoTitle: 'Open Graph Preview Online - Cek Tampilan Link WhatsApp & Medsos',
    seoDescription:
      'Preview bagaimana judul, deskripsi, dan gambar website Anda tampil saat dibagikan ke WhatsApp, Facebook, Twitter/X, dan LinkedIn. Gratis tanpa login.',
    seoKeywords: [
      'open graph preview',
      'cek link preview whatsapp',
      'social share previewer',
      'facebook share card preview',
      'twitter card simulator',
    ],
    relatedToolSlugs: ['meta-tag-generator', 'serp-character-counter', 'whatsapp-link-generator'],
  },
  {
    id: 'serp-character-counter',
    slug: 'serp-character-counter',
    name: 'SERP Character & Pixel Counter',
    title: 'Google SERP Snippet Preview & Character Counter',
    tagline: 'Simulator cuplikan hasil pencarian Google desktop & mobile dengan penghitung karakter dan lebar piksel presisi.',
    description:
      'Cegah judul dan meta deskripsi website Anda terpotong elipsis (...) di hasil pencarian Google. Dilengkapi kalkulator lebar piksel (pixel width) font Arial Google dan deteksi kata kunci fokus.',
    category: 'SEO',
    badge: 'Pixel-Accurate',
    iconName: 'Search',
    features: [
      'Penghitung karakter real-time untuk Title (maks 60 karakter) dan Description (maks 160 karakter)',
      'Kalkulator batas lebar piksel Google desktop (600px untuk Title, 960px untuk Description)',
      'Mode simulasi beralih: Google Desktop SERP vs Google Mobile SERP',
      'Deteksi dan penyorotan kata kunci fokus (Focus Keyword Density & Placement)',
      'Indikator warna progres dinamis (Hijau = Ideal, Kuning = Peringatan, Merah = Terlalu Panjang)',
      'Tombol salin judul dan deskripsi terpisah dengan sekali klik',
    ],
    howToUse: [
      {
        step: 'Ketik Judul Halaman & Target Kata Kunci',
        detail: 'Tulis judul SEO yang relevan dan masukkan kata kunci utama yang ingin Anda targetkan di Google.',
      },
      {
        step: 'Tuliskan Meta Description yang Menjual',
        detail: 'Buat kalimat ajakan (Call to Action) yang memicu klik pengguna dalam 140–160 karakter.',
      },
      {
        step: 'Tinjau Cuplikan SERP & Batas Piksel',
        detail: 'Perhatikan apakah indikator piksel berwarna hijau dan teks tidak terpotong tanda titik-titik (...) pada pratinjau.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa penghitungan karakter saja tidak cukup untuk Google SERP?',
        answer:
          'Google mengukur panjang judul menggunakan piksel, bukan semata-mata jumlah karakter. Huruf kapital seperti "W" dan "M" memakan ruang piksel jauh lebih lebar dibanding huruf kecil seperti "i" atau "l". Judul dengan 55 karakter huruf kapital bisa terpotong, sementara judul 60 karakter huruf kecil bisa muat sempurna.',
      },
      {
        question: 'Apakah Google selalu menggunakan meta description yang kita tulis?',
        answer:
          'Tidak selalu. Jika algoritma Google menilai ada paragraf di dalam halaman yang lebih relevan dengan kueri pencarian spesifik pengunjung, Google dapat merangkum paragraf tersebut sebagai cuplikan cuplikan dinamis.',
      },
    ],
    ctaType: 'audit-gratis',
    ctaTitle: 'Ingin Posisi Halaman Satu di Google untuk Industri Anda?',
    ctaDescription:
      'JasaWebsite mendesain website dengan arsitektur On-Page SEO terkuat: struktur heading teratur, meta data presisi, sitemap otomatis, dan loading secepat kilat.',
    seoTitle: 'Google SERP Preview & Character Counter Online - Cek Lebar Piksel SEO',
    seoDescription:
      'Simulator hasil pencarian Google desktop dan mobile. Hitung panjang karakter dan batas piksel meta title dan description secara akurat untuk optimasi SEO.',
    seoKeywords: [
      'serp simulator',
      'google snippet preview',
      'penghitung karakter meta title',
      'serp pixel width counter',
      'cek meta description google',
    ],
    relatedToolSlugs: ['meta-tag-generator', 'schema-generator', 'og-preview'],
  },
  {
    id: 'viewport-tester',
    slug: 'viewport-tester',
    name: 'Responsive Viewport Simulator',
    title: 'Simulator Responsive Viewport & Device Frame',
    tagline: 'Uji tampilan responsif website Anda pada berbagai resolusi layar populer secara interaktif.',
    description:
      'Simulasikan tampilan website bisnis Anda pada berbagai resolusi perangkat seluler, tablet, laptop, dan desktop monitor tanpa harus memiliki perangkat fisiknya secara langsung.',
    category: 'Design & UX',
    badge: 'Multi-Device',
    iconName: 'Monitor',
    features: [
      'Preset perangkat populer: iPhone 15, iPhone SE, Samsung Galaxy, iPad Mini, iPad Pro, MacBook Air, dan Desktop 1080p',
      'Slider lebar dan tinggi kustom fleksibel (320px hingga 1920px)',
      'Rotasi orientasi instan (Portrait vs Landscape)',
      'Indikator breakpoint CSS / Tailwind (sm, md, lg, xl, 2xl) aktif secara dinamis',
      'Opsi zoom tampilan (50%, 75%, 100%, dan Fit-to-screen)',
      'Mendukung pengujian URL website internal platform maupun URL kustom',
    ],
    howToUse: [
      {
        step: 'Pilih Resolusi Perangkat atau Geser Slider',
        detail: 'Pilih salah satu tombol preset seperti "iPhone 15" atau sesuaikan lebar piksel secara presisi menggunakan slider.',
      },
      {
        step: 'Muat Halaman Website yang Ingin Diuji',
        detail: 'Gunakan URL pratinjau demo yang tersedia atau ketik alamat website Anda ke dalam bilah alamat simulator.',
      },
      {
        step: 'Uji Responsivitas & Tombol Interaktif',
        detail: 'Periksa apakah teks mudah dibaca, menu navigasi hamburger bekerja lancar, dan tombol CTA mudah dijangkau jempol.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa desain mobile-first sangat krusial di Indonesia?',
        answer:
          'Lebih dari 75% traffic internet di Indonesia berasal dari smartphone. Google juga menerapkan Mobile-First Indexing, yang artinya versi mobile website Anda adalah acuan utama penilaian peringkat SEO.',
      },
      {
        question: 'Apakah semua situs dapat dimuat di dalam simulator viewport?',
        answer:
          'Sebagian besar website dapat dimuat. Namun, beberapa website eksternal yang memasang header keamanan ketat seperti X-Frame-Options: DENY atau CSP frame-ancestors mungkin memblokir pemuatan di dalam iframe.',
      },
    ],
    ctaType: 'website-packages',
    ctaTitle: 'Website 100% Responsif & Tampil Menawan di Semua Ukuran Layar',
    ctaDescription:
      'Semua konsep desain di JasaWebsite telah diuji teliti di 12+ resolusi layar, dari layar smartphone terkecil hingga monitor ultra-wide 4K.',
    seoTitle: 'Responsive Viewport Tester Online - Uji Tampilan Mobile, Tablet & Laptop',
    seoDescription:
      'Simulator frame responsif website online gratis. Uji tampilan web pada resolusi iPhone, iPad, laptop, dan monitor desktop dengan indikator breakpoint interaktif.',
    seoKeywords: [
      'responsive viewport tester',
      'simulator ukuran layar web',
      'cek tampilan mobile website',
      'responsive design tester',
      'device frame preview online',
    ],
    relatedToolSlugs: ['website-speed-estimator', 'contrast-checker', 'meta-tag-generator'],
  },
  {
    id: 'contrast-checker',
    slug: 'contrast-checker',
    name: 'WCAG Color Contrast Checker',
    title: 'WCAG 2.1 Color Contrast Ratio Calculator',
    tagline: 'Kalkulator rasio kontras warna standar aksesibilitas WCAG 2.1 (AA & AAA) antara warna latar dan teks.',
    description:
      'Pastikan teks pada website Anda nyaman dibaca oleh semua orang, termasuk pengguna dengan gangguan penglihatan atau saat layar terkena sinar matahari terik, sesuai standar global WCAG 2.1.',
    category: 'Design & UX',
    badge: 'Aksesibilitas WCAG',
    iconName: 'Eye',
    features: [
      'Perhitungan rasio kontras matematis presisi berdasarkan rumus Relative Luminance resmi W3C',
      'Evaluasi tingkat kepatuhan lengkap: WCAG AA Normal Text, AA Large Text, AAA Normal Text, AAA Large Text, dan Komponen UI',
      'Input fleksibel: Color picker native, kode HEX, dan nilai RGB',
      'Tombol tukar warna latar & teks instan (Swap Colors)',
      'Pratinjau visual komponen langsung: Judul, Paragraf, Tombol Interaktif, dan Kartu Notifikasi',
      'Koleksi preset kombinasi warna kontras tinggi yang terbukti elegan dan mudah dibaca',
    ],
    howToUse: [
      {
        step: 'Tentukan Warna Teks & Warna Latar',
        detail: 'Pilih warna menggunakan color picker visual atau ketikkan kode hex (misal #1e293b untuk teks dan #ffffff untuk latar belakang).',
      },
      {
        step: 'Periksa Nilai Rasio Kontras',
        detail: 'Lihat skor rasio kontras (misal 7.5 : 1). Pastikan warna Anda mendapatkan badge hijau "Lulus (PASS)" untuk standar WCAG AA.',
      },
      {
        step: 'Tinjau Pratinjau Komponen Nyata',
        detail: 'Lihat bagaimana kombinasi warna tersebut diaplikasikan pada judul artikel, teks paragraf, tombol aksi, dan banner kartu.',
      },
    ],
    faqs: [
      {
        question: 'Berapa rasio kontras minimal menurut standar WCAG 2.1 AA?',
        answer:
          'Untuk teks biasa (normal text di bawah 18pt atau di bawah 14pt tebal), WCAG 2.1 AA mewajibkan rasio kontras minimal 4.5:1 terhadap latar belakang. Untuk teks besar (large text di atas 18pt atau di atas 14pt tebal), rasio minimal adalah 3.0:1.',
      },
      {
        question: 'Mengapa kontras warna berdampak langsung pada angka penjualan website?',
        answer:
          'Jika pengunjung kesulitan membaca deskripsi produk atau teks pada tombol "Beli Sekarang" karena warna tulisan abu-abu redup di atas latar putih, mereka akan frustrasi dan meninggalkan website tanpa melakukan pembelian.',
      },
    ],
    ctaType: 'website-packages',
    ctaTitle: 'Desain Elegan dengan Standar Aksesibilitas Tertinggi',
    ctaDescription:
      'Kami merancang tipografi dan palet warna setiap website di JasaWebsite agar lolos audit WCAG 2.1 AA secara konsisten, nyaman di mata, dan berkonversi tinggi.',
    seoTitle: 'WCAG Color Contrast Checker Online - Cek Rasio Kontras Warna Web',
    seoDescription:
      'Kalkulator rasio kontras warna standar aksesibilitas WCAG 2.1 AA dan AAA. Uji keterbacaan warna teks dan latar belakang website dengan live UI preview.',
    seoKeywords: [
      'color contrast checker',
      'wcag contrast calculator',
      'cek kontras warna website',
      'rasio kontras warna w3c',
      'aksesibilitas web kontras teks',
    ],
    relatedToolSlugs: ['viewport-tester', 'website-speed-estimator', 'meta-tag-generator'],
  },
  {
    id: 'utm-builder',
    slug: 'utm-builder',
    name: 'Google Analytics UTM Campaign Builder',
    title: 'Google Analytics 4 (GA4) UTM Campaign URL Builder',
    tagline: 'Bangun URL kampanye digital terstruktur dengan parameter utm_source, utm_medium, utm_campaign, dan QR code.',
    description:
      'Lacak asal-usul traffic dan konversi penjualan dari iklan Meta Ads, Google Ads, TikTok Ads, link bio Instagram, email newsletter, hingga pesan broadcast WhatsApp secara akurat di Google Analytics 4.',
    category: 'Marketing',
    badge: 'GA4 Tracking Ready',
    iconName: 'Link2',
    features: [
      'Input parameter standar GA4: Website URL, Campaign Source, Campaign Medium, Campaign Name, Term, dan Content',
      'Preset sekali klik untuk channel iklan populer (Google Ads, Meta Ads, Instagram Bio, WhatsApp Broadcast, Email Newsletter, TikTok Ads)',
      'Sanitasi otomatis: otomatis mengubah huruf besar ke huruf kecil (lowercase) dan spasi ke tanda hubung agar URL rapi',
      'Generator QR Code instan khusus untuk URL UTM yang dihasilkan (cocok untuk materi promosi cetak dan offline-to-online tracking)',
      'Tabel uraian parameter edukatif untuk memahami fungsi setiap parameter di Google Analytics',
      'Tombol sekali klik: Salin URL, Uji Buka Tautan di Tab Baru, dan Unduh QR Code',
    ],
    howToUse: [
      {
        step: 'Masukkan URL Halaman Tujuan',
        detail: 'Ketik atau tempel alamat halaman website yang ingin Anda promosikan (misal: https://jasawebsite.net/website-packages).',
      },
      {
        step: 'Tentukan Sumber & Media Kampanye',
        detail: 'Pilih channel promosi menggunakan tombol preset cepat (misal: Facebook Ads) atau ketik manual nilai utm_source dan utm_medium.',
      },
      {
        step: 'Salin Tautan Kampanye Ber-UTM',
        detail: 'Salin tautan akhir yang rapi dan tempelkan ke materi iklan digital atau unduh QR code-nya untuk materi promosi fisik.',
      },
    ],
    faqs: [
      {
        question: 'Apa fungsi utama parameter UTM dalam digital marketing?',
        answer:
          'Parameter UTM (Urchin Tracking Module) adalah cuplikan teks khusus yang ditambahkan ke akhir URL untuk memberitahu Google Analytics secara spesifik dari iklan atau tautan mana pengunjung tersebut datang.',
      },
      {
        question: 'Apakah penggunaan huruf kapital berpengaruh pada parameter UTM?',
        answer:
          'Ya. Google Analytics memperlakukan huruf besar dan huruf kecil secara terpisah (case-sensitive). utm_source=Facebook dan utm_source=facebook akan dicatat sebagai dua sumber terpisah, sehingga membuat laporan analytics Anda berantakan. Alat kami otomatis menormalkannya menjadi huruf kecil.',
      },
      {
        question: 'Bagaimana cara melihat data UTM di Google Analytics 4 (GA4)?',
        answer:
          'Di dashboard GA4, buka menu Laporan > Akuisisi > Akuisisi Traffic. Ubah dimensi utama menjadi "Sesi Sumber / Media" atau "Kampanye Sesi" untuk melihat performa traffic dan konversi dari masing-masing tautan UTM.',
      },
    ],
    ctaType: 'configure',
    ctaTitle: 'Pantau Setiap Rupiah Belanja Iklan Anda Menjadi Penjualan Nyata',
    ctaDescription:
      'Website yang kami kembangkan siap diintegrasikan dengan Google Analytics 4, Google Tag Manager, dan Meta Conversions API (CAPI) tanpa ribet.',
    seoTitle: 'Google Analytics UTM Campaign Builder Online - Buat URL Kampanye GA4',
    seoDescription:
      'Generator URL kampanye UTM Google Analytics 4 (GA4) gratis. Buat parameter utm_source, utm_medium, utm_campaign rapi dengan QR code instan.',
    seoKeywords: [
      'utm builder',
      'google analytics campaign url builder',
      'buat link utm ga4',
      'utm generator online',
      'lacak iklan dengan parameter utm',
    ],
    relatedToolSlugs: ['roas-calculator', 'whatsapp-link-generator', 'og-preview'],
  },
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolItem[] {
  return TOOLS.filter((t) => t.category === category);
}

export function getRelatedTools(currentSlug: string): ToolItem[] {
  const current = getToolBySlug(currentSlug);
  if (!current) return TOOLS.slice(0, 3);
  return TOOLS.filter((t) => current.relatedToolSlugs.includes(t.slug));
}
