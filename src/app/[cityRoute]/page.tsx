import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/content/cities';
import { WEBSITE_PACKAGES } from '@/content/packages';
import { getIndustryBySlug } from '@/lib/relationships';
import {
  constructMetadata,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_NAME,
} from '@/lib/seo';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';
import { LeadForm } from '@/components/LeadForm';

import { MATRIX_ENTITIES } from '@/content/matrix';
import IndustryCityMatrixPage, {
  generateMetadata as generateMatrixMetadata,
} from '@/components/matrix/IndustryCityMatrixView';

interface Props {
  params: Promise<{ cityRoute: string }>;
}

export async function generateStaticParams() {
  const cityParams = CITIES.map((city) => ({
    cityRoute: `jasa-pembuatan-website-${city.slug}`,
  }));
  const matrixParams = MATRIX_ENTITIES.map((m) => ({
    cityRoute: `jasa-website-${m.slug}`,
  }));
  return [...cityParams, ...matrixParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cityRoute } = await params;

  if (cityRoute.startsWith('jasa-website-')) {
    const slug = cityRoute.replace('jasa-website-', '');
    return generateMatrixMetadata({ params: Promise.resolve({ slug }) });
  }

  if (!cityRoute.startsWith('jasa-pembuatan-website-')) {
    return { title: 'Halaman Tidak Ditemukan' };
  }

  const slug = cityRoute.replace('jasa-pembuatan-website-', '');
  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
    return { title: 'Halaman Tidak Ditemukan' };
  }

  return constructMetadata({
    title: city.seoTitle,
    description: city.seoDescription,
    path: `/${cityRoute}`,
    keywords: city.seoKeywords,
    ogType: 'website',
  });
}

