import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, FileCheck2, Users, ShieldCheck, Calendar } from 'lucide-react';
import { flagshipProgramme } from '@/data/learning';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Management in Practice | Workshop | Merit & Beyond',
  description: 'From KPIs and Goal Setting to Effective Reviews. A practical workshop connecting goals, measures, review conversations and follow-through.',
};

export default function FlagshipProgrammePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learning Directory</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded bg-[#26374B] text-white">
                Flagship Masterclass
              </span>
              <span className="text-xs text-[#78716C]">{flagshipProgramme.deliveryMode}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              {flagshipProgramme.title}
            </h1>

            <p className="text-base sm:text-lg text-[#29231D]/80 font-sans leading-relaxed pt-1">
              {flagshipProgramme.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#78716C]">
              <div><strong>Pilot Duration:</strong> {flagshipProgramme.pilotDuration}</div>
              <div><strong>Status:</strong> {flagshipProgramme.status}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Curriculum */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-2">
                  Curriculum &amp; Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                  What Participants Will Work On
                </h2>
                <div className="mt-6 space-y-3">
                  {flagshipProgramme.outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-2">
                  Session Outline
                </span>
                <h3 className="text-xl font-serif text-[#29231D] mb-4">
                  Modules &amp; Applied Exercises
                </h3>
                <div className="space-y-3">
                  {flagshipProgramme.modulesOrTopics.map((mod, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#B69A6A]/30 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#846A3F]">PART 0{idx + 1}</span>
                      <p className="text-xs sm:text-sm font-semibold text-[#29231D]">{mod}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Inclusions & Register Interest */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle space-y-6 sticky top-24">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F] block mb-1">
                    Participant Takeaways
                  </span>
                  <h3 className="text-xl font-serif text-[#29231D]">
                    What Participants Receive
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#29231D]/85">
                  {flagshipProgramme.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-white border border-[#B69A6A]/30 space-y-1">
                  <span className="text-xs font-semibold text-[#29231D] block">Pricing &amp; Validation</span>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    {flagshipProgramme.pilotPriceNote}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?type=workshop&programme=${encodeURIComponent(flagshipProgramme.title)}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow"
                  >
                    <span>Register Interest / View Upcoming Dates</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                  </Link>
                </div>

                <p className="text-[11px] text-[#78716C] text-center">
                  Registration captures interest for the upcoming pilot cohort. No payment is taken until dates and final inclusions are confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
