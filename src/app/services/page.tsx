import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Cpu, Users, Target, GraduationCap, ArrowUpRight } from 'lucide-react';
import ServiceDiscovery from '@/components/services/ServiceDiscovery';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Services | Interactive Guided Discovery | Merit & Beyond',
  description: 'Explore Merit & Beyond’s six specialized people advisory disciplines through our interactive guided discovery system.',
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-copper-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-copper-600" />,
    Cpu: <Cpu className="w-6 h-6 text-copper-600" />,
    Users: <Users className="w-6 h-6 text-copper-600" />,
    Target: <Target className="w-6 h-6 text-copper-600" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-copper-600" />,
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <span>Tailored Advisory Disciplines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              Guided Consulting Discovery
            </h1>
            <p className="text-lg text-softblack-muted font-sans font-normal leading-relaxed">
              We do not treat human capital challenges as a generic commodity. Identify your organisation’s primary growth friction or explore our six dedicated practice areas below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE MANDATORY INTERACTIVE DISCOVERY SELECTOR */}
      <ServiceDiscovery initialSelectedId="setup" isEmbedded={false} />

      {/* 3. COMPREHENSIVE SERVICE DIRECTORY FOR SEARCH ENGINES & DIRECT ACCESSIBILITY */}
      <section className="py-20 md:py-28 bg-[#FAF5EE] border-t border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              The Advisory Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Six Specialized Consulting Disciplines
            </h2>
            <p className="mt-4 text-base text-softblack-muted font-sans leading-relaxed">
              Each discipline is supported by experienced practitioners, rigorous statutory frameworks, and our proven five-stage delivery model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-champagne-200/80 shadow-subtle hover:shadow-elevated hover:border-champagne-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-ivory-100 flex items-center justify-center border border-champagne-200">
                      {iconMap[service.iconName] || <Compass className="w-6 h-6 text-copper-600" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-copper-700">
                      Discipline {service.categoryNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-mahogany-600 mb-3">
                    <Link href={`/services/${service.slug}`} className="hover:text-copper-600 transition-colors">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-softblack-muted leading-relaxed font-sans mb-6">
                    {service.shortSubtitle}
                  </p>
                </div>

                <div className="pt-5 border-t border-champagne-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-copper-600 hover:text-copper-700 transition-colors group"
                  >
                    <span>Full Scope &amp; Outcomes</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.slug)}`}
                    className="text-xs text-softblack-muted hover:text-mahogany-600 font-medium"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CONSULTATION BANNER */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-mahogany-600">
            Have a multifaceted requirement across multiple disciplines?
          </h2>
          <p className="text-base text-softblack-muted max-w-2xl mx-auto font-sans leading-relaxed">
            Many expanding enterprises benefit from an integrated people engagement combining organisation setup, compliance audits, and HRMS optimization.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=comprehensive-review"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-md transition-all"
            >
              <span>Request Comprehensive Organisational Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
