import { Metadata } from 'next';
import { BreadcrumbItem, FAQItem } from '@/types';

export const SITE_URL = 'https://websiteplatform.id'; // Canonical production domain placeholder
export const SITE_NAME = 'WebsitePlatform';

export interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
}

export function constructMetadata({
  title,
  description,
  path = '',
  keywords = [],
  ogType = 'website',
}: MetadataProps): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: [
      'jasa pembuatan website',
      'bikin website profesional',
      'web design indonesia',
      'website UMKM',
      'company profile',
      ...keywords,
    ],
    alternates: {
      canonical: url,
      languages: {
        id: url,
        'x-default': url,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'id_ID',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Schema.org JSON-LD Generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Platform dan jasa pembuatan website profesional berstandar modern, cepat, dan teroptimasi SEO.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-812-3456-7890',
      contactType: 'customer support',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [],
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(name: string, description: string, price: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  };
}
