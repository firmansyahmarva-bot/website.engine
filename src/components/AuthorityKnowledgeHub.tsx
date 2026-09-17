'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { knowledgeCategories, knowledgeTopics, KnowledgeTopic } from '@/data/knowledge-topics';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Cpu, 
  Zap, 
  Layers, 
  ExternalLink, 
  MessageCircle 
} from 'lucide-react';

interface AuthorityKnowledgeHubProps {
  currentLang: Language;
}

export const AuthorityKnowledgeHub: React.FC<AuthorityKnowledgeHubProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTopics = knowledgeTopics.filter((topic) => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const title = topic.title[currentLang] || topic.title.id;
    const summary = topic.shortSummary[currentLang] || topic.shortSummary.id;
    const matchesSearch = searchQuery.trim() === '' || 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.relatedKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="knowledge" className="py-20 relative bg-slate-900/80 border-t border-slate-800">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400">
            <Bot className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Pusat Otoritas Pengetahuan & AI Citations' : currentLang === 'ar' ? 'مركز المعرفة وتغذية الذكاء الاصطناعي' : 'Authority Knowledge & AI Engine Citations'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentLang === 'id'
              ? 'Ensiklopedia Otoritas Website, Speed, SEO & AI'
              : currentLang === 'ar'
              ? 'الموسوعة الشاملة للمواقع والسرعة والسيو والذكاء الاصطناعي'
              : 'Website, Speed, SEO & AI Authority Encyclopedia'}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {currentLang === 'id'
              ? 'Ribuan topik komprehensif yang dirancang untuk menjawab pertanyaan apapun seputar website, terindeks di Google, dan dikutip langsung oleh ChatGPT, Perplexity, dan Google Gemini.'
              : currentLang === 'ar'
              ? 'مئات المقالات المرجعية المصممة لتغذية روبوتات الذكاء الاصطناعي وجلب آلاف الزوار المستهدفين يومياً.'
              : 'Deep topical authority engineered to capture featured snippets on Google and direct citations across Perplexity, ChatGPT Search, and Gemini.'}
          </p>

          {/* Interactive Search Bar */}
          <div className="relative max-w-xl mx-auto pt-4">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'id' ? 'Cari topik: GSC, Core Web Vitals, Google Tag, GEO...' : 'Search topics: GSC, speed, export, AI search...'}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {knowledgeCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label[currentLang] || cat.label.id}
            </button>
          ))}
        </div>

        {/* Topics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => {
            const title = topic.title[currentLang] || topic.title.id;
            const summary = topic.shortSummary[currentLang] || topic.shortSummary.id;
            const categoryLabel = topic.categoryLabel[currentLang] || topic.categoryLabel.id;

            return (
              <div
                key={topic.slug}
                className="flex flex-col justify-between p-6 rounded-3xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                      {categoryLabel}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 font-bold">
                      <Sparkles className="w-3 h-3" />
                      GEO Optimized
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                  <a
                    href={`/knowledge/${topic.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Baca Panduan Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Halo Tim WebScale! Saya ingin tanya lebih lanjut tentang: ${title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
                    title="Tanya di WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 10,000 Topics Potential Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Skalabilitas Hingga 10.000+ Topik & Pertanyaan</span>
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Arsitektur data kami memungkinkan penambahan ribuan topik terprogram untuk mendominasi setiap pencarian teknis di internet dan menjaring ribuan calon pembeli baru setiap bulan.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Halo Tim WebScale! Saya tertarik membuat website dengan arsitektur authority ribuan halaman seperti ini untuk industri bisnis saya.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Konsultasi Skala Ribuan Halaman</span>
          </a>
        </div>

      </div>
    </section>
  );
};
