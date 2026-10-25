import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, GraduationCap, CheckCircle2, Users, FileCheck2, Clock } from 'lucide-react';
import { flagshipProgramme, learningProgrammes } from '@/data/learning';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Training & Professional Workshops | Merit & Beyond',
  description: 'Explore practical corporate learning, HR practitioner workshops and leadership development designed around real workplace challenges.',
};

export default function LearningOverviewPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#E8EEE9] border-b border-[#D4DFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] block">
              CAPABILITY DEVELOPMENT
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#26374B] tracking-tight leading-tight">
              Learning that moves beyond knowledge into practice.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/85 leading-relaxed font-sans pt-2">
              Build practical HR, leadership and workplace capabilities through structured workshops and customised learning experiences designed around real professional challenges.
            </p>
            <p className="text-sm text-[#29231D]/80 font-sans">
              Our programmes help participants understand a concept, practise its application, use relevant tools and identify a next step in their workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Flagship Programme */}
      <section className="py-16 md:py-20 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-8 sm:p-12 border border-[#B69A6A]/40 shadow-card">
            <div className="flex items-center justify-between border-b border-[#B69A6A]/20 pb-4 mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded bg-[#26374B] text-white">
                Flagship Workshop
              </span>
              <span className="text-xs text-[#78716C]">{flagshipProgramme.deliveryMode}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] font-semibold leading-tight">
                  {flagshipProgramme.title}
                </h2>
                <p className="text-sm text-[#29231D]/80 leading-relaxed font-sans">
                  {flagshipProgramme.shortDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#846A3F] uppercase tracking-wider block">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#29231D]/80 pl-4 list-disc marker:text-[#B69A6A]">
                    {flagshipProgramme.outcomes.slice(0, 4).map((out, idx) => (
                      <li key={idx}>{out}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href={`/learning/programmes/${flagshipProgramme.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>View Programme Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#29231D]/40 text-[#29231D] text-xs font-semibold tracking-wider uppercase bg-white transition-colors"
                  >
                    <span>Request Corporate Cohort</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#B69A6A]/30 space-y-4">
                <span className="text-xs font-semibold text-[#29231D] block border-b border-[#F3E9D8] pb-2">
                  Programme Inclusions
                </span>
                <ul className="space-y-2 text-xs text-[#29231D]/80">
                  {flagshipProgramme.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#846A3F] mt-0.5 flex-shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-[11px] text-[#78716C] border-t border-[#F3E9D8]">
                  {flagshipProgramme.pilotPriceNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Streams Directory */}
      <section className="py-20 bg-[#FAF5ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
              Learning Tracks
            </span>
            <h2 className="text-3xl font-serif text-[#29231D]">
              Customised Corporate &amp; Open Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#B69A6A]/30 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F]">Track 01</span>
              <h3 className="text-2xl font-serif text-[#29231D]">Corporate Learning Programmes</h3>
              <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">
                We work with organisations to shape learning around the roles, behaviours and capabilities that matter to their teams. Programmes can be tailored by audience, duration, delivery mode and workplace context.
              </p>
              <div className="pt-4">
                <Link
                  href="/learning/corporate-programmes"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#846A3F] hover:text-[#29231D]"
                >
                  <span>Explore Corporate Learning</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#B69A6A]/30 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F]">Track 02</span>
              <h3 className="text-2xl font-serif text-[#29231D]">Individual &amp; Open Workshops</h3>
              <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">
                Explore focused workshops built around real workplace scenarios, practical frameworks and usable tools. Each programme page shows outcomes, audience, duration, delivery mode, and registration status.
              </p>
              <div className="pt-4">
                <Link
                  href="/learning/open-workshops"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#846A3F] hover:text-[#29231D]"
                >
                  <span>Explore Open Workshops</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Governance Disclaimer */}
      <section className="py-12 bg-[#29231D] text-[#F3E9D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h4 className="text-lg font-serif text-white">Learning Governance &amp; Policies</h4>
            <p className="text-xs text-[#DEC8A9]/80 leading-relaxed font-sans">
              Merit &amp; Beyond delivers practical skill-building and workplace toolkits. We do not imply formal academic certification or accreditation unless a specific university partnership exists.
            </p>
            <div className="pt-1">
              <Link href="/learning/policies" className="text-xs font-semibold text-[#B69A6A] hover:underline">
                View Learning, Payment, Cancellation and Refund Policies →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
