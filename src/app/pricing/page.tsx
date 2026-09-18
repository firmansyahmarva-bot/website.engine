import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, SlidersHorizontal, Calculator } from 'lucide-react';
import { WEBSITE_TYPES } from '@/content/website-types';
import { FEATURES_CATALOG } from '@/content/features';
import { formatIDR, PRICING_CONFIG } from '@/content/pricing';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { constructMetadata } from '@/lib/seo';
import { FAQItem } from '@/types';

export const metadata: Metadata = constructMetadata({
  title: 'Rincian Biaya Pembuatan Website Transparan',
  description:
    'Struktur formula harga pembuatan website transparan: harga dasar per tipe, biaya per halaman, modul tambahan, dan domain/hosting.',
  path: '/pricing',
  keywords: ['biaya buat website', 'harga web company profile', 'rincian harga website', 'jasa web murah berkualitas'],
});

const PRICING_FAQS: FAQItem[] = [
  {
    question: 'Mengapa biaya pembuatan website di sini sangat transparan?',
    answer:
      'Kami menerapkan modular software architecture. Kami tidak mengenakan mark-up sembarangan; Anda hanya membayar komponen, halaman, dan modul fitur yang memang dibutuhkan bisnis Anda.',
  },
  {
    question: 'Apakah ada biaya tahunan tersembunyi yang harus saya bayarkan ke pihak Anda?',
    answer:
      'Sama sekali tidak ada biaya sewa software atau royalti bulanan. Website adalah aset digital milik Anda seumur hidup. Pengeluaran di tahun kedua hanyalah perpanjangan nama domain dan sewa server hosting Anda.',
  },
  {
    question: 'Bagaimana metode pembayaran dan termin kerja?',
    answer:
      'Standar pembayaran kami adalah termin: 50% Uang Muka (DP) di awal untuk mengunci slot pengerjaan dan memulai fase rancangan, serta 50% pelunasan setelah website diuji di server staging dan disetujui untuk peluncuran resmi.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ name: 'Kalkulator & Struktur Biaya', url: '/pricing' }]} />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Formula Transparan Tanpa Mark-up Tersembunyi
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Struktur & Formula Investasi Website
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Biaya kami dihitung secara matematis berdasarkan kompleksitas tipe website, jumlah
          halaman, dan integrasi modul fungsional.
        </p>
      </section>

      {/* Formula Explanation Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-400 tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Formula Perhitungan Harga</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
            Biaya Dasar Tipe + (Halaman Tambahan &times; Rp 120.000) + Biaya Modul + Infrastruktur = Total Investasi
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-3">
            Gunakan konfigurator interaktif untuk mendapatkan angka pasti dalam hitungan detik.
          </p>
          <div className="mt-4">
            <Link
              href="/configure"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Buka Konfigurator & Simulasi Sekarang</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Table 1: Base Price by Website Type */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Harga Dasar Berdasarkan Tipe Website</h2>
          <p className="text-xs text-slate-500 mb-6">
            Mencakup arsitektur dasar, responsive mobile layout, optimasi Core Web Vitals, dan kuota halaman awal.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[11px]">
                  <th className="py-2.5 px-3">Tipe Website</th>
                  <th className="py-2.5 px-3">Halaman Termasuk</th>
                  <th className="py-2.5 px-3 text-right">Harga Dasar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {WEBSITE_TYPES.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-semibold text-slate-900">{t.name.id}</td>
                    <td className="py-3 px-3 text-slate-500">{t.recommendedPages} Halaman</td>
                    <td className="py-3 px-3 text-right font-bold text-slate-900">
                      {formatIDR(t.basePrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Table 2: Features Catalog Pricing */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Katalog Biaya Modul & Fitur Tambahan</h2>
          <p className="text-xs text-slate-500 mb-6">
            Fitur standar seperti WhatsApp dan formulir kontak sudah gratis di semua paket. Anda hanya membayar modul fungsional tambahan jika memang memerlukannya.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[11px]">
                  <th className="py-2.5 px-3">Nama Modul</th>
                  <th className="py-2.5 px-3">Kategori</th>
                  <th className="py-2.5 px-3 text-right">Biaya Tambahan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {FEATURES_CATALOG.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-900">{f.name.id}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{f.description.id}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-500 capitalize">{f.category}</td>
                    <td className="py-3 px-3 text-right font-bold text-slate-900 whitespace-nowrap">
                      {f.price === 0 ? (
                        <span className="text-emerald-600">Termasuk (Rp 0)</span>
                      ) : (
                        `+ ${formatIDR(f.price)}`
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion items={PRICING_FAQS} />
    </div>
  );
}
