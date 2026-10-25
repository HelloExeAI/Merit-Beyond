import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  ArrowUpRight, 
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
    title: `${article.title} | Merit & Beyond`,
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

  const relatedArticles = insightsData
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="flex flex-col w-full">
      {/* Article Header */}
      <section className="py-14 md:py-20 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B69A6A]/30 text-[10px] font-bold uppercase tracking-wider text-[#846A3F]">
              <span>{article.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#29231D]/80 font-sans leading-relaxed pt-1">
              {article.excerpt}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#B69A6A]/30 text-xs text-[#78716C]">
              <div>
                <p className="font-semibold text-[#29231D]">
                  {article.author.name}
                </p>
                <p className="text-[11px] text-[#846A3F]">
                  {article.author.role}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#846A3F]">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-sm sm:text-base text-[#29231D]/85 leading-relaxed space-y-8">
            <p className="text-lg font-serif text-[#552A19] leading-relaxed italic border-l-2 border-[#B69A6A] pl-5">
              {article.content.introduction}
            </p>

            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl font-serif text-[#29231D] font-semibold tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-3">
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {section.keyTakeaway && (
                  <div className="p-4 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-[#846A3F] block">
                        Strategic Takeaway
                      </span>
                      <p className="text-xs sm:text-sm text-[#29231D] mt-0.5 font-medium">
                        {section.keyTakeaway}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-[#F3E9D8] space-y-3">
              <h3 className="text-xl font-serif text-[#29231D] font-semibold">
                Summary &amp; Executive Follow-Through
              </h3>
              <p className="leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>

            {/* Relevant Action Callout */}
            {article.relevantCta && (
              <div className="mt-8 p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs sm:text-sm font-serif font-semibold text-[#29231D]">
                  {article.relevantCta.text}
                </span>
                <Link
                  href={article.relevantCta.href}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex-shrink-0"
                >
                  <span>Explore Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#FAF5ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              CONTINUE READING
            </span>
            <h3 className="text-2xl font-serif text-[#29231D] mt-1">
              Related Advisory Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-xl bg-white border border-[#B69A6A]/30 shadow-subtle flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#846A3F]">
                    {rel.category}
                  </span>
                  <h4 className="text-lg font-serif text-[#29231D] font-semibold leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#29231D]/75 leading-relaxed line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F3E9D8] flex items-center justify-between text-xs text-[#78716C]">
                  <span>{rel.readTime}</span>
                  <Link
                    href={`/insights/${rel.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#29231D] hover:text-[#552A19]"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
