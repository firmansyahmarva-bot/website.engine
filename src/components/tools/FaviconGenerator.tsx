'use client';

import { useState, useRef, ChangeEvent } from 'react';
import {
  Globe,
  Download,
  UploadCloud,
  Check,
  RefreshCw,
  Copy,
  Archive,
  Layers,
  Sparkles,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { createZipBlob, ZipFileEntry } from '@/lib/zip';

interface FaviconSize {
  name: string;
  size: number;
  desc: string;
  dataUrl?: string;
  bytes?: Uint8Array;
}

export default function FaviconGenerator() {
  const [sourceImgUrl, setSourceImgUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('logo');
  const [icons, setIcons] = useState<FaviconSize[]>([
    { name: 'favicon-16x16.png', size: 16, desc: 'Tab browser standar desktop' },
    { name: 'favicon-32x32.png', size: 32, desc: 'Tab browser retina & taskbar' },
    { name: 'favicon-48x48.png', size: 48, desc: 'Bookmark desktop & shortcut' },
    { name: 'apple-touch-icon.png', size: 180, desc: 'Home screen iPhone / iPad iOS' },
    { name: 'android-chrome-192x192.png', size: 192, desc: 'PWA & shortcut Android' },
    { name: 'android-chrome-512x512.png', size: 512, desc: 'Splash screen PWA high-res' },
  ]);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedHtml, setCopiedHtml] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Mohon unggah file gambar (PNG, JPG, atau SVG).');
      return;
    }
    const cleanName = file.name.substring(0, file.name.lastIndexOf('.')) || 'favicon';
    setFileName(cleanName);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSourceImgUrl(result);
      processFavicons(result);
    };
    reader.readAsDataURL(file);
  };

  const processFavicons = (imgSrc: string) => {
    setIsGenerating(true);
    const img = new Image();
    img.src = imgSrc;
    img.onload = async () => {
      const updatedIcons: FaviconSize[] = [];

      for (const item of icons) {
        const canvas = document.createElement('canvas');
        canvas.width = item.size;
        canvas.height = item.size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, item.size, item.size);

          const dataUrl = canvas.toDataURL('image/png');
          // Convert dataURL to Uint8Array
          const base64Data = dataUrl.split(',')[1];
          const binaryStr = atob(base64Data);
          const bytes = new Uint8Array(binaryStr.length);
          for (let i = 0; i < binaryStr.length; i++) {
            bytes[i] = binaryStr.charCodeAt(i);
          }

          updatedIcons.push({
            ...item,
            dataUrl,
            bytes,
          });
        }
      }

      setIcons(updatedIcons);
      setIsGenerating(false);
    };
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDownloadZip = () => {
    const zipEntries: ZipFileEntry[] = [];

    // Add all generated PNG icons
    for (const icon of icons) {
      if (icon.bytes) {
        zipEntries.push({
          name: icon.name,
          data: icon.bytes,
        });
      }
    }

    // Also include a 32x32 copy named favicon.ico for legacy browsers
    const fav32 = icons.find((i) => i.size === 32);
    if (fav32 && fav32.bytes) {
      zipEntries.push({
        name: 'favicon.ico',
        data: fav32.bytes,
      });
    }

    // Add webmanifest file
    const manifestContent = JSON.stringify(
      {
        name: fileName,
        short_name: fileName,
        icons: [
          { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
      null,
      2
    );
    zipEntries.push({
      name: 'site.webmanifest',
      data: new TextEncoder().encode(manifestContent),
    });

    // Add HTML instructions readme
    const htmlSnippet = `<!-- Salin tag ini ke dalam tag <head> website Anda: -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;

    zipEntries.push({
      name: 'favicon-html-code.txt',
      data: new TextEncoder().encode(htmlSnippet),
    });

    const zipBlob = createZipBlob(zipEntries);
    const downloadUrl = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `favicons-${fileName}-${Date.now()}.zip`;
    a.click();
    URL.revokeObjectURL(downloadUrl);
  };

  const htmlHeadSnippet = `<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(htmlHeadSnippet);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Upload Zone */}
      {!sourceImgUrl ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/40 rounded-3xl p-10 sm:p-16 text-center cursor-pointer transition-all group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/svg+xml, image/webp"
            onChange={onFileInputChange}
            className="hidden"
          />
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Globe className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Unggah Logo / Gambar Ikon Website Anda
          </h3>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Gunakan gambar persegi resolusi minimal 512x512px (format PNG transparan direkomendasikan).
            Semua proses resize berlangsung 100% lokal di browser Anda.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md group-hover:bg-blue-700 transition-colors">
            <UploadCloud className="w-4 h-4" />
            <span>Pilih File Logo</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Live Browser Tab Mockup & Package Download */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Simulasi Tab Browser
              </span>
              <button
                type="button"
                onClick={() => setSourceImgUrl(null)}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Ganti Gambar</span>
              </button>
            </div>

            {/* Realistic Browser Tabs (Light Mode & Dark Mode) */}
            <div className="space-y-3">
              {/* Light Mode Tab */}
              <div className="bg-slate-200 p-2 rounded-2xl border border-slate-300">
                <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm max-w-xs">
                  {icons[0]?.dataUrl ? (
                    <img src={icons[0].dataUrl} alt="Favicon" className="w-4 h-4 shrink-0 rounded-sm" />
                  ) : (
                    <div className="w-4 h-4 bg-slate-300 rounded-sm" />
                  )}
                  <span className="text-xs font-semibold text-slate-800 truncate">
                    {fileName} &mdash; Official Website
                  </span>
                </div>
              </div>

              {/* Dark Mode Tab */}
              <div className="bg-slate-900 p-2 rounded-2xl border border-slate-800">
                <div className="bg-slate-800 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm max-w-xs">
                  {icons[0]?.dataUrl ? (
                    <img src={icons[0].dataUrl} alt="Favicon" className="w-4 h-4 shrink-0 rounded-sm" />
                  ) : (
                    <div className="w-4 h-4 bg-slate-700 rounded-sm" />
                  )}
                  <span className="text-xs font-semibold text-slate-200 truncate">
                    {fileName} &mdash; Official Website
                  </span>
                </div>
              </div>
            </div>

            {/* ZIP Download Card */}
            <div className="p-6 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Archive className="w-4 h-4 text-blue-400" />
                <span>Paket Lengkap Favicon Suite (.ZIP)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Berisi seluruh ukuran standar (16x16, 32x32, Apple Touch 180x180, Android PWA 192 & 512), favicon.ico, file <code>site.webmanifest</code>, dan panduan kode HTML.
              </p>
              <button
                type="button"
                onClick={handleDownloadZip}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Semua File Favicon (.ZIP)</span>
              </button>
            </div>

            {/* Privacy Shield */}
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Gambar Anda diproses 100% di browser lokal tanpa dikirim ke server.</span>
            </div>
          </div>

          {/* Right Column: Size Grid & HTML Head Snippet */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Ukuran Favicon Yang Dihasilkan
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {icons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      {item.size}x{item.size}
                    </span>
                    {item.dataUrl && (
                      <a
                        href={item.dataUrl}
                        download={item.name}
                        title={`Unduh ${item.name}`}
                        className="p-1 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="h-16 flex items-center justify-center my-2 bg-slate-50 rounded-xl border border-slate-100 p-2">
                    {item.dataUrl && (
                      <img
                        src={item.dataUrl}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-[11px] font-bold text-slate-800 truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* HTML Code Snippet */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Kode HTML untuk Tag &lt;head&gt;</span>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  {copiedHtml ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Kode Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Tag HTML</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto">
                <pre>{htmlHeadSnippet}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
