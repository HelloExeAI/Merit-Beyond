export interface Service {
  id: string;
  categoryNumber: string;
  slug: string;
  title: string;
  shortSubtitle: string;
  discoverySummary: string;
  heroTagline: string;
  iconName: 'Compass' | 'ShieldCheck' | 'Cpu' | 'Users' | 'Target' | 'GraduationCap';
  challengeHeadline: string;
  challengesAddressed: string[];
  whyItMatters: string[];
  specificSupport: {
    area: string;
    items: string[];
  }[];
  scopeAndApproach: string;
  fiveStageApproach: {
    stage: 'Understand' | 'Assess' | 'Design' | 'Implement' | 'Strengthen';
    title: string;
    description: string;
  }[];
  expectedOutcomes: string[];
  relatedServiceSlugs: string[];
}

export const servicesData: Service[] = [
  {
    id: 'setup',
    categoryNumber: '01',
    slug: 'people-advisory-organisation-setup',
    title: 'People Advisory & Organisation Setup',
    shortSubtitle: 'HR foundations, organisational design, workforce planning, policies, SOPs and governance',
    discoverySummary: 'Setting up or strengthening the HR function, organisational structure, policies and processes.',
    heroTagline: 'Architecting robust people foundations that scale seamlessly with business ambitions.',
    iconName: 'Compass',
    challengeHeadline: 'When growth outpaces organisational structure, friction replaces momentum.',
    challengesAddressed: [
      'Ambiguous reporting hierarchies and overlapping operational accountabilities.',
      'Absence of structured HR documentation, standard operating procedures, and employee handbooks.',
      'Rapid headcount expansion without a coherent workforce planning model.',
      'Informal decision-making leading to operational inconsistency and culture dilution.',
      'Disjointed onboarding and lack of governance frameworks for leadership accountability.'
    ],
    whyItMatters: [
      'An organisation’s operating model is the invisible engine of its strategy. When fast-growing enterprises or reorganising businesses lack structured organisational blueprints, leadership spends disproportionate time firefighting misunderstandings rather than pursuing growth.',
      'Foundational clarity does not mean stifling bureaucracy. Pragmatic, well-architected policies and governance frameworks provide the psychological safety and role clarity employees need to execute with speed and autonomous conviction.'
    ],
    specificSupport: [
      {
        area: 'Organisation Design & Role Clarity',
        items: [
          'Diagnostic review of current organisational structures and functional interfaces.',
          'Definition of spans of control, authority matrices, and accountability frameworks.',
          'Comprehensive job architecture, role descriptions, and competency mappings.'
        ]
      },
      {
        area: 'HR Setup & Strategic Workforce Planning',
        items: [
          'End-to-end setup of the internal HR function and operating charter.',
          'Medium- to long-term workforce modelling aligned with revenue targets.',
          'Talent capacity planning and succession baseline blueprints.'
        ]
      },
      {
        area: 'Policies, SOPs & Governance Frameworks',
        items: [
          'Creation of tailored, compliant Employee Handbooks and Code of Conduct.',
          'Standard Operating Procedures (SOPs) spanning the complete employee lifecycle.',
          'Delegation of authority (DoA) guidelines and people risk governance protocols.'
        ]
      }
    ],
    scopeAndApproach: 'We partner directly with executive leadership and operational heads to calibrate your people structure against strategic objectives. Rather than transcribing generic templates, we build bespoke operational blueprints tailored to your industry, stage of growth, and cultural ethos.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Strategic Immersion',
        description: 'Deep-dive interviews with leadership to map business objectives, operating friction, and future organizational scale.'
      },
      {
        stage: 'Assess',
        title: 'Structural & Policy Diagnostics',
        description: 'Audit of existing reporting hierarchies, job definitions, workflow handoffs, and policy coverage.'
      },
      {
        stage: 'Design',
        title: 'Blueprint Architecture',
        description: 'Creation of optimized organizational charts, job descriptions, governance matrices, and custom policy suites.'
      },
      {
        stage: 'Implement',
        title: 'Phased Deployment',
        description: 'Facilitated rollout of new structures, leadership alignment workshops, and employee lifecycle handbook briefings.'
      },
      {
        stage: 'Strengthen',
        title: 'Institutionalization & Review',
        description: 'Quarterly review milestones to fine-tune spans of control and preserve organizational agility as headcount evolves.'
      }
    ],
    expectedOutcomes: [
      'Unambiguous accountability across executive, managerial, and operational tiers.',
      'Dramatically reduced leadership time spent resolving functional boundary disputes.',
      'Structured, audit-ready HR policy manuals and lifecycle SOPs.',
      'Accelerated onboarding and faster time-to-productivity for new personnel.'
    ],
    relatedServiceSlugs: [
      'labour-law-compliance-people-audits',
      'people-systems-payroll-compensation'
    ]
  },
  {
    id: 'compliance',
    categoryNumber: '02',
    slug: 'labour-law-compliance-people-audits',
    title: 'Labour Law, Compliance & People Audits',
    shortSubtitle: 'Labour law implementation, statutory compliance audits, people audits, gap analysis and process monitoring',
    discoverySummary: 'Labour law, statutory obligations, people audits and compliance gaps.',
    heroTagline: 'Rigorous statutory vigilance and proactive risk governance for enterprise peace of mind.',
    iconName: 'ShieldCheck',
    challengeHeadline: 'Compliance failures are rarely intentional, but statutory consequences are always severe.',
    challengesAddressed: [
      'Evolving Central and State labour regulations creating hidden liability exposures.',
      'Non-compliant wage structures leading to prospective penalties and retrospective dues.',
      'Inconsistent register maintenance, statutory filings, and contractor compliance lapses.',
      'Absence of regular statutory health-checks prior to investment due diligence or audits.',
      'Ambiguity regarding the upcoming Labour Codes and transition readiness.'
    ],
    whyItMatters: [
      'In modern corporate governance, human resources compliance is an enterprise risk management imperative, not a clerical checkbox. Regulatory penalties, reputational damage, and deal-breaking investor red flags frequently originate from unnoticed statutory non-conformities.',
      'Merit & Beyond transforms compliance from a defensive chore into an institutional asset. We ensure your business operates securely, transparently, and with total statutory confidence across all state and national jurisdictions.'
    ],
    specificSupport: [
      {
        area: 'Comprehensive Statutory Audits',
        items: [
          'Full-scope diagnostic audit across Factories Act, Shops & Establishments, and applicable Acts.',
          'Detailed verification of EPF, ESIC, Professional Tax, and Gratuity obligations.',
          'Rigorous gap analysis report categorized by critical, high, and moderate legal risk.'
        ]
      },
      {
        area: 'Wage Structuring & Contract Labour Compliance',
        items: [
          'Statutory alignment of salary structures ensuring minimum wage and code compliance.',
          'Audit of third-party vendors and contractor manpower compliance management.',
          'Remediation roadmaps to eliminate statutory exposure without disrupting cash flow.'
        ]
      },
      {
        area: 'Governance Registers & Inspection Preparedness',
        items: [
          'Implementation of digitized and physically verifiable statutory registers.',
          'Preparation of response protocols and mock-inspection readiness routines.',
          'Continuous advisory on amendments, notifications, and labor court precedents.'
        ]
      }
    ],
    scopeAndApproach: 'Our compliance specialists combine deep statutory mastery with practical business sense. We conduct thorough, evidence-based audits, produce prioritized remediation roadmaps, and assist your internal teams in executing every corrective action until absolute compliance is achieved.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Entity & Footprint Scoping',
        description: 'Mapping your commercial footprint, establishment classifications, state-level registrations, and vendor relationships.'
      },
      {
        stage: 'Assess',
        title: 'Forensic People & Records Audit',
        description: 'Exhaustive verification of registers, wage rolls, contribution returns, filings, and contractor documentation.'
      },
      {
        stage: 'Design',
        title: 'Remediation Architecture',
        description: 'Delivery of a prioritized risk matrix detailing exact statutory breaches, monetary exposures, and step-by-step corrective protocols.'
      },
      {
        stage: 'Implement',
        title: 'Process Rectification & Restructuring',
        description: 'Hands-on correction of salary slips, register digitization, vendor compliance SOPs, and arrears reconciliation.'
      },
      {
        stage: 'Strengthen',
        title: 'Sustained Compliance Monitoring',
        description: 'Periodic audit check-ins and quarterly monitoring mechanisms to maintain 100% audit-readiness throughout the year.'
      }
    ],
    expectedOutcomes: [
      'Zero-surprise regulatory posture backed by verified statutory documentation.',
      'Immediate mitigation of high-risk liabilities and penalty vulnerabilities.',
      'Complete transparency and confidence during investor or third-party due diligence.',
      'Seamless oversight of contract staffing and external vendor obligations.'
    ],
    relatedServiceSlugs: [
      'people-advisory-organisation-setup',
      'people-systems-payroll-compensation'
    ]
  },
  {
    id: 'systems',
    categoryNumber: '03',
    slug: 'people-systems-payroll-compensation',
    title: 'People Systems, Payroll & Compensation',
    shortSubtitle: 'HRMS, payroll improvement, compensation frameworks, salary structures and people analytics',
    discoverySummary: 'HRMS, payroll processes, compensation structures and people analytics.',
    heroTagline: 'Unifying compensation strategy, accurate payroll, and modern HR technology into a frictionless ecosystem.',
    iconName: 'Cpu',
    challengeHeadline: 'Payroll errors and disjointed systems drain organizational trust faster than any other failure.',
    challengesAddressed: [
      'Manual, error-prone payroll processing causing employee dissatisfaction and tax reconciliation friction.',
      'Disjointed HR software tools that operate in silos without centralized analytics or reporting.',
      'Ad-hoc compensation decisions lacking internal parity, market benchmarking, or grade alignment.',
      'Opaque incentive structures that fail to incentivize high performance.',
      'Lack of real-time workforce data to support strategic leadership decisions.'
    ],
    whyItMatters: [
      'Compensation is both the single largest operational expenditure of most knowledge-driven enterprises and the most immediate reflection of how an organisation values its people. Disorganized payroll or arbitrary salary bands breed quiet resentment and talent leakage.',
      'By coupling competitive compensation architecture with automated, reliable HR tech workflows, Merit & Beyond helps companies build an infrastructure where payroll runs with precision and compensation actively reinforces business goals.'
    ],
    specificSupport: [
      {
        area: 'HRMS Evaluation & Implementation Oversight',
        items: [
          'Requirement gathering, vendor evaluation, and objective HRMS software selection.',
          'Data sanitization, workflow configuration, and migration project management.',
          'Integration oversight across attendance, leaves, payroll, and performance modules.'
        ]
      },
      {
        area: 'Compensation & Benefits Architecture',
        items: [
          'Design of standardized salary bands, grade structures, and pay-range matrices.',
          'Total rewards benchmarking against industry and regional peer standards.',
          'Variable pay, bonus schemas, and performance-linked incentive (PLI) design.'
        ]
      },
      {
        area: 'Payroll Process Re-engineering & Analytics',
        items: [
          'End-to-end audit and optimization of the monthly payroll cycle.',
          'Statutory deduction validation (TDS, PF, ESI, LWF, PT).',
          'Executive dashboards for headcount cost, attrition trends, and compensation ratios.'
        ]
      }
    ],
    scopeAndApproach: 'We serve as unbiased technical advisors and compensation strategists. We do not sell proprietary software licenses; instead, we help you select and orchestrate the right platforms and compensation frameworks that fit your operational budget and future growth trajectory.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Technology & Pay Baseline',
        description: 'Cataloging your current software tech stack, payroll steps, compensation anomalies, and managerial pain points.'
      },
      {
        stage: 'Assess',
        title: 'Gap Analysis & Benchmarking',
        description: 'Evaluating system bottlenecks, data integrity, payroll processing times, and internal/external pay parity.'
      },
      {
        stage: 'Design',
        title: 'Framework & Workflow Architecture',
        description: 'Formulating structured grade bands, compensation rubrics, and automated HRMS integration workflows.'
      },
      {
        stage: 'Implement',
        title: 'System Deployment & Payroll Run',
        description: 'Executing parallel payroll validation runs, configuring approval matrices, and conducting user adoption training.'
      },
      {
        stage: 'Strengthen',
        title: 'Analytics & Continuous Calibration',
        description: 'Establishing automated people analytics dashboards and conducting annual compensation review calibrations.'
      }
    ],
    expectedOutcomes: [
      '100% accurate, stress-free monthly payroll cycles with auditable tax reconciliation.',
      'Equitable, transparent compensation bands that streamline talent hiring and promotion decisions.',
      'A cohesive HRMS that eliminates duplicate administrative tasks.',
      'Executive-level visibility into compensation expenditures and workforce metrics.'
    ],
    relatedServiceSlugs: [
      'labour-law-compliance-people-audits',
      'talent-acquisition-talent-management'
    ]
  },
  {
    id: 'relations',
    categoryNumber: '04',
    slug: 'employee-relations-workplace-effectiveness',
    title: 'Employee Relations & Workplace Effectiveness',
    shortSubtitle: 'Grievances, conflict management, disciplinary processes, performance and engagement',
    discoverySummary: 'Grievances, workplace conflict, performance management and employee engagement.',
    heroTagline: 'Fostering equitable workplace dynamics, psychological safety, and high-performance cultures.',
    iconName: 'Users',
    challengeHeadline: 'Unresolved workplace conflict quietly dismantles morale, retention, and executive credibility.',
    challengesAddressed: [
      'Inconsistent grievance resolution leading to escalating toxicity and legal disputes.',
      'Subjective or combative performance appraisal conversations that alienate top talent.',
      'Inadequate documentation for disciplinary actions or termination decisions.',
      'Absence of impartial mediation during senior-level workplace disagreements.',
      'Low employee engagement and disconnect between frontline teams and leadership vision.'
    ],
    whyItMatters: [
      'The cultural health of an enterprise is tested during difficult conversations: underperformance, disciplinary incidents, and structural change. Mishandling these moments damages brand reputation and exposes the firm to severe legal liability.',
      'A robust employee relations framework replaces emotional volatility with procedural fairness. It provides leaders with the tools and confidence to address performance issues constructively while ensuring employees feel heard and respected.'
    ],
    specificSupport: [
      {
        area: 'Grievance Redressal & Mediation',
        items: [
          'Design of multi-tier, confidential grievance management mechanisms.',
          'Impartial mediation support for sensitive workplace conflicts and peer friction.',
          'Advisory on POSH (Prevention of Sexual Harassment) compliance and Internal Committee (IC) support.'
        ]
      },
      {
        area: 'Performance Enablement & PIP Frameworks',
        items: [
          'Structured Performance Improvement Plan (PIP) protocols with objective milestone tracking.',
          'Managerial coaching for conducting compassionate, constructive feedback discussions.',
          'Transformation of annual appraisal fatigue into continuous performance dialogue.'
        ]
      },
      {
        area: 'Disciplinary Governance & Engagement',
        items: [
          'Legally defensible documentation templates for show-cause notices and inquiry proceedings.',
          'Employee pulse survey frameworks and actionable sentiment analytics.',
          'Culture preservation initiatives during organizational restructuring or mergers.'
        ]
      }
    ],
    scopeAndApproach: 'We provide strategic guidance and operational balance. Working closely with business leaders and people managers, we resolve workplace impasses with empathy and legal precision, safeguarding organizational harmony without sacrificing operational standards.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Cultural Sentiment Scoping',
        description: 'Analyzing grievance histories, exit interview themes, leadership dynamics, and engagement trends.'
      },
      {
        stage: 'Assess',
        title: 'Procedural Vulnerability Review',
        description: 'Evaluating current disciplinary protocols, performance dispute mechanisms, and committee readiness.'
      },
      {
        stage: 'Design',
        title: 'Effectiveness & Relations Framework',
        description: 'Crafting comprehensive grievance SOPs, PIP blueprints, POSH guidelines, and manager enablement toolkits.'
      },
      {
        stage: 'Implement',
        title: 'Managerial Enablement Workshops',
        description: 'Conducting immersive workshops for managers on conflict mediation, constructive feedback, and fair documentation.'
      },
      {
        stage: 'Strengthen',
        title: 'Ongoing Advisory & Health Monitoring',
        description: 'On-call advisory support for complex case resolution and periodic pulse review check-ins.'
      }
    ],
    expectedOutcomes: [
      'Equitable, legally protected resolution of workplace grievances and disputes.',
      'Consistent, objective management of underperformance without acrimony.',
      'Higher psychological safety and measurable improvements in team engagement scores.',
      'Protected organizational reputation through procedurally sound HR governance.'
    ],
    relatedServiceSlugs: [
      'people-advisory-organisation-setup',
      'corporate-training-capability-development'
    ]
  },
  {
    id: 'talent',
    categoryNumber: '05',
    slug: 'talent-acquisition-talent-management',
    title: 'Talent Acquisition & Talent Management',
    shortSubtitle: 'Recruitment strategy, critical hiring, talent mapping, succession planning and retention',
    discoverySummary: 'Recruitment strategy, critical hiring, talent development and succession planning.',
    heroTagline: 'Attracting, cultivating, and retaining the strategic talent that propels your business ahead.',
    iconName: 'Target',
    challengeHeadline: 'Hiring the wrong personnel costs fortunes; failing to retain key leaders costs the future.',
    challengesAddressed: [
      'Protracted time-to-hire for critical leadership and specialized roles slowing down execution.',
      'Reliance on reactive, transactional recruiters who fail to articulate your employer value proposition.',
      'Premature attrition among high-potential employees within their first 12 months.',
      'Absence of succession planning for pivotal business-critical roles.',
      'Subjective interview processes resulting in inconsistent hiring quality and cultural misalignment.'
    ],
    whyItMatters: [
      'In a competitive commercial landscape, access to superior talent is the ultimate competitive differentiator. Yet most organisations treat recruitment as an administrative panic rather than an ongoing strategic capability.',
      'Merit & Beyond transforms talent management into a proactive discipline. We help companies articulate a compelling employer brand, design competency-based selection processes, and build retention pathways that safeguard institutional knowledge.'
    ],
    specificSupport: [
      {
        area: 'Strategic Recruitment & Critical Hiring Advisory',
        items: [
          'Design of structured interview processes, competency rubrics, and candidate scorecards.',
          'Advisory on executive search, leadership profiling, and market compensation expectations.',
          'Employer Value Proposition (EVP) development and candidate journey optimization.'
        ]
      },
      {
        area: 'Talent Mapping & Pipeline Building',
        items: [
          'Competitor talent mapping for high-impact functional and leadership roles.',
          'Creation of proactive talent communities to reduce critical-role vacancies.',
          'Assessment center frameworks for evaluating situational judgment and culture add.'
        ]
      },
      {
        area: 'Succession Planning & Retention Architecture',
        items: [
          'Identification of single-point-of-failure roles and 9-box talent matrix deployment.',
          'High-potential (HiPo) identification, career pathway mapping, and retention roadmaps.',
          'Stay-interview frameworks and early-warning attrition mitigation strategies.'
        ]
      }
    ],
    scopeAndApproach: 'We do not operate as a volume resume clearinghouse. We partner as strategic talent advisors, restructuring your internal hiring capability, training your hiring managers to evaluate candidates rigorously, and designing succession plans that ensure business continuity.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Business Horizon & Talent Demands',
        description: 'Mapping your commercial milestones against required competencies, critical headcount needs, and existing leadership bench strength.'
      },
      {
        stage: 'Assess',
        title: 'Hiring Funnel & Bench Diagnostics',
        description: 'Auditing current recruitment velocity, source-of-hire metrics, candidate drop-offs, and flight-risk leadership dependencies.'
      },
      {
        stage: 'Design',
        title: 'Talent Strategy & Selection Architecture',
        description: 'Developing tailored EVP narratives, structured evaluation rubrics, onboarding roadmaps, and succession frameworks.'
      },
      {
        stage: 'Implement',
        title: 'Hiring Capability Rollout',
        description: 'Training hiring managers on behavioral interviewing, launching scorecard systems, and running talent-mapping sprints.'
      },
      {
        stage: 'Strengthen',
        title: 'Retention & Succession Review',
        description: 'Facilitating bi-annual succession roundtables and reviewing key-talent retention metrics with the executive board.'
      }
    ],
    expectedOutcomes: [
      'Substantial reduction in time-to-productivity and new-hire churn.',
      'Consistent, objective hiring decisions driven by structured competency scorecards.',
      'Documented, active succession pipelines for all mission-critical roles.',
      'A differentiated employer brand that attracts top-tier talent organically.'
    ],
    relatedServiceSlugs: [
      'people-advisory-organisation-setup',
      'corporate-training-capability-development'
    ]
  },
  {
    id: 'training',
    categoryNumber: '06',
    slug: 'corporate-training-capability-development',
    title: 'Corporate Training & Capability Development',
    shortSubtitle: 'Leadership, managerial effectiveness, communication, people operations and customised training',
    discoverySummary: 'Leadership development, manager effectiveness and corporate training.',
    heroTagline: 'Transforming technical experts into impactful leaders and building resilient workforce capabilities.',
    iconName: 'GraduationCap',
    challengeHeadline: 'Promoting top performers without managerial training creates frustrated teams and disengaged managers.',
    challengesAddressed: [
      'First-time and mid-level managers struggling to transition from individual contributors to team leaders.',
      'Communication breakdowns between cross-functional teams impairing velocity and morale.',
      'Superficial, one-day training workshops that result in zero lasting behavioral change.',
      'HR and operations teams lacking deep knowledge of labour compliance, payroll intricacies, and modern HR tools.',
      'Absence of tailored capability roadmaps aligned to organisational scaling requirements.'
    ],
    whyItMatters: [
      'Organisations do not rise to the level of their aspirations; they fall to the level of their managerial capability. Employees join companies for their brand and vision, but they leave managers who lack communication, empathy, and leadership skills.',
      'Our capability development programmes are grounded in adult learning principles, real workplace scenarios, and measurable behavioral milestones. We build enduring organizational muscle that delivers continuous commercial value.'
    ],
    specificSupport: [
      {
        area: 'Leadership & Managerial Effectiveness',
        items: [
          'Emerging Leaders transition programmes for first-time and mid-level managers.',
          'Crucial conversations: feedback delivery, performance reviews, and delegation.',
          'Strategic decision-making, emotional intelligence, and executive presence coaching.'
        ]
      },
      {
        area: 'Functional HR & Operations Mastery',
        items: [
          'Practical training on statutory labour laws, inspections, and compliance documentation.',
          'Payroll masterclasses: tax structures, statutory filings, and error-free processing.',
          'People operations excellence: employee lifecycle workflow optimization.'
        ]
      },
      {
        area: 'Customised Corporate Capability Programmes',
        items: [
          'Cross-functional collaboration, active listening, and business communication workshops.',
          'Culture reinforcement and customer-centric mindset workshops.',
          'Post-training coaching pods, behavioral reinforcement tools, and impact metrics.'
        ]
      }
    ],
    scopeAndApproach: 'We eschew generic slide-deck lectures in favor of interactive case studies, role-play simulations, and cohort-based application projects. Every programme is contextualized to your specific industry dynamics and company challenges.',
    fiveStageApproach: [
      {
        stage: 'Understand',
        title: 'Learning Needs Analysis (LNA)',
        description: 'Conducting capability interviews with leadership and participants to diagnose exact behavioral and skill gaps.'
      },
      {
        stage: 'Assess',
        title: 'Baseline Competency Evaluation',
        description: 'Measuring pre-training capability baselines through 180/360-degree feedback and situational assessments.'
      },
      {
        stage: 'Design',
        title: 'Curriculum & Case Customization',
        description: 'Developing bespoke learning modules, real-world case simulations, and actionable participant toolkits.'
      },
      {
        stage: 'Implement',
        title: 'Interactive Delivery & Practicums',
        description: 'Facilitating high-impact interactive workshops supported by peer accountability pods and practical on-the-job assignments.'
      },
      {
        stage: 'Strengthen',
        title: 'Behavioral Impact & Refresher Reviews',
        description: 'Conducting 60-day and 90-day impact evaluations with managers to measure sustained behavior shift and ROI.'
      }
    ],
    expectedOutcomes: [
      'Empowered, confident people managers who inspire performance and retain high performers.',
      'Clear, empathetic communication across departments reducing operational bottlenecks.',
      'Internal HR and operational teams possessing mastery over compliance and payroll execution.',
      'Measurable behavioral shift tracked through structured post-programme evaluation.'
    ],
    relatedServiceSlugs: [
      'employee-relations-workplace-effectiveness',
      'talent-acquisition-talent-management'
    ]
  }
];
