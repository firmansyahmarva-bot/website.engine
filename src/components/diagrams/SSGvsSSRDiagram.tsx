export function SSGvsSSRDiagram() {
  return (
    <div className="my-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Perbandingan Arsitektur Teknis
        </span>
        <h3 className="text-lg font-bold text-white mt-1">
          Static Site Generation (SSG) vs Traditional Server-Side Rendering (SSR)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SSG Box */}
        <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/50 px-2.5 py-0.5 rounded-full border border-emerald-700/50">
                Pendekatan Platform Kami
              </span>
              <span className="text-xs font-mono text-emerald-300 font-bold">TTFB &lt; 50ms</span>
            </div>
            <h4 className="text-base font-bold text-white">Next.js Static Export (SSG)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Seluruh halaman HTML, CSS, dan aset di-generate saat build time. Disajikan langsung melalui CDN Edge atau server statis Hostinger tanpa query database berulang.
            </p>

            {/* Architecture Steps */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/60 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">1.</span>
                <span>Build Time: HTML & Schema dibuat</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/60 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">2.</span>
                <span>CDN Cache: File statis disimpan di edge</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/60 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">3.</span>
                <span>User Request: Respon instan tanpa eksekusi CPU</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-xs text-emerald-300">
            <span>Keamanan: Zero DB Vulnerability</span>
            <span className="font-bold">Skor Speed: 100/100</span>
          </div>
        </div>

        {/* Traditional SSR / WordPress Box */}
        <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-900/50 px-2.5 py-0.5 rounded-full border border-rose-700/50">
                Tradisional / CMS Lama
              </span>
              <span className="text-xs font-mono text-rose-300 font-bold">TTFB 800ms - 2.5s</span>
            </div>
            <h4 className="text-base font-bold text-white">Traditional Dynamic SSR / CMS</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setiap pengunjung memicu query database MySQL, eksekusi puluhan plugin server-side, dan komputasi runtime yang rentan crash saat lonjakan trafik tiba-tiba.
            </p>

            {/* Architecture Steps */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/80 border border-rose-900/60 flex items-center gap-2">
                <span className="text-rose-400 font-bold">1.</span>
                <span>User Request: Server menerima koneksi</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-rose-900/60 flex items-center gap-2">
                <span className="text-rose-400 font-bold">2.</span>
                <span>Runtime Compute: 20+ query database MySQL</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-rose-900/60 flex items-center gap-2">
                <span className="text-rose-400 font-bold">3.</span>
                <span>Latency Lag: Browser menunggu server parsing</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-900/50 flex items-center justify-between text-xs text-rose-300">
            <span>Keamanan: Rentan plugin exploit</span>
            <span className="font-bold">Skor Speed: 35-65/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
