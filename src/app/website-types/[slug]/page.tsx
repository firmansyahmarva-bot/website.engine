import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  ExternalLink,
  Layers,
  Sparkles,
  Building2,
  FileCheck2,
} from 'lucide-react';
import { WEBSITE_TYPES } from '@/content/website-types';
import {
  getWebsiteTypeBySlug,
  getIndustriesForWebsiteType,
  getComponentsForWebsiteType,
  getPackageById,
  buildConfiguratorUrl,
} from '@/lib/relationships';
import { formatIDR } from '@/content/pricing';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';

export const dynamic = 'force-static';

interface WebsiteTypePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WEBSITE_TYPES.map((type) => ({
    slug: type.slug,
  }));
}

export async function generateMetadata({ params }: WebsiteTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const type = getWebsiteTypeBySlug(slug);

  if (!type) {
    return constructMetadata({
      title: 'Tipe Website Tidak Ditemukan',
      description: 'Halaman tipe website tidak ditemukan.',
    });
  }

  return constructMetadata({
    title: type.seoTitle || `Jasa Pembuatan Website ${type.name.id}`,
    description: type.seoDescription || type.description.id,
    path: `/website-types/${type.slug}`,
    keywords: type.seoKeywords || [type.name.id, 'jasa website', 'buat website'],
  });
}

export default async function WebsiteTypePage({ params }: WebsiteTypePageProps) {
  const { slug } = await params;
  const type = getWebsiteTypeBySlug(slug);

  if (!type) {
    notFound();
  }

  const industries = getIndustriesForWebsiteType(type.id, 8);
  const components = getComponentsForWebsiteType(type.id, 6);
  const pkg = getPackageById(type.recommendedPackage || 'professional-business') || {
    basePrice: type.basePrice,
    turnaroundDays: 7,
    name: { id: 'Paket Terstandarisasi' },
    tagline: { id: 'Solusi lengkap bergaransi' },
    highlights: ['Desain Responsif', 'Optimasi Core Web Vitals', 'Schema.org JSON-LD'],
  };

  const configuratorUrl = buildConfiguratorUrl({
    type: type.id,
    design: type.recommendedDesigns ? type.recommendedDesigns[0] : 'modern-corporate',
    pages: type.recommendedPages,
    features: type.featuresIncluded,
  });

  const serviceSchema = generateServiceSchema(type.name.id, type.description.id, type.basePrice);

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { name: 'Kategori Website', url: '/website-packages' },
            { name: type.name.id, url: `/website-types/${type.slug}` },
          ]}
        />
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
            <span>Model Website &bull; Standar Rekayasa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pembuatan Website {type.name.id}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {type.tagline.id}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {type.overview ? type.overview.id : type.description.id}
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={configuratorUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Simulasi & Konfigurasi {type.name.id}</span>
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors shadow-xs"
            >
              <span>Mulai {formatIDR(type.basePrice)}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Goals & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-3xl border border-slate-200 shadow-sm mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Tujuan & Dampak Bisnis
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Apa yang Dicapai dengan Website {type.name.id}?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Arsitektur {type.name.id} dirancang untuk menjawab perilaku pengunjung yang spesifik
              sehingga mereka terdorong mengambil tindakan nyata.
            </p>

            {type.businessGoals && (
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                {type.businessGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Keunggulan Standar Rekayasa Kami</span>
            </h3>
            {type.benefits && (
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Recommended Page Structure */}
      {type.structureRecommendations && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Arsitektur Informasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Rekomendasi Struktur Halaman {type.name.id}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Standar {type.recommendedPages} halaman utama yang disarankan untuk memaksimalkan kepuasan pengunjung dan SEO Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {type.structureRecommendations.map((rec, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{rec.pageName}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Industries Using This Website Type */}
      {industries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-3xl border border-slate-200 shadow-sm mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Penerapan di Lapangan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Industri yang Cocok Menggunakan {type.name.id}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Jelajahi panduan spesifik per sektor industri yang merekomendasikan tipe website ini.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-white transition-all group"
              >
                <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 block">
                  {ind.name.id}
                </span>
                <span className="text-xs text-slate-500 mt-1 line-clamp-1 block">
                  {ind.tagline.id}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Compatible Components Showcase */}
      {components.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Komponen Terkait untuk {type.name.id}
              </h2>
              <p className="text-xs text-slate-500">
                Modul antarmuka yang terbukti efektif meningkatkan kenyamanan navigasi model web ini.
              </p>
            </div>
            <Link href="/components" className="text-xs font-bold text-blue-600 hover:text-blue-700">
              Lihat Katalog Komponen &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {components.map((comp) => (
              <div key={comp.id} className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {comp.category}
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5">{comp.name}</h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{comp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {type.faqs && type.faqs.length > 0 && (
        <FAQAccordion
          items={type.faqs}
          title={`Pertanyaan Mengenai Website ${type.name.id}`}
          description="Rincian teknis, biaya, dan waktu pengerjaan untuk model website ini."
        />
      )}
    </div>
  );
}
