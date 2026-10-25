import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Consulting & People Advisory Services | Merit & Beyond',
  description: 'Explore strategic HR consulting, fractional CHRO support, HR transformation, compliance reviews and organisational effectiveness services.',
};

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

export default function ServicesPage() {
  const coreServices = servicesData.filter((s) => s.isCoreAdvisory);
  const specialistServices = servicesData.filter((s) => !s.isCoreAdvisory);

  return (
    <div className="flex flex-col w-full bg-[#F3E9D8] dark:bg-[#12100E] text-[#29231D] dark:text-[#FAF5ED] transition-colors duration-200">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] dark:bg-[#12100E] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block">
              ADVISORY PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight leading-tight">
              People solutions built around business priorities.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans pt-2">
              Every organisation has a different context. We help leaders assess their people priorities, strengthen HR foundations and improve execution through defined advisory and implementation engagements.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core Advisory Disciplines */}
      <section className="py-20 md:py-28 bg-[#FAF5ED] dark:bg-[#181411] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-2">
              Core Advisory Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight">
              Five Core Advisory Practices
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 dark:text-[#FAF5ED]/80 mt-3 font-sans leading-relaxed">
              Structured engagements designed to address foundational, structural, and executive HR priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const visual = serviceVisuals[service.slug];
              return (
                <div
                  key={service.id}
                  className="liquid-glass liquid-glass-sheen flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 group transition-all"
                >
                  <div className="space-y-4">
                    {/* Outcome Photography */}
                    {visual && (
                      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#B69A6A]/20 dark:border-white/10 shadow-sm">
                        <Image
                          src={visual.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-xl liquid-glass text-[10px] font-medium text-[#F3E9D8] tracking-wide border border-white/20 backdrop-blur-md">
                          {visual.outcome}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#846A3F] dark:text-[#D4B886]">
                        {service.categoryNumber}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full liquid-glass text-[#846A3F] dark:text-[#D4B886] border border-[#B69A6A]/30">
                        Core Discipline
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#29231D] dark:text-[#FAF5ED] font-semibold group-hover:text-[#552A19] dark:group-hover:text-[#D4B886] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#29231D]/75 dark:text-[#FAF5ED]/75 leading-relaxed font-sans">
                      {service.shortSubtitle}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-[#29231D]/80 dark:text-[#FAF5ED]/80 border-t border-[#B69A6A]/15 dark:border-white/10">
                      <span className="font-semibold text-[#846A3F] dark:text-[#D4B886] block pt-2">Potential Focus Areas:</span>
                      <ul className="space-y-1 pl-4 list-disc marker:text-[#B69A6A]">
                        {service.potentialFocusAreas.slice(0, 3).map((area, idx) => (
                          <li key={idx}>{area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#B69A6A]/15 dark:border-white/10 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] dark:text-[#FAF5ED] group-hover:text-[#552A19] dark:group-hover:text-[#D4B886]"
                    >
                      <span>View Scope &amp; Details</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[11px] font-semibold text-[#846A3F] dark:text-[#D4B886] hover:text-[#29231D] dark:hover:text-white"
                    >
                      Discuss
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Specialist Service Pages */}
      <section id="specialist" className="py-20 md:py-28 bg-[#F3E9D8] dark:bg-[#12100E] border-t border-[#B69A6A]/20 dark:border-[#B69A6A]/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] dark:text-[#D4B886] block mb-2">
              Specialist Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight">
              Specialist Lifecycle Services
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 dark:text-[#FAF5ED]/80 mt-3 font-sans leading-relaxed">
              Targeted capability and systems advisory addressing specific operational disciplines across the employee journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialistServices.map((service) => {
              const visual = serviceVisuals[service.slug];
              return (
                <div
                  key={service.id}
                  className="liquid-glass liquid-glass-sheen flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-[#B69A6A]/30 dark:border-white/10 group transition-all"
                >
                  <div className="space-y-4">
                    {/* Outcome Photography */}
                    {visual && (
                      <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#B69A6A]/20 dark:border-white/10 shadow-sm">
                        <Image
                          src={visual.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-xl liquid-glass text-[10px] font-medium text-[#F3E9D8] tracking-wide border border-white/20 backdrop-blur-md">
                          {visual.outcome}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#846A3F] dark:text-[#D4B886]">
                        {service.categoryNumber}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full liquid-glass text-[#846A3F] dark:text-[#D4B886] border border-[#B69A6A]/30">
                        Specialist Practice
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#29231D] dark:text-[#FAF5ED] font-semibold group-hover:text-[#552A19] dark:group-hover:text-[#D4B886] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#29231D]/75 dark:text-[#FAF5ED]/75 leading-relaxed font-sans">
                      {service.shortSubtitle}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-[#29231D]/80 dark:text-[#FAF5ED]/80 border-t border-[#B69A6A]/15 dark:border-white/10">
                      <span className="font-semibold text-[#846A3F] dark:text-[#D4B886] block pt-2">Focus Areas:</span>
                      <ul className="space-y-1 pl-4 list-disc marker:text-[#B69A6A]">
                        {service.potentialFocusAreas.slice(0, 3).map((area, idx) => (
                          <li key={idx}>{area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#B69A6A]/15 dark:border-white/10 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] dark:text-[#FAF5ED] group-hover:text-[#552A19] dark:group-hover:text-[#D4B886]"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[11px] font-semibold text-[#846A3F] dark:text-[#D4B886] hover:text-[#29231D] dark:hover:text-white"
                    >
                      Discuss
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#29231D] dark:bg-[#16120F] text-[#F3E9D8] text-center border-t border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-serif text-white">
            Discuss a Defined Advisory Requirement
          </h3>
          <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-xl mx-auto leading-relaxed font-sans">
            Every engagement begins with understanding your specific context and defining clear scope boundaries before making recommendations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl"
            >
              <span>Discuss a Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
