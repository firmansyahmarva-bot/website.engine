'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Globe, MessageCircle, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const t = getTranslation(currentLang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const isRTL = currentLang === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                100+ Pages • Cloudflare Jamstack
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#hubs" className="hover:text-white transition-colors">
              {currentLang === 'id' ? '10 Hub Desain' : currentLang === 'ar' ? '10 أنماط تصاميم' : '10 Design Hubs'}
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              {currentLang === 'id' ? 'Kalkulator Biaya' : currentLang === 'ar' ? 'حاسبة التكلفة' : 'Cost Calculator'}
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              {currentLang === 'id' ? 'Paket Harga' : currentLang === 'ar' ? 'الباقات والأسعار' : 'Pricing Plans'}
            </a>
            <a href="#components" className="hover:text-white transition-colors">
              {currentLang === 'id' ? '100+ Komponen' : currentLang === 'ar' ? 'مكتبة المكونات' : 'Components'}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Actions: Language Switcher + WhatsApp CTA */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all"
                title="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div 
                  className={`absolute mt-2 w-36 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-1.5 z-50 ${isRTL ? 'left-0' : 'right-0'}`}
                >
                  <button
                    onClick={() => { onLanguageChange('id'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between font-medium ${currentLang === 'id' ? 'bg-blue-600/20 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    <span>🇮🇩 Indonesia</span>
                    {currentLang === 'id' && <span className="text-[10px]">●</span>}
                  </button>
                  <button
                    onClick={() => { onLanguageChange('en'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between font-medium ${currentLang === 'en' ? 'bg-blue-600/20 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    <span>🇺🇸 English</span>
                    {currentLang === 'en' && <span className="text-[10px]">●</span>}
                  </button>
                  <button
                    onClick={() => { onLanguageChange('ar'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between font-medium ${currentLang === 'ar' ? 'bg-blue-600/20 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    <span>🇸🇦 العربية</span>
                    {currentLang === 'ar' && <span className="text-[10px]">●</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Call to Action */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                currentLang === 'ar'
                  ? 'مرحباً، أود استشارة فريق WebScale بخصوص تصميم وبرمجة موقع إلكتروني جديد.'
                  : currentLang === 'en'
                  ? 'Hello, I would like to consult with WebScale team regarding a new website build.'
                  : 'Halo Tim WebScale, saya ingin konsultasi pembuatan website baru.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 shadow-lg shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp CS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a 
              href="#hubs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'id' ? '10 Hub Desain' : currentLang === 'ar' ? '10 أنماط تصاميم' : '10 Design Hubs'}
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'id' ? 'Kalkulator Biaya' : currentLang === 'ar' ? 'حاسبة التكلفة' : 'Cost Calculator'}
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'id' ? 'Paket Harga' : currentLang === 'ar' ? 'الباقات والأسعار' : 'Pricing Plans'}
            </a>
            <a 
              href="#components" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'id' ? '100+ Komponen' : currentLang === 'ar' ? 'مكتبة المكونات' : 'Components'}
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 shadow-md shadow-emerald-950/30"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.ctaWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
