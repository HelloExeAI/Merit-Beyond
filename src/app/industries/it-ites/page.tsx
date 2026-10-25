import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { industriesData } from '@/data/industries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & ITES People Advisory | Merit & Beyond',
  description: 'People systems that support scale, capability and consistency in technology and ITES environments.',
};

export default function ItItesPage() {
  const data = industriesData.find((i) => i.id === 'it-ites')!;

  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Industries Directory</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              INDUSTRY PRACTICE · IT / ITES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              {data.pageHeading}
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              {data.heroTagline}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#29231D]">Operating Context</h2>
            <p className="text-sm text-[#29231D]/80 leading-relaxed font-sans">{data.operatingContext}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-4">
              <h3 className="font-serif text-xl text-[#29231D] font-semibold">Core Focus Themes</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#29231D]/80">
                {data.coreThemes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#846A3F] mt-2 flex-shrink-0" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-4">
              <h3 className="font-serif text-xl text-[#29231D] font-semibold">Operating Challenges Addressed</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#29231D]/80">
                {data.keyChallenges.map((chal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#29231D] text-[#F3E9D8] text-center space-y-4">
            <h3 className="text-2xl font-serif text-white">Discuss Your IT/ITES Requirement</h3>
            <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-xl mx-auto leading-relaxed">
              Equip engineering leads with managerial conversation skills, structure sprint-linked OKRs, and eliminate HRMS workflow bottlenecks.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=advisory&industry=IT/ITES"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>Discuss Your Industry Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
