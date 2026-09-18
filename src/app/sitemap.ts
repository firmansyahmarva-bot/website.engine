import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { INDUSTRIES } from '@/content/industries';
import { WEBSITE_TYPES } from '@/content/website-types';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
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
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/designs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/configure`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
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

  // 10 Design Concept Demo routes
  const demoRoutes: MetadataRoute.Sitemap = DESIGN_CONCEPTS.map((design) => ({
    url: `${SITE_URL}/demos/${design.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 43 Industry Programmatic routes
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${SITE_URL}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 9 Website Type Programmatic routes
  const websiteTypeRoutes: MetadataRoute.Sitemap = WEBSITE_TYPES.map((type) => ({
    url: `${SITE_URL}/website-types/${type.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...demoRoutes, ...industryRoutes, ...websiteTypeRoutes];
}
