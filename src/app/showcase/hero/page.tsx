import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 12 Desain Hero Banner Website Berkonversi Tinggi',
  description:
    'Eksplorasi 12 layout hero banner modern: split-screen, centered bold, stat-bar trust, app mockup showcase, dan gradient mesh.',
  path: '/showcase/hero',
  keywords: ['contoh hero banner website', 'desain hero section web', 'hero banner konversi tinggi', 'above the fold web design'],
});

export default function HeroShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            12 Layout Hero Banner (Above-the-Fold)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Hero banner adalah 5 detik pertama penentu apakah calon pembeli bertahan atau meninggalkan website Anda.
          </p>
        </div>

        {/* Hero 1: Split-Screen with Product Card */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Split-Screen with Interactive Card (SaaS / Jasa)</h2>
            <span className="text-xs text-slate-500 font-mono">50/50 Layout • Floating Card Mockup</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/hero-split">
            <div className="p-8 sm:p-14 bg-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                  ⚡ Kecepatan Pemuatan 0.8 Detik
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Tingkatkan Omzet Bisnis dengan Website Berstandar Global
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami membangun website berkecepatan instan, kebal error, dan teroptimasi penuh untuk
                  mendominasi halaman 1 Google dan memicu chat WhatsApp pembeli.
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-500">
                    Konsultasi Gratis
                  </button>
                  <button className="px-5 py-2.5 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50">
                    Lihat Portofolio
                  </button>
                </div>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl space-y-4 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">Live Analytics Monitor</span>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-mono">
                    Online 99.98%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <p className="text-[10px] text-slate-400">Total Prospek Masuk</p>
                    <p className="text-xl font-bold text-emerald-400 mt-1">+1.482</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <p className="text-[10px] text-slate-400">Skor Google PageSpeed</p>
                    <p className="text-xl font-bold text-blue-400 mt-1">99/100</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Semua infrastruktur teknis diatur otomatis: Next.js SSG, SSL otomatis, dan integrasi WhatsApp sales.
                </p>
              </div>
            </div>
          </BrowserFrame>
        </section>

        {/* Hero 2: Centered Bold Statement */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Centered Statement with Proof Bar (B2B Authority)</h2>
            <span className="text-xs text-slate-500 font-mono">Pusat Fokus • Baris Logo Mitra</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/hero-centered">
            <div className="p-8 sm:p-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center space-y-6">
              <div className="max-w-3xl mx-auto space-y-4">
                <span className="px-3.5 py-1 bg-white/10 text-slate-300 text-xs font-bold rounded-full inline-block border border-white/10">
                  Pilihan Utama 500+ Kontraktor & Pabrik di Indonesia
                </span>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Arsitektur Website Kelas Korporasi,{' '}
                  <span className="text-emerald-400">Siap Menangkan Tender</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Bangun kredibilitas mutlak di mata calon rekanan dan dewan direksi klien dengan tampilan
                  website yang kokoh, cepat, dan terpercaya.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:bg-emerald-400">
                    Minta Proposal Penawaran
                  </button>
                </div>
              </div>

              {/* Logo proof bar */}
              <div className="pt-6 border-t border-slate-800/80 max-w-2xl mx-auto">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-3">
                  DIPERCAYA OLEH TIM REKAYASA & PENGADAAN DI KAWASAN INDUSTRI
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-bold font-mono">
                  <span>[MM2100 CIKARANG]</span>
                  <span>[KIIC KARAWANG]</span>
                  <span>[KEK JIIPE GRESIK]</span>
                  <span>[KENDAL INDUSTRIAL]</span>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
