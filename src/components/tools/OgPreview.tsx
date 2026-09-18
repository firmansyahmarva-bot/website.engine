'use client';

import { useState } from 'react';
import { Share2, Copy, Check, MessageSquare, Sparkles, Image as ImageIcon, Globe } from 'lucide-react';

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

type PlatformType = 'whatsapp' | 'facebook' | 'twitter' | 'linkedin';

const SAMPLE_IMAGES = [
  { label: 'Kantor Modern', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80' },
  { label: 'Teknologi & Koding', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80' },
  { label: 'Produk E-commerce', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&h=630&q=80' },
  { label: 'Kuliner & Kafe', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&h=630&q=80' },
];

export default function OgPreview() {
  const [platform, setPlatform] = useState<PlatformType>('whatsapp');
  const [title, setTitle] = useState('JasaWebsite | Jasa Pembuatan Website Profesional & Siap Pakai');
  const [description, setDescription] = useState(
    'Layanan pembuatan website bisnis dengan loading super cepat (<1s), desain elegan teruji, skor PageSpeed 100/100, dan integrasi WhatsApp konversi tinggi.'
  );
  const [url, setUrl] = useState('https://jasawebsite.net');
  const [siteName, setSiteName] = useState('JasaWebsite');
  const [imageUrl, setImageUrl] = useState(SAMPLE_IMAGES[1].url);
  const [copied, setCopied] = useState(false);

  const domain = new URL(url || 'https://domain.com').hostname;

  const generatedTags = `<!-- Open Graph / Social Sharing Meta Tags -->
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${siteName}">
<meta property="og:type" content="website">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${imageUrl}">`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedTags);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Platform Switcher */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => setPlatform('whatsapp')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            platform === 'whatsapp' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </button>

        <button
          type="button"
          onClick={() => setPlatform('facebook')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            platform === 'facebook' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FacebookIcon className="w-4 h-4" />
          <span>Facebook Feed</span>
        </button>

        <button
          type="button"
          onClick={() => setPlatform('twitter')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            platform === 'twitter' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <TwitterIcon className="w-4 h-4" />
          <span>Twitter / X</span>
        </button>

        <button
          type="button"
          onClick={() => setPlatform('linkedin')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            platform === 'linkedin' ? 'bg-sky-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>LinkedIn Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-5 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Share2 className="w-4 h-4 text-blue-600" />
            <span>Konten Kartu Tautan</span>
          </h3>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="og-title" className="text-slate-700">
                Judul Kartu (og:title)
              </label>
              <span className="font-mono text-[11px] text-slate-400">{title.length} char</span>
            </div>
            <input
              id="og-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="og-desc" className="text-slate-700">
                Deskripsi (og:description)
              </label>
              <span className="font-mono text-[11px] text-slate-400">{description.length} char</span>
            </div>
            <textarea
              id="og-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div>
            <label htmlFor="og-url" className="block text-xs font-semibold text-slate-700 mb-1">
              Halaman Tujuan (og:url)
            </label>
            <input
              id="og-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="og-image-url" className="block text-xs font-semibold text-slate-700 mb-1">
              URL Gambar Pratinjau (og:image)
            </label>
            <input
              id="og-image-url"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />

            {/* Sample Image Presets */}
            <div className="flex flex-wrap gap-1.5 items-center pt-1">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Preset:</span>
              {SAMPLE_IMAGES.map((img) => (
                <button
                  key={img.label}
                  type="button"
                  onClick={() => setImageUrl(img.url)}
                  className="text-[11px] px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copy Meta Tags Button */}
          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tag Open Graph Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Tag Open Graph</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Live Simulation Card */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>
              Simulasi Pratinjau:{' '}
              <strong className="text-slate-900 capitalize">{platform}</strong>
            </span>
            <span className="text-[11px] text-slate-400">Rasio Gambar Standar 1200 x 630 px</span>
          </div>

          {/* 1. WHATSAPP MOCKUP */}
          {platform === 'whatsapp' && (
            <div className="bg-[#efeae2] p-6 rounded-2xl border border-slate-300 shadow-inner flex justify-center">
              <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden text-slate-900 text-left border border-slate-200">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[1.91/1] object-cover bg-slate-200"
                />
                <div className="p-3 bg-[#f0f2f5] border-t border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">{domain}</span>
                  <div className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{title}</div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{description}</p>
                </div>
                <div className="p-3 bg-white flex items-center justify-between text-xs text-slate-500">
                  <span className="text-emerald-700 font-medium truncate max-w-xs">{url}</span>
                  <span className="text-[10px] text-slate-400">12:30</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. FACEBOOK MOCKUP */}
          {platform === 'facebook' && (
            <div className="bg-[#f0f2f5] p-6 rounded-2xl border border-slate-300 flex justify-center">
              <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden">
                <div className="p-3.5 flex items-center gap-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                    FB
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Akun Bisnis Facebook</div>
                    <div className="text-[10px] text-slate-400">Baru saja • 🌐 Publik</div>
                  </div>
                </div>
                <p className="px-3.5 py-2 text-xs text-slate-800">
                  Kunjungi website resmi kami untuk informasi layanan dan penawaran terbaru:
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[1.91/1] object-cover bg-slate-100"
                />
                <div className="p-3 bg-[#f0f2f5] space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide block">{domain}</span>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          )}

          {/* 3. TWITTER / X MOCKUP */}
          {platform === 'twitter' && (
            <div className="bg-black p-6 rounded-2xl border border-slate-800 text-white flex justify-center">
              <div className="max-w-md w-full rounded-2xl border border-slate-800 bg-[#16181c] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[1.91/1] object-cover bg-slate-900"
                />
                <div className="p-3 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block">{domain}</span>
                  <div className="text-sm font-bold text-white line-clamp-1">{title}</div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. LINKEDIN MOCKUP */}
          {platform === 'linkedin' && (
            <div className="bg-[#f3f2ef] p-6 rounded-2xl border border-slate-300 flex justify-center">
              <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden">
                <div className="p-3 flex items-center gap-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-sky-700 text-white font-bold flex items-center justify-center text-sm">
                    IN
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Perusahaan Indonesia</div>
                    <div className="text-[10px] text-slate-400">12.500 Pengikut • 1j</div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[1.91/1] object-cover bg-slate-100"
                />
                <div className="p-3.5 bg-[#f3f6f8] space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">{title}</h4>
                  <span className="text-[11px] font-mono text-slate-500 block">{domain} • Waktu baca 2 menit</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
