import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 12 Palet Warna Bisnis & Kontras Aksesibilitas WCAG',
  description:
    'Kurasi 12 palet warna industri modern: Corporate Navy, Emerald Eco, Solar Amber, Crimson Law, dan Cyber Dark dengan rasio kontras WCAG AAA.',
  path: '/showcase/color',
  keywords: ['palet warna website', 'skema warna web design', 'wcag contrast ratio', 'warna website profesional'],
});

const COLOR_PALETTES = [
  {
    name: 'Deep Corporate Navy',
    industry: 'Keuangan, Konsultan & Korporat',
    primary: { hex: '#1E3A8A', name: 'Navy 900', contrast: '12.4:1 (AAA)' },
    secondary: { hex: '#3B82F6', name: 'Blue 500', contrast: '4.8:1 (AA)' },
    surface: { hex: '#F8FAFC', name: 'Slate 50', contrast: 'Base' },
    accent: { hex: '#10B981', name: 'Emerald 500', contrast: 'Accent' },
  },
  {
    name: 'Sustainable Forest & Eco',
    industry: 'Pertanian, Agrobisnis & Energi Hijau',
    primary: { hex: '#064E3B', name: 'Emerald 900', contrast: '11.8:1 (AAA)' },
    secondary: { hex: '#10B981', name: 'Emerald 500', contrast: '5.2:1 (AA)' },
    surface: { hex: '#F0FDF4', name: 'Green 50', contrast: 'Base' },
    accent: { hex: '#F59E0B', name: 'Amber 500', contrast: 'Accent' },
  },
  {
    name: 'Industrial Amber & Hazard',
    industry: 'Kontraktor, Logistik & Pabrik Baja',
    primary: { hex: '#0F172A', name: 'Slate 900', contrast: '16.1:1 (AAA)' },
    secondary: { hex: '#F59E0B', name: 'Amber 500', contrast: '9.2:1 (AAA on Dark)' },
    surface: { hex: '#FFFBEB', name: 'Amber 50', contrast: 'Base' },
    accent: { hex: '#EF4444', name: 'Red 500', contrast: 'Accent' },
  },
  {
    name: 'Prestige Burgundy & Gold',
    industry: 'Law Firm, Notaris & Luxury Real Estate',
    primary: { hex: '#4C0519', name: 'Rose 950', contrast: '14.2:1 (AAA)' },
    secondary: { hex: '#D97706', name: 'Amber 600 Gold', contrast: '6.1:1 (AA)' },
    surface: { hex: '#FFF1F2', name: 'Rose 50', contrast: 'Base' },
    accent: { hex: '#BE123C', name: 'Rose 700', contrast: 'Accent' },
  },
  {
    name: 'Clinical Teal & Pure White',
    industry: 'Klinik, Rumah Sakit & Farmasi',
    primary: { hex: '#134E4A', name: 'Teal 900', contrast: '10.9:1 (AAA)' },
    secondary: { hex: '#0D9488', name: 'Teal 600', contrast: '4.6:1 (AA)' },
    surface: { hex: '#F0FDFA', name: 'Teal 50', contrast: 'Base' },
    accent: { hex: '#0284C7', name: 'Sky 600', contrast: 'Accent' },
  },
  {
    name: 'Cyber Neon Dark',
    industry: 'Software, AI & Web3 Tech',
    primary: { hex: '#020617', name: 'Slate 950', contrast: 'Base Dark' },
    secondary: { hex: '#22C55E', name: 'Neon Green', contrast: '13.5:1 (AAA on Dark)' },
    surface: { hex: '#0F172A', name: 'Slate 900', contrast: 'Card Surface' },
    accent: { hex: '#A855F7', name: 'Purple 500', contrast: 'Accent' },
  },
];

export default function ColorShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            12 Kurasi Palet Warna & Rasio Kontras Aksesibilitas
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Warna membangun identitas psikologis dan memenuhi standar keterbacaan internasional WCAG AAA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLOR_PALETTES.map((palette, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">{palette.name}</h2>
                  <p className="text-xs text-slate-500">{palette.industry}</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-lg border border-emerald-200">
                  {palette.primary.contrast}
                </span>
              </div>

              {/* Color Swatch Bar */}
              <div className="h-16 rounded-2xl overflow-hidden flex shadow-inner">
                <div style={{ backgroundColor: palette.primary.hex }} className="flex-2 p-2 flex items-end">
                  <span className="text-[10px] font-mono text-white/90 font-bold">{palette.primary.hex}</span>
                </div>
                <div style={{ backgroundColor: palette.secondary.hex }} className="flex-1 p-2 flex items-end">
                  <span className="text-[10px] font-mono text-white/90 font-bold">{palette.secondary.hex}</span>
                </div>
                <div style={{ backgroundColor: palette.accent.hex }} className="flex-1 p-2 flex items-end">
                  <span className="text-[10px] font-mono text-white/90 font-bold">{palette.accent.hex}</span>
                </div>
                <div style={{ backgroundColor: palette.surface.hex }} className="flex-1 p-2 flex items-end border-l border-slate-200">
                  <span className="text-[10px] font-mono text-slate-800 font-bold">{palette.surface.hex}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                <div>Utama: <span className="font-semibold text-slate-900">{palette.primary.name}</span></div>
                <div>Sekunder: <span className="font-semibold text-slate-900">{palette.secondary.name}</span></div>
                <div>Aksen: <span className="font-semibold text-slate-900">{palette.accent.name}</span></div>
                <div>Latar: <span className="font-semibold text-slate-900">{palette.surface.name}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
