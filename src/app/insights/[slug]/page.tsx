import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  Clock, 
  ArrowLeft, 
  Tag, 
  Share2, 
  BookOpen, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { insightsData, InsightArticle } from '@/data/insights';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightsData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insightsData.find((art) => art.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found | Merit & Beyond',
    };
  }

  return {
    title: `${article.title} | Merit & Beyond Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.meritandbeyond.in/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article: InsightArticle | undefined = insightsData.find(
    (art) => art.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  // Related articles (articles from same category or different)
  const relatedArticles = insightsData
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="flex flex-col w-full">
      {/* 1. ARTICLE HEADER & BREADCRUMB */}
      <section className="relative py-14 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-softblack-muted">
            <Link href="/" className="hover:text-mahogany-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-mahogany-600 transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span className="text-copper-700 font-medium truncate max-w-xs">{article.category}</span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase">
              <span>{article.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-softblack-muted font-sans leading-relaxed pt-2">
              {article.excerpt}
            </p>

            {/* Author, Date & Reading Time Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-champagne-300/40 text-xs text-softblack-muted">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-200 text-mahogany-600 flex items-center justify-center font-serif font-bold text-sm">
                  MB
                </div>
                <div>
                  <p className="font-semibold text-mahogany-600 text-sm">
                    {article.author.name}
                  </p>
                  <p className="text-[11px] text-copper-600">
                    {article.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-copper-700">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY CONTENT */}
      <section className="py-16 md:py-24 bg-white border-b border-champagne-300/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-softblack font-sans leading-relaxed space-y-8">
            {/* Introduction paragraph */}
            <p className="text-lg sm:text-xl font-serif text-mahogany-600 leading-relaxed italic border-l-2 border-copper-500 pl-5">
              {article.content.introduction}
            </p>

            {/* Structured Sections */}
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mahogany-600 tracking-tight">
                  {section.heading}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-base text-softblack-muted leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Key Takeaway Callout */}
                {section.keyTakeaway && (
                  <div className="my-6 p-5 rounded-xl bg-ivory-50 border border-champagne-300/80 shadow-subtle flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-copper-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] uppercase tracking-widest font-semibold text-copper-700 block mb-1">
                        Executive Takeaway
                      </span>
                      <p className="text-sm font-serif font-semibold text-mahogany-600 italic">
                        &ldquo;{section.keyTakeaway}&rdquo;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-champagne-200">
              <h3 className="text-xl font-serif font-bold text-mahogany-600 mb-2">
                Concluding Advisory Perspective
              </h3>
              <p className="text-base text-softblack-muted leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-softblack-muted mr-1 font-semibold">
                Tags:
              </span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-xs bg-ivory-100 text-copper-700 px-3 py-1 rounded-md border border-champagne-200"
                >
                  <Tag className="w-3 h-3 text-copper-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED ADVISORY ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#FAF5EE] border-b border-champagne-300/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-bold text-mahogany-600">
                Related Advisory Publications
              </h3>
              <Link
                href="/insights"
                className="text-xs font-semibold uppercase tracking-wider text-copper-600 hover:text-copper-700"
              >
                All Insights →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white p-6 rounded-xl border border-champagne-200 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-copper-700 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-mahogany-600 hover:text-copper-600 transition-colors">
                      <Link href={`/insights/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="pt-4 mt-4 border-t border-champagne-100 flex items-center justify-between text-xs text-softblack-muted">
                    <span>{rel.readTime}</span>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="font-semibold text-copper-600 hover:text-copper-700"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CLOSING CONSULTATION BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-mahogany-600">
            Translating Insights into Operational Reality
          </h3>
          <p className="text-sm text-softblack-muted max-w-xl mx-auto leading-relaxed">
            Discuss how these frameworks apply to your organisation’s structure, compliance posture, or leadership development.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold tracking-wider uppercase shadow-sm transition-all"
            >
              <span>Initiate Advisory Dialogue</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
