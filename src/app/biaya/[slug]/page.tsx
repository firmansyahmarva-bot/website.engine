import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  COST_GUIDES,
  getCostGuideBySlug,
  getRelatedCostGuides,
} from '@/content/costs';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  SITE_NAME,
} from '@/lib/seo';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import {
  Wallet,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Server,
  Globe,
  Palette,
  Code2,
  Wrench,
  Check,
  Zap,
} from 'lucide-react';

export const dynamic = 'force-static';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COST_GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCostGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Panduan Biaya Tidak Ditemukan',
    };
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/biaya/${guide.slug}`,
    keywords: guide.seoKeywords,
    ogType: 'article',
  });
}

export default async function CostGuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getCostGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const related = getRelatedCostGuides(guide.slug, 3);
  const whatsappUrl = generateDirectWhatsAppUrl(`Konsultasi Anggaran ${guide.title}`);

  // Schema Generators
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Panduan Biaya', url: '/biaya' },
    { name: guide.title, url: `/biaya/${guide.slug}` },
  ]);

  const faqSchema = generateFAQSchema(guide.faqs);

  const articleSchema = generateArticleSchema({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/biaya/${guide.slug}`,
    datePublished: '2026-01-20',
    dateModified: '2026-03-15',
  });

  const breakdownItems = [
    {
      key: 'domain',
      icon: Globe,
      color: 'blue',
      data: guide.costBreakdowns.domain,
    },
    {
      key: 'server',
      icon: Server,
      color: 'indigo',
      data: guide.costBreakdowns.server,
    },
    {
      key: 'design',
      icon: Palette,
      color: 'purple',
      data: guide.costBreakdowns.design,
    },
    {
      key: 'dev',
      icon: Code2,
      color: 'emerald',
      data: guide.costBreakdowns.dev,
    },
    {
      key: 'maintenance',
      icon: Wrench,
      color: 'amber',
      data: guide.costBreakdowns.maintenance,
    },
  ];

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

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/biaya" className="hover:text-emerald-600 transition-colors">
            Panduan Biaya
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate">{guide.title}</span>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-white border-b border-slate-200/80 pt-12 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Wallet className="w-3.5 h-3.5" />
            <span>Kategori: {guide.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {guide.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
            <span className="font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Update Standar Biaya 2026
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>5 Komponen Anggaran Transparan</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{guide.hiddenCostsWarning.length} Peringatan Biaya Tersembunyi</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Tier Price Cards (Starter, Business, Enterprise) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Paket & Estimasi Investasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Skala Pembuatan Sesuai Kebutuhan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Bandingkan tiga tingkatan paket pembuatan website berikut fitur dan kapabilitas yang
              diperoleh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Starter / Basic
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                    {guide.tierPrices.starter.range}
                  </div>
                  {guide.tierPrices.starter.period && (
                    <span className="text-xs text-slate-400 font-medium">
                      {guide.tierPrices.starter.period}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {guide.tierPrices.starter.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Fitur yang Diperoleh:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {guide.tierPrices.starter.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  <span>Pilih Paket Starter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Business (Popular Highlight) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500 shadow-lg relative flex flex-col justify-between -translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Paling Banyak Dipilih
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Professional Business
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                    {guide.tierPrices.business.range}
                  </div>
                  {guide.tierPrices.business.period && (
                    <span className="text-xs text-slate-400 font-medium">
                      {guide.tierPrices.business.period}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {guide.tierPrices.business.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Seluruh Keunggulan:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {guide.tierPrices.business.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm shadow-emerald-500/30"
                >
                  <span>Pilih Paket Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                    Custom Enterprise
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                    {guide.tierPrices.enterprise.range}
                  </div>
                  {guide.tierPrices.enterprise.period && (
                    <span className="text-xs text-slate-400 font-medium">
                      {guide.tierPrices.enterprise.period}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {guide.tierPrices.enterprise.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Fitur & Skalabilitas Enterprise:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {guide.tierPrices.enterprise.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  <span>Konsultasi Enterprise</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Cards (Domain, Server, Design, Dev, Maintenance) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Wallet className="w-3.5 h-3.5" />
              <span>Transparansi Komponen Biaya</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Rincian 5 Elemen Pembentuk Biaya Website
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Memahami kemana setiap rupiah dana dialokasikan: dari sewa domain, kapasitas server,
              jam kerja desainer UI/UX, hingga koding engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakdownItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        {item.data.costRange}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{item.data.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.data.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Faktor Penentu Harga:
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {item.data.factors.map((factor, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold shrink-0">•</span>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Hidden Costs Warning Callouts */}
        <section className="bg-amber-50/60 rounded-3xl border border-amber-200 p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Waspada Biaya Tersembunyi (Hidden Costs)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              4 Jebakan Biaya Tak Terduga yang Sering Dirahasiakan Vendor Lain
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
              Banyak penawaran website murah Rp 1 juta di awal berujung pada pembengkakan biaya
              hingga belasan juta rupiah di tahun berikutnya. Berikut rincian yang wajib Anda
              antisipasi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.hiddenCostsWarning.map((warning, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-amber-200/80 p-5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{warning.title}</h3>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      warning.riskLevel === 'high'
                        ? 'bg-rose-100 text-rose-800'
                        : warning.riskLevel === 'medium'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    Risiko: {warning.riskLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{warning.description}</p>
                <div className="pt-2 border-t border-slate-100 text-xs text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg">
                  <strong>Cara Mencegah: </strong>
                  {warning.howToAvoid}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Analysis Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <TrendingUp className="w-4 h-4" />
              <span>Analisis Rasio Pengembalian Investasi (ROI)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Mengapa Website Berkualitas Bukan Pengeluaran, Melainkan Pintu Laba?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {guide.roiAnalysis.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {guide.roiAnalysis.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 space-y-1.5"
              >
                <div className="text-[11px] text-slate-500 font-semibold">{metric.label}</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  {metric.value}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{metric.impact}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 font-medium">
                Estimasi Titik Balik Modal (Break-Even Point):
              </div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">
                {guide.roiAnalysis.breakEvenTimeline}
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Hitung Simulasi Anggaran Anda</span>
            </Link>
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Tips Memaksimalkan ROI Bisnis Anda:
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {guide.roiAnalysis.tipsToMaximizeRoi.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Tanya Jawab Populer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pertanyaan Seputar Biaya Pembuatan
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {guide.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Big Interactive Calculator CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kalkulator Otomatis Transparan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Dapatkan Rincian Penawaran Resmi Sesuai Budget Perusahaan Anda
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tim engineer kami siap menyusun estimasi penawaran harga (Proposal Penawaran / RFQ)
              resmi terperinci tanpa biaya konsultasi. Beritahukan kebutuhan Anda dan dapatkan
              rekomendasi teknologi paling efisien.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-lg shadow-emerald-900/40"
              >
                <span>Konsultasi Rincian Biaya via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors border border-white/20"
              >
                <span>Simulasi Mandiri di Kalkulator Harga</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Cost Guides */}
        {related.length > 0 && (
          <section className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Panduan Biaya Terkait Lainnya
              </h2>
              <Link
                href="/biaya"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
              >
                <span>Lihat Semua 12 Panduan Biaya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/biaya/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <div className="text-xs font-black text-slate-900 mt-1">
                      Mulai {rel.tierPrices.starter.range.split('-')[0].trim()}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">{rel.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-semibold">
                    <span>Lihat Rincian</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
