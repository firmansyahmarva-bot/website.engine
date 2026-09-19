'use client';

import React from 'react';
import { Zap, Gauge, Search, CheckCircle, Smartphone, Globe, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import AnimatedCounter from '@/components/motion/AnimatedCounter';

const LIGHTHOUSE_METRICS = [
  { label: 'Performance', score: 100, desc: 'Waktu muat instan tanpa script berlebih' },
  { label: 'Accessibility', score: 100, desc: 'Aksesibel untuk semua pengguna & perangkat' },
  { label: 'Best Practices', score: 100, desc: 'Standar keamanan web & HTTPS modern' },
  { label: 'SEO Google', score: 100, desc: 'Metadata & JSON-LD terindeks sempurna' },
];

const SPEED_BENCHMARKS = [
  { metric: 'First Contentful Paint (FCP)', ourScore: '0.4 detik', standard: 'Standar Google < 1.8 detik', status: 'Optimal' },
  { metric: 'Largest Contentful Paint (LCP)', ourScore: '0.8 detik', standard: 'Standar Google < 2.5 detik', status: 'Optimal' },
  { metric: 'Cumulative Layout Shift (CLS)', ourScore: '0.00', standard: 'Standar Google < 0.10', status: 'Sempurna' },
  { metric: 'Total Blocking Time (TBT)', ourScore: '0 ms', standard: 'Standar Google < 200 ms', status: 'Nihil Lag' },
];

export default function PerformanceProofSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800 uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5" />
            Audit Performa Terverifikasi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Kecepatan Muat Nyata: Skor Google PageSpeed 100/100
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            Google secara resmi menjadikan kecepatan situs sebagai faktor penentu peringkat pencarian. Setiap 1 detik keterlambatan muat menurunkan angka konversi pembeli hingga 20%.
          </p>
        </div>

        {/* 4 Lighthouse Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {LIGHTHOUSE_METRICS.map((item, idx) => (
            <Reveal key={idx} delay={idx * 120} direction="up">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg text-center backdrop-blur-sm hover:border-emerald-500/40 transition-colors h-full">
                {/* Circular Gauge Representation */}
                <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-4 border-emerald-500/20 flex items-center justify-center">
                    <div className="w-[72px] h-[72px] rounded-full border-4 border-emerald-400 flex items-center justify-center bg-emerald-950/40 shadow-inner">
                      <span className="text-2xl font-extrabold text-emerald-400">
                        <AnimatedCounter value={item.score} duration={1000} />
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{item.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Speed Benchmark Table & Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Core Web Vitals breakdown */}
          <div className="lg:col-span-7 bg-slate-800/60 rounded-2xl border border-slate-700/70 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Metrik Core Web Vitals (Laporan Google Lighthouse)</span>
            </h3>
            <div className="space-y-4">
              {SPEED_BENCHMARKS.map((bench, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 gap-2"
                >
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">{bench.metric}</span>
                    <span className="text-[11px] text-slate-400">{bench.standard}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono text-emerald-400">{bench.ourScore}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {bench.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Commercial ROI Impact */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/60 to-slate-900/90 rounded-2xl border border-blue-800/60 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-blue-400" />
              <span>Dampak Bisnis Website Super Cepat</span>
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Biaya Iklan Lebih Murah:</strong> Quality Score Google Ads & Meta Ads meningkat drastis, menurunkan biaya per-klik (CPC).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Bounce Rate Menurun:</strong> Calon pembeli tidak meninggalkan website karena menunggu loading layar putih.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Peringkat Organik Lebih Stabil:</strong> Algoritma Google memprioritaskan website yang memiliki skor LCP & CLS hijau.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Kredibilitas B2B Tertinggi:</strong> Memberikan impresi perusahaan mapan, terpercaya, dan profesional di hadapan mitra bisnis.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
