'use client';

import React from 'react';
import { Language, Currency } from '@/types';
import { pricingPackages } from '@/data/packages';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Check, Zap, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  currentLang: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);
  const [currency, setCurrency] = React.useState<Currency>('IDR');

  return (
    <section id="pricing" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Harga Transparan Tanpa Biaya Tersembunyi' : currentLang === 'ar' ? 'أسعار واضحة بدون تكاليف إضافية' : 'Transparent Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.pricingTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {t.pricingSubtitle}
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setCurrency('IDR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'IDR'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇮🇩 IDR (Rupiah)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🌐 USD (Dollar)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPackages.map((pkg) => {
            const isCustom = pkg.pages >= 1000;
            const priceFormatted = isCustom
              ? currentLang === 'id' ? 'Tanya di WhatsApp' : currentLang === 'ar' ? 'تواصل عبر واتساب' : 'Custom on WA'
              : currency === 'IDR'
              ? `Rp ${pkg.priceIDR.toLocaleString('id-ID')}`
              : `$${pkg.priceUSD}`;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/40 border-2 border-cyan-400/60 shadow-2xl shadow-blue-950/40 transform md:-translate-y-2'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-white" />
                      <span>{t.popularBadge}</span>
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="space-y-3 pb-6 border-b border-slate-800">
                  <div className="text-xs font-bold text-cyan-400">
                    {pkg.badge?.[currentLang] || pkg.badge?.id}
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {pkg.name[currentLang] || pkg.name.id}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      {priceFormatted}
                    </span>
                    {!isCustom && (
                      <span className="text-xs text-slate-400">/ sekali bayar</span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">
                    Kapasitas: <strong className="text-slate-200">{pkg.pagesLabel[currentLang] || pkg.pagesLabel.id}</strong>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 flex-1 space-y-3">
                  <div className="text-xs font-bold text-slate-300">
                    {t.includedFeatures}
                  </div>
                  <ul className="space-y-2.5">
                    {(pkg.features[currentLang] || pkg.features.id).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `${t.whatsappMessagePrefix}\n📌 Paket: ${pkg.name[currentLang] || pkg.name.id} (${pkg.pages} Halaman)\n💰 Biaya: ${priceFormatted}\nMohon info ketersediaan slot.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-emerald-950/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pilih Paket via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
