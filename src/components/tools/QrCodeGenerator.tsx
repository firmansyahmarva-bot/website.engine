'use client';

import { useState, useRef, useEffect } from 'react';
import {
  QrCode,
  Download,
  Copy,
  Check,
  Globe,
  Wifi,
  MessageCircle,
  FileText,
  Sparkles,
  Palette,
  Layers,
} from 'lucide-react';
import { generateQRCodeSVG, renderQRCodeToCanvas } from '@/lib/qrcode';

type QrType = 'url' | 'wifi' | 'whatsapp' | 'text';

const COLOR_PRESETS = [
  { name: 'Slate Dark', hex: '#0f172a' },
  { name: 'Royal Blue', hex: '#2563eb' },
  { name: 'Emerald', hex: '#059669' },
  { name: 'Indigo', hex: '#4f46e5' },
  { name: 'Rose Red', hex: '#e11d48' },
];

export default function QrCodeGenerator() {
  const [qrType, setQrType] = useState<QrType>('url');
  const [urlInput, setUrlInput] = useState('https://jasawebsite.net');
  const [textInput, setTextInput] = useState('Halo! Selamat datang di website kami.');
  const [waPhone, setWaPhone] = useState('081234567890');
  const [waMessage, setWaMessage] = useState('Halo admin, saya tertarik konsultasi website.');
  const [wifiSsid, setWifiSsid] = useState('WiFi-Kantor-5G');
  const [wifiPass, setWifiPass] = useState('SuperSecretPass123');
  const [wifiEnc, setWifiEnc] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');

  const [fgColor, setFgColor] = useState('#0f172a');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [size, setSize] = useState<number>(320);
  const [copied, setCopied] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Compute payload based on active QR type
  const getQrPayload = (): string => {
    switch (qrType) {
      case 'url':
        return urlInput.trim() || 'https://jasawebsite.net';
      case 'whatsapp': {
        const clean = waPhone.replace(/\D/g, '');
        const phone = clean.startsWith('0') ? '62' + clean.slice(1) : clean.startsWith('62') ? clean : '62' + clean;
        const msg = encodeURIComponent(waMessage.trim());
        return `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
      }
      case 'wifi':
        return `WIFI:T:${wifiEnc};S:${wifiSsid};P:${wifiPass};;`;
      case 'text':
      default:
        return textInput.trim() || 'Teks QR Code';
    }
  };

  const payload = getQrPayload();
  const svgMarkup = generateQRCodeSVG(payload, {
    size,
    foregroundColor: fgColor,
    backgroundColor: bgColor,
    margin: 4,
  });

  useEffect(() => {
    if (canvasRef.current) {
      renderQRCodeToCanvas(canvasRef.current, payload, {
        size: 600, // high resolution for crisp download
        foregroundColor: fgColor,
        backgroundColor: bgColor,
        margin: 4,
      });
    }
  }, [payload, fgColor, bgColor]);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `qrcode-${qrType}-${Date.now()}.png`;
    a.click();
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qrcode-${qrType}-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Hidden high-res canvas for PNG generation */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Left Column: Form Controls */}
      <div className="lg:col-span-7 space-y-6">
        {/* Type Selector Tabs */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Pilih Tipe Konten QR Code
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'url', label: 'Website / URL', icon: Globe },
              { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
              { id: 'wifi', label: 'Jaringan WiFi', icon: Wifi },
              { id: 'text', label: 'Teks Bebas', icon: FileText },
            ].map((t) => {
              const Icon = t.icon;
              const isActive = qrType === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setQrType(t.id as QrType)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 mb-1.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Inputs Based on Type */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
          {qrType === 'url' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Alamat URL Lengkap (dengan https://)
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <p className="text-xs text-slate-500 mt-1">
                Cocok untuk link profil bisnis, katalog, landing page, atau menu restoran.
              </p>
            </div>
          )}

          {qrType === 'whatsapp' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp (Contoh: 081234567890)
                </label>
                <input
                  type="tel"
                  value={waPhone}
                  onChange={(e) => setWaPhone(e.target.value)}
                  placeholder="0812xxxxxxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pesan Teks Otomatis (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  placeholder="Halo, saya ingin bertanya..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          )}

          {qrType === 'wifi' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Jaringan WiFi (SSID)
                </label>
                <input
                  type="text"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  placeholder="WiFi Kafe / Kantor"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Password WiFi
                </label>
                <input
                  type="text"
                  value={wifiPass}
                  onChange={(e) => setWifiPass(e.target.value)}
                  placeholder="Password wifi"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Enkripsi Keamanan
                </label>
                <select
                  value={wifiEnc}
                  onChange={(e) => setWifiEnc(e.target.value as 'WPA' | 'WEP' | 'nopass')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="WPA">WPA / WPA2 / WPA3 (Umum & Standar)</option>
                  <option value="WEP">WEP (Lama)</option>
                  <option value="nopass">Tanpa Password (Terbuka)</option>
                </select>
              </div>
            </div>
          )}

          {qrType === 'text' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Teks Bebas / Catatan
              </label>
              <textarea
                rows={3}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Masukkan teks apa saja..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          )}
        </div>

        {/* Customization Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">Kustomisasi Tampilan QR</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Warna QR Code (Foreground)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer border border-slate-200"
                />
                <input
                  type="text"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 uppercase"
                />
              </div>
              <div className="flex gap-1.5 mt-2">
                {COLOR_PRESETS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    title={c.name}
                    onClick={() => setFgColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      fgColor.toLowerCase() === c.hex.toLowerCase() ? 'border-blue-600 scale-110 ring-2 ring-blue-200' : 'border-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Warna Background
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer border border-slate-200"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 uppercase"
                />
              </div>
              <div className="flex gap-1.5 mt-2">
                {['#ffffff', '#f8fafc', '#f1f5f9', '#fef08a'].map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => setBgColor(hex)}
                    style={{ backgroundColor: hex }}
                    className={`w-6 h-6 rounded-full border border-slate-300 transition-transform hover:scale-110 ${
                      bgColor.toLowerCase() === hex.toLowerCase() ? 'ring-2 ring-blue-400 scale-110' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Live QR Preview & Export Actions */}
      <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pratinjau QR Code
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Vector SVG Siap Cetak
            </span>
          </div>

          {/* Rendered SVG Preview */}
          <div
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center transition-all hover:shadow-md"
            dangerouslySetInnerHTML={{ __html: svgMarkup }}
          />

          {/* Quick Payload Info */}
          <div className="mt-4 w-full text-center">
            <p className="text-xs text-slate-500 truncate max-w-xs mx-auto font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              {payload}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-6 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleDownloadPng}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Unduh PNG (HD)</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadSvg}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold transition-all active:scale-[0.98]"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Unduh SVG</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(svgMarkup, 'svg')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-200/80 hover:bg-slate-300/80 text-slate-800 rounded-xl text-xs font-semibold transition-all"
          >
            {copied === 'svg' ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Kode SVG Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Salin Kode SVG Mentah</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
