import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Learning Programmes | Merit & Beyond',
  description: 'Capability development aligned to your business priorities. Customised HR, manager and leadership learning designed around real workplace challenges.',
};

export default function CorporateLearningPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-24 bg-[#E8EEE9] border-b border-[#D4DFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#26374B] hover:text-[#101923] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learning Overview</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] block">
              CORPORATE LEARNING
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#26374B] tracking-tight leading-tight">
              Capability development aligned to your business priorities.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/85 leading-relaxed font-sans pt-2">
              We work with organisations to shape learning around the roles, behaviours and capabilities that matter to their teams. Programmes can be tailored by audience, duration, delivery mode and workplace context.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#26374B] hover:bg-[#1A2635] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow"
              >
                <span>Request a Corporate Learning Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-3">
              <h3 className="font-serif text-lg text-[#29231D] font-semibold">Leadership &amp; Manager Cohorts</h3>
              <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">
                Grounded toolkits for first-line supervisors and department heads on feedback, expectation-setting, and 1-on-1 accountability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-3">
              <h3 className="font-serif text-lg text-[#29231D] font-semibold">HR Team Capability Sprints</h3>
              <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">
                Upskilling internal HR generalists in statutory audits, lifecycle SOP design, and data-driven people analytics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-3">
              <h3 className="font-serif text-lg text-[#29231D] font-semibold">Executive Strategy Offsites</h3>
              <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">
                Facilitated alignment workshops connecting organizational architecture and 12-month commercial growth targets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
