import { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/content/industries';
import { IndustryDirectory } from '@/components/industries/IndustryDirectory';
import { constructMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { Briefcase, Zap, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = constructMetadata({
  title: 'Solusi Pembuatan Website Berdasarkan 43 Sektor Industri Bisnis',
  description:
    'Temukan modul fitur, arsitektur data, dan strategi konversi website yang disesuaikan khusus untuk 43 sektor industri: konstruksi, manufaktur, hotel, klinik, hukum, dsb.',
  path: '/industries',
  keywords: [
    'solusi website industri',
    'website konstruksi b2b',
    'website manufaktur pabrik',
    'website hotel resort bali',
    'website klinik kesehatan',
    'jasa web per industri',
  ],
});

export default function IndustriesPage() {
  const whatsappUrl = generateDirectWhatsAppUrl('Konsultasi Solusi Website Sektor Industri');

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Direktori Solusi Website Sektor Industri ${SITE_NAME}`,
    description:
      'Kumpulan arsitektur website bisnis, modul fitur, dan strategi konversi untuk 43 sektor industri.',
    url: `${SITE_URL}/industries`,
    numberOfItems: INDUSTRIES.length,
    itemListElement: INDUSTRIES.map((ind, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: ind.name.id,
      url: `${SITE_URL}/industries/${ind.slug}`,
      description: ind.description.id,
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Spesialisasi 43 Sektor Industri</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Arsitektur Website Disesuaikan Khusus untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Karakter Buyer Industri Anda
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Setiap industri memiliki psikologi pembeli dan kebutuhan kepatuhan yang berbeda. 
            Pilih sektor bisnis Anda untuk melihat modul teknis, studi kasus, dan estimasi waktu pengerjaannya.
          </p>

          {/* Quick Value Metrics */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>43 Sektor Terpetakan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Modul Fitur Siap Pasang</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Bebas Biaya Bulanan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <IndustryDirectory industries={INDUSTRIES} />

        {/* Bottom CTA Banner */}
        <section className="mt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              Kustomisasi Bebas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Sektor Industri Anda Memiliki Kebutuhan Khusus?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tim engineer kami siap membedah alur transaksi, kebutuhan integrasi database internal, 
              dan merancang arsitektur khusus untuk platform bisnis Anda.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Konsultasi Teknis Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/configure"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all text-center"
              >
                Simulasi Biaya Mandiri
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}