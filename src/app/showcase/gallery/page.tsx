import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = constructMetadata({
  title: 'Galeri Showcase 10 Konsep Desain Website B2B & Modern',
  description:
    'Eksplorasi 10 konsep desain website arsitektural modern untuk korporat, SaaS, manufaktur, advisory, luxury, hingga ritel dengan pratinjau interaktif.',
  path: '/showcase/gallery',
  keywords: [
    'galeri desain website',
    'contoh website b2b',
    'desain website perusahaan',
    'modern web layout gallery',
    'arsitektur web modern',
  ],
});

export default function GalleryShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-3">
          <Link
            href="/showcase"
            className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
          >
            ← Kembali ke Galeri Showcase
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Galeri 10 Konsep Desain Arsitektural
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed">
                Setiap konsep arsitektur visual di bawah ini dirancang dari nol untuk menjawab
                kebutuhan positioning industri yang spesifik, bebas template generik, dan ramah SEO.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
            >
              Lihat Paket & Biaya →
            </Link>
          </div>
        </div>

        {/* Interactive Gallery Component */}
        <GalleryClient />
      </div>
    </div>
  );
}
