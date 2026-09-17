import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  title: 'WebScale Engine | Jasa Pembuatan Website Cepat 100+ Halaman & SEO Dominan',
  description: 'Platform pembuatan website modern berbasis Cloudflare Jamstack. 10 Hub Desain berbeda total, hingga 1.000+ halaman terindeks Google, integrasi proposal WhatsApp instan.',
  keywords: [
    'jasa pembuatan website 100 halaman',
    'bikin website murah cepat',
    'jasa web company profile umkm',
    'toko online katalog whatsapp',
    'programmatic seo website agency',
    'web development cloudflare jamstack',
    'تصميم مواقع سريعة احترافية'
  ],
  authors: [{ name: 'WebScale Engine' }],
  openGraph: {
    title: 'WebScale Engine | Jasa Pembuatan Website Cepat 100+ Halaman',
    description: 'Bikin website berkecepatan tinggi, 100+ halaman terindeks Google, dan proposal WhatsApp instan.',
    url: 'https://webscale.engine.pages.dev',
    siteName: 'WebScale Engine',
    locale: 'id_ID',
    type: 'website'
  },
  alternates: {
    languages: {
      'id-ID': 'https://webscale.engine.pages.dev/id',
      'en-US': 'https://webscale.engine.pages.dev/en',
      'ar-SA': 'https://webscale.engine.pages.dev/ar'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth bg-slate-950 text-slate-100 antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'WebScale Engine',
              image: 'https://webscale.engine.pages.dev/og-image.png',
              telephone: '+6281233367191',
              url: 'https://webscale.engine.pages.dev',
              priceRange: 'Rp 999.000 - Rp 14.999.000',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '128'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
