'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Target, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { servicesData, Service } from '@/data/services';

interface ServiceDiscoveryProps {
  initialSelectedId?: string;
  isEmbedded?: boolean;
}

export default function ServiceDiscovery({
  initialSelectedId = 'setup',
  isEmbedded = false
}: ServiceDiscoveryProps) {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId);

  const selectedService: Service | undefined = servicesData.find(
    (s) => s.id === selectedId
  ) || servicesData[0];

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />,
  };

  return (
    <section 
      id="service-discovery" 
      className={`relative w-full ${isEmbedded ? 'py-8' : 'py-16 md:py-24'} transition-all duration-300`}
      aria-label="Interactive Service Discovery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-copper-500" />
            <span>Interactive Consulting Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-mahogany-500 tracking-tight leading-tight">
            What would you like to strengthen?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-softblack-muted leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            Every organisation faces distinct people and performance challenges. Select your primary area of focus below to explore our tailored advisory approach.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-copper-600 bg-white/70 px-3 py-1 rounded-md border border-champagne-200">
            <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse"></span>
            Step 1 of 2 · Select One Area
          </div>
        </div>

        {/* 6 Interactive Selectable Cards */}
        <div 
          role="radiogroup" 
          aria-label="Areas of organizational support"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10"
        >
          {servicesData.map((service) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedId(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(service.id);
                  }
                }}
                className={`group relative text-left p-6 sm:p-7 rounded-xl transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-champagne-400 shadow-elevated ring-2 ring-champagne-400/50'
                    : 'bg-white/80 hover:bg-white border-champagne-200/80 hover:border-champagne-300 shadow-subtle hover:shadow-md'
                }`}
              >
                {/* Active Selection Indicator Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isSelected
                        ? 'bg-mahogany-500 text-champagne-300'
                        : 'bg-ivory-100 text-copper-600 group-hover:bg-champagne-100'
                    }`}
                  >
                    {iconMap[service.iconName] || <Compass className="w-6 h-6" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-copper-600/70">
                      {service.categoryNumber}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-copper-500 border-copper-500 text-white'
                          : 'border-champagne-300 bg-transparent text-transparent group-hover:border-champagne-400'
                      }`}
                      aria-hidden="true"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-serif font-semibold tracking-tight transition-colors duration-200 ${
                  isSelected ? 'text-mahogany-600' : 'text-softblack group-hover:text-mahogany-500'
                }`}>
                  {service.title}
                </h3>

                {/* Simple Business Challenge Description */}
                <p className="mt-2.5 text-sm text-softblack-muted leading-relaxed font-sans line-clamp-3">
                  {service.discoverySummary}
                </p>

                {/* Active Indicator Accent Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-gradient-to-r from-copper-500 via-champagne-400 to-copper-500 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Reveal Panel */}
        {selectedService && (
          <div 
            aria-live="polite"
            className="bg-white rounded-2xl border border-champagne-300/80 p-7 sm:p-9 lg:p-10 shadow-elevated relative overflow-hidden transition-all duration-300"
          >
            {/* Subtle background luxury accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-copper-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                  Selected Support Discipline · Category {selectedService.categoryNumber}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-mahogany-500">
                  {selectedService.title}
                </h3>

                <p className="text-base sm:text-lg text-softblack leading-relaxed font-serif italic text-mahogany-400">
                  &ldquo;{selectedService.heroTagline}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-softblack-muted leading-relaxed font-sans pt-1">
                  {selectedService.scopeAndApproach}
                </p>

                {/* Challenges Addressed Quick List */}
                <div className="pt-2">
                  <p className="text-xs font-semibold tracking-wider uppercase text-softblack/70 mb-2">
                    Key Challenges We Address:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-softblack">
                    {selectedService.challengesAddressed.slice(0, 4).map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-copper-500 font-bold mt-0.5">•</span>
                        <span className="line-clamp-2">{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 p-6 rounded-xl bg-ivory-50 border border-champagne-200 text-center lg:text-left">
                <div className="text-xs uppercase tracking-widest text-copper-700 font-semibold mb-1">
                  Recommended Next Step
                </div>
                <p className="text-xs text-softblack-muted leading-normal">
                  Review the complete scope, 5-stage methodology, and expected outcomes, or start a confidential discussion.
                </p>

                {/* Primary CTA: Dedicated Service Route */}
                <Link
                  href={`/services/${selectedService.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wide shadow-sm hover:shadow transition-all group"
                >
                  <span>Explore This Area</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTA: Pre-filled Enquiry Form */}
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.slug)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-champagne-50 text-mahogany-500 font-medium text-sm border border-champagne-300 hover:border-champagne-400 transition-all"
                >
                  <span>Request Consultation on This</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Alternative: Not sure where to begin */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-champagne-200 text-xs sm:text-sm text-softblack-muted shadow-sm">
            <HelpCircle className="w-4 h-4 text-copper-500" />
            <span>Not sure which area fits your current situation?</span>
            <Link
              href="/contact?service=general-advisory"
              className="font-medium text-copper-600 hover:text-copper-700 underline underline-offset-4 decoration-champagne-400 hover:decoration-copper-600 transition-colors"
            >
              Talk to our advisory team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
