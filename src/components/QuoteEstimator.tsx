'use client';

import React, { useState } from 'react';
import { Language, Currency, WebsiteTemplate } from '@/types';
import { pricingPackages, addonOptions } from '@/data/packages';
import { websiteTemplates } from '@/data/templates';
import { getTranslation } from '@/data/translations';
import { generateWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  Calculator, 
  MessageCircle, 
  FileText, 
  Check, 
  Sparkles, 
  Clock, 
  Shield, 
  Layers, 
  CheckCircle2, 
  DollarSign, 
  Info 
} from 'lucide-react';
import { ProposalModal } from './ProposalModal';

interface QuoteEstimatorProps {
  currentLang: Language;
  selectedTemplate: WebsiteTemplate | null;
  onSelectTemplate: (template: WebsiteTemplate) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({
  currentLang,
  selectedTemplate,
  onSelectTemplate
}) => {
  const t = getTranslation(currentLang);
  const isRTL = currentLang === 'ar';

  // State
  const [selectedPages, setSelectedPages] = useState<number>(100);
  const [currency, setCurrency] = useState<Currency>('IDR');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [showProposalModal, setShowProposalModal] = useState<boolean>(false);

  // Available page steps
  const pageTiers = [1, 10, 100, 250, 500, 1000];

  // Find matching package
  const activePackage = pricingPackages.find((p) => p.pages === selectedPages) || pricingPackages[2];

  // Calculate Add-on costs
  const addonTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = addonOptions.find((a) => a.id === id);
    if (!addon) return sum;
    return sum + (currency === 'IDR' ? addon.priceIDR : addon.priceUSD);
  }, 0);

  // Base Package Cost
  const basePrice = currency === 'IDR' ? activePackage.priceIDR : activePackage.priceUSD;

  // Final Total (0 if custom enterprise)
  const isCustomEnterprise = activePackage.pages >= 1000;
  const totalPrice = isCustomEnterprise ? 0 : basePrice + addonTotal;

  // Formatter
  const formattedPrice = isCustomEnterprise
    ? currentLang === 'id' ? 'Negosiasi Khusus' : currentLang === 'ar' ? 'تسعير مخصص' : 'Custom Quote'
    : currency === 'IDR'
    ? `Rp ${totalPrice.toLocaleString('id-ID')}`
    : `$${totalPrice.toLocaleString('en-US')}`;

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTemplateObj = selectedTemplate || websiteTemplates[0];

  const whatsAppUrl = generateWhatsAppUrl({
    packageName: activePackage.name[currentLang] || activePackage.name.id,
    pages: selectedPages,
    priceFormatted: formattedPrice,
    currency,
    templateName: selectedTemplateObj.name,
    selectedAddons: selectedAddonIds.map((id) => {
      const addon = addonOptions.find((a) => a.id === id);
      return addon ? addon.name[currentLang] || addon.name.id : id;
    }),
    lang: currentLang,
    currentUrl: typeof window !== 'undefined' ? window.location.href : 'https://webscale.engine.pages.dev'
  });

  return (
    <section id="calculator" className="py-20 relative bg-slate-900 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
            <Calculator className="w-3.5 h-3.5" />
            <span>{currentLang === 'id' ? 'Estimator Instan WhatsApp' : currentLang === 'ar' ? 'حاسبة التكلفة الفورية' : 'Instant WhatsApp Quoting'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.pagesSliderTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {t.pagesSliderSubtitle}
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
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

        {/* Main Estimator Dual-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 backdrop-blur-md shadow-2xl">
            
            {/* Step 1: Page Volume Selector */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold">1</span>
                  <span>{t.selectedPages}</span>
                </label>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                  {selectedPages === 1000 ? '1.000+ Halaman' : `${selectedPages} ${t.pagesUnit}`}
                </span>
              </div>

              {/* Page Buttons Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {pageTiers.map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedPages(tier)}
                    className={`py-3 px-2 rounded-2xl flex flex-col items-center justify-center border transition-all text-center ${
                      selectedPages === tier
                        ? 'bg-gradient-to-b from-blue-600 to-indigo-700 border-cyan-400/40 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-base sm:text-lg font-extrabold">
                      {tier === 1000 ? '1.000+' : tier}
                    </span>
                    <span className="text-[10px] opacity-80 uppercase tracking-tight">
                      {tier === 1 ? 'Landing' : tier === 10 ? 'Starter' : tier === 100 ? 'Bisnis' : tier === 250 ? 'Toko' : tier === 500 ? 'Portal' : 'Custom'}
                    </span>
                  </button>
                ))}
              </div>

              <p className="text-xs text-slate-400 italic">
                {activePackage.badge?.[currentLang] || activePackage.badge?.id} — {activePackage.pagesLabel[currentLang] || activePackage.pagesLabel.id}
              </p>
            </div>

            {/* Step 2: Preferred Design Hub Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold">2</span>
                <span>{currentLang === 'id' ? 'Pilih Konsep Desain' : currentLang === 'ar' ? 'اختر النمط المعماري' : 'Select Design Architecture'}</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {websiteTemplates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => onSelectTemplate(tpl)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedTemplateObj.id === tpl.id
                        ? 'bg-blue-950/60 border-blue-500 text-white shadow-inner'
                        : 'bg-slate-900 border-slate-800/80 text-slate-300 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="text-xs font-bold truncate">{tpl.name}</div>
                      <div className="text-[10px] text-slate-400 truncate">{tpl.category}</div>
                    </div>
                    {selectedTemplateObj.id === tpl.id && (
                      <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Add-on Boosters */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold">3</span>
                <span>{t.addonsTitle}</span>
              </label>

              <div className="space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  const addonPriceFormatted = currency === 'IDR'
                    ? `+Rp ${addon.priceIDR.toLocaleString('id-ID')}`
                    : `+$${addon.priceUSD}`;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between gap-4 transition-all ${
                        isChecked
                          ? 'bg-cyan-950/30 border-cyan-500/50 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            isChecked ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-slate-600 bg-slate-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {addon.name[currentLang] || addon.name.id}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {addon.description[currentLang] || addon.description.id}
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-extrabold text-cyan-300 shrink-0">
                        {addonPriceFormatted}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Panel: Live Quotation Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-28">
            
            {/* Live Pricing Top Banner */}
            <div className="pb-6 border-b border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {currentLang === 'id' ? 'Ringkasan Penawaran' : currentLang === 'ar' ? 'ملخص التكلفة التقديرية' : 'Quotation Summary'}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {currentLang === 'id' ? 'Harga Transparan' : currentLang === 'ar' ? 'سعر نهائي ثابت' : 'Fixed Price'}
                </span>
              </div>

              <div className="pt-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {formattedPrice}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>
                    {t.deliveryEstimate}: <strong className="text-slate-200">{activePackage.deliveryDays[currentLang] || activePackage.deliveryDays.id}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Scope Breakdown */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{currentLang === 'id' ? 'Paket Terpilih:' : currentLang === 'ar' ? 'الباقة المحددة:' : 'Package:'}</span>
                <span className="font-bold text-white">{activePackage.name[currentLang] || activePackage.name.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{currentLang === 'id' ? 'Desain Style:' : currentLang === 'ar' ? 'نمط التصميم:' : 'Design Style:'}</span>
                <span className="font-bold text-cyan-400 truncate max-w-[180px] text-right">{selectedTemplateObj.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{currentLang === 'id' ? 'Target Halaman:' : currentLang === 'ar' ? 'حجم الصفحات:' : 'Page Capacity:'}</span>
                <span className="font-bold text-white">{selectedPages} {t.pagesUnit}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{currentLang === 'id' ? 'Hosting & SSL:' : currentLang === 'ar' ? 'الاستضافة السحابية:' : 'Cloud Hosting:'}</span>
                <span className="font-bold text-emerald-400">Cloudflare Edge ($0 Fee)</span>
              </div>
            </div>

            {/* Core Deliverables Included */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2.5">
              <div className="text-xs font-bold text-slate-300">
                {t.includedFeatures}
              </div>
              <ul className="space-y-1.5">
                {(activePackage.features[currentLang] || activePackage.features.id).slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action: Direct WhatsApp Generation */}
            <div className="space-y-2.5 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-400 shadow-xl shadow-emerald-950/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.whatsAppQuoteButton}</span>
              </a>

              {/* Secondary Action: View Formal Proposal */}
              <button
                onClick={() => setShowProposalModal(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{t.viewProposalButton}</span>
              </button>
            </div>

            <div className="text-center">
              <p className="text-[11px] text-slate-400">
                {currentLang === 'id'
                  ? '🔒 Data Anda aman. CS kami akan membalas di WhatsApp dalam hitungan menit.'
                  : currentLang === 'ar'
                  ? '🔒 بياناتك في أمان تام. سيرد مسؤول المبيعات عبر واتساب خلال دقائق معدودة.'
                  : '🔒 Your inquiry is direct and confidential. Response guaranteed within minutes.'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Proposal Modal View */}
      {showProposalModal && (
        <ProposalModal
          currentLang={currentLang}
          activePackage={activePackage}
          selectedTemplate={selectedTemplateObj}
          selectedPages={selectedPages}
          currency={currency}
          totalPriceFormatted={formattedPrice}
          selectedAddonIds={selectedAddonIds}
          onClose={() => setShowProposalModal(false)}
        />
      )}

    </section>
  );
};
