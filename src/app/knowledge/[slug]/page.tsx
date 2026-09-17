import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { knowledgeTopics } from '@/data/knowledge-topics';
import { KnowledgeArticleView } from '@/components/KnowledgeArticleView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return knowledgeTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = knowledgeTopics.find((t) => t.slug === slug);

  if (!topic) {
    return {
      title: 'Topic Not Found | WebScale Engine',
    };
  }

  return {
    title: `${topic.title.id} | WebScale Authority Knowledge`,
    description: topic.shortSummary.id,
    keywords: topic.relatedKeywords,
    openGraph: {
      title: topic.title.id,
      description: topic.shortSummary.id,
      type: 'article',
      url: `https://webscale.engine.pages.dev/knowledge/${topic.slug}`,
    },
  };
}

export default async function KnowledgeTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = knowledgeTopics.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: topic.title.id,
    description: topic.shortSummary.id,
    author: {
      '@type': 'Organization',
      name: 'WebScale Engine Authority Lab',
      url: 'https://webscale.engine.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebScale Engine',
      logo: {
        '@type': 'ImageObject',
        url: 'https://webscale.engine.pages.dev/icon.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://webscale.engine.pages.dev/knowledge/${topic.slug}`
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q.id,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a.id
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KnowledgeArticleView topic={topic} />
    </>
  );
}
