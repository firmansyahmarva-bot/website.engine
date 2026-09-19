'use client';

import { useState, useMemo } from 'react';
import {
  AtSign,
  Copy,
  Check,
  Smartphone,
  ExternalLink,
  MessageCircle,
  Link as LinkIcon,
  Sparkles,
  RefreshCw,
  Plus,
  Trash2,
} from 'lucide-react';

interface CustomLink {
  title: string;
  url: string;
}

export default function BioLinkGenerator() {
  const [brandName, setBrandName] = useState('Studio Kreatif Solusindo');
  const [category, setCategory] = useState('Jasa Pembuatan Website & Digital Agency');
  const [bioText, setBioText] = useState('🚀 Membantu bisnis go-digital dengan website modern & cepat\n⭐ 100+ Klien Puas Se-Indonesia\n👇 Konsultasi gratis via WhatsApp:');
  const [waPhone, setWaPhone] = useState('081234567890');
  const [waMessage, setWaMessage] = useState('Halo admin, saya ingin konsultasi dari Instagram.');

  const [links, setLinks] = useState<CustomLink[]>([
    { title: '🌐 Website Resmi & Portofolio', url: 'https://jasawebsite.net' },
    { title: '📦 Lihat Paket Website Siap Pakai', url: 'https://jasawebsite.net/website-packages' },
    { title: '🎁 Dapatkan Audit SEO Gratis', url: 'https://jasawebsite.net/audit-gratis' },
  ]);

  const [copied, setCopied] = useState<string | null>(null);

  // Generate clean WhatsApp link
  const waLink = useMemo(() => {
    const clean = waPhone.replace(/\D/g, '');
    const phone = clean.startsWith('0') ? '62' + clean.slice(1) : clean.startsWith('62') ? clean : '62' + clean;
    const msg = encodeURIComponent(waMessage.trim());
    return `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  }, [waPhone, waMessage]);

  // Formatted Instagram Bio text block for 1-click copy
  const fullBioText = useMemo(() => {
    let text = `${brandName}\n${category}\n\n${bioText}\n\n📲 Chat WhatsApp:\n${waLink}`;
    if (links.length > 0) {
      text += '\n\n🔗 Tautan Penting:';
      links.forEach((l) => {
        if (l.title && l.url) {
          text += `\n• ${l.title}: ${l.url}`;
        }
      });
    }
    return text;
  }, [brandName, category, bioText, waLink, links]);

  const handleCopy = (txt: string, key: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const updateLink = (index: number, field: 'title' | 'url', val: string) => {
    const next = [...links];
    next[index][field] = val;
    setLinks(next);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Input Form */}
      <div className="lg:col-span-7 space-y-6">
        {/* Brand & Bio Information */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            1. Profil Usaha / Brand
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Akun / Brand
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Contoh: Studio Kreatif"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Kategori / Niche
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Contoh: Jasa Pembuatan Website"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Teks Bio (Maks 150 Karakter)</label>
              <span className={`text-[11px] font-mono ${bioText.length > 150 ? 'text-red-600 font-bold' : 'text-slate-400'}`}>
                {bioText.length} / 150
              </span>
            </div>
            <textarea
              rows={3}
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              placeholder="Tulis ringkasan penawaran atau keunggulan usaha Anda..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* WhatsApp Quick Link */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            2. Link WhatsApp Utama
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                value={waPhone}
                onChange={(e) => setWaPhone(e.target.value)}
                placeholder="0812xxxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pesan Pembuka Otomatis
              </label>
              <input
                type="text"
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                placeholder="Halo, saya ingin tanya..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Up to 3 Custom Links */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            3. Tautan Tambahan (Maksimal 3 Tautan)
          </span>

          <div className="space-y-3">
            {links.map((link, idx) => (
              <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Tautan #{idx + 1}</span>
                  {links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setLinks(links.filter((_, i) => i !== idx))}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) => updateLink(idx, 'title', e.target.value)}
                    placeholder="Judul (mis: Website Resmi)"
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) => updateLink(idx, 'url', e.target.value)}
                    placeholder="https://..."
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>
            ))}

            {links.length < 3 && (
              <button
                type="button"
                onClick={() => setLinks([...links, { title: '', url: 'https://' }])}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-dashed border-blue-400 text-blue-600 hover:bg-blue-50 text-xs font-bold transition-colors w-full justify-center"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Tautan ({links.length}/3)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Instagram Phone Mockup & Output */}
      <div className="lg:col-span-5 space-y-6">
        {/* Smartphone Screen Mockup */}
        <div className="mx-auto max-w-sm rounded-[36px] bg-slate-900 p-3.5 shadow-2xl border-4 border-slate-800">
          <div className="rounded-[28px] bg-white p-5 text-slate-900 space-y-4">
            {/* Top Bar / Profile Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-slate-800 text-base">
                  {brandName.charAt(0) || 'B'}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-extrabold text-sm truncate">{brandName}</h5>
                <p className="text-[11px] text-slate-500 truncate">{category}</p>
                <span className="inline-block mt-0.5 px-2 py-0.5 bg-slate-100 rounded text-[10px] font-semibold text-slate-600">
                  Profil Bisnis
                </span>
              </div>
            </div>

            {/* Bio Body Text */}
            <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed border-t border-b border-slate-100 py-3">
              {bioText}
            </div>

            {/* Interactive Link Buttons inside Mockup */}
            <div className="space-y-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp Sekarang</span>
              </a>

              {links.map(
                (l, idx) =>
                  l.title && (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
                    >
                      <span className="truncate">{l.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Copy Text Block Button */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => handleCopy(fullBioText, 'all')}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            {copied === 'all' ? (
              <>
                <Check className="w-4 h-4" />
                <span>Teks Bio & Link Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Seluruh Teks Bio Instagram</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleCopy(waLink, 'wa')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded-2xl text-xs font-semibold transition-all"
          >
            {copied === 'wa' ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link WhatsApp Disalin!</span>
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Salin URL Link WhatsApp Saja</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
