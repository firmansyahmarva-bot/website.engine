import { Suspense } from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ConfiguratorClientWrapper from './ConfiguratorClientWrapper';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Konfigurator Paket Website & Simulasi Harga',
  description:
    'Hitung perkiraan biaya pembuatan website Anda secara transparan. Pilih tipe website, konsep desain, jumlah halaman, dan modul fitur sesuai kebutuhan.',
  path: '/configure',
  keywords: ['konfigurator website', 'kalkulator biaya website', 'simulasi harga web', 'custom website'],
});

export default function ConfigurePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ name: 'Konfigurator Website', url: '/configure' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Kalkulator & Konfigurator Spesifikasi Website
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Sesuaikan komponen website dengan budget dan kebutuhan operasional bisnis Anda.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
            Memuat konfigurator sistem...
          </div>
        }
      >
        <ConfiguratorClientWrapper />
      </Suspense>
    </div>
  );
}
