import { DesignConcept } from '@/types';

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: 'modern-corporate',
    slug: 'modern-corporate',
    name: {
      id: 'Modern Corporate',
      en: 'Modern Corporate',
      ar: 'الشركات الحديثة',
    },
    styleCategory: 'Corporate & Business',
    tagline: {
      id: 'Gaya institusional kontemporer dengan palet biru safir dan tata letak modular terstruktur',
      en: 'Contemporary institutional layout with sapphire tones and modular information flow',
      ar: 'طابع مؤسسي معاصر بألوان راقية وتوزيع منظم للمعلومات',
    },
    description: {
      id: 'Dirancang untuk perusahaan yang mengutamakan kredibilitas di mata investor, mitra B2B, dan klien korporat. Menggunakan grid asimetris halus, kartu layanan dengan batas bersih, dan tipografi Sans-serif profesional.',
      en: 'Engineered for enterprises prioritizing B2B credibility, institutional trust, and organized service presentation.',
      ar: 'مصمم للمؤسسات والشركات الكبرى لتعزيز الثقة وعرض الخدمات بكفاءة عالية.',
    },
    primaryColor: '#1e40af', // Blue 800
    accentColor: '#3b82f6', // Blue 500
    fontFamily: 'Inter, system-ui, sans-serif',
    targetAudience: ['Korporat Swasta', 'Holding Company', 'Perusahaan Logistik', 'Eksportir & Importir'],
    keyStrengths: ['Struktur Hierarki Jelas', 'Tampilan Kredibel B2B', 'Optimasi Waktu Muat Tinggi'],
    demoSlug: 'modern-corporate',
    badge: 'Paling Populer',
    imageUrl: '/images/design-modern-corporate.webp',
    industryTag: 'Korporat & Holding',
    mockupBadge: 'B2B Enterprise',
  },
  {
    id: 'premium-corporate',
    slug: 'premium-corporate',
    name: {
      id: 'Premium Corporate & Executive',
      en: 'Premium Executive',
      ar: 'الشركات الفاخرة والتنفيذية',
    },
    styleCategory: 'Luxury & Executive',
    tagline: {
      id: 'Sentuhan obsidian elegan dengan aksen emas tembaga dan tipografi berkelas tinggi',
      en: 'Obsidian surfaces paired with champagne accents and refined editorial aesthetics',
      ar: 'خلفيات داكنة فاخرة مع لمسات ذهبية أنيقة وطابع راقٍ',
    },
    description: {
      id: 'Karakter visual prestisius untuk kantor hukum ternama, konsultan keuangan eksekutif, boutique developer, dan aset manajemen yang melayani nasabah high-net-worth.',
      en: 'Sophisticated aesthetic for top-tier law firms, wealth management, luxury real estate, and elite consultancies.',
      ar: 'طابع مميز للمكاتب القانونية والاستشارية وإدارة الثروات والعقارات الفاخرة.',
    },
    primaryColor: '#0f172a', // Slate 900
    accentColor: '#d97706', // Amber 600
    fontFamily: 'Georgia, Cambria, serif',
    targetAudience: ['Firma Hukum', 'Wealth Management', 'Pengembang Properti Mewah', 'Family Office'],
    keyStrengths: ['Wibawa Eksklusif', 'Tipografi Editorial Berkelas', 'Fokus Reputasi'],
    demoSlug: 'premium-corporate',
    imageUrl: '/images/design-premium-corporate.webp',
    industryTag: 'Legal & Wealth',
    mockupBadge: 'Executive Grade',
  },
  {
    id: 'minimal-business',
    slug: 'minimal-business',
    name: {
      id: 'Minimal Business',
      en: 'Minimal Business',
      ar: 'الأعمال البسيطة (مينيمال)',
    },
    styleCategory: 'Modern Minimalist',
    tagline: {
      id: 'Whitespace lapang khas Nordik, garis presisi, dan nihil distraksi visual yang tidak perlu',
      en: 'Spacious Nordic whitespace, razor-sharp hairline borders, and zero clutter',
      ar: 'مساحات بيضاء نقية وتصميم اسكندنافي خفيف بدون تشتيت',
    },
    description: {
      id: 'Filosofi desain esensial di mana setiap elemen teks dan foto memiliki alasan keberadaan. Sangat disukai oleh studio arsitektur, konsultan strategi, dan brand modern yang mengutamakan kesederhanaan.',
      en: 'Essentialist layout where every element serves a direct purpose. Ideal for architecture studios and strategic consultancies.',
      ar: 'تصميم بسيط يركز على المحتوى الأساسي وسرعة التصفح الفائقة.',
    },
    primaryColor: '#18181b', // Zinc 900
    accentColor: '#71717a', // Zinc 500
    fontFamily: 'system-ui, -apple-system, sans-serif',
    targetAudience: ['Studio Arsitektur', 'Konsultan Manajemen', 'Desainer Produk', 'Boutique Agency'],
    keyStrengths: ['Skor PageSpeed Maksimal', 'Estetika Modern Bersih', 'Kenyamanan Membaca'],
    demoSlug: 'minimal-business',
    imageUrl: '/images/design-minimal-business.webp',
    industryTag: 'Konsultan & Kreatif',
    mockupBadge: 'Clean Minimalist',
  },
  {
    id: 'bold-creative',
    slug: 'bold-creative',
    name: {
      id: 'Bold Creative & Agency',
      en: 'Bold Creative',
      ar: 'الإبداعي الجريء',
    },
    styleCategory: 'Creative Studio',
    tagline: {
      id: 'Tipografi ukuran tegas, kontras tinggi, dan tata letak ekspresif untuk brand berkarakter',
      en: 'Impactful display typography, punchy contrasts, and dynamic portfolio galleries',
      ar: 'خطوط عريضة قوية وتباين لوني مميز للوكالات الإبداعية',
    },
    description: {
      id: 'Sangat cocok untuk agensi pemasaran digital, rumah produksi video, desainer kreatif, dan merek yang ingin tampil menonjol dan tidak biasa di antara pesaing industri.',
      en: 'Engineered for digital marketing agencies, production houses, and creative professionals breaking conventions.',
      ar: 'مثالي لوكالات التسويق واستوديوهات الإنتاج الفني والمشاريع المبتكرة.',
    },
    primaryColor: '#4f46e5', // Indigo 600
    accentColor: '#ec4899', // Pink 500
    fontFamily: 'system-ui, sans-serif',
    targetAudience: ['Creative Agency', 'Production House', 'Talent Management', 'Digital Marketing Agency'],
    keyStrengths: ['Daya Tarik Visual Tinggi', 'Pameran Portfolio Dinamis', 'Meninggalkan Kesan Mendalam'],
    demoSlug: 'bold-creative',
    imageUrl: '/images/design-bold-creative.webp',
    industryTag: 'Digital Agency',
    mockupBadge: 'High Contrast',
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: {
      id: 'Professional Services',
      en: 'Professional Services',
      ar: 'الخدمات المهنية والاستشارية',
    },
    styleCategory: 'Advisory & Services',
    tagline: {
      id: 'Tata letak berbasis bukti keahlian, alur studi kasus, dan tombol pemesanan konsultasi cepat',
      en: 'Evidence-based authority layout with case study callouts and consultation hooks',
      ar: 'تصميم يبرز الخبرات ودراسات الحالة وحجز الاستشارات',
    },
    description: {
      id: 'Dioptimalkan untuk penyedia jasa terverifikasi seperti konsultan pajak, notaris, auditor independen, dan konsultan SDM yang membutuhkan konversi ke jadwal diskusi.',
      en: 'Focused on advisory firms, certified accountants, HR consultancies, and specialized business advisors.',
      ar: 'مخصص للمحاسبين المعتمدين والمستشارين الماليين وخبراء الموارد البشرية.',
    },
    primaryColor: '#0f766e', // Teal 700
    accentColor: '#0d9488', // Teal 600
    fontFamily: 'Inter, system-ui, sans-serif',
    targetAudience: ['Konsultan Pajak & Keuangan', 'Kantor Jasa Akuntan', 'Konsultan SDM', 'Auditor & Surveyor'],
    keyStrengths: ['Membangun Otoritas Ahli', 'Integrasi Jadwal Konsultasi', 'Penjelasan Jasa Terinci'],
    demoSlug: 'professional-services',
    imageUrl: '/images/design-professional-services.webp',
    industryTag: 'Jasa Profesional',
    mockupBadge: 'Trust & Authority',
  },
  {
    id: 'industrial',
    slug: 'industrial',
    name: {
      id: 'Industrial & Manufacturing',
      en: 'Industrial & Manufacturing',
      ar: 'الصناعي والتصنيع',
    },
    styleCategory: 'Heavy Industry & Engineering',
    tagline: {
      id: 'Estetika rekayasa teknik kokoh dengan tabel spesifikasi kapasitas dan katalog alat berat',
      en: 'Robust engineering aesthetics with technical specification matrices and facility showcases',
      ar: 'طابع هندسي قوي مع جداول المواصفات التقنية والمعدات',
    },
    description: {
      id: 'Menyajikan kapabilitas pabrik, sertifikasi mutu ISO, kapasitas produksi bulanan, dan spesifikasi teknis peralatan industri untuk pembeli tender dan buyer B2B.',
      en: 'Displays plant capabilities, ISO quality certifications, monthly throughput, and technical equipment specifications for industrial procurement.',
      ar: 'عرض القدرات الإنتاجية للمصانع وشهادات الجودة والمواصفات الفنية للمناقصات.',
    },
    primaryColor: '#334155', // Slate 700
    accentColor: '#ea580c', // Orange 600
    fontFamily: 'system-ui, -apple-system, sans-serif',
    targetAudience: ['Pabrik Manufaktur', 'Kontraktor Fabrikasi Baja', 'Distributor Alat Berat', 'Penyedia Sparepart'],
    keyStrengths: ['Tabel Spesifikasi Rapi', 'Pameran Fasilitas Pabrik', 'Formulir Permintaan Penawaran Tender'],
    demoSlug: 'industrial',
    imageUrl: '/images/design-industrial.webp',
    industryTag: 'Pabrik & Logistik',
    mockupBadge: 'Industrial B2B',
  },
  {
    id: 'technology',
    slug: 'technology',
    name: {
      id: 'Technology & SaaS',
      en: 'Technology & SaaS',
      ar: 'التكنولوجيا والبرمجيات',
    },
    styleCategory: 'Tech & Digital Products',
    tagline: {
      id: 'Modern tech interface dengan kartu fitur modular, integrasi API preview, dan visualisasi produk',
      en: 'Modern tech interface with modular feature cards, interactive API snippets, and product highlights',
      ar: 'واجهة برمجية متطورة مع بطاقات الميزات وعرض واجهات التطبيقات',
    },
    description: {
      id: 'Gaya modern untuk startup teknologi, pengembang aplikasi, penyedia hosting/cloud, dan penyedia perangkat lunak B2B dengan penekanan pada kapabilitas sistem.',
      en: 'Designed for software vendors, SaaS startups, cloud infrastructure providers, and modern tech products.',
      ar: 'تصميم لشركات البرمجيات والشركات الناشئة ومنصات الخدمات السحابية.',
    },
    primaryColor: '#4338ca', // Indigo 700
    accentColor: '#06b6d4', // Cyan 500
    fontFamily: 'Inter, system-ui, monospace',
    targetAudience: ['SaaS Startup', 'Software House', 'Penyedia Solusi IoT', 'Infrastruktur Cloud'],
    keyStrengths: ['Visualisasi Fitur Produk', 'Tabel Perbandingan Paket', 'CTA Registrasi & Demo'],
    demoSlug: 'technology',
    imageUrl: '/images/design-technology.webp',
    industryTag: 'SaaS & Cloud',
    mockupBadge: 'Cloud Native',
  },
  {
    id: 'restaurant',
    slug: 'restaurant',
    name: {
      id: 'Restaurant & Culinary',
      en: 'Culinary & Dining',
      ar: 'المطاعم والضيافة الغذائية',
    },
    styleCategory: 'Food & Beverage',
    tagline: {
      id: 'Visual hidangan menggugah selera dengan katalog menu dinamis dan tombol reservasi instan',
      en: 'Appetizing culinary showcase with categorized food menus and instant reservation CTA',
      ar: 'عرض شهي للأطباق مع قوائم طعام مصنفة وزر حجز مباشر',
    },
    description: {
      id: 'Menonjolkan foto sajian unggulan, bahan baku segar, suasana interior ruang makan, jam operasional, dan peta navigasi untuk mendatangkan tamu langsung.',
      en: 'Highlights signature dishes, ambiance, opening hours, interactive menus, and location guides to drive foot traffic.',
      ar: 'إبراز الأطباق المميزة وأجواء المطعم وساعات العمل وتسهيل وصول الضيوف.',
    },
    primaryColor: '#991b1b', // Red 800
    accentColor: '#f59e0b', // Amber 500
    fontFamily: 'Georgia, serif',
    targetAudience: ['Restoran Keluarga', 'Fine Dining', 'Bistro & Specialty Cafe', 'Katering Pernikahan'],
    keyStrengths: ['Menu Interaktif Mudah Dibaca', 'Tombol Reservasi Meja Cepat', 'Integrasi Google Maps'],
    demoSlug: 'restaurant',
    imageUrl: '/images/design-restaurant.webp',
    industryTag: 'Kuliner & F&B',
    mockupBadge: 'Visual Dining',
  },
  {
    id: 'training-education',
    slug: 'training-education',
    name: {
      id: 'Training & Academy',
      en: 'Training & Academy',
      ar: 'التدريب والتعليم المهني',
    },
    styleCategory: 'Education & Courses',
    tagline: {
      id: 'Struktur kurikulum belajar komprehensif, profil mentor, dan formulir pendaftaran peserta',
      en: 'Comprehensive syllabus breakdown, instructor credibility, and streamlined enrollment',
      ar: 'عرض شامل للمناهج التدريبية وملفات المدربين والتسجيل',
    },
    description: {
      id: 'Format ideal untuk lembaga kursus kejuruan, bootcamp teknologi, pusat sertifikasi profesi, dan akademi pelatihan yang membutuhkan kejelasan silabus belajar.',
      en: 'Engineered for academies, professional bootcamps, language institutes, and certification centers.',
      ar: 'مصمم لمراكز التدريب المهني ومعسكرات البرمجة ومعاهد اللغات والتعليم المستمر.',
    },
    primaryColor: '#1e3a8a', // Blue 900
    accentColor: '#10b981', // Emerald 500
    fontFamily: 'Inter, system-ui, sans-serif',
    targetAudience: ['Bootcamp Coding', 'Lembaga Kursus Bahasa', 'Lembaga Sertifikasi Profesi', 'Training Korporat'],
    keyStrengths: ['Visualisasi Silabus Belajar', 'Profil Pengajar Transparan', 'Pendaftaran Mudah'],
    demoSlug: 'training-education',
    imageUrl: '/images/design-training-education.webp',
    industryTag: 'Pendidikan & Kursus',
    mockupBadge: 'Academy & EdTech',
  },
  {
    id: 'ecommerce-retail',
    slug: 'ecommerce-retail',
    name: {
      id: 'E-Commerce & Retail Store',
      en: 'E-Commerce Storefront',
      ar: 'المتجر الإلكتروني والتجزئة',
    },
    styleCategory: 'Retail & Commerce',
    tagline: {
      id: 'Katalog produk berfokus konversi dengan banner promosi, filter kategori, dan trust badge resmi',
      en: 'Conversion-centered product catalogue with promo banners, category badges, and checkout ease',
      ar: 'كتالوج منتجات يركز على المبيعات مع شارات الثقة وسهولة الطلب',
    },
    description: {
      id: 'Menghadirkan pengalaman belanja online yang responsif, navigasi kategori intuitif, informasi variasi stok transparan, dan alur checkout atau pesan via WhatsApp yang mulus.',
      en: 'Delivers a frictionless shopping experience with clear product badges, variant selection, and swift checkout.',
      ar: 'تجربة تسوق سلسة مع تصنيف المنتجات وعرض الخيارات والتفاصيل بوضوح.',
    },
    primaryColor: '#111827', // Gray 900
    accentColor: '#16a34a', // Green 600
    fontFamily: 'system-ui, -apple-system, sans-serif',
    targetAudience: ['Brand Fashion Lokal', 'Distributor Perlengkapan Rumah', 'Toko Gadget', 'Produsen Herbal'],
    keyStrengths: ['Tampilan Produk Terstruktur', 'Checkout WhatsApp Cepat', 'Badge Garansi & Kepercayaan'],
    demoSlug: 'ecommerce-retail',
    imageUrl: '/images/design-ecommerce-retail.webp',
    industryTag: 'Toko Online & Ritel',
    mockupBadge: 'High Conversion',
  },
];
