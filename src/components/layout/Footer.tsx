import Link from 'next/link';
import { LayoutTemplate, MessageCircle, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const whatsappUrl = generateDirectWhatsAppUrl('Layanan Pembuatan Website');

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black">
                <LayoutTemplate className="w-4 h-4" />
              </div>
              <span>
                Website<span className="text-blue-500">Platform</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Platform rekayasa website profesional siap pakai untuk bisnis, UMKM, dan korporat.
              Memprioritaskan kecepatan muat tinggi, kejelasan navigasi, optimasi SEO on-page, dan
              desain berorientasi konversi.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp Langsung</span>
              </a>
            </div>
          </div>

          {/* Col 2: Paket & Solusi */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Paket Website
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/website-packages"
                  className="hover:text-white transition-colors"
                >
                  Paket Starter UMKM
                </Link>
              </li>
              <li>
                <Link
                  href="/website-packages"
                  className="hover:text-white transition-colors"
                >
                  Paket Professional Business
                </Link>
              </li>
              <li>
                <Link
                  href="/website-packages"
                  className="hover:text-white transition-colors"
                >
                  Paket Custom Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Kalkulator Simulasi Biaya
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Desain Populer */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Konsep Desain
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/demos/modern-corporate" className="hover:text-white transition-colors">
                  Modern Corporate
                </Link>
              </li>
              <li>
                <Link href="/demos/premium-corporate" className="hover:text-white transition-colors">
                  Premium Executive
                </Link>
              </li>
              <li>
                <Link href="/demos/minimal-business" className="hover:text-white transition-colors">
                  Minimal Business
                </Link>
              </li>
              <li>
                <Link href="/demos/technology" className="hover:text-white transition-colors">
                  Technology & SaaS
                </Link>
              </li>
              <li>
                <Link href="/designs" className="text-blue-400 hover:text-blue-300 font-medium">
                  Lihat Semua 10 Desain &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Transparansi & Standar */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Standar Rekayasa
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Core Web Vitals Optimal</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standard HTTPS & SSL</span>
              </li>
              <li>
                <Link href="/components" className="hover:text-white transition-colors">
                  Katalog Komponen UI
                </Link>
              </li>
              <li>
                <Link href="/code" className="hover:text-white transition-colors">
                  Pustaka Contoh Kode
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/industries/construction" className="hover:text-white transition-colors text-xs text-slate-400">
                  Web Konstruksi & Kontraktor
                </Link>
              </li>
              <li>
                <Link href="/industries/law-firm" className="hover:text-white transition-colors text-xs text-slate-400">
                  Web Kantor Hukum & Advokat
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/configure" className="text-white hover:text-blue-400 font-medium">
                  Mulai Konfigurasi &rarr;
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
          <div className="flex items-center gap-6">
            <span>Server: Hostinger / Static Edge Compatible</span>
            <span>Versi Engine: 1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
