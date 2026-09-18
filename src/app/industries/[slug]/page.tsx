import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  Building2,
  HelpCircle,
  FileCheck2,
} from 'lucide-react';
import { INDUSTRIES } from '@/content/industries';
import {
  getIndustryBySlug,
  getWebsiteTypeById,
  getDesignsForIndustry,
  getRecommendedPackageForIndustry,
  getFeaturesForIndustry,
  getRelatedIndustries,
  buildConfiguratorUrl,
} from '@/lib/relationships';
import { formatIDR } from '@/content/pricing';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';

export const dynamic = 'force-static';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return constructMetadata({
      title: 'Industri Tidak Ditemukan',
      description: 'Halaman industri tidak ditemukan.',
    });
  }

  return constructMetadata({
    title: industry.seoTitle,
    description: industry.seoDescription,
    path: `/industries/${industry.slug}`,
    keywords: industry.seoKeywords,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const websiteType = getWebsiteTypeById(industry.recommendedWebsiteType);
  const designs = getDesignsForIndustry(industry);
  const pkg = getRecommendedPackageForIndustry(industry);
  const features = getFeaturesForIndustry(industry);
  const relatedIndustries = getRelatedIndustries(industry, 4);

  const configuratorUrl = buildConfiguratorUrl({
    type: industry.recommendedWebsiteType,
    design: industry.recommendedDesigns[0],
    pages: industry.recommendedPageCount,
    features: industry.recommendedFeatures,
  });

  const serviceSchema = generateServiceSchema(
    industry.name.id,
    industry.description.id,
    pkg.basePrice
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { name: 'Solusi Industri', url: '/website-packages' },
            { name: industry.name.id, url: `/industries/${industry.slug}` },
          ]}
        />
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
            <span>Solusi Khusus Sektor {industry.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Jasa Pembuatan Website {industry.name.id}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {industry.tagline.id}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {industry.description.id}
          </p>

          {/* Quick CTA row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={configuratorUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Konfigurasi Website {industry.name.id}</span>
            </Link>

            <Link
              href={`/demos/${industry.recommendedDesigns[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors shadow-xs"
            >
              <span>Lihat Demo Desain Terkait</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Context & Business Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-3xl border border-slate-200 shadow-sm mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Konteks Industri & Tantangan Pasar
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mengapa Sektor {industry.name.id} Membutuhkan Arsitektur Khusus?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {industry.marketContext}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">Strategi Konversi:</span>
              {industry.conversionStrategy}
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Target & Fungsi Utama Website</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {industry.commonWebsiteGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Essential Sections Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Spesifikasi Konten
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Struktur Halaman Wajib untuk {industry.name.id}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Struktur informasi yang disusun agar pengunjung langsung mendapatkan jawaban atas kredibilitas dan keahlian bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.essentialSections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{sec.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sec.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Design Concepts & Package Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-3xl border border-slate-200 shadow-sm mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Design Concept Recommendation */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Rekomendasi Karakter Desain
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Konsep Visual Paling Sesuai
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designs.map((design) => (
                <div
                  key={design.id}
                  className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="p-4 text-white" style={{ backgroundColor: design.primaryColor }}>
                    <span className="text-[10px] font-bold uppercase opacity-80">
                      {design.styleCategory}
                    </span>
                    <h3 className="font-bold text-base mt-0.5">{design.name.id}</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {design.description.id}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/demos/${design.slug}`}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        <span>Uji Coba Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Features */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">
                Fitur & Modul Direkomendasikan:
              </h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feat) => (
                  <span
                    key={feat.id}
                    className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200"
                  >
                    {feat.name.id}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Package Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-7 rounded-2xl flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Paket Rekomendasi
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{pkg.name.id}</h3>
              <p className="text-xs text-slate-400 mt-1">{pkg.tagline.id}</p>

              <div className="mt-4 mb-6 pb-6 border-b border-slate-800">
                <div className="text-3xl font-black text-emerald-400">
                  {formatIDR(pkg.basePrice)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Standar {industry.recommendedPageCount} Halaman &bull; Estimasi {pkg.turnaroundDays} hari kerja
                </div>
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="font-bold text-white uppercase text-[11px] tracking-wider mb-2">
                  Sudah Mencakup:
                </div>
                {pkg.highlights.slice(0, 5).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={configuratorUrl}
              className="w-full py-3.5 px-4 text-center font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors text-sm shadow flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Buka Konfigurasi untuk {industry.name.id}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Industries Internal Linking */}
      {relatedIndustries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4">
            Solusi Industri Terkait
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedIndustries.map((rel) => (
              <Link
                key={rel.id}
                href={`/industries/${rel.slug}`}
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group"
              >
                <span className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors block">
                  {rel.name.id}
                </span>
                <span className="text-xs text-slate-500 mt-1 line-clamp-1 block">
                  {rel.tagline.id}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQAccordion
        items={industry.faqs}
        title={`Pertanyaan Seputar Website ${industry.name.id}`}
        description="Jawaban seputar fitur, waktu pembuatan, dan integrasi modul untuk sektor ini."
      />
    </div>
  );
}
