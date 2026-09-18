import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Clock,
  Code2,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Globe,
  DollarSign,
  TrendingUp,
  Cpu,
  Lock,
} from 'lucide-react';
import { WEBSITE_PACKAGES } from '@/content/packages';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { formatIDR } from '@/content/pricing';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { constructMetadata, generateFAQSchema, SITE_NAME, SITE_URL } from '@/lib/seo';
import { FAQItem } from '@/types';

export const metadata: Metadata = constructMetadata({
  title: 'Global B2B Web Development & Software Engineering Services',
  description:
    'High-performance Next.js 16 web development for global B2B enterprises, manufacturers, and exporters. 100/100 Core Web Vitals, zero CMS security flaws, and multi-currency billing.',
  path: '/en',
  keywords: [
    'global b2b web development',
    'software engineering services',
    'enterprise nextjs web development',
    'jamstack web development agency',
    'headless website developer',
    'export company website development',
  ],
});

const ENGLISH_HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'How fast can our company website be engineered and launched?',
    answer:
      'Turnaround times depend on your package scope: Starter packages are delivered in 3-5 business days, Professional Business packages in 7-10 business days, and custom Enterprise platforms in 14-21 business days once content and brand assets are finalized.',
  },
  {
    question: 'Do we retain full 100% intellectual property and code ownership?',
    answer:
      'Yes, absolutely. You retain 100% full ownership of domain names, source code, design assets, and deployment access. We do not lock your data behind proprietary CMS royalties or mandatory recurring software licenses.',
  },
  {
    question: 'What currencies and international payment methods do you accept?',
    answer:
      'We support global transactions via international wire transfer (SWIFT / Wise), corporate credit cards, and multi-currency invoicing in USD ($), SGD (S$), and IDR (Rp) with formal corporate agreements and tax receipts.',
  },
  {
    question: 'Why do you avoid WordPress and legacy CMS platforms?',
    answer:
      'WordPress sites depend on dozens of unvetted third-party plugins that degrade page load speeds (failing Google Core Web Vitals) and introduce frequent security vulnerabilities. Our Next.js 16 static architecture eliminates the runtime database entirely, delivering sub-second speed and zero hacker attack surface.',
  },
  {
    question: 'Are your websites optimized for AI search engines like ChatGPT, Claude, and Perplexity?',
    answer:
      'Yes. Every page incorporates structured Schema.org JSON-LD markup, clean semantic semantic HTML5, and standardized llms.txt endpoints to guarantee maximum discoverability by both Googlebot and next-generation AI agents.',
  },
  {
    question: 'What technical warranty and post-launch support do you provide?',
    answer:
      'All projects include a comprehensive post-launch warranty (14 to 90 days depending on package tier) covering bug fixes, performance monitoring, and SLA response times, with optional annual maintenance retainer agreements.',
  },
];

