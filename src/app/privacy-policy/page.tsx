import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Governance | Merit & Beyond',
  description: 'Our commitment to client confidentiality, professional discretion, and responsible data governance.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-14 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-copper-600 hover:text-copper-700 font-semibold mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase">
            <Lock className="w-3.5 h-3.5 text-copper-500" />
            <span>Governance &amp; Discretion</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 tracking-tight">
            Privacy Policy &amp; Confidentiality Governance
          </h1>
          <p className="text-sm text-softblack-muted">
            Last Updated: October 2026 · Governing Entity: Merit &amp; Beyond
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-softblack font-sans leading-relaxed space-y-8">
            <div className="p-6 rounded-xl bg-ivory-50 border border-champagne-200">
              <p className="text-sm text-softblack-muted m-0">
                <strong>Notice for Client Review:</strong> This privacy framework reflects the operational and consultation data principles of Merit &amp; Beyond. We hold professional discretion and client confidentiality as foundational obligations of our consulting practice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                1. Commitment to Client Confidentiality
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                As an HR consulting and people advisory firm, Merit &amp; Beyond frequently reviews sensitive organizational structures, wage models, compliance audits, and talent information. All client data and preliminary consultation details are treated under strict confidentiality standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                2. Information Collected Through This Website
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                When you initiate a consultation request via our website (https://www.meritandbeyond.in), we collect information provided voluntarily by you:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-softblack-muted mt-2">
                <li>Full name and corporate designation</li>
                <li>Work email address and telephone number</li>
                <li>Company / entity legal name and estimated headcount</li>
                <li>Primary area of advisory interest and specific organizational requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                3. Purpose of Processing
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                The information provided is utilized solely to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-softblack-muted mt-2">
                <li>Conduct preliminary diagnostic assessments prior to discovery meetings.</li>
                <li>Communicate with you regarding your advisory consultation and scope definition.</li>
                <li>Prepare customized engagement proposals and non-disclosure agreements (NDAs).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                4. Absolute Prohibition on Data Commercialization
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                Merit &amp; Beyond does not sell, rent, lease, or commercially transfer client contact details or organizational data to any third-party marketing entities. Information is shared only with internal advisory partners assigned to your engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                5. Data Security &amp; Retention
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                We implement administrative, technical, and physical safeguards designed to protect personal and business information against unauthorized access, destruction, or disclosure. Inquiries that do not materialize into formal consulting engagements are archived or securely expunged in accordance with standard business retention policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                6. Contact for Privacy Enquiries
              </h2>
              <p className="text-base text-softblack-muted mt-2">
                For questions regarding this privacy policy or to request rectification of submitted consultation details, please contact:
              </p>
              <div className="mt-3 p-5 rounded-xl bg-ivory-50 border border-champagne-200 text-sm">
                <p className="font-semibold text-mahogany-600">Merit &amp; Beyond — Data Governance</p>
                <p className="text-softblack-muted">Email: <a href="mailto:ish@meritandbeyond.in" className="text-copper-600 underline">ish@meritandbeyond.in</a></p>
                <p className="text-softblack-muted">Telephone: +91 6366056770</p>
                <p className="text-softblack-muted">Website: https://www.meritandbeyond.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
