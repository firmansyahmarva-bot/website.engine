import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, ArrowRight, Check, Code2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { COMPONENTS_CATALOG } from '@/content/components';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Katalog Komponen UI Website Modern & Aksesibel',
  description:
    'Jelajahi 21 komponen UI website modular terstandarisasi: Navbar, Hero, Mega Menu, Pricing Card, Testimoni, FAQ, hingga Form Leads.',
  path: '/components',
  keywords: ['komponen website', 'ui component web', 'komponen nextjs', 'desain komponen website'],
});

export default function ComponentsPage() {
  const categories = Array.from(new Set(COMPONENTS_CATALOG.map((c) => c.category)));

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ name: 'Katalog Komponen', url: '/components' }]} />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Sistem Desain Modular
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Katalog Komponen UI Website Terstandarisasi
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Setiap komponen direkayasa secara modular dengan semantic HTML5, prinsip aksesibilitas WCAG,
          dan optimasi performa Core Web Vitals tanpa beban skrip yang tidak perlu.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="/code"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors shadow-xs"
          >
            <Code2 className="w-4 h-4 text-blue-600" />
            <span>Lihat Contoh Kode & Implementasi</span>
          </Link>
        </div>
      </section>

      {/* Category Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {categories.map((category) => {
          const comps = COMPONENTS_CATALOG.filter((c) => c.category === category);

          return (
            <div key={category} className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{category}</h2>
                <span className="text-xs text-slate-500 font-medium">{comps.length} Komponen</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comps.map((comp) => (
                  <div
                    key={comp.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="font-semibold uppercase text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {comp.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2">{comp.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {comp.description}
                      </p>

                      {/* Best Practices */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                        <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                          Prinsip Rekayasa:
                        </span>
                        {comp.bestPractices.slice(0, 3).map((bp, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{bp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key UX Consideration */}
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed">
                        <span className="font-bold text-slate-900 block mb-0.5">Pertimbangan UX:</span>
                        {comp.keyUXConsiderations}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/code"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Snippet Kode</span>
                      </Link>

                      <Link
                        href="/configure"
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                      >
                        <span>Gunakan di Web</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
