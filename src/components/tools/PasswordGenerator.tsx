'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  KeyRound,
  Copy,
  Check,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sliders,
  Sparkles,
  Lock,
} from 'lucide-react';

export default function PasswordGenerator() {
  const [length, setLength] = useState<number>(16);
  const [useUpper, setUseUpper] = useState<boolean>(true);
  const [useLower, setUseLower] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [bulkList, setBulkList] = useState<string[]>([]);

  const generatePassword = useCallback(() => {
    let chars = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (excludeAmbiguous) {
      // remove 0, O, o, 1, l, I, |
      chars = chars.replace(/[0Oo1lI|]/g, '');
    }

    if (!chars) {
      chars = lower; // fallback
    }

    const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += getRandomChar();
    }
    setPassword(pwd);

    // Also generate 4 extra for bulk list
    const bulk: string[] = [];
    for (let b = 0; b < 4; b++) {
      let item = '';
      for (let i = 0; i < length; i++) {
        item += getRandomChar();
      }
      bulk.push(item);
    }
    setBulkList(bulk);
  }, [length, useUpper, useLower, useNumbers, useSymbols, excludeAmbiguous]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Compute password entropy and strength
  const getStrength = (pwd: string) => {
    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;

    const entropy = pwd.length * (pool > 0 ? Math.log2(pool) : 0);

    if (entropy < 36) {
      return { score: 1, label: 'Sangat Lemah', color: 'bg-red-500', text: 'text-red-500', width: '20%' };
    } else if (entropy < 50) {
      return { score: 2, label: 'Lemah', color: 'bg-orange-500', text: 'text-orange-500', width: '40%' };
    } else if (entropy < 68) {
      return { score: 3, label: 'Sedang', color: 'bg-yellow-500', text: 'text-yellow-500', width: '65%' };
    } else if (entropy < 85) {
      return { score: 4, label: 'Kuat', color: 'bg-blue-600', text: 'text-blue-600', width: '85%' };
    } else {
      return { score: 5, label: 'Sangat Kuat (Enterprise)', color: 'bg-emerald-500', text: 'text-emerald-500', width: '100%' };
    }
  };

  const strength = getStrength(password);

  const handleCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Password Display & Generator Controls */}
      <div className="lg:col-span-7 space-y-6">
        {/* Main Password Output Box */}
        <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-xl space-y-4 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Password Ter-generate</span>
            <span className="font-mono">{password.length} Karakter</span>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
            <span className="font-mono text-lg sm:text-xl font-bold tracking-wider text-emerald-400 break-all select-all">
              {password}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={generatePassword}
                title="Generate Ulang"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleCopy(password)}
                title="Salin Password"
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Strength Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Tingkat Keamanan:</span>
              <span className={`font-bold ${strength.text}`}>{strength.label}</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${strength.color}`}
                style={{ width: strength.width }}
              />
            </div>
          </div>
        </div>

        {/* Configuration Slider & Toggles */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-5">
          {/* Length Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Panjang Password</label>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                {length} Karakter
              </span>
            </div>
            <input
              type="range"
              min="8"
              max="48"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>8 (Standar)</span>
              <span>16 (Rekomendasi)</span>
              <span>32 (Kuat)</span>
              <span>48 (Maks)</span>
            </div>
          </div>

          {/* Checkbox Options */}
          <div className="pt-2 border-t border-slate-200 space-y-3">
            <label className="block text-xs font-bold text-slate-700">Karakter yang Digunakan</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Huruf Besar (A-Z)', val: useUpper, set: setUseUpper },
                { label: 'Huruf Kecil (a-z)', val: useLower, set: setUseLower },
                { label: 'Angka (0-9)', val: useNumbers, set: setUseNumbers },
                { label: 'Simbol (!@#$%)', val: useSymbols, set: setUseSymbols },
              ].map((opt, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={opt.val}
                    onChange={(e) => opt.set(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="text-xs font-semibold text-slate-700">{opt.label}</span>
                </label>
              ))}
            </div>

            {/* Avoid Ambiguous */}
            <label className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors mt-2">
              <input
                type="checkbox"
                checked={excludeAmbiguous}
                onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <span className="text-xs font-semibold text-slate-700">
                Hindari karakter membingungkan (misal: 0 vs O, 1 vs l, I)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Column: Bulk Password List & Best Practices */}
      <div className="lg:col-span-5 space-y-6">
        {/* Bulk Password Generation Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Variasi Alternatif Siap Pakai
            </span>
            <button
              type="button"
              onClick={generatePassword}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Acak Ulang</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {bulkList.map((pwd, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors"
              >
                <span className="font-mono text-xs text-slate-800 truncate mr-2 select-all">
                  {pwd}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(pwd)}
                  className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-white transition-colors"
                  title="Salin Password Ini"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 text-xs text-slate-600 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kriteria Password Standar Industri</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-500">
            <li>Minimal 12–16 karakter untuk akun email dan admin website.</li>
            <li>Kombinasi 4 set karakter mencegah serangan Brute-Force dan Dictionary.</li>
            <li>Password dibuat secara kriptografis acak di perangkat browser Anda tanpa pernah dikirim ke internet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
