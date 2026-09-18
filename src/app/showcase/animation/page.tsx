'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

interface AnimationDemo {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  codeSnippet: string;
}

const ANIMATIONS: AnimationDemo[] = [
  {
    id: 'fade-up',
    name: 'Fade Up Entrance',
    description: 'Elemen bergeser naik halus dari 20px sambil memudar transparan ke nyata.',
    cssClass: 'animate-fade-up',
    codeSnippet: '@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }',
  },
  {
    id: 'scale-in',
    name: 'Scale In Pop',
    description: 'Elemen membesar halus dari 95% ke 100% ukuran normal.',
    cssClass: 'animate-scale-in',
    codeSnippet: '@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }',
  },
  {
    id: 'float',
    name: 'Continuous Float',
    description: 'Efek melayang lembut naik-turun 8px tanpa interupsi terus-menerus.',
    cssClass: 'animate-float',
    codeSnippet: '@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }',
  },
  {
    id: 'pulse-ring',
    name: 'Pulse Ring Radar',
    description: 'Gelombang denyut melingkar yang cocok untuk tombol WhatsApp mengambang.',
    cssClass: 'animate-pulse-ring',
    codeSnippet: '@keyframes pulse-ring { 0% { transform: scale(0.95); opacity: 0.8; } 50% { transform: scale(1.4); opacity: 0; } }',
  },
];

export default function AnimationShowcasePage() {
  const [replayKeys, setReplayKeys] = useState<{ [key: string]: number }>({});

  const handleReplay = (id: string) => {
    setReplayKeys((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Katalog Animasi CSS Murni (Zero JavaScript Bloat)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Semua animasi dibangun menggunakan CSS3 hardware accelerated murni. Ukuran total di bawah
            15KB dan mematuhi aturan aksesibilitas prefers-reduced-motion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ANIMATIONS.map((anim) => {
            const key = replayKeys[anim.id] || 0;
            return (
              <div key={anim.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">{anim.name}</h2>
                  <button
                    onClick={() => handleReplay(anim.id)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Replay ↻
                  </button>
                </div>

                <p className="text-xs text-slate-500">{anim.description}</p>

                {/* Stage view */}
                <div className="h-40 bg-slate-900 rounded-2xl flex items-center justify-center p-4 overflow-hidden relative">
                  <div
                    key={key}
                    className={`p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-xl flex items-center gap-2 ${anim.cssClass}`}
                  >
                    <span>✨</span>
                    <span>{anim.name}</span>
                  </div>
                </div>

                {/* Code preview */}
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-[11px] text-slate-700 overflow-x-auto border border-slate-100">
                  <code>{anim.codeSnippet}</code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
