import { Metadata } from 'next';
import { COMPARISONS } from '@/content/comparisons';
import { ComparisonDirectory } from '@/components/comparisons/ComparisonDirectory';
import { constructMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import Link from 'next/link';
import { Scale, Zap, ShieldCheck, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = constructMetadata({
  title: 'Pusat Perbandingan Teknologi & Solusi Website Bisnis 2026',
  description:
    'Bandingkan 18 teknologi website, CMS, hosting, framework, dan strategi digital: Next.js vs WordPress, Shopify vs WooCommerce, Cloud vs Shared Hosting, dan banyak lagi.',
  path: '/perbandingan',
  keywords: [
    'perbandingan teknologi website',
    'nextjs vs wordpress',
    'shopify vs woocommerce',
    'cloud hosting vs shared hosting',
    'framework web terbaik indonesia',
    'komparasi cms web bisnis',
  ],
});

export default function PerbandinganPage() {
  const whatsappUrl = generateDirectWhatsAppUrl('Konsultasi Pilihan Teknologi Website');

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Pusat Perbandingan Teknologi & Website Bisnis ${SITE_NAME}`,
    description:
      'Kumpulan perbandingan head-to-head teknologi web, framework frontend, CMS headless, dan strategi hosting.',
    url: `${SITE_URL}/perbandingan`,
    numberOfItems: COMPARISONS.length,
    itemListElement: COMPARISONS.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}/perbandingan/${item.slug}`,
      description: item.summary,
    })),
  };

  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Schema.org ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200/80 pt-16 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Pusat Evaluasi & Komparasi Teknologi Web</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Perbandingan Teknologi & Solusi Web{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Secara Obyektif & Transparan
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hindari salah pilih teknologi yang membuang jutaan rupiah. Pelajari kelebihan,
            kekurangan, benchmark performa Core Web Vitals, dan estimasi biaya riil sebelum
            memutuskan fondasi website bisnis Anda.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-bold">{COMPARISONS.length}</span> Komparasi Lengkap
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">100%</span> Analisis Obyektif
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">Teruji</span> Standar Industri 2026
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area with Directory */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ComparisonDirectory comparisons={COMPARISONS} />

        {/* Bottom Educational Banner */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Masih Bingung Memilih Teknologi?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Konsultasikan Kebutuhan Arsitektur Website Bisnis Anda dengan Engineer Kami
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Setiap bisnis memiliki skala, target audiens, dan anggaran yang berbeda. Dapatkan
              rekomendasi arsitektur teknologi paling hemat biaya dengan ROI tertinggi—gratis tanpa
              komitmen.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-emerald-900/30"
              >
                <span>Konsultasi WhatsApp Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/audit-gratis"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition-colors border border-white/20 backdrop-blur-sm"
              >
                <span>Audit Website Lama Anda</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
