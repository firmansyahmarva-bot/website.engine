import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 12 Desain Navbar & Navigasi Website Modern',
  description:
    'Koleksi 12 variasi navbar website modern: minimalis, korporat, floating island, mega menu, dan mobile drawer yang cepat dan responsif.',
  path: '/showcase/navbar',
  keywords: ['contoh navbar website', 'desain header web', 'responsive navbar nextjs', 'mega menu website'],
});

export default function NavbarShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            12 Variasi Navbar & Sistem Navigasi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Setiap varian navbar diuji untuk kenyamanan navigasi seluler dan desktop.
            Gunakan tombol toggle di sudut kanan frame peramban untuk melihat versi mobile.
          </p>
        </div>

        {/* Variant 1: Minimalist Clean */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Minimalist Clean (SaaS & Agensi)</h2>
            <span className="text-xs text-slate-500 font-mono">Logo Kiri • Menu Tengah • CTA Kanan</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-minimal">
            <nav className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
              <div className="font-extrabold text-lg text-slate-900 tracking-tight">
                Nexus<span className="text-blue-600">.</span>
              </div>
              <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
                <span className="text-blue-600 font-semibold cursor-pointer">Beranda</span>
                <span className="hover:text-slate-900 cursor-pointer">Layanan</span>
                <span className="hover:text-slate-900 cursor-pointer">Portofolio</span>
                <span className="hover:text-slate-900 cursor-pointer">Harga</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="hidden sm:inline-block text-xs font-semibold text-slate-700 px-3 py-1.5 hover:text-slate-900">
                  Masuk
                </button>
                <button className="text-xs font-bold bg-blue-600 text-white px-4 py-2 rounded-xl shadow-xs hover:bg-blue-500">
                  Mulai Sekarang
                </button>
              </div>
            </nav>
          </BrowserFrame>
        </section>

        {/* Variant 2: Corporate Enterprise */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Corporate Enterprise (B2B & Korporat)</h2>
            <span className="text-xs text-slate-500 font-mono">Topbar Pengumuman • Hotline • Sub-menu</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-enterprise">
            <header className="bg-white border-b border-slate-200">
              {/* Topbar */}
              <div className="px-6 py-1.5 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                <span>📍 Kantor Pusat: Sudirman Central Business District, Jakarta</span>
                <div className="flex items-center gap-4">
                  <span>📞 +62 (021) 555-8900</span>
                  <span>🇮🇩 ID / 🇬🇧 EN</span>
                </div>
              </div>
              {/* Main Nav */}
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    PT
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-none">NUSANTARA GRAHA INDONESIA</h3>
                    <p className="text-[10px] text-slate-400 font-medium tracking-wider">ENGINEERING & CONSTRUCTION</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  <span className="hover:text-blue-700 cursor-pointer">Tentang Kami</span>
                  <span className="hover:text-blue-700 cursor-pointer">Divisi Usaha</span>
                  <span className="hover:text-blue-700 cursor-pointer">Hubungan Investor</span>
                  <span className="hover:text-blue-700 cursor-pointer">Karir</span>
                  <span className="hover:text-blue-700 cursor-pointer">Kontak</span>
                </div>
                <button className="text-xs font-bold border border-slate-300 px-3.5 py-1.5 rounded-lg hover:bg-slate-50">
                  Portal Rekanan
                </button>
              </div>
            </header>
          </BrowserFrame>
        </section>

        {/* Variant 3: Floating Island */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">3. Centered Floating Island (Modern Neo)</h2>
            <span className="text-xs text-slate-500 font-mono">Pill Floating • Glassmorphism Blur</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-floating">
            <div className="p-6 bg-gradient-to-b from-slate-100 to-slate-200">
              <nav className="max-w-2xl mx-auto px-5 py-3 bg-white/85 backdrop-blur-md rounded-full border border-white/60 shadow-lg flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-900">LUMINA</span>
                <div className="flex items-center gap-5 text-xs font-medium text-slate-600">
                  <span className="text-slate-900 font-bold">Produk</span>
                  <span className="hover:text-slate-900">Showcase</span>
                  <span className="hover:text-slate-900">Edukasi</span>
                  <span className="hover:text-slate-900">FAQ</span>
                </div>
                <button className="text-xs font-bold bg-slate-900 text-white px-4 py-1.5 rounded-full hover:bg-slate-800">
                  Konsultasi
                </button>
              </nav>
            </div>
          </BrowserFrame>
        </section>

        {/* Variant 4: Dark Tech / Cyber */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">4. Dark Tech & Developer Platform</h2>
            <span className="text-xs text-slate-500 font-mono">Dark Slate 950 • Status Indicator</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-dark-tech">
            <nav className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-emerald-400">~/core-engine</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  v4.8 stable
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-5 text-xs font-mono text-slate-400">
                <span className="hover:text-emerald-400 cursor-pointer">docs</span>
                <span className="hover:text-emerald-400 cursor-pointer">api-ref</span>
                <span className="hover:text-emerald-400 cursor-pointer">benchmarks</span>
                <span className="hover:text-emerald-400 cursor-pointer">github</span>
              </div>
              <button className="text-xs font-mono bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg">
                deploy_now()
              </button>
            </nav>
          </BrowserFrame>
        </section>

        {/* Variant 5: E-commerce Store Header */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">5. E-Commerce Multi-Category</h2>
            <span className="text-xs text-slate-500 font-mono">Search Bar Tengah • Wishlist & Cart</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-ecommerce">
            <header className="bg-white border-b border-slate-200">
              <div className="p-4 flex items-center justify-between gap-4">
                <span className="text-xl font-black text-rose-600">TOKOMU</span>
                <div className="flex-1 max-w-md relative hidden sm:block">
                  <input
                    type="text"
                    placeholder="Cari produk, kategori, atau promo..."
                    className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    readOnly
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🔍</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                  <span className="cursor-pointer">❤️ Favorit (2)</span>
                  <span className="cursor-pointer bg-rose-50 text-rose-600 px-3 py-1.5 rounded-xl border border-rose-200">
                    🛒 Keranjang (3)
                  </span>
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-600 overflow-x-auto">
                <span className="font-bold text-rose-600">Semua Kategori</span>
                <span>Elektronik</span>
                <span>Fashion Pria</span>
                <span>Perlengkapan Rumah</span>
                <span>Otomotif</span>
                <span>Flash Sale ⚡</span>
              </div>
            </header>
          </BrowserFrame>
        </section>

        {/* Variant 6: Healthcare Clinic Header */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">6. Healthcare & Medical Clinic</h2>
            <span className="text-xs text-slate-500 font-mono">Emergency Hotline • Booking Dokter</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/navbar-clinic">
            <header className="bg-white border-b border-slate-200">
              <div className="px-6 py-2 bg-rose-600 text-white text-xs flex items-center justify-between font-medium">
                <span>🚨 IGD & Ambulans 24 Jam: (021) 777-911</span>
                <span>Buka Setiap Hari: 07:00 - 22:00 WIB</span>
              </div>
              <div className="p-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-teal-600">🩺</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">MEDIKA PRATAMA</h3>
                    <p className="text-[10px] text-teal-700 font-semibold">KLINIK UTAMA TERAKREDITASI PARIPURNA</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-5 text-xs font-semibold text-slate-700">
                  <span>Jadwal Dokter</span>
                  <span>Poliklinik Spesialis</span>
                  <span>Fasilitas Lab</span>
                  <span>Biaya Tindakan</span>
                </div>
                <button className="text-xs font-bold bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-500">
                  Buat Janji Temu
                </button>
              </div>
            </header>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
