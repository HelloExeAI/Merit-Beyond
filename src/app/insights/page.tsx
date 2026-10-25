'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, ArrowRight, BookOpen, ArrowUpRight } from 'lucide-react';
import { insightsData, insightCategories } from '@/data/insights';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = useMemo(() => {
    return insightsData.find((art) => art.isFeatured) || insightsData[0];
  }, []);

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
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              INSIGHTS &amp; RESOURCES
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              Useful thinking for real workplace decisions.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Practical perspectives, tools and resources for leaders, HR professionals and people managers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      {featuredArticle && (
        <section className="py-12 bg-white border-b border-[#B69A6A]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#846A3F] bg-white px-3 py-1 rounded-md border border-[#B69A6A]/30">
                  <span>Featured Publication</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] font-semibold leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-[#29231D]/80 leading-relaxed font-sans">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#78716C]">
                  <span>{featuredArticle.readTime}</span>
                  <span>•</span>
                  <span>{featuredArticle.category}</span>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>Read Full Perspective</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Pills & Search */}
      <section className="py-8 bg-[#FAF5ED] border-b border-[#B69A6A]/20 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {insightCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#29231D] text-white'
                      : 'bg-white text-[#29231D] hover:bg-[#F3E9D8] border border-[#B69A6A]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-shrink-0 w-full md:w-64">
              <Search className="w-4 h-4 text-[#846A3F] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white border border-[#B69A6A]/30 text-xs text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 text-sm text-[#78716C]">
              No articles found matching &quot;{searchQuery}&quot;. Try resetting your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col justify-between p-7 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle hover:border-[#B69A6A] hover:shadow-card transition-all group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#846A3F]">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-serif text-[#29231D] font-semibold group-hover:text-[#552A19] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#F3E9D8] flex items-center justify-between text-xs text-[#78716C]">
                    <span>{article.readTime}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#29231D] group-hover:text-[#552A19]"
                    >
                      <span>Read Perspective</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
