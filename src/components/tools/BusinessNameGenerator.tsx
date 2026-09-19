'use client';

import { useState, useMemo } from 'react';
import {
  Lightbulb,
  Sparkles,
  Copy,
  Check,
  Globe,
  ArrowRight,
  Filter,
  RefreshCw,
  Tag,
} from 'lucide-react';

interface NameIdea {
  name: string;
  style: string;
  tagline: string;
  domain: string;
}

const STYLES = [
  { id: 'all', label: 'Semua Gaya' },
  { id: 'modern', label: 'Modern & Digital' },
  { id: 'nusantara', label: 'Nuansa Nusantara / Elegan' },
  { id: 'catchy', label: 'Singkat & Catchy' },
  { id: 'premium', label: 'Korporat & Global' },
];

const SAMPLE_KEYWORDS = [
  'Kopi',
  'Kuliner',
  'Fashion',
  'Teknologi',
  'Konsultan',
  'Properti',
  'Kecantikan',
  'Kreatif',
];

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState('Kopi');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  // Capitalize helper
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const generatedNames = useMemo<NameIdea[]>(() => {
    const raw = keyword.trim() || 'Bisnis';
    const base = cap(raw);
    const cleanNoSpace = raw.replace(/\s+/g, '').toLowerCase();

    const list: NameIdea[] = [
      // Modern & Digital
      {
        name: `${base}Flow`,
        style: 'modern',
        tagline: `Solusi ${raw} terintegrasi untuk era digital`,
        domain: `${cleanNoSpace}flow.com`,
      },
      {
        name: `${base}fy Studio`,
        style: 'modern',
        tagline: `Inovasi cerdas di industri ${raw}`,
        domain: `${cleanNoSpace}fy.id`,
      },
      {
        name: `Nexa ${base}`,
        style: 'modern',
        tagline: `Generasi baru layanan ${raw}`,
        domain: `nexagroup.id`,
      },
      {
        name: `${base}Lab ID`,
        style: 'modern',
        tagline: `Laboratorium ide dan riset ${raw}`,
        domain: `${cleanNoSpace}lab.id`,
      },
      {
        name: `Sync${base}`,
        style: 'modern',
        tagline: `Sinergi kualitas tinggi dan efisiensi ${raw}`,
        domain: `sync${cleanNoSpace}.com`,
      },

      // Nuansa Nusantara / Elegan
      {
        name: `${base} Kencana`,
        style: 'nusantara',
        tagline: `Kemewahan dan keaslian cita rasa ${raw}`,
        domain: `${cleanNoSpace}kencana.co.id`,
      },
      {
        name: `Citra ${base} Nusantara`,
        style: 'nusantara',
        tagline: `Karya anak bangsa untuk kebutuhan ${raw} Anda`,
        domain: `citra${cleanNoSpace}.id`,
      },
      {
        name: `Graha ${base} Mulia`,
        style: 'nusantara',
        tagline: `Layanan terpercaya dengan komitmen prima`,
        domain: `graha${cleanNoSpace}.co.id`,
      },
      {
        name: `${base} Larasati`,
        style: 'nusantara',
        tagline: `Harmoni keunggulan dan tradisi ${raw}`,
        domain: `${cleanNoSpace}laras.id`,
      },
      {
        name: `Pustaka ${base}`,
        style: 'nusantara',
        tagline: `Standar emas dalam ekosistem ${raw}`,
        domain: `pustaka${cleanNoSpace}.com`,
      },

      // Singkat & Catchy
      {
        name: `${base}ku`,
        style: 'catchy',
        tagline: `Pilihan praktis dan dekat di hati`,
        domain: `${cleanNoSpace}ku.id`,
      },
      {
        name: `Halo${base}`,
        style: 'catchy',
        tagline: `Kemudahan akses ${raw} kapan saja`,
        domain: `halo${cleanNoSpace}.com`,
      },
      {
        name: `${base}Spot`,
        style: 'catchy',
        tagline: `Pusat destinasi favorit penggemar ${raw}`,
        domain: `${cleanNoSpace}spot.id`,
      },
      {
        name: `Kula ${base}`,
        style: 'catchy',
        tagline: `Komunitas dan ruang berkarya seputar ${raw}`,
        domain: `kula${cleanNoSpace}.com`,
      },
      {
        name: `${base}Nest`,
        style: 'catchy',
        tagline: `Tempat terbaik untuk menemukan ${raw}`,
        domain: `${cleanNoSpace}nest.id`,
      },

      // Korporat & Global
      {
        name: `Apex ${base} Group`,
        style: 'premium',
        tagline: `Penyedia solusi ${raw} skala enterprise`,
        domain: `apex${cleanNoSpace}.com`,
      },
      {
        name: `${base} & Co.`,
        style: 'premium',
        tagline: `Layanan bespoke dan berstandar internasional`,
        domain: `${cleanNoSpace}company.id`,
      },
      {
        name: `Vanguard ${base}`,
        style: 'premium',
        tagline: `Pelopor mutu dan kepuasan pelanggan`,
        domain: `vanguard${cleanNoSpace}.co.id`,
      },
      {
        name: `Lumina ${base}`,
        style: 'premium',
        tagline: `Inspirasi cerah untuk masa depan ${raw}`,
        domain: `lumina${cleanNoSpace}.com`,
      },
      {
        name: `Prime ${base} International`,
        style: 'premium',
        tagline: `Mitra strategis terdepan untuk pengembangan ${raw}`,
        domain: `prime${cleanNoSpace}.id`,
      },
    ];

    return list;
  }, [keyword]);

  const filteredNames = useMemo(() => {
    if (selectedStyle === 'all') return generatedNames;
    return generatedNames.filter((n) => n.style === selectedStyle);
  }, [generatedNames, selectedStyle]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Search & Configuration Bar */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="relative flex-1">
            <Lightbulb className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Ketik kata kunci atau bidang usaha (misal: Kopi, Fashion, Properti)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">Contoh:</span>
            <div className="flex flex-wrap gap-1.5">
              {SAMPLE_KEYWORDS.slice(0, 4).map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setKeyword(kw)}
                  className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Style Filters */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <div className="flex gap-2">
            {STYLES.map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setSelectedStyle(st.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedStyle === st.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Generated Business Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNames.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header: Name and Copy Button */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <button
                  type="button"
                  onClick={() => handleCopy(item.name)}
                  title="Salin Nama Usaha"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {copiedName === item.name ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Tagline Idea */}
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                &ldquo;{item.tagline}&rdquo;
              </p>
            </div>

            {/* Bottom: Domain Suggestion & Style Badge */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="inline-flex items-center gap-1 text-slate-400 font-mono">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.domain}</span>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
                {item.style}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
