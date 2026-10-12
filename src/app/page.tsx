import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Award, 
  CheckCircle2, 
  Clock, 
  Compass,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import ServiceDiscovery from '@/components/services/ServiceDiscovery';
import { insightsData } from '@/data/insights';

export default function HomePage() {
  const featuredInsights = insightsData.slice(0, 3);

  const philosophyPillars = [
    {
      title: 'People at the Core',
      tagline: 'Centering Human Potential',
      description: 'Human capital is not an operational expense; it is the strategic catalyst that converts business plans into market leadership.',
      icon: <Layers className="w-6 h-6 text-copper-500" />
    },
    {
      title: 'Practical Solutions',
      tagline: 'Operational Realism',
      description: 'We do not deliver theoretical slide decks. We construct pragmatic, executable frameworks calibrated to your operating rhythm.',
      icon: <CheckCircle2 className="w-6 h-6 text-copper-500" />
    },
    {
      title: 'Partnership in Progress',
      tagline: 'Collaborative Governance',
      description: 'We work side-by-side with executive leadership and operational managers as an integrated, long-term advisory extension.',
      icon: <Compass className="w-6 h-6 text-copper-500" />
    },
    {
      title: 'Performance that Lasts',
      tagline: 'Sustainable Capability',
      description: 'We build institutional capabilities and sustainable processes that continue to deliver measurable value long after rollout.',
      icon: <TrendingUp className="w-6 h-6 text-copper-500" />
    }
  ];

  const methodologyStages = [
    {
      stage: '01',
      title: 'Understand',
      label: 'Strategic Immersion',
      description: 'Deep-dive inquiry into business objectives, leadership priorities, operational friction points, and culture dynamics.'
    },
    {
      stage: '02',
      title: 'Assess',
      label: 'Diagnostic Evaluation',
      description: 'Evidence-based audit of organizational structure, statutory compliance, payroll systems, and talent readiness.'
    },
    {
      stage: '03',
      title: 'Design',
      label: 'Bespoke Architecture',
      description: 'Co-creating pragmatic policies, role frameworks, compensation rubrics, and organizational blueprints.'
    },
    {
      stage: '04',
      title: 'Implement',
      label: 'Phased Execution',
      description: 'Hands-on operational rollout, change communication, manager enablement workshops, and system transitions.'
    },
    {
      stage: '05',
      title: 'Strengthen',
      label: 'Sustainable Governance',
      description: 'Ongoing review cadences, compliance monitoring, and continuous calibration to sustain organizational health.'
    }
  ];

  const businessOutcomes = [
    {
      metric: 'Zero-Surprise',
      area: 'Statutory Governance',
      description: 'Total statutory peace of mind with 100% audit-ready labour compliance, transparent registers, and mitigated legal liabilities.'
    },
    {
      metric: 'Leadership',
      area: 'Bandwidth Recovery',
      description: 'Executive teams reclaim up to 40% of their time previously lost to resolving boundary disputes and ad-hoc people friction.'
    },
    {
      metric: 'Precision',
      area: 'Payroll & Compensation',
      description: 'Accurate, on-time monthly payroll and market-aligned salary structures that eliminate attrition and preserve internal equity.'
    },
    {
      metric: 'Predictable',
      area: 'Talent Bench Strength',
      description: 'Robust succession pipelines and managerial capability that reduce key-man dependencies and support rapid business expansion.'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-ivory-gradient border-b border-champagne-300/40">
        {/* Subtle decorative background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-champagne-200/30 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-champagne-100/80 border border-champagne-300/80 text-copper-700 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-ping"></span>
                <span>PEOPLE · PROCESS · PERFORMANCE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-mahogany-600 tracking-tight leading-[1.12]">
                People Strategy.<br />
                <span className="italic font-normal text-mahogany-400">Business Performance.</span>
              </h1>

              <p className="text-lg sm:text-xl text-softblack-muted font-sans font-normal leading-relaxed max-w-xl">
                Strengthening people, processes and organisational performance for a future-ready workforce.
              </p>

              <div className="p-4 rounded-xl bg-white/70 border border-champagne-200/80 shadow-subtle max-w-xl">
                <p className="text-sm font-serif italic text-mahogany-500">
                  &ldquo;People enable possibilities. We help you build what&apos;s next.&rdquo;
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#service-discovery"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Find the Right Support</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white hover:bg-champagne-50 text-mahogany-600 font-medium text-sm tracking-wider uppercase border border-champagne-300 hover:border-champagne-400 transition-all shadow-subtle"
                >
                  <span>Talk to Our Team</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-champagne-300/40 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-softblack-muted">
                <div className="p-2 sm:p-0 rounded-lg bg-white/40 sm:bg-transparent border sm:border-0 border-champagne-200/60">
                  <span className="font-semibold text-mahogany-500 block text-sm">6 Core</span>
                  <span>Advisory Disciplines</span>
                </div>
                <div className="p-2 sm:p-0 rounded-lg bg-white/40 sm:bg-transparent border sm:border-0 border-champagne-200/60">
                  <span className="font-semibold text-mahogany-500 block text-sm">100% Tailored</span>
                  <span>Execution Roadmaps</span>
                </div>
                <div className="p-2 sm:p-0 rounded-lg bg-white/40 sm:bg-transparent border sm:border-0 border-champagne-200/60">
                  <span className="font-semibold text-mahogany-500 block text-sm">Strict Discretion</span>
                  <span>&amp; Non-Disclosure</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Refined Editorial Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-3 rounded-2xl border border-champagne-300/60 bg-gradient-to-tr from-champagne-100/40 via-transparent to-champagne-200/30 -rotate-1 pointer-events-none" />
                
                {/* Main Hero Visual Card */}
                <div className="relative rounded-xl overflow-hidden bg-white shadow-elevated border border-champagne-300">
                  <div className="relative h-72 sm:h-96 w-full bg-mahogany-700">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                      alt="Merit & Beyond Strategic People Advisory & Executive Planning"
                      fill
                      priority
                      className="object-cover opacity-85 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mahogany-700 via-transparent to-black/20" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/90 backdrop-blur-md border border-champagne-300/80 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] tracking-widest uppercase font-semibold text-copper-700">Strategic Advisory</span>
                          <p className="text-xs font-serif font-bold text-mahogany-600">Enterprise People Infrastructure</p>
                        </div>
                        <Award className="w-5 h-5 text-copper-500" />
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="p-5 bg-white space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-softblack-muted border-b border-champagne-100 pb-2">
                      <span className="font-medium text-mahogany-500">Methodology</span>
                      <span className="font-mono text-copper-600">5-Stage Structured Model</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-softblack-muted">
                      <span className="font-medium text-mahogany-500">Domain</span>
                      <span>Consulting &amp; Statutory Governance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & VALUE PROPOSITION */}
      <section className="py-16 md:py-24 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              The Merit &amp; Beyond Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 leading-tight">
              Positioning Human Capital as a Rigorous Business Advantage
            </h2>
            <p className="text-base sm:text-lg text-softblack-muted leading-relaxed font-sans">
              Too often, Human Resources is relegated to an administrative afterthought—until regulatory non-compliance, payroll failures, or organizational misalignment threaten enterprise continuity. Merit &amp; Beyond brings consulting rigor, legal precision, and strategic clarity to your people operations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICE DISCOVERY (Mandatory Feature) */}
      <ServiceDiscovery isEmbedded={true} />

      {/* 4. THE BRAND PHILOSOPHY (4 PILLARS) */}
      <section className="py-20 md:py-28 bg-[#FAF5EE] border-t border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Foundational Beliefs
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Our Core Philosophy
            </h2>
            <p className="mt-3 text-softblack-muted text-sm sm:text-base">
              The enduring principles that govern our client relationships and consulting delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-champagne-200/80 shadow-subtle hover:shadow-elevated hover:border-champagne-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-ivory-100 flex items-center justify-center mb-5 border border-champagne-200">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-copper-600 font-semibold block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-mahogany-600 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-softblack-muted leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE FIVE-STAGE CONSULTING METHODOLOGY */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
                Rigorous Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
                The Five-Stage Consulting Methodology
              </h2>
            </div>
            <p className="text-sm text-softblack-muted max-w-md">
              A disciplined, phased delivery framework engineered to translate high-level strategy into enduring organizational capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {methodologyStages.map((stage, idx) => (
              <div
                key={idx}
                className="relative bg-ivory-50/80 p-6 rounded-xl border border-champagne-200 hover:border-champagne-400 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold text-copper-600">
                    {stage.stage}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-champagne-300 group-hover:bg-copper-500 transition-colors" />
                </div>
                <h3 className="text-lg font-serif font-bold text-mahogany-600 mb-1">
                  {stage.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-copper-700 font-semibold block mb-2">
                  {stage.label}
                </span>
                <p className="text-xs text-softblack-muted leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS OUTCOMES SECTION */}
      <section className="py-20 md:py-28 bg-[#F7EBDD] border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Commercial Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Measurable Organisational Returns
            </h2>
            <p className="mt-3 text-softblack-muted text-sm sm:text-base">
              Sound people infrastructure directly reinforces operational resilience, margin protection, and executive agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-champagne-200/80 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-serif font-bold text-copper-600 mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-3">
                    {item.area}
                  </div>
                  <p className="text-sm text-softblack-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CURATED INSIGHTS PREVIEW */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
                Thought Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
                Insights &amp; Advisory Perspectives
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper-600 hover:text-copper-700 group"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight) => (
              <article
                key={insight.id}
                className="bg-[#FAF5EE] rounded-xl border border-champagne-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-copper-700 font-medium mb-3">
                    <span className="bg-champagne-100 px-2.5 py-1 rounded border border-champagne-300">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-softblack-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {insight.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-mahogany-600 mb-3 hover:text-copper-600 transition-colors">
                    <Link href={`/insights/${insight.slug}`}>
                      {insight.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-softblack-muted leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                </div>

                <div className="p-7 pt-0 border-t border-champagne-200/50 mt-4 flex items-center justify-between">
                  <span className="text-xs text-softblack-muted">
                    {insight.publishedAt}
                  </span>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-copper-600 hover:text-copper-700"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION CTA BANNER */}
      <section className="py-20 md:py-24 bg-mahogany-600 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-300 font-semibold">
            Confidential Dialogue
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Build people systems worthy of your ambition.
          </h2>
          <p className="text-base sm:text-lg text-ivory-200 max-w-2xl mx-auto font-sans leading-relaxed">
            Whether preparing for statutory audits, restructuring for scale, or developing high-potential leaders, our advisory partners are ready to discuss your objectives.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-lg transition-all group"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+916366056770"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-ivory-100 text-sm font-medium border border-champagne-400/40 transition-all"
            >
              <span>Direct Dial: +91 6366056770</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
