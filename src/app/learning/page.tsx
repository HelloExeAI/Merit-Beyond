import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, GraduationCap, CheckCircle2, Users, FileCheck2, Clock } from 'lucide-react';
import { flagshipProgramme, learningProgrammes } from '@/data/learning';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Training & Professional Workshops | Merit & Beyond',
  description: 'Explore practical corporate learning, HR practitioner workshops and leadership development designed around real workplace challenges.',
};

export default function LearningOverviewPage() {
  return (
    <div className="flex flex-col w-full bg-[#F3E9D8] dark:bg-[#12100E] text-[#29231D] dark:text-[#FAF5ED] transition-colors duration-200">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#E8EEE9] dark:bg-[#151D17] border-b border-[#D4DFD6] dark:border-[#2C382F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] dark:text-[#D4B886] block">
              CAPABILITY DEVELOPMENT
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#26374B] dark:text-[#FAF5ED] tracking-tight leading-tight">
              Learning that moves beyond knowledge into practice.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/85 dark:text-[#FAF5ED]/80 leading-relaxed font-sans pt-2">
              Build practical HR, leadership and workplace capabilities through structured workshops and customised learning experiences designed around real professional challenges.
            </p>
            <p className="text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/70 font-sans">
              Our programmes help participants understand a concept, practise its application, use relevant tools and identify a next step in their workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Flagship Programme */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#181411] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] dark:bg-[#1C1814] rounded-2xl p-6 sm:p-10 border border-[#B69A6A]/40 dark:border-[#B69A6A]/20 shadow-card space-y-8">
            {/* Visual Masterclass Banner */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#B8C8BC]/40 dark:border-[#2C382F] shadow-inner group">
              <Image
                src="/images/learning-masterclass.jpg"
                alt="Merit & Beyond Masterclass Learning Workshop"
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4B886] block">
                    Experiential Learning
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F3E9D8]">
                    Performance Management in Practice: Interactive Workshop
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 dark:bg-[#161310]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#D4B886]">
                  Cohort-Based • Real Cases
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-[#B69A6A]/20 dark:border-[#251F1A] pb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded bg-[#26374B] text-white">
                Flagship Workshop
              </span>
              <span className="text-xs text-[#78716C] dark:text-[#C2B5A0]">{flagshipProgramme.deliveryMode}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED] font-semibold leading-tight">
                  {flagshipProgramme.title}
                </h2>
                <p className="text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">
                  {flagshipProgramme.shortDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#846A3F] dark:text-[#D4B886] uppercase tracking-wider block">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#29231D]/80 dark:text-[#FAF5ED]/80 pl-4 list-disc marker:text-[#B69A6A]">
                    {flagshipProgramme.outcomes.slice(0, 4).map((out, idx) => (
                      <li key={idx}>{out}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href={`/learning/programmes/${flagshipProgramme.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] dark:bg-[#FAF5ED] hover:bg-[#1E1914] dark:hover:bg-white text-white dark:text-[#12100E] text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>View Programme Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A] dark:text-[#846A3F]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#29231D]/40 dark:border-[#B69A6A]/40 text-[#29231D] dark:text-[#FAF5ED] text-xs font-semibold tracking-wider uppercase bg-white dark:bg-[#1C1814] transition-colors"
                  >
                    <span>Request Corporate Cohort</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white dark:bg-[#16120F] p-6 rounded-xl border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 space-y-4">
                <span className="text-xs font-semibold text-[#29231D] dark:text-[#FAF5ED] block border-b border-[#F3E9D8] dark:border-[#251F1A] pb-2">
                  Programme Inclusions
                </span>
                <ul className="space-y-2 text-xs text-[#29231D]/80 dark:text-[#FAF5ED]/80">
                  {flagshipProgramme.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#846A3F] dark:text-[#D4B886] mt-0.5 flex-shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-[11px] text-[#78716C] dark:text-[#C2B5A0] border-t border-[#F3E9D8] dark:border-[#251F1A]">
                  {flagshipProgramme.pilotPriceNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Streams Directory */}
      <section className="py-20 bg-[#FAF5ED] dark:bg-[#181411]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
              Learning Tracks
            </span>
            <h2 className="text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
              Customised Corporate &amp; Open Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#1C1814] border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F] dark:text-[#D4B886]">Track 01</span>
              <h3 className="text-2xl font-serif text-[#29231D] dark:text-[#FAF5ED]">Corporate Learning Programmes</h3>
              <p className="text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">
                We work with organisations to shape learning around the roles, behaviours and capabilities that matter to their teams. Programmes can be tailored by audience, duration, delivery mode and workplace context.
              </p>
              <div className="pt-4">
                <Link
                  href="/learning/corporate-programmes"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#846A3F] dark:text-[#D4B886] hover:text-[#29231D] dark:hover:text-white"
                >
                  <span>Explore Corporate Learning</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#1C1814] border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F] dark:text-[#D4B886]">Track 02</span>
              <h3 className="text-2xl font-serif text-[#29231D] dark:text-[#FAF5ED]">Individual &amp; Open Workshops</h3>
              <p className="text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">
                Explore focused workshops built around real workplace scenarios, practical frameworks and usable tools. Each programme page shows outcomes, audience, duration, delivery mode, and registration status.
              </p>
              <div className="pt-4">
                <Link
                  href="/learning/open-workshops"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#846A3F] dark:text-[#D4B886] hover:text-[#29231D] dark:hover:text-white"
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
      <section className="py-12 bg-[#29231D] dark:bg-[#16120F] text-[#F3E9D8] border-t border-[#B69A6A]/20">
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
