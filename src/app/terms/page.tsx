import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Merit & Beyond',
  description: 'Terms and conditions governing the use of Merit & Beyond website and preliminary advisory communications.',
};

export default function TermsPage() {
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
            LEGAL &amp; ADVISORY TERMS
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
            Terms of Use
          </h1>
          <p className="text-xs text-[#78716C]">
            Last Updated: October 2026 · Governing Entity: Merit &amp; Beyond
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#846A3F] flex-shrink-0 mt-0.5" />
            <div>
              <strong>Non-Guarantee &amp; Advisory Boundary:</strong> Merit &amp; Beyond provides management and people advisory services. Website content and preliminary discussions do not constitute binding legal guarantees or formal legal counsel. Formal engagements are governed by separately executed client service agreements.
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">1. Scope of Website Information</h2>
            <p>
              The articles, service descriptions, frameworks, and insights published on this website are intended for general information and educational purposes only. They do not constitute formal professional advice tailored to specific corporate transactions without a signed scope agreement.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">2. Intellectual Property</h2>
            <p>
              All proprietary frameworks, diagnostic models, articles, graphic presentations, and brand assets displayed on www.meritandbeyond.in are the intellectual property of Merit &amp; Beyond and protected under applicable copyright laws. Unauthorised reproduction or distribution is prohibited.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">3. Limitation of Liability</h2>
            <p>
              While Merit &amp; Beyond makes every effort to ensure accuracy, we make no representations or warranties of any kind regarding the completeness or suitability of statutory summaries for any specific operational circumstance. Users should verify statutory regulations with certified authorities before taking decisive action.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">4. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
