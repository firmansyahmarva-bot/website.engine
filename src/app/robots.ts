import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const commonDisallows = [
    '/api/',
    '/_next/private/',
    '/contact.php',
    '/*.txt$',
  ];

  const commonAllows = [
    '/llms.txt',
    '/llms-full.txt',
    '/en/llms.txt',
    '/en/llms-full.txt',
    '/',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: commonAllows,
        disallow: commonDisallows,
      },
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Amazonbot',
          'Bytespider',
          'Applebot',
        ],
        allow: commonAllows,
        disallow: commonDisallows,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
