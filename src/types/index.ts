export type Language = 'id' | 'en' | 'ar';

export type Currency = 'IDR' | 'USD';

export interface WebsiteTemplate {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: {
    id: string;
    en: string;
    ar: string;
  };
  style: string;
  speedScore: number;
  featured: boolean;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  features: {
    id: string[];
    en: string[];
    ar: string[];
  };
  idealFor: {
    id: string[];
    en: string[];
    ar: string[];
  };
  previewImage?: string;
  mockupType: 'browser' | 'mobile' | 'dual';
}

export interface PricingPackage {
  id: string;
  name: {
    id: string;
    en: string;
    ar: string;
  };
  badge?: {
    id: string;
    en: string;
    ar: string;
  };
  pages: number;
  pagesLabel: {
    id: string;
    en: string;
    ar: string;
  };
  priceIDR: number;
  priceUSD: number;
  deliveryDays: {
    id: string;
    en: string;
    ar: string;
  };
  popular?: boolean;
  features: {
    id: string[];
    en: string[];
    ar: string[];
  };
}

export interface AddonOption {
  id: string;
  name: {
    id: string;
    en: string;
    ar: string;
  };
  description: {
    id: string;
    en: string;
    ar: string;
  };
  priceIDR: number;
  priceUSD: number;
  defaultChecked?: boolean;
}

export interface IndustrySEO {
  slug: string;
  name: {
    id: string;
    en: string;
    ar: string;
  };
  typicalPages: number;
  suggestedTemplateId: string;
  searchKeywords: {
    id: string[];
    en: string[];
    ar: string[];
  };
}

export interface LocationSEO {
  slug: string;
  country: string;
  region?: 'UK & Europe' | 'Indonesia' | 'Middle East' | 'Global';
  name: {
    id: string;
    en: string;
    ar: string;
  };
  currency: Currency;
  searchIntentUK?: string[];
}
