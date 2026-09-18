'use client';

import { useState, ReactNode } from 'react';

interface BrowserFrameProps {
  title?: string;
  url?: string;
  children: ReactNode;
  allowViewportToggle?: boolean;
  className?: string;
}

export function BrowserFrame({
  title = 'Website Preview',
  url = 'https://jasawebsite.net/demo',
  children,
  allowViewportToggle = true,
  className = '',
}: BrowserFrameProps) {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl overflow-hidden ${className}`}>
      {/* Browser chrome header */}
      <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700/60 flex items-center justify-between gap-4">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-sm mx-auto flex items-center justify-center gap-1.5 px-3 py-1 bg-slate-900/80 rounded-lg text-slate-400 text-xs font-mono truncate border border-slate-700/40">
          <span className="text-emerald-400">🔒</span>
          <span className="truncate">{url}</span>
        </div>

        {/* Viewport switcher */}
        {allowViewportToggle && (
          <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-700/40 text-xs">
            <button
              onClick={() => setViewport('desktop')}
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                viewport === 'desktop'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Desktop view"
            >
              Desktop
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                viewport === 'mobile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile view"
            >
              Mobile
            </button>
          </div>
        )}
      </div>

      {/* Viewport canvas */}
      <div
        className={`transition-all duration-300 mx-auto bg-slate-50 overflow-x-hidden ${
          viewport === 'mobile' ? 'max-w-[390px] border-x border-slate-700/40 min-h-[500px]' : 'w-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
