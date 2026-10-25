import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Phone, Calendar, FileText, ShieldAlert, CheckCircle2, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M&B QuickConsult | Short HR Advisory Sessions',
  description: 'Explore short, defined HR and workplace consultations by chat or phone. Availability and booking subject to launch status.',
};

export default function QuickConsultPage() {
  const formats = [
    {
      title: 'Quick Chat',
      duration: '10 minutes',
      price: '₹199 – ₹299 (Pilot)',
      icon: <MessageSquare className="w-5 h-5 text-[#846A3F]" />,
      desc: 'Rapid text exchange with a verified advisor to address a specific query on policy, drafting, or statutory process.',
    },
    {
      title: 'Quick Call',
      duration: '15 minutes',
      price: '₹399 – ₹599 (Pilot)',
      icon: <Phone className="w-5 h-5 text-[#846A3F]" />,
      desc: 'Direct phone conversation to sound out an urgent employee relations situation or performance bottleneck.',
    },
    {
      title: 'Scheduled Consultation',
      duration: '30 minutes',
      price: '₹799 – ₹1,499 (Pilot)',
      icon: <Calendar className="w-5 h-5 text-[#846A3F]" />,
      desc: 'Structured deep-dive into an organizational design question, compensation puzzle, or audit preparation.',
    },
    {
      title: 'Document Review',
      duration: 'Defined scope',
      price: 'Custom quote by scope',
      icon: <FileText className="w-5 h-5 text-[#846A3F]" />,
      desc: 'High-level redline review of an offer letter, handbook chapter, or contractor compliance agreement.',
    },
  ];

  const journeySteps = [
    { num: '01', title: 'Choose Topic & Format', desc: 'Select the area of help needed and choose chat, call, or review.' },
    { num: '02', title: 'Review Advisor Scope', desc: 'Check verified qualifications, clear boundaries, and pricing.' },
    { num: '03', title: 'Confirm & Connect', desc: 'Complete booking and connect directly through our secure interface.' },
    { num: '04', title: 'Actionable Next Step', desc: 'Receive your session summary, key points, and clear next actions.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B69A6A]/40 text-[#846A3F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                Controlled Pilot &amp; Interest Capture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              A focused conversation. A clearer next step.
            </h1>

            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Connect with an advisor for a short, defined consultation on an HR or workplace challenge. Choose chat or phone, review the session details and pricing, and book when you are ready.
            </p>
          </div>
        </div>
      </section>

      {/* Formats Grid */}
      <section className="py-20 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
              Pilot Formats
            </span>
            <h2 className="text-3xl font-serif text-[#29231D]">
              Targeted Session Formats
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              Pricing represents pilot hypothesis values under audience demand testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center">
                    {fmt.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#29231D] font-semibold">{fmt.title}</h3>
                  <div className="text-xs font-mono font-bold text-[#846A3F]">{fmt.duration}</div>
                  <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">{fmt.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#F3E9D8]">
                  <span className="text-xs font-semibold text-[#552A19] block">{fmt.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-20 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
              The Experience
            </span>
            <h2 className="text-3xl font-serif text-[#29231D]">
              How QuickConsult Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((stp, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#B69A6A]/25 space-y-2">
                <span className="text-xs font-mono font-bold text-[#846A3F]">{stp.num}</span>
                <h4 className="font-serif font-semibold text-base text-[#29231D]">{stp.title}</h4>
                <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">{stp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strict Operational Boundaries & Interest Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 flex items-start gap-4 text-xs text-[#29231D]/80">
            <ShieldAlert className="w-5 h-5 text-[#846A3F] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#29231D]">Scope Boundaries &amp; Integrity Notice:</strong>
              <p>
                QuickConsult is designed for focused directional advisory and clarity. It is not an unlimited retainer, an emergency crisis hotline, or a guarantee of outcome. Consultations do not constitute legal representation or formal statutory certification.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#29231D] text-[#F3E9D8] text-center space-y-4">
            <h3 className="text-2xl font-serif text-white">Register Interest for Pilot Launch</h3>
            <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-lg mx-auto leading-relaxed">
              We are onboarding our verified advisor cohort and testing scheduling integrations. Leave your requirement to receive early access.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=quickconsult"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>Register Pilot Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
