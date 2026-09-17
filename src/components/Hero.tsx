'use client';

import React from 'react';
import { Language } from '@/types';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Zap, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, TrendingUp } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);
  const isRTL = currentLang === 'ar';

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner shadow-blue-500/10 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{t.badgeText}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
            {t.heroTitlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {t.heroTitleHighlight}
            </span>
            {t.heroTitleSuffix}
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary WhatsApp Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessagePrefix)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-400 shadow-xl shadow-emerald-950/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.ctaWhatsApp}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>

            {/* Secondary Hubs Jump */}
            <a
              href="#hubs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-all"
            >
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>{t.ctaExploreDesigns}</span>
            </a>

          </div>

          {/* Guarantee Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{currentLang === 'id' ? 'Garansi Speed 95+' : currentLang === 'ar' ? 'ضمان سرعة 95+' : '95+ Speed Guarantee'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{currentLang === 'id' ? 'Free Cloudflare SSL & Hosting' : currentLang === 'ar' ? 'استضافة وحماية مجانية' : 'Free Cloudflare Hosting & SSL'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>{currentLang === 'id' ? 'Selesai Mulai 2 Hari' : currentLang === 'ar' ? 'تسليم يبدأ من يومين' : '2-Day Express Delivery'}</span>
            </span>
          </div>

        </div>

        {/* Live Interactive Stat Bento Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">100 – 1.000+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.statPages}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-400">98 / 100</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.statSpeed}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">2 – 4 {t.days}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.statTurnaround}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-cyan-300">Direct WA</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.statConversion}</div>
          </div>

        </div>

      </div>
    </section>
  );
};
