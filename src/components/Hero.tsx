'use client';

import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<string>('villa');

  const showcases = [
    { id: 'villa', label: currentLang === 'id' ? '🏖️ Luxury Villa' : '🏖️ Luxury Villa', title: 'Palazzo Luxury Villa & Private Residences', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', badge: 'Real Estate / Architecture', tag: 'Direct WA Concierge' },
    { id: 'saas', label: currentLang === 'id' ? '⚡ SaaS & AI' : '⚡ SaaS Platform', title: 'NeoTech Cloud AI & Infrastructure', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', badge: 'SaaS / Deep Tech', tag: 'Interactive Bento Grid' },
    { id: 'corporate', label: currentLang === 'id' ? '🏢 Korporasi' : '🏢 Corporate', title: 'Vanguard Global Enterprise & Holdings', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', badge: 'Corporate / Holding', tag: 'Investor Relations Ready' },
    { id: 'clinic', label: currentLang === 'id' ? '🩺 Klinik Medis' : '🩺 Medical Clinic', title: 'Apex Premier Medical Clinic & Specialists', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', badge: 'Healthcare / Doctors', tag: 'Direct Doctor Booking' },
    { id: 'retail', label: currentLang === 'id' ? '🛍️ Toko Online' : '🛍️ E-Commerce', title: 'Nordic Retail & Global B2B Export', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', badge: 'Retail / B2B Export', tag: 'WhatsApp Instant Cart' }
  ];

  const activeShowcase = showcases.find((s) => s.id === activeTab) || showcases[0];

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

        {/* --- INTERACTIVE MACOS STUDIO DISPLAY SHOWCASE --- */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          {/* Interactive Industry Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'villa', label: currentLang === 'id' ? '🏖️ Luxury Villa' : '🏖️ Luxury Villa', title: 'Palazzo Luxury Villa & Private Residences', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', badge: 'Real Estate / Architecture', tag: 'Direct WA Concierge' },
              { id: 'saas', label: currentLang === 'id' ? '⚡ SaaS & AI' : '⚡ SaaS Platform', title: 'NeoTech Cloud AI & Infrastructure', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', badge: 'SaaS / Deep Tech', tag: 'Interactive Bento Grid' },
              { id: 'corporate', label: currentLang === 'id' ? '🏢 Korporasi' : '🏢 Corporate', title: 'Vanguard Global Enterprise & Holdings', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', badge: 'Corporate / Holding', tag: 'Investor Relations Ready' },
              { id: 'clinic', label: currentLang === 'id' ? '🩺 Klinik Medis' : '🩺 Medical Clinic', title: 'Apex Premier Medical Clinic & Specialists', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', badge: 'Healthcare / Doctors', tag: 'Direct Doctor Booking' },
              { id: 'retail', label: currentLang === 'id' ? '🛍️ Toko Online' : '🛍️ E-Commerce', title: 'Nordic Retail & Global B2B Export', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', badge: 'Retail / B2B Export', tag: 'WhatsApp Instant Cart' }
            ].map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Browser Mockup Window */}
          <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-cyan-950/30 overflow-hidden ring-1 ring-white/10 transition-all">
            
            {/* macOS Browser Header */}
            <div className="h-10 px-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm shadow-rose-500/50" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm shadow-amber-500/50" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm shadow-emerald-500/50" />
              </div>

              {/* URL Address Bar */}
              <div className="w-2/3 sm:w-1/2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="truncate">https://preview.webscale.engine/{activeShowcase.id}</span>
              </div>

              {/* Speed Pill */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>100/100 Speed</span>
              </div>
            </div>

            {/* Inner Live Screen Preview */}
            <div className="relative h-72 sm:h-[420px] w-full overflow-hidden bg-slate-900">
              <img
                src={activeShowcase.image}
                alt={activeShowcase.title}
                className="w-full h-full object-cover object-top transition-all duration-700 filter brightness-90"
              />

              {/* Gradient Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Simulated Website UI Layer */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-10">
                
                {/* Top Mini-Nav */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{activeShowcase.badge}</span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>0.2s Cloudflare Edge Delivery</span>
                  </div>
                </div>

                {/* Bottom Headline & Live WhatsApp Trigger inside preview */}
                <div className="space-y-3 max-w-xl">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {activeShowcase.tag}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {activeShowcase.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Halo Tim WebScale! Saya tertarik memesan konsep website seperti template ${activeShowcase.title} untuk bisnis saya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/50 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Pesan Desain Ini Sekarang</span>
                    </a>

                    <a
                      href="#hubs"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-950/80 hover:bg-slate-900 border border-slate-700 backdrop-blur-md transition-all"
                    >
                      <span>Lihat 9 Desain Lainnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Live Inbound Lead Notification Badge */}
              <div className="absolute top-6 right-6 hidden md:flex items-center gap-3 p-3 rounded-2xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl z-20 max-w-xs animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold text-white">Inbound Lead Baru</div>
                  <div className="text-slate-400 truncate">"Halo, saya mau booking private inspection..."</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Live Interactive Stat Bento Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          
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
