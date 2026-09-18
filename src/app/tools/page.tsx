import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ToolDirectory from '@/components/tools/ToolDirectory';
import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowRight, Sparkles, Wrench } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = constructMetadata({
  title: 'Koleksi 10 Tools Gratis Optimasi Website, SEO & Digital Marketing',
  description:
    'Alat bantu online gratis untuk webmaster dan marketer: Meta Tag Generator, WhatsApp Link & QR Code, Speed Estimator, ROAS Calculator, Schema JSON-LD, OG Preview, dan lainnya.',
  path: '/tools',
  keywords: [
    'tools website gratis',
    'online marketing tools',
    'generator meta tag',
    'whatsapp link qr code',
    'kalkulator roas',
    'cek kontras wcag',
    'schema generator json ld',
  ],
});

export default function ToolsIndexPage() {
  const breadcrumbItems = [{ name: 'Tools Gratis', url: '/tools' }];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              <span>10 Alat Bantu Digital 100% Client-Side</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Tools Gratis Rekayasa Website, SEO & Konversi Iklan
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Koleksi alat bantu praktis untuk pemilik bisnis, UI/UX designer, developer, dan digital marketer.
              Bekerja instan langsung di peramban (browser) Anda tanpa registrasi akun dan tanpa batas pemakaian.
            </p>
          </div>
        </div>
      </div>

      {/* Main Directory Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ToolDirectory />

        {/* Bottom Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Siap Upgrade Website Bisnis Anda?</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Dapatkan Website Modern dengan Skor Google 100/100
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Semua fitur dari alat-alat di atas—mulai dari Open Graph otomatis, structured data Schema.org, loading
              kilat Next.js SSG, hingga WhatsApp conversion flow—sudah terpasang rapi di website racikan JasaWebsite.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/website-packages"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors text-center shadow-lg shadow-blue-600/30"
            >
              Lihat Paket Website
            </Link>
            <Link
              href="/audit-gratis"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors text-center"
            >
              Uji Audit Website Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
