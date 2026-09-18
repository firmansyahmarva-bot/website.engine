import { WebsiteTemplate } from '@/types';

export const websiteTemplates: WebsiteTemplate[] = [
  {
    id: 'corporate-executive',
    name: 'Executive & Enterprise Corporate',
    category: 'Corporate & Holding',
    tagline: 'Minimalist, Prestigious, Slate & Platinum',
    description: {
      id: 'Konsep desain korporat berwibawa tinggi dengan tipografi bersih, lencana kredibilitas, metrik kinerja, dan integrasi WhatsApp level manajemen.',
      en: 'High-authority corporate layout featuring executive serif typography, credential badges, impact statistics, and executive WhatsApp routing.',
      ar: 'تصميم مؤسسي رفيع المستوى يتميز بطباعة أنيقة، شارات الثقة والمصداقية، وإحصائيات الأداء المالي والتشغيلي.'
    },
    style: 'Minimalist Clean / Navy Slate',
    speedScore: 99,
    featured: true,
    colorScheme: {
      primary: '#0f172a',
      secondary: '#334155',
      accent: '#2563eb',
      background: '#f8fafc'
    },
    features: {
      id: ['Struktur Multi-Divisi / Grup Perusahaan', 'Laporan Kinerja & Investor Relations', 'Direktori Dewan Direksi', 'Tombol WhatsApp Corporate Inquiry'],
      en: ['Multi-Division Group Architecture', 'Investor Relations & ESG Metrics', 'Executive Leadership Directory', 'Direct Corporate WA Routing'],
      ar: ['هيكلية للشركات القابضة والمجموعات', 'قسم علاقات المستثمرين والتقارير', 'دليل مجلس الإدارة والتنفيذيين', 'تحويل استفسارات الشركات للواتساب']
    },
    idealFor: {
      id: ['Holding Company', 'Konsultan Bisnis', 'Perusahaan Manufaktur', 'Distributor Nasional'],
      en: ['Holding Companies', 'Management Consultancies', 'Manufacturing Plants', 'National Distributors'],
      ar: ['الشركات القابضة', 'الاستشارات الإدارية', 'المصانع والشركات الكبرى', 'الموزعون الإقليميون']
    },
    mockupType: 'browser'
  },
  {
    id: 'saas-dark',
    name: 'NeoTech SaaS & AI Platform',
    category: 'SaaS & Digital Tech',
    tagline: 'Dark Mode, Glassmorphic, Neon Glow Badges',
    description: {
      id: 'Tampilan ultra modern bertema dark mode dengan efek glassmorphism, visual bento-grid, metrik real-time, dan konversi demo via WhatsApp.',
      en: 'Ultra-modern dark aesthetic with backdrop blur glassmorphism, bento grid layout, interactive stats, and instant demo bookings via WhatsApp.',
      ar: 'تصميم تقني مظلم فائق العصرية مع تأثيرات زجاجية، وشبكات بينتو تفاعلية، وحجز عروض تجريبية فورية عبر واتساب.'
    },
    style: 'Modern Dark / Cyber Neon',
    speedScore: 98,
    featured: true,
    colorScheme: {
      primary: '#030712',
      secondary: '#111827',
      accent: '#6366f1',
      background: '#030712'
    },
    features: {
      id: ['Bento Grid Fitur Interaktif', 'Tabel Perbandingan Spek & Harga', 'Badge Status Server 99.9%', 'Chatbot & WhatsApp Live Integration'],
      en: ['Interactive Bento Feature Grids', 'Feature Comparison Matrix', 'Real-time System Uptime Pill', 'Seamless WhatsApp Demo Request'],
      ar: ['شبكات عرض ميزات تفاعلية', 'جدول مقارنة الخطط والمواصفات', 'مؤشر أداء وسرعة النظام الحية', 'حجز عروض وتجارب مباشرة عبر واتساب']
    },
    idealFor: {
      id: ['Startup Teknologi', 'Software House', 'Aplikasi Mobile & SaaS', 'Layanan Cloud'],
      en: ['Tech Startups', 'Software Houses', 'SaaS Applications', 'Cloud Infrastructure'],
      ar: ['الشركات التقنية الناشئة', 'شركات تطوير البرمجيات', 'منصات السحاب والذكاء الاصطناعي', 'التطبيقات الرقمية']
    },
    mockupType: 'dual'
  },
  {
    id: 'luxury-realestate',
    name: 'Palazzo Luxury Villa & Real Estate',
    category: 'Property & Real Estate',
    tagline: 'Architectural Elegance, Rich Galleries, Floorplans',
    description: {
      id: 'Katalog properti premium dengan galeri layar penuh, rincian denah 3D, peta lokasi interaktif, dan tombol privat booking inspeksi ke WhatsApp agen.',
      en: 'High-end architectural layout with edge-to-edge imagery, floorplan drawers, neighborhood highlights, and private WhatsApp inspection booking.',
      ar: 'تصميم عقاري فاخر لعرض الفلل والمشاريع السكنية، معارض صور عالية الدقة، مخططات معمارية، وحجز معاينات خاصة عبر واتساب.'
    },
    style: 'Luxury Architectural / Warm Sand',
    speedScore: 97,
    featured: true,
    colorScheme: {
      primary: '#1c1917',
      secondary: '#44403c',
      accent: '#d97706',
      background: '#fafaf9'
    },
    features: {
      id: ['Listing 100+ Properti Filterable', 'Slider Denah Lantai & Fasilitas', 'Virtual Tour Video Embed', 'Form Jadwal Survei Langsung ke WA Agen'],
      en: ['100+ Filterable Property Listings', 'Interactive Floorplan & Specs', 'Virtual Tour Ready Video Framing', 'Direct WhatsApp Agent Tour Scheduler'],
      ar: ['فهرس عقارات يتسع لمئات المشاريع', 'مخططات تفاعلية ومواصفات دقيقة', 'جاهز لجولات الفيديو الافتراضية', 'حجز مواعيد المعاينة مع الوكلاء عبر واتساب']
    },
    idealFor: {
      id: ['Developer Properti', 'Villa & Resort Bali', 'Agen Real Estate Mewah', 'Perumahan Komersial'],
      en: ['Property Developers', 'Luxury Bali Villas', 'High-end Brokerages', 'Commercial Real Estate'],
      ar: ['المطورون العقاريون', 'الفلل والمنتجعات الفاخرة', 'وكالات الوساطة العقارية', 'المجمعات السكنية']
    },
    mockupType: 'browser'
  },
  {
    id: 'healthcare-clinic',
    name: 'Apex Health Clinic & Medical Care',
    category: 'Healthcare & Clinic',
    tagline: 'Clean Trust Blue, Doctor Directory, Fast Booking',
    description: {
      id: 'Situs medis profesional yang mengutamakan rasa percaya dan kemudahan pasien: jadwal praktek dokter, layanan unggulan, dan booking janji temu WhatsApp.',
      en: 'Clean, trust-focused healthcare interface with specialist directories, treatment pricing clarity, and instant WhatsApp triage/appointments.',
      ar: 'تصميم طبي موثوق للمستشفيات والعيادات، جداول مواعيد الأطباء، دليل التخصصات، وحجز المواعيد الفورية عبر واتساب.'
    },
    style: 'Clinical Clean / Trust Cyan',
    speedScore: 99,
    featured: false,
    colorScheme: {
      primary: '#0e7490',
      secondary: '#155e75',
      accent: '#06b6d4',
      background: '#f0fdfa'
    },
    features: {
      id: ['Filter Jadwal Praktek Dokter', 'Katalog Layanan & Estimasi Biaya', 'Lencana Izin Kemenkes & Akreditasi', 'Tombol WhatsApp Darurat & Reservasi'],
      en: ['Doctor Schedule & Bio Filter', 'Treatment Directory with Pricing', 'Accreditation & Safety Badging', 'Priority Emergency WhatsApp Routing'],
      ar: ['دليل الأطباء وساعات الدوام', 'قائمة العلاجات والخدمات الطبية', 'شارات التراخيص والاعتماد الطبي', 'حجز فوري ومسار طوارئ مباشر على واتساب']
    },
    idealFor: {
      id: ['Klinik Gigi & Kecantikan', 'Rumah Sakit Swasta', 'Praktek Dokter Spesialis', 'Laboratorium Medis'],
      en: ['Dental & Aesthetic Clinics', 'Private Medical Centers', 'Specialist Practices', 'Diagnostic Labs'],
      ar: ['عيادات الأسنان والتجميل', 'المستشفيات والمراكز التخصصية', 'المجمعات الطبية', 'مختبرات التحاليل']
    },
    mockupType: 'browser'
  },
  {
    id: 'ecommerce-retail',
    name: 'Nordic Retail & Catalog Storefront',
    category: 'E-Commerce & Retail',
    tagline: 'Speed-Optimized Product Grid, Zero Bloat Checkout',
    description: {
      id: 'Katalog e-commerce ultra cepat hingga 250+ produk dengan filter kategori, varian warna/ukuran, dan checkout otomatis langsung ke chat WhatsApp.',
      en: 'Blazing fast e-commerce catalog supporting 250+ SKUs with instant category filters, variant pickers, and automated 1-click WhatsApp order generation.',
      ar: 'واجهة متجر إلكتروني فائق السرعة يدعم 250+ منتج، فلاتر فورية للأصناف والمقاسات، وإتمام الطلب التلقائي بنقرة واحدة عبر واتساب.'
    },
    style: 'Clean Modern Retail / Monochrome + Orange',
    speedScore: 98,
    featured: true,
    colorScheme: {
      primary: '#18181b',
      secondary: '#27272a',
      accent: '#f97316',
      background: '#ffffff'
    },
    features: {
      id: ['Katalog 250+ Produk Siap Pakai', 'Checkout WhatsApp dengan Format Rapi', 'Filter Kategori & Pencarian Instan', 'Stiker Diskon & Flash Sale Timer'],
      en: ['250+ Pre-Configured Product Capacity', 'Structured WhatsApp Cart Invoice', 'Instant Sub-10ms Category Filter', 'Promo Ribbons & Stock Indicators'],
      ar: ['يتسع لأكثر من 250 منتج مصنف', 'توليد فاتورة الطلب تلقائياً في واتساب', 'بحث وتصفية فائقة السرعة للمنتجات', 'ملصقات العروض والتخفيضات']
    },
    idealFor: {
      id: ['Brand Fashion & Hijab', 'Toko Gadget & Elektronik', 'Grosir / Distributor Produk', 'Produk Kecantikan & Skincare'],
      en: ['Fashion & Apparel Brands', 'Electronics & Accessories', 'Wholesale Distributors', 'Beauty & Cosmetics'],
      ar: ['العلامات التجارية للأزياء', 'متاجر الإلكترونيات والملحقات', 'تجار الجملة والموزعين', 'منتجات العناية والتجميل']
    },
    mockupType: 'browser'
  },
  {
    id: 'restaurant-culinary',
    name: 'Bistronomy Culinary & Fine Dining',
    category: 'Restaurant & F&B',
    tagline: 'Warm Ambient Mood, Digital Menu, Table Reservation',
    description: {
      id: 'Website resto dan kafe dengan estetika hangat memikat selera. Menu digital interaktif, integrasi Google Maps, dan reservasi meja WhatsApp otomatis.',
      en: 'Atmospheric culinary showcase featuring interactive digital menus, dietary filter tags, ambiance gallery, and automated WhatsApp table bookings.',
      ar: 'تصميم جذاب للمطاعم والمقاهي الراقية، قائمة طعام رقمية تفاعلية، معرض لأجواء المكان، وحجز طاولات فوري عبر واتساب.'
    },
    style: 'Warm Dark Charcoal / Amber Gold',
    speedScore: 99,
    featured: false,
    colorScheme: {
      primary: '#1c1917',
      secondary: '#292524',
      accent: '#f59e0b',
      background: '#0c0a09'
    },
    features: {
      id: ['Buku Menu Digital dengan Foto & Harga', 'Filter Makanan Halal/Vegan/Signature', 'Formulir Reservasi Meja via WhatsApp', 'Integrasi Jam Buka & Navigasi Lokasi'],
      en: ['Rich Digital Menu with High-Res Imagery', 'Dietary Preference & Chef Specials Filter', 'Direct WhatsApp Table Reservation Hook', 'Live Opening Hours & Maps Direction'],
      ar: ['قائمة طعام رقمية مع صور عالية الجودة', 'فلاتر للأطباق المميزة والمأكولات الحلال', 'حجز طاولات ومناسبات عبر واتساب', 'ساعات العمل اليومية وخرائط الوصول']
    },
    idealFor: {
      id: ['Restoran Fine Dining', 'Cafe & Roastery Kopi', 'Catering Pernikahan', 'Franchise Makanan & Minuman'],
      en: ['Fine Dining Restaurants', 'Artisan Coffee Roasteries', 'Event Caterers', 'F&B Franchise Chains'],
      ar: ['المطاعم الفاخرة والمقاهي المختصة', 'شركات الضيافة وتموين الحفلات', 'سلاسل الامتياز التجاري للأطعمة']
    },
    mockupType: 'browser'
  },
  {
    id: 'creative-brutalist',
    name: 'Studio Kroma Bold Creative Portfolio',
    category: 'Creative & Agency',
    tagline: 'High-Impact Typography, Bold Interaction, Case Studies',
    description: {
      id: 'Gaya visual berani dengan tipografi ekspresif, kartu studi kasus interaktif, lencana penghargaan, dan jalur inquiry proyek cepat ke WhatsApp.',
      en: 'High-impact design style with expressive large type, interactive project cards, award ribbons, and frictionless WhatsApp creative pitch routing.',
      ar: 'تصميم جريء ومبتكر للوكالات الإبداعية والمصممين، معارض أعمال تفاعلية، دراسات حالة للمشاريع، وتواصل مباشر عبر واتساب.'
    },
    style: 'Bold Editorial / Monochromatic Lime',
    speedScore: 98,
    featured: false,
    colorScheme: {
      primary: '#09090b',
      secondary: '#18181b',
      accent: '#84cc16',
      background: '#ffffff'
    },
    features: {
      id: ['Studi Kasus Proyek Full-Screen', 'Showcase Logo Klien Berjalan (Marquee)', 'Daftar Layanan Desain & Produksi Video', 'Quick Project Brief via WhatsApp'],
      en: ['Immersive Case Study Breakdowns', 'Infinite Client Logo Ticker', 'Creative Deliverables & Scope Matrix', '1-Click Project Brief to WhatsApp'],
      ar: ['عرض متعمق لدراسات الحالة والمشاريع', 'شريط متحرك لشعارات العملاء والشركاء', 'قائمة الخدمات الإبداعية والإنتاج', 'إرسال ملخص المشروع فوراً إلى واتساب']
    },
    idealFor: {
      id: ['Digital Agency & Production House', 'Fotografer & Videografer Profesional', 'Konsultan Branding', 'Arsitek & Interior Designer'],
      en: ['Digital Agencies & Production Houses', 'Commercial Photographers', 'Branding Consultancies', 'Architects & Interior Designers'],
      ar: ['الوكالات الإعلانية وشركات الإنتاج', 'المصورون ومصممو الفيديو المحترفون', 'استشارات الهوية البصرية', 'مهندسو الديكور والعمارة']
    },
    mockupType: 'browser'
  },
  {
    id: 'law-finance',
    name: 'Vanguard Legal & Wealth Advisory',
    category: 'Legal & Financial',
    tagline: 'Authoritative Navy & Gold, Case Results, Consultation',
    description: {
      id: 'Menampilkan otoritas dan rekam jejak hukum/keuangan dengan profil pengacara, bidang praktek, bukti kasus sukses, dan booking konsultasi rahasia.',
      en: 'Commanding authoritative layout emphasizing confidential credibility, partner track records, practice areas, and discreet WhatsApp consult booking.',
      ar: 'تصميم يبرز الهيبة والمصداقية القانونية والمالية، سجل نجاح القضايا، سير المحامين، وحجز استشارات قانونية سرية عبر واتساب.'
    },
    style: 'Authoritative Navy / Pure Gold Accent',
    speedScore: 99,
    featured: false,
    colorScheme: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#eab308',
      background: '#f8fafc'
    },
    features: {
      id: ['Katalog Bidang Hukum & Perpajakan', 'Direktori Partner & Pengacara Senior', 'Rangkuman Kasus Sukses & Testimonial', 'Formulir Konsultasi Rahasia ke WhatsApp'],
      en: ['Practice Areas & Corporate Advisory Matrix', 'Senior Partner Dossiers & Certifications', 'Verified Case Victories & Testimonials', 'Confidential WhatsApp Consultation Flow'],
      ar: ['أقسام الاستشارات القانونية والضريبية', 'دليل الشركاء والمحامين المعتمدين', 'سجل الإنجازات والقضايا الناجحة', 'استشارات قانونية سرية مباشرة عبر واتساب']
    },
    idealFor: {
      id: ['Kantor Pengacara & Advokat', 'Konsultan Pajak & Akuntan Publik', 'Perusahaan Manajemen Aset', 'Notaris & PPAT'],
      en: ['Law Firms & Advocates', 'Tax & Audit Advisory', 'Wealth & Asset Managers', 'Notaries & Conveyancers'],
      ar: ['مكاتب المحاماة والاستشارات القانونية', 'المحاسبون القانونيون وخبراء الضرائب', 'شركات إدارة الثروات والاستثمار', 'الموثقون والمستشارون الماليون']
    },
    mockupType: 'browser'
  },
  {
    id: 'academy-edtech',
    name: 'OmniSkill Academy & Training Hub',
    category: 'Education & Courses',
    tagline: 'Vibrant, Course Catalog, Curriculum Accordion',
    description: {
      id: 'Platform pendaftaran kursus dan bootcamp dengan silabus interaktif, sertifikasi alumni, jadwal batch, dan pendaftaran otomatis ke admin WhatsApp.',
      en: 'Dynamic learning hub interface with curriculum accordions, mentor profiles, graduate placement badges, and direct WhatsApp admissions registration.',
      ar: 'منصة تعليمية متكاملة للدورات والتدريب، مناهج تفاعلية، ملفات المدربين، وشهادات الخريجين مع تسجيل مباشر عبر واتساب.'
    },
    style: 'Modern Academic / Violet & Coral',
    speedScore: 98,
    featured: false,
    colorScheme: {
      primary: '#4c1d95',
      secondary: '#5b21b6',
      accent: '#ec4899',
      background: '#fdf4ff'
    },
    features: {
      id: ['Katalog 100+ Modul Kursus & Silabus', 'Jadwal Batch & Sisa Kuota Real-Time', 'Galeri Karya Alumni & Bukti Kerja', 'Pendaftaran Siswa Baru Langsung ke WA'],
      en: ['100+ Course Modules & Syllabus Tree', 'Live Batch Schedule & Seat Counter', 'Alumni Placement Proof & Reviews', 'Instant WhatsApp Student Enrollment'],
      ar: ['دليل الدورات والبرامج التدريبية', 'جداول الدفعات والمقاعد المتبقية', 'معرض مشاريع الخريجين والشهادات', 'تسجيل الطلاب وقبولهم الفوري عبر واتساب']
    },
    idealFor: {
      id: ['Lembaga Kursus & Bahasa', 'Bootcamp Coding & Digital Marketing', 'Sekolah Swasta & Pesantren', 'Pusat Sertifikasi Profesi'],
      en: ['Language & Professional Academies', 'Coding & Marketing Bootcamps', 'Private Academies', 'Skill Certification Centers'],
      ar: ['معاهد اللغات والتدريب المهني', 'معسكرات البرمجة والتسويق الرقمي', 'المدارس والمعاهد الخاصة', 'مراكز التدريب والشهادات المعتمدة']
    },
    mockupType: 'browser'
  },
  {
    id: 'industrial-logistics',
    name: 'Titan Heavy Industries & Logistics',
    category: 'Industrial & Freight',
    tagline: 'High-Contrast Rugged, Equipment Specs, RFQ Engine',
    description: {
      id: 'Tampilan kokoh untuk industri berat, kargo pengiriman, dan kontraktor dengan tabel spesifikasi alat, rute logistik, dan tombol Minta Penawaran (RFQ) ke WA.',
      en: 'Heavy-duty industrial visual framework highlighting fleet specifications, shipping lanes, safety certifications, and WhatsApp RFQ quoting.',
      ar: 'تصميم عالي التحمل لقطاعات المقاولات والصناعات الثقيلة والخدمات اللوجستية، مع طلب عروض أسعار فوري للمعدات عبر واتساب.'
    },
    style: 'High-Contrast Industrial / Safety Yellow + Charcoal',
    speedScore: 99,
    featured: false,
    colorScheme: {
      primary: '#18181b',
      secondary: '#27272a',
      accent: '#eab308',
      background: '#fafafa'
    },
    features: {
      id: ['Katalog Armada & Spesifikasi Mesin', 'Cakupan Jalur Logistik & Gudang', 'Sertifikasi ISO & Standar K3', 'Tombol Minta Penawaran (RFQ) Langsung ke WA'],
      en: ['Fleet & Heavy Machinery Specs Table', 'Domestic & Global Shipping Lane Map', 'ISO Safety & Environmental Credentials', 'Direct WhatsApp Request for Quote (RFQ)'],
      ar: ['جدول مواصفات الآلات والمعدات الثقيلة', 'خارطة مسارات الشحن والمستودعات', 'شهادات الجودة والسلامة المهنية ISO', 'طلب عروض الأسعار والمناقصات عبر واتساب']
    },
    idealFor: {
      id: ['Ekspedisi & Logistik Kargo', 'Kontraktor Sipil & Konstruksi', 'Penyewaan Alat Berat', 'Pabrik & Pergudangan'],
      en: ['Freight & Global Logistics', 'Civil Engineering & Construction', 'Heavy Equipment Rental', 'Warehousing & Industrial Parks'],
      ar: ['شركات الشحن والخدمات اللوجستية', 'المقاولات العامة والهندسة المدنية', 'تأجير المعدات الثقيلة والرافعات', 'المصانع والمناطق اللوجستية']
    },
    mockupType: 'browser'
  }
];
