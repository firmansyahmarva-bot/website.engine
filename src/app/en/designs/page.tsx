import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles, Check, SlidersHorizontal, MessageCircle } from 'lucide-react';
import { DESIGN_CONCEPTS } from '@/content/designs';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { constructMetadata } from '@/lib/seo';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = constructMetadata({
  title: '10 Architectural Web Design Concepts for B2B & Enterprise',
  description:
    'Explore 10 curated visual design systems engineered for high-trust B2B enterprises: Modern Corporate, Premium Executive, Minimalist Nordic, Industrial Manufacturing, and Tech SaaS.',
  path: '/en/designs',
  keywords: [
    'b2b website design catalog',
    'enterprise web design concepts',
    'modern corporate website templates',
    'saas web design system',
    'industrial website design',
  ],
});

export default function EnglishDesignsPage() {
  const whatsappUrl = generateDirectWhatsAppUrl(
    'Inquiring about Design Concepts for our company website'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { name: 'Home', url: '/en' },
            { name: 'Design Catalog', url: '/en/designs' },
          ]}
        />
      </div>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Standardized Design Systems
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          10 Original B2B Architectural Design Systems
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Each concept is an engineered visual system crafted for specific industry buyer psychology, complete with typography scales, contrast ratios, and modular layouts.
        </p>
      </section>

      {/* Designs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESIGN_CONCEPTS.map((design) => (
            <div
              key={design.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Preview */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={design.imageUrl || '/images/design-modern-corporate.webp'}
                    alt={design.name.en || design.name.id}
                    width={400}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-sm border border-slate-700">
                      {design.styleCategory}
                    </span>
                    {design.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white shadow-xs">
                        {design.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-base font-bold tracking-tight">
                      {design.name.en || design.name.id}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[3.5rem]">
                    {design.description.en || design.description.id}
                  </p>

                  {/* Strengths & Palette */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Color Palette:</span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs"
                          style={{ backgroundColor: design.primaryColor }}
                          title={`Primary: ${design.primaryColor}`}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs"
                          style={{ backgroundColor: design.accentColor }}
                          title={`Accent: ${design.accentColor}`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      {design.keyStrengths.slice(0, 3).map((strength, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <Link
                  href={`/demos/${design.demoSlug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/configure?design=${design.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs"
                >
                  <span>Build with This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need a Bespoke Visual Framework for Your Brand?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our UI/UX team can customize typography, colors, and modular interaction patterns to match your corporate identity guidelines.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Custom Design via WhatsApp</span>
            </a>
            <Link
              href="/en/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-sm transition-all"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Calculate Investment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
