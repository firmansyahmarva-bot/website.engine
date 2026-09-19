'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import {
  UploadCloud,
  Download,
  Image as ImageIcon,
  Check,
  RefreshCw,
  Sliders,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [originalDim, setOriginalDim] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [compressedDim, setCompressedDim] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const [quality, setQuality] = useState<number>(75);
  const [maxWidth, setMaxWidth] = useState<number>(1920);
  const [format, setFormat] = useState<'image/webp' | 'image/jpeg'>('image/webp');
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Format bytes to human readable string
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith('image/')) {
      alert('Mohon pilih file gambar (JPG, PNG, atau WebP).');
      return;
    }

    setFile(selectedFile);
    setOriginalSize(selectedFile.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setOriginalUrl(result);
    };
    reader.readAsDataURL(selectedFile);
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

  // Perform client-side compression via HTML5 Canvas
  useEffect(() => {
    if (!originalUrl) return;

    setIsCompressing(true);
    const img = new Image();
    img.src = originalUrl;
    img.onload = () => {
      setOriginalDim({ w: img.width, h: img.height });

      let targetW = img.width;
      let targetH = img.height;

      if (maxWidth > 0 && targetW > maxWidth) {
        const ratio = maxWidth / targetW;
        targetW = maxWidth;
        targetH = Math.round(targetH * ratio);
      }

      setCompressedDim({ w: targetW, h: targetH });

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setIsCompressing(false);
        return;
      }

      // Fill white background for transparent PNG when converting to JPEG
      if (format === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetW, targetH);
      }

      ctx.drawImage(img, 0, 0, targetW, targetH);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            if (compressedUrl) URL.revokeObjectURL(compressedUrl);
            const url = URL.createObjectURL(blob);
            setCompressedUrl(url);
            setCompressedSize(blob.size);
          }
          setIsCompressing(false);
        },
        format,
        quality / 100
      );
    };
  }, [originalUrl, quality, maxWidth, format]);

  const savedPercent =
    originalSize > 0 && compressedSize > 0
      ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
      : 0;

  const handleDownload = () => {
    if (!compressedUrl || !file) return;
    const ext = format === 'image/webp' ? 'webp' : 'jpg';
    const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || 'image';
    const a = document.createElement('a');
    a.href = compressedUrl;
    a.download = `${baseName}-terkompresi.${ext}`;
    a.click();
  };

  return (
    <div className="space-y-8">
      {/* Upload Zone */}
      {!originalUrl ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/40 rounded-3xl p-10 sm:p-16 text-center cursor-pointer transition-all group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={onFileInputChange}
            className="hidden"
          />
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Tarik & Lepas File Gambar Anda di Sini
          </h3>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Mendukung file JPG, PNG, atau WebP. Pemrosesan 100% lokal di browser Anda tanpa upload ke server sehingga aman & menjaga privasi.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md group-hover:bg-blue-700 transition-colors">
            <ImageIcon className="w-4 h-4" />
            <span>Pilih Gambar dari Perangkat</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pengaturan Kompresi
              </span>
              <button
                type="button"
                onClick={() => {
                  setOriginalUrl(null);
                  setCompressedUrl(null);
                  setFile(null);
                }}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Ganti Gambar</span>
              </button>
            </div>

            {/* Quality Slider */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Tingkat Kualitas Visual</label>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                  {quality}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="95"
                step="5"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Ukuran Terkecil (10%)</span>
                <span className="font-semibold text-blue-600">Rekomendasi (75%)</span>
                <span>Kualitas Tertinggi (95%)</span>
              </div>
            </div>

            {/* Max Width Resize Selector */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Resolusi Lebar Maksimal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Asli', value: 0 },
                  { label: '1920px (FHD)', value: 1920 },
                  { label: '1200px (Web)', value: 1200 },
                  { label: '800px (Blog)', value: 800 },
                  { label: '500px (Thumb)', value: 500 },
                  { label: '300px (Mini)', value: 300 },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setMaxWidth(item.value)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      maxWidth === item.value
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Output Format Selector */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <label className="block text-xs font-bold text-slate-700">Format Output</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat('image/webp')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    format === 'image/webp'
                      ? 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs">WebP</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                      SEO Google
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">Kompresi tertinggi, standar web modern</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('image/jpeg')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    format === 'image/jpeg'
                      ? 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs">JPEG</span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                      Universal
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">Kompatibilitas 100% semua platform</p>
                </button>
              </div>
            </div>

            {/* Privacy Shield Info */}
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Privasi Terjamin: Foto tidak pernah diunggah atau disimpan di server mana pun.</span>
            </div>
          </div>

          {/* Preview & Results Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stats Comparison Card */}
            <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Hasil Optimasi Gambar
                </span>
                {savedPercent > 0 && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    Hemat {savedPercent}%
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 divide-x divide-slate-700/80">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400">Ukuran Asli</span>
                  <p className="text-xl sm:text-2xl font-black text-slate-200">
                    {formatBytes(originalSize)}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    {originalDim.w} x {originalDim.h} px
                  </span>
                </div>

                <div className="pl-4 space-y-1">
                  <span className="text-xs text-slate-400">Setelah Terkompresi</span>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">
                    {isCompressing ? 'Mengompres...' : formatBytes(compressedSize)}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    {compressedDim.w} x {compressedDim.h} px ({format.split('/')[1].toUpperCase()})
                  </span>
                </div>
              </div>

              {/* Download CTA Button */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isCompressing || !compressedUrl}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Gambar Terkompresi</span>
              </button>
            </div>

            {/* Live Visual Preview */}
            <div className="bg-slate-100 p-4 rounded-3xl border border-slate-200">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold text-slate-600">Pratinjau Hasil</span>
                <span className="text-xs text-slate-400 font-mono">
                  {file?.name}
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-900/5 aspect-video flex items-center justify-center border border-slate-200">
                {compressedUrl ? (
                  <img
                    src={compressedUrl}
                    alt="Preview Terkompresi"
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                ) : (
                  <div className="text-slate-400 text-xs">Memuat pratinjau gambar...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
