# Website Engine — Next.js SEO & B2B Web Platform

High-performance B2B website marketplace and programmatic SEO engine built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript. Statically exported to `out/` and deployed on Hostinger shared hosting via `index.php` and `.htaccess`.

## Environment Variables

Copy `.env.example` to `.env.local` to configure production tracking and verification:

```bash
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager Container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Search Console Verification Meta Tag Content
NEXT_PUBLIC_GSC_VERIFICATION=your_gsc_verification_code_here
```

If these keys are left empty or omitted, analytics scripts and verification tags no-op cleanly without runtime errors or extra requests.

## Scripts

- `npm run dev`: Launch local development server (`next dev --webpack`).
- `npm run build`: Compile TypeScript and generate complete static export into `out/`.
- `npm run og`: Generate high-resolution 1200×630 PNG Open Graph images for all pages.
