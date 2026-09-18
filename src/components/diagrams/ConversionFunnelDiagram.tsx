export function ConversionFunnelDiagram() {
  const steps = [
    {
      stage: '1. Inbound Traffic',
      sub: 'Top of Funnel (TOFU)',
      volume: '100% Pengunjung',
      desc: 'Pengunjung organik dari Google Search, GEO AI search, media sosial, dan referral B2B.',
      bg: 'bg-blue-600',
      width: 'w-full',
      metrics: 'CTR 8.4% di SERP',
    },
    {
      stage: '2. Engagement & Trust',
      sub: 'Middle of Funnel (MOFU)',
      volume: '45% Terlibat Aktif',
      desc: 'Membaca portofolio industri, mempelajari panduan teknis, dan menghitung estimasi biaya.',
      bg: 'bg-indigo-600',
      width: 'w-[82%]',
      metrics: 'Durasi Rata-rata 3m 40d',
    },
    {
      stage: '3. Lead Capture & RFQ',
      sub: 'Bottom of Funnel (BOFU)',
      volume: '12% Konversi Formulir',
      desc: 'Mengisi detail spesifikasi website di form RFQ atau mengklik tombol chat WhatsApp.',
      bg: 'bg-violet-600',
      width: 'w-[64%]',
      metrics: 'Formulir Terkirim + Direct WA',
    },
    {
      stage: '4. WhatsApp Closing & Deal',
      sub: 'Sales Handoff',
      volume: '4.8% Klien Resmi',
      desc: 'Konsultasi teknis personal via WhatsApp, penerbitan invoice penawaran, dan kick-off proyek.',
      bg: 'bg-emerald-600',
      width: 'w-[46%]',
      metrics: 'Nilai Transaksi Terverifikasi',
    },
  ];

  return (
    <div className="my-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
          Arsitektur Corong Konversi Komersial
        </span>
        <h3 className="text-lg font-bold text-white mt-1">
          Alur Konversi Dari Trafik Organik Menjadi Penjualan Resmi
        </h3>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`${step.width} ${step.bg} rounded-2xl p-4 shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/10`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                    {step.sub}
                  </span>
                  <h4 className="font-bold text-sm text-white">{step.stage}</h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-extrabold bg-black/30 px-2.5 py-1 rounded-full text-white inline-block">
                    {step.volume}
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/80 mt-2 leading-relaxed">{step.desc}</p>
              <div className="mt-2 text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 rounded inline-block">
                Metrik Target: {step.metrics}
              </div>
            </div>

            {idx < steps.length - 1 && (
              <div className="py-1 text-slate-500">
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center flex flex-wrap justify-center gap-6 font-mono">
        <span>✓ Tracking Event: Google Analytics 4</span>
        <span>✓ Handoff: Direct WhatsApp Protocol</span>
        <span>✓ Log: CSV Backup Real-time</span>
      </div>
    </div>
  );
}
