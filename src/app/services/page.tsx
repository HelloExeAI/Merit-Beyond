import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Compass, Briefcase, Cpu, ShieldCheck, Target, BarChart3, Users } from 'lucide-react';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Consulting & People Advisory Services | Merit & Beyond',
  description: 'Explore strategic HR consulting, fractional CHRO support, HR transformation, compliance reviews and organisational effectiveness services.',
};

export default function ServicesPage() {
  const coreServices = servicesData.filter((s) => s.isCoreAdvisory);
  const specialistServices = servicesData.filter((s) => !s.isCoreAdvisory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              ADVISORY PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              People solutions built around business priorities.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Every organisation has a different context. We help leaders assess their people priorities, strengthen HR foundations and improve execution through defined advisory and implementation engagements.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core Advisory Disciplines (Verbatim) */}
      <section className="py-20 md:py-28 bg-[#FAF5ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-2">
              Core Advisory Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
              Five Core Advisory Practices
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
              Structured engagements designed to address foundational, structural, and executive HR priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-xl bg-white border border-[#B69A6A]/30 shadow-subtle hover:border-[#B69A6A] hover:shadow-card transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#846A3F]">
                      {service.categoryNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF5ED] text-[#846A3F] border border-[#B69A6A]/20">
                      Core Discipline
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#29231D] font-semibold group-hover:text-[#552A19] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#29231D]/75 leading-relaxed font-sans">
                    {service.shortSubtitle}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-[#29231D]/80 border-t border-[#F3E9D8]">
                    <span className="font-semibold text-[#846A3F] block pt-2">Potential Focus Areas:</span>
                    <ul className="space-y-1 pl-4 list-disc marker:text-[#B69A6A]">
                      {service.potentialFocusAreas.slice(0, 3).map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F3E9D8] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] group-hover:text-[#552A19]"
                  >
                    <span>View Scope &amp; Details</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[11px] font-semibold text-[#846A3F] hover:text-[#29231D]"
                  >
                    Discuss
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specialist Service Pages */}
      <section id="specialist" className="py-20 md:py-28 bg-[#F3E9D8] border-t border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block mb-2">
              Specialist Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
              Specialist Lifecycle Services
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
              Targeted capability and systems advisory addressing specific operational disciplines across the employee journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialistServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-xl bg-white border border-[#B69A6A]/30 shadow-subtle hover:border-[#B69A6A] hover:shadow-card transition-all group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-[#846A3F]">
                    {service.categoryNumber}
                  </span>

                  <h3 className="text-xl font-serif text-[#29231D] font-semibold group-hover:text-[#552A19] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#29231D]/75 leading-relaxed font-sans">
                    {service.shortSubtitle}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-[#29231D]/80 border-t border-[#F3E9D8]">
                    <span className="font-semibold text-[#846A3F] block pt-2">Focus Areas:</span>
                    <ul className="space-y-1 pl-4 list-disc marker:text-[#B69A6A]">
                      {service.potentialFocusAreas.slice(0, 3).map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F3E9D8] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] group-hover:text-[#552A19]"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[11px] font-semibold text-[#846A3F] hover:text-[#29231D]"
                  >
                    Discuss
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#29231D] text-[#F3E9D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Discuss a Defined Advisory Requirement
          </h3>
          <p className="text-xs sm:text-sm text-[#DEC8A9]/80 max-w-xl mx-auto leading-relaxed">
            Every engagement begins with understanding your specific context and defining clear scope boundaries before making recommendations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
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
