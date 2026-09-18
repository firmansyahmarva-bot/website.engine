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

interface Props {
  params: Promise<{ cityRoute: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    cityRoute: `jasa-pembuatan-website-${city.slug}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cityRoute } = await params;
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

  // Schema.org Generators
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: city.name,
    serviceName: 'Jasa Pembuatan Website Profesional',
    description: city.economicProfile,
    path: `/${cityRoute}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: `Jasa Pembuatan Website ${city.name}`, url: `/${cityRoute}` },
  ]);

  const faqSchema = generateFAQSchema(city.localFaqs);

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

      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200/80 pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">
              Jasa Pembuatan Website {city.name}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Layanan Resmi Wilayah {city.name}, {city.province}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Jasa Pembuatan Website {city.name}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Cepat, Modern & Siap SEO
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Solusi website profesional berstandar Next.js dan Google Core Web Vitals untuk perusahaan,
            kontraktor, pabrik, dan UMKM di {city.name}. Tampilan mewah, loading secepat kilat, dan
            siap closing prospek via WhatsApp.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2"
            >
              <span>💬</span> Konsultasi WhatsApp Gratis ({city.name})
            </a>
            <Link
              href="/configure"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
            >
              Hitung Estimasi Biaya
            </Link>
          </div>

          {/* Local Advantage Stats */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-100 text-left">
            <div className="p-3 bg-slate-50 rounded-xl">
              <p className="text-[11px] text-slate-500 font-medium">Estimasi Biaya</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{city.typicalPriceExpectation}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <p className="text-[11px] text-slate-500 font-medium">Waktu Pengerjaan</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">5 - 12 Hari Kerja</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <p className="text-[11px] text-slate-500 font-medium">Kecepatan PageSpeed</p>
              <p className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">Skor 95+ (Hijau)</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <p className="text-[11px] text-slate-500 font-medium">Garansi Sistem</p>
              <p className="text-xs sm:text-sm font-bold text-blue-600 mt-0.5">Bebas Bug & Error</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Economic Profile Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Konteks Pasar & Peluang Bisnis {city.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Mengapa Bisnis di {city.name} Memerlukan Website Berstandar Tinggi?
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {city.economicProfile}
            </p>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="text-2xl">⚡</div>
              <h3 className="font-bold text-slate-900 text-sm">Kecepatan Akses Mobile Instan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Di {city.name}, mayoritas calon pembeli mengakses internet via smartphone. Website kami
                terbuka dalam waktu kurang dari 1 detik di koneksi jaringan seluler apa pun.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="text-2xl">🎯</div>
              <h3 className="font-bold text-slate-900 text-sm">Dominasi Pencarian Lokal Google</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Struktur data schema LocalBusiness dan optimasi SEO On-Page membantu bisnis Anda muncul di
                halaman pertama Google saat calon klien di {city.name} mencari vendor terpercaya.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="text-2xl">📱</div>
              <h3 className="font-bold text-slate-900 text-sm">Closing WhatsApp Cepat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dilengkapi tombol pesan otomatis berkonteks yang langsung mengarahkan calon klien ke
                WhatsApp tim sales Anda tanpa formulir bertele-tele.
              </p>
            </div>
          </div>
        </section>

        {/* Website Packages Pricing Section */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Pilihan Paket Website untuk Pelaku Usaha di {city.name}
            </h2>
            <p className="text-sm text-slate-600">
              Investasi transparan tanpa biaya tersembunyi. Sudah mencakup domain, hosting, desain, dan SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {WEBSITE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 sm:p-8 bg-white rounded-3xl border ${
                  pkg.isPopular
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl'
                    : 'border-slate-200 shadow-xs'
                } flex flex-col justify-between relative`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-sm">
                    Paling Banyak Dipilih
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{pkg.name.id}</h3>
                  <p className="text-xs text-slate-500 mb-4">{pkg.tagline.id}</p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-xs text-slate-400">Mulai dari</span>
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Rp {pkg.basePrice.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                    {pkg.highlights.map((highlightText, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{highlightText}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={generateDirectWhatsAppUrl(`Paket ${pkg.name.id} untuk kota ${city.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center text-xs font-bold rounded-xl transition-all ${
                    pkg.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Pilih Paket {pkg.name.id}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Local FAQs Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Tanya Jawab Seputar Layanan di {city.name}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Pertanyaan yang Sering Diajukan Klien {city.name}
            </h2>
          </div>

          <div className="space-y-4">
            {city.localFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-xl mx-auto">
            <LeadForm defaultCity={city.name} />
          </div>
        </section>

        {/* Relevant Industries Linking Mesh */}
        {relevantIndustries.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              Solusi Spesifik Industri di {city.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relevantIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 text-center transition-all"
                >
                  <span className="text-xs font-bold text-slate-800 hover:text-blue-600">
                    Website {ind.name.id}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Nearby Cities Linking Mesh */}
        {nearbyCities.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              Layanan Pembuatan Website di Kota Sekitar {city.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  href={`/jasa-pembuatan-website-${nc.slug}`}
                  className="px-3.5 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Jasa Website {nc.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
