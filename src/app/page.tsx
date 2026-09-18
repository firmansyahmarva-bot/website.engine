import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Clock,
  Code2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { WEBSITE_PACKAGES } from '@/content/packages';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { WEBSITE_TYPES } from '@/content/website-types';
import { formatIDR } from '@/content/pricing';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { FAQItem } from '@/types';

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'Berapa lama proses pembuatan website hingga online?',
    answer:
      'Waktu pengerjaan bergantung pada paket yang Anda pilih: Paket Starter rata-rata selesai dalam 3-5 hari kerja, Paket Business 7-10 hari kerja, dan sistem kustom enterprise 14-25 hari kerja setelah materi konten (teks & foto) kami terima lengkap.',
  },
  {
    question: 'Apakah website ini menjadi milik saya sepenuhnya?',
    answer:
      'Ya, 100% kepemilikan nama domain, file sumber website, dan hak akses hosting menjadi milik Anda. Kami tidak mengunci data atau mewajibkan biaya sewa langganan kode.',
  },
  {
    question: 'Apakah website sudah dioptimasi untuk tampil di Google (SEO)?',
    answer:
      'Semua website yang kami bangun menerapkan standar SEO on-page modern: arsitektur semantic HTML5, kecepatan muat tinggi yang lolos Core Web Vitals, tag Open Graph untuk preview media sosial, serta Schema.org JSON-LD structured data.',
  },
  {
    question: 'Bagaimana jika saya belum memiliki materi foto atau teks perusahaan?',
    answer:
      'Kami menyediakan struktur template copywriting bisnis yang dapat memandu Anda mengisi informasi esensial. Kami juga menyediakan kurasi foto stok resolusi tinggi berlisensi komersial untuk mempercantik visual awal.',
  },
  {
    question: 'Bagaimana jika ada kendala teknis setelah website selesai?',
    answer:
      'Setiap paket website kami sertai dengan garansi pemeliharaan teknis gratis (14 hingga 90 hari sesuai paket) untuk perbaikan error atau bug tanpa biaya tambahan.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Platform Rekayasa Website Modern & Terstandarisasi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Kami Membangun Website Profesional untuk Bisnis Anda
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Bukan sekadar template biasa. Kami merancang website berkinerja tinggi, berkecepatan
              muat kilat, teroptimasi SEO Google, dan direkayasa khusus untuk mengubah pengunjung
              menjadi prospek penjualan riil.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/configure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Bangun Website Anda</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/designs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
              >
                <span>Lihat Konsep Desain</span>
              </Link>
            </div>

            {/* Micro value props */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-600 border-t border-slate-100">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Milik Anda</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tanpa Biaya Langganan Kode</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Performa Loading Tinggi</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garansi Bug & Error</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Pilihan Investasi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Paket Pembuatan Website Terstandarisasi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Rincian cakupan kerja dan biaya transparan tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {WEBSITE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-7 border-2 flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'border-blue-600 shadow-lg relative ring-4 ring-blue-50'
                    : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  {pkg.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow">
                      Paling Direkomendasikan
                    </span>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name.id}</h3>
                    <p className="text-xs text-slate-500 mt-1">{pkg.tagline.id}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">
                      {formatIDR(pkg.basePrice)}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                      <span>Estimasi {pkg.turnaroundDays} hari kerja</span>
                      <span>&bull;</span>
                      <span>Hingga {pkg.maxPages} halaman</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                      Cakupan Pekerjaan:
                    </div>
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/configure?type=${pkg.tier === 'starter' ? 'landing-page' : 'company-profile'}`}
                    className={`w-full py-3 px-4 rounded-xl text-center text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>Pilih & Konfigurasi Paket</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/website-packages"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
            >
              <span>Pelajari perbandingan lengkap setiap paket</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10 DESIGN CONCEPTS SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Sistem Desain
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                10 Konsep Desain Orisinal Berkarakter
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Bukan tiruan template murahan. Setiap konsep dirancang dengan hierarki visual dan
                psikologi konversi sesuai sektor industrinya.
              </p>
            </div>
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Lihat Semua Katalog Desain</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_CONCEPTS.slice(0, 6).map((design) => (
              <div
                key={design.id}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header Mockup Bar */}
                  <div
                    className="p-5 text-white"
                    style={{ backgroundColor: design.primaryColor }}
                  >
                    <div className="flex items-center justify-between text-xs opacity-80 mb-3">
                      <span>{design.styleCategory}</span>
                      {design.badge && (
                        <span className="bg-white/20 px-2 py-0.5 rounded font-bold text-[10px]">
                          {design.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold">{design.name.id}</h3>
                    <p className="text-xs opacity-90 mt-1 line-clamp-1">{design.tagline.id}</p>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {design.description.id}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {design.targetAudience.slice(0, 3).map((aud, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
                  <Link
                    href={`/demos/${design.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <span>Uji Coba Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/configure?design=${design.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Gunakan Desain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES / WEBSITE TYPES */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Solusi Industri
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Kategori & Model Website Siap Bangun
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Setiap model bisnis membutuhkan arsitektur informasi yang spesifik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {WEBSITE_TYPES.map((type) => (
              <Link
                key={type.id}
                href={`/configure?type=${type.id}`}
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{type.name.id}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{type.tagline.id}</p>
                <div className="mt-3 text-[11px] font-semibold text-slate-400">
                  Mulai {formatIDR(type.basePrice)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / 4-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Alur Transparan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              4 Langkah Mudah Mewujudkan Website Anda
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Proses kerja terstruktur tanpa birokrasi berbelit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Konfigurasi Kebutuhan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pilih model website, konsep desain, jumlah halaman, dan modul fitur melalui
                kalkulator interaktif kami.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Konsultasi & Penawaran</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rincian konfigurasi terkirim langsung ke WhatsApp. Tim teknis mengonfirmasi jadwal,
                materi teks, dan penawaran resmi.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Proses Pembuatan & Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Website direkayasa sesuai standar teknis. Anda diberikan tautan staging pribadi untuk
                meninjau dan mengajukan revisi.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-black text-lg">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base">Peluncuran & Serah Terima</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Website resmi dihubungkan ke domain utama Anda, didaftarkan ke Google Search Console,
                dan dijamin garansi pemeliharaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR CTA BANNER */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 border border-blue-800/60 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Simulasi Instan
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Hitung Estimasi Biaya Pembuatan Website Anda Sekarang
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gunakan konfigurator interaktif kami untuk memilih modul sesuai budget bisnis Anda.
                Transparan, akurat, dan tanpa keharusan langsung membayar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/configure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                <span>Buka Konfigurator Interaktif</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQAccordion items={HOMEPAGE_FAQS} />

      {/* FINAL CONVERSION CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Siap Membangun Kehadiran Digital Bisnis Anda?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mulai dengan memilih konsep desain dan spesifikasi website. Tim teknis kami siap membantu
            merealisasikannya menjadi aset digital yang menghasilkan prospek.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/configure"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition-colors"
            >
              <span>Bangun Website Anda Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <span>Lihat Rincian Biaya</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
