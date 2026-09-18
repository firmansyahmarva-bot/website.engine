'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Star,
  Shield,
  Layers,
} from 'lucide-react';
import { DesignConcept } from '@/types';
import { DESIGN_CONCEPTS } from '@/content/designs';

interface DemoViewerProps {
  currentDesign: DesignConcept;
}

export default function DemoViewer({ currentDesign }: DemoViewerProps) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Device width constraints for the simulated preview container
  const deviceWidthClasses = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto shadow-2xl border-x border-slate-300',
    mobile: 'max-w-[390px] mx-auto shadow-2xl border-x border-slate-300 rounded-3xl overflow-hidden my-4',
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Top Preview Control Bar */}
      <div className="sticky top-16 z-40 bg-slate-900 text-white border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Design Switcher & Info */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-slate-400">Live Demo:</span>
              <span className="font-semibold text-sm text-white">{currentDesign.name.id}</span>
            </div>

            {/* Quick Design Switch Dropdown */}
            <select
              value={currentDesign.slug}
              onChange={(e) => {
                window.location.href = `/demos/${e.target.value}`;
              }}
              aria-label="Ganti konsep desain"
              className="bg-slate-800 text-white text-xs border border-slate-700 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {DESIGN_CONCEPTS.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name.id} ({d.styleCategory})
                </option>
              ))}
            </select>
          </div>

          {/* Viewport Screen Switcher */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                device === 'desktop' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Tampilan Desktop (100%)"
              aria-label="Tampilan Desktop"
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                device === 'tablet' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Tampilan Tablet (768px)"
              aria-label="Tampilan Tablet"
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                device === 'mobile' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Tampilan Smartphone (390px)"
              aria-label="Tampilan Mobile"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Action Button to Configurator */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Link
              href={`/configure?design=${currentDesign.id}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              <span>Pilih Desain Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Simulated Live Website Frame */}
      <div className="flex-1 p-2 sm:p-4 md:p-6 overflow-y-auto">
        <div
          className={`transition-all duration-300 bg-white rounded-xl shadow-lg overflow-hidden ${deviceWidthClasses[device]}`}
        >
          {/* Simulated Browser Chrome Bar in Desktop Mode */}
          {device !== 'mobile' && (
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 max-w-sm mx-auto bg-white rounded border border-slate-200 px-3 py-0.5 text-center text-xs text-slate-500 truncate">
                https://demo.{currentDesign.slug}.brand.co.id
              </div>
            </div>
          )}

          {/* SIMULATED WEBSITE BODY */}
          <div className="text-slate-800 bg-white">
            {/* Simulated Header */}
            <header className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: currentDesign.primaryColor }}
                >
                  {currentDesign.name.id.charAt(0)}
                </div>
                <span className="font-bold tracking-tight text-slate-900 text-lg">
                  {currentDesign.name.id.split(' ')[0]} Enterprise
                </span>
              </div>
              <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-600">
                <span className="text-slate-900">Beranda</span>
                <span>Layanan</span>
                <span>Tentang Kami</span>
                <span>Portofolio</span>
                <span>Kontak</span>
              </nav>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded text-xs font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: currentDesign.primaryColor }}
              >
                Hubungi Kami
              </button>
            </header>

            {/* Simulated Hero Section */}
            <section className="px-6 py-16 sm:py-24 text-center bg-slate-50 border-b border-slate-100">
              <div className="max-w-3xl mx-auto space-y-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${currentDesign.primaryColor}15`,
                    color: currentDesign.primaryColor,
                  }}
                >
                  {currentDesign.styleCategory} &bull; Konsep Desain
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {currentDesign.tagline.id}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  {currentDesign.description.id}
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 flex items-center gap-2"
                    style={{ backgroundColor: currentDesign.primaryColor }}
                  >
                    <span>Pelajari Layanan Kami</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-slate-500" />
                    <span>Konsultasi Proyek</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Simulated Value Props / Metrics */}
            <section className="px-6 py-8 border-b border-slate-100 bg-white">
              <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 mt-0.5">Responsif Multi-Device</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">&lt; 1.2s</div>
                  <div className="text-xs text-slate-500 mt-0.5">Kecepatan Muat Rata-Rata</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">SEO</div>
                  <div className="text-xs text-slate-500 mt-0.5">Struktur Schema.org Siap</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">Garansi</div>
                  <div className="text-xs text-slate-500 mt-0.5">Dukungan & Perbaikan Bug</div>
                </div>
              </div>
            </section>

            {/* Simulated Feature / Service Cards */}
            <section className="px-6 py-16 max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Layanan & Kapabilitas Utama
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Direkayasa khusus untuk memenuhi kebutuhan sektor: {currentDesign.targetAudience.join(', ')}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentDesign.keyStrengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-shadow hover:shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4"
                      style={{ backgroundColor: currentDesign.primaryColor }}
                    >
                      {idx === 0 ? (
                        <Shield className="w-5 h-5" />
                      ) : idx === 1 ? (
                        <Layers className="w-5 h-5" />
                      ) : (
                        <Star className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{strength}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Implementasi komponen modular yang memastikan pengunjung mendapatkan impresi terbaik sejak detik pertama mengakses website.
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: currentDesign.primaryColor }}>
                      <span>Detail Modul</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Simulated CTA Banner */}
            <section
              className="px-6 py-12 text-white text-center"
              style={{ backgroundColor: currentDesign.primaryColor }}
            >
              <div className="max-w-2xl mx-auto space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Tertarik Menggunakan Konsep Desain {currentDesign.name.id}?
                </h2>
                <p className="text-xs sm:text-sm text-white/90">
                  Kami dapat menyesuaikan warna, logo, struktur menu, dan copywriting sesuai identitas brand Anda.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/configure?design=${currentDesign.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-xs sm:text-sm font-bold rounded-lg shadow hover:bg-slate-100 transition-colors"
                  >
                    <span>Mulai Konfigurasi dengan Desain Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Simulated Footer */}
            <footer className="px-6 py-8 bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
              <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <p className="font-semibold text-white">{currentDesign.name.id} Enterprise Theme</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Preview interaktif sistem desain JasaWebsite.</p>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>Privasi</span>
                  <span>Ketentuan</span>
                  <span>Sitemap</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
