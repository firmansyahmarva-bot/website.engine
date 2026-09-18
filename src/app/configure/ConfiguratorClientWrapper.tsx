'use client';

import { useSearchParams } from 'next/navigation';
import WebsiteConfigurator from '@/components/configurator/WebsiteConfigurator';

export default function ConfiguratorClientWrapper() {
  const searchParams = useSearchParams();
  const designId = searchParams.get('design') || undefined;
  const typeId = searchParams.get('type') || undefined;
  const pagesParam = searchParams.get('pages');
  const pageCount = pagesParam ? parseInt(pagesParam, 10) : undefined;
  const featuresParam = searchParams.get('features');
  const featureIds = featuresParam ? featuresParam.split(',').filter(Boolean) : undefined;

  return (
    <WebsiteConfigurator
      initialDesignId={designId}
      initialTypeId={typeId}
      initialPageCount={pageCount}
      initialFeatureIds={featureIds}
    />
  );
}
