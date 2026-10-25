import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ShieldAlert, 
  ChevronRight,
  Layers,
  FileCheck2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { servicesData, Service } from '@/data/services';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found | Merit & Beyond',
    };
  }

  // Exact metadata mappings from Master Brief Page 13 where applicable
  const seoMap: Record<string, { title: string; description: string }> = {
    'strategic-hr-consulting': {
      title: 'Strategic HR Consulting | Merit & Beyond',
      description: 'Align people priorities with business objectives through practical HR strategy, governance, workforce planning and implementation support.',
    },
    'fractional-chro': {
      title: 'Fractional CHRO Services | Merit & Beyond',
      description: 'Access structured senior HR leadership and people-strategy support through an agreed engagement model tailored to organisational priorities.',
    },
    'hr-transformation': {
      title: 'HR Transformation & Process Optimisation | Merit & Beyond',
      description: 'Improve HR workflows, operating procedures, HR technology adoption and governance with practical transformation support.',
    },
    'labour-law-compliance-audits': {
      title: 'Labour Law Compliance & HR Audits | Merit & Beyond',
      description: 'Identify potential HR documentation, statutory process and governance gaps through defined-scope reviews and corrective-action planning.',
    },
    'organisational-development': {
      title: 'Organisational Development & Effectiveness | Merit & Beyond',
      description: 'Strengthen performance frameworks, leadership effectiveness, talent processes and employee experience through structured interventions.',
    },
  };

  const matched = seoMap[service.slug] || {
    title: `${service.title} | Merit & Beyond`,
    description: service.shortSubtitle,
  };

  return {
    title: matched.title,
    description: matched.description,
    openGraph: {
      title: matched.title,
      description: matched.description,
      url: `https://www.meritandbeyond.in/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service: Service | undefined = servicesData.find(
    (s) => s.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] hover:text-[#29231D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Advisory Services</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#846A3F]">
                CATEGORY {service.categoryNumber}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/80 text-[#846A3F] border border-[#B69A6A]/30">
                {service.isCoreAdvisory ? 'Core Advisory Practice' : 'Specialist Service'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg text-[#29231D]/80 font-sans leading-relaxed max-w-3xl">
              {service.shortSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow"
              >
                <span>Discuss This Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY DISCLAIMER (CRITICAL FOR COMPLIANCE AUDITS) */}
      {service.statutoryDisclaimer && (
        <section className="bg-[#FAF5ED] border-b border-[#B69A6A]/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#B69A6A]/40 text-xs text-[#29231D]/85">
              <ShieldAlert className="w-5 h-5 text-[#846A3F] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#29231D]">Non-Negotiable Advisory Standard:</strong>{' '}
                {service.statutoryDisclaimer}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. BUSINESS CHALLENGE & WHAT GOOD LOOKS LIKE */}
      <section className="py-20 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* The Business Challenge */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
                  The Business Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                  {service.challengeHeadline}
                </h2>
              </div>

              <div className="space-y-3">
                {service.challengesAddressed.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#846A3F] mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Good Looks Like */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] block mb-1">
                  The Target State
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                  What Good Looks Like
                </h2>
              </div>

              <div className="space-y-3">
                {service.whatGoodLooksLike.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#E8EEE9] border border-[#D4DFD6]">
                    <CheckCircle2 className="w-4 h-4 text-[#26374B] mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SCOPE (POTENTIAL FOCUS AREAS) & DELIVERABLES */}
      <section className="py-20 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Scope / Potential Focus Areas */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
                  Scope Boundaries
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                  Our Scope (Potential Focus Areas)
                </h2>
                <p className="text-xs text-[#78716C] mt-1">Confirmed for each specific client engagement.</p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#B69A6A]/30 space-y-3">
                <ul className="space-y-3 text-xs sm:text-sm text-[#29231D]/80">
                  {service.potentialFocusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A] mt-2 flex-shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Concrete Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
                  Concrete Artifacts
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                  Tangible Deliverables
                </h2>
                <p className="text-xs text-[#78716C] mt-1">Structured tools, blueprints, and operating documentation.</p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#B69A6A]/30 space-y-3">
                <ul className="space-y-3 text-xs sm:text-sm text-[#29231D]/80">
                  {service.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-[#846A3F] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#29231D]">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT OPTIONS & 5-STAGE APPROACH */}
      <section className="py-20 bg-white border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Engagement Options */}
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
                Flexible Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                Engagement Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.engagementOptions.map((opt, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center text-xs font-mono font-bold text-[#846A3F]">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif font-semibold text-[#29231D]">{opt}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Stage Approach: Discover -> Diagnose -> Design -> Deliver -> Demonstrate */}
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                Our Five-Stage Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {service.fiveStageApproach.map((stg, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#846A3F] block">
                    STAGE 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-semibold text-[#29231D] text-base">{stg.stage}</h3>
                  <div className="text-xs font-medium text-[#552A19]">{stg.title}</div>
                  <p className="text-[11px] text-[#29231D]/75 leading-relaxed font-sans">{stg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="py-20 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-1">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#B69A6A]/30 space-y-2">
                <h4 className="font-serif font-semibold text-[#29231D] text-base">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-16 bg-[#29231D] text-[#F3E9D8] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Discuss This Requirement
          </h3>
          <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-xl mx-auto leading-relaxed">
            Connect with our advisory practice to review your organization’s specific priorities, agree on a defined scope, and determine appropriate next steps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              <span>Discuss This Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
