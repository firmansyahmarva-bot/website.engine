import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { generateOrganizationSchema, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Jasa Pembuatan Website Profesional & Siap Pakai`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Layanan pembuatan website profesional terstandarisasi untuk korporat, UMKM, dan bisnis. Desain modern, loading cepat, SEO-friendly, dan siap mendatangkan prospek penjualan.',
  alternates: {
    canonical: SITE_URL,
    languages: {
      id: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Jasa Pembuatan Website Profesional`,
    description:
      'Solusi website bisnis siap pakai dengan performa tinggi, 10 konsep desain orisinal, dan konfigurasi harga transparan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Jasa Pembuatan Website Profesional`,
    description:
      'Solusi website bisnis siap pakai dengan performa tinggi, 10 konsep desain orisinal, dan konfigurasi harga transparan.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold shadow-lg"
        >
          Lewati ke konten utama
        </a>

        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
