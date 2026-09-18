'use client';

import { useState, useId } from 'react';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Building2,
  Zap,
  ShoppingBag,
  Utensils,
  Hotel,
  GraduationCap,
  Palette,
  Briefcase,
  Code,
  Globe2,
  Server,
  HelpCircle,
} from 'lucide-react';
import { ConfiguratorSelection } from '@/types';
import { WEBSITE_TYPES } from '@/content/website-types';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { FEATURES_CATALOG } from '@/content/features';
import { calculatePrice, formatIDR, PRICING_CONFIG } from '@/content/pricing';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface WebsiteConfiguratorProps {
  initialDesignId?: string;
  initialTypeId?: string;
  initialPageCount?: number;
  initialFeatureIds?: string[];
}

export default function WebsiteConfigurator({
  initialDesignId,
  initialTypeId,
  initialPageCount,
  initialFeatureIds,
}: WebsiteConfiguratorProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;
  const pageRangeId = useId();

  // Selection state
  const [selection, setSelection] = useState<ConfiguratorSelection>({
    websiteTypeId: initialTypeId || WEBSITE_TYPES[0].id,
    designId: initialDesignId || DESIGN_CONCEPTS[0].id,
    pageCount: initialPageCount || 5,
    featureIds:
      initialFeatureIds && initialFeatureIds.length > 0
        ? initialFeatureIds
        : ['whatsapp', 'contact-form', 'maps', 'seo-setup', 'analytics'],
    domainOption: 'include_com',
    hostingOption: 'include_cloud',
  });

  // Calculate live pricing breakdown
  const breakdown = calculatePrice(selection);
  const whatsappUrl = generateWhatsAppUrl(breakdown);

  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const toggleFeature = (featureId: string) => {
    setSelection((prev) => {
      const exists = prev.featureIds.includes(featureId);
      if (exists) {
        return {
          ...prev,
          featureIds: prev.featureIds.filter((id) => id !== featureId),
        };
      } else {
        return {
          ...prev,
          featureIds: [...prev.featureIds, featureId],
        };
      }
    });
  };

  const stepsList = [
    { num: 1, label: 'Tipe Website' },
    { num: 2, label: 'Konsep Desain' },
    { num: 3, label: 'Halaman' },
    { num: 4, label: 'Fitur & Modul' },
    { num: 5, label: 'Infrastruktur' },
    { num: 6, label: 'Ringkasan & WhatsApp' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Steps Header & Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 border-b border-slate-200">
          {stepsList.map((step) => {
            const isActive = currentStep === step.num;
            const isDone = currentStep > step.num;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setCurrentStep(step.num)}
                className={`flex items-center gap-2 text-xs sm:text-sm font-semibold whitespace-nowrap px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : isDone
                    ? 'text-slate-800 hover:text-blue-600'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" /> : step.num}
                </span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Wizard Area (7 cols on Desktop) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* STEP 1: WEBSITE TYPE */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Langkah 1 dari 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Pilih Kategori & Tipe Website
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Tentukan model bisnis dan tujuan utama website Anda untuk mendapatkan arsitektur
                  yang paling efektif.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WEBSITE_TYPES.map((type) => {
                  const isSelected = selection.websiteTypeId === type.id;

                  return (
                    <div
                      key={type.id}
                      onClick={() => {
                        setSelection((prev) => ({
                          ...prev,
                          websiteTypeId: type.id,
                          pageCount: Math.max(prev.pageCount, type.recommendedPages),
                        }));
                      }}
                      className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`p-2.5 rounded-lg ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {getIcon(type.iconName)}
                          </div>
                          {isSelected && (
                            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-md">
                              <Check className="w-3.5 h-3.5" /> Terpilih
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">{type.name.id}</h3>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                          {type.tagline.id}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          Standar {type.recommendedPages} Halaman
                        </span>
                        <span className="font-semibold text-slate-900">
                          Mulai {formatIDR(type.basePrice)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: DESIGN CONCEPT */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Langkah 2 dari 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Pilih Konsep Visual & Karakter Desain
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  10 konsep desain orisinal yang dapat disesuaikan dengan identitas brand, warna,
                  dan logo perusahaan Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DESIGN_CONCEPTS.map((design) => {
                  const isSelected = selection.designId === design.id;

                  return (
                    <div
                      key={design.id}
                      onClick={() =>
                        setSelection((prev) => ({
                          ...prev,
                          designId: design.id,
                        }))
                      }
                      className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                              style={{ backgroundColor: design.primaryColor }}
                            />
                            <span
                              className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                              style={{ backgroundColor: design.accentColor }}
                            />
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              {design.styleCategory}
                            </span>
                          </div>
                          {design.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                              {design.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="font-bold text-slate-900 text-base">{design.name.id}</h3>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                          {design.tagline.id}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Font: {design.fontFamily.split(',')[0]}
                        </span>
                        <a
                          href={`/demos/${design.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Lihat Live Demo &rarr;
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: NUMBER OF PAGES */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Langkah 3 dari 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Tentukan Perkiraan Jumlah Halaman
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Berapa banyak halaman yang Anda butuhkan? (Termasuk Beranda, Tentang Kami, Layanan,
                  Portofolio, Kontak, dll.)
                </p>
              </div>

              {/* Quick Select Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[1, 3, 5, 8, 12, 20].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSelection((prev) => ({ ...prev, pageCount: num }))}
                    className={`py-3 px-2 text-center rounded-xl border-2 font-bold text-sm transition-all ${
                      selection.pageCount === num
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {num} Halaman
                  </button>
                ))}
              </div>

              {/* Slider for custom pages */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor={pageRangeId} className="text-sm font-semibold text-slate-700">
                    Jumlah Halaman Kustom:
                  </label>
                  <span className="text-lg font-bold text-blue-600">
                    {selection.pageCount} Halaman
                  </span>
                </div>
                <input
                  id={pageRangeId}
                  type="range"
                  min="1"
                  max="35"
                  value={selection.pageCount}
                  onChange={(e) =>
                    setSelection((prev) => ({ ...prev, pageCount: parseInt(e.target.value, 10) }))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>1 Halaman (Landing Page)</span>
                  <span>10 Halaman (Standar)</span>
                  <span>35+ Halaman (Korporat Besar)</span>
                </div>
                <p className="text-xs text-slate-500 italic mt-2">
                  * Tipe website {breakdown.websiteType.name.id} sudah mencakup{' '}
                  {breakdown.websiteType.recommendedPages} halaman utama dalam harga dasar. Halaman
                  tambahan dihitung {formatIDR(PRICING_CONFIG.extraPageCost)} per halaman.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: FEATURES & MODULES */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Langkah 4 dari 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Pilih Fitur & Modul Tambahan
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Centang modul yang diperlukan untuk operasional dan konversi bisnis Anda.
                </p>
              </div>

              <div className="space-y-3">
                {FEATURES_CATALOG.map((feat) => {
                  const isChecked = selection.featureIds.includes(feat.id);

                  return (
                    <label
                      key={feat.id}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/40 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleFeature(feat.id)}
                        className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-slate-900">
                            {feat.name.id}
                          </span>
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${
                              feat.price === 0
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {feat.price === 0 ? 'Termasuk (Gratis)' : `+ ${formatIDR(feat.price)}`}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{feat.description.id}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: INFRASTRUCTURE (DOMAIN & HOSTING) */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Langkah 5 dari 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Nama Domain & Hosting Server
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Tentukan apakah Anda sudah memiliki domain & server sendiri, atau ingin kami siapkan
                  secara all-in-one.
                </p>
              </div>

              {/* Domain Options */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>Kebutuhan Nama Domain (.com / .id / .co.id)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() =>
                      setSelection((prev) => ({ ...prev, domainOption: 'include_com' }))
                    }
                    className={`p-4 rounded-xl border-2 cursor-pointer ${
                      selection.domainOption === 'include_com'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">
                      Bantu Daftarkan Domain Baru
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Termasuk registrasi resmi 1 tahun (.com / .id) atas nama Anda.
                    </div>
                    <div className="mt-2 text-xs font-bold text-blue-600">
                      + {formatIDR(PRICING_CONFIG.infrastructure.domain.include_com)} / tahun
                    </div>
                  </div>

                  <div
                    onClick={() => setSelection((prev) => ({ ...prev, domainOption: 'existing' }))}
                    className={`p-4 rounded-xl border-2 cursor-pointer ${
                      selection.domainOption === 'existing'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">
                      Sudah Memiliki Domain Sendiri
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Kami bantu setting DNS dan menghubungkannya tanpa biaya tambahan.
                    </div>
                    <div className="mt-2 text-xs font-bold text-emerald-600">
                      Rp 0 (Gunakan Yang Ada)
                    </div>
                  </div>
                </div>
              </div>

              {/* Hosting Options */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>Kebutuhan Server Hosting</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() =>
                      setSelection((prev) => ({ ...prev, hostingOption: 'include_cloud' }))
                    }
                    className={`p-4 rounded-xl border-2 cursor-pointer ${
                      selection.hostingOption === 'include_cloud'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">
                      Cloud SSD Hosting 1 Tahun
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Server cepat, SSL HTTPS gratis, setup email bisnis resmi (@namabisnis.com).
                    </div>
                    <div className="mt-2 text-xs font-bold text-blue-600">
                      + {formatIDR(PRICING_CONFIG.infrastructure.hosting.include_cloud)} / tahun
                    </div>
                  </div>

                  <div
                    onClick={() => setSelection((prev) => ({ ...prev, hostingOption: 'existing' }))}
                    className={`p-4 rounded-xl border-2 cursor-pointer ${
                      selection.hostingOption === 'existing'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">
                      Sudah Ada Hosting Sendiri (Hostinger / cPanel)
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Website akan kami deploy langsung ke hosting milik Anda.
                    </div>
                    <div className="mt-2 text-xs font-bold text-emerald-600">
                      Rp 0 (Deploy ke Hosting Anda)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: SUMMARY & WHATSAPP */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Langkah Terakhir &bull; Siap Konsultasi
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Konfigurasi Website Anda Selesai!
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Rincian spesifikasi telah dirangkum ke dalam format pesan resmi. Lanjutkan ke
                  WhatsApp untuk mendiskusikan jadwal dan memulai proyek.
                </p>
              </div>

              {/* Specification Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Tipe Website:</span>
                  <span className="font-bold text-slate-900">{breakdown.websiteType.name.id}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Konsep Desain:</span>
                  <span className="font-bold text-slate-900">{breakdown.design.name.id}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Jumlah Halaman:</span>
                  <span className="font-bold text-slate-900">{breakdown.pageCount} Halaman</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Fitur & Modul:</span>
                  <span className="font-bold text-slate-900 text-right max-w-xs">
                    {breakdown.selectedFeatures.length} Modul Terpilih
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Domain:</span>
                  <span className="font-bold text-slate-900">
                    {breakdown.domainOption === 'existing'
                      ? 'Domain Milik Sendiri'
                      : 'Termasuk Registrasi Domain 1 Thn'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hosting:</span>
                  <span className="font-bold text-slate-900">
                    {breakdown.hostingOption === 'existing'
                      ? 'Deploy ke Hosting Milik Sendiri'
                      : 'Termasuk Cloud SSD Hosting 1 Thn'}
                  </span>
                </div>
              </div>

              {/* Callout Info */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
                <p>
                  Estimasi biaya ini bersifat transparan dan dapat disesuaikan kembali berdasarkan
                  kebutuhan unik proyek Anda saat konsultasi bersama konsultan teknis kami via WhatsApp.
                </p>
              </div>

              {/* Main Conversion CTA */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Kirim Spesifikasi ke WhatsApp & Dapatkan Penawaran Resmi</span>
                </a>
              </div>
            </div>
          )}

          {/* Navigation Controls (Back / Next) */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors"
              >
                <span>Lanjut ke Langkah {currentStep + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Sticky Price Breakdown Sidebar (4 cols on Desktop) */}
        <div className="lg:col-span-4 bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sticky top-20 shadow-lg">
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
            Estimasi Investasi
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Dasar ({breakdown.websiteType.name.id}):</span>
              <span className="font-semibold text-white">
                {formatIDR(breakdown.websiteType.basePrice)}
              </span>
            </div>

            {breakdown.pageCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">
                  Halaman Tambahan ({breakdown.pageCount - breakdown.websiteType.recommendedPages}{' '}
                  hlm):
                </span>
                <span className="font-semibold text-white">
                  + {formatIDR(breakdown.pageCost)}
                </span>
              </div>
            )}

            {breakdown.featuresCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">Modul Tambahan:</span>
                <span className="font-semibold text-white">
                  + {formatIDR(breakdown.featuresCost)}
                </span>
              </div>
            )}

            {breakdown.domainCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">Domain (.com / .id):</span>
                <span className="font-semibold text-white">
                  + {formatIDR(breakdown.domainCost)}
                </span>
              </div>
            )}

            {breakdown.hostingCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">Cloud SSD Server:</span>
                <span className="font-semibold text-white">
                  + {formatIDR(breakdown.hostingCost)}
                </span>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-baseline justify-between">
              <span className="text-xs text-slate-400">Total Estimasi:</span>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">
                  {formatIDR(breakdown.estimatedTotal)}
                </span>
                <div className="text-[10px] text-slate-500 mt-0.5">Sudah termasuk revisi & garansi</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors text-center shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasikan via WhatsApp</span>
            </a>
            <div className="text-center text-[11px] text-slate-400">
              Tanpa komitmen &bull; Respon cepat jam kerja
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
