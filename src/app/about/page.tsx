'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Target,
  Users2
} from 'lucide-react';
import { useContent } from '@/lib/contentContext';

export default function AboutPage() {
  const { content } = useContent();

  const approachStages = content.home.approach.stages.map((stg) => ({
    step: stg.step,
    name: stg.name,
    title: `${stg.name} (${stg.duration})`,
    description: stg.description,
  }));

  return (
    <div className="flex flex-col w-full bg-[#F3E9D8] dark:bg-[#12100E] text-[#29231D] dark:text-[#FAF5ED] transition-colors duration-200">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] dark:bg-[#12100E] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block">
              {content.about.hero.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight leading-tight">
              {content.about.hero.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans pt-2">
              {content.about.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Visual Feature */}
      <section className="py-10 bg-[#FAF5ED] dark:bg-[#181411] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-elevated group">
            <Image
              src="/images/about-advisory-partnership.jpg"
              alt="Merit & Beyond Strategic Advisory Partnership"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4B886] block">
                  Advisory In Action
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#F3E9D8]">
                  Substantive Dialogue Between Enterprise Leaders and Advisors
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-black/60 dark:bg-[#161310]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#D4B886]">
                Confidentiality • Context • Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Point of View */}
      <section className="py-20 md:py-28 bg-[#FAF5ED] dark:bg-[#181411] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Point of View */}
            <div className="bg-white dark:bg-[#1C1814] p-8 sm:p-10 rounded-2xl border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886]">
                Our Philosophy
              </span>
              <h2 className="text-2xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                Our Point of View
              </h2>
              <p className="text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">
                People practices should be practical, purposeful and connected to the work of the organisation. The right framework matters—but so do manager capability, process ownership, communication and follow-through. Our work connects these elements so recommendations can be understood, applied and improved.
              </p>
            </div>

            {/* Our Purpose */}
            <div className="bg-white dark:bg-[#1C1814] p-8 sm:p-10 rounded-2xl border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886]">
                Mission &amp; Commitment
              </span>
              <h2 className="text-2xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                Our Purpose
              </h2>
              <p className="text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">
                {content.about.purpose.mission}
              </p>
              <div className="pt-4 border-t border-[#F3E9D8] dark:border-[#251F1A] text-xs text-[#846A3F] dark:text-[#D4B886] font-semibold tracking-wide">
                {content.global.tagline}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-[#F3E9D8] dark:bg-[#12100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-2">
              Engagement Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight">
              How We Work
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 dark:text-[#FAF5ED]/80 mt-3 font-sans leading-relaxed">
              We listen carefully, work from the context and evidence available, define the scope clearly and focus on recommendations that can be implemented. We value discretion, honest communication, collaboration and measurable progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {approachStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-[#1C1814] border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#846A3F] dark:text-[#D4B886]">
                    {stage.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#78716C] dark:text-[#C2B5A0] tracking-wider">
                    {stage.name}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#29231D] dark:text-[#FAF5ED] font-semibold">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#29231D]/75 dark:text-[#FAF5ED]/75 leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grounded Standards Callout */}
      <section className="py-16 bg-[#29231D] dark:bg-[#16120F] text-[#F3E9D8] border-t border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-serif text-white">
              Grounded in Reality. Focused on Execution.
            </h3>
            <p className="text-xs sm:text-sm text-[#DEC8A9]/80 leading-relaxed font-sans">
              We do not rely on inflated claims or generic templates. Every advisory recommendation and learning intervention is designed for actual workplace conditions, verified against commercial scope, and delivered with professional integrity.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase shadow-md transition-all"
              >
                <span>Discuss a Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
