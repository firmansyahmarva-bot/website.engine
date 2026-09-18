import Link from 'next/link';
import { LayoutTemplate, MessageCircle, ShieldCheck, Zap, BookOpen, Compass, MapPin } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const whatsappUrl = generateDirectWhatsAppUrl('Layanan Pembuatan Website');

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black">
                <LayoutTemplate className="w-4 h-4" />
              </div>
              <span>
                Website<span className="text-blue-500">Platform</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Platform rekayasa website modern berbasis Next.js 16 & SSG. Skor Google Core Web Vitals 100/100, zero-vulnerability, dan alur konversi WhatsApp instan.
            </p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Paket & Solusi */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Paket Website</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/website-packages" className="hover:text-white transition-colors">
                  Paket Starter UMKM
                </Link>
              </li>
              <li>
                <Link href="/website-packages" className="hover:text-white transition-colors">
                  Paket Professional Business
                </Link>
              </li>
              <li>
                <Link href="/website-packages" className="hover:text-white transition-colors">
                  Paket Custom Enterprise
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Kalkulator Simulasi Biaya
                </Link>
              </li>
              <li>
                <Link href="/configure" className="text-blue-400 hover:text-blue-300 font-medium">
                  Konfigurator Mandiri &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Desain & Showcase */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Desain & Showcase</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/showcase" className="hover:text-white transition-colors font-medium text-slate-200">
                  Showcase Hub (12 Kategori)
                </Link>
              </li>
              <li>
                <Link href="/showcase/gallery" className="hover:text-white transition-colors">
                  Galeri 10 Konsep Desain
                </Link>
              </li>
              <li>
                <Link href="/showcase/navbar" className="hover:text-white transition-colors">
                  Koleksi Desain Navbar
                </Link>
              </li>
              <li>
                <Link href="/showcase/hero" className="hover:text-white transition-colors">
                  Variasi Hero Banner
                </Link>
              </li>
              <li>
                <Link href="/showcase/animation" className="hover:text-white transition-colors">
                  Katalog Animasi Pure CSS
                </Link>
              </li>
              <li>
                <Link href="/designs" className="text-blue-400 hover:text-blue-300 font-medium">
                  Lihat Semua Desain &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Panduan & Glosarium */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Panduan Teknis</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/panduan" className="hover:text-white transition-colors font-medium text-slate-200">
                  Ensiklopedia 93 Glosarium
                </Link>
              </li>
              <li>
                <Link href="/panduan/core-web-vitals" className="hover:text-white transition-colors">
                  Panduan Core Web Vitals
                </Link>
              </li>
              <li>
                <Link href="/panduan/static-site-generation" className="hover:text-white transition-colors">
                  Static Site Generation (SSG)
                </Link>
              </li>
              <li>
                <Link href="/panduan/schema-markup" className="hover:text-white transition-colors">
                  Schema Markup & JSON-LD
                </Link>
              </li>
              <li>
                <Link href="/panduan/conversion-rate" className="hover:text-white transition-colors">
                  Optimasi Konversi (CRO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Jangkauan Wilayah Layanan */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Layanan 62 Kota</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/jasa-pembuatan-website-jakarta-selatan" className="hover:text-white transition-colors">
                  Website Jakarta Selatan
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-surabaya" className="hover:text-white transition-colors">
                  Website Surabaya
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-bandung" className="hover:text-white transition-colors">
                  Website Bandung
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-medan" className="hover:text-white transition-colors">
                  Website Medan
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-denpasar" className="hover:text-white transition-colors">
                  Website Denpasar Bali
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-batam" className="hover:text-white transition-colors">
                  Website Batam B2B
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} WebsitePlatform. Rekayasa web modern siap pakai.
            Hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="/llms.txt" className="hover:text-slate-300 underline font-mono">
              /llms.txt
            </a>
            <a href="/sitemap.xml" className="hover:text-slate-300 underline font-mono">
              /sitemap.xml
            </a>
            <span>Static Edge / Hostinger Ready</span>
            <span>Versi Engine: 2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
