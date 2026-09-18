import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { INDUSTRIES } from '@/content/industries';
import { WEBSITE_TYPES } from '@/content/website-types';
import { GLOSSARY_ENTRIES } from '@/content/glossary';
import { INDONESIAN_CITIES } from '@/content/cities';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/website-packages`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/configure`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/designs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/showcase`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/panduan`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/components`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/code`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Showcase subpages (11 sub-showcases)
  const showcaseSubroutes = [
    'navbar',
    'footer',
    'hero',
    'typography',
    'button',
    'color',
    'animation',
    'card',
    'form',
    'section',
    'gallery',
  ];

  const showcaseRoutes: MetadataRoute.Sitemap = showcaseSubroutes.map((sub) => ({
    url: `${SITE_URL}/showcase/${sub}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. 10 Design Concept Demo routes
  const demoRoutes: MetadataRoute.Sitemap = DESIGN_CONCEPTS.map((design) => ({
    url: `${SITE_URL}/demos/${design.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 4. 43 Industry Programmatic routes
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${SITE_URL}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. 9 Website Type Programmatic routes
  const websiteTypeRoutes: MetadataRoute.Sitemap = WEBSITE_TYPES.map((type) => ({
    url: `${SITE_URL}/website-types/${type.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 6. 93 Glossary / Panduan Technical Hub routes
  const glossaryRoutes: MetadataRoute.Sitemap = GLOSSARY_ENTRIES.map((entry) => ({
    url: `${SITE_URL}/panduan/${entry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 7. 62 City Landing Pages (/jasa-pembuatan-website-[city])
  const cityRoutes: MetadataRoute.Sitemap = INDONESIAN_CITIES.map((city) => ({
    url: `${SITE_URL}/jasa-pembuatan-website-${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...showcaseRoutes,
    ...demoRoutes,
    ...industryRoutes,
    ...websiteTypeRoutes,
    ...glossaryRoutes,
    ...cityRoutes,
  ];
}
