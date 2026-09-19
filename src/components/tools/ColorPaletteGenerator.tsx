'use client';

import { useState, useMemo } from 'react';
import {
  Palette,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Layers,
  Code,
  ArrowRight,
} from 'lucide-react';

interface PaletteColor {
  role: string;
  hex: string;
  rgb: string;
  desc: string;
}

// Color math helpers (HEX <-> HSL)
function hexToHsl(hex: string): [number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  h = (h % 360 + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  const toHex = (val: number) => {
    const hex = Math.round((val + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToRgb(hex: string): string {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

const PRESET_COLORS = [
  { name: 'Tech Blue', hex: '#2563eb' },
  { name: 'Emerald Growth', hex: '#059669' },
  { name: 'Royal Violet', hex: '#7c3aed' },
  { name: 'Warm Amber', hex: '#d97706' },
  { name: 'Modern Rose', hex: '#e11d48' },
  { name: 'Corporate Navy', hex: '#0f172a' },
];

export default function ColorPaletteGenerator() {
  const [baseHex, setBaseHex] = useState<string>('#2563eb');
  const [harmony, setHarmony] = useState<'analogous' | 'complementary' | 'triadic' | 'monochromatic'>('analogous');
  const [copied, setCopied] = useState<string | null>(null);

  const palette = useMemo<PaletteColor[]>(() => {
    const [h, s, l] = hexToHsl(baseHex);

    let c1 = baseHex; // Primary Dominant
    let c2 = '';      // Secondary
    let c3 = '';      // Accent / CTA
    let c4 = '';      // Neutral Light (Background)
    let c5 = '';      // Neutral Dark (Text & Dark elements)

    switch (harmony) {
      case 'complementary':
        c2 = hslToHex(h, Math.max(s - 15, 20), Math.min(l + 15, 80));
        c3 = hslToHex(h + 180, s, l); // exact opposite
        c4 = hslToHex(h + 180, 25, 96);
        c5 = hslToHex(h, 30, 12);
        break;

      case 'triadic':
        c2 = hslToHex(h + 120, s, Math.min(l + 5, 80));
        c3 = hslToHex(h + 240, s, Math.max(l - 5, 45));
        c4 = hslToHex(h, 20, 96);
        c5 = hslToHex(h + 240, 25, 12);
        break;

      case 'monochromatic':
        c2 = hslToHex(h, s, Math.min(l + 25, 85));
        c3 = hslToHex(h, Math.min(s + 20, 100), Math.max(l - 20, 30));
        c4 = hslToHex(h, 15, 97);
        c5 = hslToHex(h, 25, 15);
        break;

      case 'analogous':
      default:
        c2 = hslToHex(h + 30, s, Math.min(l + 10, 80));
        c3 = hslToHex(h - 35, Math.min(s + 15, 100), l);
        c4 = hslToHex(h + 30, 20, 96);
        c5 = hslToHex(h, 30, 12);
        break;
    }

    return [
      { role: 'Primary (Brand)', hex: c1, rgb: hexToRgb(c1), desc: 'Tombol utama, header brand, logo' },
      { role: 'Secondary (Harmoni)', hex: c2, rgb: hexToRgb(c2), desc: 'Kartu pendukung, border aktif, tag' },
      { role: 'Accent (CTA / Highlight)', hex: c3, rgb: hexToRgb(c3), desc: 'Badge promo, tombol aksi penawaran' },
      { role: 'Neutral Light', hex: c4, rgb: hexToRgb(c4), desc: 'Latar belakang section, card surface' },
      { role: 'Neutral Dark', hex: c5, rgb: hexToRgb(c5), desc: 'Warna teks utama, footer, navbar' },
    ];
  }, [baseHex, harmony]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const cssVariables = `:root {
  --primary: ${palette[0].hex};
  --secondary: ${palette[1].hex};
  --accent: ${palette[2].hex};
  --background: ${palette[3].hex};
  --foreground: ${palette[4].hex};
}`;

  return (
    <div className="space-y-8">
      {/* Configuration Header Bar */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Base Color Picker */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Pilih Warna Dasar (Base Hex)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={baseHex}
                onChange={(e) => setBaseHex(e.target.value)}
                className="w-12 h-12 rounded-2xl cursor-pointer border border-slate-200 shadow-sm"
              />
              <input
                type="text"
                value={baseHex}
                onChange={(e) => setBaseHex(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white font-mono text-sm uppercase text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none w-36"
              />
              <div className="flex gap-1.5 flex-wrap">
                {PRESET_COLORS.map((p) => (
                  <button
                    key={p.hex}
                    type="button"
                    title={p.name}
                    onClick={() => setBaseHex(p.hex)}
                    style={{ backgroundColor: p.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${
                      baseHex.toLowerCase() === p.hex.toLowerCase()
                        ? 'border-white ring-2 ring-blue-500 scale-110'
                        : 'border-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Harmony Mode Selector */}
          <div className="md:col-span-7 space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Skema Harmoni Warna (Color Harmony)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'analogous', label: 'Harmonis (Analogous)' },
                { id: 'complementary', label: 'Kontras (Complement)' },
                { id: 'triadic', label: 'Triadic (3 Sudut)' },
                { id: 'monochromatic', label: 'Gradasi (Monochrome)' },
              ].map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setHarmony(h.id as typeof harmony)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                    harmony === h.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5-Color Swatch Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {palette.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Color Swatch Bar */}
            <div
              className="h-28 w-full transition-transform relative group flex items-end justify-end p-2.5"
              style={{ backgroundColor: item.hex }}
            >
              <button
                type="button"
                onClick={() => handleCopy(item.hex, item.role)}
                className="px-2 py-1 bg-black/40 hover:bg-black/60 text-white rounded-lg text-[10px] font-bold backdrop-blur-sm transition-all"
              >
                {copied === item.role ? 'Tersalin!' : 'Salin Hex'}
              </button>
            </div>

            {/* Color Details */}
            <div className="p-4 space-y-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                {item.role}
              </span>
              <p className="font-mono text-base font-black text-slate-900 uppercase">
                {item.hex}
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                rgb({item.rgb})
              </p>
              <p className="text-xs text-slate-600 pt-1 leading-relaxed border-t border-slate-100 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Website UI Preview using Generated Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Mockup Card */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Simulasi Tampilan Pada Desain Website (Live Preview)
          </span>

          <div
            className="p-8 rounded-3xl border shadow-lg transition-all"
            style={{
              backgroundColor: palette[3].hex, // Neutral Light
              color: palette[4].hex, // Neutral Dark
              borderColor: palette[1].hex + '40',
            }}
          >
            {/* Mini Navbar */}
            <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: palette[1].hex + '30' }}>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
                  style={{ backgroundColor: palette[0].hex }}
                >
                  JW
                </div>
                <span className="font-extrabold text-sm" style={{ color: palette[4].hex }}>
                  BrandStudio
                </span>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: palette[1].hex + '25',
                  color: palette[0].hex,
                }}
              >
                Katalog 2026
              </span>
            </div>

            {/* Mini Hero Body */}
            <div className="space-y-4">
              <h4 className="text-2xl font-black leading-tight" style={{ color: palette[4].hex }}>
                Tingkatkan Reputasi Bisnis Anda Bersama Kami
              </h4>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: palette[4].hex }}>
                Solusi digital terintegrasi untuk perusahaan yang mengutamakan estetika modern, konversi penjualan tinggi, dan performa website kilat.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                  style={{ backgroundColor: palette[0].hex }}
                >
                  Mulai Proyek
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold transition-transform hover:scale-105"
                  style={{
                    backgroundColor: palette[2].hex,
                    color: '#ffffff',
                  }}
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Export Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Ekspor Kode CSS
            </span>
            <button
              type="button"
              onClick={() => handleCopy(cssVariables, 'css')}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              {copied === 'css' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Variabel CSS</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-300 font-mono text-xs">
            <pre className="overflow-x-auto">{cssVariables}</pre>
          </div>
          <p className="text-[11px] text-slate-500">
            Dapat langsung disematkan ke berkas `globals.css` atau Tailwind config proyek web Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
