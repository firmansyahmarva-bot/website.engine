'use client';

import { useState } from 'react';
import { Eye, ArrowLeftRight, Check, X, Copy, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

// Convert HEX to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return { r, g, b };
  } else if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return { r, g, b };
  }
  return null;
}

// Calculate relative luminance per WCAG 2.1
function getRelativeLuminance(rgb: { r: number; g: number; b: number }): number {
  const [rs, gs, bs] = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio (1 to 21)
function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1) || { r: 0, g: 0, b: 0 };
  const rgb2 = hexToRgb(hex2) || { r: 255, g: 255, b: 255 };

  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

const COLOR_PRESETS = [
  { name: 'Putih di Biru Navy', text: '#ffffff', bg: '#1e3a8a' },
  { name: 'Hitam di Putih Bersih', text: '#0f172a', bg: '#ffffff' },
  { name: 'Kuning di Hitam Kontras', text: '#fde047', bg: '#09090b' },
  { name: 'Hijau Emerald di Off-White', text: '#14532d', bg: '#f8fafc' },
  { name: 'Abu-Abu Lemah (Gagal WCAG)', text: '#94a3b8', bg: '#ffffff' },
];

export default function ContrastChecker() {
  const [textColor, setTextColor] = useState('#0f172a');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);

  const ratio = getContrastRatio(textColor, bgColor);

  // Criteria thresholds
  const passesAANormal = ratio >= 4.5;
  const passesAALarge = ratio >= 3.0;
  const passesAAANormal = ratio >= 7.0;
  const passesAAALarge = ratio >= 4.5;
  const passesUI = ratio >= 3.0;

  const handleSwap = () => {
    const temp = textColor;
    setTextColor(bgColor);
    setBgColor(temp);
  };

  const handleCopyCss = () => {
    const css = `/* WCAG Contrast Ratio: ${ratio}:1 */
color: ${textColor};
background-color: ${bgColor};`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Preset Palettes */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Preset Palet:
        </span>
        {COLOR_PRESETS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => {
              setTextColor(p.text);
              setBgColor(p.bg);
            }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Color Controls & WCAG Matrix */}
        <div className="lg:col-span-6 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <span>Pilihan Warna & Rasio Kontras</span>
          </h3>

          {/* Color pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Text Color */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <label htmlFor="text-color-hex" className="block text-xs font-semibold text-slate-700">
                Warna Teks (Foreground)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-slate-300 cursor-pointer p-0.5 bg-white"
                />
                <input
                  id="text-color-hex"
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase font-semibold bg-white"
                />
              </div>
            </div>

            {/* Background Color */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <label htmlFor="bg-color-hex" className="block text-xs font-semibold text-slate-700">
                Warna Latar (Background)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-slate-300 cursor-pointer p-0.5 bg-white"
                />
                <input
                  id="bg-color-hex"
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase font-semibold bg-white"
                />
              </div>
            </div>
          </div>

          {/* Swap & Actions */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={handleSwap}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Tukar Posisi Warna</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCss}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Kode CSS'}</span>
            </button>
          </div>

          {/* WCAG 2.1 Compliance Matrix */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 block">
              Tingkat Kepatuhan Standar Aksesibilitas WCAG 2.1:
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-800">WCAG AA - Teks Biasa (Normal Text)</span>
                  <span className="block text-[11px] text-slate-500">Minimal rasio 4.5:1 (di bawah 18pt)</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    passesAANormal ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {passesAANormal ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                  <span>{passesAANormal ? 'LULUS (PASS)' : 'GAGAL (FAIL)'}</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-800">WCAG AA - Teks Besar (Large Text)</span>
                  <span className="block text-[11px] text-slate-500">Minimal rasio 3.0:1 (di atas 18pt / 14pt bold)</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    passesAALarge ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {passesAALarge ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                  <span>{passesAALarge ? 'LULUS (PASS)' : 'GAGAL (FAIL)'}</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-800">WCAG AAA - Tingkat Tertinggi (Enhanced)</span>
                  <span className="block text-[11px] text-slate-500">Minimal rasio 7.0:1 untuk teks biasa</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    passesAAANormal ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {passesAAANormal ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                  <span>{passesAAANormal ? 'LULUS (PASS)' : 'GAGAL (FAIL)'}</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-800">Komponen UI & Ikon Grafis</span>
                  <span className="block text-[11px] text-slate-500">Minimal rasio 3.0:1 untuk tombol & garis batas</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    passesUI ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {passesUI ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                  <span>{passesUI ? 'LULUS (PASS)' : 'GAGAL (FAIL)'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contrast Score Card & Live Component Simulation */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Ratio Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Rasio Kontras Terhitung
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1 text-white">
                {ratio} <span className="text-2xl font-normal text-slate-400">: 1</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                {passesAANormal
                  ? 'Kombinasi warna ini sangat nyaman dibaca oleh mata normal maupun pengguna dengan kacamata.'
                  : 'Peringatan: Warna teks terlalu redup di atas latar ini. Berisiko menyulitkan pembaca.'}
              </p>
            </div>

            <div className="text-right shrink-0">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border-2 ${
                  passesAANormal
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                }`}
              >
                {passesAANormal ? 'AA' : 'FAIL'}
              </div>
            </div>
          </div>

          {/* Live UI Simulation using exact colors */}
          <div
            style={{ backgroundColor: bgColor, color: textColor }}
            className="p-8 rounded-2xl border border-slate-300 shadow-sm space-y-5 transition-colors duration-200"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider opacity-75">
                Pratinjau Komponen Langsung
              </span>
              <h2 className="text-2xl font-bold mt-1 leading-tight">
                Contoh Judul Artikel Besar (Heading)
              </h2>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              Ini adalah contoh paragraf teks berukuran standar 16px. Apabila teks ini terlihat pudar atau sulit
              dibaca, maka pengunjung website Anda akan cepat lelah dan berpotensi menutup halaman sebelum
              melakukan transaksi.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                style={{ backgroundColor: textColor, color: bgColor }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-opacity hover:opacity-90"
              >
                Tombol Utama (CTA)
              </button>

              <button
                type="button"
                style={{ borderColor: textColor, color: textColor }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs border transition-opacity hover:opacity-80"
              >
                Tombol Sekunder
              </button>
            </div>

            <div
              style={{ borderColor: textColor }}
              className="p-3.5 rounded-xl border border-dashed text-xs opacity-85"
            >
              Kotak informasi notifikasi (Alert Card) dengan warna bingkai dan teks yang identik.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
