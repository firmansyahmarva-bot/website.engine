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

export interface CityIndustryDeepDive {
  industrySlug: string;
  localAngle: string; // 3-4 sentences specific to this industry IN this city
}

export interface CityEntity {
  name: string;
  slug: string;
  province: string;
  tier?: 'metro' | 'large' | 'mid';
  districts: string[]; // 5-8 real business districts / kecamatan
  landmarkContext: string; // 2-3 sentences naming real local landmarks/areas where businesses cluster
  localBusinessCulture: string; // 3-4 sentences — how buyers here actually decide and buy
  dominantPlatformHabit: string; // what locals currently use: Instagram-only, marketplace-only, WhatsApp catalog, etc.
  competitorLandscape: string; // what local web vendors typically offer and charge, and where they fall short
  localSearchBehavior: string; // how people in this city actually search for this service
  seasonalFactor: string; // local business cycles — harvest, tourism season, ramadan retail, campus intake
  connectivityProfile: string; // typical device and network conditions, and why that changes the build
  industryDeepDive: CityIndustryDeepDive[]; // 3 industries, city-specific, not generic
  localFaqs: FAQItem[]; // minimum 5, all city-specific
  nearbyCitySlugs: string[];
  relevantIndustrySlugs: string[];
  typicalPriceExpectation: string;
  economicProfile: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface ComparisonItemDetail {
  name: string;
  tagline: string;
  overview: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  badge?: string;
}

export interface ComparisonMatrixRow {
  feature: string;
  itemAValue: string;
  itemBValue: string;
  winner: 'itemA' | 'itemB' | 'tie';
  explanation?: string;
}

export interface ComparisonDeepDiveSection {
  title: string;
  content: string[];
  keyTakeaway?: string;
}

export interface ComparisonVerdict {
  summary: string;
  chooseItemAIf: string[];
  chooseItemBIf: string[];
  finalRecommendation: string;
}

export interface ComparisonEntity {
  slug: string;
  title: string;
  category: string;
  summary: string;
  itemA: ComparisonItemDetail;
  itemB: ComparisonItemDetail;
  comparisonMatrix: ComparisonMatrixRow[];
  deepDive: ComparisonDeepDiveSection[];
  verdict: ComparisonVerdict;
  faqs: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface CostTierPrice {
  range: string;
  minPrice: number;
  maxPrice: number;
  period?: string;
  description: string;
  features: string[];
}

export interface CostBreakdownItem {
  name: string;
  costRange: string;
  description: string;
  factors: string[];
}

export interface CostBreakdowns {
  domain: CostBreakdownItem;
  server: CostBreakdownItem;
  design: CostBreakdownItem;
  dev: CostBreakdownItem;
  maintenance: CostBreakdownItem;
}

export interface HiddenCostWarning {
  title: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  howToAvoid: string;
}

export interface RoiAnalysis {
  overview: string;
  metrics: { label: string; value: string; impact: string }[];
  breakEvenTimeline: string;
  tipsToMaximizeRoi: string[];
}

export interface CostGuideEntity {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tierPrices: {
    starter: CostTierPrice;
    business: CostTierPrice;
    enterprise: CostTierPrice;
  };
  costBreakdowns: CostBreakdowns;
  hiddenCostsWarning: HiddenCostWarning[];
  roiAnalysis: RoiAnalysis;
  faqs: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface MatrixEntity {
  slug: string; // e.g. 'konstruksi-jakarta'
  industrySlug: string; // 'konstruksi'
  citySlug: string; // 'jakarta'
  industryId: string; // ID in INDUSTRIES, e.g. 'construction'
  industryName: string; // e.g. 'Konstruksi & Pemborong Bangunan'
  cityName: string; // e.g. 'Jakarta'
  province: string;
  title: string;
  tagline: string;
  description: string;
  marketContext: string;
  heroProblems: string[];
  districts: string[];
  landmarkContext: string;
  localBusinessCulture: string;
  pricingExpectation: string;
  recommendedPackage: string;
  recommendedDesigns: string[];
  recommendedFeatures: string[];
  essentialSections: { title: string; explanation: string }[];
  faqs: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}
