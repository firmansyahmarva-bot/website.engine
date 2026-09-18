import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles, Check } from 'lucide-react';
import { DESIGN_CONCEPTS } from '@/content/designs';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: '10 Konsep Desain Website Profesional',
  description:
    'Jelajahi 10 konsep sistem desain website modern: Corporate, Minimalist, Creative, Advisory, Industrial, SaaS, hingga E-Commerce.',
  path: '/designs',
  keywords: ['konsep desain website', 'katalog website', 'template website profesional', 'desain web korporat'],
});

export default function DesignsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ name: 'Katalog Desain', url: '/designs' }]} />
      </div>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Sistem Desain Terstandarisasi
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          10 Konsep Desain Website Orisinal
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Setiap desain dibangun dengan arsitektur visual khusus yang dapat disesuaikan dengan warna
          brand, logo, dan profil industri perusahaan Anda.
        </p>
      </section>

      {/* Designs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESIGN_CONCEPTS.map((design) => (
            <div
              key={design.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Banner */}
                <div
                  className="p-6 text-white"
                  style={{ backgroundColor: design.primaryColor }}
                >
                  <div className="flex items-center justify-between text-xs opacity-80 mb-2">
                    <span className="uppercase font-semibold tracking-wider">
                      {design.styleCategory}
                    </span>
                    {design.badge && (
                      <span className="bg-white/25 text-white px-2 py-0.5 rounded font-bold text-[10px]">
                        {design.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">{design.name.id}</h2>
                  <p className="text-xs opacity-90 mt-1 line-clamp-2">{design.tagline.id}</p>

                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/15 text-xs">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/50"
                      style={{ backgroundColor: design.primaryColor }}
                    />
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/50"
                      style={{ backgroundColor: design.accentColor }}
                    />
                    <span className="opacity-75 text-[11px]">
                      Tipografi: {design.fontFamily.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {design.description.id}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                      Keunggulan Visual:
                    </div>
                    {design.keyStrengths.map((strength, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Cocok Untuk Sektor:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {design.targetAudience.map((target, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <Link
                  href={`/demos/${design.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <span>Buka Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/configure?design=${design.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Pilih Desain</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
