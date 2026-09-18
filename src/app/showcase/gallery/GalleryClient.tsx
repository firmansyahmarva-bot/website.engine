'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { DesignConcept } from '@/types';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';
import { WHATSAPP_PHONE_NUMBER } from '@/lib/leads';

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalDesign, setActiveModalDesign] = useState<DesignConcept | null>(null);

  const categories = ['all', ...Array.from(new Set(DESIGN_CONCEPTS.map((d) => d.styleCategory)))];

  const filteredDesigns =
    selectedCategory === 'all'
      ? DESIGN_CONCEPTS
      : DESIGN_CONCEPTS.filter((d) => d.styleCategory === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-500 mr-2">Filter Gaya:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {cat === 'all' ? 'Semua Konsep (10)' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Designs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigns.map((design) => (
          <div
            key={design.id}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Visual Header / Mockup Preview Card */}
            <div>
              <div
                className="h-44 p-5 flex flex-col justify-between relative overflow-hidden text-white"
                style={{
                  background: `linear-gradient(135deg, ${design.primaryColor} 0%, #0f172a 100%)`,
                }}
              >
                {/* Accent glow */}
                <div
                  className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full blur-2xl opacity-40"
                  style={{ backgroundColor: design.accentColor }}
                />

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs">
                    {design.mockupBadge || design.styleCategory}
                  </span>
                  {design.badge && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                      {design.badge}
                    </span>
                  )}
                </div>

                <div className="relative z-10 space-y-1">
                  <div
                    className="text-lg font-extrabold tracking-tight"
                    style={{ fontFamily: design.fontFamily }}
                  >
                    {design.name.id}
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {design.tagline.id}
                  </p>
                </div>
              </div>

              {/* Body info */}
              <div className="p-5 space-y-4">
                {/* Color and Typography Specs */}
                <div className="flex items-center justify-between text-xs py-2 border-y border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">Warna:</span>
                    <span
                      className="w-4 h-4 rounded-full border border-slate-200 shadow-2xs"
                      style={{ backgroundColor: design.primaryColor }}
                      title={`Primary: ${design.primaryColor}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-slate-200 shadow-2xs"
                      style={{ backgroundColor: design.accentColor }}
                      title={`Accent: ${design.accentColor}`}
                    />
                    <span className="text-[11px] font-mono text-slate-500">
                      {design.primaryColor}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 truncate max-w-[120px]">
                    {design.fontFamily.split(',')[0]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {design.description.id}
                </p>

                {/* Key Strengths */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Keunggulan Arsitektur:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {design.keyStrengths.map((strength, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                      >
                        ✓ {strength}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Cocok Untuk:
                  </div>
                  <p className="text-xs text-slate-600">
                    {design.targetAudience.slice(0, 3).join(', ')}
                    {design.targetAudience.length > 3 && ', dsb.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex items-center gap-2">
              <button
                onClick={() => setActiveModalDesign(design)}
                className="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                Pratinjau Frame
              </button>
              <Link
                href={`/demos/${design.slug}`}
                className="flex-1 text-center text-xs font-bold py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors"
              >
                Buka Demo Penuh →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeModalDesign && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl my-auto animate-scale-in">
            {/* Modal Bar */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="text-base font-bold tracking-tight">
                  Pratinjau Mockup: {activeModalDesign.name.id}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {activeModalDesign.styleCategory}
                </span>
              </div>
              <button
                onClick={() => setActiveModalDesign(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Body with BrowserFrame simulation */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <BrowserFrame
                title={`${activeModalDesign.name.id} Live Simulation`}
                url={`https://websiteplatform.id/demos/${activeModalDesign.slug}`}
              >
                {/* Simulated live page */}
                <div
                  className="min-h-[500px] flex flex-col justify-between"
                  style={{ fontFamily: activeModalDesign.fontFamily }}
                >
                  {/* Mock Navbar */}
                  <header className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                    <div className="font-bold text-base text-slate-900 flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: activeModalDesign.accentColor }}
                      />
                      <span>{activeModalDesign.name.id.split(' ')[0]}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-600">
                      <span>Solusi</span>
                      <span>Keunggulan</span>
                      <span>Studi Kasus</span>
                      <span>Kontak</span>
                    </div>
                    <button
                      className="text-xs font-bold text-white px-3 py-1.5 rounded-lg shadow-xs"
                      style={{ backgroundColor: activeModalDesign.primaryColor }}
                    >
                      Hubungi Kami
                    </button>
                  </header>

                  {/* Mock Hero */}
                  <div
                    className="p-8 sm:p-12 text-center text-white relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${activeModalDesign.primaryColor} 0%, #0f172a 100%)`,
                    }}
                  >
                    <div className="max-w-2xl mx-auto space-y-4">
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white shadow-xs"
                        style={{ backgroundColor: activeModalDesign.accentColor }}
                      >
                        {activeModalDesign.industryTag}
                      </span>
                      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                        {activeModalDesign.tagline.id}
                      </h1>
                      <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
                        {activeModalDesign.description.id}
                      </p>
                      <div className="pt-2 flex items-center justify-center gap-3">
                        <button
                          className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 shadow-md transition-transform active:scale-95"
                          style={{ backgroundColor: activeModalDesign.accentColor }}
                        >
                          Eksplorasi Layanan
                        </button>
                        <button className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs border border-white/20">
                          Konsultasi Portofolio
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mock Feature Grid */}
                  <div className="p-8 bg-slate-50 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeModalDesign.keyStrengths.map((k, i) => (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-2"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: activeModalDesign.primaryColor }}
                        >
                          0{i + 1}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900">{k}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Dirancang sesuai standar teknis Core Web Vitals dan SEO performa tinggi.
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mock Footer */}
                  <footer className="p-4 bg-slate-900 text-slate-400 text-center text-xs border-t border-slate-800">
                    © 2026 {activeModalDesign.name.id} • Ditenagai oleh Next.js Platform Engine
                  </footer>
                </div>
              </BrowserFrame>

              {/* Design Specs Callout */}
              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/60 text-slate-300 text-xs grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    Tipografi & Font
                  </div>
                  <div className="text-white font-mono mt-1">{activeModalDesign.fontFamily}</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    Skema Warna Inti
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: activeModalDesign.primaryColor }}
                    />
                    <span className="text-white font-mono">{activeModalDesign.primaryColor}</span>
                    <span
                      className="w-4 h-4 rounded-full ml-2"
                      style={{ backgroundColor: activeModalDesign.accentColor }}
                    />
                    <span className="text-white font-mono">{activeModalDesign.accentColor}</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    Target Segmen Klien
                  </div>
                  <div className="text-white mt-1">
                    {activeModalDesign.targetAudience.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Semua template siap kustomisasi sesuai branding perusahaan Anda.
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                    `Halo, saya tertarik berkonsultasi mengenai implementasi desain konsep "${activeModalDesign.name.id}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Konsultasi WhatsApp Desain Ini →
                </a>
                <Link
                  href={`/demos/${activeModalDesign.slug}`}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Buka Halaman Penuh →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
