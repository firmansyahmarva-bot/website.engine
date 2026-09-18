'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContextualScrollCTAProps {
  term: string;
  category?: string;
  whatsappUrl: string;
}

export function ContextualScrollCTA({ term, whatsappUrl }: ContextualScrollCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem(`cta_dismissed_${term}`)) {
        setDismissed(true);
        return;
      }
    } catch {}

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const scrollPercent = window.scrollY / docHeight;
            if (scrollPercent >= 0.60 && !dismissed) {
              setVisible(true);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [term, dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    try {
      sessionStorage.setItem(`cta_dismissed_${term}`, '1');
    } catch {}
  };

  if (!visible || dismissed) return null;

  return (
    <aside
      aria-label="Penawaran Konsultasi Relevan"
      className="fixed bottom-6 right-4 sm:right-6 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-96 bg-white/95 backdrop-blur-md border border-blue-200/80 rounded-2xl p-4 shadow-2xl transition-all duration-300 animate-in fade-in"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            Solusi Arsitektur Web
          </span>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Tutup pemberitahuan"
          className="text-slate-400 hover:text-slate-700 text-sm font-bold w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="mt-2">
        <h4 className="text-sm font-bold text-slate-900 leading-snug">
          Menerapkan <span className="text-blue-600">{term}</span> pada Website Anda?
        </h4>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Tingkatkan performa, SEO, dan konversi bisnis dengan audit mendalam tanpa biaya.
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Link
          href="/audit-gratis"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl text-center shadow-xs transition-colors"
        >
          Audit Gratis
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1"
        >
          <span>💬</span> Chat Ahli
        </a>
      </div>
    </aside>
  );
}