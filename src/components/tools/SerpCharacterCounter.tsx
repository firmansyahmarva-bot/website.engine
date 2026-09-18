'use client';

import { useState } from 'react';
import { Search, Monitor, Smartphone, CheckCircle2, AlertCircle, Copy, Check, Sparkles, Globe } from 'lucide-react';

// Approximate Arial 20px character widths in Google SERP title
function calculateTitlePixelWidth(text: string): number {
  let width = 0;
  for (const char of text) {
    if ('WM'.includes(char)) width += 17;
    else if ('Iil1|\':;.,!'.includes(char)) width += 5;
    else if ('ftrj'.includes(char)) width += 7;
    else if ('ABCDEFGHJKLNOPQRSTUVXYZ'.includes(char)) width += 13;
    else if ('mw'.includes(char)) width += 14;
    else if (char === ' ') width += 5;
    else width += 9.5; // standard lowercase
  }
  return Math.round(width);
}

// Approximate Arial 14px character widths in Google SERP description
function calculateDescPixelWidth(text: string): number {
  let width = 0;
  for (const char of text) {
    if ('WM'.includes(char)) width += 12;
    else if ('Iil1|\':;.,!'.includes(char)) width += 3.5;
    else if ('ABCDEFGHJKLNOPQRSTUVXYZ'.includes(char)) width += 9;
    else if ('mw'.includes(char)) width += 10;
    else if (char === ' ') width += 3.8;
    else width += 7;
  }
  return Math.round(width);
}

