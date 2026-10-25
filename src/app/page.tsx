'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  Compass, 
  Briefcase, 
  Cpu, 
  Target, 
  Layers,
  GraduationCap,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  MessageSquare,
  Building2,
  Factory,
  Laptop,
  HardHat
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { flagshipProgramme } from '@/data/learning';
import { industriesData } from '@/data/industries';
import { insightsData } from '@/data/insights';
import { useContent } from '@/lib/contentContext';

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
};

export default function HomePage() {
  const { content } = useContent();

  const coreServices = (content.services || servicesData).filter((s) => s.isCoreAdvisory);
  const featuredInsights = (content.insights || insightsData).slice(0, 3);
  const flagship = content.learning?.flagship || flagshipProgramme;
  const industries = content.industries || industriesData;

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F3E9D8] dark:bg-[#12100E] text-[#29231D] dark:text-[#FAF5ED] transition-colors duration-200">
      {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-28 bg-[#F3E9D8] dark:bg-[#12100E] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-[#1E1914]/80 border border-[#B69A6A]/40 text-[#29231D] dark:text-[#FAF5ED]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                  {content.home.hero.eyebrow}
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight leading-[1.12]">
                {content.home.hero.headline}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#29231D]/80 dark:text-[#FAF5ED]/80 leading-relaxed font-sans max-w-2xl">
                {content.home.hero.subheadline}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={content.home.hero.ctaPrimaryLink || '/contact'}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#29231D] dark:bg-[#FAF5ED] hover:bg-[#1E1914] dark:hover:bg-white text-white dark:text-[#12100E] font-semibold text-xs tracking-wider uppercase shadow-md transition-all group"
                >
                  <span>{content.home.hero.ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B69A6A] dark:text-[#846A3F]" />
                </Link>

                <Link
                  href={content.home.hero.ctaSecondaryLink || '/services'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#29231D]/40 dark:border-[#FAF5ED]/40 hover:border-[#29231D] dark:hover:border-[#FAF5ED] text-[#29231D] dark:text-[#FAF5ED] font-semibold text-xs tracking-wider uppercase bg-transparent transition-all"
                >
                  <span>{content.home.hero.ctaSecondaryText}</span>
                </Link>
              </div>

              {/* Optional Microcopy */}
              <p className="text-xs text-[#846A3F] dark:text-[#D4B886] font-medium tracking-wide pt-1">
                Practical thinking. Clear priorities. Better execution.
              </p>
            </div>

            {/* Right Editorial Composition: High-Prestige Outcome Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white dark:bg-[#1C1814] p-3 sm:p-4 border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-[0_16px_40px_rgba(41,35,29,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] space-y-4">
                {/* High-Resolution Hero Visual */}
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner group">
                  <Image
                    src="/images/hero-executive-strategy.jpg"
                    alt="Merit & Beyond Executive Strategy Session"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Gradient Overlays for Luxury Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Status Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1E1914]/90 backdrop-blur-md border border-[#B69A6A]/50 shadow-md">
                    <span className="text-[10px] font-bold text-[#846A3F] dark:text-[#D4B886] tracking-wider uppercase">
                      Executive Mandate
                    </span>
                  </div>

                  {/* Bottom Floating Caption Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-black/60 dark:bg-[#161310]/80 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center justify-between text-[11px] font-medium text-[#F3E9D8]">
                      <span className="font-serif">Advisory in Deliberation</span>
                      <span className="text-[#D4B886] font-mono text-[10px] tracking-wide">+42% Execution Clarity</span>
                    </div>
                  </div>
                </div>

                {/* Outcome Summary Tiles */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-[#FAF5ED] dark:bg-[#251F1A] border border-[#B69A6A]/20">
                    <span className="text-[11px] font-bold text-[#552A19] dark:text-[#D4B886] block mb-0.5">
                      Workforce Roadmaps
                    </span>
                    <p className="text-[11px] text-[#29231D]/80 dark:text-[#FAF5ED]/75 leading-tight">
                      People priorities tied to business milestones.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5ED] dark:bg-[#251F1A] border border-[#B69A6A]/20">
                    <span className="text-[11px] font-bold text-[#552A19] dark:text-[#D4B886] block mb-0.5">
                      Executive Rhythm
                    </span>
                    <p className="text-[11px] text-[#29231D]/80 dark:text-[#FAF5ED]/75 leading-tight">
                      Practical cadence between leadership and execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — CHALLENGES
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] uppercase block mb-2">
              Context &amp; Operational Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
              When people challenges become business challenges.
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 mt-4 leading-relaxed font-sans">
              As organisations grow, people processes can become fragmented, managers can lack the tools to lead effectively, and HR teams can be stretched between day-to-day operations and long-term priorities. Merit &amp; Beyond helps bring structure, clarity and practical action to these challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fragmented Processes',
                text: 'HR processes that vary across teams, sites or business units, leading to inconsistent employee experiences and governance gaps.',
              },
              {
                title: 'Theoretical Frameworks',
                text: 'Performance frameworks that exist on paper but do not guide better conversations, clear accountability, or sound business decisions.',
              },
              {
                title: 'Managerial Tool Deficit',
                text: 'Leaders and managers who need practical, grounded tools to navigate difficult feedback, handle disputes, and manage people with confidence.',
              },
              {
                title: 'Opaque HR Governance',
                text: 'HR systems, statutory records, and data governance that need greater consistency, visibility, and audit-readiness across entities.',
              },
              {
                title: 'Capability Gaps',
                text: 'Capability deficiencies that affect employee retention, day-to-day execution, and the ability to scale beyond founder dependency.',
              },
              {
                title: 'Operational Drag',
                text: 'Transactional firefighting consuming senior leadership bandwidth that should be directed toward commercial growth and strategic goals.',
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#B69A6A]/25 shadow-sm space-y-2 hover:border-[#B69A6A] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#B69A6A]" />
                  <h3 className="font-serif text-lg text-[#29231D] font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#29231D]/75 leading-relaxed font-sans pl-4">
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR PERSPECTIVE
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#29231D] text-[#F3E9D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B69A6A] uppercase block">
                Our Advisory Perspective
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                People strategy should work in the real world.
              </h2>
              <p className="text-base sm:text-lg text-[#DEC8A9]/90 leading-relaxed font-sans max-w-2xl">
                Policies, frameworks and training create value when people can use them consistently. We connect strategic intent with practical processes, leadership capability and disciplined implementation—so organisations can move from identifying issues to taking informed action.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#B69A6A]/30">
                <div>
                  <span className="text-xl font-serif text-white block">Strategic Intent</span>
                  <p className="text-xs text-[#DEC8A9]/70 mt-1">Clear priorities aligned to commercial growth.</p>
                </div>
                <div>
                  <span className="text-xl font-serif text-white block">Practical Process</span>
                  <p className="text-xs text-[#DEC8A9]/70 mt-1">Workflows managers actually follow.</p>
                </div>
                <div>
                  <span className="text-xl font-serif text-white block">Disciplined Execution</span>
                  <p className="text-xs text-[#DEC8A9]/70 mt-1">Routines that sustain performance.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#1E1914] p-8 rounded-2xl border border-[#B69A6A]/30 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B69A6A] font-semibold block">
                The M&amp;B Promise
              </span>
              <p className="text-sm text-[#F3E9D8]/90 font-serif italic leading-relaxed">
                &ldquo;Practical, business-aligned people solutions that move beyond advice into clearer decisions, stronger systems and more consistent execution.&rdquo;
              </p>
              <div className="pt-2 text-xs text-[#DEC8A9]/60">
                Merit &amp; Beyond Core Charter
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — ADVISORY SERVICES (5 CORE DISCIPLINES VERBATIM)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F3E9D8] dark:bg-[#12100E] border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] dark:text-[#D4B886] uppercase block mb-2">
                Core Consulting Practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] dark:text-[#FAF5ED] tracking-tight">
                The right support for your people priorities.
              </h2>
              <p className="text-sm sm:text-base text-[#29231D]/80 dark:text-[#FAF5ED]/80 mt-3 font-sans leading-relaxed">
                From strategic direction to process improvement, our advisory services are designed around your organisation’s needs, context and stage of growth.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29231D] dark:text-[#FAF5ED] hover:text-[#552A19] dark:hover:text-[#D4B886] pb-1 border-b border-[#29231D] dark:border-[#FAF5ED] transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const visual = serviceVisuals[service.slug];
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white dark:bg-[#1C1814] border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-subtle hover:shadow-card hover:border-[#B69A6A] transition-all group"
                >
                  <div className="space-y-4">
                    {/* Outcome Photography */}
                    {visual && (
                      <div className="relative w-full h-44 sm:h-48 rounded-lg overflow-hidden border border-[#B69A6A]/20 dark:border-[#B69A6A]/15 shadow-sm">
                        <Image
                          src={visual.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 inset-x-2 px-2.5 py-1 rounded bg-black/65 dark:bg-[#161310]/85 backdrop-blur-sm border border-white/10 text-[10px] font-medium text-[#F3E9D8] tracking-wide">
                          {visual.outcome}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-[#846A3F] dark:text-[#D4B886]">
                        {service.categoryNumber}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF5ED] dark:bg-[#251F1A] text-[#846A3F] dark:text-[#D4B886] border border-[#B69A6A]/20">
                        Advisory
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#29231D] dark:text-[#FAF5ED] font-semibold group-hover:text-[#552A19] dark:group-hover:text-[#D4B886] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#29231D]/75 dark:text-[#FAF5ED]/75 leading-relaxed font-sans">
                      {service.shortSubtitle}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F3E9D8] dark:border-[#251F1A] flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] dark:text-[#FAF5ED] group-hover:text-[#552A19] dark:group-hover:text-[#D4B886] transition-colors"
                    >
                      <span>View Scope &amp; Deliverables</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Specialist Support Card */}
            <div className="flex flex-col justify-between p-8 rounded-xl bg-[#26374B] text-white border border-[#26374B] shadow-subtle">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B69A6A]">
                  Specialist Portfolio
                </span>
                <h3 className="text-xl font-serif text-white">
                  Specialist Lifecycle Practices
                </h3>
                <p className="text-xs sm:text-sm text-[#D6E0EB] leading-relaxed font-sans">
                  Targeted advisory spanning compensation structuring, KPI/OKR systems, HR technology adoption, people analytics, and talent relations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/20">
                <Link
                  href="/services#specialist"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B69A6A] hover:text-white transition-colors"
                >
                  <span>Explore Specialist Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — SPECIALIST SUPPORT
          ======================================================== */}
      <section className="py-16 md:py-20 bg-[#FAF5ED] border-y border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] uppercase block">
                Targeted Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D]">
                Practical expertise across the employee lifecycle.
              </h2>
              <p className="text-sm text-[#29231D]/80 leading-relaxed font-sans">
                Depending on the business need and agreed scope, specialist support may include compensation and benefits, performance management, HR technology and HRMS processes, people analytics, talent and succession practices, employee relations, employee experience, workplace awareness, wellness initiatives and team effectiveness.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — LEARNING (CORPORATE & OPEN WORKSHOPS)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#E8EEE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#26374B] uppercase block mb-2">
              Capability &amp; Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#26374B] tracking-tight">
              Learning that moves beyond knowledge into practice.
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/85 mt-3 leading-relaxed font-sans">
              Build practical HR, leadership and workplace capabilities through structured workshops and customised learning experiences designed around real professional challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 4 Pillars of Learning */}
            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  title: 'Corporate Learning Programmes',
                  desc: 'Tailored to organisational priorities, specific teams, and workplace context.',
                },
                {
                  title: 'Open Workshops',
                  desc: 'Focused learning for HR practitioners and individual professionals who want tools to apply.',
                },
                {
                  title: 'Leadership & Manager Development',
                  desc: 'Focused on workplace application, setting expectations, feedback, and 1-on-1 conversations.',
                },
                {
                  title: 'HR Practitioner Development',
                  desc: 'Delivered through frameworks, tools, cases, and hands-on implementation exercises.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/80 border border-[#D4DFD6] space-y-1">
                  <h4 className="font-serif font-semibold text-sm text-[#26374B]">{item.title}</h4>
                  <p className="text-xs text-[#29231D]/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/learning"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#26374B] hover:text-[#101923]"
                >
                  <span>Explore Learning Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Featured Flagship Programme Banner */}
            <div className="lg:col-span-7 bg-white dark:bg-[#1C1814] rounded-2xl p-6 sm:p-9 border border-[#B8C8BC] dark:border-[#2C382F] shadow-subtle space-y-6">
              {/* Masterclass Outcome Image */}
              <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-[#B8C8BC]/40 dark:border-[#2C382F] shadow-inner group">
                <Image
                  src="/images/learning-masterclass.jpg"
                  alt="Merit & Beyond Masterclass Learning Workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-[#F3E9D8]">
                  <span className="font-serif">Interactive Capability Workshop</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#26374B]/90 border border-[#B69A6A]/40 text-[10px] uppercase font-bold tracking-wider text-[#D4B886]">
                    Manager Coaching Lab
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E8EEE9] dark:border-[#251F1A] pb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-[#E8EEE9] dark:bg-[#251F1A] text-[#26374B] dark:text-[#D4B886]">
                  Featured Programme
                </span>
                <span className="text-xs text-[#78716C] dark:text-[#C2B5A0]">Interactive Workshop</span>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-[#29231D] dark:text-[#FAF5ED] font-semibold leading-snug">
                  {flagship.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#29231D]/80 dark:text-[#FAF5ED]/80 mt-3 font-sans leading-relaxed">
                  {flagship.shortDescription}
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-[#29231D]/80 dark:text-[#FAF5ED]/80">
                <div className="font-semibold text-[#26374B] dark:text-[#D4B886]">Participants will work on:</div>
                <ul className="space-y-1.5 pl-4 list-disc marker:text-[#B69A6A]">
                  <li>Connecting business priorities to team and individual goals.</li>
                  <li>Distinguishing true outcomes and measures from mere activity indicators.</li>
                  <li>Creating clearer KPI/KRA examples and checking whether measures are useful.</li>
                  <li>Structuring review conversations around evidence, feedback and agreed action.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E8EEE9] dark:border-[#251F1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#78716C] dark:text-[#C2B5A0] block">Pilot Duration</span>
                  <span className="text-xs font-semibold text-[#29231D] dark:text-[#FAF5ED]">{flagship.pilotDuration}</span>
                </div>
                <Link
                  href={`/learning/programmes/${flagship.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#26374B] hover:bg-[#1A2635] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>View Details &amp; Register</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7 — QUICKCONSULT (CONDITIONAL PILOT)
          ======================================================== */}
      <section className="py-16 md:py-24 bg-[#FAF5ED] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-[#B69A6A]/30 shadow-subtle">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded bg-[#FAF5ED] text-[#846A3F] border border-[#B69A6A]/30">
                {content.home.quickConsultPromo.badge}
              </span>
              <span className="text-xs text-[#78716C]">{content.home.quickConsultPromo.turnaround}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#29231D] tracking-tight">
              {content.home.quickConsultPromo.headline}
            </h2>

            <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
              {content.home.quickConsultPromo.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#F3E9D8]">
              <div className="p-3.5 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/20">
                <span className="text-xs font-bold text-[#552A19] block">Quick Chat (10m)</span>
                <span className="text-xs text-[#78716C]">Pilot test: ₹199–₹299</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/20">
                <span className="text-xs font-bold text-[#552A19] block">Quick Call (15m)</span>
                <span className="text-xs text-[#78716C]">Pilot test: ₹399–₹599</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/20">
                <span className="text-xs font-bold text-[#552A19] block">Scheduled (30m)</span>
                <span className="text-xs text-[#78716C]">Pilot test: ₹799–₹1,499</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#F3E9D8]">
              <span className="text-xs text-[#78716C]">
                Sessions conducted with verified senior HR advisors under strict confidentiality.
              </span>
              <Link
                href="/quickconsult"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex-shrink-0"
              >
                <span>Explore QuickConsult</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8 — HOW WE WORK (DISCOVER -> DIAGNOSE -> DESIGN -> DELIVER -> DEMONSTRATE)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F3E9D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] uppercase block mb-2">
              Engagement Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
              A clear path from challenge to action.
            </h2>
            <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
              We listen carefully, work from the context and evidence available, define the scope clearly and focus on recommendations that can be implemented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {[
              {
                step: '01',
                name: 'Discover',
                summary: 'Understand context, objectives and immediate priorities.',
              },
              {
                step: '02',
                name: 'Diagnose',
                summary: 'Review the current situation, evidence, risks and root causes.',
              },
              {
                step: '03',
                name: 'Design',
                summary: 'Develop practical recommendations, tools and an agreed roadmap.',
              },
              {
                step: '04',
                name: 'Deliver',
                summary: 'Support implementation through clear ownership and defined milestones.',
              },
              {
                step: '05',
                name: 'Demonstrate',
                summary: 'Review progress, capture learning and identify the next improvement.',
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#B69A6A]/30 shadow-subtle space-y-3 relative group hover:border-[#B69A6A] transition-all"
              >
                <span className="text-xs font-mono font-bold text-[#846A3F] block">
                  {stage.step}
                </span>
                <h3 className="text-xl font-serif text-[#29231D] font-semibold">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9 — INDUSTRIES
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF5ED] border-y border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] uppercase block mb-2">
                Context Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
                Solutions should fit the work.
              </h2>
              <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
                Our approach recognises that people priorities differ across operating environments. Explore relevant perspectives for hospitality, IT/ITES, real estate and construction, and manufacturing.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29231D] hover:text-[#552A19] pb-1 border-b border-[#29231D]"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="flex flex-col justify-between p-6 rounded-xl bg-white border border-[#B69A6A]/25 shadow-subtle hover:border-[#B69A6A] hover:shadow-card transition-all"
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-[#29231D] font-semibold">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans">
                    {ind.pageHeading}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F3E9D8]">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#846A3F] hover:text-[#29231D]"
                  >
                    <span>Read Sector Brief</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10 — INSIGHTS & RESOURCES
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F3E9D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#846A3F] uppercase block mb-2">
                Knowledge &amp; Perspectives
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
                Useful thinking for real workplace decisions.
              </h2>
              <p className="text-sm sm:text-base text-[#29231D]/80 mt-3 font-sans leading-relaxed">
                Explore practical perspectives, tools and learning resources on people strategy, HR operations, performance, leadership, workplace practices and capability development.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29231D] hover:text-[#552A19] pb-1 border-b border-[#29231D]"
            >
              <span>Read Our Insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInsights.map((article) => (
              <div
                key={article.id}
                className="flex flex-col justify-between p-7 rounded-xl bg-white border border-[#B69A6A]/30 shadow-subtle hover:shadow-card hover:border-[#B69A6A] transition-all group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#846A3F]">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-serif text-[#29231D] font-semibold group-hover:text-[#552A19] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#29231D]/75 leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F3E9D8] flex items-center justify-between text-xs text-[#78716C]">
                  <span>{article.readTime}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#29231D] group-hover:text-[#552A19]"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11 — FINAL CTA
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#29231D] text-[#F3E9D8] text-center border-t border-[#B69A6A]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#B69A6A] uppercase block">
            Start the Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            {content.home.ctaBanner.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#DEC8A9]/90 max-w-2xl mx-auto leading-relaxed font-sans">
            {content.home.ctaBanner.description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={content.home.ctaBanner.buttonLink || '/contact'}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase shadow-lg transition-all"
            >
              <span>{content.home.ctaBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-[#B69A6A]/40 hover:border-[#B69A6A] text-[#F3E9D8] text-xs font-semibold tracking-wider uppercase bg-transparent transition-all"
            >
              <span>About Merit &amp; Beyond</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
