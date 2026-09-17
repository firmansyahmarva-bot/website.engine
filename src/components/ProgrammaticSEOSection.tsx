'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { industriesSEO, locationsSEO } from '@/data/seo-data';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Search, MapPin, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProgrammaticSEOSectionProps {
  currentLang: Language;
}

export const ProgrammaticSEOSection: React.FC<ProgrammaticSEOSectionProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industriesSEO[0].slug);

  const activeIndustry = industriesSEO.find((ind) => ind.slug === selectedIndustry) || industriesSEO[0];

  return (
    <section id="seo-matrix" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Mesin Trafik Organik Skala Besar' : currentLang === 'ar' ? 'محرك تصدر نتائج قوقل الطبيعية' : 'Programmatic Organic Traffic Engine'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.seoSectionTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {t.seoSectionSubtitle}
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {industriesSEO.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setSelectedIndustry(ind.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedIndustry === ind.slug
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {ind.name[currentLang] || ind.name.id}
            </button>
          ))}
        </div>

        {/* Industry Focus Matrix Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                {currentLang === 'id' ? 'Industri Terpilih' : currentLang === 'ar' ? 'المجال المحدد' : 'Selected Industry'}
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {activeIndustry.name[currentLang] || activeIndustry.name.id}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 text-cyan-300 border border-blue-500/20 font-bold">
                Rekomendasi: {activeIndustry.typicalPages} Halaman Terindeks
              </span>
            </div>
          </div>

          {/* Keywords & Target Locations Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Keywords Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>{currentLang === 'id' ? 'Formula Kata Kunci Berdaya Beli Tinggi' : currentLang === 'ar' ? 'كلمات البحث ذات النية الشرائية العالية' : 'High-Intent Search Queries'}</span>
              </h4>

              <div className="space-y-2.5">
                {(activeIndustry.searchKeywords[currentLang] || activeIndustry.searchKeywords.id).map((kw, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-300 font-medium">"{kw}"</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold shrink-0">
                      Rank #1 Target
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {currentLang === 'id'
                  ? 'Halaman teroptimasi secara individual dengan Rich Snippet FAQ, Breadcrumbs, dan Schema markup untuk memastikan posisi tertinggi di hasil pencarian Google.'
                  : currentLang === 'ar'
                  ? 'تهيئة فردية لكل صفحة مع بيانات المخططات المنسقة وخرائط الموقع لضمان تصدر نتائج البحث.'
                  : 'Every single landing page is injected with localized Schema.org microdata to secure Google rich results.'}
              </p>
            </div>

            {/* Target Cities & Global Commercial Hubs */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{currentLang === 'id' ? 'Cakupan Kota & Hub Komersial' : currentLang === 'ar' ? 'المدن والمراكز التجارية المستهدفة' : 'Target Commercial Hubs'}</span>
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {locationsSEO.map((loc) => (
                  <div key={loc.slug} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium truncate">{loc.name[currentLang] || loc.name.id}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Halo Tim WebScale! Saya ingin konsultasi pembuatan website ${activeIndustry.name[currentLang] || activeIndustry.name.id} untuk menjangkau target pasar kota pilihan saya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
                >
                  <span>Konsultasi SEO Niche Ini di WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
