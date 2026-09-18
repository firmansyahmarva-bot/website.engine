import { ConfiguratorSelection, PricingBreakdown, FeatureItem } from '@/types';
import { WEBSITE_TYPES } from './website-types';
import { DESIGN_CONCEPTS } from './designs';
import { FEATURES_CATALOG } from './features';

export const PRICING_CONFIG = {
  // Extra page cost above baseline recommended pages
  extraPageCost: 120000,
  
  // Infrastructure addon costs
  infrastructure: {
    domain: {
      existing: 0,
      include_com: 200000, // .com / .id per 1 year
    },
    hosting: {
      existing: 0,
      include_cloud: 450000, // Fast SSD Cloud Hosting per 1 year
    },
  },
};

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculatePrice(selection: ConfiguratorSelection): PricingBreakdown {
  const websiteType =
    WEBSITE_TYPES.find((t) => t.id === selection.websiteTypeId) || WEBSITE_TYPES[0];
  const design =
    DESIGN_CONCEPTS.find((d) => d.id === selection.designId) || DESIGN_CONCEPTS[0];

  // Base price from website type
  const basePrice = websiteType.basePrice;

  // Extra pages calculation
  const includedPages = websiteType.recommendedPages;
  const extraPages = Math.max(0, selection.pageCount - includedPages);
  const pageCost = extraPages * PRICING_CONFIG.extraPageCost;

  // Selected features cost
  const selectedFeatures: FeatureItem[] = [];
  let featuresCost = 0;

  for (const featureId of selection.featureIds) {
    const feat = FEATURES_CATALOG.find((f) => f.id === featureId);
    if (feat) {
      selectedFeatures.push(feat);
      featuresCost += feat.price;
    }
  }

  // Domain & Hosting options
  const domainCost = PRICING_CONFIG.infrastructure.domain[selection.domainOption] || 0;
  const hostingCost = PRICING_CONFIG.infrastructure.hosting[selection.hostingOption] || 0;

  const subtotal = basePrice + pageCost + featuresCost;
  const estimatedTotal = subtotal + domainCost + hostingCost;

  return {
    websiteType,
    design,
    pageCount: selection.pageCount,
    pageCost,
    selectedFeatures,
    featuresCost,
    domainOption: selection.domainOption,
    domainCost,
    hostingOption: selection.hostingOption,
    hostingCost,
    subtotal,
    estimatedTotal,
  };
}
