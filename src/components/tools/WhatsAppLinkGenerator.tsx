'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Copy,
  Check,
  Download,
  ExternalLink,
  MessageCircle,
  Sparkles,
  QrCode,
  Palette,
  Send,
  Code,
} from 'lucide-react';
import { generateQRCodeMatrix, renderQRCodeToCanvas, generateQRCodeSVG } from '@/lib/qrcode';

const COUNTRY_CODES = [
  { code: '62', country: 'Indonesia (+62)' },
  { code: '60', country: 'Malaysia (+60)' },
  { code: '65', country: 'Singapore (+65)' },
  { code: '61', country: 'Australia (+61)' },
  { code: '1', country: 'USA / Canada (+1)' },
  { code: '44', country: 'United Kingdom (+44)' },
  { code: '966', country: 'Saudi Arabia (+966)' },
];

const MESSAGE_TEMPLATES = [
  {
    title: 'Konsultasi Web',
    text: 'Halo Tim JasaWebsite, saya tertarik untuk berkonsultasi mengenai pembuatan website bisnis. Apakah ada slot diskusi minggu ini?',
  },
  {
    title: 'Order Produk',
    text: 'Halo Admin, saya ingin menanyakan ketersediaan produk dan rincian ongkos kirim. Mohon infonya ya, terima kasih!',
  },
  {
    title: 'Jadwal Demo',
    text: 'Halo, saya ingin menjadwalkan sesi demo interaktif dan presentasi layanan untuk tim perusahaan kami.',
  },
  {
    title: 'Customer Support',
    text: 'Halo Tim Bantuan, saya memerlukan bantuan teknis terkait akun dan layanan saya. Berikut kendala yang saya alami:',
  },
];

const QR_COLORS = [
  { name: 'WhatsApp Emerald', hex: '#16a34a' },
  { name: 'Dark Slate', hex: '#0f172a' },
  { name: 'Modern Blue', hex: '#2563eb' },
  { name: 'Violet Purple', hex: '#7c3aed' },
];

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState('62');
  const [phoneRaw, setPhoneRaw] = useState('081234567890');
  const [message, setMessage] = useState(
    'Halo Tim JasaWebsite, saya ingin konsultasi mengenai pembuatan website profesional siap pakai.'
  );
  const [qrColor, setQrColor] = useState('#16a34a');
  const [copied, setCopied] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Clean and sanitize phone number
  const sanitizePhone = (raw: string, code: string): string => {
    let clean = raw.replace(/\D/g, ''); // strip non-digits
    if (code === '62') {
      if (clean.startsWith('0')) {
        clean = clean.substring(1);
      } else if (clean.startsWith('62')) {
        clean = clean.substring(2);
      }
    } else {
      if (clean.startsWith(code)) {
        clean = clean.substring(code.length);
      }
    }
    return `${code}${clean}`;
  };

  const finalPhone = sanitizePhone(phoneRaw, countryCode);
  const encodedMessage = encodeURIComponent(message.trim());
  const whatsappUrl = message.trim()
    ? `https://wa.me/${finalPhone}?text=${encodedMessage}`
    : `https://wa.me/${finalPhone}`;

  // QR Code generation matrix
  const qrMatrix = generateQRCodeMatrix(whatsappUrl);
  const moduleCount = qrMatrix.length;
  const margin = 3;
  const totalSize = moduleCount + margin * 2;

  // Render to canvas for PNG download
  useEffect(() => {
    if (canvasRef.current) {
      renderQRCodeToCanvas(canvasRef.current, whatsappUrl, {
        size: 512,
        foregroundColor: qrColor,
        backgroundColor: '#ffffff',
        margin: 4,
      });
    }
  }, [whatsappUrl, qrColor]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `whatsapp-qr-${finalPhone}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleDownloadSvg = () => {
    const svgStr = generateQRCodeSVG(whatsappUrl, {
      size: 400,
      foregroundColor: qrColor,
      backgroundColor: '#ffffff',
      margin: 4,
    });
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `whatsapp-qr-${finalPhone}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const htmlEmbedSnippet = `<a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#25D366;color:#ffffff;border-radius:8px;font-weight:bold;text-decoration:none;font-family:sans-serif;">
  Chat via WhatsApp
</a>`;

  return (
    <div className="space-y-8">
      {/* Quick Templates */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-100 rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Template Pesan Cepat:
        </span>
        {MESSAGE_TEMPLATES.map((tmpl) => (
          <button
            key={tmpl.title}
            type="button"
            onClick={() => setMessage(tmpl.text)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
          >
            {tmpl.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Phone & Message */}
        <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Formulir Nomor & Teks WhatsApp</span>
          </h3>

          {/* Country Code & Phone Input */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-5">
              <label htmlFor="wa-country" className="block text-xs font-semibold text-slate-700 mb-1">
                Kode Negara
              </label>
              <select
                id="wa-country"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.country}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-7">
              <label htmlFor="wa-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                id="wa-phone"
                type="tel"
                value={phoneRaw}
                onChange={(e) => setPhoneRaw(e.target.value)}
                placeholder="Contoh: 08123456789"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            Format hasil: <span className="font-mono text-emerald-600 font-bold">+{finalPhone}</span> (angka 0 di awal
            dikonversi otomatis).
          </p>

          {/* Pre-filled Message */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <label htmlFor="wa-msg" className="text-slate-700">
                Pesan Pembuka Otomatis (Opsional)
              </label>
              <span className="font-mono text-[11px] text-slate-400">{message.length} karakter</span>
            </div>
            <textarea
              id="wa-msg"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan yang otomatis terisi ketika link dibuka..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Result URL Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-semibold text-slate-600 block">Link WhatsApp Resmi Anda:</span>
            <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs text-slate-800 break-all select-all">
              {whatsappUrl}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleCopy(whatsappUrl, 'link')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                {copied === 'link' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Link Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Link</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Uji di WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(htmlEmbedSnippet, 'html')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
              >
                {copied === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Code className="w-3.5 h-3.5" />}
                <span>Salin HTML Tombol</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right QR Code Generator */}
        <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-between text-center">
          <div className="w-full">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-center gap-2">
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>QR Code WhatsApp Instan (Pure Vector SVG)</span>
            </h3>

            {/* Color Palette Selector */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Palette className="w-3.5 h-3.5" />
                Warna:
              </span>
              <div className="flex items-center gap-2">
                {QR_COLORS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setQrColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      qrColor === c.hex ? 'scale-110 border-slate-900 shadow-sm' : 'border-white opacity-80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Live Pure SVG QR Display */}
            <div className="inline-block p-4 bg-white rounded-2xl border border-slate-200 shadow-md">
              <svg
                viewBox={`0 0 ${totalSize} ${totalSize}`}
                className="w-56 h-56 max-w-full"
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
                        fill={qrColor}
                      />
                    ) : null
                  )
                )}
              </svg>
            </div>

            <p className="text-xs text-slate-500 mt-3 max-w-xs mx-auto">
              Pindai (scan) kamera handphone untuk langsung membuka obrolan WhatsApp tanpa simpan kontak.
            </p>
          </div>

          {/* Action Download Buttons */}
          <div className="w-full pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPng}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Unduh Gambar PNG</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadSvg}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
            >
              <Download className="w-4 h-4 text-blue-500" />
              <span>Unduh Vector SVG</span>
            </button>
          </div>

          {/* Hidden Canvas for High-Res PNG rasterization */}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
}
