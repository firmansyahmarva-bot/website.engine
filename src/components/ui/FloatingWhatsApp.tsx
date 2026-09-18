'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Clock, Send } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Subtle auto-open preview tooltip after 4 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setHasInteracted(true);
  };

  const whatsappHref = generateDirectWhatsAppUrl('pembuatan website bisnis & estimasi biaya');

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Expandable Chat Balloon */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 relative">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Tutup pesan"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Balloon Header */}
          <div className="flex items-center gap-3 mb-3 pr-6">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                CS
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                <span>Konsultan Website</span>
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
              </p>
              <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Online (Balas &lt; 5 Menit)</span>
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl mb-3 text-xs text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-900 mb-1">Halo! Sedang merencanakan website baru?</p>
            <p>
              Konsultasikan tipe website, target bisnis, atau hitung estimasi biaya proyek Anda bersama tim arsitek kami secara gratis.
            </p>
          </div>

          {/* Direct WhatsApp Trigger */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHasInteracted(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat Konsultasi WhatsApp Sekarang</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative flex items-center">
        {/* Pulsing glow ring behind button */}
        <span className="animate-pulse-ring absolute -inset-1 rounded-full bg-emerald-500/50 pointer-events-none" />

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setHasInteracted(true)}
          className="relative inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-emerald-400 group"
          aria-label="Konsultasi via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="hidden sm:inline-block">Konsultasi WhatsApp</span>
          <span className="sm:hidden text-xs">Chat WA</span>

          {/* Online badge */}
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-ping absolute -top-1 -right-1" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 absolute -top-1 -right-1" />
        </a>
      </div>

    </div>
  );
}