export default function SerpCharacterCounter() {
  const [title, setTitle] = useState(
    'Jasa Pembuatan Website Profesional & Siap Pakai | JasaWebsite'
  );
  const [description, setDescription] = useState(
    'Layanan pembuatan website profesional terstandarisasi untuk korporat, UMKM, dan bisnis. Desain modern, loading cepat, SEO-friendly, dan siap mendatangkan penjualan.'
  );
  const [keyword, setKeyword] = useState('jasa pembuatan website');
  const [url, setUrl] = useState('https://jasawebsite.net/website-packages');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Calculations
  const titleCharCount = title.length;
  const titlePixelWidth = calculateTitlePixelWidth(title);
  const maxTitlePixels = device === 'desktop' ? 600 : 570;

  const descCharCount = description.length;
  const descPixelWidth = calculateDescPixelWidth(description);
  const maxDescPixels = device === 'desktop' ? 960 : 750;

  // Truncated display text
  const isTitleTruncated = titlePixelWidth > maxTitlePixels;
  const isDescTruncated = descPixelWidth > maxDescPixels;

  // Keyword checks
  const lowerKeyword = keyword.trim().toLowerCase();
  const hasKeywordInTitle = lowerKeyword && title.toLowerCase().includes(lowerKeyword);
  const hasKeywordInDesc = lowerKeyword && description.toLowerCase().includes(lowerKeyword);
  const hasKeywordInUrl = lowerKeyword && url.toLowerCase().includes(lowerKeyword.replace(/\s+/g, '-'));

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Device Mode Switcher */}
      <div className="flex items-center justify-between p-2 bg-slate-100 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              device === 'desktop' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Google Desktop SERP</span>
          </button>

          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              device === 'mobile' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Google Mobile SERP</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 hidden sm:inline-block pr-2">
          Batas Piksel: <strong>{maxTitlePixels}px</strong> (Title) • <strong>{maxDescPixels}px</strong> (Desc)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Inputs */}
        <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-600" />
            <span>Input Konten Snippet SEO</span>
          </h3>

          {/* Title Input & Pixel Meter */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="serp-title" className="text-slate-700">
                SEO Title
              </label>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span
                  className={
                    titleCharCount >= 50 && titleCharCount <= 60
                      ? 'text-emerald-600 font-bold'
                      : titleCharCount > 60
                      ? 'text-rose-600 font-bold'
                      : 'text-amber-600'
                  }
                >
                  {titleCharCount}/60 chars
                </span>
                <span>•</span>
                <span
                  className={
                    titlePixelWidth <= maxTitlePixels
                      ? 'text-emerald-600 font-bold'
                      : 'text-rose-600 font-bold'
                  }
                >
                  {titlePixelWidth}/{maxTitlePixels} px
                </span>
              </div>
            </div>

            <div className="relative">
              <input
                id="serp-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Pixel progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
              <div
                className={`h-full transition-all duration-300 ${
                  titlePixelWidth <= maxTitlePixels * 0.95
                    ? 'bg-emerald-500'
                    : titlePixelWidth <= maxTitlePixels
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
                style={{ width: `${Math.min(100, (titlePixelWidth / maxTitlePixels) * 100)}%` }}
              />
            </div>
          </div>

          {/* Description Input & Pixel Meter */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="serp-desc" className="text-slate-700">
                Meta Description
              </label>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span
                  className={
                    descCharCount >= 140 && descCharCount <= 160
                      ? 'text-emerald-600 font-bold'
                      : descCharCount > 160
                      ? 'text-rose-600 font-bold'
                      : 'text-amber-600'
                  }
                >
                  {descCharCount}/160 chars
                </span>
                <span>•</span>
                <span
                  className={
                    descPixelWidth <= maxDescPixels
                      ? 'text-emerald-600 font-bold'
                      : 'text-rose-600 font-bold'
                  }
                >
                  {descPixelWidth}/{maxDescPixels} px
                </span>
              </div>
            </div>

            <textarea
              id="serp-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none leading-relaxed"
            />

            {/* Pixel progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
              <div
                className={`h-full transition-all duration-300 ${
                  descPixelWidth <= maxDescPixels * 0.95
                    ? 'bg-emerald-500'
                    : descPixelWidth <= maxDescPixels
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
                style={{ width: `${Math.min(100, (descPixelWidth / maxDescPixels) * 100)}%` }}
              />
            </div>
          </div>

          {/* Target Focus Keyword & URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="focus-kw" className="block text-xs font-semibold text-slate-700 mb-1">
                Kata Kunci Fokus (Target Keyword)
              </label>
              <input
                id="focus-kw"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Contoh: jasa website"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="page-url" className="block text-xs font-semibold text-slate-700 mb-1">
                URL / Slug Halaman
              </label>
              <input
                id="page-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Keyword SEO Checklist */}
          {keyword && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <span className="font-semibold text-slate-700 block">Checklist Penempatan Kata Kunci:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex items-center gap-1.5">
                  {hasKeywordInTitle ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                  )}
                  <span className={hasKeywordInTitle ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Ada di Title
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {hasKeywordInDesc ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                  )}
                  <span className={hasKeywordInDesc ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Ada di Deskripsi
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {hasKeywordInUrl ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                  )}
                  <span className={hasKeywordInUrl ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Ada di URL Slug
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Google SERP Mockup */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>
              Simulasi Google SERP:{' '}
              <strong className="text-slate-900 capitalize">{device}</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleCopy(title, 'title')}
                className="text-[11px] text-blue-600 hover:underline font-medium"
              >
                {copiedField === 'title' ? 'Tersalin!' : 'Salin Title'}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handleCopy(description, 'desc')}
                className="text-[11px] text-blue-600 hover:underline font-medium"
              >
                {copiedField === 'desc' ? 'Tersalin!' : 'Salin Desc'}
              </button>
            </div>
          </div>

          {/* The Google Card Simulation */}
          <div
            className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm font-sans space-y-2 ${
              device === 'mobile' ? 'max-w-sm mx-auto' : ''
            }`}
          >
            {/* Breadcrumb row */}
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-medium text-slate-900 truncate max-w-xs">
                  {new URL(url || 'https://jasawebsite.net').hostname}
                </div>
                <div className="text-[11px] text-slate-500 truncate max-w-xs">{url}</div>
              </div>
            </div>

            {/* Title link */}
            <h4
              className={`text-blue-800 hover:underline cursor-pointer leading-snug pt-1 ${
                device === 'desktop' ? 'text-lg font-medium' : 'text-base font-semibold'
              }`}
            >
              {title}
              {isTitleTruncated && <span className="text-slate-400 font-bold"> ...</span>}
            </h4>

            {/* Description Snippet */}
            <p className="text-xs text-slate-600 leading-relaxed">
              {description}
              {isDescTruncated && <span className="text-slate-400 font-bold"> ...</span>}
            </p>
          </div>

          {/* Validation Warnings */}
          <div className="space-y-2">
            {isTitleTruncated && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Peringatan Lebar Judul:</strong> Judul melebihi batas {maxTitlePixels}px (saat ini{' '}
                  {titlePixelWidth}px). Sebagian kata di akhir judul akan terpotong tanda (...) di Google.
                </div>
              </div>
            )}

            {isDescTruncated && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Peringatan Deskripsi:</strong> Deskripsi melebihi {maxDescPixels}px (saat ini{' '}
                  {descPixelWidth}px). Persingkat kalimat agar pesan Call-to-Action tidak terpotong.
                </div>
              </div>
            )}

            {!isTitleTruncated && !isDescTruncated && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Sempurna!</strong> Panjang judul dan deskripsi berada dalam batas aman Google SERP.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
