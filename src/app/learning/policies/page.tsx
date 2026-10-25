import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning & Refund Policies | Merit & Beyond',
  description: 'Policies governing professional workshops, attendance, cancellations, program changes, and refunds.',
};

export default function LearningPoliciesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-20 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learning Directory</span>
          </Link>

          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
            GOVERNANCE &amp; STANDARDS
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight mt-2">
            Learning, Payment, Cancellation &amp; Refund Policies
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">1. Nature of Programmes &amp; Certification</h2>
            <p>
              Merit &amp; Beyond delivers practical professional development, executive masterclasses, and corporate capability toolkits. Our workshops are designed to foster observable workplace skills and provide usable tools.
            </p>
            <p>
              Unless explicitly declared under an accredited academic arrangement with a statutory institution, our programs do not confer formal academic degrees or government-mandated certifications.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">2. Attendance &amp; Cohort Participation</h2>
            <p>
              To maintain the interactive quality of cohorts, seats for workshops are capped. Registered participants are expected to attend scheduled live virtual or in-person sessions on time.
            </p>
            <p>
              If a participant is unable to attend due to unforeseen professional obligations, they may nominate a substitute colleague from the same organisation up to 24 hours prior to commencement upon written notice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">3. Programme Changes &amp; Rescheduling</h2>
            <p>
              Merit &amp; Beyond reserves the right to reschedule cohort dates or adjust faculty assignments in exceptional circumstances. In the event of rescheduling by Merit &amp; Beyond, registered participants will be offered the choice of transferring to the next cohort date or receiving a full refund.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">4. Cancellation &amp; Refund Terms</h2>
            <ul className="space-y-2 pl-4 list-disc marker:text-[#B69A6A]">
              <li><strong>Cancellations made 7+ days prior to cohort launch:</strong> Full refund minus nominal payment processing gateway fees.</li>
              <li><strong>Cancellations made 3–6 days prior:</strong> 50% refund or 100% credit toward any future workshop within 6 months.</li>
              <li><strong>Cancellations within 48 hours or no-shows:</strong> Non-refundable due to reserved cohort seating and pre-distributed materials.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">5. Contact Point for Learning Enquiries</h2>
            <p>
              For cancellation requests, cohort rescheduling, or corporate invoice billing queries, please contact our learning desk at{' '}
              <a href="mailto:ish@meritandbeyond.in" className="text-[#846A3F] font-semibold underline">
                ish@meritandbeyond.in
              </a>{' '}
              or call +91 63660 56770.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
