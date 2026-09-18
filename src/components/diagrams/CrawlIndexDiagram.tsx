export function CrawlIndexDiagram() {
  return (
    <div className="my-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl overflow-x-auto">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
          Arsitektur Crawling & Indexing Mesin Pencari
        </span>
        <h3 className="text-lg font-bold text-white mt-1">
          Alur Kerja Googlebot: Dari URL Hingga SERP
        </h3>
      </div>

      <div className="min-w-[640px] flex items-center justify-between gap-2 relative">
        {/* Step 1: Crawl Discovery */}
        <div className="flex-1 bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 text-center relative group hover:border-blue-500 transition-colors">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <div className="font-bold text-sm text-slate-100 mb-1">Crawling</div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Googlebot membaca <code className="text-blue-300">sitemap.xml</code> dan mengikuti tautan internal.
          </div>
          <div className="mt-2 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50 inline-block font-mono">
            HTTP 200 OK
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="text-slate-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 2: Processing & Render */}
        <div className="flex-1 bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 text-center relative group hover:border-cyan-500 transition-colors">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <div className="font-bold text-sm text-slate-100 mb-1">Rendering (WRS)</div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Web Rendering Service mengeksekusi JavaScript dan DOM tree HTML.
          </div>
          <div className="mt-2 text-[10px] text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50 inline-block font-mono">
            Static HTML Ready
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="text-slate-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 3: Indexing & Semantic */}
        <div className="flex-1 bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 text-center relative group hover:border-amber-500 transition-colors">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <div className="font-bold text-sm text-slate-100 mb-1">Indexing</div>
          <div className="text-[11px] text-slate-400 leading-tight">
            JSON-LD Schema & konten disimpan ke database Google Index raksasa.
          </div>
          <div className="mt-2 text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50 inline-block font-mono">
            Canonicalized
          </div>
        </div>

        {/* Arrow 3 */}
        <div className="text-slate-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 4: SERP Ranking */}
        <div className="flex-1 bg-blue-950/40 border border-blue-600/50 rounded-xl p-4 text-center relative group hover:border-blue-400 transition-colors shadow-lg shadow-blue-950/50">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            04
          </div>
          <div className="font-bold text-sm text-white mb-1">Peringkat SERP</div>
          <div className="text-[11px] text-blue-200/80 leading-tight">
            Algoritma mencocokkan search intent pengguna dan menyajikan tautan teratas.
          </div>
          <div className="mt-2 text-[10px] text-emerald-300 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-700 inline-block font-mono font-bold">
            Posisi 1 Google
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center flex flex-wrap justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" /> Waktu Crawl Budget Efisien
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-400" /> Tanpa Render Lag JavaScript
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" /> Struktur Entitas Schema Kaya
        </span>
      </div>
    </div>
  );
}
