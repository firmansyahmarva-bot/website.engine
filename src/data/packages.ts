import { PricingPackage, AddonOption } from '@/types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'express-landing',
    name: {
      id: 'Paket Express Landing',
      en: 'Express Landing Page',
      ar: 'صفحة هبوط سريعة'
    },
    badge: {
      id: 'Iklan & Promo Cepat',
      en: 'Fast Ad Launch',
      ar: 'مثالية للإعلانات'
    },
    pages: 1,
    pagesLabel: {
      id: '1 Halaman Panjang (Landing Page)',
      en: '1 Long-form Landing Page',
      ar: 'صفحة هبوط واحدة متكاملة'
    },
    priceIDR: 999000,
    priceUSD: 79,
    deliveryDays: {
      id: '1–2 Hari Kerja',
      en: '1–2 Business Days',
      ar: '1–2 أيام عمل'
    },
    popular: false,
    features: {
      id: [
        'Desain Khusus Konversi Iklan (Google Ads / TikTok Ads)',
        'Kecepatan Load Super Ringan (< 0.4 Detik)',
        'Tombol WhatsApp Mengambang (Floating WA Button)',
        'Free Hosting Cloudflare 1 Tahun',
        'Free SSL Keamanan HTTPS',
        'Revisi Minor 2x'
      ],
      en: [
        'High-Conversion Ad Layout (Google / TikTok Ads)',
        'Sub-400ms Ultra-Fast Page Load',
        'Floating WhatsApp Conversion Anchor',
        'Free 1-Year Cloudflare Edge Hosting',
        'Automated HTTPS Security Certificate',
        '2 Rounds of Minor Revisions'
      ],
      ar: [
        'تصميم مخصص لتحويل الإعلانات الممولة',
        'سرعة تحميل فائقة أقل من 400 جزء من الثانية',
        'زر واتساب عائم للتواصل السريع',
        'استضافة سحابية مجانية لمدة سنة',
        'شهادة أمان وتشفير مجانية SSL',
        'تعديلان مجانيان'
      ]
    }
  },
  {
    id: 'starter-pro',
    name: {
      id: 'Paket Starter UMKM',
      en: 'Starter Pro',
      ar: 'الباقة المبتدئة للمشاريع'
    },
    badge: {
      id: 'Cocok untuk Profil Bisnis',
      en: 'Best for Company Profiles',
      ar: 'مثالية للشركات الناشئة'
    },
    pages: 10,
    pagesLabel: {
      id: 'Hingga 10 Halaman Lengkap',
      en: 'Up to 10 Pages',
      ar: 'حتى 10 صفحات كاملة'
    },
    priceIDR: 1799000,
    priceUSD: 129,
    deliveryDays: {
      id: '2–4 Hari Kerja',
      en: '2–4 Business Days',
      ar: '2–4 أيام عمل'
    },
    popular: false,
    features: {
      id: [
        'Hingga 10 Halaman (Beranda, Tentang Kami, Layanan, Tim, Kontak, dll)',
        'Struktur SEO On-Page Dasar Lengkap',
        'Integrasi Google Maps & Formulir Kontak',
        'Format Pesan WhatsApp Otomatis',
        'Mobile Responsive di Semua HP & Tablet',
        'Training Penggunaan & Garansi Teknis 30 Hari'
      ],
      en: [
        'Up to 10 Pages (Home, About, Services, Team, Contact, etc)',
        'Complete Core On-Page SEO Architecture',
        'Interactive Google Maps & Lead Form',
        'Pre-formatted WhatsApp Message Hook',
        '100% Mobile & Tablet Responsive',
        '30 Days Technical Support & Handover Guide'
      ],
      ar: [
        'حتى 10 صفحات (الرئيسية، من نحن، الخدمات، الفريق، اتصل بنا)',
        'تهيئة كاملة لمحركات البحث الأساسية',
        'خرائط قوقل ونموذج تواصل تفاعلي',
        'ربط متقدم مع رسائل واتساب التلقائية',
        'متوافق تماماً مع جميع الهواتف والأجهزة اللوحية',
        'دعم فني وتدريب لمدة 30 يوماً'
      ]
    }
  },
  {
    id: 'business-scale',
    name: {
      id: 'Paket Bisnis 100 Halaman',
      en: 'Business Scale 100 Pages',
      ar: 'باقة الأعمال 100 صفحة'
    },
    badge: {
      id: 'Paling Laris • Rekomendasi SEO',
      en: 'Most Popular • Organic SEO',
      ar: 'الأكثر مبيعاً • تصدر قوقل'
    },
    pages: 100,
    pagesLabel: {
      id: 'Hingga 100 Halaman Terindeks',
      en: 'Up to 100 Indexed Pages',
      ar: 'حتى 100 صفحة مفهرسة'
    },
    priceIDR: 3999000,
    priceUSD: 269,
    deliveryDays: {
      id: '4–7 Hari Kerja',
      en: '4–7 Business Days',
      ar: '4–7 أيام عمل'
    },
    popular: true,
    features: {
      id: [
        'Hingga 100 Halaman Programmatic SEO (Katalog Layanan & Lokasi Kota)',
        'Multi-Keyword Targeting (Mendominasi Halaman 1 Google)',
        'Sitemap XML Dinamis & Pendaftaran Google Search Console',
        'Skema Terstruktur JSON-LD (ProfessionalService, FAQ, Review)',
        'Integrasi WhatsApp Sales Multi-Admin',
        'Garansi PageSpeed Score 95+'
      ],
      en: [
        'Up to 100 Programmatic SEO Pages (Services & Regional Cities)',
        'Multi-Keyword Strategy to Dominate Google Organic Ranks',
        'Dynamic XML Sitemap & Google Search Console Setup',
        'Rich JSON-LD Structured Data (ProfessionalService, FAQ, Schema)',
        'Multi-Admin WhatsApp Sales Lead Router',
        'Google PageSpeed Score 95+ Guarantee'
      ],
      ar: [
        'حتى 100 صفحة مبرمجة لاستهداف الكلمات المفتاحية والمدن',
        'استراتيجية تصدر قوقل متعددة الكلمات البحثية',
        'خريطة موقع ذكية XML وربط مع أدوات مشرفي قوقل',
        'بيانات منظمة متطورة JSON-LD لظهور مميز في قوقل',
        'توجيه طلبات الواتساب لعدة أرقام ومسؤولي مبيعات',
        'ضمان سرعة تحميل 95+ في مقاييس قوقل'
      ]
    }
  },
  {
    id: 'toko-catalog',
    name: {
      id: 'Paket Toko Online 250 Halaman',
      en: 'E-Commerce Catalog 250 Pages',
      ar: 'متجر وكتالوج 250 صفحة'
    },
    badge: {
      id: 'Katalog Produk Skala Besar',
      en: 'High Volume Product Catalog',
      ar: 'كتالوج منتجات ضخم'
    },
    pages: 250,
    pagesLabel: {
      id: 'Hingga 250 Halaman Produk / Katalog',
      en: 'Up to 250 Product / Catalog Pages',
      ar: 'حتى 250 صفحة منتجات وكتالوج'
    },
    priceIDR: 7499000,
    priceUSD: 499,
    deliveryDays: {
      id: '7–12 Hari Kerja',
      en: '7–12 Business Days',
      ar: '7–12 أيام عمل'
    },
    popular: false,
    features: {
      id: [
        'Hingga 250 Halaman Produk Lengkap dengan Variasi & Deskripsi',
        'Sistem Keranjang Belanja & Checkout Otomatis Langsung ke WhatsApp',
        'Filter Kategori, Pencarian Instan, & Sortir Harga',
        'Kalkulator Ongkir Otomatis (Opsional)',
        'Fitur Promo Diskon, Flash Sale Banner, & Badge Best Seller',
        'Backup Otomatis & Keamanan Cloudflare Anti-Hack'
      ],
      en: [
        'Up to 250 Dedicated Product Pages with Variants & Specs',
        'Automated Shopping Cart & Structured WhatsApp Invoice Checkout',
        'Instant Sub-second Category Filtering & Live Search',
        'Shipping Cost Calculation Integration Ready',
        'Discount Badges, Flash Sale Countdowns & Stock Indicators',
        'Zero-Maintenance Cloudflare Anti-DDoS Security'
      ],
      ar: [
        'حتى 250 صفحة مخصصة للمنتجات مع المقاسات والمواصفات',
        'سلة شراء متطورة مع تحويل الفاتورة تلقائياً إلى واتساب',
        'تصفية فورية للأقسام وبحث ذكي سريع',
        'جاهز للربط مع حاسبة تكاليف الشحن والتوصيل',
        'شارات التخفيضات والعد التنازلي للعروض الخاصة',
        'حماية سحابية كاملة ضد الاختراق والهجمات'
      ]
    }
  },
  {
    id: 'portal-directory',
    name: {
      id: 'Paket Portal & Direktori 500 Halaman',
      en: 'Portal & Directory 500 Pages',
      ar: 'بوابة وأدلة أعمال 500 صفحة'
    },
    badge: {
      id: 'Direktori & Media Portal',
      en: 'Directory & Media Portal',
      ar: 'أدلة وبوابات رقمية'
    },
    pages: 500,
    pagesLabel: {
      id: 'Hingga 500 Halaman Direktori / Listing',
      en: 'Up to 500 Directory Listings',
      ar: 'حتى 500 صفحة دليل ومحتوى'
    },
    priceIDR: 12999000,
    priceUSD: 850,
    deliveryDays: {
      id: '12–18 Hari Kerja',
      en: '12–18 Business Days',
      ar: '12–18 أيام عمل'
    },
    popular: false,
    features: {
      id: [
        'Hingga 500 Halaman Listing Properti, Direktori, atau Artikel Berita',
        'Sistem Kategori Bersarang (Nested Taxonomy & Multi-Level Tagging)',
        'Pencarian Cepat dengan Indexing Otomatis',
        'Arsitektur Multi-Bahasa Siap Pakai (ID, EN, AR)',
        'Optimasi Core Web Vitals Skala Besar',
        'Dashboard Admin Headless CMS untuk Input Data Cepat'
      ],
      en: [
        'Up to 500 Dedicated Listings (Real Estate, Business Directory, Media)',
        'Multi-level Nested Taxonomy & Filter Architecture',
        'Blazing Fast Search Engine with Automated Indexing',
        'Multi-Language Routing Ready (ID, EN, AR)',
        'Enterprise Core Web Vitals Tuning',
        'Headless CMS Data Ingestion Pipeline'
      ],
      ar: [
        'حتى 500 صفحة دليل عقاري، أو دليل شركات، أو مقالات إخبارية',
        'تصنيفات فرعية متعددة المستويات وفلاتر متطورة',
        'محرك بحث فائق السرعة وفهرسة آلية',
        'جاهز لتعدد اللغات (عربي، إنجليزي، إندونيسي)',
        'ضبط معايير السرعة العالمية للمواقع الضخمة',
        'لوحة إدارة محتوى سريعة وسلسة'
      ]
    }
  },
  {
    id: 'custom-enterprise',
    name: {
      id: 'Paket Kustom 1.000+ Halaman',
      en: 'Custom Scale 1,000+ Pages',
      ar: 'المؤسسات الكبرى 1000+ صفحة'
    },
    badge: {
      id: 'Skala Raksasa Enterprise',
      en: 'Massive Enterprise Scale',
      ar: 'مشاريع ضخمة مخصصة'
    },
    pages: 1000,
    pagesLabel: {
      id: '1.000+ Halaman Kustom Skalabel',
      en: '1,000+ Scaled Custom Pages',
      ar: 'أكثر من 1000 صفحة مخصصة'
    },
    priceIDR: 0, // Handled via Custom WhatsApp Quote
    priceUSD: 0,
    deliveryDays: {
      id: 'Konsultasi Khusus via WhatsApp',
      en: 'Custom Timeline via WhatsApp',
      ar: 'تحديد المدة عبر واتساب'
    },
    popular: false,
    features: {
      id: [
        'Arsitektur 1.000 hingga 10.000+ Halaman Programmatic Penuh',
        'Integrasi Database Kustom / API Eksternal',
        'Multi-Domain atau Multi-Negara Hreflang Setup',
        'Dedicated Cloudflare Enterprise Edge Caching',
        'SLA Prioritas & Dedicated Engineer',
        'Negosiasi Harga Khusus Sesuai Kompleksitas Kebutuhan'
      ],
      en: [
        '1,000 up to 10,000+ Programmatic Page Architecture',
        'Custom Database Ingestion & External API Hooks',
        'Global Multi-Domain / Multi-Region Hreflang Network',
        'Dedicated Enterprise Cloudflare Edge Caching',
        'Priority SLA Support & Dedicated Solutions Engineer',
        'Tailored Pricing Direct on WhatsApp Based on Scope'
      ],
      ar: [
        'هيكلية برمجية من 1000 إلى 10000+ صفحة مولدة آلياً',
        'ربط مباشر مع قواعد البيانات الخاصة والواجهات البرمجية API',
        'شبكة نطاقات متعددة للدول مع تهيئة كاملة لـ Hreflang',
        'تخزين سحابي فائق السرعة عبر كلاود فلير إنتربرايز',
        'اتفاقية مستوى خدمة SLA ومهندس مخصص لمشروعك',
        'تسعير مخصص ومباشر عبر واتساب بحسب متطلبات العمل'
      ]
    }
  }
];

