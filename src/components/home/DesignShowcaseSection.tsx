'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Sparkles, ExternalLink, SlidersHorizontal, Check } from 'lucide-react';
import { DESIGN_CONCEPTS } from '@/content/designs';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'Semua Konsep (10)' },
  { id: 'corporate', label: 'Korporat & Industri' },
  { id: 'creative', label: 'Kreatif & Studio' },
  { id: 'tech', label: 'Teknologi & SaaS' },
  { id: 'services', label: 'Jasa & Konsultan' },
  { id: 'commerce', label: 'Kuliner & Toko Online' },
];

export default function DesignShowcaseSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDesigns = DESIGN_CONCEPTS.filter((design) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'corporate') {
      return ['modern-corporate', 'premium-corporate', 'industrial'].includes(design.id);
    }
    if (activeTab === 'creative') {
      return ['minimal-business', 'bold-creative'].includes(design.id);
    }
    if (activeTab === 'tech') {
      return ['technology', 'training-education'].includes(design.id);
    }
    if (activeTab === 'services') {
      return ['professional-services'].includes(design.id);
    }
    if (activeTab === 'commerce') {
      return ['restaurant', 'ecommerce-retail'].includes(design.id);
    }
    return true;
  });

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            10 Konsep Desain Siap Pakai
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Desain Otentik yang Dirancang Sesuai Karakter Industri Anda
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Setiap konsep dirancang dari nol dengan palet warna psikologis, tata letak konversi tinggi, dan performa kilat. Bukan template pasaran.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Designs Grid with Photos & Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="card-hover rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Preview Mockup */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={design.imageUrl || '/images/design-modern-corporate.webp'}
                    alt={design.name.id}
                    width={400}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badges on preview */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-sm border border-slate-700/60 shadow">
                      {design.industryTag || design.styleCategory}
                    </span>
                    {design.badge && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500 text-slate-950 shadow">
                        {design.badge}
                      </span>
                    )}
                  </div>

                  {/* Mockup Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow">
                      {design.mockupBadge || 'Interactive Prototype'}
                    </span>
                  </div>

                  {/* Live Demo Quick Action */}
                  <Link
                    href={`/demos/${design.demoSlug}`}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 font-bold text-xs shadow-md transition-transform hover:scale-105"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>Uji Demo</span>
                  </Link>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {design.name.id}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {design.tagline.id}
                  </p>

                  {/* Key Strengths */}
                  <div className="space-y-1.5 mb-6">
                    {design.keyStrengths.slice(0, 3).map((strength, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/configure?design=${design.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Pilih Desain Ini</span>
                </Link>

                <Link
                  href={`/demos/${design.demoSlug}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="Lihat Demo Interaktif"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/designs"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Eksplorasi Detail Seluruh 10 Desain</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
