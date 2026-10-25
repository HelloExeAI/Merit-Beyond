import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, FileCheck2 } from 'lucide-react';
import { learningProgrammes } from '@/data/learning';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Practitioner Development | Merit & Beyond',
  description: 'Build stronger execution across core HR practices through applied learning in HR operations, performance management, compensation, and analytics.',
};

export default function HrPractitionerDevelopmentPage() {
  const hrProgs = learningProgrammes.filter(
    (p) => p.category === 'HR Practitioner'
  );

  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-24 bg-[#E8EEE9] border-b border-[#D4DFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#26374B] hover:text-[#101923] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learning Directory</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] block">
              PRACTITIONER CAPABILITY
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#26374B] tracking-tight leading-tight">
              HR Practitioner Development
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/85 leading-relaxed font-sans pt-2">
              Build stronger execution across core HR practices through applied learning in HR operations, performance management, compensation, HR systems, employee relations and people analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {hrProgs.map((prog) => (
            <div
              key={prog.id}
              className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-white text-[#846A3F] border border-[#B69A6A]/30">
                  {prog.status}
                </span>
                <h2 className="text-2xl font-serif text-[#29231D] font-semibold">{prog.title}</h2>
                <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">{prog.shortDescription}</p>
                <div className="text-xs text-[#78716C]">
                  <strong>Target Audience:</strong> {prog.audience}
                </div>
              </div>

              <Link
                href={`/learning/programmes/${prog.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex-shrink-0"
              >
                <span>View Workshop Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
