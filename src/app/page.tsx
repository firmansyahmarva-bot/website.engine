'use client';

import React, { useState } from 'react';
import { Language, WebsiteTemplate } from '@/types';
import { websiteTemplates } from '@/data/templates';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DesignHubs } from '@/components/DesignHubs';
import { QuoteEstimator } from '@/components/QuoteEstimator';
import { PricingSection } from '@/components/PricingSection';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { ProgrammaticSEOSection } from '@/components/ProgrammaticSEOSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | null>(websiteTemplates[0]);

  const isRTL = currentLang === 'ar';

  return (
    <div className={`min-h-screen flex flex-col bg-slate-950 text-slate-100 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Sticky Navigation */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 10 Distinct Design Hubs */}
        <DesignHubs
          currentLang={currentLang}
          onSelectTemplate={(template) => setSelectedTemplate(template)}
        />

        {/* Interactive WhatsApp Estimator & Proposal Engine */}
        <QuoteEstimator
          currentLang={currentLang}
          selectedTemplate={selectedTemplate}
          onSelectTemplate={(template) => setSelectedTemplate(template)}
        />

        {/* Transparent Pricing Packages */}
        <PricingSection currentLang={currentLang} />

        {/* 100+ Modular UI Components Library */}
        <ComponentShowcase currentLang={currentLang} />

        {/* Programmatic Organic SEO Traffic Machine */}
        <ProgrammaticSEOSection currentLang={currentLang} />

        {/* Search-Optimized FAQ Section */}
        <FAQSection currentLang={currentLang} />
      </main>

      {/* Global Agency Footer */}
      <Footer currentLang={currentLang} />

      {/* Sticky Floating WhatsApp CTA Button */}
      <FloatingWhatsApp currentLang={currentLang} />
    </div>
  );
}
