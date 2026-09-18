import { Metadata } from 'next';
import { BreadcrumbItem, FAQItem } from '@/types';

export const SITE_URL = 'https://jasawebsite.net'; // Canonical production domain
export const SITE_NAME = 'JasaWebsite';

export interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path = '',
  keywords = [],
  ogType = 'website',
  image,
}: MetadataProps): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
  const cleanSlug = normalizedPath.replace(/^\//, '').replace(/\//g, '-') || 'home';
  const autoPngOg = `${SITE_URL}/og/${cleanSlug}.png`;
  const ogImageUrl = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`)
    : autoPngOg;

  const isEn = normalizedPath === '/en' || normalizedPath.startsWith('/en/');

  // Bidirectional hreflang mapping for paired routes
  const HREFLANG_PAIRS: Record<string, { id: string; en: string }> = {
    '/': { id: `${SITE_URL}`, en: `${SITE_URL}/en` },
    '/en': { id: `${SITE_URL}`, en: `${SITE_URL}/en` },
    '/website-packages': {
      id: `${SITE_URL}/website-packages`,
      en: `${SITE_URL}/en/website-packages`,
    },
    '/en/website-packages': {
      id: `${SITE_URL}/website-packages`,
      en: `${SITE_URL}/en/website-packages`,
    },
    '/pricing': {
      id: `${SITE_URL}/pricing`,
      en: `${SITE_URL}/en/pricing`,
    },
    '/en/pricing': {
      id: `${SITE_URL}/pricing`,
      en: `${SITE_URL}/en/pricing`,
    },
    '/designs': {
      id: `${SITE_URL}/designs`,
      en: `${SITE_URL}/en/designs`,
    },
    '/en/designs': {
      id: `${SITE_URL}/designs`,
      en: `${SITE_URL}/en/designs`,
    },
  };

  const matchedPair = HREFLANG_PAIRS[normalizedPath];

  const languagesRecord: Record<string, string> = matchedPair
    ? {
        id: matchedPair.id,
        en: matchedPair.en,
        'x-default': matchedPair.id,
      }
    : isEn
    ? {
        en: url,
        'x-default': url,
      }
    : {
        id: url,
        'x-default': url,
      };

  const baseKeywords = isEn
    ? [
        'global web development',
        'software engineering services',
        'enterprise web design',
        'Next.js development company',
        'B2B web development',
      ]
    : [
        'jasa pembuatan website',
        'bikin website profesional',
        'web design indonesia',
        'website UMKM',
        'company profile',
      ];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: languagesRecord,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: isEn ? 'en_US' : 'id_ID',
      type: ogType,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImageUrl],
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
      telephone: '+62-812-3336-7191',
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

export function generateDefinedTermSchema(term: string, description: string, path: string) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description,
    url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: `Glosarium & Panduan Web Bisnis ${SITE_NAME}`,
      url: `${SITE_URL}/panduan`,
    },
  };
}

export function generateHowToSchema(title: string, steps: { step: string; detail: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.step,
      text: s.detail,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  datePublished = '2026-01-15',
  dateModified = '2026-03-12',
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function generateLocalBusinessSchema({
  cityName,
  serviceName,
  description,
  path,
}: {
  cityName: string;
  serviceName: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${serviceName} di ${cityName}`,
    description,
    url,
    telephone: '+62-812-3456-7890',
    priceRange: 'Rp 1.500.000 - Rp 15.000.000',
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: cityName,
    },
  };
}

