import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  COMPARISONS,
  getComparisonBySlug,
  getRelatedComparisons,
} from '@/content/comparisons';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  SITE_NAME,
} from '@/lib/seo';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import {
  Scale,
  CheckCircle2,
  XCircle,
  Trophy,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Check,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export const dynamic = 'force-static';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getComparisonBySlug(slug);

  if (!item) {
    return {
      title: 'Halaman Perbandingan Tidak Ditemukan',
    };
  }

  return constructMetadata({
    title: item.seoTitle,
    description: item.seoDescription,
    path: `/perbandingan/${item.slug}`,
    keywords: item.seoKeywords,
    ogType: 'article',
  });
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getComparisonBySlug(slug);

  if (!item) {
    notFound();
  }

  const related = getRelatedComparisons(item.slug, 3);
  const whatsappUrl = generateDirectWhatsAppUrl(`Konsultasi Perbandingan ${item.itemA.name} vs ${item.itemB.name}`);

  // Schema Generators
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Pusat Perbandingan', url: '/perbandingan' },
    { name: `${item.itemA.name} vs ${item.itemB.name}`, url: `/perbandingan/${item.slug}` },
  ]);

  const faqSchema = generateFAQSchema(item.faqs);

  const articleSchema = generateArticleSchema({
    title: item.seoTitle,
    description: item.seoDescription,
    path: `/perbandingan/${item.slug}`,
    datePublished: '2026-01-15',
    dateModified: '2026-03-12',
  });

  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/perbandingan" className="hover:text-blue-600 transition-colors">
            Pusat Perbandingan
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate">
            {item.itemA.name} vs {item.itemB.name}
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200/80 pt-12 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Kategori: {item.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {item.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {item.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Diuji & Diperbarui untuk Standar 2026
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{item.comparisonMatrix.length} Indikator Pengujian</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{item.faqs.length} Jawaban Pertanyaan Populer</span>
          </div>
        </div>
      </header>

      {/* Head-to-Head Hero Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Item A */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-600/30 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Opsi A
                </span>
                {item.itemA.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {item.itemA.badge}
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">{item.itemA.name}</h2>
                <p className="text-xs text-blue-600 font-medium mt-1">{item.itemA.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.itemA.overview}
              </p>

              {/* Pros & Cons */}
              <div className="space-y-3 pt-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Kelebihan Utama:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.itemA.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>Kekurangan / Batasan:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.itemA.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
              <strong className="text-slate-900">Paling Pas Untuk: </strong>
              <span className="text-slate-600">{item.itemA.bestFor}</span>
            </div>
          </div>

          {/* Card Item B */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-600/30 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  Opsi B
                </span>
                {item.itemB.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {item.itemB.badge}
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">{item.itemB.name}</h2>
                <p className="text-xs text-indigo-600 font-medium mt-1">{item.itemB.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.itemB.overview}
              </p>

              {/* Pros & Cons */}
              <div className="space-y-3 pt-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Kelebihan Utama:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.itemB.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>Kekurangan / Batasan:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.itemB.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
              <strong className="text-slate-900">Paling Pas Untuk: </strong>
              <span className="text-slate-600">{item.itemB.bestFor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Matriks Perbandingan Head-to-Head
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Evaluasi parameter teknis dan fungsionalitas {item.itemA.name} vs {item.itemB.name}{' '}
            beserta pemenang di setiap aspek.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-semibold">
                  <th className="py-3.5 px-4 sm:px-6 w-1/4">Parameter Pengujian</th>
                  <th className="py-3.5 px-4 sm:px-6 w-1/4 text-blue-300">{item.itemA.name}</th>
                  <th className="py-3.5 px-4 sm:px-6 w-1/4 text-indigo-300">{item.itemB.name}</th>
                  <th className="py-3.5 px-4 sm:px-6 w-1/4 text-right">Pemenang</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {item.comparisonMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 align-top">
                      <div>{row.feature}</div>
                      {row.explanation && (
                        <p className="text-[11px] text-slate-500 font-normal mt-1 leading-relaxed">
                          {row.explanation}
                        </p>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top font-medium">
                      {row.itemAValue}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top font-medium">
                      {row.itemBValue}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right align-top shrink-0">
                      {row.winner === 'itemA' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">
                          <Trophy className="w-3 h-3 text-blue-600" />
                          {item.itemA.name}
                        </span>
                      )}
                      {row.winner === 'itemB' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800">
                          <Trophy className="w-3 h-3 text-indigo-600" />
                          {item.itemB.name}
                        </span>
                      )}
                      {row.winner === 'tie' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                          Seimbang 🤝
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Analisis Mendalam</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pembahasan Teknis & Pertimbangan Bisnis
          </h2>
        </div>

        <div className="space-y-6">
          {item.deepDive.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {section.title}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
              {section.keyTakeaway && (
                <div className="p-4 rounded-xl bg-blue-50/80 border-l-4 border-blue-600 text-xs text-blue-900 font-medium leading-relaxed">
                  <strong>Poin Kunci: </strong>
                  {section.keyTakeaway}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Verdict Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-700 space-y-6">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            <span>Kesimpulan & Rekomendasi Ahli</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
            Keputusan Akhir: Siapa yang Harus Anda Pilih?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {item.verdict.summary}
          </p>

          {/* Decision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/10 rounded-2xl p-5 border border-white/15 space-y-3">
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                Pilih {item.itemA.name} Jika:
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {item.verdict.chooseItemAIf.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 border border-white/15 space-y-3">
              <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Pilih {item.itemB.name} Jika:
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {item.verdict.chooseItemBIf.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/30 text-xs text-blue-200">
            <strong>Rekomendasi Kami: </strong>
            {item.verdict.finalRecommendation}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-lg shadow-emerald-900/40"
            >
              <span>Diskusikan Proyek Website Anda via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors border border-white/20"
            >
              <span>Kalkulator Simulasi Biaya</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Tanya Jawab Populer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan Sering Diajukan (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {item.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                <span className="text-blue-600 font-black shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Comparisons */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Perbandingan Terkait Lainnya
            </h2>
            <Link
              href="/perbandingan"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Lihat Semua 18 Perbandingan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/perbandingan/${rel.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{rel.summary}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Bandingkan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
