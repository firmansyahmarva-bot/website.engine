'use client';

import { useSearchParams } from 'next/navigation';
import WebsiteConfigurator from '@/components/configurator/WebsiteConfigurator';

export default function ConfiguratorClientWrapper() {
  const searchParams = useSearchParams();
  const designId = searchParams.get('design') || undefined;
  const typeId = searchParams.get('type') || undefined;

  return <WebsiteConfigurator initialDesignId={designId} initialTypeId={typeId} />;
}
