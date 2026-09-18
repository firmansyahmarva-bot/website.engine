import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GLOSSARY } from '@/content/glossary';
import {
  getGlossaryEntryBySlug,
  getRelatedGlossaryEntries,
  getIndustryBySlug,
} from '@/lib/relationships';
import {
  constructMetadata,
  generateDefinedTermSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHowToSchema,
  SITE_NAME,
} from '@/lib/seo';
import {
  CrawlIndexDiagram,
  CoreWebVitalsBar,
  ConversionFunnelDiagram,
  SSGvsSSRDiagram,
} from '@/components/diagrams';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GLOSSARY.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryEntryBySlug(slug);

  if (!entry) {
    return {
      title: 'Halaman Tidak Ditemukan',
    };
  }

  return constructMetadata({
    title: entry.seoTitle,
    description: entry.seoDescription,
    path: `/panduan/${entry.slug}`,
    keywords: entry.seoKeywords,
    ogType: 'article',
  });
}

export default async function GlossaryDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getGlossaryEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const relatedTerms = getRelatedGlossaryEntries(entry, 6);
  const relatedIndustries = (entry.relatedIndustries || [])
    .map((indSlug) => getIndustryBySlug(indSlug))
    .filter((ind): ind is NonNullable<typeof ind> => Boolean(ind));

  const waUrl = generateDirectWhatsAppUrl(`panduan ${entry.term}`);

  // Schemas
  const definedTermSchema = generateDefinedTermSchema(
    entry.term,
    entry.shortDefinition,
    `/panduan/${entry.slug}`
  );

  const articleSchema = generateArticleSchema({
    title: entry.seoTitle,
    description: entry.seoDescription,
    path: `/panduan/${entry.slug}`,
    datePublished: entry.datePublished,
    dateModified: entry.dateModified,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Panduan & Glosarium', url: '/panduan' },
    { name: entry.term, url: `/panduan/${entry.slug}` },
  ]);

  const faqSchema = generateFAQSchema(entry.faqs);
  const howToSchema = entry.howToUse
    ? generateHowToSchema(`Cara Menerapkan ${entry.term}`, entry.howToUse)
    : null;

  return (
    <article className="min-h-screen bg-slate-50/40">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* Top Header & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb links */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/panduan" className="hover:text-slate-900 transition-colors">
              Panduan
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">{entry.term}</span>
          </nav>

          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold rounded-lg uppercase tracking-wider">
              {entry.category}
            </span>
            <span className="text-xs text-slate-400">
              Diperbarui: {entry.dateModified || '2026-03-12'}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500">Estimasi Baca: 4 menit</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {entry.term}
          </h1>

          {/* Aliases */}
          {entry.aliases.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-400">Dikenal juga sebagai:</span>
              {entry.aliases.map((alias) => (
                <span
                  key={alias}
                  className="px-2.5 py-0.5 bg-slate-100 rounded-md text-slate-700 font-medium"
                >
                  {alias}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Body (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            {/* Answer Box (Featured Definition) */}
            <div
              id="definisi-ringkas"
              className="p-6 sm:p-8 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 rounded-2xl border-2 border-blue-500/20 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Jawaban Singkat & Esensi Kunci
              </div>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-4">
                {entry.shortDefinition}
              </p>
              <div className="pt-4 border-t border-blue-100/80 flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Mengapa Penting untuk Bisnis:
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mt-0.5">
                    {entry.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            {/* In-depth Explanation */}
            <section id="penjelasan-mendalam" className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Penjelasan Mendalam & Konsep Kerja
              </h2>
              <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
                {entry.longExplanation.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Contextual Technical Architecture Diagram */}
            {(entry.slug.includes('crawl') ||
              entry.slug.includes('index') ||
              entry.slug.includes('search-engine') ||
              entry.slug.includes('bot') ||
              entry.slug.includes('sitemap') ||
              entry.slug.includes('robots')) && <CrawlIndexDiagram />}

            {(entry.slug.includes('core-web-vitals') ||
              entry.slug.includes('lcp') ||
              entry.slug.includes('inp') ||
              entry.slug.includes('cls') ||
              entry.slug.includes('pagespeed') ||
              entry.slug.includes('speed') ||
              entry.slug.includes('lighthouse')) && <CoreWebVitalsBar />}

            {(entry.slug.includes('conversion') ||
              entry.slug.includes('funnel') ||
              entry.slug.includes('lead') ||
              entry.slug.includes('cro') ||
              entry.slug.includes('cta') ||
              entry.slug.includes('bounce-rate')) && <ConversionFunnelDiagram />}

            {(entry.slug.includes('ssg') ||
              entry.slug.includes('ssr') ||
              entry.slug.includes('static') ||
              entry.slug.includes('jamstack') ||
              entry.slug.includes('headless') ||
              entry.slug.includes('hosting')) && <SSGvsSSRDiagram />}

            {/* How to Apply / Use */}
            {entry.howToUse && entry.howToUse.length > 0 && (
              <section id="langkah-penerapan" className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Langkah Praktis Penerapan untuk Website Bisnis
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {entry.howToUse.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-xs"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">
                          {step.step}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Comparison Table */}
            {entry.comparisonTable && (
              <section id="tabel-perbandingan" className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Tabel Perbandingan & Evaluasi Solusi
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="py-3.5 px-4 font-semibold text-slate-700">Faktor Evaluasi</th>
                        <th className="py-3.5 px-4 font-bold text-blue-700">
                          {entry.comparisonTable.header[0]}
                        </th>
                        <th className="py-3.5 px-4 font-semibold text-slate-600">
                          {entry.comparisonTable.header[1]}
                        </th>
                        {entry.comparisonTable.header[2] && (
                          <th className="py-3.5 px-4 font-semibold text-slate-600">
                            {entry.comparisonTable.header[2]}
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {entry.comparisonTable.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-slate-900">
                            {row.feature}
                          </td>
                          <td className="py-3 px-4 text-slate-700 bg-blue-50/30 font-medium">
                            {row.itemA}
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {row.itemB}
                          </td>
                          {row.itemC && (
                            <td className="py-3 px-4 text-slate-600">
                              {row.itemC}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Common Mistakes */}
            <section id="kesalahan-umum" className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Kesalahan Umum yang Sering Dilakukan Pemilik Website
              </h2>
              <div className="p-6 bg-rose-50/60 rounded-2xl border border-rose-200/80 space-y-3">
                {entry.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-rose-900 text-sm">
                    <span className="text-rose-600 font-bold">✕</span>
                    <p className="leading-relaxed">{mistake}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Accordion / Cards */}
            <section id="pertanyaan-faq" className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <div className="space-y-3">
                {entry.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-xs"
                  >
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Terms Grid */}
            {relatedTerms.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-slate-900">
                  Istilah Terkait Lainnya
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTerms.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/panduan/${rel.slug}`}
                      className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group"
                    >
                      <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {rel.term}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rel.shortDefinition}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related Industries Grid */}
            {relatedIndustries.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-slate-900">
                  Penerapan pada Sektor Industri Terkait
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {relatedIndustries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all"
                    >
                      <span className="text-xs font-semibold text-slate-800 hover:text-blue-600">
                        {ind.name.id}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Table of Contents Box */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Daftar Isi Panduan
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#definisi-ringkas"
                    className="text-slate-600 hover:text-blue-600 transition-colors block"
                  >
                    • Jawaban Singkat & Esensi
                  </a>
                </li>
                <li>
                  <a
                    href="#penjelasan-mendalam"
                    className="text-slate-600 hover:text-blue-600 transition-colors block"
                  >
                    • Penjelasan Mendalam
                  </a>
                </li>
                {entry.howToUse && entry.howToUse.length > 0 && (
                  <li>
                    <a
                      href="#langkah-penerapan"
                      className="text-slate-600 hover:text-blue-600 transition-colors block"
                    >
                      • Langkah Penerapan
                    </a>
                  </li>
                )}
                {entry.comparisonTable && (
                  <li>
                    <a
                      href="#tabel-perbandingan"
                      className="text-slate-600 hover:text-blue-600 transition-colors block"
                    >
                      • Tabel Perbandingan
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="#kesalahan-umum"
                    className="text-slate-600 hover:text-blue-600 transition-colors block"
                  >
                    • Kesalahan Umum
                  </a>
                </li>
                <li>
                  <a
                    href="#pertanyaan-faq"
                    className="text-slate-600 hover:text-blue-600 transition-colors block"
                  >
                    • FAQ Pertanyaan Populer
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl text-white shadow-lg space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/30 rounded-full text-[11px] font-semibold">
                Konsultasi WhatsApp Langsung
              </div>
              <h3 className="text-lg font-bold leading-snug">
                Butuh Bantuan Menerapkan {entry.term}?
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Diskusikan kebutuhan arsitektur website bisnis Anda bersama konsultan teknis kami.
                Respons cepat dalam hitungan menit.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-emerald-800 font-bold text-xs rounded-xl shadow-sm hover:bg-emerald-50 transition-colors mt-2"
              >
                <span>💬</span> Hubungi via WhatsApp
              </a>
            </div>

            {/* Website Packages Banner */}
            <div className="p-5 bg-slate-900 rounded-2xl text-white space-y-3">
              <h4 className="text-sm font-bold">Paket Website Siap Pakai</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bangun website berstandar Next.js, SEO lengkap, dan skor PageSpeed 95+ mulai dari Rp 1.500.000.
              </p>
              <div className="pt-1 flex flex-col gap-2">
                <Link
                  href="/website-packages"
                  className="w-full text-center py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  Lihat Paket & Harga
                </Link>
                <Link
                  href="/configure"
                  className="w-full text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-lg transition-colors border border-slate-700"
                >
                  Simulasi Biaya Online
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
