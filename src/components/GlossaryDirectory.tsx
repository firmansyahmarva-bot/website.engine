'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { GlossaryEntry, GlossaryCategory } from '@/types';

interface GlossaryDirectoryProps {
  entries: GlossaryEntry[];
}

const CATEGORIES: { key: 'all' | GlossaryCategory; label: string }[] = [
  { key: 'all', label: 'Semua Kategori' },
  { key: 'seo', label: 'SEO Organik' },
  { key: 'geo-aeo', label: 'GEO & Mesin AI' },
  { key: 'analytics', label: 'Analitik & Data' },
  { key: 'performance', label: 'Core Web Vitals & Speed' },
  { key: 'technical', label: 'Teknikal & Arsitektur' },
  { key: 'design-ux', label: 'Desain & UX' },
  { key: 'conversion', label: 'Konversi (CRO)' },
  { key: 'ecommerce', label: 'E-commerce & Kasir' },
];

export function GlossaryDirectory({ entries }: GlossaryDirectoryProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | GlossaryCategory>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');

  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.shortDefinition.toLowerCase().includes(q) ||
        item.aliases.some((a) => a.toLowerCase().includes(q));

      const matchLetter =
        selectedLetter === 'all' ||
        item.term.toUpperCase().startsWith(selectedLetter);

      return matchCategory && matchSearch && matchLetter;
    });
  }, [entries, search, selectedCategory, selectedLetter]);

  // Alphabet list that actually has entries
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    entries.forEach((e) => {
      const firstChar = e.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return Array.from(letters).sort();
  }, [entries]);

  const getCategoryBadgeColor = (cat: GlossaryCategory) => {
    switch (cat) {
      case 'seo':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'geo-aeo':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'analytics':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'performance':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'technical':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'design-ux':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'conversion':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'ecommerce':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari istilah web, SEO, atau performa (misal: LCP, canonical, GSC, TTFB)..."
          className="w-full px-5 py-4 pl-12 rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base transition-all"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-md"
          >
            Bersihkan
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* A-Z Quick Jump Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-3 bg-white rounded-2xl border border-slate-100 shadow-xs max-w-3xl mx-auto">
        <button
          onClick={() => setSelectedLetter('all')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
            selectedLetter === 'all'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Semua
        </button>
        {availableLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`w-7 h-7 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
              selectedLetter === letter
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Stats Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 max-w-6xl mx-auto px-2">
        <p>
          Menampilkan <span className="font-semibold text-slate-900">{filteredEntries.length}</span>{' '}
          istilah dari total <span className="font-semibold text-slate-900">{entries.length}</span> materi
        </p>
        {(search || selectedCategory !== 'all' || selectedLetter !== 'all') && (
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              setSelectedLetter('all');
            }}
            className="text-blue-600 hover:underline font-medium"
          >
            Reset Semua Filter
          </button>
        )}
      </div>

      {/* Entries Grid */}
      {filteredEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredEntries.map((item) => (
            <Link
              key={item.slug}
              href={`/panduan/${item.slug}`}
              className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg border ${getCategoryBadgeColor(
                      item.category
                    )}`}
                  >
                    {item.category.toUpperCase()}
                  </span>
                  {item.aliases.length > 0 && (
                    <span className="text-[11px] text-slate-400 font-mono truncate max-w-[130px]">
                      {item.aliases[0]}
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {item.term}
                </h2>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {item.shortDefinition}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-600 group-hover:text-blue-700">
                <span>Pelajari Selengkapnya</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 max-w-md mx-auto">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            🔍
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Tidak ada istilah yang cocok
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Coba ubah kata kunci pencarian Anda atau pilih kategori yang berbeda.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              setSelectedLetter('all');
            }}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Tampilkan Semua Istilah
          </button>
        </div>
      )}
    </div>
  );
}
