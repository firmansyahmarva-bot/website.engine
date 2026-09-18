export function CoreWebVitalsBar() {
  const metrics = [
    {
      name: 'LCP (Largest Contentful Paint)',
      desc: 'Waktu pemuatan elemen visual utama (Hero/Image)',
      ourScore: '0.8 detik',
      ranges: [
        { label: '≤ 2.5d (Baik)', width: '45%', color: 'bg-emerald-500' },
        { label: '2.5d - 4.0d (Perlu Optimasi)', width: '30%', color: 'bg-amber-500' },
        { label: '> 4.0d (Buruk)', width: '25%', color: 'bg-rose-500' },
      ],
      achievement: 'Terpenuhi (99.8% Lulus Google)',
    },
    {
      name: 'INP (Interaction to Next Paint)',
      desc: 'Responsivitas klik dan interaksi pengguna',
      ourScore: '32 ms',
      ranges: [
        { label: '≤ 200ms (Baik)', width: '40%', color: 'bg-emerald-500' },
        { label: '200ms - 500ms (Perlu Optimasi)', width: '35%', color: 'bg-amber-500' },
        { label: '> 500ms (Buruk)', width: '25%', color: 'bg-rose-500' },
      ],
      achievement: 'Instan (Zero Lag React 19)',
    },
    {
      name: 'CLS (Cumulative Layout Shift)',
      desc: 'Stabilitas visual saat elemen halaman dimuat',
      ourScore: '0.00',
      ranges: [
        { label: '≤ 0.1 (Baik)', width: '50%', color: 'bg-emerald-500' },
        { label: '0.1 - 0.25 (Perlu Optimasi)', width: '30%', color: 'bg-amber-500' },
        { label: '> 0.25 (Buruk)', width: '20%', color: 'bg-rose-500' },
      ],
      achievement: 'Sempurna (Tata Letak Terkunci)',
    },
  ];

  return (
    <div className="my-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Tolok Ukur Standar Google Search Central
          </span>
          <h3 className="text-lg font-bold text-white mt-1">
            Visualisasi Ambang Batas Core Web Vitals (CWV)
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 px-3 py-1 rounded-full font-bold">
            100/100 Lighthouse
          </span>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
              <div>
                <span className="font-bold text-slate-100 text-sm">{m.name}</span>
                <span className="text-slate-400 ml-2 hidden sm:inline">— {m.desc}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Hasil Platform:</span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  {m.ourScore}
                </span>
                <span className="text-[11px] text-emerald-300">({m.achievement})</span>
              </div>
            </div>

            {/* Threshold Progress Bar */}
            <div className="h-4 w-full rounded-full overflow-hidden flex bg-slate-800 shadow-inner">
              {m.ranges.map((r, rIdx) => (
                <div
                  key={rIdx}
                  style={{ width: r.width }}
                  className={`${r.color} h-full transition-all relative group flex items-center justify-center`}
                  title={r.label}
                />
              ))}
            </div>

            {/* Legend Labels */}
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              {m.ranges.map((r, rIdx) => (
                <span key={rIdx} className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${r.color}`} />
                  {r.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
