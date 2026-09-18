import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { BrowserFrame } from '@/components/showcase/BrowserFrame';

export const metadata: Metadata = constructMetadata({
  title: 'Showcase 10 Desain Footer Korporat & Bisnis Modern',
  description:
    'Koleksi 10 variasi footer website profesional: 4-kolom korporat, minimalis modern, integrasi peta Google, newsletter, dan legal compliance.',
  path: '/showcase/footer',
  keywords: ['desain footer website', 'contoh footer web', 'footer modern tailwind', 'corporate footer template'],
});

export default function FooterShowcasePage() {
  return (
    <div className="bg-slate-50/60 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <Link href="/showcase" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            ← Kembali ke Galeri Showcase
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            10 Variasi Footer Korporat & Bisnis
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Footer adalah titik penutup yang memantapkan kredibilitas legalitas, tautan sitemap SEO,
            dan kanal bantuan langsung pelanggan.
          </p>
        </div>

        {/* Variant 1: 4-Column Corporate Dark */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">1. Corporate 4-Column Mega Footer (Dark)</h2>
            <span className="text-xs text-slate-500 font-mono">Slate 950 • ISO Certification • Legal</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/footer-corporate">
            <footer className="p-8 sm:p-12 bg-slate-950 text-slate-400 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
                <div className="space-y-3 md:col-span-1">
                  <span className="text-white font-black text-lg">ASTRA GRAHA</span>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Kontraktor rekayasa sipil, mekanikal, dan fabrikasi baja bersertifikasi ISO 9001:2015 & OHSAS 18001.
                  </p>
                  <span className="inline-block px-2.5 py-1 bg-slate-900 border border-slate-800 text-emerald-400 text-[10px] font-bold rounded">
                    TERVERIFIKASI LPJK NASIONAL
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase mb-3">Divisi Bisnis</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer">Konstruksi Pabrik & Gudang</li>
                    <li className="hover:text-white cursor-pointer">Pekerjaan Sipil & Pondasi</li>
                    <li className="hover:text-white cursor-pointer">Pemasangan Struktur Baja</li>
                    <li className="hover:text-white cursor-pointer">Instalasi MEP & HVAC</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase mb-3">Pusat Bantuan</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer">Pengajuan Tender & RFP</li>
                    <li className="hover:text-white cursor-pointer">Unduh Company Profile PDF</li>
                    <li className="hover:text-white cursor-pointer">Katalog Portofolio Proyek</li>
                    <li className="hover:text-white cursor-pointer">Karir & Rekrutmen</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-xs uppercase mb-3">Kantor Operasional</h4>
                  <p className="text-slate-400">Gedung Graha Perkasa Lt. 8, Jl. TB Simatupang No. 45, Jakarta Selatan</p>
                  <p className="text-emerald-400 font-bold">WhatsApp: 0812-3456-7890</p>
                  <p className="text-slate-400">Email: tender@astragraha.co.id</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
                <p>© 2026 PT Astra Graha Engineering. Seluruh Hak Cipta Dilindungi.</p>
                <div className="flex gap-4">
                  <span className="hover:text-slate-300 cursor-pointer">Kebijakan Privasi</span>
                  <span className="hover:text-slate-300 cursor-pointer">Syarat & Ketentuan</span>
                  <span className="hover:text-slate-300 cursor-pointer">Sitemap XML</span>
                </div>
              </div>
            </footer>
          </BrowserFrame>
        </section>

        {/* Variant 2: Clean Minimal Light with Newsletter */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">2. Modern Light with Newsletter Form</h2>
            <span className="text-xs text-slate-500 font-mono">White Pure • Newsletter Subscription</span>
          </div>
          <BrowserFrame url="https://websiteplatform.id/footer-light">
            <footer className="p-8 sm:p-12 bg-white border-t border-slate-200 text-slate-600 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-100">
                <div>
                  <span className="text-slate-900 font-extrabold text-base">STUDIO KREATIF</span>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Membantu bisnis lokal bertransformasi menjadi brand berkelas dunia melalui desain website modern.
                  </p>
                </div>
                <div className="flex gap-12">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Navigasi</h5>
                    <ul className="space-y-1.5">
                      <li>Katalog Desain</li>
                      <li>Paket Harga</li>
                      <li>Studi Kasus</li>
                      <li>Tentang Kami</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Edukasi</h5>
                    <ul className="space-y-1.5">
                      <li>Panduan SEO</li>
                      <li>Core Web Vitals</li>
                      <li>Tips Konversi</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-900">Berlangganan Wawasan Web</h5>
                  <p className="text-slate-500 text-xs">Dapatkan artikel optimasi bisnis digital setiap pekan.</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Masukkan alamat email Anda"
                      className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs flex-1"
                      readOnly
                    />
                    <button className="px-3 py-2 bg-blue-600 text-white font-bold rounded-lg text-xs">
                      Daftar
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-400 text-[11px]">
                Dirancang dan dibangun dengan Next.js 16 & Tailwind CSS v4.
              </p>
            </footer>
          </BrowserFrame>
        </section>
      </div>
    </div>
  );
}
