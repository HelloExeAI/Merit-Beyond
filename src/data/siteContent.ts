import { servicesData, Service } from './services';
import { flagshipProgramme, Programme } from './learning';
import { industriesData, Industry } from './industries';
import { insightsData, InsightArticle } from './insights';

export interface GlobalContent {
  brandName: string;
  category: string;
  tagline: string;
  email: string;
  phone: string;
  website: string;
  linkedinUrl: string;
  copyright: string;
  disclaimer: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
    statsBadgeNumber: string;
    statsBadgeText: string;
  };
  valueProp: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    pillars: {
      title: string;
      desc: string;
      highlights: string[];
    }[];
  };
  stats: {
    number: string;
    label: string;
    description: string;
  }[];
  story: {
    eyebrow: string;
    headline: string;
    leadParagraph: string;
    secondParagraph: string;
    quote: string;
    quoteAuthor: string;
  };
  approach: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    stages: {
      step: string;
      name: string;
      duration: string;
      description: string;
    }[];
  };
  quickConsultPromo: {
    badge: string;
    headline: string;
    description: string;
    turnaround: string;
    ctaText: string;
  };
  ctaBanner: {
    headline: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  story: {
    headline: string;
    lead: string;
    body: string;
  };
  purpose: {
    headline: string;
    mission: string;
    vision: string;
  };
  governance: {
    headline: string;
    description: string;
    ethicsNotice: string;
  };
}

export interface QuickConsultContent {
  badge: string;
  headline: string;
  subheadline: string;
  problemSolved: string;
  pricingHypotheses: {
    title: string;
    scope: string;
    turnaround: string;
    priceNote: string;
    deliverables: string[];
  }[];
  termsNotice: string;
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  directEmail: string;
  directPhone: string;
  officeLocation: string;
  workingHours: string;
  responseCommitment: string;
  confidentialityNotice: string;
}

export interface LegalContent {
  privacyOverview: string;
  termsOverview: string;
  cookieOverview: string;
  accessibilityOverview: string;
}

export interface SiteContent {
  version: number;
  lastUpdated: string;
  global: GlobalContent;
  home: HomeContent;
  about: AboutContent;
  services: Service[];
  learning: {
    flagship: Programme;
    corporateOverview: string;
    openWorkshopsOverview: string;
    policyOverview: string;
  };
  industries: Industry[];
  insights: InsightArticle[];
  quickconsult: QuickConsultContent;
  contact: ContactContent;
  legal: LegalContent;
}

