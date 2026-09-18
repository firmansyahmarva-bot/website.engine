import React from 'react';
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
  MessageCircle,
} from 'lucide-react';
import { WEBSITE_PACKAGES } from '@/content/packages';
import { WEBSITE_TYPES } from '@/content/website-types';
import { INDUSTRIES } from '@/content/industries';
import { formatIDR } from '@/content/pricing';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import FAQAccordion from '@/components/ui/FAQAccordion';
import HeroSection from '@/components/home/HeroSection';
import TechMarquee from '@/components/home/TechMarquee';
import DesignShowcaseSection from '@/components/home/DesignShowcaseSection';
import PerformanceProofSection from '@/components/home/PerformanceProofSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import SocialProofSection from '@/components/home/SocialProofSection';
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
  const directWhatsAppUrl = generateDirectWhatsAppUrl('paket website & konsultasi langsung');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION WITH RICH VISUALS & FLOATING MOTION */}
      <HeroSection />

      {/* 2. ENTERPRISE TECH STACK MARQUEE */}
      <TechMarquee />

      {/* 3. DESIGN CONCEPTS SHOWCASE WITH REAL PHOTOGRAPHY & TABS */}
      <DesignShowcaseSection />

      {/* 4. REAL PERFORMANCE PROOF (GOOGLE PAGESPEED 100/100) */}
      <PerformanceProofSection />

      {/* 5. COMPARISON MATRIX (KAMI VS AGENCY BIASA VS FREELANCER) */}
      <ComparisonSection />

      {/* 6. INVESTMENT PACKAGES SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
              Pilihan Paket Investasi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Investasi Transparan untuk Pertumbuhan Bisnis Nyata
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Setiap paket mencakup domain, cloud hosting cepat, optimasi SEO on-page, dan garansi pemeliharaan teknis resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {WEBSITE_PACKAGES.map((pkg) => {
              const isPopular = pkg.isPopular;
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl bg-white border flex flex-col justify-between p-7 sm:p-8 card-hover shadow-sm ${
                    isPopular
                      ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow">
                      Paling Banyak Dipilih
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">{pkg.name.id}</h3>
                      <p className="text-xs text-slate-500 mt-1">{pkg.tagline.id}</p>
                    </div>

                    <div className="py-4 my-4 border-y border-slate-100">
                      <span className="text-xs text-slate-500 block">Biaya Investasi Mulai:</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {formatIDR(pkg.basePrice)}
                        </span>
                      </div>
                      <span className="text-xs text-emerald-700 font-medium mt-1 block">
                        Termasuk {pkg.maxPages} Halaman Utama
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                      {pkg.idealFor.id}
                    </p>

                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Fitur Utama & Jaminan:
                      </p>
                      {pkg.highlights.slice(0, 5).map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Estimasi Pengerjaan:</span>
                      </span>
                      <span className="font-semibold text-slate-700">{pkg.turnaroundDays} Hari Kerja</span>
                    </div>

                    <Link
                      href={`/configure?tier=${pkg.tier}`}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-colors ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <span>Konfigurasikan Paket Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/website-packages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>Bandingkan Detail Fitur Semua Paket</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE CONFIGURATOR CTA BANNER */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-100 backdrop-blur-sm border border-white/20">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white" />
              <span>Simulasi Anggaran Instan</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kustomisasikan Website Sesuai Kebutuhan & Anggaran Anda
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Tentukan tipe website, jumlah halaman, konsep desain, dan fitur add-on yang Anda perlukan. Sistem kami menghitung biaya secara transparan secara real-time.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/configure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base bg-white text-blue-700 hover:bg-blue-50 shadow-lg transition-colors"
              >
                <span>Buka Kalkulator Estimasi</span>
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </Link>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-800/60 hover:bg-blue-800 text-white border border-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Langsung via WA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRY SECTORS EXPLORER (PROGRAMMATIC SEO) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Solusi Industri Spesifik
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Arsitektur Website Disesuaikan untuk 40+ Sektor Usaha
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Website kontraktor membutuhkan alur tender B2B, sementara klinik membutuhkan alur jadwal temu. Kami memiliki rancangan spesifik untuk industri Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.slice(0, 12).map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-center group card-hover"
              >
                <span className="block text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {ind.name.id}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block group-hover:text-blue-600">
                  Lihat Rekomendasi &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-slate-500">
              Menyediakan solusi website untuk Konstruksi, Manufaktur, Konsultan, Hospitality, F&amp;B, Retail, Otomotif, hingga Organisasi Nirlaba.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF & QUANTIFIABLE CASE STUDIES */}
      <SocialProofSection />

      {/* 10. HOMEPAGE FAQS WITH SCHEMA.ORG JSON-LD */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Tanya Jawab
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Jawaban transparan seputar proses pengerjaan, kepemilikan aset, dan jaminan kualitas.
            </p>
          </div>

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 11. CLOSING HIGH-CONVERSION CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Siap Memiliki Website Profesional yang Menghasilkan Penjualan?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mulai dengan memilih konsep desain dan estimasikan anggaran Anda dalam 2 menit, atau konsultasikan langsung kebutuhan Anda dengan tim arsitek kami via WhatsApp.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/configure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-950/40 transition-all"
              >
                <span>Estimasi Biaya Website</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </Link>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Diskusi Langsung via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
