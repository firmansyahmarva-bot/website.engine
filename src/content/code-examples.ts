import { CodeExampleEntity } from '@/types';

export const CODE_EXAMPLES: CodeExampleEntity[] = [
  {
    id: 'responsive-navbar',
    slug: 'responsive-navbar',
    title: 'Accessible Responsive Navbar with Mobile Drawer Toggle',
    category: 'Navigation',
    summary:
      'Struktur navigasi header sticky dengan Semantic HTML5, backdrop blur, fokus aksesibilitas ARIA, dan drawer menu responsif.',
    language: 'tsx',
    code: `<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <a href="/" className="font-bold text-slate-900 text-lg tracking-tight">
      Brand<span className="text-blue-600">Name</span>
    </a>
    
    <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
      <a href="/layanan" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Layanan</a>
      <a href="/tentang" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
      <a href="/portofolio" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Portofolio</a>
      <a href="/kontak" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm">Hubungi Kami</a>
    </nav>
    
    <button 
      type="button" 
      aria-expanded={isOpen} 
      aria-controls="mobile-menu"
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <span className="sr-only">Buka menu navigasi</span>
      {isOpen ? <XIcon /> : <MenuIcon />}
    </button>
  </div>
</header>`,
    whatItDoes:
      'Menampilkan header situs web yang tetap berada di atas layar saat halaman digulir, menyembunyikan navigasi horizontal pada layar smartphone, dan beralih ke tombol toggle menu dengan dukungan penuh pembaca layar (screen reader).',
    whereItIsUseful:
      'Wajib diimplementasikan pada hampir semua situs web bisnis, landing page komersial, maupun portal institusi.',
    technologies: ['HTML5', 'Tailwind CSS', 'React / Next.js', 'ARIA Attributes'],
    accessibilityConsiderations: [
      'Menyertakan atribut aria-label="Main Navigation" pada elemen nav',
      'Atribut aria-expanded mencerminkan status buka/tutup menu secara dinamis',
      'Terdapat teks tersembunyi class="sr-only" untuk pembaca layar',
      'Tombol toggle memiliki outline focus-visible 2px yang jelas saat ditekan tombol Tab',
    ],
    responsiveConsiderations: [
      'Breakpoint md: (768px) memisahkan tampilan navigasi horizontal desktop dari menu hamburger mobile',
      'Tinggi header terkunci pada h-16 (64px) untuk mencegah layout shift saat halaman dimuat',
    ],
    relatedComponents: ['navbar', 'mega-menu', 'footer'],
    relatedWebsiteTypes: ['company-profile', 'landing-page', 'service-business'],
    relatedIndustries: ['construction', 'law-firm', 'consultant', 'technology'],
  },
  {
    id: 'hero-section',
    slug: 'hero-section',
    title: 'High-Converting Above-The-Fold Hero Section',
    category: 'Hero & Headers',
    summary:
      'Section layar pertama dengan headline persuasif, subheadline penjelasan, primary CTA, secondary CTA, dan badge bukti sosial.',
    language: 'tsx',
    code: `<section className="py-20 sm:py-28 bg-white border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-200 mb-4">
      Platform Terstandarisasi & Bergaransi
    </span>
    
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
      Solusi Pembuatan Website Profesional untuk Pertumbuhan Bisnis Anda
    </h1>
    
    <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
      Tingkatkan kepercayaan klien dan lipatgandakan prospek penjualan dengan website berkecepatan muat tinggi dan teroptimasi SEO.
    </p>
    
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="/configure" className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all">
        Mulai Konsultasi Proyek &rarr;
      </a>
      <a href="/designs" className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
        Lihat Katalog Desain
      </a>
    </div>
  </div>
</section>`,
    whatItDoes:
      'Menyajikan pesan inti bisnis secara langsung dalam 3 detik pertama kunjungan, memberikan opsi aksi yang jelas tanpa membebani pikiran pengunjung.',
    whereItIsUseful:
      'Diletakkan di bagian paling atas halaman utama atau landing page produk komersial.',
    technologies: ['Semantic HTML5', 'Tailwind CSS', 'CSS Typography'],
    accessibilityConsiderations: [
      'Tag <h1> tunggal per halaman untuk struktur hierarki heading dokumen yang valid',
      'Kontras teks rasio minimal 4.5:1 memenuhi standar WCAG Level AA',
    ],
    responsiveConsiderations: [
      'Ukuran font beradaptasi halus dari text-3xl di smartphone hingga text-6xl di monitor desktop',
      'Tombol CTA otomatis menumpuk secara vertikal di smartphone agar mudah dijangkau jempol',
    ],
    relatedComponents: ['hero', 'cta', 'statistics'],
    relatedWebsiteTypes: ['landing-page', 'company-profile', 'service-business'],
    relatedIndustries: ['saas', 'consultant', 'property', 'contractor'],
  },
  {
    id: 'pricing-card',
    slug: 'pricing-card',
    title: 'Pricing Card with Deliverables Checklist & Recommended Highlight',
    category: 'Pricing & Commerce',
    summary:
      'Kartu paket harga dengan highlight visual untuk opsi paling populer, rincian biaya, daftar checklist deliverables, dan tombol konfirmasi.',
    language: 'tsx',
    code: `<div className="relative bg-white rounded-2xl p-7 border-2 border-blue-600 shadow-xl ring-4 ring-blue-50 flex flex-col justify-between">
  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase rounded-full shadow">
    Paling Populer
  </span>
  
  <div>
    <h3 className="text-xl font-bold text-slate-900">Professional Business</h3>
    <p className="text-xs text-slate-500 mt-1">Standar korporat berkecepatan tinggi</p>
    
    <div className="mt-4 mb-6 pb-6 border-b border-slate-100">
      <div className="text-3xl font-black text-slate-900">Rp 2.850.000</div>
      <div className="text-xs text-slate-500 mt-1">Hingga 8 Halaman &bull; Garansi 30 Hari</div>
    </div>
    
    <ul className="space-y-2.5 text-xs text-slate-700 mb-8" aria-label="Fitur Paket">
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 w-4 h-4" /> Desain Kustom Karakter Bisnis</li>
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 w-4 h-4" /> Optimasi Kecepatan Core Web Vitals</li>
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 w-4 h-4" /> Schema.org Structured Data SEO</li>
      <li className="flex items-center gap-2"><CheckIcon className="text-emerald-600 w-4 h-4" /> Integrasi WhatsApp & Google Analytics</li>
    </ul>
  </div>
  
  <a href="/configure?plan=business" className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow transition-colors">
    Pilih Paket Ini &rarr;
  </a>
</div>`,
    whatItDoes:
      'Menyajikan paket harga produk atau jasa secara terstruktur dengan penekanan visual pada paket yang paling direkomendasikan.',
    whereItIsUseful:
      'Halaman penawaran paket website, halaman harga SaaS, atau rincian tarif jasa konsultan.',
    technologies: ['Tailwind CSS', 'HTML5 Unordered List', 'SVG Icons'],
    accessibilityConsiderations: [
      'Menggunakan elemen list <ul> dan <li> dengan aria-label yang deskriptif',
      'Badge "Paling Populer" ditempatkan di dalam kontainer yang logis secara DOM',
    ],
    responsiveConsiderations: [
      'Gunakan grid CSS minmax(280px, 1fr) pada kontainer induk untuk otomatis menyesuaikan jumlah kolom',
    ],
    relatedComponents: ['pricing-card', 'comparison-table', 'cta'],
    relatedWebsiteTypes: ['service-business', 'custom', 'company-profile'],
    relatedIndustries: ['saas', 'accounting', 'training', 'software'],
  },
  {
    id: 'faq-accordion',
    slug: 'faq-accordion',
    title: 'Zero-JS Semantic HTML5 FAQ Accordion with Schema.org JSON-LD',
    category: 'Trust & Proof',
    summary:
      'Accordion tanya jawab menggunakan elemen native <details> dan <summary> tanpa dependensi JavaScript client-side.',
    language: 'tsx',
    code: `<div className="space-y-3 max-w-3xl mx-auto">
  <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden open:border-blue-300 open:shadow-sm">
    <summary className="flex items-center justify-between p-5 font-semibold text-slate-900 cursor-pointer list-none select-none hover:text-blue-600 transition-colors">
      <span>Berapa lama proses pengerjaan website hingga online?</span>
      <ChevronDownIcon className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
    </summary>
    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
      Paket Starter rata-rata selesai dalam 3-5 hari kerja, sedangkan Paket Business selesai dalam 7-10 hari kerja setelah materi kami terima lengkap.
    </div>
  </details>
</div>`,
    whatItDoes:
      'Membuka dan menutup jawaban pertanyaan dengan animasi chevron otomatis murni memanfaatkan kapabilitas native browser tanpa baris JavaScript tambahan.',
    whereItIsUseful:
      'Bagian FAQ di halaman mana pun untuk menjawab keberatan calon klien sekaligus meningkatkan peringkat SEO Google.',
    technologies: ['HTML5 details/summary', 'Tailwind CSS group-open state', 'Schema.org JSON-LD'],
    accessibilityConsiderations: [
      'Aksesibel 100% secara default: pengguna dapat membuka/menutup accordion hanya dengan tombol Enter atau Spasi di keyboard',
      'Pembaca layar secara otomatis mengumumkan status terbuka atau tertutupnya elemen details',
    ],
    responsiveConsiderations: [
      'Teks pertanyaan fleksibel membungkus (wrap) dengan rapi di layar ponsel sempit',
    ],
    relatedComponents: ['faq', 'contact-section'],
    relatedWebsiteTypes: ['company-profile', 'landing-page', 'ecommerce'],
    relatedIndustries: ['construction', 'law-firm', 'clinic', 'accounting'],
  },
  {
    id: 'whatsapp-button',
    slug: 'whatsapp-button',
    title: 'Contextual WhatsApp Lead Handoff URL Generator Button',
    category: 'Conversion & CTA',
    summary:
      'Tombol kontak WhatsApp dengan format pesan otomatis berbasis URL encoding dan styling warna resmi.',
    language: 'tsx',
    code: `export function WhatsAppButton({ serviceName, price }: { serviceName: string; price: string }) {
  const phone = "6281233367191";
  const message = \`Halo, saya ingin konsultasi mengenai pembuatan website paket \${serviceName} (Estimasi \${price}). Mohon info jadwal pengerjaannya.\`;
  const url = \`https://wa.me/\${phone}?text=\${encodeURIComponent(message)}\`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all focus:ring-2 focus:ring-emerald-500"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span>Konsultasi WhatsApp Langsung</span>
    </a>
  );
}`,
    whatItDoes:
      'Membuka aplikasi WhatsApp pengunjung dengan template teks yang sudah otomatis terisi nama layanan dan harga tanpa mengharuskan pelanggan mengetik dari nol.',
    whereItIsUseful:
      'Dipasang pada akhir alur konfigurator website atau pada kartu paket layanan spesifik.',
    technologies: ['TypeScript', 'JavaScript encodeURIComponent', 'Tailwind CSS'],
    accessibilityConsiderations: [
      'Menyertakan atribut rel="noopener noreferrer" untuk keamanan tab eksternal',
      'Tombol memiliki target sentuh lebih dari 44px ramah jari',
    ],
    responsiveConsiderations: [
      'Bekerja mulus baik di aplikasi WhatsApp seluler maupun WhatsApp Web di browser komputer desktop',
    ],
    relatedComponents: ['whatsapp-cta', 'cta', 'contact-form'],
    relatedWebsiteTypes: ['landing-page', 'company-profile', 'service-business', 'restaurant'],
    relatedIndustries: ['contractor', 'workshop', 'restaurant', 'property'],
  },
  {
    id: 'responsive-grid',
    slug: 'responsive-grid',
    title: 'Auto-Fit Responsive Feature Grid Without Media Queries',
    category: 'Content & Layout',
    summary:
      'Grid modern yang secara cerdas mengatur jumlah kolom otomatis menggunakan fungsi CSS grid repeat(auto-fit, minmax(...)).',
    language: 'tsx',
    code: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((item, idx) => (
    <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        {item.icon}
      </div>
      <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>`,
    whatItDoes:
      'Menata kartu fitur menjadi 1 kolom di ponsel, 2 kolom di tablet, dan 3 kolom di desktop dengan jarak antar kartu (gap) yang konsisten.',
    whereItIsUseful:
      'Pameran keunggulan produk, daftar layanan teknis, atau direktori tim.',
    technologies: ['CSS Grid', 'Tailwind CSS Grid Utilities'],
    accessibilityConsiderations: [
      'Urutan elemen kartu di layar konsisten dengan urutan pembacaan kode DOM (tidak membingungkan pengguna keyboard)',
    ],
    responsiveConsiderations: [
      'Penggunaan gap-6 (24px) memberikan jeda visual yang proporsional di segala ukuran viewport',
    ],
    relatedComponents: ['feature-grid', 'service-cards', 'portfolio-grid'],
    relatedWebsiteTypes: ['company-profile', 'landing-page', 'technology'],
    relatedIndustries: ['technology', 'saas', 'manufacturing'],
  },
  {
    id: 'footer-component',
    slug: 'footer-component',
    title: 'Semantic Footer with Internal Cross-Linking Columns',
    category: 'Footers',
    summary:
      'Struktur footer korporat multi-kolom yang mengelompokkan internal link industri, tipe website, dan informasi legalitas.',
    language: 'tsx',
    code: `<footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Site Footer">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      <div className="col-span-2 space-y-3">
        <span className="text-xl font-bold text-white">JasaWebsite</span>
        <p className="text-xs text-slate-400 max-w-xs">Solusi website bisnis siap pakai dengan performa Core Web Vitals tinggi.</p>
      </div>
      <div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Paket</h4>
        <ul className="space-y-2 text-xs">
          <li><a href="/website-packages" className="hover:text-white">Starter UMKM</a></li>
          <li><a href="/website-packages" className="hover:text-white">Professional</a></li>
          <li><a href="/website-packages" className="hover:text-white">Enterprise</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Industri</h4>
        <ul className="space-y-2 text-xs">
          <li><a href="/industries/construction" className="hover:text-white">Konstruksi</a></li>
          <li><a href="/industries/law-firm" className="hover:text-white">Kantor Hukum</a></li>
          <li><a href="/industries/hotel" className="hover:text-white">Hotel & Villa</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`,
    whatItDoes:
      'Menyediakan penutup halaman terstruktur dengan tautan internal yang memperkuat distribusi otoritas halaman (PageRank) di mata crawler Google.',
    whereItIsUseful:
      'Dipasang secara global di layout root seluruh halaman situs web.',
    technologies: ['Semantic HTML5', 'Tailwind CSS Multi-Col Grid'],
    accessibilityConsiderations: [
      'Gunakan aria-label="Site Footer" untuk memperjelas peran landmark di screen reader',
    ],
    responsiveConsiderations: [
      'Kolom merek menempati 2 kolom penuh di tablet dan desktop agar seimbang dengan kolom link lainnya',
    ],
    relatedComponents: ['footer', 'navbar'],
    relatedWebsiteTypes: ['company-profile', 'school', 'custom'],
    relatedIndustries: ['construction', 'finance', 'manufacturing'],
  },
  {
    id: 'contact-form-component',
    slug: 'contact-form-component',
    title: 'Spam-Protected Validated Lead Form with Native Validation',
    category: 'Forms & Inputs',
    summary:
      'Formulir kontak bisnis dengan penanganan tipe data native, input telepon, dan honeypot anti-bot tersembunyi.',
    language: 'tsx',
    code: `<form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div>
    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap *</label>
    <input id="name" type="text" required autoComplete="name" className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
  </div>
  <div>
    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp *</label>
    <input id="phone" type="tel" required autoComplete="tel" placeholder="08xxxxxxxxxx" className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
  </div>
  <div>
    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">Pesan / Kebutuhan Website *</label>
    <textarea id="message" rows={4} required className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
  </div>
  <button type="submit" className="w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition-colors">
    Kirim Pesan & Konsultasi
  </button>
</form>`,
    whatItDoes:
      'Menyediakan kolom input leads tervalidasi yang memandu calon klien mengisi nama dan nomor WhatsApp untuk segera dihubungi tim sales.',
    whereItIsUseful:
      'Halaman hubungi kami, formulir permohonan survei lokasi kontraktor, atau form konsultasi jasa profesional.',
    technologies: ['HTML5 Form Controls', 'Tailwind CSS Forms', 'Accessible Label Associations'],
    accessibilityConsiderations: [
      'Setiap elemen input dihubungkan secara eksplisit ke label dengan pasangan id dan htmlFor',
      'Atribut required memberikan peringatan bawaan browser jika kolom belum terisi',
    ],
    responsiveConsiderations: [
      'Gunakan font-size minimal 16px (text-base) atau 14px (text-sm) pada input mobile untuk mencegah zoom otomatis yang mengganggu di browser iOS Safari',
    ],
    relatedComponents: ['contact-form', 'contact-section'],
    relatedWebsiteTypes: ['service-business', 'company-profile', 'landing-page'],
    relatedIndustries: ['consultant', 'law-firm', 'contractor', 'accounting'],
  },
];
