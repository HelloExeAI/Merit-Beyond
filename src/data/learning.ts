export interface Programme {
  id: string;
  slug: string;
  title: string;
  category: 'Corporate' | 'Open Workshop' | 'HR Practitioner' | 'Leadership';
  isFlagship?: boolean;
  shortDescription: string;
  audience: string;
  pilotDuration: string;
  deliveryMode: 'Interactive Virtual' | 'In-Person Executive Studio' | 'Hybrid';
  outcomes: string[];
  modulesOrTopics: string[];
  inclusions: string[];
  pilotPriceNote: string;
  status: 'Registration Open (Interest Capture)' | 'Corporate Customisation Available';
}

export const flagshipProgramme: Programme = {
  id: 'performance-management-in-practice',
  slug: 'performance-management-in-practice',
  title: 'Performance Management in Practice: From KPIs and Goal Setting to Effective Reviews',
  category: 'HR Practitioner',
  isFlagship: true,
  shortDescription: 'A practical workshop for HR professionals and managers who want to connect goals, measures, review conversations and follow-through in a usable performance-management process.',
  audience: 'HR professionals, people managers, functional team leads, and business heads seeking grounded performance execution.',
  pilotDuration: '2.5–3 hours interactive workshop (cohort size capped for practical application)',
  deliveryMode: 'Interactive Virtual',
  outcomes: [
    'Connecting corporate and business unit priorities directly to team and individual goals.',
    'Distinguishing true business outcomes and quality measures from raw activity indicators.',
    'Formulating precise, usable KPI and KRA statements that pass the practical test.',
    'Conducting objective, evidence-based review conversations that build accountability without demotivation.',
    'Establishing practical governance, rating calibration routines, and follow-through mechanisms.',
  ],
  modulesOrTopics: [
    'Module 1: The Anatomy of Practical Goals — Outcomes vs. Activity Indicators',
    'Module 2: Drafting Usable KPIs & KRAs — Frameworks & Live Calibration Drills',
    'Module 3: The Mid-Year & Annual Conversation — Evidence, Feedback, and Actionable Commitments',
    'Module 4: Governance & Follow-Through — Calibration Circles, Rating Biases, and Next Steps',
  ],
  inclusions: [
    'Practical Participant Workbook & Exercise Sheets',
    'Customisable Goal & KPI Definition Template (Excel & Sheets)',
    'The Manager’s Review-Conversation Field Guide',
    'Process, Calibration & Governance Checklist',
    'Personal Workplace Implementation Action Plan',
  ],
  pilotPriceNote: 'Pilot Cohort Hypothesis: ₹1,499 – ₹2,499 per participant. Validate audience demand and final inclusions before publishing.',
  status: 'Registration Open (Interest Capture)',
};

export const learningProgrammes: Programme[] = [
  flagshipProgramme,
  {
    id: 'hr-operations-mastery',
    slug: 'hr-operations-mastery',
    title: 'HR Operations, Statutory Workflows & SOP Governance',
    category: 'HR Practitioner',
    shortDescription: 'Building rock-solid execution across onboarding, registers, statutory compliance checks, and lifecycle workflows.',
    audience: 'Early to mid-level HR executives, HR generalists, and operational coordinators.',
    pilotDuration: '4 hours (two 2-hour applied modules)',
    deliveryMode: 'Interactive Virtual',
    outcomes: [
      'Master statutory register maintenance and compliance filing calendars.',
      'Map error-free employee onboarding and exit clearance processes.',
      'Formulate clear, compliant Standard Operating Procedures (SOPs).',
    ],
    modulesOrTopics: [
      'Statutory Records & Registers Checklist (PF, ESI, Minimum Wages)',
      'Designing Bulletproof Employee Lifecycle SOPs',
      'Data Hygiene & Audit-Readiness in Daily Operations',
    ],
    inclusions: [
      'Statutory Calendar Template',
      'Lifecycle SOP Starter Pack',
      'Internal Audit Self-Assessment Rubric',
    ],
    pilotPriceNote: 'Pilot Cohort Hypothesis: ₹1,999 per participant',
    status: 'Registration Open (Interest Capture)',
  },
  {
    id: 'manager-conversation-lab',
    slug: 'manager-conversation-lab',
    title: 'The Manager Conversation Lab: Feedback, Coaching & Daily Accountability',
    category: 'Leadership',
    shortDescription: 'Equipping first-time and experienced managers with usable communication tools for handling everyday people challenges with confidence.',
    audience: 'First-time managers, technical leads transitioning to people management, and team supervisors.',
    pilotDuration: 'Half-day (3.5 hours) intensive simulation',
    deliveryMode: 'In-Person Executive Studio',
    outcomes: [
      'Deliver constructive feedback without defensiveness or awkwardness.',
      'Conduct 1-on-1 check-ins that drive real operational clarity.',
      'Address underperformance early before formal disciplinary action is required.',
    ],
    modulesOrTopics: [
      'The SBI (Situation-Behavior-Impact) Applied Feedback Model',
      'Conducting High-Value 1-on-1 Check-ins',
      'Navigating Difficult Workplace Conversations & Interpersonal Drag',
    ],
    inclusions: [
      'Manager Conversation Cue Cards',
      '1-on-1 Meeting Preparation Planner',
      'Scenario-Based Roleplay Exercises',
    ],
    pilotPriceNote: 'Custom proposal based on corporate cohort size',
    status: 'Corporate Customisation Available',
  },
  {
    id: 'corporate-strategic-alignment',
    slug: 'corporate-strategic-alignment',
    title: 'Executive Leadership Alignment: Connecting People Strategy to Operating Cadence',
    category: 'Corporate',
    shortDescription: 'Bespoke corporate capability sessions designed around specific leadership teams to calibrate vision, goals, and execution.',
    audience: 'Executive committees, department directors, and high-growth leadership teams.',
    pilotDuration: 'Full-day workshop or modular 2-day offsite retreat',
    deliveryMode: 'In-Person Executive Studio',
    outcomes: [
      'Align executive teams on 12-month people and growth priorities.',
      'Establish cross-functional accountability and resolve departmental handoff friction.',
      'Create an executive people risk register and quarterly review rhythm.',
    ],
    modulesOrTopics: [
      'Strategy to Execution: The People Engine',
      'Role Boundaries, RACI Matrix & Authority Delegation',
      'Building Sustainable High-Trust Team Rhythms',
    ],
    inclusions: [
      'Pre-session Diagnostic Interviews with Key Stakeholders',
      'Tailored Executive Action Blueprint',
      '90-Day Post-Workshop Implementation Review',
    ],
    pilotPriceNote: 'Structured corporate engagement proposal upon requirement discovery',
    status: 'Corporate Customisation Available',
  },
];
