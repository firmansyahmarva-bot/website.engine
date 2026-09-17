'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { industriesSEO, locationsSEO } from '@/data/seo-data';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Search, MapPin, Briefcase, TrendingUp, CheckCircle2, ArrowRight, Globe2, ShieldCheck, Zap } from 'lucide-react';

interface ProgrammaticSEOSectionProps {
  currentLang: Language;
}

export const ProgrammaticSEOSection: React.FC<ProgrammaticSEOSectionProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industriesSEO[0].slug);
  const [selectedRegion, setSelectedRegion] = useState<string>('UK & Europe');

  const activeIndustry = industriesSEO.find((ind) => ind.slug === selectedIndustry) || industriesSEO[0];

  const filteredLocations = selectedRegion === 'all'
    ? locationsSEO
    : locationsSEO.filter((loc) => loc.region === selectedRegion);

  const ukDemands = [
    {
      title: '100-Page Bespoke Web Architecture (London, Manchester & Leeds)',
      desc: 'UK agencies charge £3,000–£10,000 for 100 pages. We deliver modern Next.js Jamstack with sub-200ms loading at 70% cost savings (£400–£1,200).',
      badge: 'UK Cost Arbitrage'
    },
    {
      title: '100% GDPR & ePrivacy Compliance (Zero Intrusive Tracking)',
      desc: 'Built on static Cloudflare Pages with zero tracking cookies by default. No annoying cookie banners required unless third-party analytics are added.',
      badge: 'EU Regulation Ready'
    },
    {
      title: 'Green Hosting & ESG Credentials (Eco-Friendly Edge CDN)',
      desc: 'Cloudflare edge nodes run on 100% renewable energy, providing UK and European enterprises with verifiable low-carbon web credentials.',
      badge: 'ESG & Green Energy'
    }
  ];

  return (
    <section id="seo-matrix" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Ekspansi Pasar Global: UK & Eropa' : currentLang === 'ar' ? 'التوسع في بريطانيا والأسواق الأوروبية' : 'UK & European Demands'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentLang === 'id'
              ? 'Target 100+ Halaman untuk Pasar UK & Eropa'
              : currentLang === 'ar'
              ? 'أكثر من 100 صفحة مستهدفة للأسواق البريطانية والأوروبية'
              : '100+ Targeted Pages for UK & European Demands'}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {currentLang === 'id'
              ? 'Dominasi pencarian komersial bernilai tinggi di London, Manchester, Birmingham, Edinburgh, hingga Dublin dan Amsterdam dengan biaya yang 70% lebih efisien dibanding agensi lokal di UK.'
              : currentLang === 'ar'
              ? 'استهدف العملاء ذوي القدرة الشرائية العالية في لندن ومانشستر ودبلن وأمستردام مع وفر مالي هائل وسرعة تسليم قياسية.'
              : 'Capture high-ticket commercial queries in London, Manchester, Edinburgh, and across Europe with 70% cost arbitrage and sub-second load times.'}
          </p>
        </div>

        {/* UK & Europe High-Value Pillars Bento Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {ukDemands.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-all">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                {item.badge}
              </span>
              <h3 className="text-sm font-extrabold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Region Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'UK & Europe', label: '🇬🇧 UK & Europe' },
            { id: 'Indonesia', label: '🇮🇩 Indonesia' },
            { id: 'Middle East', label: '🇸🇦 Middle East (GCC)' },
            { id: 'all', label: '🌐 All Commercial Hubs' }
          ].map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === reg.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {industriesSEO.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setSelectedIndustry(ind.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedIndustry === ind.slug
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-400/40 shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-850'
              }`}
            >
              {ind.name[currentLang] || ind.name.id}
            </button>
          ))}
        </div>

        {/* Industry & Location Matrix Display Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                {currentLang === 'id' ? 'Industri Terpilih' : 'Selected Niche Target'}
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {activeIndustry.name[currentLang] || activeIndustry.name.id}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 text-cyan-300 border border-blue-500/20 font-bold">
                100+ Programmatic Pages Architecture
              </span>
            </div>
          </div>

          {/* Keywords & Target Locations Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Keywords Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>UK & International Search Queries</span>
              </h4>

              <div className="space-y-2.5">
                {(activeIndustry.searchKeywords.en).map((kw, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-300 font-medium">"{kw} UK"</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold shrink-0">
                      Rank #1 Strategy
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {currentLang === 'id'
                  ? 'Setiap halaman ditargetkan untuk kata kunci spesifik per kota (misal: "Bespoke Web Design London" atau "Headless Next.js Agency Manchester") tanpa risiko duplikasi konten karena didukung data dinamis terstruktur.'
                  : 'Every single city landing page is generated with unique localized meta tags, regional pricing benchmarks, and Schema.org JSON-LD microdata.'}
              </p>
            </div>

            {/* Target Cities Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Target Cities ({filteredLocations.length} Hubs in {selectedRegion})</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredLocations.map((loc) => (
                  <div key={loc.slug} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="truncate">
                      <span className="text-slate-200 font-semibold">{loc.name[currentLang] || loc.name.en}</span>
                      <div className="text-[10px] text-slate-400">{loc.country}</div>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hello WebScale Team! I am inquiring about targeted 100-page bespoke website development for the UK and European market.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
                >
                  <span>Inquire UK & Europe Build on WhatsApp</span>
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
