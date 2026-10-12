'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, ArrowRight, Tag, BookOpen, Sparkles, Filter } from 'lucide-react';
import { insightsData, insightCategories, InsightArticle } from '@/data/insights';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');

  // Featured article
  const featuredArticle = useMemo(() => {
    return insightsData.find((art) => art.isFeatured) || insightsData[0];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return insightsData.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All Insights' || art.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-copper-500" />
              <span>Thought Leadership &amp; Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              Insights on People, Compliance &amp; Performance
            </h1>
            <p className="text-lg text-softblack-muted font-sans font-normal leading-relaxed">
              Practical perspectives and strategic frameworks on organization design, statutory labour compliance, compensation architecture, and leadership resilience.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION */}
      {featuredArticle && (
        <section className="py-12 bg-white border-b border-champagne-300/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-[#FAF5EE] border border-champagne-300 shadow-subtle relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-copper-700 bg-champagne-100 px-3 py-1 rounded-md border border-champagne-300">
                  <Sparkles className="w-3 h-3 text-copper-500" />
                  <span>Featured Advisory Publication</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-mahogany-600 hover:text-copper-600 transition-colors">
                  <Link href={`/insights/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-softblack-muted leading-relaxed font-sans">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-softblack-muted">
                  <span className="font-semibold text-mahogany-500">{featuredArticle.author.name}</span>
                  <span>•</span>
                  <span>{featuredArticle.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-copper-700">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold tracking-wider uppercase shadow-sm transition-all group"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SEARCH & CATEGORY FILTER BAR */}
      <section className="py-8 bg-[#F7EBDD] border-b border-champagne-300/40 sticky top-[69px] z-30 backdrop-blur-md bg-[#F7EBDD]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-copper-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, regulations..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-champagne-300 text-base sm:text-sm text-softblack placeholder:text-softblack-muted/60 focus:ring-2 focus:ring-copper-500 focus:outline-none"
              />
            </div>

            {/* Category Pills (Horizontal scroll on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {insightCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-mahogany-600 text-white shadow-sm'
                        : 'bg-white/80 text-softblack-muted hover:bg-white hover:text-mahogany-600 border border-champagne-200'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARTICLES GRID */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-ivory-50 rounded-2xl border border-champagne-200 max-w-xl mx-auto p-8">
              <Filter className="w-8 h-8 text-copper-500 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-mahogany-600">No matching articles found</h3>
              <p className="text-sm text-softblack-muted mt-2">
                Try searching for different keywords or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Insights');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-copper-500 text-white text-xs uppercase font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#FAF5EE] rounded-xl border border-champagne-200/80 shadow-subtle hover:shadow-elevated hover:border-champagne-400 transition-all flex flex-col justify-between"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between text-xs text-copper-700 font-medium mb-3">
                      <span className="bg-champagne-100 px-2.5 py-1 rounded border border-champagne-300">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-softblack-muted">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-mahogany-600 mb-3 hover:text-copper-600 transition-colors">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-softblack-muted leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[11px] text-softblack-muted bg-white px-2 py-0.5 rounded border border-champagne-200">
                          <Tag className="w-2.5 h-2.5 text-copper-500" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 pt-4 border-t border-champagne-200/50 flex items-center justify-between text-xs text-softblack-muted">
                    <span>{article.publishedAt}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-copper-600 hover:text-copper-700"
                    >
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. PUBLISHING EDITORIAL NOTE */}
      <section className="py-12 bg-ivory-50 border-t border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-softblack-muted leading-relaxed">
            All insights published by Merit &amp; Beyond are authored by experienced people advisory practitioners and compliance specialists. For customized analysis or organizational workshops on these topics, please contact our advisory council.
          </p>
        </div>
      </section>
    </div>
  );
}
