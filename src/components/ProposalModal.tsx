'use client';

import React from 'react';
import { Language, Currency, PricingPackage, WebsiteTemplate } from '@/types';
import { addonOptions } from '@/data/packages';
import { generateWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  X, 
  Printer, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  CreditCard, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

interface ProposalModalProps {
  currentLang: Language;
  activePackage: PricingPackage;
  selectedTemplate: WebsiteTemplate;
  selectedPages: number;
  currency: Currency;
  totalPriceFormatted: string;
  selectedAddonIds: string[];
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  currentLang,
  activePackage,
  selectedTemplate,
  selectedPages,
  currency,
  totalPriceFormatted,
  selectedAddonIds,
  onClose
}) => {
  const proposalId = `WS-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateFormatted = new Date().toLocaleDateString(currentLang === 'id' ? 'id-ID' : currentLang === 'ar' ? 'ar-SA' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const selectedAddons = addonOptions.filter((a) => selectedAddonIds.includes(a.id));

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const whatsAppProposalUrl = generateWhatsAppUrl({
    packageName: `[PROPOSAL RESMI ${proposalId}] ${activePackage.name[currentLang] || activePackage.name.id}`,
    pages: selectedPages,
    priceFormatted: totalPriceFormatted,
    currency,
    templateName: selectedTemplate.name,
    selectedAddons: selectedAddons.map((a) => a.name[currentLang] || a.name.id),
    lang: currentLang,
    currentUrl: typeof window !== 'undefined' ? window.location.href : 'https://webscale.engine.pages.dev'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
              {proposalId}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {currentLang === 'id' ? 'Draft Proposal Resmi' : currentLang === 'ar' ? 'عرض سعر فني رسمي' : 'Official Project Proposal'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{currentLang === 'id' ? 'Cetak / PDF' : currentLang === 'ar' ? 'طباعة / PDF' : 'Print / PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Proposal Document Body (Printable) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Document Letterhead */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 print:border-gray-300">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-white print:text-black">
                  Web<span className="text-cyan-400">Scale</span> Engine
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                  Global Agency
                </span>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                Cloudflare Jamstack • Programmatic SEO • High Conversion Architecture
              </p>
            </div>

            <div className="sm:text-right text-xs text-slate-400 print:text-gray-600 space-y-1">
              <div><strong>No. Proposal:</strong> {proposalId}</div>
              <div><strong>Tanggal:</strong> {dateFormatted}</div>
              <div><strong>WhatsApp Hotline:</strong> +{WHATSAPP_NUMBER}</div>
            </div>
          </div>

          {/* Project Title & Scope */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              {currentLang === 'id' ? 'Ruang Lingkup Proyek' : currentLang === 'ar' ? 'نطاق العمل والمشروع' : 'Scope of Work'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white print:text-black">
              {activePackage.name[currentLang] || activePackage.name.id} ({selectedPages} Halaman)
            </h2>
            <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
              Pengembangan website generasi terbaru dengan arsitektur Jamstack tanpa server lambat, didukung oleh jaringan Cloudflare Edge global, teroptimasi untuk mendominasi kata kunci mesin pencari Google, dan terhubung langsung dengan sistem konversi WhatsApp.
            </p>
          </div>

          {/* Core Deliverables Table */}
          <div className="rounded-2xl border border-slate-800 print:border-gray-300 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 print:bg-gray-100 text-slate-300 print:text-gray-900 border-b border-slate-800 print:border-gray-300 font-bold">
                <tr>
                  <th className="p-3.5">Komponen & Deliverable</th>
                  <th className="p-3.5">Spesifikasi Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 print:divide-gray-200">
                <tr>
                  <td className="p-3.5 font-bold text-white print:text-black">Kapasitas Halaman</td>
                  <td className="p-3.5 text-slate-300 print:text-gray-800">{selectedPages} Halaman Lengkap Terindeks Google</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white print:text-black">Konsep Desain</td>
                  <td className="p-3.5 text-slate-300 print:text-gray-800">{selectedTemplate.name} ({selectedTemplate.style})</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white print:text-black">Infrastruktur Hosting</td>
                  <td className="p-3.5 text-emerald-400 print:text-emerald-700 font-semibold">Cloudflare Pages Edge CDN (Free Bandwidth & Zero Maintenance)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white print:text-black">Kecepatan & SEO</td>
                  <td className="p-3.5 text-slate-300 print:text-gray-800">Skor PageSpeed 95+, Structured Data JSON-LD, Sitemap XML Otomatis</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white print:text-black">Integrasi WhatsApp</td>
                  <td className="p-3.5 text-slate-300 print:text-gray-800">Lead Generator Otomatis dengan Parameter Produk/Layanan Terformat</td>
                </tr>
                {selectedAddons.map((addon) => (
                  <tr key={addon.id} className="bg-cyan-950/20 print:bg-cyan-50">
                    <td className="p-3.5 font-bold text-cyan-300 print:text-cyan-800">+ {addon.name[currentLang] || addon.name.id}</td>
                    <td className="p-3.5 text-slate-300 print:text-gray-800">{addon.description[currentLang] || addon.description.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Investment Total */}
          <div className="p-5 rounded-2xl bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-600">Total Nilai Investasi Proyek</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white print:text-black mt-0.5">
                {totalPriceFormatted}
              </div>
            </div>
            <div className="text-right text-xs text-slate-400 print:text-gray-600">
              <div>Estimasi Selesai: <strong>{activePackage.deliveryDays[currentLang] || activePackage.deliveryDays.id}</strong></div>
              <div className="text-emerald-400 print:text-emerald-700 font-semibold">Garansi Revisi & SLA 30 Hari</div>
            </div>
          </div>

          {/* Timeline & Payment Terms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-400 print:text-gray-600">
            <div className="space-y-2">
              <h4 className="font-bold text-white print:text-black flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Tahapan Milestone & Pengerjaan</span>
              </h4>
              <ul className="space-y-1">
                <li>• <strong>Hari 1:</strong> Pengumpulan materi logo, copy, dan konfigurasi tema.</li>
                <li>• <strong>Hari 2–3:</strong> Perakitan halaman, struktur katalog & uji responsivitas.</li>
                <li>• <strong>Hari 4+:</strong> Pengujian PageSpeed 95+, audit SEO Google, dan go-live.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white print:text-black flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                <span>Syarat & Pembayaran</span>
              </h4>
              <ul className="space-y-1">
                <li>• <strong>Tahap 1 (DP 50%):</strong> Untuk memulai proses reservasi slot dan setup arsitektur.</li>
                <li>• <strong>Tahap 2 (Pelunasan 50%):</strong> Setelah website selesai diuji dan siap dihubungkan ke domain resmi.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="text-xs text-slate-400">
            {currentLang === 'id' 
              ? 'Klik tombol di samping untuk mengonfirmasi proposal ini langsung ke WhatsApp tim kami.' 
              : currentLang === 'ar'
              ? 'انقر على الزر لتأكيد هذا العرض والبدء مباشرة مع فريق المبيعات على واتساب.'
              : 'Click to confirm this proposal directly with our technical team on WhatsApp.'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all"
            >
              {currentLang === 'id' ? 'Tutup' : currentLang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
            <a
              href={whatsAppProposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{currentLang === 'id' ? 'Setujui Proposal via WhatsApp' : currentLang === 'ar' ? 'الموافقة على العرض عبر واتساب' : 'Approve Proposal on WhatsApp'}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
