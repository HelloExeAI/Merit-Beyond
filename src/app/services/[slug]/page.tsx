import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldAlert, 
  ChevronRight,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { servicesData, Service } from '@/data/services';

const serviceVisuals: Record<string, { image: string; outcome: string }> = {
  'strategic-hr-consulting': {
    image: '/images/service-strategic-hr.jpg',
    outcome: 'Workforce Strategy & Growth Roadmaps',
  },
  'fractional-chro': {
    image: '/images/service-fractional-chro.jpg',
    outcome: 'C-Suite Perspective & Execution Rhythm',
  },
  'hr-transformation': {
    image: '/images/service-hr-transformation.jpg',
    outcome: 'Agile Systems & Digital Workflows',
  },
  'labour-law-compliance-audits': {
    image: '/images/service-compliance-audit.jpg',
    outcome: 'Structured Governance & Risk Confidence',
  },
  'organisational-development': {
    image: '/images/service-org-development.jpg',
    outcome: 'Leadership Alignment & Team Culture',
  },
  'compensation-performance': {
    image: '/images/service-strategic-hr.jpg',
    outcome: 'Targeted Compensation & KPI Alignment',
  },
  'hr-technology-analytics': {
    image: '/images/service-hr-transformation.jpg',
    outcome: 'Modern HRMS & People Data Clarity',
  },
  'talent-employee-experience': {
    image: '/images/service-org-development.jpg',
    outcome: 'Talent Acquisition & Culture Cohesion',
  },
};

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

  const visual = serviceVisuals[service.slug] || {
    image: '/images/service-strategic-hr.jpg',
    outcome: 'Strategic Advisory & Sustainable Execution',
  };

  return (
    <div className="flex flex-col w-full bg-[#F3E9D8] dark:bg-[#12100E] text-[#29231D] dark:text-[#FAF5ED] transition-colors duration-200">
      {/* 1. HERO HEADER WITH LIQUID GLASS VISUAL CANVAS */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] dark:bg-[#12100E] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#846A3F] dark:text-[#D4B886] hover:text-[#29231D] dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Advisory Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#846A3F] dark:text-[#D4B886]">
                  CATEGORY {service.categoryNumber}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full liquid-glass text-[#846A3F] dark:text-[#D4B886] border border-[#B69A6A]/30">
                  {service.isCoreAdvisory ? 'Core Advisory Practice' : 'Specialist Service'}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#29231D]/80 dark:text-[#FAF5ED]/80 font-sans leading-relaxed max-w-2xl">
                {service.shortSubtitle}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#29231D] dark:bg-[#FAF5ED] hover:bg-[#1E1914] dark:hover:bg-white text-white dark:text-[#12100E] text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                >
                  <span>Discuss This Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A] dark:text-[#846A3F]" />
                </Link>
                <a
                  href="#scope"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl liquid-glass text-[#29231D] dark:text-[#FAF5ED] text-xs font-semibold tracking-wider uppercase hover:border-[#B69A6A]"
                >
                  <span>Explore Scope</span>
                </a>
              </div>
            </div>

            {/* Right Column: Liquid Glass Hero Photo Canvas */}
            <div className="lg:col-span-5">
              <div className="liquid-glass liquid-glass-sheen p-3 rounded-3xl border border-white/60 dark:border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#B69A6A]/20 dark:border-[#B69A6A]/15 shadow-inner">
                  <Image
                    src={visual.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Pill */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="liquid-glass px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#F3E9D8] border border-white/20 backdrop-blur-md">
                      Advisory Discipline
                    </span>
                  </div>

                  {/* Bottom Outcome Card */}
                  <div className="absolute bottom-3.5 inset-x-3.5">
                    <div className="liquid-glass p-3.5 rounded-xl border border-white/20 dark:border-white/10 backdrop-blur-md text-white space-y-1">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#D4B886]">
                        Executive Outcome
                      </div>
                      <div className="text-xs sm:text-sm font-serif font-medium leading-snug text-[#F3E9D8]">
                        {visual.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY DISCLAIMER (CRITICAL FOR COMPLIANCE AUDITS) */}
      {service.statutoryDisclaimer && (
        <section className="bg-[#FAF5ED] dark:bg-[#181411] border-b border-[#B69A6A]/30 py-4 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="liquid-glass flex items-start gap-3.5 p-4 rounded-2xl border border-[#B69A6A]/40 text-xs text-[#29231D]/90 dark:text-[#FAF5ED]/90">
              <ShieldAlert className="w-5 h-5 text-[#846A3F] dark:text-[#D4B886] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#29231D] dark:text-white">Non-Negotiable Advisory Standard:</strong>{' '}
                {service.statutoryDisclaimer}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. BUSINESS CHALLENGE & WHAT GOOD LOOKS LIKE */}
      <section className="py-20 bg-white dark:bg-[#14100D] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* The Business Challenge */}
            <div className="lg:col-span-6 liquid-glass liquid-glass-sheen p-7 sm:p-9 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
                  The Business Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                  {service.challengeHeadline}
                </h2>
              </div>

              <div className="space-y-3">
                {service.challengesAddressed.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 dark:bg-[#1C1814]/70 border border-[#B69A6A]/20 dark:border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#846A3F] dark:bg-[#D4B886] mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Good Looks Like */}
            <div className="lg:col-span-6 liquid-glass liquid-glass-sheen p-7 sm:p-9 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#26374B] dark:text-[#8BB4DB] block mb-1">
                  The Target State
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                  What Good Looks Like
                </h2>
              </div>

              <div className="space-y-3">
                {service.whatGoodLooksLike.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#E8EEE9]/80 dark:bg-[#1E2822]/60 border border-[#D4DFD6] dark:border-[#2E3C33]">
                    <CheckCircle2 className="w-4 h-4 text-[#26374B] dark:text-[#90C29E] mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-[#29231D]/85 dark:text-[#FAF5ED]/90 leading-relaxed font-medium font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SCOPE (POTENTIAL FOCUS AREAS) & DELIVERABLES */}
      <section id="scope" className="py-20 bg-[#FAF5ED] dark:bg-[#181411] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Scope / Potential Focus Areas */}
            <div className="lg:col-span-6 liquid-glass liquid-glass-sheen p-7 sm:p-9 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
                  Scope Boundaries
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                  Our Scope (Potential Focus Areas)
                </h2>
                <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-1 font-sans">Confirmed for each specific client engagement.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/70 dark:bg-[#1C1814]/70 border border-[#B69A6A]/20 dark:border-white/5 space-y-3">
                <ul className="space-y-3 text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 font-sans">
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
            <div className="lg:col-span-6 liquid-glass liquid-glass-sheen p-7 sm:p-9 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
                  Concrete Artifacts
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                  Tangible Deliverables
                </h2>
                <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-1 font-sans">Structured tools, blueprints, and operating documentation.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/70 dark:bg-[#1C1814]/70 border border-[#B69A6A]/20 dark:border-white/5 space-y-3">
                <ul className="space-y-3 text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 font-sans">
                  {service.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-[#846A3F] dark:text-[#D4B886] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#29231D] dark:text-[#FAF5ED]">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT OPTIONS & 5-STAGE APPROACH */}
      <section className="py-20 bg-white dark:bg-[#14100D] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Engagement Options */}
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
                Flexible Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                Engagement Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.engagementOptions.map((opt, idx) => (
                <div key={idx} className="liquid-glass liquid-glass-sheen p-6 sm:p-7 rounded-2xl border border-[#B69A6A]/30 dark:border-white/10 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-[#251F1A] border border-[#B69A6A]/30 flex items-center justify-center text-xs font-mono font-bold text-[#846A3F] dark:text-[#D4B886] shadow-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif font-semibold text-[#29231D] dark:text-[#FAF5ED] text-base">{opt}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Stage Approach: Discover -> Diagnose -> Design -> Deliver -> Demonstrate */}
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
                Our Five-Stage Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {service.fiveStageApproach.map((stg, idx) => (
                <div key={idx} className="liquid-glass liquid-glass-sheen p-5 rounded-2xl border border-[#B69A6A]/30 dark:border-white/10 space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#846A3F] dark:text-[#D4B886] block">
                      STAGE 0{idx + 1}
                    </span>
                    <h3 className="font-serif font-semibold text-[#29231D] dark:text-[#FAF5ED] text-base">{stg.stage}</h3>
                    <div className="text-xs font-medium text-[#552A19] dark:text-[#D4B886]">{stg.title}</div>
                    <p className="text-[11px] text-[#29231D]/75 dark:text-[#FAF5ED]/75 leading-relaxed font-sans">{stg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="py-20 bg-[#FAF5ED] dark:bg-[#181411] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-1">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] dark:text-[#FAF5ED]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="liquid-glass p-6 sm:p-7 rounded-2xl border border-[#B69A6A]/30 dark:border-white/10 space-y-2">
                <h4 className="font-serif font-semibold text-[#29231D] dark:text-[#FAF5ED] text-base">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-20 bg-[#29231D] dark:bg-[#16120F] text-[#F3E9D8] text-center border-t border-[#B69A6A]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-serif text-white">
            Discuss This Requirement
          </h3>
          <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-xl mx-auto leading-relaxed font-sans">
            Connect with our advisory practice to review your organization’s specific priorities, agree on a defined scope, and determine appropriate next steps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl"
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
