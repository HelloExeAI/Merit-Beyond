import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  FileText,
  Users2
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Firm | Merit & Beyond',
  description: 'Learn about Merit & Beyond: our people-first philosophy, strategic advisory positioning, and disciplined 5-stage consulting methodology.',
};

export default function AboutPage() {
  const methodologyPhases = [
    {
      stage: 'Stage 01',
      title: 'Understand',
      subtitle: 'Strategic Immersion & Context Mapping',
      focus: 'We begin by diagnosing the business context: revenue ambitions, leadership dynamics, operational friction, and cultural nuances.',
      deliverables: ['Stakeholder alignment synthesis', 'Current-state operating map', 'Engagement scope charter']
    },
    {
      stage: 'Stage 02',
      title: 'Assess',
      subtitle: 'Evidence-Based Diagnostic Audits',
      focus: 'Rigorous empirical evaluation of your existing people structures, labour law registers, payroll integrity, and talent capability.',
      deliverables: ['Statutory risk exposure matrix', 'Organizational design gap audit', 'HR tech & workflow analysis']
    },
    {
      stage: 'Stage 03',
      title: 'Design',
      subtitle: 'Pragmatic Architecture & Frameworks',
      focus: 'Co-creating tailored solutions that fit your operational rhythm—from role grading and SOPs to compensation and compliance protocols.',
      deliverables: ['Custom HR handbooks & SOP suites', 'Compensation & grade bands', 'Grievance & performance rubrics']
    },
    {
      stage: 'Stage 04',
      title: 'Implement',
      subtitle: 'Facilitated Execution & Change Enablement',
      focus: 'Translating blueprints into daily reality through leadership workshops, parallel payroll testing, and hands-on operational coaching.',
      deliverables: ['Manager enablement masterclasses', 'HRMS data migration oversight', 'Rollout communications']
    },
    {
      stage: 'Stage 05',
      title: 'Strengthen',
      subtitle: 'Continuous Calibration & Governance',
      focus: 'Institutionalizing change through quarterly compliance health checks, succession roundtables, and ongoing advisory support.',
      deliverables: ['Quarterly compliance health audits', 'Leadership bench reviews', 'Refresher capability clinics']
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO BANNER */}
      <section className="relative py-16 md:py-24 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <span>About Merit &amp; Beyond</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              We partner with organisations to build resilient people foundations.
            </h1>
            <p className="text-lg sm:text-xl text-softblack-muted font-sans font-normal leading-relaxed">
              Merit &amp; Beyond is a strategic HR consulting and people advisory firm. We bridge the critical gap between executive business strategy and daily human capital operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. POSITIONING & FIRM OVERVIEW */}
      <section className="py-16 md:py-24 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
                Strategic Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 leading-tight">
                Not a Service Directory.<br />
                <span className="italic font-normal text-mahogany-400">A Trusted Advisory Partner.</span>
              </h2>
              <div className="space-y-4 text-softblack-muted text-base leading-relaxed font-sans">
                <p>
                  Most enterprises experience moments where growth outpaces their internal HR capability. Rapid headcount increases introduce statutory ambiguities, salary disparities, communication bottlenecks, and manager fatigue.
                </p>
                <p>
                  Merit &amp; Beyond was established to provide business owners, founders, and executive boards with a trusted, sophisticated partner. We combine deep statutory labour law expertise with modern organizational design, compensation engineering, and executive capability development.
                </p>
                <p>
                  Our work is grounded in business reality: every policy we draft, every compliance gap we resolve, and every managerial clinic we conduct is measured against its tangible impact on your commercial performance and organizational resilience.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-ivory-100 border border-champagne-200 text-xs font-semibold text-mahogany-600 uppercase tracking-wider">
                  Operational Realism
                </div>
                <div className="px-4 py-2 rounded-lg bg-ivory-100 border border-champagne-200 text-xs font-semibold text-mahogany-600 uppercase tracking-wider">
                  Statutory Rigor
                </div>
                <div className="px-4 py-2 rounded-lg bg-ivory-100 border border-champagne-200 text-xs font-semibold text-mahogany-600 uppercase tracking-wider">
                  Enduring Capability
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-champagne-300 shadow-elevated bg-mahogany-700 relative h-80 sm:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Merit & Beyond Advisory Consultation"
                  fill
                  className="object-cover opacity-85 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany-700 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/90 backdrop-blur-md border border-champagne-300">
                  <div className="text-xs uppercase tracking-widest text-copper-600 font-semibold mb-1">
                    Brand Core Statement
                  </div>
                  <p className="text-base font-serif font-bold text-mahogany-600">
                    &ldquo;People enable possibilities. We help you build what&apos;s next.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC VISION & MISSION (Editable Framework) */}
      <section className="py-16 md:py-24 bg-[#FAF5EE] border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Strategic Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Vision &amp; Strategic Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-champagne-300/80 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-champagne-100 flex items-center justify-center text-copper-600 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-copper-600 font-semibold block mb-2">
                  Our Vision
                </span>
                <h3 className="text-2xl font-serif font-bold text-mahogany-600 mb-4">
                  The Benchmark in Strategic People Advisory
                </h3>
                <p className="text-sm sm:text-base text-softblack-muted leading-relaxed font-sans">
                  To be the most respected people advisory firm, recognized for transforming Human Resources from a transactional obligation into a strategic institutional engine that fosters enduring commercial success and high employee fulfillment.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-champagne-100 text-xs text-softblack-muted italic">
                * Strategic vision framework calibrated for executive alignment.
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-champagne-300/80 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-champagne-100 flex items-center justify-center text-copper-600 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-copper-600 font-semibold block mb-2">
                  Our Mission
                </span>
                <h3 className="text-2xl font-serif font-bold text-mahogany-600 mb-4">
                  Building Scalable, Compliant People Ecosystems
                </h3>
                <p className="text-sm sm:text-base text-softblack-muted leading-relaxed font-sans">
                  To partner closely with business leaders in architecting robust organizational structures, navigating statutory labour complexities with uncompromising integrity, and equipping managers with the capability to lead with confidence.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-champagne-100 text-xs text-softblack-muted italic">
                * Strategic mission framework calibrated for operational execution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FOUR PILLARS OF PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-white border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              The Guiding Compass
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              Our People-First Philosophy
            </h2>
            <p className="mt-4 text-base text-softblack-muted font-sans leading-relaxed">
              Every consulting assignment is steered by four non-negotiable principles that ensure our recommendations survive beyond paper into lasting practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-ivory-50 border border-champagne-200 space-y-3">
              <span className="text-xs font-mono font-semibold text-copper-600">01</span>
              <h3 className="text-xl font-serif font-bold text-mahogany-600">
                People at the Core
              </h3>
              <p className="text-sm text-softblack-muted leading-relaxed">
                We believe that process and technology exist to empower human agency, not diminish it. Policies must cultivate psychological safety, clear role accountability, and genuine dignity in the workplace.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-ivory-50 border border-champagne-200 space-y-3">
              <span className="text-xs font-mono font-semibold text-copper-600">02</span>
              <h3 className="text-xl font-serif font-bold text-mahogany-600">
                Practical Solutions
              </h3>
              <p className="text-sm text-softblack-muted leading-relaxed">
                Consulting fails when solutions ignore organizational reality. We build tailored, pragmatic frameworks designed to fit your current headcount, budget, and operational tempo rather than forcing bloated enterprise bureaucracy.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-ivory-50 border border-champagne-200 space-y-3">
              <span className="text-xs font-mono font-semibold text-copper-600">03</span>
              <h3 className="text-xl font-serif font-bold text-mahogany-600">
                Partnership in Progress
              </h3>
              <p className="text-sm text-softblack-muted leading-relaxed">
                We do not operate as remote advisors who drop an audit report and disappear. We work alongside internal stakeholders through implementation, coaching teams through change resistance and statutory complexities.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-ivory-50 border border-champagne-200 space-y-3">
              <span className="text-xs font-mono font-semibold text-copper-600">04</span>
              <h3 className="text-xl font-serif font-bold text-mahogany-600">
                Performance that Lasts
              </h3>
              <p className="text-sm text-softblack-muted leading-relaxed">
                Our definition of success is simple: creating institutional muscle that remains self-sustaining. When our engagement closes, your teams possess the documentation, knowledge, and confidence to govern independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 5-STAGE METHODOLOGY DETAILED BREAKDOWN */}
      <section className="py-20 md:py-28 bg-[#FAF5EE] border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-copper-600 font-semibold">
              Disciplined Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-mahogany-600 mt-2">
              The Five-Stage Engagement Model
            </h2>
            <p className="mt-3 text-softblack-muted text-sm sm:text-base">
              A structured lifecycle that guarantees transparency, verifiable milestones, and seamless operational adoption.
            </p>
          </div>

          <div className="space-y-6">
            {methodologyPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-9 rounded-xl border border-champagne-200 shadow-subtle hover:border-champagne-400 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <span className="text-xs font-mono font-bold text-copper-600 tracking-wider uppercase block">
                      {phase.stage}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-mahogany-600 mt-1">
                      {phase.title}
                    </h3>
                    <p className="text-xs font-semibold text-copper-700 uppercase tracking-wider mt-1">
                      {phase.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-sm text-softblack-muted leading-relaxed">
                      {phase.focus}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-ivory-50 p-4 rounded-lg border border-champagne-200">
                    <span className="text-xs uppercase tracking-wider font-semibold text-mahogany-500 block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-softblack">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ETHICAL DISCLOSURE & ADVISORY TEAM NOTE */}
      <section className="py-12 bg-white border-b border-champagne-300/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-6 rounded-xl bg-ivory-50 border border-champagne-200">
            <Users2 className="w-6 h-6 text-copper-600 mx-auto mb-2" />
            <p className="text-xs uppercase tracking-widest font-semibold text-copper-700">
              Advisory Governance &amp; Discretion
            </p>
            <p className="mt-2 text-xs sm:text-sm text-softblack-muted leading-relaxed max-w-2xl mx-auto">
              Merit &amp; Beyond delivers people advisory services with strict adherence to non-disclosure protocols and verified statutory benchmarks. Specific leadership profiles, client credentials, and engagement references are shared selectively under formal mutual NDA.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-20 md:py-24 bg-mahogany-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-300 font-semibold">
            Partner with Merit &amp; Beyond
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Ready to strengthen your organisation&apos;s people foundation?
          </h2>
          <p className="text-base text-ivory-200 max-w-xl mx-auto font-sans leading-relaxed">
            Let us explore how our five-stage methodology can bring structural clarity and statutory peace of mind to your enterprise.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wider uppercase shadow-md transition-all group"
            >
              <span>Schedule Exploratory Discussion</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-champagne-400/40 transition-all"
            >
              <span>Explore Consulting Disciplines</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
