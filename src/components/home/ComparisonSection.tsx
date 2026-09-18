import React from 'react';
import Link from 'next/link';
import { Check, X, AlertTriangle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Hak Milik Kode & Aset Domain',
    us: '100% Hak Milik Anda. Akses hosting, kode sumber, dan domain diserahkan penuh tanpa biaya sewa rahasia.',
    usStatus: true,
    agency: 'Sering dikunci di server internal mereka. Wajib bayar sewa bulanan/tahunan agar website tidak mati.',
    agencyStatus: false,
    freelancer: 'Tidak jelas. Jika freelancer hilang kontak, akses website Anda berisiko hilang selamanya.',
    freelancerStatus: false,
  },
  {
    feature: 'Kecepatan Muat (Core Web Vitals)',
    us: '< 0.8 Detik (Skor 95-100). Dibangun dengan Next.js modern, lulus standar kecepatan tertinggi Google.',
    usStatus: true,
    agency: 'Rata-rata 3-6 Detik. Sering memakai template WordPress berat yang dipenuhi puluhan plugin.',
    agencyStatus: false,
    freelancer: 'Lambat (4-10 Detik). Tanpa optimasi kompresi gambar dan arsitektur caching modern.',
    freelancerStatus: false,
  },
  {
    feature: 'Optimasi SEO Google On-Page',
    us: 'Terstruktur penuh: Semantic HTML5, Schema.org JSON-LD otomatis, sitemap XML, dan lolos uji Google Rich Results.',
    usStatus: true,
    agency: 'Standar umum, biasanya hanya menginstal plugin SEO tanpa kustomisasi schema data industri.',
    agencyStatus: 'neutral',
    freelancer: 'Nihil. Seringkali hanya tampilan visual tanpa memperhatikan meta tags atau arsitektur indexing.',
    freelancerStatus: false,
  },
  {
    feature: 'Jaminan Garansi & Bug Fix',
    us: 'Garansi resmi 14 hingga 90 hari. Perbaikan kendala teknis dan error sistem diselesaikan tanpa biaya tambahan.',
    usStatus: true,
    agency: 'Sering dikenakan biaya retainers bulanan atau tagihan tiket support tambahan.',
    agencyStatus: false,
    freelancer: 'Tanpa jaminan tertulis. Sulit dihubungi saat website mengalami error di kemudian hari.',
    freelancerStatus: false,
  },
  {
    feature: 'Transparansi Biaya & Scope',
    us: 'Rumus harga terbuka matematis. Rincian fitur, jumlah halaman, dan add-on transparan sejak awal.',
    usStatus: true,
    agency: 'Seringkali ada biaya siluman (biaya lisensi plugin berbayar, biaya setup server tak terduga).',
    agencyStatus: false,
    freelancer: 'Harga awal murah, tetapi meminta tambahan biaya untuk setiap detail kecil yang belum disepakati.',
    freelancerStatus: false,
  },
  {
    feature: 'Alur Konversi Prospek ke Sales',
    us: 'Terintegrasi otomatis ke WhatsApp Leads dengan pesan kustom terstruktur siap closing transaksi.',
    usStatus: true,
    agency: 'Mengandalkan formulir kontak email tradisional yang jarang diperiksa tim penjualan Anda.',
    agencyStatus: 'neutral',
    freelancer: 'Hanya tombol nomor telepon acak tanpa format pesan terarah.',
    freelancerStatus: false,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            Transparansi Standar Kualitas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Mengapa Memilih Kami Dibanding Agency Biasa atau Freelancer Abal-Abal?
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Banyak pebisnis kecewa karena website mereka lambat, sepi pembeli, atau terkunci oleh oknum pengembang. Kami menerapkan standar transparansi penuh untuk melindungi investasi bisnis Anda.
          </p>
        </div>

        {/* Comparison Table Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 text-sm font-bold text-slate-700 w-1/4">Faktor Kritis</th>
                <th className="p-5 text-sm font-extrabold text-blue-900 bg-blue-50/80 border-x-2 border-blue-600 w-2/5 relative">
                  <div className="flex items-center justify-between">
                    <span>Platform Kami (Engine Terstandarisasi)</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                      Solusi Terbaik
                    </span>
                  </div>
                </th>
                <th className="p-5 text-sm font-semibold text-slate-600 w-1/5">Agency Umum</th>
                <th className="p-5 text-sm font-semibold text-slate-500 w-1/5">Freelancer Tanpa Standar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/40">
                    {row.feature}
                  </td>
                  <td className="p-5 bg-blue-50/30 border-x-2 border-blue-600 text-slate-900 font-medium">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{row.us}</span>
                    </div>
                  </td>
                  <td className="p-5 text-slate-600">
                    <div className="flex items-start gap-2.5">
                      {row.agencyStatus === false ? (
                        <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertTriangle className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                      <span className="text-xs sm:text-sm leading-relaxed">{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-5 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm leading-relaxed">{row.freelancer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {COMPARISON_ROWS.map((row, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">{row.feature}</h3>
              
              {/* Our Platform */}
              <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Platform Kami:</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.us}</span>
                </div>
              </div>

              {/* Other Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-semibold text-slate-600 block mb-1">Agency Biasa:</span>
                  <p className="text-slate-500 leading-relaxed">{row.agency}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-semibold text-slate-600 block mb-1">Freelancer Bebas:</span>
                  <p className="text-slate-500 leading-relaxed">{row.freelancer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Hook */}
        <div className="mt-12 text-center">
          <Link
            href="/configure"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Mulai Hitung Estimasi Website Bisnis Anda</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
