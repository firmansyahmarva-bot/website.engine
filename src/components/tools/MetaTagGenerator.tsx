'use client';

import { useState } from 'react';
import { Copy, Check, Eye, Code, Sparkles, ExternalLink, Globe, Smartphone, Monitor } from 'lucide-react';

interface MetaData {
  title: string;
  description: string;
  url: string;
  siteName: string;
  imageUrl: string;
  keywords: string;
  author: string;
  ogType: 'website' | 'article';
  twitterCard: 'summary_large_image' | 'summary';
  robotsIndex: boolean;
  robotsFollow: boolean;
}

const PRESETS: { label: string; data: Partial<MetaData> }[] = [
  {
    label: 'Company Profile',
    data: {
      title: 'Solusi Jasa Konsultan Bisnis & Manajemen Terpercaya di Indonesia',
      description: 'Layanan konsultasi manajemen bisnis strategis untuk akselerasi pertumbuhan perusahaan dan UMKM. Dapatkan sesi konsultasi gratis sekarang.',
      url: 'https://perusahaananda.com',
      siteName: 'KonsultanBisnis.id',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80',
      keywords: 'konsultan bisnis, manajemen perusahaan, pertumbuhan bisnis, b2b indonesia',
      author: 'PT Sukses Bersama',
      ogType: 'website',
    },
  },
  {
    label: 'Toko Online / E-commerce',
    data: {
      title: 'Toko Sepatu Kulit Asli Handmade Kualitas Premium | Garansi 1 Tahun',
      description: 'Koleksi sepatu kulit pria dan wanita berbahan kulit sapi asli. Nyaman dipakai, tahan lama, gratis ongkir ke seluruh kota di Indonesia.',
      url: 'https://tokosepatukulit.id/produk',
      siteName: 'SepatuKulitID',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&h=630&q=80',
      keywords: 'sepatu kulit asli, handmade leather shoes, sepatu pria kasual, sepatu pantofel',
      author: 'SepatuKulit Official',
      ogType: 'website',
    },
  },
  {
    label: 'Artikel Blog / Edukasi',
    data: {
      title: '7 Panduan Praktis Meningkatkan Kecepatan Website Bisnis Anda',
      description: 'Pelajari langkah konkret mengoptimasi Core Web Vitals, kompresi gambar WebP, dan arsitektur Next.js agar website Anda terbuka dalam 1 detik.',
      url: 'https://jasawebsite.net/panduan/core-web-vitals',
      siteName: 'JasaWebsite Insights',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80',
      keywords: 'kecepatan website, optimasi core web vitals, panduan ssg, seo teknis',
      author: 'Tim Editorial Teknis',
      ogType: 'article',
    },
  },
];

