'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export default function ButtonShowcasePage() {
  const [loadingState, setLoadingState] = useState(false);

  const toggleLoading = () => {
    setLoadingState(true);
    setTimeout(() => setLoadingState(false), 2000);
  };

  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Koleksi Tombol & Call to Action (CTA)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Tombol adalah jembatan konversi akhir. Diuji untuk kenyamanan ketukan jari (minimum 48px tap target)
            dan umpan balik visual instan.
          </p>
        </div>

        {/* Primary Action States */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">1. Status Interaksi Tombol Utama (Primary States)</h2>
          <BrowserFrame url="https://jasawebsite.net/buttons-states">
            <div className="p-8 bg-white grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="text-center space-y-2">
                <button className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md hover:bg-blue-500 transition-all cursor-pointer">
                  Default State
                </button>
                <span className="text-[10px] text-slate-400 font-mono block">Normal / Idle</span>
              </div>

              <div className="text-center space-y-2">
                <button className="px-5 py-2.5 bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg ring-4 ring-blue-500/20 scale-105 transition-all">
                  Hover Active
                </button>
                <span className="text-[10px] text-slate-400 font-mono block">Hover / Focus</span>
              </div>

              <div className="text-center space-y-2">
                <button
                  onClick={toggleLoading}
                  className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                >
                  {loadingState ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <span>Klik Loading ↺</span>
                  )}
                </button>
                <span className="text-[10px] text-slate-400 font-mono block">Loading State</span>
              </div>

              <div className="text-center space-y-2">
                <button disabled className="px-5 py-2.5 bg-slate-200 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed">
                  Disabled State
                </button>
                <span className="text-[10px] text-slate-400 font-mono block">Non-aktif</span>
              </div>
            </div>
          </BrowserFrame>
        </section>

        {/* WhatsApp High-Conversion Triggers */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">2. Tombol WhatsApp Konversi Khusus Indonesia</h2>
          <BrowserFrame url="https://jasawebsite.net/buttons-whatsapp">
            <div className="p-8 bg-white grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div className="p-5 bg-slate-50 rounded-2xl text-center space-y-3 border border-slate-100">
                <p className="text-xs font-bold text-slate-800">Pulse Ring Calling</p>
                <div className="relative inline-block">
                  <span className="absolute -inset-1 rounded-full bg-emerald-500 animate-pulse opacity-75 blur-xs" />
                  <button className="relative px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg flex items-center gap-2">
                    <span className="text-base">💬</span>
                    <span>Chat WhatsApp Cepat</span>
                  </button>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl text-center space-y-3 border border-slate-100">
                <p className="text-xs font-bold text-slate-800">Dual Action Button</p>
                <div className="inline-flex rounded-xl shadow-md overflow-hidden">
                  <button className="px-4 py-2.5 bg-slate-900 text-white text-xs font-bold hover:bg-slate-800">
                    Minta Penawaran
                  </button>
                  <button className="px-3 py-2.5 bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 border-l border-emerald-700">
                    WA 📱
                  </button>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl text-center space-y-3 border border-slate-100">
                <p className="text-xs font-bold text-slate-800">Floating Corner Trigger</p>
                <button className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xl shadow-xl hover:scale-110 transition-transform mx-auto">
                  💬
                </button>
              </div>
            </div>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
