import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase Blueprint Seksi Halaman Website Modern',
  description:
    'Eksplorasi susunan seksi landing page lengkap: alur 4 langkah kerja, timeline rekam jejak proyek, dan komparasi fitur industri.',
  path: '/showcase/section',
  keywords: ['blueprint seksi website', 'layout timeline proyek', 'alur langkah kerja website', 'landing page sections'],
});

export default function SectionShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Blueprint Seksi Halaman (Section Layouts)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Seksi konten yang dirancang terstruktur memudahkan calon pelanggan memahami alur kerja dan keunggulan Anda.
          </p>
        </div>

        {/* Section 1: 4-Step Process Flow */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Alur 4 Langkah Kerja (Process Flow)</h2>
            <span className="text-xs text-slate-500 font-mono">Numbered Badges • Connecting Line</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/section-process">
            <div className="p-8 sm:p-14 bg-white space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Alur Pengerjaan Cepat</span>
                <h3 className="text-2xl font-bold text-slate-900">Website Siap Pakai dalam 4 Tahap Ringkas</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
                <div className="p-5 bg-slate-50 rounded-2xl space-y-2 relative border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</div>
                  <h4 className="font-bold text-slate-900 text-sm">Konsultasi</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Pilih paket dan sampaikan materi profil bisnis via WhatsApp.</p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl space-y-2 relative border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</div>
                  <h4 className="font-bold text-slate-900 text-sm">Desain & Coding</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Tim kami membangun website dengan Next.js dan Tailwind CSS.</p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl space-y-2 relative border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</div>
                  <h4 className="font-bold text-slate-900 text-sm">Review & Revisi</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Anda meninjau pratinjau live dan memberikan masukan penyempurnaan.</p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl space-y-2 relative border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">4</div>
                  <h4 className="font-bold text-slate-900 text-sm">Peluncuran (Go-Live)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Domain aktif, sitemap didaftarkan ke Google, dan siap closing.</p>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </section>

        {/* Section 2: Timeline Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Timeline Rekam Jejak Proyek (History Milestone)</h2>
            <span className="text-xs text-slate-500 font-mono">Vertical Rail • Milestone Dates</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/section-timeline">
            <div className="p-8 sm:p-14 bg-slate-900 text-white space-y-8">
              <div className="max-w-xl space-y-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">COMPANY ROADMAP</span>
                <h3 className="text-2xl font-bold">12 Tahun Membangun Standar Kualitas Tinggi</h3>
              </div>

              <div className="space-y-6 pl-4 border-l-2 border-slate-800">
                <div className="relative pl-6 space-y-1">
                  <span className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-slate-900" />
                  <span className="text-xs font-mono font-bold text-emerald-400">2026 - Era AI & GEO</span>
                  <h4 className="font-bold text-sm text-white">Adopsi Protokol llms.txt & Mesin Generatif</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Seluruh platform dioptimasi untuk kutipan resmi ChatGPT Search, Gemini, dan Perplexity.</p>
                </div>

                <div className="relative pl-6 space-y-1">
                  <span className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                  <span className="text-xs font-mono font-bold text-blue-400">2024 - Migrasi Next.js SSG</span>
                  <h4 className="font-bold text-sm text-white">Kecepatan 100% Core Web Vitals Hijau</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Meninggalkan CMS monolitik usang demi keamanan siber dan performa instan.</p>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
