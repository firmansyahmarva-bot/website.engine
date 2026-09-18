'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  SlidersHorizontal,
  Calculator,
  DollarSign,
  Globe,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { WEBSITE_TYPES } from '@/content/website-types';
import { FEATURES_CATALOG } from '@/content/features';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import { FAQItem } from '@/types';

type Currency = 'USD' | 'SGD' | 'IDR';

// Conversion constants
const RATE_USD = 16000;
const RATE_SGD = 12000;
const EXTRA_PAGE_IDR = 120000;

function formatCurrency(idrAmount: number, currency: Currency): string {
  if (currency === 'USD') {
    const usd = Math.round(idrAmount / RATE_USD);
    return `$${usd.toLocaleString()} USD`;
  }
  if (currency === 'SGD') {
    const sgd = Math.round(idrAmount / RATE_SGD);
    return `S$${sgd.toLocaleString()} SGD`;
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(idrAmount);
}

const PRICING_FAQS_EN: FAQItem[] = [
  {
    question: 'How is the development investment calculated?',
    answer:
      'Our pricing formula is strictly modular and mathematical: Base Website Type Cost + (Extra Pages × Rate) + Add-on Functional Modules + Infrastructure (Domain/Hosting). You only pay for exact architectural components required by your business.',
  },
  {
    question: 'Are there any hidden monthly or maintenance fees?',
    answer:
      'None. We do not charge monthly royalties or recurring software lock-in fees. The code, database schemas, and media assets belong 100% to you. The only recurring costs are standard annual domain registration and cloud server hosting renewals.',
  },
  {
    question: 'What are the payment milestones and billing schedule?',
    answer:
      'Standard project terms are milestone-based: 50% initial commitment deposit to confirm scheduling and initiate architecture/design, and 50% final settlement upon staging approval before production handover.',
  },
  {
    question: 'Can we pay in USD or SGD via international bank transfer?',
    answer:
      'Yes. We issue formal international commercial invoices with payment support for SWIFT wire transfer, Wise Business, and major corporate credit cards.',
  },
];

export default function EnglishPricingPage() {
  const [currency, setCurrency] = useState<Currency>('USD');

  // Calculator State
  const [selectedTypeId, setSelectedTypeId] = useState<string>(WEBSITE_TYPES[0].id);
  const [pageCount, setPageCount] = useState<number>(5);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    'whatsapp',
    'contact-form',
    'seo-setup',
    'maps',
  ]);
  const [domainOption, setDomainOption] = useState<'existing' | 'include_com'>('include_com');
  const [hostingOption, setHostingOption] = useState<'existing' | 'include_cloud'>('include_cloud');

  // Selected Website Type
  const currentType = useMemo(
    () => WEBSITE_TYPES.find((t) => t.id === selectedTypeId) || WEBSITE_TYPES[0],
    [selectedTypeId]
  );

  // Toggle Feature selection
  const toggleFeature = (id: string) => {
    setSelectedFeatureIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const baseCost = currentType.basePrice;
  const includedPages = currentType.recommendedPages;
  const extraPages = Math.max(0, pageCount - includedPages);
  const extraPagesCost = extraPages * EXTRA_PAGE_IDR;

  const featuresCost = useMemo(() => {
    return selectedFeatureIds.reduce((total, id) => {
      const feat = FEATURES_CATALOG.find((f) => f.id === id);
      return total + (feat ? feat.price : 0);
    }, 0);
  }, [selectedFeatureIds]);

  const domainCost = domainOption === 'include_com' ? 200000 : 0;
  const hostingCost = hostingOption === 'include_cloud' ? 450000 : 0;
  const totalCostIDR = baseCost + extraPagesCost + featuresCost + domainCost + hostingCost;

  const formattedTotal = formatCurrency(totalCostIDR, currency);

  const whatsappInquiryUrl = generateDirectWhatsAppUrl(
    `Hello JasaWebsite team, I configured a ${currentType.name.en || currentType.name.id} website (${pageCount} pages) estimated at ${formattedTotal}. I would like to request an official project proposal.`
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { name: 'Home', url: '/en' },
            { name: 'Pricing Calculator', url: '/en/pricing' },
          ]}
        />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Transparent Formula &bull; Zero Hidden Costs
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Interactive Investment Calculator
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Configure your architectural requirements in real time. Simulate development costs in USD, SGD, or IDR with modular precision.
        </p>

        {/* Currency Switcher */}
        <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300 shadow-2xs">
          {(['USD', 'SGD', 'IDR'] as Currency[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currency === c
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c === 'USD' ? 'USD ($)' : c === 'SGD' ? 'SGD (S$)' : 'IDR (Rp)'}
            </button>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLS: CONFIGURATOR INPUTS */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Website Type */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  1
                </span>
                <span>Select Website Category</span>
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Sets the baseline architecture, Core Web Vitals configuration, and initial page quota.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WEBSITE_TYPES.map((type) => {
                  const isSelected = type.id === selectedTypeId;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedTypeId(type.id);
                        if (pageCount < type.recommendedPages) {
                          setPageCount(type.recommendedPages);
                        }
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          {type.name.en || type.name.id}
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Includes {type.recommendedPages} structured pages
                      </div>
                      <div className="text-xs font-extrabold text-blue-600 mt-2">
                        {formatCurrency(type.basePrice, currency)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Count Slider */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                    2
                  </span>
                  <span>Estimated Total Pages</span>
                </h2>
                <span className="text-lg font-extrabold text-blue-600 font-mono">
                  {pageCount} Pages
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Baseline included: {includedPages} pages. Extra pages billed at {formatCurrency(EXTRA_PAGE_IDR, currency)} per page.
              </p>

              <input
                type="range"
                min="1"
                max="25"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>1 Page</span>
                <span>Included ({includedPages})</span>
                <span>15 Pages</span>
                <span>25+ Pages</span>
              </div>
            </div>

            {/* Step 3: Modular Add-ons */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  3
                </span>
                <span>Select Functional Modules</span>
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Core features (WhatsApp, SEO schema, contact form) are 100% complimentary.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES_CATALOG.map((feat) => {
                  const isChecked = selectedFeatureIds.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {feat.name.en || feat.name.id}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {feat.description.en || feat.description.id}
                        </div>
                        <div className="text-[11px] font-bold mt-2">
                          {feat.price === 0 ? (
                            <span className="text-emerald-700">Included ($0)</span>
                          ) : (
                            <span className="text-slate-900">+{formatCurrency(feat.price, currency)}</span>
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Infrastructure Options */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  4
                </span>
                <span>Domain &amp; Cloud Infrastructure</span>
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Choose turnkey provisioning or connect your existing registrar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Domain Name:</span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="domain"
                        checked={domainOption === 'include_com'}
                        onChange={() => setDomainOption('include_com')}
                        className="accent-blue-600"
                      />
                      <span>Register new .com/.id (+{formatCurrency(200000, currency)})</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="domain"
                        checked={domainOption === 'existing'}
                        onChange={() => setDomainOption('existing')}
                        className="accent-blue-600"
                      />
                      <span>I already have a domain ($0)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Hosting Infrastructure:</span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="hosting"
                        checked={hostingOption === 'include_cloud'}
                        onChange={() => setHostingOption('include_cloud')}
                        className="accent-blue-600"
                      />
                      <span>NVMe Fast Cloud Server (+{formatCurrency(450000, currency)}/yr)</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="hosting"
                        checked={hostingOption === 'existing'}
                        onChange={() => setHostingOption('existing')}
                        className="accent-blue-600"
                      />
                      <span>Deploy to my existing server ($0)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: SUMMARY RECEIPT STICKY CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                <Calculator className="w-4 h-4" />
                <span>Estimated Investment Summary</span>
              </div>

              <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
                {formattedTotal}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                One-time capital expense &bull; No hidden software lock-in
              </div>

              {/* Line Items */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Base: {currentType.name.en || currentType.name.id}</span>
                  <span className="font-mono text-white">{formatCurrency(baseCost, currency)}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>
                    Pages: {pageCount} ({extraPages > 0 ? `+${extraPages} extra` : 'included'})
                  </span>
                  <span className="font-mono text-white">
                    {extraPagesCost > 0 ? `+${formatCurrency(extraPagesCost, currency)}` : '$0'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Modules: ({selectedFeatureIds.length} active)</span>
                  <span className="font-mono text-white">
                    {featuresCost > 0 ? `+${formatCurrency(featuresCost, currency)}` : '$0'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Domain &amp; Cloud Hosting</span>
                  <span className="font-mono text-white">
                    {domainCost + hostingCost > 0
                      ? `+${formatCurrency(domainCost + hostingCost, currency)}`
                      : '$0'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-800">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Proposal with This Quote</span>
                </a>
                <Link
                  href="/en/website-packages"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <span>Compare Standard Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes 60-day technical warranty &amp; 100/100 Core Web Vitals guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Pricing Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Frequently Asked Pricing Questions
            </h2>
          </div>
          <FAQAccordion items={PRICING_FAQS_EN} />
        </div>
      </section>
    </div>
  );
}