export default function MetaTagGenerator() {
  const [data, setData] = useState<MetaData>({
    title: 'Jasa Pembuatan Website Profesional & Siap Pakai | JasaWebsite',
    description:
      'Layanan pembuatan website profesional terstandarisasi untuk bisnis, UMKM, dan korporat. Desain modern, loading kilat, skor Core Web Vitals 100/100.',
    url: 'https://jasawebsite.net',
    siteName: 'JasaWebsite',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80',
    keywords: 'jasa pembuatan website, bikin web profesional, web designer indonesia',
    author: 'JasaWebsite Engineer Team',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    robotsIndex: true,
    robotsFollow: true,
  });

  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'nextjs'>('preview');
  const [copied, setCopied] = useState<string | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'google' | 'social'>('google');

  const titleLength = data.title.length;
  const descLength = data.description.length;

  const robotsContent = `${data.robotsIndex ? 'index' : 'noindex'}, ${data.robotsFollow ? 'follow' : 'nofollow'}`;

  const generatedHtml = `<!-- Primary Meta Tags -->
<title>${data.title}</title>
<meta name="title" content="${data.title}">
<meta name="description" content="${data.description}">
${data.keywords ? `<meta name="keywords" content="${data.keywords}">\n` : ''}${data.author ? `<meta name="author" content="${data.author}">\n` : ''}<meta name="robots" content="${robotsContent}">
<link rel="canonical" href="${data.url}">

<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="${data.ogType}">
<meta property="og:url" content="${data.url}">
<meta property="og:title" content="${data.title}">
<meta property="og:description" content="${data.description}">
<meta property="og:image" content="${data.imageUrl}">
<meta property="og:site_name" content="${data.siteName}">

<!-- Twitter / X -->
<meta name="twitter:card" content="${data.twitterCard}">
<meta name="twitter:url" content="${data.url}">
<meta name="twitter:title" content="${data.title}">
<meta name="twitter:description" content="${data.description}">
<meta name="twitter:image" content="${data.imageUrl}">`;

  const generatedNextJs = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${data.title.replace(/'/g, "\\'")}',
  description: '${data.description.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '${data.url}',
  },
  robots: {
    index: ${data.robotsIndex},
    follow: ${data.robotsFollow},
  },
  openGraph: {
    type: '${data.ogType}',
    url: '${data.url}',
    title: '${data.title.replace(/'/g, "\\'")}',
    description: '${data.description.replace(/'/g, "\\'")}',
    siteName: '${data.siteName.replace(/'/g, "\\'")}',
    images: [
      {
        url: '${data.imageUrl}',
        width: 1200,
        height: 630,
        alt: '${data.title.replace(/'/g, "\\'")}',
      },
    ],
  },
  twitter: {
    card: '${data.twitterCard}',
    title: '${data.title.replace(/'/g, "\\'")}',
    description: '${data.description.replace(/'/g, "\\'")}',
    images: ['${data.imageUrl}'],
  },
};`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Template Cepat:
        </span>
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => setData((prev) => ({ ...prev, ...preset.data }))}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Form Left, Preview/Code Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <span>Konfigurasi Tag Halaman</span>
          </h3>

          {/* Title */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="meta-title" className="text-slate-700">
                Meta Title <span className="text-rose-500">*</span>
              </label>
              <span
                className={`font-mono text-[11px] ${
                  titleLength >= 50 && titleLength <= 60
                    ? 'text-emerald-600 font-bold'
                    : titleLength > 60
                    ? 'text-rose-600 font-bold'
                    : 'text-amber-600'
                }`}
              >
                {titleLength}/60 karakter {titleLength >= 50 && titleLength <= 60 ? '✓ Ideal' : ''}
              </span>
            </div>
            <input
              id="meta-title"
              type="text"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Judul halaman yang menarik..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <p className="text-[11px] text-slate-400 mt-1">Disarankan 50–60 karakter agar tidak terpotong di Google SERP.</p>
          </div>

          {/* Description */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="meta-desc" className="text-slate-700">
                Meta Description <span className="text-rose-500">*</span>
              </label>
              <span
                className={`font-mono text-[11px] ${
                  descLength >= 140 && descLength <= 160
                    ? 'text-emerald-600 font-bold'
                    : descLength > 160
                    ? 'text-rose-600 font-bold'
                    : 'text-amber-600'
                }`}
              >
                {descLength}/160 karakter {descLength >= 140 && descLength <= 160 ? '✓ Ideal' : ''}
              </span>
            </div>
            <textarea
              id="meta-desc"
              rows={3}
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              placeholder="Rangkuman konten halaman yang memicu klik..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            <p className="text-[11px] text-slate-400 mt-1">Disarankan 140–160 karakter untuk deskripsi cuplikan Google.</p>
          </div>

          {/* URL & Site Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="meta-url" className="block text-xs font-semibold text-slate-700 mb-1">
                Canonical URL
              </label>
              <input
                id="meta-url"
                type="url"
                value={data.url}
                onChange={(e) => setData({ ...data, url: e.target.value })}
                placeholder="https://domain.com/halaman"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-xs"
              />
            </div>
            <div>
              <label htmlFor="meta-sitename" className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Website / Brand
              </label>
              <input
                id="meta-sitename"
                type="text"
                value={data.siteName}
                onChange={(e) => setData({ ...data, siteName: e.target.value })}
                placeholder="Brand Bisnis"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="meta-image" className="block text-xs font-semibold text-slate-700 mb-1">
              Open Graph Image URL (1200 x 630 px)
            </label>
            <input
              id="meta-image"
              type="url"
              value={data.imageUrl}
              onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
              placeholder="https://domain.com/images/og.jpg"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-xs"
            />
          </div>

          {/* Keywords & Author */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="meta-keywords" className="block text-xs font-semibold text-slate-700 mb-1">
                Keywords (Pisahkan Koma)
              </label>
              <input
                id="meta-keywords"
                type="text"
                value={data.keywords}
                onChange={(e) => setData({ ...data, keywords: e.target.value })}
                placeholder="bisnis, jasa, konsultasi"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="meta-author" className="block text-xs font-semibold text-slate-700 mb-1">
                Author / Penulis
              </label>
              <input
                id="meta-author"
                type="text"
                value={data.author}
                onChange={(e) => setData({ ...data, author: e.target.value })}
                placeholder="Nama Perusahaan / Penulis"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Options: OG Type, Twitter Card, Robots */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="meta-ogtype" className="block text-xs font-semibold text-slate-700 mb-1">
                Tipe Open Graph (og:type)
              </label>
              <select
                id="meta-ogtype"
                value={data.ogType}
                onChange={(e) => setData({ ...data, ogType: e.target.value as 'website' | 'article' })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="website">website (Halaman Umum)</option>
                <option value="article">article (Artikel / Postingan)</option>
              </select>
            </div>
            <div>
              <label htmlFor="meta-twcard" className="block text-xs font-semibold text-slate-700 mb-1">
                Twitter Card Format
              </label>
              <select
                id="meta-twcard"
                value={data.twitterCard}
                onChange={(e) =>
                  setData({ ...data, twitterCard: e.target.value as 'summary_large_image' | 'summary' })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="summary_large_image">summary_large_image (Gambar Lebar)</option>
                <option value="summary">summary (Thumbnail Kecil)</option>
              </select>
            </div>
          </div>

          {/* Robots Checkboxes */}
          <div className="pt-2 flex items-center gap-6 text-xs text-slate-700">
            <span className="font-semibold text-slate-600">Robots:</span>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={data.robotsIndex}
                onChange={(e) => setData({ ...data, robotsIndex: e.target.checked })}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>index (Boleh Masuk Google)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={data.robotsFollow}
                onChange={(e) => setData({ ...data, robotsFollow: e.target.checked })}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>follow (Ikuti Tautan)</span>
            </label>
          </div>
        </div>

        {/* Right Column: Output & Live Preview */}
        <div className="lg:col-span-6 space-y-4">
          {/* Top Bar Switcher */}
          <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('html')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'html'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>HTML Code</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('nextjs')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'nextjs'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next.js 16</span>
              </button>
            </div>

            {activeTab !== 'preview' && (
              <button
                type="button"
                onClick={() => handleCopy(activeTab === 'html' ? generatedHtml : generatedNextJs, activeTab)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                {copied === activeTab ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Kode</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Content Area */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              {/* Preview Mode Selector */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewDevice('google')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg border transition-colors ${
                    previewDevice === 'google'
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Google SERP
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice('social')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg border transition-colors ${
                    previewDevice === 'social'
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Social Card (Facebook / WhatsApp)
                </button>
              </div>

              {/* Google SERP Card */}
              {previewDevice === 'google' && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Simulasi Cuplikan Google Pencarian
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-800 font-sans">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-medium text-slate-900">{data.siteName || 'Website Platform'}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-sm">{data.url}</div>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg text-blue-800 hover:underline cursor-pointer font-medium leading-snug pt-1">
                    {data.title || 'Judul Halaman Belum Diisi'}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {data.description || 'Tambahkan meta deskripsi untuk melihat bagaimana Google menampilkan cuplikan konten Anda kepada jutaan pencari.'}
                  </p>
                </div>
              )}

              {/* Social Card Preview */}
              {previewDevice === 'social' && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 flex items-center justify-between">
                    <span>Pratinjau Kartu Sosial (1200x630)</span>
                    <span className="text-[11px] text-slate-400">Rasio 1.91:1</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80';
                    }}
                    className="w-full aspect-[1.91/1] object-cover bg-slate-100"
                  />
                  <div className="p-4 space-y-1.5 bg-slate-50 border-t border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      {new URL(data.url || 'https://domain.com').hostname}
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 line-clamp-1">{data.title}</h5>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{data.description}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'html' && (
            <div className="relative rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-400 border border-slate-800 overflow-x-auto max-h-[500px]">
              <pre className="whitespace-pre-wrap">{generatedHtml}</pre>
            </div>
          )}

          {activeTab === 'nextjs' && (
            <div className="relative rounded-2xl bg-slate-950 p-4 font-mono text-xs text-blue-300 border border-slate-800 overflow-x-auto max-h-[500px]">
              <pre className="whitespace-pre-wrap">{generatedNextJs}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