export default async function CityLandingPage({ params }: Props) {
  const { cityRoute } = await params;

  if (cityRoute.startsWith('jasa-website-')) {
    const slug = cityRoute.replace('jasa-website-', '');
    return IndustryCityMatrixPage({ params: Promise.resolve({ slug }) });
  }

  if (!cityRoute.startsWith('jasa-pembuatan-website-')) {
    notFound();
  }

  const slug = cityRoute.replace('jasa-pembuatan-website-', '');
  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const nearbyCities = city.nearbyCitySlugs
    .map((cSlug) => CITIES.find((c) => c.slug === cSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const relevantIndustries = city.relevantIndustrySlugs
    .map((indSlug) => getIndustryBySlug(indSlug))
    .filter((ind): ind is NonNullable<typeof ind> => Boolean(ind));

  const waUrl = generateDirectWhatsAppUrl(`pembuatan website di ${city.name}`);

  // Structured Data
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: city.name,
    serviceName: `Jasa Pembuatan Website ${city.name}`,
    description: city.economicProfile,
    path: `/${cityRoute}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: `Jasa Pembuatan Website ${city.name}`, url: `/${cityRoute}` },
  ]);

  const faqSchema = generateFAQSchema(city.localFaqs);
  const tier = city.tier || 'metro';

  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-200">Layanan Kota</span>
            <span>/</span>
            <span className="text-blue-400 font-semibold">{city.name}</span>
          </nav>

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold font-mono uppercase tracking-wider">
              {city.province} • Wilayah {tier.toUpperCase()}
            </span>
            <span className="text-xs text-slate-400">
              Estimasi Anggaran: {city.typicalPriceExpectation}
            </span>
          </div>

          {/* H1 - Grounded in Real City Economy */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Jasa Pembuatan Website {city.name}: Arsitektur Digital Modern untuk Ekosistem Bisnis {city.name}
          </h1>

          {/* Localized Intro */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {city.economicProfile}
          </p>

          {/* Hero Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-colors inline-flex items-center gap-2"
            >
              <span>💬</span>
              <span>Konsultasi Proyek {city.name} via WhatsApp</span>
            </a>
            <a
              href="#spesifikasi-paket"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              Lihat Pilihan Paket & Fitur ↓
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {/* TIER-VARYING SECTION ORDERING */}
            {tier === 'metro' && (
              <>
                {/* 1. Local Business Culture */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Karakter Transaksi & Budaya Pengambilan Keputusan Bisnis di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.localBusinessCulture}
                  </p>
                </section>

                {/* 2. Dominant Platform Habits */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Peta Kebiasaan Platform Digital Pelaku Usaha {city.name} Saat Ini
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.dominantPlatformHabit}
                  </p>
                </section>

                {/* 3. Three Industry Deep Dives */}
                <section className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                      Analisis Sektoral Terperinci
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                      Kebutuhan Spesifikasi Website pada 3 Sektor Utama di {city.name}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {city.industryDeepDive.map((dive, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-slate-900">
                            Sektor: <span className="capitalize">{dive.industrySlug.replace('-', ' ')}</span> di {city.name}
                          </h3>
                          <Link
                            href={`/industries/${dive.industrySlug}`}
                            className="text-xs font-semibold text-blue-600 hover:underline"
                          >
                            Standar Industri →
                          </Link>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {dive.localAngle}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Competitor Landscape */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Lanskap Vendor Website Lokal di {city.name} & Kelemahan yang Sering Ditemui
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.competitorLandscape}
                  </p>
                </section>

                {/* 5. Districts & Landmarks */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Cakupan Koridor Usaha & Kecamatan yang Kami Layani di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.landmarkContext}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Fokus Area Usaha Terlayani:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {city.districts.map((district, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                        >
                          📍 {district}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 6. Seasonality & Connectivity Profile */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Siklus Musim Usaha & Penyesuaian Konektivitas di {city.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <strong className="text-slate-900 block font-semibold">Siklus Kalender Bisnis:</strong>
                      <p className="leading-relaxed">{city.seasonalFactor}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <strong className="text-slate-900 block font-semibold">Optimasi Jaringan Seluler:</strong>
                      <p className="leading-relaxed">{city.connectivityProfile}</p>
                    </div>
                  </div>
                </section>
              </>
            )}

            {tier === 'large' && (
              <>
                {/* 1. Districts & Landmarks First */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Pusat Komersial & Titik Penetrasi Pasar di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.landmarkContext}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {city.districts.map((district, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-medium border border-blue-200"
                      >
                        📍 {district}
                      </span>
                    ))}
                  </div>
                </section>

                {/* 2. Industry Deep Dives */}
                <section className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                      Spesifikasi Sektoral
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                      Tiga Tulang Punggung Usaha di {city.name} & Kebutuhan Solusinya
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {city.industryDeepDive.map((dive, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-slate-900">
                            Bidang {dive.industrySlug.replace('-', ' ')} di {city.name}
                          </h3>
                          <Link
                            href={`/industries/${dive.industrySlug}`}
                            className="text-xs font-semibold text-blue-600 hover:underline"
                          >
                            Lihat Modul →
                          </Link>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {dive.localAngle}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Business Culture */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Pola Pengambilan Keputusan & Hubungan Klien di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.localBusinessCulture}
                  </p>
                </section>

                {/* 4. Competitors & Habit */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Evaluasi Layanan Pembuatan Website Konvensional di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
                    {city.competitorLandscape}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <strong className="text-slate-800">Tren Media Saat Ini: </strong>
                    {city.dominantPlatformHabit}
                  </p>
                </section>

                {/* 5. Connectivity & Seasonality */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Pertimbangan Akses Internet Seluler & Kalender Musiman di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.connectivityProfile}
                  </p>
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs sm:text-sm text-amber-950">
                    <strong>Pola Perputaran Modal & Musim: </strong>
                    {city.seasonalFactor}
                  </div>
                </section>
              </>
            )}

            {tier === 'mid' && (
              <>
                {/* 1. Industry Focus First */}
                <section className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                      Fokus Pertumbuhan Daerah
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                      Peluang Digitalisasi Sektor Potensial di {city.name}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {city.industryDeepDive.map((dive, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-slate-900 capitalize">
                            Pengembangan Sektor {dive.industrySlug.replace('-', ' ')}
                          </h3>
                          <Link
                            href={`/industries/${dive.industrySlug}`}
                            className="text-xs font-semibold text-blue-600 hover:underline"
                          >
                            Format Web →
                          </Link>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {dive.localAngle}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. Business Culture & Habit */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Kultur Niaga & Kebiasaan Komunikasi Calon Pembeli di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.localBusinessCulture}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {city.dominantPlatformHabit}
                  </p>
                </section>

                {/* 3. Competitor Review */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Kendala Pembuatan Website Konvensional yang Dihadapi Pebisnis {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.competitorLandscape}
                  </p>
                </section>

                {/* 4. Districts & Landmarks */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Jangkauan Wilayah Layanan di Kabupaten/Kota {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.landmarkContext}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {city.districts.map((district, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200"
                      >
                        📍 {district}
                      </span>
                    ))}
                  </div>
                </section>

                {/* 5. Connectivity & Season */}
                <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Tantangan Akses Sinyal & Waktu Perputaran Usaha di {city.name}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {city.connectivityProfile}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-2">
                    {city.seasonalFactor}
                  </p>
                </section>
              </>
            )}

            {/* Concise Shared Packages Specification (Under 300 words total) */}
            <section id="spesifikasi-paket" className="space-y-6 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                  Standar Harga Resmi
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  Pilihan Paket Pembuatan Website untuk Wilayah {city.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {WEBSITE_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                        {pkg.tier}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">{pkg.name.id}</h3>
                      <div className="text-lg font-black text-slate-900">
                        Rp {pkg.basePrice.toLocaleString('id-ID')}
                      </div>
                      <p className="text-xs text-slate-500 leading-tight">
                        Waktu pengerjaan {pkg.turnaroundDays} hari kerja.
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
                        <li>• {pkg.maxPages} Halaman Lengkap</li>
                        <li>• Responsif Ponsel & Tablet</li>
                        <li>• Tombol WhatsApp Otomatis</li>
                        <li>• Setup SEO Google & SSL</li>
                      </ul>
                    </div>
                    <a
                      href={generateDirectWhatsAppUrl(`${pkg.name.id} untuk ${city.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block text-center py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-colors"
                    >
                      Pilih Paket Ini
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 City Specific Local FAQs */}
            <section className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Pertanyaan yang Sering Diajukan Pemilik Bisnis di {city.name}
              </h2>
              <div className="space-y-3">
                {city.localFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby Cities Mesh */}
            {nearbyCities.length > 0 && (
              <section className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900">
                  Layanan Pembuatan Website di Kota & Wilayah Sekitar {city.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyCities.map((nc) => (
                    <Link
                      key={nc.slug}
                      href={`/jasa-pembuatan-website-${nc.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      Website {nc.name} →
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar with LeadForm */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold text-emerald-600 uppercase font-mono tracking-wider">
                  Konsultasi Gratis
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Rencanakan Website Bisnis di {city.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Isi formulir ringkas di bawah. Tim teknis kami akan merespons estimasi pengerjaan dalam 15 menit.
                </p>
              </div>

              <LeadForm defaultCity={city.name} defaultIndustry={city.industryDeepDive?.[0]?.industrySlug || ''} />
            </div>

            {/* Quick WhatsApp Handoff Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Respon Cepat
              </span>
              <h4 className="text-base font-bold">
                Lebih Nyaman Diskusi Langsung via WhatsApp?
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Tanyakan portofolio, estimasi biaya kustom, atau jadwalkan diskusi online bersama konsultan kami.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-xs text-center block shadow-xs transition-colors"
              >
                Buka Chat WhatsApp Sekarang →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