export const defaultSiteContent: SiteContent = {
  version: 1,
  lastUpdated: '2026-10-25T15:00:00Z',
  global: {
    brandName: 'Merit & Beyond',
    category: 'People & Business Advisory',
    tagline: 'PEOPLE | PROCESSES | POSSIBILITIES',
    email: 'ish@meritandbeyond.in',
    phone: '+91 63660 56770',
    website: 'www.meritandbeyond.in',
    linkedinUrl: 'https://www.linkedin.com/company/meritandbeyond/',
    copyright: '© 2026 Merit & Beyond. Category: People & Business Advisory. All rights reserved.',
    disclaimer: 'Statutory Compliance Notice: HR compliance reviews and audits must not be described as a guarantee of compliance or a substitute for legal advice. Consultations are conducted under strict professional confidentiality governance.',
  },
  home: {
    hero: {
      eyebrow: 'PEOPLE & BUSINESS ADVISORY',
      headline: 'Better People Decisions. Stronger Business Performance.',
      subheadline: 'Practical, business-aligned people solutions that move beyond advice into clearer decisions, stronger systems and more consistent execution.',
      ctaPrimaryText: 'Discuss a Requirement',
      ctaPrimaryLink: '/contact',
      ctaSecondaryText: 'Explore Core Advisory',
      ctaSecondaryLink: '/services',
      statsBadgeNumber: '100%',
      statsBadgeText: 'Practical, Business-Grounded Advisory Solutions',
    },
    valueProp: {
      eyebrow: 'WHAT SETS US APART',
      headline: 'Advisory Rooted in Operational Reality',
      subheadline: 'We bridge high-level strategy and everyday workplace execution so people practices drive measurable commercial results.',
      pillars: [
        {
          title: 'Strategic Clarity',
          desc: 'Aligning workforce planning, governance, and leadership directly with business milestones.',
          highlights: ['Workforce Governance', 'Executive Alignment', 'Operating Metrics'],
        },
        {
          title: 'Operational Rigour',
          desc: 'Designing sustainable HR policies, performance frameworks, and compliance guardrails.',
          highlights: ['Performance Systems', 'Statutory Readiness', 'Process Mapping'],
        },
        {
          title: 'Demonstrable Impact',
          desc: 'Delivering structured handovers, capability transfers, and tracked business outcomes.',
          highlights: ['Capability Building', 'Review Cadence', 'Execution Governance'],
        },
      ],
    },
    stats: [
      { number: '5', label: 'Core Advisory Disciplines', description: 'Comprehensive people advisory across the enterprise lifecycle.' },
      { number: '3', label: 'Specialist Services', description: 'Targeted depth in coaching, compensation, and talent architecture.' },
      { number: '4', label: 'Specialised Sectors', description: 'Contextualised solutions for Hospitality, IT/ITES, Real Estate, and Manufacturing.' },
      { number: '100%', label: 'Grounded Execution', description: 'Zero boilerplate templates; tailored to your exact business context.' },
    ],
    story: {
      eyebrow: 'OUR PHILOSOPHY',
      headline: 'Moving Beyond Generic Advice into Business Performance',
      leadParagraph: 'Organisations do not fail because they lack ambition; they struggle when people systems, operational processes, and leadership priorities fall out of alignment.',
      secondParagraph: 'Merit & Beyond partners with founders, CXOs, and business leaders to build dependable HR infrastructure, objective performance cadences, and compliant operational disciplines that scale smoothly.',
      quote: 'We believe good people practices are not an administrative overhead — they are the engine of durable business performance.',
      quoteAuthor: 'Merit & Beyond Advisory Council',
    },
    approach: {
      eyebrow: 'HOW WE WORK',
      headline: 'The 5-Stage Advisory Methodology',
      subheadline: 'A disciplined, evidence-based engagement framework that guarantees quality, transparency, and sustainable handover.',
      stages: [
        { step: '01', name: 'Discover', duration: 'Weeks 1–2', description: 'Understand strategic intent, context, and operational friction points through interviews and data analysis.' },
        { step: '02', name: 'Diagnose', duration: 'Weeks 2–3', description: 'Benchmark existing systems, audit compliance readiness, and identify critical gaps and opportunities.' },
        { step: '03', name: 'Design', duration: 'Weeks 4–6', description: 'Architect practical, fit-for-purpose frameworks, metrics, and workflows co-developed with key leaders.' },
        { step: '04', name: 'Deliver', duration: 'Weeks 6–10', description: 'Deploy solutions, pilot processes, train managers, and embed practices directly into regular workflows.' },
        { step: '05', name: 'Demonstrate', duration: 'Ongoing', description: 'Evaluate adoption, calibrate outcome metrics, and provide structured handover documentation.' },
      ],
    },
    quickConsultPromo: {
      badge: 'NEW PILOT OFFERING',
      headline: 'Need Fast, Fixed-Scope People Advisory?',
      description: 'M&B QuickConsult offers rapid-turnaround, fixed-fee diagnostic reviews for fast-moving founders and management teams.',
      turnaround: '3–5 Business Days',
      ctaText: 'Explore QuickConsult Options',
    },
    ctaBanner: {
      headline: 'Ready to Strengthen Your People Systems?',
      description: 'Book a confidential exploratory discussion with our senior advisory team to diagnose your current priorities.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact',
    },
  },
  about: {
    hero: {
      eyebrow: 'ABOUT MERIT & BEYOND',
      headline: 'Bridging Strategy and Workplace Execution',
      subheadline: 'We help ambitious organisations design, build, and govern people practices that sustain long-term business performance.',
    },
    story: {
      headline: 'Built for Grounded Business Leaders',
      lead: 'Founded on the conviction that high-performing businesses require disciplined, transparent, and legally sound people systems.',
      body: 'Merit & Beyond operates across high-growth mid-market enterprises and established corporations, providing actionable counsel rather than generic slide decks. Our practitioners bring hands-on experience across multiple operational sectors.',
    },
    purpose: {
      headline: 'Our Purpose & Commitment',
      mission: 'To empower leadership teams with the clarity, tools, and processes required to make sound people decisions.',
      vision: 'To be the most trusted, dependable people and business advisory partner for growing enterprises.',
    },
    governance: {
      headline: 'Confidentiality & Ethical Governance',
      description: 'Every client engagement is managed under strict non-disclosure terms, professional objectivity, and statutory ethics.',
      ethicsNotice: 'Compliance reviews must not be described as a guarantee of compliance or a substitute for legal advice.',
    },
  },
  services: servicesData,
  learning: {
    flagship: flagshipProgramme,
    corporateOverview: 'Tailored in-house cohort programmes calibrated to your industry, management culture, and performance cadence.',
    openWorkshopsOverview: 'Interactive executive studios and masterclasses open to individual HR practitioners, functional leads, and managers.',
    policyOverview: 'Strict adherence to participant confidentiality, intellectual property protection, and defined rescheduling policies.',
  },
  industries: industriesData,
  insights: insightsData,
  quickconsult: {
    badge: 'M&B QuickConsult (Pilot Model)',
    headline: 'Rapid, Fixed-Scope Advisory for Fast-Moving Businesses',
    subheadline: 'Targeted diagnostic audits and framework reviews delivered with clear deliverables and transparent pricing hypotheses.',
    problemSolved: 'Overcoming the inertia of large consulting retainers with rapid, high-impact interventions.',
    pricingHypotheses: [
      {
        title: 'HR HealthCheck & Baseline Audit',
        scope: 'Comprehensive review of foundational HR policies, compliance posture, and employment contracts.',
        turnaround: '3–5 Business Days',
        priceNote: 'Starting from ₹25,000 / $350 (Pilot Hypothesis)',
        deliverables: ['Executive Summary Scorecard', 'Priority Gap Analysis', '30-Day Action Roadmap'],
      },
      {
        title: 'Policy Manual & Handbook Review',
        scope: 'Review and modernisation of employee handbook against current statutory frameworks and remote/hybrid work norms.',
        turnaround: '4–6 Business Days',
        priceNote: 'Starting from ₹35,000 / $450 (Pilot Hypothesis)',
        deliverables: ['Redlined Policy Recommendations', 'Modernised Template Modules', 'Implementation Checklist'],
      },
      {
        title: 'Role Clarity & KPI Formulation Drill',
        scope: 'Facilitated calibration workshop to convert fuzzy job responsibilities into 3–5 sharp, outcome-based KRAs and KPIs.',
        turnaround: '2–3 Business Days',
        priceNote: 'Starting from ₹30,000 / $400 (Pilot Hypothesis)',
        deliverables: ['Custom KRA/KPI Blueprint', 'Review Scoring Guide', 'Manager Coaching Notes'],
      },
    ],
    termsNotice: 'Pilot product pricing and turnaround are subject to scoping confirmation during the initial diagnostic intake.',
  },
  contact: {
    eyebrow: 'CONNECT WITH US',
    headline: 'Discuss Your Advisory Requirement',
    subheadline: 'Schedule a confidential consultation to explore how Merit & Beyond can support your leadership team.',
    directEmail: 'ish@meritandbeyond.in',
    directPhone: '+91 63660 56770',
    officeLocation: 'Bengaluru, India (Serving Clients Pan-India & Globally)',
    workingHours: 'Monday – Friday, 9:00 AM – 6:00 PM IST',
    responseCommitment: 'We acknowledge and respond to all qualified client enquiries within 1 business day.',
    confidentialityNotice: 'All discussions and data shared are covered under professional non-disclosure governance.',
  },
  legal: {
    privacyOverview: 'We respect your privacy and are committed to protecting personal and organizational data in accordance with applicable data protection legislation.',
    termsOverview: 'By accessing the Merit & Beyond website, you agree to these terms of use and professional disclaimer governance.',
    cookieOverview: 'We use necessary cookies and anonymous analytics to ensure optimal website navigation and performance.',
    accessibilityOverview: 'Merit & Beyond is committed to digital accessibility for individuals of all abilities, adhering to WCAG standards.',
  },
};
