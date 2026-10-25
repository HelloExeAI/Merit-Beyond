export interface Service {
  id: string;
  categoryNumber: string;
  slug: string;
  title: string;
  shortSubtitle: string;
  discoverySummary: string;
  heroTagline: string;
  isCoreAdvisory: boolean;
  availability: 'Available at Launch' | 'By Request' | 'Future / Conditional';
  iconName: 'Compass' | 'ShieldCheck' | 'Cpu' | 'Users' | 'Target' | 'GraduationCap' | 'Briefcase' | 'BarChart3';
  challengeHeadline: string;
  challengesAddressed: string[];
  whatGoodLooksLike: string[];
  whyItMatters: string[];
  potentialFocusAreas: string[];
  deliverables: string[];
  engagementOptions: string[];
  scopeAndApproach: string;
  fiveStageApproach: {
    stage: 'Discover' | 'Diagnose' | 'Design' | 'Deliver' | 'Demonstrate';
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  statutoryDisclaimer?: string;
  relatedServiceSlugs: string[];
}

export const servicesData: Service[] = [
  {
    id: 'strategic-hr-consulting',
    categoryNumber: '01',
    slug: 'strategic-hr-consulting',
    title: 'Strategic HR Consulting',
    shortSubtitle: 'Clarify people priorities, strengthen HR governance and align HR plans with business objectives.',
    discoverySummary: 'Setting strategic direction, establishing HR governance models, and aligning workforce capability with growth goals.',
    heroTagline: 'Align people priorities with business objectives through practical HR strategy and disciplined implementation.',
    isCoreAdvisory: true,
    availability: 'Available at Launch',
    iconName: 'Compass',
    challengeHeadline: 'When growth outpaces organisational structure, friction replaces momentum.',
    challengesAddressed: [
      'People priorities that are reactive and disconnected from business milestones.',
      'Ambiguous HR governance and informal decision-making leading to operational inconsistency.',
      'Workforce planning gaps that leave key revenue units understaffed or poorly structured.',
      'Lack of executive visibility into people metrics and leadership execution routines.',
      'Inconsistent HR operating models across entities, subsidiaries, or business units.',
    ],
    whatGoodLooksLike: [
      'A defined 12–24 month people roadmap directly tethered to corporate strategic goals.',
      'Transparent HR operating model with clear decision-rights and escalation thresholds.',
      'Disciplined quarterly people review cadence that informs leadership resource allocation.',
      'Measurable workforce planning models with reliable hiring and capability triggers.',
    ],
    whyItMatters: [
      'An organisation’s people architecture is the engine of its strategy. Without clear priorities and governance, senior leaders spend excessive time firefighting operational misunderstandings rather than pursuing enterprise growth.',
      'Practical strategy moves beyond glossy slide decks into usable operating procedures and measurable management review routines that your teams can execute every day.',
    ],
    potentialFocusAreas: [
      'People strategy and HR roadmap',
      'HR operating model, roles and governance',
      'Policy and process architecture',
      'Workforce planning and organisational priorities',
      'People metrics and management review routines',
    ],
    deliverables: [
      '12-Month Strategic People Blueprint & Operating Charter',
      'Comprehensive Role Architecture & Decision Rights Matrix (RACI)',
      'Executive People KPI Dashboard & Review Cadence Guide',
      'Workforce Capacity Modelling & Strategic Hiring Prioritisation Blueprint',
    ],
    engagementOptions: [
      'Strategic Advisory Project (8–12 weeks defined roadmap build)',
      'Executive Retainer (Quarterly strategic governance and cadence support)',
      'Targeted Alignment Sprint (Focused 4-week priority reset)',
    ],
    scopeAndApproach: 'We partner directly with founders, CEOs, and executive boards to translate commercial ambitions into pragmatic people operating frameworks.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Context & Objectives Immersion',
        description: 'Understand business context, long-term strategic objectives, and immediate people priorities through executive dialogue.',
      },
      {
        stage: 'Diagnose',
        title: 'Operating Model Diagnostic',
        description: 'Review current HR structures, evidence, pain points, risks, and root causes of operational drag.',
      },
      {
        stage: 'Design',
        title: 'Roadmap & Governance Architecture',
        description: 'Develop practical recommendations, governance tools, role definitions, and an agreed implementation roadmap.',
      },
      {
        stage: 'Deliver',
        title: 'Milestone Execution & Rollout',
        description: 'Support implementation through clear team ownership, enablement sessions, and defined progress milestones.',
      },
      {
        stage: 'Demonstrate',
        title: 'Review Progress & Next Iteration',
        description: 'Review progress against business outcomes, capture organisational learning, and identify the next cycle of improvement.',
      },
    ],
    faqs: [
      {
        question: 'How is Strategic HR Consulting different from hiring an internal HR manager?',
        answer: 'Internal HR managers often must focus on day-to-day administration and transactional operations. Strategic HR Consulting provides senior advisory expertise to design the systems, operating models, and governance that make internal teams dramatically more effective.',
      },
      {
        question: 'What is the typical timeframe for a strategic consulting engagement?',
        answer: 'A comprehensive strategic blueprint typically spans 8 to 12 weeks from initial diagnostic immersion to implementation handover, with optional quarterly review cadences.',
      },
    ],
    relatedServiceSlugs: ['fractional-chro', 'hr-transformation', 'organisational-development'],
  },
  {
    id: 'fractional-chro',
    categoryNumber: '02',
    slug: 'fractional-chro',
    title: 'Fractional CHRO Services',
    shortSubtitle: 'Access structured senior HR leadership and people-strategy support through an agreed engagement model.',
    discoverySummary: 'Access experienced executive HR leadership for steering people strategy, leadership cadence, and talent risk.',
    heroTagline: 'Executive-level HR leadership tailored to high-growth, mid-market, or transforming organisations.',
    isCoreAdvisory: true,
    availability: 'Available at Launch',
    iconName: 'Briefcase',
    challengeHeadline: 'Your organisation needs executive people leadership, but full-time overhead is premature.',
    challengesAddressed: [
      'Founders and CEOs spending 30%+ of their time resolving complex people and leadership friction.',
      'Absence of an experienced voice in board and leadership meetings to navigate organizational risk.',
      'Internal HR team lacking executive mentorship, strategic direction, and operating structure.',
      'Uncertainty during rapid scaling, M&A integrations, or restructuring phases.',
      'Critical talent retention and leadership capability gaps affecting quarterly execution.',
    ],
    whatGoodLooksLike: [
      'Predictable, high-impact executive HR cadence supporting CEO and leadership priorities.',
      'An empowered internal HR team executing against clear quarterly objectives.',
      'Executive alignment on compensation, key hires, retention, and succession safeguards.',
      'Structured people risk register discussed proactively in leadership reviews.',
    ],
    whyItMatters: [
      'Early-stage and mid-market firms frequently reach a juncture where operational HR is in place, but complex talent strategy, culture preservation, and board-level people governance require seasoned executive judgment.',
      'Fractional CHRO advisory delivers high-calibre leadership without the full-time cost, bringing external perspective and seasoned execution to your executive table.',
    ],
    potentialFocusAreas: [
      'Agreed senior HR advisory cadence',
      'People agenda and leadership-team support',
      'HR team priorities and operating rhythm',
      'Workforce, talent and organisational risk discussions',
      'Defined progress reviews and next steps',
    ],
    deliverables: [
      'Executive People Agenda & Leadership Cadence Calendar',
      'Monthly/Quarterly HR Risk Register & Advisory Briefings',
      'Internal HR Team Mentorship & Priority Operating System',
      'Board & Investor People Metrics Reporting Pack',
    ],
    engagementOptions: [
      'Dedicated Retainer (Agreed days per week or month)',
      'Interim Transition Leadership (Full executive coverage during search or turnaround)',
      'Advisory Sounding Board (Scheduled bi-weekly strategic cadence)',
    ],
    scopeAndApproach: 'We integrate with your leadership team as a trusted peer, attending key management forums, shaping strategy, and directing your HR function.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Executive Alignment',
        description: 'Establish leadership priorities, business targets, stakeholder expectations, and engagement boundaries.',
      },
      {
        stage: 'Diagnose',
        title: 'Cadence & Capability Audit',
        description: 'Examine current HR team capabilities, governance rhythms, urgent people bottlenecks, and talent risks.',
      },
      {
        stage: 'Design',
        title: 'Charter & Operating Rhythm',
        description: 'Define the executive people agenda, meeting rhythm, priority projects, and reporting milestones.',
      },
      {
        stage: 'Deliver',
        title: 'Active Advisory Leadership',
        description: 'Participate in leadership forums, coach HR leads, steer strategic initiatives, and resolve escalations.',
      },
      {
        stage: 'Demonstrate',
        title: 'Value & Continuity Review',
        description: 'Evaluate leadership outcomes, measure team growth, and structure long-term succession for full-time transition when ready.',
      },
    ],
    faqs: [
      {
        question: 'How many days per month does a Fractional CHRO typically commit?',
        answer: 'Engagements typically range from 2 to 6 days per month, structured into weekly leadership rhythms, monthly strategic reviews, and ongoing asynchronous counsel.',
      },
      {
        question: 'Will the Fractional CHRO manage our existing HR staff?',
        answer: 'Yes. The Fractional CHRO provides strategic direction, prioritization, and professional mentorship to your internal HR team, elevating their capabilities.',
      },
    ],
    relatedServiceSlugs: ['strategic-hr-consulting', 'hr-transformation', 'labour-law-compliance-audits'],
  },
  {
    id: 'hr-transformation',
    categoryNumber: '03',
    slug: 'hr-transformation',
    title: 'HR Transformation & Process Optimisation',
    shortSubtitle: 'Review and improve HR workflows, operating procedures, technology use and governance.',
    discoverySummary: 'Auditing and modernizing HR workflows, SOPs, HRMS adoption, and data quality across the lifecycle.',
    heroTagline: 'Modernise workflows, eliminate operational drag, and embed disciplined HR operating standards.',
    isCoreAdvisory: true,
    availability: 'Available at Launch',
    iconName: 'Cpu',
    challengeHeadline: 'Clunky spreadsheets, manual handoffs, and disjointed tools drain HR bandwidth.',
    challengesAddressed: [
      'Manual, error-prone workflows across onboarding, leave, attendance, and exits.',
      'Under-utilised HRMS software where teams resort back to offline Excel sheets.',
      'SOPs that are either nonexistent, outdated, or ignored by regional managers.',
      'Inconsistent employee lifecycle data producing unreliable management reports.',
      'Disjointed communication that leaves employees confused about basic policies.',
    ],
    whatGoodLooksLike: [
      'Streamlined, touchless employee lifecycle workflows with clear SLAs.',
      'High HRMS adoption rates with employee self-service functioning smoothly.',
      'Standard Operating Procedures that are living, referenced documents across units.',
      'Single source of truth for employee records, payroll inputs, and reporting.',
    ],
    whyItMatters: [
      'Operational inefficiencies in HR do not just frustrate HR personnel—they erode candidate confidence, cause payroll disputes, and slow manager productivity.',
      'Systematic process optimisation creates reliable, auditable operations that scale effortlessly as your headcount expands across locations.',
    ],
    potentialFocusAreas: [
      'HR process mapping and redesign',
      'SOPs, forms, workflows and controls',
      'HRMS process and adoption review',
      'Data quality and reporting routines',
      'Change communication and implementation support',
    ],
    deliverables: [
      'End-to-End HR Process Map & Friction Analysis',
      'Standardised SOP Repository & Lifecycle Workflow Guides',
      'HRMS Optimisation Matrix & Feature Utilisation Roadmap',
      'Change Management & Employee Communication Toolkits',
    ],
    engagementOptions: [
      'Process Sprint (4–6 week focused workflow transformation)',
      'Enterprise HR Transformation (Comprehensive 3–6 month systems overhaul)',
      'HRMS Implementation Advisory (Vendor-neutral process mapping and adoption audit)',
    ],
    scopeAndApproach: 'We combine rigorous process mapping with change management psychology, ensuring that new digital workflows are embraced and sustained.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Workflow Mapping',
        description: 'Map existing lifecycle processes across recruiting, onboarding, daily operations, and departures.',
      },
      {
        stage: 'Diagnose',
        title: 'Bottleneck & Waste Diagnostics',
        description: 'Quantify processing delays, manual redundancies, data handoff breaks, and user friction points.',
      },
      {
        stage: 'Design',
        title: 'Optimised Operating Architecture',
        description: 'Re-engineer workflows for minimum friction, define SOPs, control points, and self-service protocols.',
      },
      {
        stage: 'Deliver',
        title: 'Implementation & Enablement',
        description: 'Configure systems, conduct manager/HR enablement workshops, and roll out standardized documentation.',
      },
      {
        stage: 'Demonstrate',
        title: 'SLA & Adoption Verification',
        description: 'Measure turnaround times, error reduction, user adoption scores, and calibrate workflows based on usage.',
      },
    ],
    faqs: [
      {
        question: 'Do you implement specific HRMS software or are you independent?',
        answer: 'We are completely vendor-neutral. We help you design the underlying processes, define functional requirements, or optimise whichever platform you currently use (e.g. Darwinbox, Keka, Zoho, greytHR, Workday).',
      },
      {
        question: 'How do you ensure employees and managers actually follow the new SOPs?',
        answer: 'We design concise, role-specific job aids and run interactive walkthroughs rather than handing over 100-page policy binders that nobody reads.',
      },
    ],
    relatedServiceSlugs: ['strategic-hr-consulting', 'hr-technology-analytics', 'labour-law-compliance-audits'],
  },
  {
    id: 'labour-law-compliance-audits',
    categoryNumber: '04',
    slug: 'labour-law-compliance-audits',
    title: 'Labour Law Compliance & HR Audits',
    shortSubtitle: 'Identify potential documentation, process and governance gaps within a clearly defined review scope.',
    discoverySummary: 'Structured audits of statutory registers, employment contracts, vendor compliance, and risk registers.',
    heroTagline: 'Meticulous review of statutory registers, documentation, and people risk management.',
    isCoreAdvisory: true,
    availability: 'Available at Launch',
    iconName: 'ShieldCheck',
    challengeHeadline: 'Statutory non-compliance is an invisible liability until a notice arrives.',
    challengesAddressed: [
      'Incomplete statutory registers, returns, or documentation across state jurisdictions.',
      'Contract labour and third-party vendor compliance gaps creating co-employment exposures.',
      'Ambiguities in employment agreements, confidentiality covenants, and termination clauses.',
      'Non-alignment with evolving state and national labour codes and local notifications.',
      'Absence of an internal audit trail and preventive compliance calendar.',
    ],
    whatGoodLooksLike: [
      'A comprehensive, prioritized gap register with clear risk ratings (Critical, High, Advisory).',
      'Verified statutory registers, returns, and digital archives meeting current state requirements.',
      'Robust third-party vendor compliance checklists and audit governance routines.',
      'Trained internal HR staff who understand statutory timelines and filing standards.',
    ],
    whyItMatters: [
      'Labour law non-compliance carries severe financial penalties, operational stoppages, and reputational risk. Furthermore, institutional investors and enterprise clients mandate clean compliance records during due diligence.',
      'Proactive audits convert reactive panic into structured, documented peace of mind.',
    ],
    potentialFocusAreas: [
      'Defined-scope HR documentation review',
      'Statutory process and records checklist',
      'Gap register and risk prioritisation',
      'Corrective-action tracker and ownership',
      'Coordination with qualified legal/statutory specialists where required',
    ],
    deliverables: [
      'Confidential HR Compliance Audit Report & Executive Risk Matrix',
      'Statutory Records & Registers Verification Checklist',
      'Prioritised Corrective Action Tracker (CAPA) with Timelines',
      'Annual Statutory Compliance Calendar & Vendor Review Framework',
    ],
    engagementOptions: [
      'Comprehensive Baseline Audit (One-time multi-jurisdiction diagnostic)',
      'Vendor & Contract Labour Compliance Review (Focused supply-chain audit)',
      'Periodic Compliance Health-Check (Bi-annual or quarterly surveillance)',
    ],
    scopeAndApproach: 'We conduct rigorous, evidence-based reviews of files, registers, returns, and agreements, highlighting discrepancies and building practical remediation pathways.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Scope & Document Ingestion',
        description: 'Define exact review boundaries, operational entities, locations, applicable statutes, and ingest records.',
      },
      {
        stage: 'Diagnose',
        title: 'Forensic Audit & Gap Identification',
        description: 'Scrutinize registers, filings, employee files, contractor agreements, and wage registers against statutory codes.',
      },
      {
        stage: 'Design',
        title: 'Risk Register & Remediation Plan',
        description: 'Categorize identified gaps by legal severity, financial exposure, and build a phased corrective-action plan.',
      },
      {
        stage: 'Deliver',
        title: 'Remediation Oversight',
        description: 'Guide HR teams in updating registers, standardizing agreements, and coordinating statutory filings.',
      },
      {
        stage: 'Demonstrate',
        title: 'Verification & Governance Protocol',
        description: 'Re-audit remediated areas, establish internal controls, and hand over a sustainable compliance tracker.',
      },
    ],
    statutoryDisclaimer: 'Important Note: Our compliance reviews identify operational, documentation, and process gaps within a defined advisory scope. These reviews do not constitute a legal guarantee of compliance, certification, or a substitute for formal legal counsel.',
    faqs: [
      {
        question: 'Is this audit legally binding or does it replace formal legal counsel?',
        answer: 'No. As stated in our governance controls, compliance reviews are operational management audits designed to identify procedural and documentation gaps. They do not constitute formal legal opinions or legal advice. Where specialized statutory legal defense is required, we coordinate with your qualified legal counsel.',
      },
      {
        question: 'Can you audit third-party staffing vendors and security contractors?',
        answer: 'Yes. Contract labour compliance is a critical risk area. We audit PF, ESI, wage registers, and statutory licenses of third-party vendors to safeguard against principal employer liability.',
      },
    ],
    relatedServiceSlugs: ['strategic-hr-consulting', 'hr-transformation', 'fractional-chro'],
  },
  {
    id: 'organisational-development',
    categoryNumber: '05',
    slug: 'organisational-development',
    title: 'Organisational Development & Effectiveness',
    shortSubtitle: 'Strengthen performance frameworks, leadership effectiveness, talent processes and employee experience.',
    discoverySummary: 'Aligning performance management, competency frameworks, talent development, and culture systems.',
    heroTagline: 'Build resilient teams, cultivate capable leaders, and turn performance systems into execution engines.',
    isCoreAdvisory: true,
    availability: 'Available at Launch',
    iconName: 'Target',
    challengeHeadline: 'Performance processes exist on paper, but meaningful conversations don’t happen.',
    challengesAddressed: [
      'Appraisal systems viewed as bureaucratic annual tick-box exercises by managers.',
      'KPIs and goal-setting frameworks that fail to reflect actual business performance drivers.',
      'Managers lacking the skill and confidence to hold structured, constructive feedback discussions.',
      'High turnover among top performers due to unclear career progression and recognition.',
      'Siloed departments leading to cross-functional conflict and diluted accountability.',
    ],
    whatGoodLooksLike: [
      'Transparent, usable goal-setting frameworks (KPI/OKR) aligned with business milestones.',
      'Regular, evidence-based review conversations between managers and their teams.',
      'Clear competency and career progression pathways that retain high-calibre talent.',
      'Strong team cohesion and measurable improvement in employee engagement indicators.',
    ],
    whyItMatters: [
      'Organisational effectiveness is not about soft motivational speeches; it is about building the habits, frameworks, and managerial capability that drive disciplined execution.',
      'When performance systems are intuitive and managers are trained in real conversation dynamics, accountability improves organically.',
    ],
    potentialFocusAreas: [
      'Performance management and goal-setting frameworks',
      'Leadership and manager effectiveness',
      'Talent, succession and development processes',
      'Employee experience and engagement practices',
      'Team effectiveness and organisational change',
    ],
    deliverables: [
      'Usable Performance Management Framework (KPI/OKR Design & Review Guide)',
      'Leadership & Manager Conversation Toolkits (Feedback, Goal Setting, Coaching)',
      'Talent Matrix (9-Box) & Critical Role Succession Blueprint',
      'Employee Experience & Engagement Survey Architecture',
    ],
    engagementOptions: [
      'Performance System Redesign (8–10 week overhaul and enablement)',
      'Manager Effectiveness Cohorts (Integrated consulting and applied workshops)',
      'Culture & Engagement Intervention (Diagnostic survey and action roadmap)',
    ],
    scopeAndApproach: 'We align strategic outcomes with practical human behaviors, giving leaders and managers concrete tools they can apply immediately in daily operations.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Culture & Performance Diagnostics',
        description: 'Analyze current appraisal data, employee feedback, manager sentiment, and leadership expectations.',
      },
      {
        stage: 'Diagnose',
        title: 'Friction & Capability Assessment',
        description: 'Identify where goal-setting breaks down, why reviews feel artificial, and where capability gaps lie.',
      },
      {
        stage: 'Design',
        title: 'Usable Framework Architecture',
        description: 'Design intuitive performance cycles, pragmatic review templates, and transparent progression criteria.',
      },
      {
        stage: 'Deliver',
        title: 'Manager & Team Enablement',
        description: 'Conduct applied workshops on setting measurable KPIs and facilitating objective review discussions.',
      },
      {
        stage: 'Demonstrate',
        title: 'Calibration & Impact Review',
        description: 'Facilitate executive calibration sessions, analyze performance distribution, and refine frameworks.',
      },
    ],
    faqs: [
      {
        question: 'How do you connect performance management with corporate learning?',
        answer: 'Our Organisational Development consulting directly links with our practical learning programs, such as our flagship workshop "Performance Management in Practice", ensuring frameworks are immediately applied.',
      },
      {
        question: 'Can you help redesign our OKR or KPI metrics?',
        answer: 'Yes. We specialize in turning vague goals ("improve communication") into sharp, measurable performance indicators with clear accountability.',
      },
    ],
    relatedServiceSlugs: ['compensation-performance', 'strategic-hr-consulting', 'talent-employee-experience'],
  },
  {
    id: 'compensation-performance',
    categoryNumber: '06',
    slug: 'compensation-performance',
    title: 'Compensation, Benefits & Performance',
    shortSubtitle: 'Salary structures, compensation review support, KPI/KRA/OKR design and performance-review governance.',
    discoverySummary: 'Designing competitive compensation bands, incentive models, and performance-linked rewards.',
    heroTagline: 'Equitable, competitive reward structures that drive high performance and fiscal discipline.',
    isCoreAdvisory: false,
    availability: 'Available at Launch',
    iconName: 'BarChart3',
    challengeHeadline: 'Unstructured compensation breeds internal inequity and costly talent churn.',
    challengesAddressed: [
      'Haphazard salary negotiations during hiring causing wide internal wage disparities.',
      'Incentive and bonus schemes that do not correlate with actual business profitability.',
      'Lack of market benchmark visibility leading to underpaying key roles or overpaying averages.',
      'Annual increment cycles conducted without objective performance data or governance.',
      'Tax-inefficient compensation structuring causing dissatisfaction among employees.',
    ],
    whatGoodLooksLike: [
      'Graded salary bands with clear minimum, midpoint, and maximum parameters.',
      'Performance-linked incentive frameworks with transparent qualification criteria.',
      'Internal pay equity backed by objective job evaluation benchmarks.',
      'A predictable, fiscally modeled annual compensation review cycle.',
    ],
    whyItMatters: [
      'Compensation is your single largest operational investment. A disciplined framework protects company finances while making employees feel valued and fairly recognized.',
      'Fair, transparent reward governance is the strongest antidote to unwanted employee attrition.',
    ],
    potentialFocusAreas: [
      'Salary structures and grading architecture',
      'Compensation review and annual increment modelling',
      'KPI, KRA, and OKR incentive linking',
      'Performance-review governance and calibration',
      'Benefits and variable pay structuring',
    ],
    deliverables: [
      'Custom Salary Band Architecture & Job Grading Table',
      'Variable Pay & Performance Incentive Scheme Documents',
      'Annual Increment Financial Simulation Model',
      'Compensation Governance & Review Committee Guidelines',
    ],
    engagementOptions: [
      'Compensation Restructuring Project (6–8 weeks)',
      'Incentive Plan Design Sprint (4 weeks)',
      'Annual Increment Advisory & Calibration Support',
    ],
    scopeAndApproach: 'We combine financial modeling with talent psychology to build compensation structures that are fiscally responsible and motivating.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Compensation Audit',
        description: 'Ingest payroll registers, job grades, incentive rules, and current cost distributions.',
      },
      {
        stage: 'Diagnose',
        title: 'Equity & Market Gap Analysis',
        description: 'Identify internal pay anomalies, market competitiveness gaps, and cost leakage points.',
      },
      {
        stage: 'Design',
        title: 'Band & Incentive Architecture',
        description: 'Build structured pay grades, tax-efficient structures, and measurable variable pay rules.',
      },
      {
        stage: 'Deliver',
        title: 'Budget Modeling & Transition',
        description: 'Model transition costs, simulate increment scenarios, and equip leadership with communication scripts.',
      },
      {
        stage: 'Demonstrate',
        title: 'Cycle Governance Review',
        description: 'Oversee the first increment/bonus calibration cycle and verify budget variance.',
      },
    ],
    faqs: [
      {
        question: 'Do we need a massive salary benchmark survey to fix our pay structure?',
        answer: 'Not necessarily. For most growing and mid-market firms, internal consistency, clear job bands, and targeted industry benchmarks provide immediate clarity without expensive multi-month surveys.',
      },
    ],
    relatedServiceSlugs: ['organisational-development', 'strategic-hr-consulting'],
  },
  {
    id: 'hr-technology-analytics',
    categoryNumber: '07',
    slug: 'hr-technology-analytics',
    title: 'HR Technology, Digital HR & Analytics',
    shortSubtitle: 'HRMS process design, requirements mapping, adoption, data quality, dashboard definitions and reporting routines.',
    discoverySummary: 'Mapping HRMS requirements, ensuring platform adoption, data governance, and executive HR metrics.',
    heroTagline: 'Turn HR software from a cost centre into an actionable workforce decision platform.',
    isCoreAdvisory: false,
    availability: 'Available at Launch',
    iconName: 'Cpu',
    challengeHeadline: 'Having software is not the same as having reliable people intelligence.',
    challengesAddressed: [
      'Low software utilization where employees and managers avoid self-service modules.',
      'Purchasing software before defining operational requirements and workflows.',
      'Siloed people data spread across multiple incompatible tools and spreadsheets.',
      'Leadership inability to extract basic turnover, headcount, or cost metrics quickly.',
      'Poor data hygiene resulting from missing validation rules and manual overrides.',
    ],
    whatGoodLooksLike: [
      'An HR technology stack aligned precisely with operational processes.',
      'Executive dashboard delivering accurate headcount, attrition, and cost trends in real time.',
      'High self-service adoption with minimal HR manual intervention for basic requests.',
      'Strict data privacy and access controls governing employee records.',
    ],
    whyItMatters: [
      'Technology amplifies existing processes. If workflows are broken, digital tools merely accelerate confusion. Designing the process first ensures your HR technology delivers tangible ROI.',
      'Clean workforce analytics allow leaders to make informed talent investments rather than operating on assumptions.',
    ],
    potentialFocusAreas: [
      'HRMS process design and workflows',
      'Requirements mapping and vendor evaluation',
      'System adoption and self-service enablement',
      'Data quality, governance and privacy',
      'Dashboard definitions and executive reporting routines',
    ],
    deliverables: [
      'HR Technology Requirements Specification & RFQ Document',
      'System Configuration & Workflow Blueprint',
      'Executive People Analytics Dashboard Architecture',
      'Data Governance Policy & User Role Access Matrix',
    ],
    engagementOptions: [
      'HRMS Selection & Requirements Advisory (4–6 weeks)',
      'Adoption & Data Quality Overhaul (4 weeks)',
      'HR Analytics & Reporting Dashboard Build',
    ],
    scopeAndApproach: 'We act as your independent client-side advocate—we do not sell software, we ensure your technology works for your business.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Tech & Process Ingestion',
        description: 'Map current digital tools, manual workarounds, license utilization, and user sentiment.',
      },
      {
        stage: 'Diagnose',
        title: 'Adoption & Data Audit',
        description: 'Pinpoint feature drop-off, duplicate data entry, reporting lags, and configuration flaws.',
      },
      {
        stage: 'Design',
        title: 'Target Operating Architecture',
        description: 'Specify business rules, workflow approvals, data definitions, and reporting metrics.',
      },
      {
        stage: 'Deliver',
        title: 'Configuration & Enablement',
        description: 'Collaborate with software engineers/vendors, run user testing, and deliver manager video tutorials.',
      },
      {
        stage: 'Demonstrate',
        title: 'Adoption & Metric Tracking',
        description: 'Track digital completion rates, self-service adoption, and deliver executive dashboard routines.',
      },
    ],
    faqs: [
      {
        question: 'Do you represent or sell specific software?',
        answer: 'No. As required by our brand standards, we maintain strict independence and do not resell vendor licenses or imply unverified vendor certifications.',
      },
    ],
    relatedServiceSlugs: ['hr-transformation', 'strategic-hr-consulting'],
  },
  {
    id: 'talent-employee-experience',
    categoryNumber: '08',
    slug: 'talent-employee-experience',
    title: 'Talent, Employee Relations & Experience',
    shortSubtitle: 'Talent and succession processes, employee relations frameworks, employee experience, engagement surveys, workplace awareness, wellness and team effectiveness.',
    discoverySummary: 'Strengthening talent pipelines, resolving workplace friction, and elevating manager-employee trust.',
    heroTagline: 'Build an authentic employee journey that attracts, engages, and protects top talent.',
    isCoreAdvisory: false,
    availability: 'Available at Launch',
    iconName: 'Users',
    challengeHeadline: 'Unresolved workplace grievances and disjointed talent practices erode trust.',
    challengesAddressed: [
      'Informal grievance handling resulting in escalating disputes or regulatory exposure.',
      'Unstructured recruitment processes leading to mismatched hires and early attrition.',
      'Absence of succession planning for business-critical operational and managerial roles.',
      'Engagement surveys conducted without transparent follow-through or credible action plans.',
      'Weak manager capability in resolving everyday interpersonal friction respectfully.',
    ],
    whatGoodLooksLike: [
      'A fair, documented employee relations and grievance redressal framework.',
      'Structured interview scorecards and recruitment workflows focused on capability.',
      'Identified succession backups and development plans for mission-critical positions.',
      'An authentic workplace culture where employee feedback leads to visible improvements.',
    ],
    whyItMatters: [
      'Culture is defined by the worst behavior a leader tolerates and the consistency with which grievances are resolved. A fair, structured employee relations environment creates psychological safety.',
      'Retaining proven talent is far more cost-effective than replacing critical departures.',
    ],
    potentialFocusAreas: [
      'Talent and succession processes',
      'Employee relations frameworks and grievance routines',
      'Employee experience mapping and onboarding',
      'Engagement surveys and action planning',
      'Workplace awareness, wellness and team effectiveness',
    ],
    deliverables: [
      'Fair Workplace Code & Grievance Redressal Protocol',
      'Critical Role Succession Plan & Talent Risk Matrix',
      'End-to-End Employee Journey Map & Touchpoint Playbook',
      'Manager Employee Relations Toolkit & Disciplinary Guide',
    ],
    engagementOptions: [
      'Employee Relations Framework Setup (4–6 weeks)',
      'Succession & Critical Talent Sprint (4 weeks)',
      'Workplace Climate Review & Resolution Facilitation',
    ],
    scopeAndApproach: 'We build practical frameworks that balance organizational discipline with dignity, fair hearing, and commercial reality.',
    fiveStageApproach: [
      {
        stage: 'Discover',
        title: 'Workplace Climate Ingestion',
        description: 'Review grievance logs, exit interview patterns, tenure metrics, and employee touchpoints.',
      },
      {
        stage: 'Diagnose',
        title: 'Relations & Talent Diagnostic',
        description: 'Identify recurrent friction zones, single-point talent dependencies, and onboarding drop-offs.',
      },
      {
        stage: 'Design',
        title: 'Policy & Process Blueprints',
        description: 'Formulate transparent grievance mechanisms, structured hiring rubrics, and succession plans.',
      },
      {
        stage: 'Deliver',
        title: 'Supervisory Enablement',
        description: 'Train managers on constructive dispute handling, documentation hygiene, and fair feedback.',
      },
      {
        stage: 'Demonstrate',
        title: 'Stability & Engagement Review',
        description: 'Measure resolution cycle times, voluntary turnover reductions, and employee climate scores.',
      },
    ],
    faqs: [
      {
        question: 'How do you handle sensitive employee grievances or investigations?',
        answer: 'We provide structured frameworks, interview guides, and advisory oversight under strict confidentiality, ensuring natural justice and documented fairness.',
      },
    ],
    relatedServiceSlugs: ['organisational-development', 'strategic-hr-consulting'],
  },
];
