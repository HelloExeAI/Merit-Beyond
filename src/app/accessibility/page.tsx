import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Merit & Beyond',
  description: 'Our commitment to digital accessibility, high-contrast typography, and accessible keyboard navigation.',
};

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-20 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#846A3F] hover:text-[#29231D] font-semibold mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
            INCLUSIVITY &amp; USABILITY
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
            Accessibility Statement
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">Our Commitment</h2>
            <p>
              Merit &amp; Beyond is committed to ensuring digital accessibility for all users, including individuals with disabilities, low vision, or motor impairments. We continually improve user experience by adhering to relevant Web Content Accessibility Guidelines (WCAG 2.1 Level AA).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">Key Accessibility Measures Implemented</h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                <span><strong>High-Contrast Typography:</strong> Dark charcoal text (#29231D) against warm ivory surfaces (#F3E9D8) exceeding standard 4.5:1 contrast ratios.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                <span><strong>Full Keyboard Navigation:</strong> All interactive elements, navigation docks, and form controls are accessible via standard Tab and Enter keys.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                <span><strong>Semantic Markup &amp; ARIA Labels:</strong> Clean heading hierarchy (H1–H3), explicit form labels, and descriptive aria-labels for screen readers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                <span><strong>Responsive Fluid Typography:</strong> Pages scale cleanly from 320px mobile screens to ultra-wide desktop monitors without text truncation or layout overlap.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">Feedback &amp; Accessibility Assistance</h2>
            <p>
              If you encounter any difficulty accessing any part of our website, please email us at{' '}
              <a href="mailto:ish@meritandbeyond.in" className="text-[#846A3F] font-semibold underline">
                ish@meritandbeyond.in
              </a>. We will address your inquiry promptly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
