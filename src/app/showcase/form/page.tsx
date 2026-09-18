import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase Desain Formulir & Input State Modern',
  description:
    'Koleksi layout formulir kontak, pemesanan paket, kalkulator biaya, dan validasi input yang ramah konversi seluler.',
  path: '/showcase/form',
  keywords: ['desain form website', 'form kontak modern', 'formulir pendaftaran online', 'form konversi cro'],
});

export default function FormShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Formulir & Komponen Input Berkonversi Tinggi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Formulir dirancang seringkas mungkin untuk menyingkirkan hambatan psikologis pengisian di layar smartphone.
          </p>
        </div>

        {/* Form Pattern 1: Single Step Lead Form */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Instant Lead Capture Form (Live Functional)</h2>
            <span className="text-xs text-slate-500 font-mono">WhatsApp Fallback • Single Screen</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/form-lead">
            <div className="p-8 bg-white max-w-xl mx-auto">
              <LeadForm defaultPackage="Paket Bisnis (Paling Populer)" />
            </div>
          </BrowserFrame>
        </section>

        {/* Form Pattern 2: Input Field States */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Status Validasi Kolom Input (Input States)</h2>
            <span className="text-xs text-slate-500 font-mono">Focus • Valid • Error States</span>
          </div>
          <BrowserFrame url="https://jasawebsite.net/form-states">
            <div className="p-8 bg-white grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Status Normal (Default)</label>
                <input
                  type="text"
                  placeholder="Ketik sesuatu..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none"
                  readOnly
                />
                <span className="text-[10px] text-slate-400">Placeholder panduan</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-emerald-700">Status Valid (Success)</label>
                <div className="relative">
                  <input
                    type="text"
                    value="081234567890"
                    className="w-full px-4 py-2.5 rounded-xl border border-emerald-500 text-xs text-slate-800 bg-emerald-50/20 focus:outline-none"
                    readOnly
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 text-xs font-bold">✓</span>
                </div>
                <span className="text-[10px] text-emerald-600">Nomor WhatsApp terverifikasi</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-rose-700">Status Galat (Error)</label>
                <div className="relative">
                  <input
                    type="text"
                    value="budi@"
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-500 text-xs text-rose-900 bg-rose-50/20 focus:outline-none"
                    readOnly
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-600 text-xs font-bold">✕</span>
                </div>
                <span className="text-[10px] text-rose-600">Format alamat email tidak lengkap</span>
              </div>
            </div>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
