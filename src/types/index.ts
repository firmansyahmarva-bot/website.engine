export type SupportedLocale = 'id' | 'en' | 'ar';

export interface LocalizedString {
  id: string;
  en?: string;
  ar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface WebsiteType {
  id: string;
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  overview?: LocalizedString;
  recommendedPages: number;
  basePrice: number; // in IDR
  suitableIndustries: string[];
  featuresIncluded: string[]; // IDs from features catalog
  iconName: string;
  businessGoals?: string[];
  benefits?: string[];
  structureRecommendations?: { pageName: string; description: string }[];
  faqs?: FAQItem[];
  relatedIndustries?: string[];
  relatedComponents?: string[];
  recommendedDesigns?: string[];
  recommendedPackage?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
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
  imageUrl?: string;
  industryTag?: string;
  mockupBadge?: string;
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

export interface IndustryEntity {
  id: string;
  slug: string;
  name: LocalizedString;
  category: string;
  tagline: LocalizedString;
  description: LocalizedString;
  marketContext: string;
  commonWebsiteGoals: string[];
  recommendedWebsiteType: string; // ID of WebsiteType
  recommendedDesigns: string[]; // IDs of DesignConcepts
  recommendedFeatures: string[]; // IDs of FeatureItems
  recommendedPageCount: number;
  recommendedPackage: string; // ID of WebsitePackage
  essentialSections: { title: string; explanation: string }[];
  conversionStrategy: string;
  faqs: FAQItem[];
  relatedIndustries: string[]; // slugs
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface ComponentEntity {
  id: string;
  slug: string;
  name: string;
  category:
    | 'Navigation'
    | 'Hero & Headers'
    | 'Conversion & CTA'
    | 'Pricing & Commerce'
    | 'Content & Layout'
    | 'Trust & Proof'
    | 'Forms & Inputs'
    | 'Footers';
  description: string;
  bestPractices: string[];
  useCases: string[];
  compatibleWebsiteTypes: string[]; // IDs
  compatibleIndustries: string[]; // Slugs
  relatedDesigns: string[]; // IDs
  seoTitle: string;
  seoDescription: string;
  keyUXConsiderations: string;
}

export interface CodeExampleEntity {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'tsx';
  code: string;
  whatItDoes: string;
  whereItIsUseful: string;
  technologies: string[];
  accessibilityConsiderations: string[];
  responsiveConsiderations: string[];
  relatedComponents: string[];
  relatedWebsiteTypes: string[];
  relatedIndustries: string[];
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

export type GlossaryCategory =
  | 'seo'
  | 'geo-aeo'
  | 'analytics'
  | 'performance'
  | 'technical'
  | 'design-ux'
  | 'conversion'
  | 'hosting-domain'
  | 'ecommerce';

export interface GlossaryEntry {
  slug: string; // e.g. 'apa-itu-google-search-console'
  term: string; // 'Google Search Console (GSC)'
  aliases: string[]; // ['GSC', 'Search Console', 'Webmaster Tools']
  category: GlossaryCategory;
  shortDefinition: string; // 40-55 words, answer-first, plain Indonesian
  longExplanation: string[]; // 4-7 paragraphs
  whyItMatters: string; // tied to a business outcome, not theory
  howToUse?: { step: string; detail: string }[];
  comparisonTable?: {
    header: string[];
    rows: { feature: string; itemA: string; itemB: string; itemC?: string }[];
  };
  commonMistakes: string[];
  faqs: { question: string; answer: string }[]; // 4-6 per page
  relatedTerms: string[]; // slugs, 4-6
  relatedIndustries?: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  datePublished?: string;
  dateModified?: string;
}

export interface CityEntity {
  name: string;
  slug: string;
  province: string;
  dominantIndustries: string[];
  economicProfile: string;
  typicalPriceExpectation: string;
  localFaqs: FAQItem[];
  nearbyCitySlugs: string[];
  relevantIndustrySlugs: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}