export default function EnglishHomePage() {
  const directWhatsAppUrl = generateDirectWhatsAppUrl(
    'Inquiring about Global B2B Web Development services in USD/SGD'
  );

  const faqSchema = generateFAQSchema(ENGLISH_HOMEPAGE_FAQS);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-6 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>International Engineering Standard &bull; Next.js 16 &bull; React 19</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Global B2B Web Development &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Software Engineering
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              We engineer ultra-fast, zero-vulnerability Jamstack corporate platforms for exporters, B2B manufacturers, and international enterprises. Guaranteed 100/100 Core Web Vitals with multi-currency billing.
            </p>

            {/* Key Metrics Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-emerald-400 font-mono">100/100</div>
                <div className="text-xs text-slate-400 mt-1">Google PageSpeed Score</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-blue-400 font-mono">&lt; 1.0s</div>
                <div className="text-xs text-slate-400 mt-1">Largest Contentful Paint</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-amber-400 font-mono">0 CVE</div>
                <div className="text-xs text-slate-400 mt-1">Zero CMS Vulnerabilities</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-purple-400 font-mono">USD/SGD</div>
                <div className="text-xs text-slate-400 mt-1">Global Invoicing Ready</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Direct Consultation (WhatsApp)</span>
              </a>
              <Link
                href="/en/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all"
              >
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span>View Pricing in USD / SGD</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURAL ADVANTAGES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Enterprise Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Why High-Growth Companies Choose Jamstack Over WordPress
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Legacy monolithic platforms slow your brand down. Our static edge architecture solves speed, security, and conversion fundamentally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Global CDN Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pages are pre-rendered at build time with Static Site Generation (SSG) and distributed across 300+ global edge locations. Global buyers experience sub-50ms TTFB regardless of geography.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero SQL Injection or Plugin Exploits</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No active MySQL database or WordPress plugins exposed to the public internet. Zero database attack surface completely eliminates the #1 vector for website ransomware and downtime.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AI-Engine Ready (GEO &amp; SEO)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for both Googlebot and modern LLM crawlers (ChatGPT, Perplexity, Claude). Includes comprehensive Schema.org JSON-LD microdata and machine-readable llms.txt endpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PACKAGES OVERVIEW IN USD / SGD */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Commercial Packages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Transparent Global Pricing &amp; Scopes
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              One-time capital investment with zero hidden recurring fees. Invoicing available in USD, SGD, or IDR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter Tier</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Starter Business</h3>
                <p className="text-xs text-slate-500 mt-2">
                  Ideal for market validation, single-service landing pages, and rapid B2B presence.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-extrabold text-slate-900">$80 <span className="text-xs text-slate-500 font-normal">USD</span></div>
                  <div className="text-xs text-slate-500 mt-1">approx. S$110 SGD &bull; Rp 1.250.000</div>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Up to 3 high-converting pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 - 5 business days turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Mobile &amp; Tablet responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct WhatsApp &amp; RFQ handoff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Core Web Vitals 100/100 performance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/en/website-packages"
                  className="block w-full py-3 px-4 text-center rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  View Full Package Scope
                </Link>
              </div>
            </div>

            {/* Business Package (Popular) */}
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-md relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-600 text-white uppercase tracking-wider">
                Most Popular for B2B
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Corporate Tier</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Professional Business</h3>
                <p className="text-xs text-slate-500 mt-2">
                  Engineered for established manufacturers, consultancies, law firms, and expanding companies.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                  <div className="text-3xl font-extrabold text-blue-900">$190 <span className="text-xs text-blue-700 font-normal">USD</span></div>
                  <div className="text-xs text-blue-600 mt-1">approx. S$250 SGD &bull; Rp 2.950.000</div>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Up to 7 structured pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>7 - 10 business days turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Interactive product/service catalog</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Complete Schema.org JSON-LD microdata</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>60-day full technical maintenance warranty</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/en/website-packages"
                  className="block w-full py-3 px-4 text-center rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Choose Business Package
                </Link>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enterprise Tier</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Enterprise Custom</h3>
                <p className="text-xs text-slate-500 mt-2">
                  For exporters, multi-lingual brands, and custom platform integrations requiring bespoke architecture.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-extrabold text-slate-900">$420+ <span className="text-xs text-slate-500 font-normal">USD</span></div>
                  <div className="text-xs text-slate-500 mt-1">approx. S$560+ SGD &bull; Rp 6.500.000+</div>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited pages &amp; custom data models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-lingual architecture (EN / ID / AR)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>PDF Brochure &amp; Spec Sheet downloads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interactive pricing / RFQ calculators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-year priority SLA support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/en/pricing"
                  className="block w-full py-3 px-4 text-center rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Configure Enterprise Scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN CATALOG HIGHLIGHTS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Visual Systems
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                10 Architectural Design Concepts
              </h2>
              <p className="text-slate-600 mt-2 text-sm max-w-xl">
                Pre-tested aesthetic frameworks tailored to institutional credibility, luxury services, and high-tech software.
              </p>
            </div>
            <Link
              href="/en/designs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore All 10 Concepts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESIGN_CONCEPTS.slice(0, 3).map((concept) => (
              <div
                key={concept.id}
                className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow bg-slate-50 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 bg-slate-900 relative overflow-hidden">
                    <img
                      src={concept.imageUrl || '/images/design-modern-corporate.webp'}
                      alt={concept.name.en || concept.name.id}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm border border-slate-700">
                      {concept.styleCategory}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-slate-900">
                      {concept.name.en || concept.name.id}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {concept.description.en || concept.description.id}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/demos/${concept.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>View Interactive Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
              Engineering Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              How JasaWebsite Compares to Other Options
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                  <th className="py-4 px-4">Feature &amp; Metric</th>
                  <th className="py-4 px-4 text-blue-600 bg-blue-50/50">JasaWebsite (Next.js 16)</th>
                  <th className="py-4 px-4 text-slate-500">Traditional Agency</th>
                  <th className="py-4 px-4 text-slate-500">Overseas Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-semibold">Core Web Vitals Guarantee</td>
                  <td className="py-3 px-4 font-bold text-emerald-600 bg-blue-50/20">100/100 Guaranteed</td>
                  <td className="py-3 px-4 text-slate-500">Variable (50-70 typical)</td>
                  <td className="py-3 px-4 text-slate-500">No guarantee</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Security &amp; Vulnerabilities</td>
                  <td className="py-3 px-4 font-bold text-emerald-600 bg-blue-50/20">Zero database attack surface</td>
                  <td className="py-3 px-4 text-slate-500">Frequent plugin patches</td>
                  <td className="py-3 px-4 text-slate-500">High vulnerability risk</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Pricing Model</td>
                  <td className="py-3 px-4 font-bold text-slate-900 bg-blue-50/20">Transparent $80 - $420+</td>
                  <td className="py-3 px-4 text-slate-500">$3,000 - $15,000+</td>
                  <td className="py-3 px-4 text-slate-500">Cheap initially, costly fixes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Code Ownership</td>
                  <td className="py-3 px-4 font-bold text-emerald-600 bg-blue-50/20">100% Unlocked IP &amp; Code</td>
                  <td className="py-3 px-4 text-slate-500">Often locked to retainer</td>
                  <td className="py-3 px-4 text-slate-500">Hard to maintain</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Invoicing &amp; Currencies</td>
                  <td className="py-3 px-4 font-bold text-slate-900 bg-blue-50/20">USD, SGD, IDR (Formal PKS)</td>
                  <td className="py-3 px-4 text-slate-500">Single currency</td>
                  <td className="py-3 px-4 text-slate-500">Informal / No invoice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FAQS IN ENGLISH */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              International B2B Project FAQs
            </h2>
          </div>
          <FAQAccordion items={ENGLISH_HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 7. BOTTOM CONVERSION BANNER */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Your Global Digital Presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our senior web engineering team via WhatsApp or use our self-service calculator to customize your project scope in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
            <Link
              href="/en/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Interactive Pricing Calculator</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
