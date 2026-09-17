'use client';

import React from 'react';
import { KnowledgeTopic } from '@/data/knowledge-topics';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  Sparkles, 
  ArrowLeft, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

interface KnowledgeArticleViewProps {
  topic: KnowledgeTopic;
}

export const KnowledgeArticleView: React.FC<KnowledgeArticleViewProps> = ({ topic }) => {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo Tim WebScale! Saya membaca artikel "${topic.title.id}" dan tertarik menerapkan standar teknologi ini pada website bisnis saya. Mohon info estimasi biaya dan konsultasi.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="/#knowledge"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Knowledge Hub</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800 flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Verified Authority
            </span>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Konsultasi</span> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Category & Title Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20 font-bold uppercase tracking-wider text-[10px]">
              {topic.categoryLabel.id}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              4 Min Read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {topic.title.id}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            {topic.shortSummary.id}
          </p>
        </div>

        {/* Quick Answer Snippet Box (Engineered for Google Featured Snippet & AI Overviews) */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/50 via-slate-900 to-slate-900 border border-cyan-500/30 shadow-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Ringkasan Jawaban Cepat (Definitive Answer)</span>
          </div>
          
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            {topic.quickAnswerSnippet.id}
          </p>
        </div>

        {/* Detailed In-Depth Content */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-4 border-t border-slate-800">
            Penjelasan Mendalam & Analisis Strategis
          </h2>

          <div className="space-y-4">
            {topic.detailedContent.id.map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Key Takeaways Checklist Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Poin Kunci yang Wajib Diingat (Key Takeaways)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {topic.keyTakeaways.id.map((takeaway, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structured FAQ Accordions */}
        {topic.faqs && topic.faqs.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
            </h3>

            <div className="space-y-3">
              {topic.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white">
                    {faq.q.id}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {faq.a.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sticky Conversion Anchor Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/40 text-center space-y-4 shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Ingin Menerapkan Standar Ini di Bisnis Anda?
          </span>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white">
            Bangun Website Berkecepatan Tinggi & Dominan Google Bersama WebScale
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Kami siap merancang website berarsitektur Jamstack, 100+ halaman terindeks, dan terhubung langsung ke WhatsApp Anda dalam hitungan hari.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 shadow-xl shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Konsultasi Proyek Topik Ini via WhatsApp</span>
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-850 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} WebScale Engine Authority Knowledge Hub. All rights reserved.</p>
      </footer>

    </div>
  );
};
