import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 10 Pola Desain Kartu UI Website Modern',
  description:
    'Eksplorasi 10 pola kartu antarmuka: kartu produk e-commerce, ulasan bintang testimoni, profil tim, metrik statistik, dan paket fitur.',
  path: '/showcase/card',
  keywords: ['desain kartu website', 'ui card components', 'kartu testimoni web', 'kartu produk modern'],
});

export default function CardShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            10 Pola Desain Kartu & Wadah Informasi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Kartu adalah komponen paling serbaguna dalam tata letak antarmuka modern.
          </p>
        </div>

        {/* Card Pattern 1: Social Proof Testimonial */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Testimonial & Review Card</h2>
            <span className="text-xs text-slate-500 font-mono">Bintang Emas • Foto Profil • Rating 5.0</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/card-testimonial">
            <div className="p-8 bg-slate-100/60 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex text-amber-400 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;Website pabrik kami yang baru selesai dalam 7 hari kerja. Skor PageSpeed langsung tembus 99 di HP, dan pesan penawaran WhatsApp dari buyer kawasan industri Cikarang meningkat dua kali lipat.&rdquo;
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    HS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Hendra Setiawan</h4>
                    <p className="text-[10px] text-slate-500">Direktur Operasional, PT Sinar Logam Presisi</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl space-y-4 border border-slate-800">
                <div className="flex text-amber-400 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;Sebelumnya kami pakai WordPress dan sering down saat iklan Meta jalan. Setelah migrasi ke Next.js statis di platform ini, server sangat stabil dan biaya hosting kami terpangkas drastis.&rdquo;
                </p>
                <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                    RA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Rina Anggraini</h4>
                    <p className="text-[10px] text-slate-400">Founder & CEO, Medika Clinic Bali</p>
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </section>

        {/* Card Pattern 2: Metric Stat Card */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Metric & Key Stat Card</h2>
            <span className="text-xs text-slate-500 font-mono">Angka Besar • Indikator Pertumbuhan</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/card-stats">
            <div className="p-8 bg-white grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-2">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">Kecepatan Loading</span>
                <p className="text-3xl font-extrabold text-slate-900">&lt; 0.8s</p>
                <p className="text-xs text-slate-500">Lolos Core Web Vitals LCP 100%</p>
              </div>

              <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">Rasio Konversi Rata-rata</span>
                <p className="text-3xl font-extrabold text-slate-900">5.8%</p>
                <p className="text-xs text-slate-500">Mengarah langsung ke WhatsApp sales</p>
              </div>

              <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-2">
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wide">Indeksasi Mesin AI</span>
                <p className="text-3xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs text-slate-500">Dilengkapi llms.txt & DefinedTerm Schema</p>
              </div>
            </div>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
