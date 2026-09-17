'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { faqsData } from '@/data/seo-data';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  currentLang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Jawaban Lengkap & Transparan' : currentLang === 'ar' ? 'إجابات واضحة وشفافة' : 'Common Inquiries'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.faqTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const question = faq.q[currentLang] || faq.q.id;
            const answer = faq.a[currentLang] || faq.a.id;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-900 animate-in fade-in duration-150">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-slate-800 text-center space-y-3">
          <h3 className="text-base font-bold text-white">
            {currentLang === 'id' ? 'Punya pertanyaan khusus yang belum tercantum?' : currentLang === 'ar' ? 'هل لديك استفسار إضافي لم تجده هنا؟' : 'Have a custom question not covered above?'}
          </h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            {currentLang === 'id' ? 'Tim technical lead kami siap menjawab pertanyaan teknis Anda langsung melalui WhatsApp.' : 'Our engineers and solution architects are ready to assist you directly via WhatsApp.'}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              currentLang === 'id' ? 'Halo, saya ingin bertanya lebih lanjut mengenai pembuatan website di WebScale Engine.' : 'Hello, I have additional technical questions about WebScale Engine.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tanya Langsung di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
