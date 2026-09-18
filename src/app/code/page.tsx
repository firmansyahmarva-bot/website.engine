import { Metadata } from 'next';
import Link from 'next/link';
import { Code2, ArrowRight, Check, Eye, ShieldCheck, Smartphone, Layers } from 'lucide-react';
import { CODE_EXAMPLES } from '@/content/code-examples';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase Kode & Contoh Arsitektur Komponen Web',
  description:
    'Kumpulan contoh kode komponen web siap pakai: Responsive Navbar, Hero Section, Pricing Card, FAQ Accordion, WhatsApp Button, dan Validated Contact Form.',
  path: '/code',
  keywords: ['contoh kode web', 'snippet tailwind css', 'komponen react nextjs', 'code showcase website'],
});

export default function CodePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ name: 'Contoh Kode', url: '/code' }]} />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Standar Rekayasa Kode
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Pustaka Kode Komponen Web Modern
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Bukan kode generator abal-abal. Setiap potongan kode ditulis dengan standar produksi:
          aksesibilitas WCAG, responsivitas lintas gawai, dan performa tinggi tanpa dependensi berlebih.
        </p>
      </section>

      {/* Code Examples List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {CODE_EXAMPLES.map((example) => (
          <article
            key={example.id}
            id={example.slug}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* Header info */}
            <div className="p-6 sm:p-8 border-b border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {example.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {example.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{example.title}</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{example.summary}</p>
            </div>

            {/* Code Block Container */}
            <div className="bg-slate-950 text-slate-200 p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed border-b border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                <span>{example.language.toUpperCase()} &bull; Semantic Production Snippet</span>
                <span>UTF-8</span>
              </div>
              <pre>
                <code>{example.code}</code>
              </pre>
            </div>

            {/* Detailed Explanations */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50">
              {/* What it does */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-blue-600" />
                  <span>Fungsi & Cara Kerja Kode:</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{example.whatItDoes}</p>
                <div className="pt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Area Penerapan: </span>
                  {example.whereItIsUseful}
                </div>
              </div>

              {/* Accessibility & Responsive considerations */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Aksesibilitas (A11y):</span>
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {example.accessibilityConsiderations.map((a11y, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{a11y}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-1.5">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                    <span>Responsivitas Multi-Device:</span>
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {example.responsiveConsiderations.map((resp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom links */}
            <div className="p-4 px-6 sm:px-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs bg-white">
              <div className="flex items-center gap-2 text-slate-500">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Komponen Terkait: </span>
                <span className="font-semibold text-slate-800">
                  {example.relatedComponents.join(', ')}
                </span>
              </div>

              <Link
                href="/configure"
                className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Terapkan di Website Anda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
