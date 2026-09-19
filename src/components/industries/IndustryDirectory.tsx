'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IndustryEntity } from '@/types';
import Reveal from '@/components/motion/Reveal';
import TiltCard from '@/components/motion/TiltCard';

interface Props {
  industries: IndustryEntity[];
}

export function IndustryDirectory({ industries }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    industries.forEach((ind) => {
      if (ind.category) cats.add(ind.category);
    });
    return ['Semua', ...Array.from(cats).sort()];
  }, [industries]);

  const filtered = useMemo(() => {
    return industries.filter((ind) => {
      const matchCat =
        selectedCategory === 'Semua' || ind.category === selectedCategory;
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        ind.name.id.toLowerCase().includes(q) ||
        (ind.name.en && ind.name.en.toLowerCase().includes(q)) ||
        ind.slug.toLowerCase().includes(q) ||
        ind.description.id.toLowerCase().includes(q) ||
        (ind.tagline && ind.tagline.id && ind.tagline.id.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [industries, search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => {
            const count =
              cat === 'Semua'
                ? industries.length
                : industries.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}{' '}
                <span
                  className={`text-[10px] ml-1 ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari sektor industri (misal: Konstruksi, Hotel, Klinik)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid of Industries */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-sm">
            Tidak ada sektor industri yang sesuai dengan pencarian Anda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCategory('Semua');
            }}
            className="mt-3 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
          >
            Reset filter pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ind, idx) => (
            <Reveal key={ind.slug} delay={(idx % 6) * 60} direction="up" threshold={0.05}>
              <TiltCard maxTilt={4}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 h-full"
                >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                    {ind.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5 line-clamp-1">
                  {ind.name.id}
                </h3>

                <p className="text-xs text-blue-600 font-medium mb-3 line-clamp-1">
                  {ind.tagline.id}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {ind.description.id}
                </p>

                {ind.commonWebsiteGoals && ind.commonWebsiteGoals.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    {ind.commonWebsiteGoals.slice(0, 2).map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{goal}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Pelajari Solusi & Modul</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}