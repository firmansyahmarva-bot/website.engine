import { Metadata } from 'next';
import { COST_GUIDES } from '@/content/costs';
import { CostDirectory } from '@/components/costs/CostDirectory';
import { constructMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import Link from 'next/link';
import { Wallet, Calculator, ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = constructMetadata({
  title: 'Panduan Biaya Pembuatan Website 2026: Rincian Harga & Estimasi Anggaran',
  description:
    'Kumpulan lengkap 12 panduan estimasi biaya pembuatan website profesional di Indonesia: company profile, e-commerce, landing page, maintenance, rumah sakit, sekolah, properti, dan industri B2B.',
  path: '/biaya',
  keywords: [
    'biaya pembuatan website',
    'harga bikin website profesional',
    'estimasi anggaran web 2026',
    'biaya website company profile',
    'harga website toko online ecommerce',
    'biaya maintenance web tahunan',
  ],
});

export default function BiayaIndexPage() {
  const whatsappUrl = generateDirectWhatsAppUrl('Konsultasi Estimasi Biaya Pembuatan Website');

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Panduan Rincian Biaya Pembuatan Website Bisnis ${SITE_NAME}`,
    description:
      'Ensiklopedia estimasi harga dan panduan anggaran pembuatan website profesional berbagai industri di Indonesia.',
    url: `${SITE_URL}/biaya`,
    numberOfItems: COST_GUIDES.length,
    itemListElement: COST_GUIDES.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}/biaya/${item.slug}`,
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Wallet className="w-3.5 h-3.5" />
            <span>Pusat Transparansi Biaya & Panduan Anggaran 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Berapa Sebenarnya Biaya Pembuatan Website?{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Rincian Riil & Tanpa Biaya Tersembunyi
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dapatkan rincian anggaran nyata untuk domain, server cloud, desain UI/UX, koding
            Next.js, hingga pemeliharaan tahunan. Dilengkapi peringatan biaya tersembunyi dan
            analisis Return on Investment (ROI) untuk setiap jenis industri.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">{COST_GUIDES.length}</span> Kategori Industri
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-bold">100%</span> Transparan & Teruji
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-purple-600 font-bold">Bebas</span> Jebakan Biaya Tersembunyi
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CostDirectory guides={COST_GUIDES} />

        {/* Interactive Calculator Callout Banner */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>Simulasi Kustom Kebutuhan Anda</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ingin Simulasi Biaya Instan Berdasarkan Pilihan Fitur Anda Sendiri?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gunakan kalkulator konfigurator mandiri kami untuk memilih jenis website, konsep
              desain, jumlah halaman, dan modul fitur khusus. Dapatkan estimasi total biaya dalam 1
              menit tanpa perlu mendaftar.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-emerald-900/30"
              >
                <Calculator className="w-4 h-4" />
                <span>Buka Kalkulator Biaya Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition-colors border border-white/20"
              >
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
