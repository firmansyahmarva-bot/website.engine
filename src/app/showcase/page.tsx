import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Visual Showcase & UI Component Library | Preview Desain Website',
  description:
    'Eksplorasi 11 galeri komponen UI website modern: navbar, footer, hero banner, tipografi, palet warna, kartu interaktif, dan animasi CSS kelas dunia.',
  path: '/showcase',
  keywords: [
    'visual showcase website',
    'ui component library indonesia',
    'contoh navbar website modern',
    'desain hero banner website',
    'palet warna web design',
  ],
});

const SHOWCASE_ITEMS = [
  {
    slug: 'navbar',
    title: 'Navbar & Sistem Navigasi',
    count: '12 Varian',
    badge: 'Desktop & Mobile',
    description: 'Header transparan, sticky navbar, mega menu bertingkat, drawer seluler, dan topbar pengumuman.',
    icon: '🧭',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'footer',
    title: 'Footer Korporat & Bisnis',
    count: '10 Varian',
    badge: 'Multi-Column',
    description: 'Footer 4 kolom, minimalis modern, integrasi peta Google, formulir newsletter, dan kredensial legal.',
    icon: '⚓',
    color: 'from-slate-700 to-slate-900',
  },
  {
    slug: 'hero',
    title: 'Hero Banner & Above-the-Fold',
    count: '12 Layout',
    badge: 'High Conversion',
    description: 'Split-screen, centered bold, stat-bar trust, app mockup showcase, dan gradient glassmorphism.',
    icon: '⚡',
    color: 'from-indigo-600 to-violet-600',
  },
  {
    slug: 'typography',
    title: 'Tipografi & Font Pairings',
    count: '10 Kombinasi',
    badge: 'Skala Bahasa ID',
    description: 'Pasangan font serif, sans-serif, geometric, dan monospace dengan rasio hierarki keterbacaan tinggi.',
    icon: '🔤',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    slug: 'button',
    title: 'Tombol & CTA Interaktif',
    count: '30+ State',
    badge: 'Micro-Interactions',
    description: 'State hover, active, focus, loading spinner, WhatsApp pulse ring, dan varian tombol konversi.',
    icon: '🔘',
    color: 'from-amber-500 to-orange-600',
  },
  {
    slug: 'color',
    title: 'Palet Warna & Rasio Kontras',
    count: '12 Kurasi',
    badge: 'WCAG AAA Compliant',
    description: 'Koleksi palet warna industri (Navy Trust, Emerald Eco, Sunset Energy) lengkap dengan lencana kontras.',
    icon: '🎨',
    color: 'from-rose-500 to-pink-600',
  },
  {
    slug: 'animation',
    title: 'Katalog Animasi CSS Murni',
    count: '15+ Motion',
    badge: 'Under 15KB',
    description: 'Fade-up, scale-in, shimmer loading, floating card, marquee ticker, dan tombol trigger replay.',
    icon: '✨',
    color: 'from-purple-600 to-fuchsia-600',
  },
  {
    slug: 'card',
    title: 'Kartu & Wadah Informasi',
    count: '10 Pola',
    badge: 'Component UI',
    description: 'Kartu produk e-commerce, ulasan bintang testimoni, tabel paket harga, profil tim, dan kartu statistik.',
    icon: '🗂️',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    slug: 'form',
    title: 'Formulir & Input Interaktif',
    count: '8 Layout',
    badge: 'Form CRO',
    description: 'Formulir multi-step, kalkulator biaya, input floating label, validasi WhatsApp, dan state error.',
    icon: '📝',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    slug: 'section',
    title: 'Blueprint Seksi Halaman',
    count: '10 Blueprint',
    badge: 'Full Sections',
    description: 'Timeline riwayat proyek, alur proses 4 langkah, grid FAQ interaktif, dan tabel komparasi fitur.',
    icon: '📐',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    slug: 'gallery',
    title: 'Galeri Mockup 10 Konsep Desain',
    count: '10 Desain Utuh',
    badge: 'Interactive Lightbox',
    description: 'Pratinjau visual penuh dari 10 konsep desain: Neo-Corporate, Modern Glass, Brutalism, Tech Dark, dll.',
    icon: '🖼️',
    color: 'from-violet-600 to-purple-800',
  },
];

export default function ShowcaseHubPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200/80 pt-16 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Live Component & Design System Showcase
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Galeri Komponen Visual &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Arsitektur Web Modern
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi ratusan variasi komponen antarmuka yang siap diterapkan pada website bisnis Anda.
            Seluruh komponen dibangun menggunakan HTML semantik murni, Tailwind CSS v4, dan performa
            Core Web Vitals sempurna.
          </p>
        </div>
      </header>

      {/* Grid of 11 Showcase Hub Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_ITEMS.map((item) => (
            <Link
              key={item.slug}
              href={`/showcase/${item.slug}`}
              className="group p-6 bg-white rounded-3xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg block">
                      {item.count}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Buka Showcase Interaktif</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Bottom Conversion Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="p-8 sm:p-12 bg-slate-900 rounded-3xl text-white text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Suka dengan Salah Satu Konsep Komponen di Atas?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Semua komponen dan layout ini dapat langsung dipasang ke dalam paket website bisnis Anda
            tanpa biaya lisensi terpisah.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/configure"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
            >
              Pilih Desain & Hitung Biaya
            </Link>
            <Link
              href="/website-packages"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors border border-slate-700"
            >
              Lihat Rincian Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
