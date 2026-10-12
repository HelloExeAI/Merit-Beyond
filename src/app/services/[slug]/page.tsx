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
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  ArrowUpRight 
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

  return {
    title: `${service.title} | Merit & Beyond`,
    description: `${service.heroTagline} - ${service.shortSubtitle}`,
    openGraph: {
      title: `${service.title} | Merit & Beyond`,
      description: service.heroTagline,
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

  // Find related services
  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="flex flex-col w-full">
      {/* 1. BREADCRUMB & HERO */}
      <section className="relative py-14 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-softblack-muted">
            <Link href="/" className="hover:text-mahogany-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-mahogany-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-copper-700 font-medium">Discipline {service.categoryNumber}</span>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <span>Discipline {service.categoryNumber} · People Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-mahogany-400">
              &ldquo;{service.heroTagline}&rdquo;
            </p>

            <p className="text-base text-softblack-muted font-sans font-normal leading-relaxed max-w-3xl pt-2">
              {service.shortSubtitle}
            </p>

            {/* Quick Action Banner */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-md transition-all group"
              >
                <span>Request Consultation on This</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services#service-discovery"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-champagne-50 text-mahogany-600 font-medium text-xs tracking-wider uppercase border border-champagne-300 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Selector</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS CHALLENGES ADDRESSED */}
      <section className="py-16 md:py-20 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
                Operational Friction
              </span>
              <h2 className="text-3xl font-serif font-bold text-mahogany-600 leading-tight">
                {service.challengeHeadline}
              </h2>
              <p className="text-sm text-softblack-muted leading-relaxed">
                When left unaddressed, these organizational pain points erode enterprise value, distract senior leadership, and introduce compliance or retention vulnerabilities.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-2">
                Common Symptoms Faced by Growing Enterprises:
              </p>
              {service.challengesAddressed.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-ivory-50 border border-champagne-200"
                >
                  <AlertCircle className="w-5 h-5 text-copper-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-softblack font-sans leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY THIS CHALLENGE MATTERS */}
      <section className="py-16 md:py-20 bg-[#FAF5EE] border-b border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold text-center block">
            Executive Perspective
          </span>
          <h2 className="text-3xl font-serif font-bold text-mahogany-600 text-center">
            Why This Discipline Demands Strategic Attention
          </h2>
          <div className="space-y-4 text-base text-softblack-muted leading-relaxed font-sans pt-4">
            {service.whyItMatters.map((paragraph, idx) => (
              <p key={idx} className="bg-white p-6 rounded-xl border border-champagne-200/80 shadow-subtle">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIFIC SUPPORT & ADVISORY SCOPE */}
      <section className="py-20 md:py-24 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Concrete Advisory Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Specific Support &amp; Deliverables
            </h2>
            <p className="mt-3 text-sm sm:text-base text-softblack-muted">
              We provide hands-on, end-to-end execution across three strategic sub-areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.specificSupport.map((area, idx) => (
              <div
                key={idx}
                className="bg-ivory-50 p-7 rounded-xl border border-champagne-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-champagne-100 text-copper-700 flex items-center justify-center text-xs font-mono font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-mahogany-600 mb-4">
                    {area.area}
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-softblack-muted">
                    {area.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-copper-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCOPE & THE FIVE-STAGE METHODOLOGY FOR THIS SERVICE */}
      <section className="py-20 md:py-24 bg-[#FAF5EE] border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Execution Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Our 5-Stage Consulting Approach
            </h2>
            <p className="mt-3 text-sm sm:text-base text-softblack-muted">
              {service.scopeAndApproach}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.fiveStageApproach.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-champagne-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-copper-600 uppercase">
                    Stage {idx + 1} · {step.stage}
                  </span>
                  <h3 className="text-base font-serif font-bold text-mahogany-600 mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-softblack-muted leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXPECTED OUTCOMES (Responsibly Framed) */}
      <section className="py-16 md:py-20 bg-white border-b border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Value Creation
            </span>
            <h2 className="text-3xl font-serif font-bold text-mahogany-600 mt-2">
              Expected Business Outcomes
            </h2>
            <p className="mt-2 text-xs text-softblack-muted italic">
              * Described responsibly based on sound operational methodology, not speculative promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.expectedOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-ivory-50 border border-champagne-200 flex items-start gap-3"
              >
                <TrendingUp className="w-5 h-5 text-copper-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-softblack font-sans leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED ADVISORY DISCIPLINES */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-[#FAF5EE] border-b border-champagne-300/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-copper-600 font-semibold">
                  Complementary Expertise
                </span>
                <h3 className="text-2xl font-serif font-bold text-mahogany-600 mt-1">
                  Related Advisory Disciplines
                </h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-semibold uppercase tracking-wider text-copper-600 hover:text-copper-700"
              >
                All Services →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white p-6 rounded-xl border border-champagne-200 shadow-subtle flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-copper-600">Discipline {rel.categoryNumber}</span>
                    <h4 className="text-lg font-serif font-bold text-mahogany-600">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-softblack-muted line-clamp-1">
                      {rel.shortSubtitle}
                    </p>
                  </div>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="p-3 rounded-lg bg-ivory-100 hover:bg-copper-500 hover:text-white text-copper-600 transition-colors flex-shrink-0 ml-4"
                    aria-label={`View ${rel.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. CONSULTATION CTA PASSING SERVICE SLUG */}
      <section className="py-20 bg-mahogany-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-300 font-semibold">
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Discuss Your Organisation&apos;s Needs in {service.title}
          </h2>
          <p className="text-base text-ivory-200 max-w-xl mx-auto font-sans leading-relaxed">
            Our advisory partners will review your current operating context and provide a structured perspective on the recommended scope.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.slug)}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-md transition-all group"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+916366056770"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-champagne-400/40 transition-all"
            >
              <span>Call +91 6366056770</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
