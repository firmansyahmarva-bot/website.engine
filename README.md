# 🚀 WebScale Engine — High-Traffic Multi-Language Website Sales Platform

A modern web development agency and website sales platform built on **Next.js + TypeScript + Tailwind CSS**, designed for **Cloudflare Pages Jamstack** deployment.

Engineered to sell websites at scale with **zero heavy server costs**, **10 distinct design hubs**, an **interactive WhatsApp proposal & price estimator**, and **programmatic SEO capability** for hundreds to thousands of indexed pages.

---

## 🌟 Key Architecture & Features

### 1. ⚡ 100% Cloudflare Pages Ready ($0 Bandwidth & Infinite Scale)
- Built for static edge deployment with **zero egress fees**, **unlimited free bandwidth**, and automated global SSL.
- Ultra-low TTFB (<200ms) from edge nodes in Jakarta, Singapore, Dubai, Riyadh, London, and worldwide.
- Immune to WordPress-style malware, database crashes, and brute-force attacks.

### 2. 🎨 10 Totally Distinct Design Hubs (Live Interactive Previews)
1. **Executive Corporate**: Minimalist Navy & Slate, credentials, leadership matrix.
2. **NeoTech SaaS & AI**: Cyber Dark Mode, glassmorphic cards, live uptime telemetry.
3. **Palazzo Luxury Real Estate**: High-end architectural grid, floorplan drawers, villa showcase.
4. **Apex Healthcare & Clinic**: Trust Cyan & Clean White, doctor rosters, medical treatments.
5. **Nordic Retail E-Commerce**: 250+ SKU capacity, instant sub-10ms filter, WhatsApp cart checkout.
6. **Bistronomy Fine Dining & Cafe**: Warm dark amber, rich digital menu, table reservation modal.
7. **Studio Kroma Creative Portfolio**: Bold editorial typography, project case studies.
8. **Vanguard Legal & Wealth Advisory**: Authoritative Navy & Gold, confidential consultation booking.
9. **OmniSkill Academy & Courses**: Vibrant EdTech, curriculum tree, alumni reviews.
10. **Titan Heavy Industrial & Logistics**: High-contrast safety yellow & charcoal, RFQ engine.

### 3. 📱 Direct WhatsApp Quoting & Lead Generator
- **Target Number**: `+62 812-3336-7191` (`6281233367191`).
- **Real-Time Price & Scope Calculator**:
  - Sliders for 1, 10, 100, 250, 500, and 1,000+ pages.
  - Multi-currency switcher (IDR "Rp" / USD "$").
  - Optional Add-ons (Multi-Language Pack, 48h Express Delivery, Multi-Agent Router, Google Maps setup).
  - Generates URL-encoded structured messages sending template name, page volume, deliverables, and referral URL directly to WhatsApp.

### 4. 📄 Interactive On-Screen Client Proposal Generator
- Generates instant official agency proposals (with auto-generated Proposal ID, deliverables table, milestone timeline, and payment terms).
- One-click **Print / Save as PDF** support.
- One-click **"Approve Proposal via WhatsApp"** button.

### 5. 🌐 Multi-Language Programmatic SEO Engine
- Full support for **Indonesian (`id`)**, **English (`en`)**, and **Arabic (`ar` with RTL)**.
- Structured JSON-LD schemas (`ProfessionalService`, `AggregateRating`, `FAQPage`, `BreadcrumbList`).
- Industry & location matrices for capturing high-intent organic searches across major commercial hubs (Jakarta, Surabaya, Bali, Dubai, Riyadh, Singapore, London).

---

## 💰 Pricing Structure

| Tier | Page Capacity | Indonesian (IDR) | International (USD) | Turnaround |
| :--- | :---: | :--- | :--- | :--- |
| **Express Landing** | **1 Page** | **Rp 999.000** | **$79** | 1–2 Days |
| **Starter Pro** | **Up to 10 Pages** | **Rp 1.799.000** | **$129** | 2–4 Days |
| **Business Scale** | **Up to 100 Pages** | **Rp 3.999.000** | **$269** | 4–7 Days |
| **Toko Catalog** | **Up to 250 Pages** | **Rp 7.499.000** | **$499** | 7–12 Days |
| **Portal / Directory** | **Up to 500 Pages** | **Rp 12.999.000** | **$850** | 12–18 Days |
| **Custom Enterprise** | **1,000+ Pages** | **Custom (WhatsApp)** | **Custom Quote** | Custom SLA |

---

## 🛠️ Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Compile production build
npm run build

# 4. Preview production build
npm run start
```

---

## 🚀 Cloudflare Pages Deployment Guide

1. Push code to GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial launch of WebScale Engine platform"
   git remote add origin https://github.com/firmansyahmarva-bot/website.engine.git
   git push -u origin main
   ```
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the repository and configure build settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Output directory**: `.next` (or `out` if using static export)
4. Click **Save and Deploy**. Cloudflare provides an instant `*.pages.dev` URL and you can attach your custom domain in 1 click!