export const addonOptions: AddonOption[] = [
  {
    id: 'multi-lang-pack',
    name: {
      id: 'Fitur Multi-Bahasa (English / Arabic)',
      en: 'Multi-Language Pack (EN / AR / ID)',
      ar: 'حزمة اللغات المتعددة (عربي / إنجليزي)'
    },
    description: {
      id: 'Menjangkau pasar global dengan navigasi dan halaman dalam 2-3 bahasa berbeda.',
      en: 'Expand globally with dedicated language routing and independent hreflang indexation.',
      ar: 'توسيع نطاق أعمالك عالمياً مع مسارات لغوية مستقلة وتهيئة لقوقل العالمي.'
    },
    priceIDR: 850000,
    priceUSD: 59,
    defaultChecked: false
  },
  {
    id: 'express-delivery',
    name: {
      id: 'Pengerjaan Kilat Prioritas (48 Jam)',
      en: 'Express Priority Delivery (48 Hours)',
      ar: 'تسليم سريع بأولوية قصوى (48 ساعة)'
    },
    description: {
      id: 'Proyek Anda diprioritaskan di baris terdepan untuk siap tayang dalam 2 hari kerja.',
      en: 'Fast-tracked queue placing your build at top priority for 48h deployment.',
      ar: 'وضع مشروعك على رأس أولويات التطوير ليكون جاهزاً خلال 48 ساعة فقط.'
    },
    priceIDR: 750000,
    priceUSD: 49,
    defaultChecked: false
  },
  {
    id: 'whatsapp-multi-agent',
    name: {
      id: 'Sistem Rotasi Multi-Admin WhatsApp',
      en: 'Multi-Agent WhatsApp Lead Router',
      ar: 'توزيع محادثات واتساب على عدة موظفين'
    },
    description: {
      id: 'Otomatis membagi chat calon pembeli secara bergantian ke beberapa nomor CS berbeda.',
      en: 'Evenly distributes incoming leads round-robin across multiple sales agents.',
      ar: 'توزيع تلقائي للعملاء الجدد بالتساوي على أرقام مسؤولي المبيعات المختلفين.'
    },
    priceIDR: 450000,
    priceUSD: 30,
    defaultChecked: false
  },
  {
    id: 'google-business-setup',
    name: {
      id: 'Setup Google Maps & Profil Bisnis Terverifikasi',
      en: 'Google Business Profile & Maps Setup',
      ar: 'تهيئة وتوثيق نشاطك التجاري على خرائط قوقل'
    },
    description: {
      id: 'Membantu bisnis Anda muncul di pencarian lokal Google Maps sekitar lokasi Anda.',
      en: 'Optimize local search signals to rank on Google Maps in your target city.',
      ar: 'تعزيز ظهور شركتك على خرائط قوقل والبحث المحلي لجلب عملاء مدينتك.'
    },
    priceIDR: 499000,
    priceUSD: 35,
    defaultChecked: false
  }
];
