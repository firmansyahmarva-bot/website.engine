'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/leads';

export function AuditForm() {
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    whatsapp: '',
    websiteUrl: '',
    painPoint: 'Website terasa lambat & PageSpeed rendah',
    notes: '',
    noWebsiteYet: false,
    website_hp: '',
    render_ts: Date.now(),
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [waRedirectUrl, setWaRedirectUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim()) {
      setError('Mohon isi nama lengkap Anda.');
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 15) {
      setError('Mohon masukkan nomor WhatsApp yang valid (contoh: 081234567890).');
      return;
    }

    if (!formData.noWebsiteYet && !formData.websiteUrl.trim()) {
      setError('Mohon cantumkan URL website Anda, atau centang opsi "Belum punya website".');
      return;
    }

    setIsLoading(true);

    try {
      const notesCombined = [
        formData.noWebsiteYet ? '[Kondisi: Belum punya website]' : `[URL: ${formData.websiteUrl}]`,
        `[Fokus Masalah: ${formData.painPoint}]`,
        formData.notes ? `[Catatan: ${formData.notes}]` : '',
      ].filter(Boolean).join(' ');

      const result = await submitLead({
        fullName: formData.fullName,
        whatsapp: cleanPhone,
        websiteUrl: formData.noWebsiteYet ? 'Belum Ada Website' : formData.websiteUrl,
        packageChoice: 'Permintaan Audit Website Gratis',
        notes: notesCombined,
        website_hp: formData.website_hp,
        render_ts: formData.render_ts,
        sourcePage: '/audit-gratis',
      });

      setWaRedirectUrl(result.whatsappFallbackUrl);
      setSubmitted(true);
    } catch {
      setError('Terjadi kendala saat mengirim data. Silakan hubungi kami langsung melalui WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-sm">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Permintaan Audit Berhasil Dikirim!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Terima kasih {formData.fullName}. Tim engineer kami akan memeriksa kesehatan teknis website Anda dan menyiapkan rekomendasi perbaikan.
        </p>
        <div className="pt-2">
          <a
            href={waRedirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all"
          >
            <span>💬</span> Konfirmasi Cepat ke WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700">
          {error}
        </div>
      )}

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="audit_website_hp">Website HP</label>
        <input
          id="audit_website_hp"
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_hp}
          onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nama Lengkap <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Contoh: Hendra Wijaya"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-slate-900"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nomor WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="Contoh: 081234567890"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-slate-900"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-xs font-bold text-slate-700">
            Alamat URL Website <span className="text-rose-500">*</span>
          </label>
          <label className="flex items-center gap-1.5 text-xs text-slate-500 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.noWebsiteYet}
              onChange={(e) => setFormData({ ...formData, noWebsiteYet: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>Belum punya website</span>
          </label>
        </div>
        <input
          type="text"
          disabled={formData.noWebsiteYet}
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          placeholder={formData.noWebsiteYet ? 'Rencana pembuatan website baru' : 'https://contohwebsite.com'}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-slate-900 disabled:bg-slate-100 disabled:text-slate-400"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Kendala Utama yang Ingin Dievaluasi
        </label>
        <select
          value={formData.painPoint}
          onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-slate-900"
        >
          <option value="Website terasa lambat & PageSpeed rendah">Website terasa lambat & PageSpeed rendah</option>
          <option value="Peringkat Google tidak kunjung naik / traffic anjlok">Peringkat Google tidak kunjung naik / traffic anjlok</option>
          <option value="Banyak pengunjung tetapi minim pesan WhatsApp/lead">Banyak pengunjung tetapi minim pesan WhatsApp/lead</option>
          <option value="Tampilan di smartphone berantakan / tidak responsif">Tampilan di smartphone berantakan / tidak responsif</option>
          <option value="Website sering down / error hosting tidak stabil">Website sering down / error hosting tidak stabil</option>
          <option value="Ingin konsultasi arsitektur website baru">Ingin konsultasi arsitektur website baru</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Catatan Tambahan (Opsional)
        </label>
        <textarea
          rows={2}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Tuliskan detail keluhan, target bisnis, atau pertanyaan spesifik Anda..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-slate-900"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        {isLoading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Mempersiapkan Audit...</span>
          </>
        ) : (
          <>
            <span>Ajukan Audit Website Gratis Sekarang</span>
            <span>→</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400">
        🔒 Bebas spam 100%. Data dan URL domain Anda aman dan tidak akan disebarluaskan.
      </p>
    </form>
  );
}