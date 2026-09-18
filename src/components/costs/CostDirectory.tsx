'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, DollarSign, Wallet, AlertTriangle, TrendingUp, SlidersHorizontal } from 'lucide-react';
import { CostGuideEntity } from '@/types';

interface CostDirectoryProps {
  guides: CostGuideEntity[];
}

export function CostDirectory({ guides }: CostDirectoryProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    guides.forEach((g) => cats.add(g.category));
    return ['all', ...Array.from(cats)];
  }, [guides]);

  const filteredGuides = useMemo(() => {
    return guides.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;

      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [guides, search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari panduan biaya (misal: company profile, e-commerce, landing page, maintenance, klinik)..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded-md transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
          {categories.map((cat) => {
            const label = cat === 'all' ? 'Semua Industri' : cat;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Menampilkan <strong className="text-slate-900">{filteredGuides.length}</strong> dari{' '}
          {guides.length} panduan biaya pembuatan website
        </span>
        {selectedCategory !== 'all' && (
          <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-medium border border-emerald-200">
            Kategori: {selectedCategory}
          </span>
        )}
      </div>

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Wallet className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Panduan Biaya Tidak Ditemukan</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Tidak ada panduan biaya yang sesuai dengan kata kunci &quot;{search}&quot;. Coba ganti kata
            kunci atau pilih &quot;Semua Industri&quot;.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            Tampilkan Semua Panduan Biaya
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/biaya/${guide.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-400 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Panduan Anggaran</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-2">
                  {guide.title}
                </h3>

                {/* Price Range Badges */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Rentang Estimasi Biaya Riil:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <div className="text-[9px] text-slate-400 font-bold uppercase">Starter</div>
                      <div className="text-[11px] font-black text-slate-900 truncate">
                        {guide.tierPrices.starter.range.split('-')[0].trim()}
                      </div>
                    </div>
                    <div className="bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
                      <div className="text-[9px] text-emerald-700 font-bold uppercase">Business</div>
                      <div className="text-[11px] font-black text-emerald-800 truncate">
                        {guide.tierPrices.business.range.split('-')[0].trim()}
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <div className="text-[9px] text-slate-400 font-bold uppercase">Enterprise</div>
                      <div className="text-[11px] font-black text-slate-900 truncate">
                        {guide.tierPrices.enterprise.range.split('-')[0].trim()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>

                {/* Extra Insights */}
                <div className="space-y-1 text-[11px] text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5 text-amber-700">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{guide.hiddenCostsWarning.length} Biaya Tersembunyi Wajib Diwaspadai</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Analisis ROI: {guide.roiAnalysis.breakEvenTimeline}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">5 Komponen Biaya Rinci</span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Buka Rincian Biaya
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
