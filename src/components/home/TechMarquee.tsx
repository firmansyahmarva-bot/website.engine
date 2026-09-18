import React from 'react';

const TECH_ITEMS = [
  { name: 'Next.js 16 (React 19)', role: 'App Architecture', badge: 'Ultra-Fast SSR' },
  { name: 'TypeScript', role: 'Type Safety', badge: 'Strict Standard' },
  { name: 'Tailwind CSS v4', role: 'Design Engine', badge: 'Modern Styling' },
  { name: 'Google Cloud Platform', role: 'Cloud Infrastructure', badge: '99.9% Uptime' },
  { name: 'Cloudflare Edge CDN', role: 'Global Caching & SSL', badge: 'Sub-second TTFB' },
  { name: 'Schema.org JSON-LD', role: 'Semantic Search Engine', badge: 'Rich Results' },
  { name: 'Google Analytics 4', role: 'Data & Traffic Tracking', badge: 'Verified Metrics' },
  { name: 'Meta Pixel & Conversion API', role: 'Ad Signal Tracking', badge: 'CPA Optimized' },
  { name: 'WhatsApp Business API', role: 'Instant Sales Pipeline', badge: 'Direct Closing' },
  { name: 'Core Web Vitals Pass', role: 'Google Performance Rating', badge: 'Score 95-100' },
];

export default function TechMarquee() {
  return (
    <section className="py-6 bg-slate-900 border-y border-slate-800 overflow-hidden relative" aria-label="Teknologi dan Standar Industri">
      {/* Gradient edge masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-3 mb-3 px-4 max-w-7xl mx-auto justify-center">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
          Direkayasa dengan Standar Teknologi dan Ekosistem Kelas Enterprise
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {/* Double list for seamless infinite loop */}
          {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-sm backdrop-blur-sm shrink-0 hover:border-blue-500/50 hover:bg-slate-800 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="text-left">
                <span className="block text-xs font-bold text-white tracking-wide">{item.name}</span>
                <span className="block text-[10px] text-slate-400">{item.role}</span>
              </div>
              <span className="ml-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/60">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
