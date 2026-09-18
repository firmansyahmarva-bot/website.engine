'use client';

import { useState } from 'react';
import { Gauge, Zap, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SpeedInputs {
  pageWeightKb: number;
  imageCount: number;
  imageFormat: 'modern' | 'legacy';
  thirdPartyScripts: number;
  architecture: 'nextjs-ssg' | 'wordpress-php';
  networkType: '4g-normal' | '4g-slow' | 'wifi';
}

const PRESETS = [
  {
    name: 'Landing Page Next.js Modern',
    data: {
      pageWeightKb: 450,
      imageCount: 5,
      imageFormat: 'modern' as const,
      thirdPartyScripts: 2,
      architecture: 'nextjs-ssg' as const,
      networkType: '4g-normal' as const,
    },
  },
  {
    name: 'Website WordPress Standar',
    data: {
      pageWeightKb: 2800,
      imageCount: 18,
      imageFormat: 'legacy' as const,
      thirdPartyScripts: 8,
      architecture: 'wordpress-php' as const,
      networkType: '4g-normal' as const,
    },
  },
  {
    name: 'Toko Online Berat & Lambat',
    data: {
      pageWeightKb: 6500,
      imageCount: 35,
      imageFormat: 'legacy' as const,
      thirdPartyScripts: 14,
      architecture: 'wordpress-php' as const,
      networkType: '4g-slow' as const,
    },
  },
];

export default function WebsiteSpeedEstimator() {
  const [inputs, setInputs] = useState<SpeedInputs>({
    pageWeightKb: 1800,
    imageCount: 12,
    imageFormat: 'legacy',
    thirdPartyScripts: 5,
    architecture: 'wordpress-php',
    networkType: '4g-normal',
  });

  // Bandwidth & RTT by network type
  const networkParams = {
    '4g-normal': { speedMbps: 15, rttMs: 80, label: 'Mobile 4G Indonesia Rata-rata (15 Mbps)' },
    '4g-slow': { speedMbps: 3, rttMs: 160, label: 'Mobile Slow 4G / Daerah Sinyal Lemah (3 Mbps)' },
    'wifi': { speedMbps: 50, rttMs: 25, label: 'Koneksi WiFi Fiber Kantor/Rumah (50 Mbps)' },
  }[inputs.networkType];

  // TTFB calculation based on architecture
  const ttfbMs = inputs.architecture === 'nextjs-ssg' ? 65 : 850;

  // Effective page weight considering image formats
  const imageSavingsFactor = inputs.imageFormat === 'legacy' ? 1.0 : 0.45; // Modern WebP saves ~55%
  const effectiveWeightKb = Math.round(inputs.pageWeightKb * imageSavingsFactor);

  // Network download time: (KB * 8) / (Speed in Kbps)
  const speedKbps = networkParams.speedMbps * 1000;
  const transferTimeSec = (effectiveWeightKb * 8) / speedKbps;

  // Script evaluation delay: ~110ms per 3rd party script on mobile CPU
  const scriptExecutionMs = inputs.thirdPartyScripts * 110;

  // Estimated LCP in seconds
  const lcpSec = Number((ttfbMs / 1000 + transferTimeSec * 0.75 + scriptExecutionMs / 1000).toFixed(2));

  // Full page interactive load time
  const fullLoadSec = Number((ttfbMs / 1000 + transferTimeSec + scriptExecutionMs / 1000 + 0.3).toFixed(2));

  // Google Performance Score (0 - 100) algorithm based on LCP and weight
  let score = Math.round(100 - (lcpSec / 4.5) * 60 - (inputs.thirdPartyScripts * 2.5));
  if (inputs.architecture === 'nextjs-ssg') score += 15;
  if (inputs.imageFormat === 'modern') score += 10;
  score = Math.max(12, Math.min(100, score));

  // Risk ratings
  const lcpRisk = lcpSec <= 2.5 ? 'Baik (Lolos CWV)' : lcpSec <= 4.0 ? 'Perlu Peningkatan' : 'Buruk (Gagal CWV)';
  const lcpColor = lcpSec <= 2.5 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : lcpSec <= 4.0 ? 'text-amber-600 bg-amber-50 border-amber-200' : 'text-rose-600 bg-rose-50 border-rose-200';

  const scoreColor =
    score >= 90 ? 'text-emerald-500 stroke-emerald-500' : score >= 50 ? 'text-amber-500 stroke-amber-500' : 'text-rose-500 stroke-rose-500';

  // Potential savings if upgraded to Next.js SSG + Modern Images
  const potentialWeightKb = Math.round(inputs.pageWeightKb * 0.35);
  const potentialLcpSec = Number((0.08 + (potentialWeightKb * 8) / speedKbps * 0.6 + (inputs.thirdPartyScripts * 40) / 1000).toFixed(2));

  return (
    <div className="space-y-8">
      {/* Preset Badges */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Skenario Uji:
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setInputs(p.data)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Inputs */}
        <div className="lg:col-span-6 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-blue-600" />
            <span>Parameter Halaman & Infrastruktur</span>
          </h3>

          {/* Page Weight Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <label htmlFor="weight-slider" className="text-slate-700">
                Bobot Halaman (Total Page Size)
              </label>
              <span className="font-mono text-sm text-blue-600 font-bold">
                {inputs.pageWeightKb >= 1024
                  ? `${(inputs.pageWeightKb / 1024).toFixed(2)} MB`
                  : `${inputs.pageWeightKb} KB`}
              </span>
            </div>
            <input
              id="weight-slider"
              type="range"
              min={200}
              max={10000}
              step={100}
              value={inputs.pageWeightKb}
              onChange={(e) => setInputs({ ...inputs, pageWeightKb: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>200 KB (Sangat Ringan)</span>
              <span>2.5 MB (Standar Web)</span>
              <span>10 MB (Sangat Berat)</span>
            </div>
          </div>

          {/* Image Count & Format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="img-count" className="block text-xs font-semibold text-slate-700 mb-1">
                Jumlah Gambar di Halaman
              </label>
              <input
                id="img-count"
                type="number"
                min={0}
                max={80}
                value={inputs.imageCount}
                onChange={(e) => setInputs({ ...inputs, imageCount: Number(e.target.value) })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="img-format" className="block text-xs font-semibold text-slate-700 mb-1">
                Format Kompresi Gambar
              </label>
              <select
                id="img-format"
                value={inputs.imageFormat}
                onChange={(e) => setInputs({ ...inputs, imageFormat: e.target.value as 'modern' | 'legacy' })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="modern">WebP / AVIF (Terkonversi 55% Lebih Ringan)</option>
                <option value="legacy">JPG / PNG Asli (Tanpa Kompresi)</option>
              </select>
            </div>
          </div>

          {/* Third-Party Scripts */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <label htmlFor="scripts-slider" className="text-slate-700">
                Jumlah Skrip Eksternal / Pihak Ketiga
              </label>
              <span className="font-mono text-sm text-blue-600 font-bold">{inputs.thirdPartyScripts} Skrip</span>
            </div>
            <input
              id="scripts-slider"
              type="range"
              min={0}
              max={20}
              value={inputs.thirdPartyScripts}
              onChange={(e) => setInputs({ ...inputs, thirdPartyScripts: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Termasuk: Google Analytics, Meta Pixel, TikTok Pixel, Widget Live Chat, Hotjar, dan Font eksternal.
            </p>
          </div>

          {/* Architecture Selection */}
          <div>
            <label htmlFor="arch-select" className="block text-xs font-semibold text-slate-700 mb-1">
              Arsitektur & Server Website
            </label>
            <select
              id="arch-select"
              value={inputs.architecture}
              onChange={(e) =>
                setInputs({ ...inputs, architecture: e.target.value as 'nextjs-ssg' | 'wordpress-php' })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="nextjs-ssg">Next.js 16 SSG + Global Edge CDN (TTFB ~65ms)</option>
              <option value="wordpress-php">WordPress / PHP Server Biasa + MySQL (TTFB ~850ms)</option>
            </select>
          </div>

          {/* Network Condition */}
          <div>
            <label htmlFor="net-select" className="block text-xs font-semibold text-slate-700 mb-1">
              Simulasi Jaringan Pengunjung
            </label>
            <select
              id="net-select"
              value={inputs.networkType}
              onChange={(e) =>
                setInputs({ ...inputs, networkType: e.target.value as '4g-normal' | '4g-slow' | 'wifi' })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="4g-normal">Mobile 4G Normal Indonesia (15 Mbps, Latensi 80ms)</option>
              <option value="4g-slow">Mobile Slow 4G / Daerah Sinyal Lemah (3 Mbps, Latensi 160ms)</option>
              <option value="wifi">Koneksi WiFi Fiber Broadband (50 Mbps, Latensi 25ms)</option>
            </select>
          </div>
        </div>

        {/* Right Output: Score & CWV Analysis */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Score & Status Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Estimasi Skor PageSpeed Mobile
              </span>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-2 justify-center sm:justify-start">
                <span className={score >= 90 ? 'text-emerald-600' : score >= 50 ? 'text-amber-600' : 'text-rose-600'}>
                  {score}
                </span>
                <span className="text-base font-normal text-slate-400">/ 100</span>
              </div>
              <div className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${lcpColor}`}>
                {lcpRisk}
              </div>
            </div>

            {/* Circular Gauge Graphic */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scoreColor}
                  strokeDasharray={`${score}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <Zap className={`w-6 h-6 mx-auto ${score >= 90 ? 'text-emerald-500' : score >= 50 ? 'text-amber-500' : 'text-rose-500'}`} />
              </div>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Server TTFB
              </span>
              <div className="text-xl font-bold text-slate-900 mt-1">{ttfbMs} ms</div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                {ttfbMs < 200 ? '✓ Sangat Cepat (Edge)' : '⚠ Lambat (Server PHP)'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Largest Contentful (LCP)
              </span>
              <div className="text-xl font-bold text-slate-900 mt-1">{lcpSec} detik</div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                {lcpSec <= 2.5 ? '✓ Sesuai Standar Google' : '⚠ Risiko Kehilangan Pengunjung'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Full Interactive
              </span>
              <div className="text-xl font-bold text-slate-900 mt-1">{fullLoadSec} detik</div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">Halaman siap klik total</span>
            </div>
          </div>

          {/* Optimization Opportunity Highlight */}
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Peluang Akselerasi dengan JasaWebsite</span>
            </div>
            <p className="text-xs text-blue-800 leading-relaxed">
              Jika website Anda dialihkan ke arsitektur <strong>Next.js 16 SSG</strong> dan gambar otomatis dikonversi
              ke format <strong>WebP/AVIF</strong>, bobot halaman dapat dipangkas menjadi ~<strong>{potentialWeightKb} KB</strong> dan
              LCP berkurang drastis menjadi <strong>{potentialLcpSec} detik</strong>!
            </p>
            <div className="pt-1">
              <Link
                href="/audit-gratis"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
              >
                <span>Dapatkan Analisis PageSpeed Lengkap URL Anda Secara Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
