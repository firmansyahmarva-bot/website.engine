import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  TrendingUp,
  Sparkles,
  SlidersHorizontal,
  MessageCircle,
  Layers,
  FileText,
  HelpCircle,
  AlertTriangle,
  Zap,
} from 'lucide-react';
import { MATRIX_ENTITIES, getMatrixBySlug } from '@/content/matrix';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { LeadForm } from '@/components/LeadForm';

export const dynamic = 'force-static';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MATRIX_ENTITIES.map((entity) => ({
    slug: entity.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const cleanSlug = slug.replace(/^jasa-website-/, '');
  const entity = getMatrixBySlug(cleanSlug) || getMatrixBySlug(slug);

  if (!entity) {
    return { title: 'Halaman Tidak Ditemukan' };
  }

  return constructMetadata({
    title: entity.seoTitle,
    description: entity.seoDescription,
    path: `/jasa-website-${entity.slug}`,
    keywords: entity.seoKeywords,
    ogType: 'website',
  });
}

export default async function IndustryCityMatrixPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  if (!slug) {
    notFound();
  }
  const cleanSlug = slug.replace(/^jasa-website-/, '');
  const entity = getMatrixBySlug(cleanSlug) || getMatrixBySlug(slug);

  if (!entity) {
    notFound();
  }

  const directWhatsAppUrl = generateDirectWhatsAppUrl(
    `jasa pembuatan website ${entity.industryName} di kota ${entity.cityName}`
  );

  // Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Solusi Industri', url: '/industries' },
    {
      name: `${entity.industryName} ${entity.cityName}`,
      url: `/jasa-website-${entity.slug}`,
    },
  ]);

  const faqSchema = generateFAQSchema(entity.faqs);

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: entity.cityName,
    serviceName: `Jasa Pembuatan Website ${entity.industryName}`,
    description: entity.description,
    path: `/jasa-website-${entity.slug}`,
  });

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `JasaWebsite - Spesialis Website ${entity.industryName} ${entity.cityName}`,
    url: `${SITE_URL}/jasa-website-${entity.slug}`,
    telephone: '+62-812-3336-7191',
    priceRange: entity.pricingExpectation,
    address: {
      '@type': 'PostalAddress',
      addressLocality: entity.cityName,
      addressRegion: entity.province,
      addressCountry: 'ID',
    },
    areaServed: entity.districts.map((d) => ({
      '@type': 'AdministrativeArea',
      name: `${d}, ${entity.cityName}`,
    })),
    description: entity.description,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { name: 'Solusi Industri', url: '/industries' },
            {
              name: `${entity.industryName} - ${entity.cityName}`,
              url: `/jasa-website-${entity.slug}`,
            },
          ]}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location & Industry Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                <Building2 className="w-3.5 h-3.5" />
                <span>{entity.industryName}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>{entity.cityName}, {entity.province}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next.js 16 SSG & SEO Lokal</span>
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {entity.title}
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-slate-700 leading-snug">
              {entity.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {entity.description}
            </p>

            {/* Local District Coverage Badges */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Cakupan Wilayah & Distrik Bisnis di {entity.cityName}:
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {entity.districts.map((district) => (
                  <span
                    key={district}
                    className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg shadow-2xs"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Proyek WhatsApp</span>
              </a>
              <Link
                href="/configure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span>Simulasi Biaya Mandiri</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TANTANGAN & PROBLEM LOKAL DI KOTA INI */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Analisis Hambatan Pasar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Tantangan Digital Sektor {entity.industryName} di {entity.cityName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Mengapa banyak bisnis sejenis di {entity.cityName} kehilangan calon klien potensial setiap hari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entity.heroProblems.map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-black mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Kendala Kritis #{index + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {problem}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Diselesaikan lewat arsitektur platform kami</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: KONTEKS BISNIS, LANDMARK & BUDAYA LOKAL */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Dinamika Pasar Lokal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                Karakteristik & Budaya Bisnis {entity.cityName}
              </h2>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {entity.marketContext}
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Sentra & Landmark Strategis</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{entity.landmarkContext}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pola Pengambilan Keputusan Klien</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{entity.localBusinessCulture}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card: Local districts coverage card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>Area Layanan Aktif di {entity.cityName}</span>
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Website yang kami bangun teroptimasi Google Maps dan SEO Geografis untuk mencakup pencarian lokal di kecamatan:
              </p>
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {entity.districts.map((d, i) => (
                  <div key={d} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900">
                <strong>Benchmark Harga di {entity.cityName}:</strong> Ekspektasi rata-rata investasi pasar berkisar antara <span className="font-bold text-blue-700">{entity.pricingExpectation}</span>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FITUR KHUSUS & STRUKTUR HALAMAN INDUSTRI */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Spesifikasi Fungsional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Modul & Fitur Esensial untuk {entity.industryName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Setiap komponen dirancang tepat sasaran untuk mempermudah konversi pengunjung menjadi prospek di {entity.cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left: Recommended Features */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Fitur Otomasi & Konversi Terpasang</span>
              </h3>
              <div className="space-y-3">
                {entity.recommendedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Essential Sections Breakdown */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Struktur Konten yang Divalidasi</span>
              </h3>
              <div className="space-y-3">
                {entity.essentialSections.map((sec, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{sec.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sec.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Package Card Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Rekomendasi Paket Terbaik
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">
                {entity.recommendedPackage}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Paket ini telah dirancang untuk memenuhi seluruh standar operasional bisnis {entity.industryName} di {entity.cityName}, termasuk domain, cloud hosting, dan jaminan keamanan SSL.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/website-packages"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white text-center transition-colors"
              >
                Lihat Rincian Paket
              </Link>
              <Link
                href="/configure"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 text-center transition-colors"
              >
                Hitung Biaya Kustom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCAL FAQS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Pertanyaan Umum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              FAQ Pembuatan Website {entity.industryName} di {entity.cityName}
            </h2>
          </div>
          <FAQAccordion items={entity.faqs} />
        </div>
      </section>

      {/* SECTION 5: LEAD FORM & CLOSING CONVERSION */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Konsultasi & Penawaran
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Mulai Website {entity.industryName} Anda di {entity.cityName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Dapatkan estimasi timeline pengerjaan, proposal spesifikasi fitur, dan jadwal diskusi teknis dalam 15 menit.
              </p>
            </div>

            <LeadForm
              defaultCity={entity.cityName}
              defaultIndustry={entity.industryName}
              defaultPackage={entity.recommendedPackage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
