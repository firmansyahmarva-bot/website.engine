'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ArrowRight, LayoutTemplate } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Paket Website', href: '/website-packages' },
    { label: 'Katalog Desain', href: '/designs' },
    { label: 'Komponen UI', href: '/components' },
    { label: 'Contoh Kode', href: '/code' },
    { label: 'Live Demo', href: '/demos/modern-corporate' },
    { label: 'Kalkulator Harga', href: '/pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black shadow-sm">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <span className="flex items-center">
                Website<span className="text-blue-600">Platform</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action & Locale Indicator */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 bg-slate-100 rounded-full border border-slate-200"
              title="Bahasa Aktif: Indonesia (ID)"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>ID</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400">EN</span>
            </div>

            <Link
              href="/configure"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Bangun Website</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/configure"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md"
            >
              Konfigurasi
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white" id="mobile-menu">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/configure"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg"
              >
                <span>Bangun Website Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
