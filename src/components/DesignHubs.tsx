'use client';

import React, { useState } from 'react';
import { Language, WebsiteTemplate } from '@/types';
import { websiteTemplates } from '@/data/templates';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  Sparkles, 
  ExternalLink, 
  Check, 
  Zap, 
  Layout, 
  Monitor, 
  Smartphone, 
  X, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';

interface DesignHubsProps {
  currentLang: Language;
  onSelectTemplate: (template: WebsiteTemplate) => void;
}

export const DesignHubs: React.FC<DesignHubsProps> = ({ currentLang, onSelectTemplate }) => {
  const t = getTranslation(currentLang);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewTemplate, setPreviewTemplate] = useState<WebsiteTemplate | null>(null);

  const categories = ['all', ...Array.from(new Set(websiteTemplates.map((tpl) => tpl.category)))];

  const filteredTemplates = selectedCategory === 'all'
    ? websiteTemplates
    : websiteTemplates.filter((tpl) => tpl.category === selectedCategory);

  return (
    <section id="hubs" className="py-20 relative bg-slate-950 border-t border-slate-900">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400">
            <Layout className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Arsitektur Desain Nyata' : currentLang === 'ar' ? 'تصاميم احترافية جاهزة' : 'Production-Ready Architecture'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.hubsTitle}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400">
            {t.hubsSubtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat === 'all' ? t.hubsFilterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Design Hubs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const desc = template.description[currentLang] || template.description.id;
            const features = template.features[currentLang] || template.features.id;
            const ideal = template.idealFor[currentLang] || template.idealFor.id;

            return (
              <div
                key={template.id}
                className="group flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Realistic Browser Window Mockup Banner */}
                <div className="relative h-56 w-full flex flex-col overflow-hidden border-b border-slate-800 bg-slate-950">
                  
                  {/* macOS Window Top Bar */}
                  <div className="h-7 px-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between z-20 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] text-slate-400 font-mono tracking-tight flex items-center gap-1">
                      <span className="text-emerald-400">🔒</span>
                      <span>webscale.engine/{template.id}</span>
                    </div>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 text-[10px] font-extrabold">
                      <Zap className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                      <span>{template.speedScore}</span>
                    </div>
                  </div>

                  {/* High-Resolution Website Preview with Smooth Zoom */}
                  <div className="relative flex-1 w-full overflow-hidden">
                    {template.previewImage && (
                      <img
                        src={template.previewImage}
                        alt={template.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    )}

                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                    {/* Category pill & Title overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
                          {template.category}
                        </span>
                      </div>

                      <div>
                        <span className="text-[11px] font-medium text-slate-300 drop-shadow">
                          {template.style}
                        </span>
                        <h3 className="text-base font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-cyan-300 transition-colors">
                          {template.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {desc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2 pt-1">
                      {features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {ideal.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => setPreviewTemplate(template)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.previewLive}</span>
                    </button>

                    <button
                      onClick={() => {
                        onSelectTemplate(template);
                        const el = document.getElementById('calculator');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1"
                    >
                      <span>{t.selectTemplate}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Live Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header: Browser Mockup Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">
                  https://demo.webscale.io/preview/{previewTemplate.id}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  <Zap className="w-3 h-3" />
                  Speed 98/100
                </span>
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Interactive Preview Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-950">
              
              {/* Simulated Live Template Header Frame */}
              <div 
                className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-slate-800 shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${previewTemplate.colorScheme.primary} 0%, ${previewTemplate.colorScheme.secondary} 100%)` }}
              >
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ background: previewTemplate.colorScheme.accent }}
                />

                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/40 text-white border border-white/20 mb-4">
                  {previewTemplate.category}
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {previewTemplate.name}
                </h2>

                <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto mb-8 font-light">
                  {previewTemplate.tagline}
                </p>

                {/* Simulated Action inside Mockup */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm text-slate-900 bg-white shadow-lg">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Interactive Architecture Preview</span>
                </div>
              </div>

              {/* Specifications & Deliverables Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-cyan-400" />
                    <span>{currentLang === 'id' ? 'Fitur Bawaan Template' : currentLang === 'ar' ? 'الميزات المضمنة في القالب' : 'Template Core Features'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {(previewTemplate.features[currentLang] || previewTemplate.features.id).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>{currentLang === 'id' ? 'Target Industri Terbaik' : currentLang === 'ar' ? 'القطاعات الأكثر ملاءمة' : 'Ideal Business Verticals'}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(previewTemplate.idealFor[currentLang] || previewTemplate.idealFor.id).map((ind, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                        {ind}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                    {currentLang === 'id' 
                      ? 'Template ini dioptimalkan khusus untuk mendominasi kata kunci Google dengan skor Core Web Vitals 95+.'
                      : currentLang === 'ar'
                      ? 'تمت برمجة هذا القالب ليتصدر محركات البحث العالمية مع درجات سرعة قوقل تفوق 95.'
                      : 'This template is tailored for instant Google organic crawlability with 95+ Core Web Vitals score.'}
                  </p>
                </div>

              </div>

            </div>

            {/* Modal Bottom CTA Footer */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                {currentLang === 'id' ? 'Ingin menggunakan template ini untuk website Anda?' : currentLang === 'ar' ? 'هل تريد تخصيص هذا التصميم لشركتك؟' : 'Ready to customize this design for your business?'}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `${t.whatsappMessagePrefix}\n🎨 Template: ${previewTemplate.name}\nMohon info ketersediaan slot pengerjaan.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp CS</span>
                </a>

                <button
                  onClick={() => {
                    onSelectTemplate(previewTemplate);
                    setPreviewTemplate(null);
                    const el = document.getElementById('calculator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
                >
                  <span>{t.selectTemplate}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
