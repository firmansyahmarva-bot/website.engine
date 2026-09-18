export type SupportedLocale = 'id' | 'en' | 'ar';

export interface LocalizedString {
  id: string;
  en?: string;
  ar?: string;
}

export interface WebsiteType {
  id: string;
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  recommendedPages: number;
  basePrice: number; // in IDR
  suitableIndustries: string[];
  featuresIncluded: string[]; // IDs from features catalog
  iconName: string;
}

export interface DesignConcept {
  id: string;
  slug: string;
  name: LocalizedString;
  styleCategory: string;
  tagline: LocalizedString;
  description: LocalizedString;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  targetAudience: string[];
  keyStrengths: string[];
  demoSlug: string;
  badge?: string;
}

export interface WebsitePackage {
  id: string;
  slug: string;
  tier: 'starter' | 'business' | 'enterprise';
  name: LocalizedString;
  tagline: LocalizedString;
  idealFor: LocalizedString;
  basePrice: number; // in IDR
  turnaroundDays: number;
  maxPages: number;
  revisionCount: number | 'Unlimited';
  includedFeatures: string[];
  highlights: string[];
  isPopular?: boolean;
}

export interface FeatureItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  category: 'core' | 'marketing' | 'engagement' | 'commerce' | 'technical';
  price: number; // in IDR (0 if included in basic, or add-on cost)
  isDefault?: boolean;
  requiresPages?: number;
}

export interface PricingBreakdown {
  websiteType: WebsiteType;
  design: DesignConcept;
  pageCount: number;
  pageCost: number;
  selectedFeatures: FeatureItem[];
  featuresCost: number;
  domainOption: 'existing' | 'include_com';
  domainCost: number;
  hostingOption: 'existing' | 'include_cloud';
  hostingCost: number;
  subtotal: number;
  estimatedTotal: number;
}

export interface ConfiguratorSelection {
  websiteTypeId: string;
  designId: string;
  pageCount: number;
  featureIds: string[];
  domainOption: 'existing' | 'include_com';
  hostingOption: 'existing' | 'include_cloud';
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
