'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Link2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  QrCode,
  Download,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { generateQRCodeMatrix, renderQRCodeToCanvas, generateQRCodeSVG } from '@/lib/qrcode';

interface UtmData {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

const CAMPAIGN_PRESETS: { name: string; source: string; medium: string; campaign: string }[] = [
  { name: 'Google Search Ads', source: 'google', medium: 'cpc', campaign: 'leadgen-2026' },
  { name: 'Meta / Instagram Ads', source: 'facebook', medium: 'cpc', campaign: 'promo-ramadhan' },
  { name: 'Link Bio Instagram', source: 'instagram', medium: 'bio', campaign: 'always-on' },
  { name: 'WhatsApp Blast', source: 'whatsapp', medium: 'broadcast', campaign: 'flash-sale' },
  { name: 'Email Newsletter', source: 'newsletter', medium: 'email', campaign: 'product-update' },
  { name: 'TikTok Ads Video', source: 'tiktok', medium: 'cpc', campaign: 'viral-creator' },
];

export default function UtmBuilder() {
  const [data, setData] = useState<UtmData>({
    baseUrl: 'https://jasawebsite.net/website-packages',
    source: 'facebook',
    medium: 'cpc',
    campaign: 'promo-starter-2026',
    term: 'jasa-website',
    content: 'banner-blue-v1',
  });

  const [autoLowercase, setAutoLowercase] = useState(true);
  const [replaceSpaces, setReplaceSpaces] = useState(true);
  const [showQr, setShowQr] = useState(false);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Format value helper
  const sanitizeValue = (val: string): string => {
    let res = val.trim();
    if (replaceSpaces) res = res.replace(/\s+/g, '-');
    if (autoLowercase) res = res.toLowerCase();
    return res;
  };

  // Build full clean URL
  const cleanBase = data.baseUrl.trim();
  const params: string[] = [];

  const sSource = sanitizeValue(data.source);
  const sMedium = sanitizeValue(data.medium);
  const sCampaign = sanitizeValue(data.campaign);
  const sTerm = sanitizeValue(data.term);
  const sContent = sanitizeValue(data.content);

  if (sSource) params.push(`utm_source=${encodeURIComponent(sSource)}`);
  if (sMedium) params.push(`utm_medium=${encodeURIComponent(sMedium)}`);
  if (sCampaign) params.push(`utm_campaign=${encodeURIComponent(sCampaign)}`);
  if (sTerm) params.push(`utm_term=${encodeURIComponent(sTerm)}`);
  if (sContent) params.push(`utm_content=${encodeURIComponent(sContent)}`);

  const separator = cleanBase.includes('?') ? '&' : '?';
  const finalUrl = params.length > 0 ? `${cleanBase}${separator}${params.join('&')}` : cleanBase;

  // QR Code generation
  const qrMatrix = generateQRCodeMatrix(finalUrl);
  const moduleCount = qrMatrix.length;
  const margin = 3;
  const totalSize = moduleCount + margin * 2;

  useEffect(() => {
    if (showQr && canvasRef.current) {
      renderQRCodeToCanvas(canvasRef.current, finalUrl, {
        size: 400,
        foregroundColor: '#0f172a',
        backgroundColor: '#ffffff',
        margin: 4,
      });
    }
  }, [finalUrl, showQr]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQrPng = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `utm-qr-${sCampaign || 'campaign'}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleDownloadQrSvg = () => {
    const svgStr = generateQRCodeSVG(finalUrl, {
      size: 400,
      foregroundColor: '#0f172a',
      backgroundColor: '#ffffff',
      margin: 4,
    });
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `utm-qr-${sCampaign || 'campaign'}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Preset Saluran Iklan:
        </span>
        {CAMPAIGN_PRESETS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() =>
              setData((prev) => ({
                ...prev,
                source: p.source,
                medium: p.medium,
                campaign: p.campaign,
              }))
            }
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Link2 className="w-4 h-4 text-blue-600" />
            <span>Parameter Kampanye Google Analytics (GA4)</span>
          </h3>

          {/* Website URL */}
          <div>
            <label htmlFor="base-url" className="block text-xs font-semibold text-slate-700 mb-1">
              Website URL Tujuan <span className="text-rose-500">*</span>
            </label>
            <input
              id="base-url"
              type="url"
              value={data.baseUrl}
              onChange={(e) => setData({ ...data, baseUrl: e.target.value })}
              placeholder="https://websiteanda.com/promo"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Source & Medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="utm-source" className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign Source (utm_source) <span className="text-rose-500">*</span>
              </label>
              <input
                id="utm-source"
                type="text"
                value={data.source}
                onChange={(e) => setData({ ...data, source: e.target.value })}
                placeholder="google, facebook, newsletter"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="utm-medium" className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign Medium (utm_medium) <span className="text-rose-500">*</span>
              </label>
              <input
                id="utm-medium"
                type="text"
                value={data.medium}
                onChange={(e) => setData({ ...data, medium: e.target.value })}
                placeholder="cpc, banner, email, social"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Campaign Name */}
          <div>
            <label htmlFor="utm-name" className="block text-xs font-semibold text-slate-700 mb-1">
              Campaign Name (utm_campaign) <span className="text-rose-500">*</span>
            </label>
            <input
              id="utm-name"
              type="text"
              value={data.campaign}
              onChange={(e) => setData({ ...data, campaign: e.target.value })}
              placeholder="promo-ramadhan, launching-produk"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Term & Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="utm-term" className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign Term (utm_term, Opsional)
              </label>
              <input
                id="utm-term"
                type="text"
                value={data.term}
                onChange={(e) => setData({ ...data, term: e.target.value })}
                placeholder="kata kunci iklan berbayar"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="utm-content" className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign Content (utm_content, Opsional)
              </label>
              <input
                id="utm-content"
                type="text"
                value={data.content}
                onChange={(e) => setData({ ...data, content: e.target.value })}
                placeholder="cta-button-red, banner-v1"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Sanitization Options */}
          <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-700">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoLowercase}
                onChange={(e) => setAutoLowercase(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Ubah ke Huruf Kecil Otomatis (GA4 Best Practice)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={replaceSpaces}
                onChange={(e) => setReplaceSpaces(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Ganti Spasi dengan Tanda Hubung (-)</span>
            </label>
          </div>
        </div>

        {/* Right Output: Generated URL & QR Code */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">URL Kampanye Siap Salin:</span>
              <button
                type="button"
                onClick={() => setShowQr(!showQr)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors border ${
                  showQr ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>{showQr ? 'Tutup QR Code' : 'Generate QR Code'}</span>
              </button>
            </div>

            {/* Generated URL text box */}
            <div className="p-3.5 bg-slate-900 rounded-xl font-mono text-xs text-emerald-400 break-all select-all leading-relaxed max-h-36 overflow-y-auto">
              {finalUrl}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin URL Kampanye'}</span>
              </button>

              <a
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka & Uji URL</span>
              </a>
            </div>
          </div>

          {/* QR Code Section (if toggled) */}
          {showQr && (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-4">
              <span className="text-xs font-bold text-slate-800">
                QR Code Kampanye (Cocok untuk Materi Cetak & Standing Banner)
              </span>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm inline-block">
                <svg
                  viewBox={`0 0 ${totalSize} ${totalSize}`}
                  className="w-44 h-44 max-w-full"
                  shapeRendering="crispEdges"
                >
                  <rect width={totalSize} height={totalSize} fill="#ffffff" />
                  {qrMatrix.map((row, r) =>
                    row.map((dark, c) =>
                      dark ? (
                        <rect
                          key={`${r}-${c}`}
                          x={c + margin}
                          y={r + margin}
                          width="1"
                          height="1"
                          fill="#0f172a"
                        />
                      ) : null
                    )
                  )}
                </svg>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadQrPng}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PNG</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadQrSvg}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh SVG</span>
                </button>
              </div>

              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}

          {/* GA4 Parameter Breakdown Table */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
            <span className="font-bold text-slate-800 block">Fungsi Parameter di Google Analytics 4:</span>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li>
                <strong className="font-mono text-blue-700">utm_source:</strong> Nama platform pengirim traffic (cth:
                google, instagram, newsletter).
              </li>
              <li>
                <strong className="font-mono text-blue-700">utm_medium:</strong> Tipe saluran media (cth: cpc, bio,
                email, broadcast).
              </li>
              <li>
                <strong className="font-mono text-blue-700">utm_campaign:</strong> Nama promosi atau inisiatif kampanye
                (cth: promo-ramadhan).
              </li>
              <li>
                <strong className="font-mono text-blue-700">utm_content:</strong> Membedakan variasi materi kreatif A/B
                test (cth: tombol-merah vs tombol-hijau).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
