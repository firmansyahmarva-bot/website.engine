'use client';

import { useState } from 'react';
import { submitLead, LeadSubmissionData } from '@/lib/leads';

interface LeadFormProps {
  defaultCity?: string;
  defaultIndustry?: string;
  defaultPackage?: string;
  className?: string;
}

export function LeadForm({
  defaultCity = '',
  defaultIndustry = '',
  defaultPackage = 'Paket Bisnis (Paling Populer)',
  className = '',
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadSubmissionData>(() => ({
    fullName: '',
    whatsapp: '',
    companyName: '',
    industry: defaultIndustry,
    packageChoice: defaultPackage,
    city: defaultCity,
    notes: '',
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
      setError('Mohon masukkan nama lengkap Anda.');
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 15) {
      setError('Mohon masukkan nomor WhatsApp yang valid (contoh: 081234567890).');
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitLead(formData);
      setWaRedirectUrl(result.whatsappFallbackUrl);
      setSubmitted(true);
    } catch (err) {
      setError('Terjadi kendala saat mengirim data. Anda dapat langsung menghubungi kami via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Permintaan Konsultasi Diterima!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Terima kasih {formData.fullName}. Data Anda telah tersimpan. Untuk respon seketika,
          silakan lanjutkan percakapan langsung dengan konsultan kami di WhatsApp.
        </p>
        <div className="pt-2">
          <a
            href={waRedirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all"
          >
            <span>💬</span> Lanjutkan ke WhatsApp Sekarang
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Konsultasi & Penawaran Gratis
        </span>
        <h3 className="text-2xl font-bold text-slate-900">
          Mulai Bangun Website Impian Bisnis Anda
        </h3>
        <p className="text-sm text-slate-500">
          Isi formulir ringkas di bawah ini. Tim spesialis kami akan menghubungi Anda dalam hitungan menit.
        </p>
      </div>

      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Anti-spam honeypot field - hidden from humans */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="website_hp">Website HP</label>
          <input
            id="website_hp"
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp || ''}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Lengkap <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nomor WhatsApp <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="Contoh: 081234567890"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Usaha / Perusahaan
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Contoh: PT Maju Jaya Makmur"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kota / Wilayah Domisili
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Contoh: Surabaya / Jakarta / Bali"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pilihan Paket Website
            </label>
            <select
              value={formData.packageChoice}
              onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            >
              <option value="Paket Starter (UMKM)">Paket Starter (UMKM - Rp 1.500.000)</option>
              <option value="Paket Bisnis (Paling Populer)">Paket Bisnis (Rp 3.500.000)</option>
              <option value="Paket Enterprise (Custom Pro)">Paket Enterprise (Kustom Korporasi)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Sektor Industri
            </label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              placeholder="Contoh: Konstruksi / Klinik / Kuliner"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Kebutuhan Khusus / Catatan Tambahan (Opsional)
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Jelaskan kebutuhan fitur, tenggat waktu, atau contoh website yang Anda sukai..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
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
              <span>Memproses Pengiriman...</span>
            </>
          ) : (
            <>
              <span>Kirim Permintaan Konsultasi</span>
              <span>→</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400 pt-1">
          🔒 Kami menjamin kerahasiaan nomor dan data perusahaan Anda. Bebas spam 100%.
        </p>
      </form>
    </div>
  );
}
