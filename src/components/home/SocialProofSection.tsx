import React from 'react';
import { Star, TrendingUp, Building2, Briefcase, Award, CheckCircle } from 'lucide-react';

const CASE_STUDIES = [
  {
    clientName: 'PT Surya Fabrikasi Logistik',
    sector: 'Manufaktur & Logistik B2B',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    director: 'Bambang Prasetyo — Direktur Operasional',
    quote: 'Sebelumnya website WordPress kami sering error dan butuh 6 detik untuk dibuka. Setelah dimigrasi ke platform Next.js ini, website terbuka instan dalam 0.6 detik. Klien tender B2B menilai kredibilitas perusahaan kami naik signifikan.',
    metric: '+210% Prospek Tender',
    submetric: 'Kecepatan Muat 0.6 Detik',
    tag: 'Tender B2B Lolos',
  },
  {
    clientName: 'Finansia Advisory Partners',
    sector: 'Konsultan Keuangan & Pajak',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    director: 'Dra. Maya Anggraini, Ak., CA — Managing Partner',
    quote: 'Konsep desain Executive obsidian memberikan wibawa luar biasa. Integrasi langsung ke WhatsApp membuat calon klien VIP langsung menghubungi kami setelah membaca studi kasus layanan di website.',
    metric: '14 Klien Korporat Baru',
    submetric: 'Closing dalam 60 Hari',
    tag: 'Eksekutif Prestisius',
  },
  {
    clientName: 'PT Konstruksi Jaya Perkasa',
    sector: 'Kontraktor Sipil & MEP',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    director: 'Hendra Setiawan, S.T. — General Contractor',
    quote: 'Struktur SEO on-page yang dibangun sangat rapi. Portofolio proyek gedung dan alat berat kami langsung terindeks di Google halaman 1 untuk pencarian jasa kontraktor baja wilayah Jabodetabek.',
    metric: 'Peringkat #1 Google SEO',
    submetric: '100% Hak Milik Kode',
    tag: 'SEO Dominan',
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Hasil Riil dan Transformasi Bisnis
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Bagaimana Platform Kami Membantu Bisnis Berkembang
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Kombinasi kecepatan teknologi Next.js, arsitektur SEO terstruktur, dan desain visual terarah menciptakan hasil bisnis yang terukur.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {study.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{study.quote}"
                </p>

                {/* Key Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{study.metric}</span>
                    <span className="text-[10px] text-slate-500">{study.submetric}</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={study.avatar}
                  alt={study.director}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{study.director}</h4>
                  <p className="text-[11px] text-slate-500">{study.clientName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Stats Proof Bar */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-slate-800">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Hak Milik Kode & Domain</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">&lt; 0.8s</p>
            <p className="text-xs text-slate-400 mt-1">Rata-rata Waktu Muat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100/100</p>
            <p className="text-xs text-slate-400 mt-1">Google PageSpeed Score</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">Rp 0</p>
            <p className="text-xs text-slate-400 mt-1">Biaya Royalti Sewa Kode</p>
          </div>
        </div>

      </div>
    </section>
  );
}
