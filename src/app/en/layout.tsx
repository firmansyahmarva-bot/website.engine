import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Global B2B Web Development & Software Engineering Services | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Enterprise-grade website development and high-performance Jamstack engineering for global businesses, exporters, and B2B brands. Next.js 16, React 19, 100/100 Core Web Vitals.',
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      en: `${SITE_URL}/en`,
      id: SITE_URL,
      'x-default': `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en`,
    siteName: SITE_NAME,
    title: `Global B2B Web Development & Software Engineering Services | ${SITE_NAME}`,
    description:
      'Enterprise-grade website development and high-performance Jamstack engineering for global businesses, exporters, and B2B brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Global B2B Web Development & Software Engineering Services | ${SITE_NAME}`,
    description:
      'Enterprise-grade website development and high-performance Jamstack engineering for global businesses, exporters, and B2B brands.',
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="en-locale min-h-screen flex flex-col font-sans">
      {children}
    </div>
  );
}
