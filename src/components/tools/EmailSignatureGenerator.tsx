'use client';

import { useState, useMemo, useRef } from 'react';
import {
  FileSignature,
  Copy,
  Check,
  Download,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  MapPin,
  Sparkles,
  Palette,
  Eye,
} from 'lucide-react';

export default function EmailSignatureGenerator() {
  const [name, setName] = useState('Firmansyah Pratama');
  const [title, setTitle] = useState('Chief Technology Officer & Co-Founder');
  const [company, setCompany] = useState('JasaWebsite Studio Indonesia');
  const [phone, setPhone] = useState('+62 812-3456-7890');
  const [email, setEmail] = useState('firmansyah@jasawebsite.net');
  const [website, setWebsite] = useState('https://jasawebsite.net');
  const [address, setAddress] = useState('Jakarta Selatan, DKI Jakarta');
  const [avatarUrl, setAvatarUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80');
  const [accentColor, setAccentColor] = useState('#2563eb');
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedRich, setCopiedRich] = useState(false);

  const previewRef = useRef<HTMLDivElement | null>(null);

  // Pure HTML email table structure compatible with Gmail, Outlook, Apple Mail
  const signatureHtml = useMemo(() => {
    return `<!-- Email Signature by JasaWebsite.net -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #1e293b; max-width: 500px;">
  <tr>
    <td style="vertical-align: top; padding-right: 16px; width: 75px;">
      <img src="${avatarUrl}" alt="${name}" width="70" height="70" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; display: block; border: 2px solid ${accentColor};" />
    </td>
    <td style="vertical-align: top; border-left: 2px solid ${accentColor}; padding-left: 16px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 15px; font-weight: 700; color: #0f172a; padding-bottom: 2px;">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="font-size: 12px; font-weight: 600; color: ${accentColor}; padding-bottom: 8px;">
            ${title} | ${company}
          </td>
        </tr>
        <tr>
          <td style="font-size: 11px; color: #475569; padding-bottom: 4px;">
            <strong style="color: #334155;">WhatsApp:</strong> <a href="tel:${phone.replace(/\s+/g, '')}" style="color: #475569; text-decoration: none;">${phone}</a>
            &nbsp;|&nbsp;
            <strong style="color: #334155;">Email:</strong> <a href="mailto:${email}" style="color: #475569; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 11px; color: #475569; padding-bottom: 4px;">
            <strong style="color: #334155;">Web:</strong> <a href="${website}" target="_blank" style="color: ${accentColor}; text-decoration: none; font-weight: 600;">${website.replace(/^https?:\/\//, '')}</a>
            &nbsp;|&nbsp;
            <span>${address}</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  }, [name, title, company, phone, email, website, address, avatarUrl, accentColor]);

  // Copy as rich HTML (so user can directly Paste into Gmail / Outlook settings)
  const handleCopyRichText = async () => {
    try {
      if (typeof window !== 'undefined' && window.ClipboardItem) {
        const type = 'text/html';
        const blob = new Blob([signatureHtml], { type });
        const data = [new ClipboardItem({ [type]: blob, 'text/plain': new Blob([signatureHtml], { type: 'text/plain' }) })];
        await navigator.clipboard.write(data);
        setCopiedRich(true);
        setTimeout(() => setCopiedRich(false), 2500);
        return;
      }
    } catch (err) {
      // Fallback below
    }
    // Fallback to text copy
    navigator.clipboard.writeText(signatureHtml);
    setCopiedRich(true);
    setTimeout(() => setCopiedRich(false), 2500);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(signatureHtml);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Form Fields */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Informasi Personal & Pekerjaan
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Jabatan / Role</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nama Perusahaan / Brand</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">No. WhatsApp / HP</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Email Bisnis</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Website</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Lokasi / Kota</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">URL Foto Profil / Logo</label>
              <input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Accent Color Selection */}
          <div className="pt-2 border-t border-slate-200">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Warna Garis & Aksen Tanda Tangan
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-9 h-9 rounded-xl cursor-pointer border border-slate-200"
              />
              <div className="flex gap-2">
                {['#2563eb', '#059669', '#7c3aed', '#d97706', '#0f172a'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setAccentColor(c)}
                    style={{ backgroundColor: c }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      accentColor.toLowerCase() === c.toLowerCase() ? 'border-blue-600 scale-110' : 'border-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Live Email Signature Preview & Copy Actions */}
      <div className="lg:col-span-5 space-y-6">
        {/* Email Client Preview Window */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] font-bold text-slate-500">Pratinjau Pesan Email</span>
            <div className="w-8" />
          </div>

          <div className="p-6 space-y-4">
            <div className="text-xs text-slate-500 border-b border-slate-100 pb-3">
              <p>Kepada: partner@bisnis.com</p>
              <p className="font-semibold text-slate-700 mt-0.5">Subjek: Rencana Kerjasama Proyek Website</p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Halo Rekan,<br />
              Terima kasih atas diskusi sebelumnya. Terlampir kami sertakan dokumen spesifikasi teknis dan rincian arsitektur platform yang dapat Anda tinjau.<br /><br />
              Salam hangat,
            </p>

            {/* Injected HTML Signature Live Output */}
            <div
              ref={previewRef}
              className="pt-3 border-t border-slate-100 select-all"
              dangerouslySetInnerHTML={{ __html: signatureHtml }}
            />
          </div>
        </div>

        {/* Action Copy Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={handleCopyRichText}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            {copiedRich ? (
              <>
                <Check className="w-4 h-4" />
                <span>Format Siap Tempel Disalin! (Paste ke Gmail/Outlook)</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Tanda Tangan (Langsung Paste ke Gmail/Outlook)</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCopyHtml}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded-2xl text-xs font-semibold transition-all"
          >
            {copiedHtml ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Kode HTML Disalin!</span>
              </>
            ) : (
              <>
                <FileSignature className="w-4 h-4 text-slate-500" />
                <span>Salin Kode HTML Mentah</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
