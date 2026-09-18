'use client';

import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';
import { formatIDR } from '@/content/pricing';

const PRESETS = [
  {
    name: 'E-Commerce Fashion',
    adSpend: 5000000,
    clicks: 4000,
    conversionRate: 2.5,
    aov: 250000,
    marginPercent: 45,
  },
  {
    name: 'Herbal & Skincare',
    adSpend: 10000000,
    clicks: 8000,
    conversionRate: 3.0,
    aov: 180000,
    marginPercent: 65,
  },
  {
    name: 'Jasa B2B / Proyek',
    adSpend: 3500000,
    clicks: 800,
    conversionRate: 2.0,
    aov: 4500000,
    marginPercent: 70,
  },
  {
    name: 'F&B & Kuliner',
    adSpend: 2000000,
    clicks: 2500,
    conversionRate: 4.0,
    aov: 85000,
    marginPercent: 35,
  },
];

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState<number>(5000000);
  const [clicks, setClicks] = useState<number>(4000);
  const [conversionRate, setConversionRate] = useState<number>(2.5);
  const [aov, setAov] = useState<number>(250000);
  const [marginPercent, setMarginPercent] = useState<number>(50);
  const [copied, setCopied] = useState<boolean>(false);

  // Calculations
  const conversions = Math.max(1, Math.round((clicks * (conversionRate / 100))));
  const totalRevenue = conversions * aov;
  const roasMultiplier = adSpend > 0 ? Number((totalRevenue / adSpend).toFixed(2)) : 0;
  const roasPercent = Number((roasMultiplier * 100).toFixed(0));

  const cpa = conversions > 0 ? Math.round(adSpend / conversions) : 0;
  const cpc = clicks > 0 ? Math.round(adSpend / clicks) : 0;

  // Breakeven ROAS: 1 / (marginPercent / 100)
  const breakevenRoas = marginPercent > 0 ? Number((100 / marginPercent).toFixed(2)) : 0;

  // Gross profit before ad spend
  const grossProfit = Math.round(totalRevenue * (marginPercent / 100));

  // Net profit after ad spend
  const netProfit = grossProfit - adSpend;
  const netMarginPercent = totalRevenue > 0 ? Number(((netProfit / totalRevenue) * 100).toFixed(1)) : 0;

  // Health status
  let healthStatus: { label: string; color: string; desc: string };
  if (roasMultiplier < breakevenRoas) {
    healthStatus = {
      label: 'Rugi / Di Bawah BEP',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      desc: `Biaya iklan lebih tinggi dari margin produk. Anda merugi ${formatIDR(Math.abs(netProfit))}. Perbaiki konversi landing page atau naikkan harga jual.`,
    };
  } else if (roasMultiplier === breakevenRoas || roasMultiplier <= breakevenRoas * 1.15) {
    healthStatus = {
      label: 'Impas (Breakeven)',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      desc: 'Iklan berhasil menutup modal dan biaya barang, namun belum menghasilkan laba bersih signifikan.',
    };
  } else if (roasMultiplier > breakevenRoas * 1.15 && roasMultiplier < breakevenRoas * 1.8) {
    healthStatus = {
      label: 'Sehat & Menguntungkan',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      desc: `Kampanye menghasilkan laba bersih riil sebesar ${formatIDR(netProfit)}. Sangat layak dilanjutkan.`,
    };
  } else {
    healthStatus = {
      label: 'Sangat Profitabel (Scale Up Ready)',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      desc: `ROAS fantastis (${roasMultiplier}x)! Tingkat konversi tinggi dan modal kembali berlipat. Siap naikkan budget iklan!`,
    };
  }

  const handleCopyReport = () => {
    const report = `📊 *Laporan Kalkulasi ROAS & Iklan Digital*
• Biaya Iklan (Ad Spend): ${formatIDR(adSpend)}
• Estimasi Klik: ${clicks.toLocaleString('id-ID')} klik (CPC: ${formatIDR(cpc)})
• Conversion Rate: ${conversionRate}% (${conversions} penjualan)
• Average Order Value (AOV): ${formatIDR(aov)}
• Total Omset / Pendapatan: ${formatIDR(totalRevenue)}
--------------------------------
🎯 *Hasil Kinerja Iklan:*
• ROAS Multiplier: ${roasMultiplier}x (${roasPercent}%)
• Breakeven ROAS (BEP): ${breakevenRoas}x
• Biaya Akuisisi (CPA): ${formatIDR(cpa)} per transaksi
• Laba Bersih (Net Profit): ${formatIDR(netProfit)} (Margin Bersih: ${netMarginPercent}%)
• Status Kampanye: ${healthStatus.label}

Kalkulasi dibuat otomatis melalui JasaWebsite ROAS Calculator.`;

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Presets */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Benchmark Industri:
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => {
              setAdSpend(p.adSpend);
              setClicks(p.clicks);
              setConversionRate(p.conversionRate);
              setAov(p.aov);
              setMarginPercent(p.marginPercent);
            }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Parameter Biaya & Konversi Iklan</span>
          </h3>

          {/* Ad Spend */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="ad-spend" className="text-slate-700">
                Total Biaya Iklan (Ad Spend)
              </label>
              <span className="font-mono text-xs text-blue-600 font-bold">{formatIDR(adSpend)}</span>
            </div>
            <input
              id="ad-spend"
              type="number"
              step={500000}
              min={100000}
              value={adSpend}
              onChange={(e) => setAdSpend(Math.max(0, Number(e.target.value)))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Clicks & Conversion Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <label htmlFor="clicks-in" className="text-slate-700">
                  Estimasi Klik Iklan
                </label>
                <span className="font-mono text-[11px] text-slate-400">{clicks.toLocaleString('id-ID')}</span>
              </div>
              <input
                id="clicks-in"
                type="number"
                min={10}
                step={200}
                value={clicks}
                onChange={(e) => setClicks(Math.max(1, Number(e.target.value)))}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <label htmlFor="cr-in" className="text-slate-700">
                  Conversion Rate (%)
                </label>
                <span className="font-mono text-[11px] text-blue-600 font-bold">{conversionRate}%</span>
              </div>
              <input
                id="cr-in"
                type="number"
                step={0.1}
                min={0.1}
                max={30}
                value={conversionRate}
                onChange={(e) => setConversionRate(Math.max(0.1, Number(e.target.value)))}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Average Order Value (AOV) */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="aov-in" className="text-slate-700">
                Nilai Pesanan Rata-Rata (AOV)
              </label>
              <span className="font-mono text-xs text-blue-600 font-bold">{formatIDR(aov)}</span>
            </div>
            <input
              id="aov-in"
              type="number"
              step={25000}
              min={10000}
              value={aov}
              onChange={(e) => setAov(Math.max(1000, Number(e.target.value)))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profit Margin % */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <label htmlFor="margin-slider" className="text-slate-700">
                Margin Keuntungan Kotor Produk (Gross Margin)
              </label>
              <span className="font-mono text-sm text-emerald-600 font-bold">{marginPercent}%</span>
            </div>
            <input
              id="margin-slider"
              type="range"
              min={5}
              max={95}
              step={1}
              value={marginPercent}
              onChange={(e) => setMarginPercent(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>5% (Retail Tipis)</span>
              <span>50% (Rata-rata Brand)</span>
              <span>95% (Produk Digital / SaaS)</span>
            </div>
          </div>
        </div>

        {/* Right Output: ROAS, CPA, BEP */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main ROAS Hero Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Return on Ad Spend (ROAS)
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                Omset: {formatIDR(totalRevenue)}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                {roasMultiplier}x
              </span>
              <span className="text-lg font-semibold text-slate-400">({roasPercent}%)</span>
            </div>

            {/* Status Pill */}
            <div className={`p-3 rounded-xl border text-xs leading-relaxed ${healthStatus.color}`}>
              <div className="font-bold mb-0.5">{healthStatus.label}</div>
              <p className="opacity-90">{healthStatus.desc}</p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Breakeven ROAS
              </span>
              <div className="text-xl font-bold text-slate-900 mt-1">{breakevenRoas}x</div>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Ambang batas modal impas</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Biaya per Closing (CPA)
              </span>
              <div className="text-xl font-bold text-slate-900 mt-1">{formatIDR(cpa)}</div>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Dari {conversions} penjualan</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Laba Bersih Riil
              </span>
              <div
                className={`text-xl font-bold mt-1 ${netProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}
              >
                {formatIDR(netProfit)}
              </div>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Margin: {netMarginPercent}%</span>
            </div>
          </div>

          {/* Action Copy Report */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-xs text-slate-600">Simpan ringkasan kalkulasi untuk tim marketing:</span>
            <button
              type="button"
              onClick={handleCopyReport}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Rangkuman</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
