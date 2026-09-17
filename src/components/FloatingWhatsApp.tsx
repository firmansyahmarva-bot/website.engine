'use client';

import React from 'react';
import { Language } from '@/types';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { MessageCircle, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const isRTL = currentLang === 'ar';

  const defaultMsg = currentLang === 'ar'
    ? 'السلام عليكم، أرغب في استشارة فريق WebScale بخصوص تصميم وبرمجة موقع إلكتروني.'
    : currentLang === 'en'
    ? 'Hello, I would like to consult with WebScale about building a high-performance website.'
    : 'Halo Tim WebScale! Saya ingin konsultasi pembuatan website dengan penawaran terbaik.';

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center gap-3 ${
        isRTL ? 'left-6 flex-row-reverse' : 'right-6'
      }`}
    >
      {/* Tooltip speech bubble */}
      <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold shadow-2xl backdrop-blur-md animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>{currentLang === 'id' ? 'Chat Admin (Online)' : currentLang === 'ar' ? 'متاحون الآن للرد' : 'CS Online'}</span>
      </div>

      {/* WhatsApp Pulse Circle Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 transform hover:scale-110 active:scale-95 transition-all duration-300"
        title="Hubungi Kami di WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
};
