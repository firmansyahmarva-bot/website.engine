import { INDUSTRIES } from '@/content/industries';
import { WEBSITE_TYPES } from '@/content/website-types';
import { DESIGN_CONCEPTS } from '@/content/designs';
import { WEBSITE_PACKAGES } from '@/content/packages';
import { FEATURES_CATALOG } from '@/content/features';
import { COMPONENTS_CATALOG } from '@/content/components';
import { CODE_EXAMPLES } from '@/content/code-examples';
import {
  IndustryEntity,
  WebsiteType,
  DesignConcept,
  WebsitePackage,
  FeatureItem,
  ComponentEntity,
  CodeExampleEntity,
} from '@/types';

// INDUSTRY RELATIONSHIPS
export function getIndustryBySlug(slug: string): IndustryEntity | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}

export function getRelatedIndustries(industry: IndustryEntity, limit = 4): IndustryEntity[] {
  return INDUSTRIES.filter(
    (ind) => industry.relatedIndustries.includes(ind.slug) && ind.slug !== industry.slug
  ).slice(0, limit);
}

// WEBSITE TYPE RELATIONSHIPS
export function getWebsiteTypeById(id: string): WebsiteType | undefined {
  return WEBSITE_TYPES.find((type) => type.id === id);
}

export function getWebsiteTypeBySlug(slug: string): WebsiteType | undefined {
  return WEBSITE_TYPES.find((type) => type.slug === slug);
}

export function getIndustriesForWebsiteType(typeId: string, limit = 6): IndustryEntity[] {
  return INDUSTRIES.filter((ind) => ind.recommendedWebsiteType === typeId).slice(0, limit);
}

// DESIGN RELATIONSHIPS
export function getDesignById(id: string): DesignConcept | undefined {
  return DESIGN_CONCEPTS.find((d) => d.id === id);
}

export function getDesignsForIndustry(industry: IndustryEntity): DesignConcept[] {
  return DESIGN_CONCEPTS.filter((d) => industry.recommendedDesigns.includes(d.id));
}

// PACKAGE RELATIONSHIPS
export function getPackageById(id: string): WebsitePackage | undefined {
  return WEBSITE_PACKAGES.find((pkg) => pkg.id === id);
}

export function getRecommendedPackageForIndustry(industry: IndustryEntity): WebsitePackage {
  return (
    WEBSITE_PACKAGES.find((pkg) => pkg.id === industry.recommendedPackage) ||
    WEBSITE_PACKAGES[1] // Default to business package
  );
}

// FEATURE RELATIONSHIPS
export function getFeaturesForIndustry(industry: IndustryEntity): FeatureItem[] {
  return FEATURES_CATALOG.filter((f) => industry.recommendedFeatures.includes(f.id));
}

// COMPONENT RELATIONSHIPS
export function getComponentBySlug(slug: string): ComponentEntity | undefined {
  return COMPONENTS_CATALOG.find((c) => c.slug === slug);
}

export function getComponentsForWebsiteType(typeId: string, limit = 6): ComponentEntity[] {
  return COMPONENTS_CATALOG.filter((c) => c.compatibleWebsiteTypes.includes(typeId)).slice(
    0,
    limit
  );
}

export function getComponentsForIndustry(industrySlug: string, limit = 6): ComponentEntity[] {
  return COMPONENTS_CATALOG.filter((c) => c.compatibleIndustries.includes(industrySlug)).slice(
    0,
    limit
  );
}

// CODE EXAMPLE RELATIONSHIPS
export function getCodeExampleBySlug(slug: string): CodeExampleEntity | undefined {
  return CODE_EXAMPLES.find((code) => code.slug === slug);
}

export function getCodeExamplesForComponent(componentSlug: string): CodeExampleEntity[] {
  return CODE_EXAMPLES.filter((code) => code.relatedComponents.includes(componentSlug));
}

// CONFIGURATOR DEEP LINK BUILDER
export function buildConfiguratorUrl(params: {
  type?: string;
  design?: string;
  pages?: number;
  features?: string[];
}): string {
  const query = new URLSearchParams();
  if (params.type) query.set('type', params.type);
  if (params.design) query.set('design', params.design);
  if (params.pages) query.set('pages', params.pages.toString());
  if (params.features && params.features.length > 0) {
    query.set('features', params.features.join(','));
  }
  const queryString = query.toString();
  return queryString ? `/configure?${queryString}` : '/configure';
}
