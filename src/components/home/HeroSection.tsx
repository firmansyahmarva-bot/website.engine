'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Eye,
  Lock,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import TiltCard from '@/components/motion/TiltCard';
import ParallaxLayer from '@/components/motion/ParallaxLayer';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-800">
      {/* Decorative background glow effects — now drift with scroll instead of sitting static */}
      <ParallaxLayer speed={0.12} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none">
        <div className="w-full h-full" />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.2} className="absolute top-1/4 -right-20 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none">
        <div className="w-full h-full" />
      </ParallaxLayer>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High-Conversion Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <Reveal delay={0} direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/80 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Online Sekarang: Konsultasi Arsitektur Website Gratis</span>
              </div>
            </Reveal>

            {/* Impact Headline */}
            <Reveal delay={100} direction="up">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Website Profesional Berkecepatan Tinggi untuk{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                  Meningkatkan Penjualan & Kredibilitas
                </span>
              </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal delay={200} direction="up">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bukan sekadar template biasa. Kami merancang website kelas enterprise yang loading kilat (<span className="text-white font-semibold">&lt; 0.8 detik</span>), terindeks sempurna di Google SEO, dan direkayasa untuk mengubah pengunjung menjadi prospek transaksi nyata via WhatsApp.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={300} direction="up">
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/configure"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Estimasi & Bangun Website</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </Link>

                <Link
                  href="/designs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 rounded-xl border border-slate-700 transition-colors"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Lihat 10 Konsep Desain</span>
                </Link>
              </div>
            </Reveal>

            {/* Micro Trust Proof */}
            <Reveal delay={400} direction="up">
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Hak Milik Kode</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garansi Error Resmi</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tanpa Sewa Bulanan</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Optimasi SEO Google</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT COLUMN: Realistic Interactive 3D Mockup Visual with Floating Badges */}
          <Reveal delay={150} direction="right" className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Main Browser Window Frame — tilts toward the cursor in 3D */}
            <TiltCard maxTilt={5} className="relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-2 sm:p-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
              
              {/* Browser Header Controls */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/60 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-900/80 border border-slate-700/60 text-[10px] text-slate-400">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>https://bisnis-anda.com</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">200 OK</span>
              </div>

              {/* Visual Showcase Preview Image */}
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/images/hero-preview.webp"
                  srcSet="/images/hero-preview.webp 1x, /images/hero-preview@2x.webp 2x"
                  alt="Tampilan Desain Website Modern Bisnis dan Dashboard Analitik"
                  width={600}
                  height={380}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient at bottom of preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/70 px-3 py-1.5 rounded-lg">
                    <p className="text-[11px] font-bold text-white">Live Prototype Preview</p>
                    <p className="text-[9px] text-slate-400">Next.js 16 + Pure Responsive Tailwind</p>
                  </div>
                  <Link
                    href="/demos/modern-corporate"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] shadow transition-colors"
                  >
                    <span>Uji Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </TiltCard>

            {/* FLOATING BADGE 1: Google PageSpeed 100/100 */}
            <div className="animate-float absolute -top-5 -left-4 sm:-left-6 bg-slate-900/95 border border-emerald-500/50 shadow-xl shadow-emerald-950/30 rounded-xl px-3.5 py-2 backdrop-blur-md flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                100
              </div>
              <div>
                <p className="text-[11px] font-bold text-white flex items-center gap-1">
                  <span>Google PageSpeed</span>
                  <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                </p>
                <p className="text-[9px] text-emerald-400 font-medium">Core Web Vitals Pass</p>
              </div>
            </div>

            {/* FLOATING BADGE 2: Leads & Traffic Increase */}
            <div className="animate-float-delayed absolute -bottom-5 -left-3 sm:-left-5 bg-slate-900/95 border border-blue-500/40 shadow-xl shadow-blue-950/40 rounded-xl px-3.5 py-2 backdrop-blur-md flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">+185% Prospek Masuk</p>
                <p className="text-[9px] text-slate-400">Rerata Konversi Klien B2B</p>
              </div>
            </div>

            {/* FLOATING BADGE 3: 100% Hak Milik */}
            <div className="animate-float absolute -bottom-4 -right-3 sm:-right-5 bg-slate-900/95 border border-slate-700 shadow-xl rounded-xl px-3.5 py-2 backdrop-blur-md flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">100% Milik Anda</p>
                <p className="text-[9px] text-slate-400">Bebas Royalti & Biaya Sewa</p>
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
