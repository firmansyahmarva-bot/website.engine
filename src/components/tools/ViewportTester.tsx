'use client';

import { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  RotateCw,
  ExternalLink,
  Sliders,
  Sparkles,
  Maximize2,
  RefreshCw,
} from 'lucide-react';

interface DevicePreset {
  name: string;
  category: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  width: number;
  height: number;
}

const PRESET_DEVICES: DevicePreset[] = [
  { name: 'iPhone 15 Pro', category: 'mobile', width: 393, height: 852 },
  { name: 'iPhone SE', category: 'mobile', width: 375, height: 667 },
  { name: 'Galaxy S23', category: 'mobile', width: 412, height: 915 },
  { name: 'iPad Mini', category: 'tablet', width: 768, height: 1024 },
  { name: 'iPad Pro 11"', category: 'tablet', width: 834, height: 1194 },
  { name: 'MacBook Air 13"', category: 'laptop', width: 1280, height: 832 },
  { name: 'Desktop 1080p', category: 'desktop', width: 1440, height: 900 },
];

const LOCAL_ROUTES = [
  { label: 'Beranda Utama', path: '/' },
  { label: 'Paket Website', path: '/website-packages' },
  { label: 'Katalog Desain', path: '/designs' },
  { label: 'Kalkulator Harga', path: '/pricing' },
  { label: 'Panduan Teknis', path: '/panduan' },
];

export default function ViewportTester() {
  const [width, setWidth] = useState(393);
  const [height, setHeight] = useState(852);
  const [selectedDevice, setSelectedDevice] = useState('iPhone 15 Pro');
  const [scale, setScale] = useState(0.85);
  const [testUrl, setTestUrl] = useState('/');
  const [iframeKey, setIframeKey] = useState(1);

  // Active Tailwind breakpoint
  let currentBreakpoint = 'xs (<640px)';
  if (width >= 1536) currentBreakpoint = '2xl (≥1536px)';
  else if (width >= 1280) currentBreakpoint = 'xl (≥1280px)';
  else if (width >= 1024) currentBreakpoint = 'lg (≥1024px)';
  else if (width >= 768) currentBreakpoint = 'md (≥768px)';
  else if (width >= 640) currentBreakpoint = 'sm (≥640px)';

  const handleSelectDevice = (device: DevicePreset) => {
    setSelectedDevice(device.name);
    setWidth(device.width);
    setHeight(device.height);
  };

  const handleRotate = () => {
    setWidth(height);
    setHeight(width);
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
        {/* Device Presets */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Perangkat:
            </span>
            {PRESET_DEVICES.map((d) => (
              <button
                key={d.name}
                type="button"
                onClick={() => handleSelectDevice(d)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedDevice === d.name && width === d.width && height === d.height
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Rotate */}
            <button
              type="button"
              onClick={handleRotate}
              title="Putar Orientasi Layar (Swap W/H)"
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Reload */}
            <button
              type="button"
              onClick={handleReload}
              title="Muat Ulang Halaman Iframe"
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {/* Scale selector */}
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 font-medium"
            >
              <option value={0.5}>Zoom 50%</option>
              <option value={0.67}>Zoom 67%</option>
              <option value={0.75}>Zoom 75%</option>
              <option value={0.85}>Zoom 85%</option>
              <option value={1}>Zoom 100%</option>
            </select>
          </div>
        </div>

        {/* URL Bar & Manual Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center pt-2 border-t border-slate-100">
          <div className="md:col-span-7 flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">URL Uji:</span>
            <input
              type="text"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              placeholder="Contoh: /website-packages atau https://..."
              className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Quick internal route switcher */}
            <select
              onChange={(e) => setTestUrl(e.target.value)}
              value={testUrl}
              className="px-2 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-700 max-w-[130px]"
            >
              <option value="" disabled>
                Rute Demo
              </option>
              {LOCAL_ROUTES.map((r) => (
                <option key={r.path} value={r.path}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-5 flex items-center justify-end gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-semibold">W:</span>
              <input
                type="number"
                min={320}
                max={2560}
                value={width}
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                  setSelectedDevice('Kustom');
                }}
                className="w-16 px-2 py-1 rounded-lg border border-slate-200 text-center font-mono font-bold"
              />
              <span className="text-slate-400 font-semibold">× H:</span>
              <input
                type="number"
                min={320}
                max={2560}
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                  setSelectedDevice('Kustom');
                }}
                className="w-16 px-2 py-1 rounded-lg border border-slate-200 text-center font-mono font-bold"
              />
              <span className="text-slate-400">px</span>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200 font-mono text-[11px]">
              {currentBreakpoint}
            </span>
          </div>
        </div>
      </div>

      {/* Frame Canvas Wrapper */}
      <div className="w-full min-h-[600px] overflow-auto p-8 rounded-3xl bg-slate-900 border border-slate-800 flex items-start justify-center shadow-inner relative">
        {/* Device Frame Simulation */}
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
          className="relative transition-all duration-200 bg-white rounded-2xl shadow-2xl border-4 border-slate-700 overflow-hidden flex flex-col shrink-0"
        >
          {/* Mock Browser Top Header Bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center justify-between text-xs select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600 truncate max-w-xs text-center">
              {testUrl}
            </div>

            <span className="text-[10px] font-mono text-slate-400 font-semibold">
              {width}×{height}
            </span>
          </div>

          {/* Target Iframe */}
          <iframe
            key={iframeKey}
            src={testUrl}
            title="Viewport Simulator Preview"
            className="w-full flex-1 border-none bg-white"
          />
        </div>
      </div>

      {/* Breakpoints Legend */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
        <span className="font-semibold text-slate-700">Panduan Standar Breakpoint CSS:</span>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>xs</strong> &lt; 640px (Mobile)
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>sm</strong> ≥ 640px (Mobile Landscape)
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>md</strong> ≥ 768px (Tablet)
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>lg</strong> ≥ 1024px (Small Laptop)
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>xl</strong> ≥ 1280px (Desktop)
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
            <strong>2xl</strong> ≥ 1536px (Ultra-wide)
          </span>
        </div>
      </div>
    </div>
  );
}
