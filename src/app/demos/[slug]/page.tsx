import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DESIGN_CONCEPTS } from '@/content/designs';
import DemoViewer from '@/components/demos/DemoViewer';
import { constructMetadata } from '@/lib/seo';

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESIGN_CONCEPTS.map((design) => ({
    slug: design.slug,
  }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const design = DESIGN_CONCEPTS.find((d) => d.slug === slug);

  if (!design) {
    return constructMetadata({
      title: 'Demo Desain Tidak Ditemukan',
      description: 'Konsep desain website tidak ditemukan.',
    });
  }

  return constructMetadata({
    title: `Live Demo: ${design.name.id} - ${design.styleCategory}`,
    description: design.description.id,
    path: `/demos/${design.slug}`,
    keywords: [
      `demo ${design.slug}`,
      `contoh website ${design.styleCategory}`,
      'live preview website',
      design.name.id,
    ],
  });
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const design = DESIGN_CONCEPTS.find((d) => d.slug === slug);

  if (!design) {
    notFound();
  }

  return <DemoViewer currentDesign={design} />;
}
