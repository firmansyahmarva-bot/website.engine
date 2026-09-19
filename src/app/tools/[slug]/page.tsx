import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Wrench,
} from 'lucide-react';

import { TOOLS, getToolBySlug, getRelatedTools } from '@/content/tools';
import { constructMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ToolCta from '@/components/tools/ToolCta';
import { TOOL_COMPONENTS, ICON_MAP } from '@/components/tools/registry';

export const dynamic = 'force-static';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return constructMetadata({
      title: 'Tools Tidak Ditemukan',
      description: 'Halaman tool tidak ditemukan.',
    });
  }

  return constructMetadata({
    title: tool.seoTitle,
    description: tool.seoDescription,
    path: `/tools/${tool.slug}`,
    keywords: tool.seoKeywords,
  });
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(tool.slug);

  const breadcrumbItems = [
    { name: 'Tools Gratis', url: '/tools' },
    { name: tool.name, url: `/tools/${tool.slug}` },
  ];

  // SoftwareApplication structured data
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All Web Browsers',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description: tool.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
    },
  };

  const IconComp = ICON_MAP[tool.iconName] || Sparkles;

  const ToolComponent = TOOL_COMPONENTS[tool.slug];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Inject SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      {/* Header Bar */}
      <div className="bg-white border-b border-slate-200 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  <IconComp className="w-3.5 h-3.5 text-blue-600" />
                  <span>{tool.category}</span>
                </span>
                {tool.badge && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                    {tool.badge}
                  </span>
                )}
                <span className="text-xs text-slate-400 font-medium">100% Client-Side & Gratis</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {tool.title}
              </h1>

              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                {tool.tagline}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Wrench className="w-4 h-4 text-slate-500" />
                <span>Lihat Semua {TOOLS.length} Tools</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tool Component Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
          {ToolComponent ? <ToolComponent /> : null}
        </div>

        {/* How To Use & Features Guide */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Step by Step Guide */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">
                Panduan Cara Menggunakan {tool.name}
              </h2>
            </div>

            <div className="space-y-4">
              {tool.howToUse.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-black text-sm flex items-center justify-center shrink-0 border border-blue-200">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{step.step}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">Fitur & Keunggulan Utama</h2>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {tool.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        {tool.faqs && tool.faqs.length > 0 && (
          <div className="mt-12">
            <FAQAccordion
              items={tool.faqs}
              title={`Pertanyaan Umum Seputar ${tool.name}`}
              description="Informasi teknis dan panduan implementasi untuk hasil optimal."
            />
          </div>
        )}

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Alat Bantu Terkait</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Eksplorasi alat optimasi lainnya untuk melengkapi strategi digital Anda.
                </p>
              </div>
              <Link
                href="/tools"
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Lihat Semua Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((rel) => {
                const RelIcon = ICON_MAP[rel.iconName] || Sparkles;
                return (
                  <Link
                    key={rel.slug}
                    href={`/tools/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <RelIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Contextual Bottom CTA */}
        <div className="mt-16">
          <ToolCta tool={tool} />
        </div>
      </div>
    </div>
  );
}
