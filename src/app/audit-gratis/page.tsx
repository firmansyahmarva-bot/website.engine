import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { AuditForm } from './AuditForm';

export const metadata: Metadata = constructMetadata({
  title: 'Audit Website Bisnis Gratis — Analisis Kecepatan, SEO & Konversi',
  description: 'Dapatkan audit komprehensif website bisnis Anda secara gratis. Cek skor Core Web Vitals, arsitektur SEO on-page, status crawling Google, dan celah konversi bersama tim engineer.',
  path: '/audit-gratis',
  keywords: [
    'audit website gratis',
    'cek kecepatan website',
    'analisis seo website',
    'audit core web vitals indonesia',
    'konsultasi website bisnis gratis',
    'cek website lambat',
  ],
});

export default function AuditGratisPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Audit Website Gratis', url: '/audit-gratis' },
  ]);

  const auditBenefits = [
    {
      title: 'Diagnostik Core Web Vitals',
      desc: 'Pengukuran riil LCP (Largest Contentful Paint), INP, dan CLS menggunakan metrik resmi Google Chrome UX Report.',
      icon: '⚡',
    },
    {
      title: 'Audit Struktur SEO On-Page',
      desc: 'Pemeriksaan hirarki heading H1-H3, metadata Open Graph, kanonikalisasi, semantic HTML5, dan schema JSON-LD.',
      icon: '🔍',
    },
    {
      title: 'Inspeksi Indexing & Robot',
      desc: 'Analisis konfigurasi robots.txt, validitas XML sitemap, dan hambatan crawling mesin pencari Google.',
      icon: '🤖',
    },
    {
      title: 'Evaluasi Konversi & Mobile UX',
      desc: 'Identifikasi friksi formulir, visibilitas tombol CTA WhatsApp, dan kenyamanan navigasi pada layar smartphone.',
      icon: '🎯',
    },
  ];

  const auditSteps = [
    {
      step: '01',
      title: 'Kirimkan URL Website',
      desc: 'Masukkan alamat domain website aktif Anda dan nomor kontak WhatsApp melalui formulir di bawah.',
    },
    {
      step: '02',
      title: 'Analisis Teknis oleh Engineer',
      desc: 'Kami menjalankan uji performa mendalam dan inspeksi kode langsung oleh tim web developer berpengalaman.',
    },
    {
      step: '03',
      title: 'Terima Rekomendasi Aksi',
      desc: 'Anda mendapatkan ringkasan temuan kritis dan roadmap perbaikan teknis praktis via WhatsApp dalam 1x24 jam.',
    },
  ];

  const faqs = [
    {
      q: 'Apakah audit website ini benar-benar gratis?',
      a: 'Ya, 100% gratis tanpa syarat tersembunyi dan tanpa kewajiban memesan jasa pembuatan website. Kami membantu pemilik usaha memahami kesehatan teknis aset digital mereka.',
    },
    {
      q: 'Bagaimana jika saya belum memiliki website?',
      a: 'Anda tetap bisa berkonsultasi! Cukup centang opsi "Belum punya website" di formulir. Kami akan memberikan panduan arsitektur dan spesifikasi ideal untuk bisnis Anda.',
    },
    {
      q: 'Berapa lama laporan audit akan dikirimkan?',
      a: 'Laporan ringkas dan rekomendasi prioritas akan dikirimkan via WhatsApp dalam waktu maksimal 1x24 jam pada hari kerja.',
    },
    {
      q: 'Apa perbedaan audit ini dengan checker otomatis gratisan?',
      a: 'Tool otomatis seringkali hanya mengeluarkan skor umum tanpa konteks bisnis. Audit kami menggabungkan data laboratorium teknis dengan telaah arsitektur kode dan perilaku konversi lokal Indonesia.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white font-medium">Audit Website Gratis</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold rounded-lg uppercase tracking-wider mb-4">
              Layanan Diagnostik Gratis
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Audit Website Bisnis Anda: Temukan Celah Kecepatan, SEO & Konversi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Ketahui alasan sebenarnya mengapa website Anda lambat diakses, sulit naik ke halaman satu Google, atau minim menghasilkan kontak WhatsApp. Dapatkan laporan evaluasi komprehensif langsung dari engineer kami.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Benefits Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Formulir Permohonan Audit
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Isi data di bawah ini. Hasil audit akan kami sampaikan langsung ke nomor WhatsApp aktif Anda.
              </p>
            </div>
            <AuditForm />
          </div>

          {/* Value Props Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Yang Kami Evaluasi Dalam Audit:
              </h3>
              <div className="space-y-4">
                {auditBenefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg flex-shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Jaminan Tanpa Risiko
              </span>
              <h3 className="text-lg font-bold">100% Bebas Biaya & Tanpa Kewajiban</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Anda bebas menggunakan hasil temuan dan rekomendasi teknis kami untuk diperbaiki sendiri, oleh tim internal, maupun vendor lama Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Step Process */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Alur Kerja Sederhana
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Bagaimana Proses Audit Bekerja?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {auditSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative"
            >
              <div className="text-3xl font-extrabold text-blue-600/30 mb-2 font-mono">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Pertanyaan Umum Seputar Audit
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}