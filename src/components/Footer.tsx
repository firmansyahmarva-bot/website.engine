'use client';

import React from 'react';
import { Language } from '@/types';
import { getTranslation } from '@/data/translations';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { Sparkles, MessageCircle, Shield, Zap, Globe, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang);

  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">
                Web<span className="text-cyan-400">Scale</span> Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerTagline}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cloudflare Edge Jamstack • 99.9% Uptime</span>
            </div>
          </div>

          {/* Column 2: 10 Hubs Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              {currentLang === 'id' ? '10 Hub Desain' : currentLang === 'ar' ? 'أنماط التصاميم' : 'Design Hubs'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">Executive Corporate</a></li>
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">NeoTech SaaS Dark</a></li>
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">Palazzo Real Estate</a></li>
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">Healthcare & Clinic</a></li>
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">E-Commerce Retail 250</a></li>
              <li><a href="#hubs" className="hover:text-cyan-400 transition-colors">Culinary & Fine Dining</a></li>
            </ul>
          </div>

          {/* Column 3: Regional Hubs */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              {currentLang === 'id' ? 'Cakupan Layanan' : currentLang === 'ar' ? 'المراكز الإقليمية' : 'Regional Hubs'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>🇮🇩 Jakarta, Surabaya, Bali (Indonesia)</li>
              <li>🇸🇦 Riyadh, Jeddah (Saudi Arabia)</li>
              <li>🇦🇪 Dubai, Abu Dhabi (UAE)</li>
              <li>🇸🇬 Singapore Tech District</li>
              <li>🇬🇧 London & Europe Hub</li>
              <li>🇺🇸 Global Fast Jamstack Network</li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Direct Hotline */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Direct Contact
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="text-xs text-slate-300">
                Hubungi langsung Technical Sales Lead kami:
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>+{WHATSAPP_NUMBER}</span>
              </a>
              <div className="text-[10px] text-slate-500">
                Respon cepat setiap hari 08:00 – 22:00 WIB
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} WebScale Engine. All rights reserved. Built for Maximum Organic Traffic & Direct WhatsApp Conversions.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Anti-DDoS Protected</span>
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>Core Web Vitals 98+</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
