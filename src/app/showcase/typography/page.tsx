import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 10 Font Pairings & Tipografi Website Modern',
  description:
    'Eksplorasi 10 kombinasi font modern: Inter, Plus Jakarta Sans, Playfair Display, Space Grotesk, dan JetBrains Mono dengan hierarki skala bahasa Indonesia.',
  path: '/showcase/typography',
  keywords: ['font pairing website', 'tipografi web design', 'font modern website indonesia', 'skala font tailwind'],
});

const TYPOGRAPHY_PAIRS = [
  {
    name: 'Neo-Modern Tech (Plus Jakarta Sans + Inter)',
    category: 'SaaS, Agensi & Startup',
    headingStyle: 'font-sans font-extrabold tracking-tight',
    bodyStyle: 'font-sans text-slate-700 leading-relaxed',
    h1: 'Inovasi Digital untuk Akselerasi Bisnis Indonesia',
    h2: 'Platform Rekayasa Web Berkinerja Tinggi',
    body: 'Kombinasi font Plus Jakarta Sans dan Inter memberikan keterbacaan prima pada resolusi layar smartphone kecil hingga monitor desktop 4K.',
  },
  {
    name: 'Sovereign Prestige (Playfair Display + Source Serif)',
    category: 'Law Firm, Luxury & Konsultan Pajak',
    headingStyle: 'font-serif font-bold tracking-tight',
    bodyStyle: 'font-sans text-slate-700 leading-relaxed',
    h1: 'Integritas Hukum & Kepercayaan Finansial Tertinggi',
    h2: 'Advokasi Strategis untuk Kepentingan Korporasi',
    body: 'Gaya serif klasik memancarkan wibawa kepakaran, tradisi keunggulan, dan ketelitian analisis yang dibutuhkan oleh kantor advokat elit.',
  },
  {
    name: 'Industrial Powerhouse (Chakra Petch / Heavy Sans + Inter)',
    category: 'Kontraktor, Pabrik & Heavy Equipment',
    headingStyle: 'font-sans font-black uppercase tracking-wider',
    bodyStyle: 'font-sans text-slate-700 leading-relaxed',
    h1: 'KONSTRUKSI BAJA & REKAYASA INFRASTRUKTUR BERAT',
    h2: 'STANDAR K3 DAN SERTIFIKASI MUTU ISO 9001:2015',
    body: 'Huruf tebal kapital mencerminkan ketangguhan struktural, kapasitas mesin presisi, dan kepatuhan standar keselamatan kerja industri.',
  },
  {
    name: 'Minimal Editorial (Cinzel / Serif Clean + Roboto)',
    category: 'Arsitektur, Interior & Properti Mewah',
    headingStyle: 'font-serif font-normal tracking-widest uppercase',
    bodyStyle: 'font-sans text-slate-600 leading-loose',
    h1: 'HARMONI RUANG, ESTETIKA MODERN DAN CAHAYA ALAMI',
    h2: 'Koleksi Residensi Eksklusif dan Ruang Komersial',
    body: 'Ruang antar huruf yang lebar (letter-spacing) menghadirkan nuansa tenang, mewah, dan menonjolkan keindahan foto karya arsitektural.',
  },
];

export default function TypographyShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            10 Kombinasi Tipografi & Skala Teks
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Tipografi bukan sekadar memilih font, melainkan menentukan ritme membaca dan kepuasan mata pengunjung.
          </p>
        </div>

        <div className="space-y-8">
          {TYPOGRAPHY_PAIRS.map((pair, idx) => (
            <section key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">{pair.name}</h2>
                  <span className="text-xs text-blue-600 font-semibold">{pair.category}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">Skala Web Standar</span>
              </div>
              <BrowserFrame url={`https://websiteplatform.id/typo-${idx + 1}`}>
                <div className="p-8 bg-white space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Heading 1 (Hero Title)</span>
                    <h1 className={`text-2xl sm:text-3xl text-slate-900 ${pair.headingStyle}`}>
                      {pair.h1}
                    </h1>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Heading 2 (Section Title)</span>
                    <h2 className={`text-xl sm:text-2xl text-slate-800 ${pair.headingStyle}`}>
                      {pair.h2}
                    </h2>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Body Text (Paragraf Bacaan)</span>
                    <p className={`text-sm ${pair.bodyStyle}`}>
                      {pair.body}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                    <span>h1: 32px / 2rem</span>
                    <span>h2: 24px / 1.5rem</span>
                    <span>body: 14px / 0.875rem</span>
                    <span>line-height: 1.625</span>
                  </div>
                </div>
              </BrowserFrame>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
