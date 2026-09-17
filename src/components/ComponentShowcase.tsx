'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { 
  Layers, 
  Sparkles, 
  LayoutGrid, 
  Sliders, 
  MessageSquare, 
  CreditCard, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  ShieldAlert 
} from 'lucide-react';

interface ComponentShowcaseProps {
  currentLang: Language;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'heros' | 'bento' | 'calculators' | 'ecommerce' | 'cta'>('all');

  const componentStats = [
    { label: currentLang === 'id' ? 'Hero & Header Sections' : 'Hero & Headers', count: '18+', icon: LayoutGrid },
    { label: currentLang === 'id' ? 'Bento Feature Grids' : 'Bento Feature Grids', count: '24+', icon: Sparkles },
    { label: currentLang === 'id' ? 'Kalkulator & Form Interaktif' : 'Calculators & Estimators', count: '12+', icon: Sliders },
    { label: currentLang === 'id' ? 'Komponen E-Commerce & Keranjang' : 'E-Commerce & Storefronts', count: '20+', icon: CreditCard },
    { label: currentLang === 'id' ? 'Testimonial & Bukti Sosial' : 'Testimonials & Reviews', count: '15+', icon: MessageSquare },
    { label: currentLang === 'id' ? 'Floating WhatsApp CTA' : 'Floating WhatsApp Anchors', count: '10+', icon: Smartphone }
  ];

  return (
    <section id="components" className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
            <Layers className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? '100+ Blok Komponen Modular' : currentLang === 'ar' ? 'أكثر من 100 مكون برمجي معياري' : '100+ Modular UI Blocks'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentLang === 'id' 
              ? 'Ratusan Desain Komponen yang Teruji Mengonversi Pembeli' 
              : currentLang === 'ar'
              ? 'مكتبة مكونات بصرية مصممة لمضاعفة معدلات البيع'
              : 'Conversion-Tested Modular Components'}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {currentLang === 'id'
              ? 'Setiap website yang kami buat dirakit dari komponen-komponen siap pakai berkecepatan tinggi, bebas lisensi berbayar, dan ramah Google Core Web Vitals.'
              : currentLang === 'ar'
              ? 'جميع المواقع تبنى بمكونات برمجية فائقة السرعة ومتوافقة مع معايير قوقل، دون أي رسوم تراخيص إضافية.'
              : 'Every build is composed of production-ready, ultra-lightweight components designed for sub-second rendering and high user engagement.'}
          </p>
        </div>

        {/* Component Category Counters Bento */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {componentStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 text-center space-y-2 hover:border-slate-700 transition-all">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl font-extrabold text-white">{item.count}</div>
                <div className="text-[11px] text-slate-400 font-medium leading-snug">{item.label}</div>
              </div>
            );
          })}
        </div>

        {/* Live Visual Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Sample 1: Interactive Bento Card */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Bento Grid Component</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 font-mono">#bento-v4</span>
            </div>
            <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950/40 p-4 border border-slate-800/80 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-slate-300 font-semibold">Live Traffic Analytics</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-slate-700/60" />
                <div className="h-2 w-1/2 rounded bg-slate-800/60" />
              </div>
              <div className="text-right text-xs font-bold text-emerald-400">+142% Conversion</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tata letak modern ala Apple & Linear untuk memamerkan keunggulan produk dengan rasio keterbacaan tertinggi di layar smartphone.
            </p>
          </div>

          {/* Sample 2: WhatsApp Checkout Modal Box */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">WhatsApp Cart Drawer</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono">#wa-checkout</span>
            </div>
            <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/40 p-4 border border-slate-800/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>Total Belanja:</span>
                <span className="text-emerald-400 font-bold">Rp 450.000</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-[11px] text-emerald-200 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Otomatis Terhubung ke WhatsApp CS</span>
              </div>
              <div className="h-2 w-2/3 rounded bg-slate-800/60" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mekanisme checkout tanpa formulir rumit. Calon pembeli langsung mengirimkan daftar pesanan rapi ke WhatsApp toko Anda.
            </p>
          </div>

          {/* Sample 3: Speed & SEO Telemetry Card */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">PageSpeed Telemetry</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-300 font-mono">#lighthouse</span>
            </div>
            <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/30 p-4 border border-slate-800/80 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold">Core Web Vitals</span>
                <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-700">99 / 100</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 rounded-lg bg-slate-900 text-[10px]">
                  <div className="font-extrabold text-white">0.3s</div>
                  <div className="text-slate-400">LCP</div>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900 text-[10px]">
                  <div className="font-extrabold text-white">0.00</div>
                  <div className="text-slate-400">CLS</div>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900 text-[10px]">
                  <div className="font-extrabold text-white">12ms</div>
                  <div className="text-slate-400">INP</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Situs ringan yang langsung tampil sebelum pengunjung sempat berkedip, meminimalisir bounce-rate dan disukai algoritma Google.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
