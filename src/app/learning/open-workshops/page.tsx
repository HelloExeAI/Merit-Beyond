import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, FileCheck2, Users } from 'lucide-react';
import { learningProgrammes } from '@/data/learning';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Workshops for HR Practitioners & Managers | Merit & Beyond',
  description: 'Practical learning for professionals who want to apply what they learn. Explore focused workshops built around real workplace scenarios.',
};

export default function OpenWorkshopsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-24 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learning Overview</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              INDIVIDUAL &amp; OPEN WORKSHOPS
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              Practical learning for professionals who want to apply what they learn.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Explore focused workshops built around real workplace scenarios, practical frameworks and usable tools. Each programme page shows outcomes, intended audience, duration, delivery mode, fees, inclusions, cancellation terms and registration status.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {learningProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle hover:border-[#B69A6A] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-white text-[#846A3F] border border-[#B69A6A]/30">
                        {prog.category}
                      </span>
                      <span className="text-xs text-[#78716C]">{prog.deliveryMode}</span>
                    </div>

                    <h2 className="text-2xl font-serif text-[#29231D] font-semibold">
                      {prog.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">
                      {prog.shortDescription}
                    </p>

                    <div className="pt-1 text-xs text-[#78716C]">
                      <strong>Audience:</strong> {prog.audience}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                    <Link
                      href={`/learning/programmes/${prog.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <span>View Workshop</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
