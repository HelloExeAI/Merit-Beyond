import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Merit & Beyond',
  description: 'Our commitment to client confidentiality, data protection, and responsible information governance under applicable Indian law.',
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B69A6A]/30 text-[#846A3F] text-[10px] font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
            Privacy Policy &amp; Data Governance
          </h1>
          <p className="text-xs text-[#78716C]">
            Last Updated: October 2026 · Governing Entity: Merit &amp; Beyond
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs">
            <strong>Professional Governance Note:</strong> As a People &amp; Business Advisory firm, Merit &amp; Beyond treats confidentiality as a non-negotiable obligation. This policy outlines how inquiry data is collected, processed, and safeguarded.
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">1. Information We Collect</h2>
            <p>
              Through our website contact and workshop interest forms, we collect basic business contact details: full name, email address, phone number, organisation name, role, and the description of the requirement you provide.
            </p>
            <p>
              We explicitly advise prospective clients not to submit sensitive employee personal data, national identity numbers, payroll spreadsheets, or confidential proprietary files through initial website open forms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">2. Purpose of Processing</h2>
            <p>
              Collected information is used exclusively to evaluate advisory requirements, respond to consultations, coordinate workshop participation, and issue requested service proposals. We do not sell or rent contact data to commercial third parties.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">3. Data Retention &amp; Security</h2>
            <p>
              Inquiry submissions and lead records are stored in secure, access-controlled repositories. Data is retained only as long as necessary to fulfill professional consulting communication or comply with statutory record-keeping obligations.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">4. Compliance with Applicable Law</h2>
            <p>
              Our data processing practices align with applicable Indian information technology and digital personal data protection standards.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">5. Contact Point for Privacy Inquiries</h2>
            <p>
              For data access, correction, or deletion requests, please contact our privacy desk at{' '}
              <a href="mailto:ish@meritandbeyond.in" className="text-[#846A3F] font-semibold underline">
                ish@meritandbeyond.in
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
