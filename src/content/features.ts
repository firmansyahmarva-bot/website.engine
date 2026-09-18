import { FeatureItem } from '@/types';

export const FEATURES_CATALOG: FeatureItem[] = [
  {
    id: 'whatsapp',
    name: {
      id: 'Integrasi WhatsApp Floating & Form Direct',
      en: 'WhatsApp Direct Chat & Floating CTA',
      ar: 'ربط مباشر بمحادثات واتساب وزر عائم',
    },
    description: {
      id: 'Tombol kontak melayang di semua halaman yang langsung mengarahkan pengunjung ke obrolan WhatsApp dengan template pesan otomatis.',
      en: 'Floating chat button directing visitors straight to your WhatsApp sales team with pre-filled inquiries.',
      ar: 'زر اتصال عائم ينقل الزائر فوراً إلى محادثة واتساب مع رسالة تلقائية.',
    },
    category: 'engagement',
    price: 0, // Included as default in almost all packages
    isDefault: true,
  },
  {
    id: 'contact-form',
    name: {
      id: 'Formulir Kontak Terhubung Email & Notifikasi',
      en: 'Inquiry Form with Email Notifications',
      ar: 'نموذج اتصال مرتبط بالبريد الإلكتروني',
    },
    description: {
      id: 'Formulir kontak lengkap dengan proteksi spam (Anti-Bot), validasi input, dan pengiriman notifikasi langsung ke email perusahaan.',
      en: 'Clean lead capture form with spam protection and instant email notifications.',
      ar: 'استمارة استفسارات آمنة ضد الرسائل المزعجة مع إرسال فوري للبريد.',
    },
    category: 'core',
    price: 0,
    isDefault: true,
  },
  {
    id: 'maps',
    name: {
      id: 'Peta Interaktif Google Maps & Penunjuk Arah',
      en: 'Interactive Google Maps & Directions',
      ar: 'خرائط جوجل التفاعلية ومسارات الوصول',
    },
    description: {
      id: 'Penyematan peta lokasi fisik kantor/toko Anda yang responsif dan langsung dapat dibuka di aplikasi Google Maps pengunjung.',
      en: 'Embedded responsive map pinpointing your office or store with one-tap directions.',
      ar: 'تضمين خريطة تفاعلية لموقعك الجغرافي تفتح بنقرة واحدة.',
    },
    category: 'core',
    price: 0,
    isDefault: true,
  },
  {
    id: 'seo-setup',
    name: {
      id: 'SEO On-Page & Schema.org Structured Data',
      en: 'On-Page SEO & Schema Structured Data',
      ar: 'تهيئة محركات البحث والبيانات المنظمة',
    },
    description: {
      id: 'Optimasi tag judul, meta description, open graph media sosial, sitemap.xml, robots.txt, dan Schema JSON-LD agar terindeks prima di Google.',
      en: 'Meta tags, semantic headings, OpenGraph preview, XML sitemap, robots.txt, and Schema.org rich results.',
      ar: 'تهيئة علامات الميتا وخريطة الموقع وبيانات Schema.org للفهرسة في جوجل.',
    },
    category: 'marketing',
    price: 350000,
  },
  {
    id: 'analytics',
    name: {
      id: 'Analisis Pengunjung (Google Analytics 4 / Plausible)',
      en: 'Web Analytics Setup (GA4 / Privacy Metrics)',
      ar: 'إحصائيات الزوار وتحليل الأداء',
    },
    description: {
      id: 'Pelacakan statistik trafik pengunjung, halaman terpopuler, dan sumber konversi tanpa memperlambat waktu muat website.',
      en: 'Clean analytics setup tracking visitor volume, traffic sources, and conversion events.',
      ar: 'متابعة حركة المرور ومصادر الزيارات وسلوك المستخدم.',
    },
    category: 'marketing',
    price: 200000,
  },
  {
    id: 'blog',
    name: {
      id: 'Sistem Artikel / Blog & Publikasi Berita',
      en: 'Blog & Article Management System',
      ar: 'نظام إدارة المقالات والمدونة الإخبارية',
    },
    description: {
      id: 'Modul publikasi konten berkala untuk membagikan berita, tips industri, atau panduan untuk mendongkrak trafik organik SEO.',
      en: 'Structured editorial system for publishing regular updates, guides, and SEO organic articles.',
      ar: 'نظام نشر المقالات والأخبار لتعزيز الظهور في محركات البحث.',
    },
    category: 'marketing',
    price: 500000,
  },
  {
    id: 'gallery',
    name: {
      id: 'Galeri Foto & Portfolio Interaktif (Lightbox)',
      en: 'Interactive Image Gallery & Lightbox',
      ar: 'معرض صور تفاعلي بمؤثرات احترافية',
    },
    description: {
      id: 'Tampilan galeri foto grid dengan filter kategori, efek zoom lightbox, dan kompresi otomatis untuk loading super cepat.',
      en: 'Categorized image gallery with smooth lightbox viewing and automated responsive image sizing.',
      ar: 'معرض صور بتنسيق شبكي مع إمكانية التكبير والتصنيف وسرعة تحميل عالية.',
    },
    category: 'engagement',
    price: 300000,
  },
  {
    id: 'booking',
    name: {
      id: 'Sistem Reservasi & Janji Temu Online',
      en: 'Online Booking & Appointment Request',
      ar: 'نظام الحجز والمواعيد الإلكتروني',
    },
    description: {
      id: 'Formulir kalender interaktif untuk pemilihan tanggal, jam kunjungan, dan jumlah orang dengan notifikasi konfirmasi WhatsApp.',
      en: 'Date and time slot selector for appointments, table bookings, or consultation scheduling.',
      ar: 'نظام لاختيار مواعيد الجلسات أو حجز الطاولات مع تأكيد فوري.',
    },
    category: 'commerce',
    price: 650000,
  },
  {
    id: 'payment-gateway',
    name: {
      id: 'Integrasi Payment Gateway Otomatis (QRIS, VA, Kartu)',
      en: 'Automatic Payment Gateway (QRIS, VA, Cards)',
      ar: 'بوابة دفع إلكتروني آلية',
    },
    description: {
      id: 'Koneksi ke gateway pembayaran resmi seperti Midtrans/Xendit untuk verifikasi pembayaran real-time via QRIS, Virtual Account, dan e-wallet.',
      en: 'Seamless integration with payment gateways for automatic receipt issuance and real-time transaction status.',
      ar: 'ربط بوابات الدفع الإلكتروني المعتمدة للتحقق التلقائي من المدفوعات.',
    },
    category: 'commerce',
    price: 850000,
  },
  {
    id: 'multilingual',
    name: {
      id: 'Fitur Multi-Bahasa (ID, EN, AR)',
      en: 'Multilingual Architecture (ID, EN, AR)',
      ar: 'دعم اللغات المتعددة (إندونيسي، إنجليزي، عربي)',
    },
    description: {
      id: 'Struktur konten multibahasa dengan pengalih bahasa elegan dan tag hreflang SEO untuk menjangkau klien internasional.',
      en: 'Localized routing and content structures with language switcher and proper SEO hreflang tags.',
      ar: 'بنية محتوى تدعم لغات متعددة مع أداة تبديل وعلامات SEO الدولية.',
    },
    category: 'technical',
    price: 750000,
  },
  {
    id: 'admin-panel',
    name: {
      id: 'Panel Kontrol Admin / CMS Mandiri',
      en: 'Admin Management Dashboard / Headless CMS',
      ar: 'لوحة تحكم إدارية للمحتوى',
    },
    description: {
      id: 'Akses login khusus bagi tim internal untuk mengedit teks, memperbarui harga produk, atau mengunggah gambar tanpa perlu mengedit kode.',
      en: 'Secure dashboard for internal staff to edit texts, update product rates, or upload photos independently.',
      ar: 'لوحة تحكم آمنة تتيح للمشرفين تعديل النصوص والأسعار والصور بسهولة.',
    },
    category: 'technical',
    price: 1200000,
  },
];
