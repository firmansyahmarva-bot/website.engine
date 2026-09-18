import { Metadata } from 'next';
import { GLOSSARY } from '@/content/glossary';
import { GlossaryDirectory } from '@/components/GlossaryDirectory';
import { constructMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: 'Pusat Panduan & Glosarium Website, SEO, dan GEO Modern',
  description:
    'Kumpulan lengkap 90+ istilah teknis website, optimasi SEO on-page/off-page, Generative Engine Optimization (GEO), Core Web Vitals, dan arsitektur web modern untuk pemilik bisnis.',
  path: '/panduan',
  keywords: [
    'panduan website bisnis',
    'glosarium seo indonesia',
    'istilah seo dan geo',
    'kamus web development',
    'core web vitals indonesia',
  ],
});

export default function PanduanPage() {
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: `Pusat Panduan & Glosarium Digital ${SITE_NAME}`,
    description:
      'Glosarium komprehensif istilah teknis SEO, GEO, arsitektur web modern, dan analitik bisnis digital.',
    url: `${SITE_URL}/panduan`,
    hasDefinedTerm: GLOSSARY.map((g) => ({
      '@type': 'DefinedTerm',
      name: g.term,
      description: g.shortDefinition,
      url: `${SITE_URL}/panduan/${g.slug}`,
    })),
  };

  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Schema.org DefinedTermSet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200/80 pt-16 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Pusat Edukasi & Glosarium Web Bisnis
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kamus & Panduan Komprehensif{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SEO, GEO, & Web Modern
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pahami seluruh terminologi teknikal website, strategi menembus halaman 1 Google,
            optimasi kutipan kecerdasan buatan (GEO/AEO), dan rahasia konversi penjualan—disajikan
            lugas dalam Bahasa Indonesia.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-bold">{GLOSSARY.length}+</span> Istilah Teknis
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">9</span> Kategori Spesifik
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">100%</span> Standar Google & AI
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Directory */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GlossaryDirectory entries={GLOSSARY} />
      </main>

      {/* Bottom Conversion CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold rounded-lg inline-block">
              Siap Bersaing di Halaman 1 Google?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Bangun Website Bisnis Berstandar SEO & Kecepatan Tinggi Bersama Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Seluruh fondasi teknikal yang dibahas di panduan ini—mulai dari Core Web Vitals hijau,
              schema JSON-LD, arsitektur Next.js SSG, hingga integrasi WhatsApp—sudah tertanam bawaan
              pada paket website kami.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/website-packages"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-blue-500/25"
              >
                Lihat Pilihan Paket Website
              </Link>
              <Link
                href="/configure"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition-all border border-white/10"
              >
                Simulasi Hitung Biaya
              </Link>
            </div>
          </div>

          {/* Decorative background visual */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
