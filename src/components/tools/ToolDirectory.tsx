'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  Tags,
  MessageSquare,
  Gauge,
  Calculator,
  Code2,
  Share2,
  Monitor,
  Eye,
  Link2,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { TOOLS, ToolCategory, ToolItem } from '@/content/tools';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Tags,
  MessageSquare,
  Gauge,
  Calculator,
  Code2,
  Share2,
  Search,
  Monitor,
  Eye,
  Link2,
};

const CATEGORIES: ('Semua' | ToolCategory)[] = ['Semua', 'SEO', 'Marketing', 'Performance', 'Design & UX'];

export default function ToolDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | ToolCategory>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS.filter((tool) => {
    const matchesCategory = selectedCategory === 'Semua' || tool.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      tool.name.toLowerCase().includes(q) ||
      tool.title.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.features.some((f) => f.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const count = cat === 'Semua' ? TOOLS.length : TOOLS.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat} <span className="opacity-75 font-normal">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari alat (misal: WhatsApp, SERP, ROAS)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-sm">Tidak ada alat yang sesuai dengan pencarian Anda.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
          >
            Reset filter pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const IconComp = ICON_MAP[tool.iconName] || Sparkles;

            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon & Category/Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                        {tool.category}
                      </span>
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {tool.description}
                  </p>

                  {/* Top 2 Features */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    {tool.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Buka Tool Gratis</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Feature Value Props Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">100% Client-Side</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Data Anda tidak pernah dikirim ke server. Privasi dan kerahasiaan nomor & URL terlindungi.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Tanpa Registrasi & Limit</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Gunakan kapan saja tanpa batas kuota harian dan tanpa perlu login atau kartu kredit.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Salin & Unduh Instan</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Dilengkapi tombol satu klik untuk salin kode HTML, teks WhatsApp, dan unduh QR code SVG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
