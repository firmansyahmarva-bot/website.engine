'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, CheckCircle2, SlidersHorizontal, Sparkles, Scale } from 'lucide-react';
import { ComparisonEntity } from '@/types';

interface ComparisonDirectoryProps {
  comparisons: ComparisonEntity[];
}

export function ComparisonDirectory({ comparisons }: ComparisonDirectoryProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    comparisons.forEach((c) => cats.add(c.category));
    return ['all', ...Array.from(cats)];
  }, [comparisons]);

  const filteredComparisons = useMemo(() => {
    return comparisons.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;

      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.itemA.name.toLowerCase().includes(q) ||
        item.itemB.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [comparisons, search, selectedCategory]);

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
            placeholder="Cari perbandingan (misal: Next.js vs WordPress, Shopify, Cloud Hosting, Laravel)..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
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
            const label = cat === 'all' ? 'Semua Kategori' : cat;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
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
          Menampilkan <strong className="text-slate-900">{filteredComparisons.length}</strong> dari{' '}
          {comparisons.length} perbandingan teknologi & bisnis
        </span>
        {selectedCategory !== 'all' && (
          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium border border-blue-200">
            Kategori: {selectedCategory}
          </span>
        )}
      </div>

      {/* Comparison Cards Grid */}
      {filteredComparisons.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Scale className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Perbandingan Tidak Ditemukan</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Tidak ada perbandingan yang cocok dengan kata kunci &quot;{search}&quot;. Coba gunakan kata
            kunci lain atau pilih &quot;Semua Kategori&quot;.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            Tampilkan Semua Perbandingan
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComparisons.map((item) => (
            <Link
              key={item.slug}
              href={`/perbandingan/${item.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Head-to-Head</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* VS Comparison Box */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      Opsi A
                    </div>
                    <div className="text-xs font-bold text-slate-900 line-clamp-1">{item.itemA.name}</div>
                    <div className="text-[10px] text-slate-500 line-clamp-2">{item.itemA.tagline}</div>
                  </div>
                  <div className="space-y-1 pl-2 border-l border-slate-200 relative">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      Opsi B
                    </div>
                    <div className="text-xs font-bold text-slate-900 line-clamp-1">{item.itemB.name}</div>
                    <div className="text-[10px] text-slate-500 line-clamp-2">{item.itemB.tagline}</div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {/* Key Metric Highlights */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Perbandingan Utama:</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-500">
                    {item.comparisonMatrix.slice(0, 2).map((row, idx) => (
                      <li key={idx} className="flex items-center justify-between text-[11px]">
                        <span className="truncate pr-2">{row.feature}</span>
                        <span className="font-semibold text-slate-700 shrink-0">
                          {row.winner === 'itemA'
                            ? `${item.itemA.name} 🏆`
                            : row.winner === 'itemB'
                            ? `${item.itemB.name} 🏆`
                            : 'Seimbang 🤝'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {item.comparisonMatrix.length} Baris Matriks Detail
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  Baca Ulasan
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
