export interface Industry {
  id: string;
  slug: string;
  name: string;
  pageHeading: string;
  heroTagline: string;
  operatingContext: string;
  coreThemes: string[];
  keyChallenges: string[];
  advisoryFocus: {
    title: string;
    points: string[];
  }[];
  ctaText: string;
}

export const industriesData: Industry[] = [
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality',
    pageHeading: 'People practices for service-led, multi-site operations.',
    heroTagline: 'Consistent guest experiences begin with disciplined people systems, supervisory excellence, and multi-property process governance.',
    operatingContext: 'In hospitality, employee experience and customer satisfaction are inseparable. Multi-property estates, seasonal shifts, distributed rosters, and high frontline attrition require rigorous yet empathetic people frameworks.',
    coreThemes: [
      'Staffing and workforce planning across peak and off-peak operating cycles',
      'Property and department manager capability in leading service teams',
      'Practical performance routines linked to guest satisfaction and service standards',
      'Fair, rapid employee relations and grievance redressal for distributed staff',
      'Consistent HR process governance and statutory audits across properties',
      'A respectful workplace culture that curtails frontline turnover',
    ],
    keyChallenges: [
      'High frontline attrition destabilising guest service continuity.',
      'Inconsistent manager practices between different properties or brand units.',
      'Complex statutory shifts, overtime tracking, and compliance variations.',
      'Training programs that teach theory rather than on-floor service behavior.',
    ],
    advisoryFocus: [
      {
        title: 'Workforce Planning & Rostering Governance',
        points: [
          'Demand-driven staffing models aligned with seasonal occupancy patterns.',
          'Overtime and shift governance frameworks that respect labor standards.',
          'Predictable onboarding playbooks for rapid seasonal recruitment.',
        ],
      },
      {
        title: 'Property Supervisory Capability',
        points: [
          'Coaching frontline supervisors on constructive feedback and shift briefings.',
          'Grounded grievance resolution routines to de-escalate workplace conflict early.',
          'Service-standard KPI scorecards tied to real customer feedback.',
        ],
      },
    ],
    ctaText: 'Discuss Your Hospitality Requirement',
  },
  {
    id: 'it-ites',
    slug: 'it-ites',
    name: 'IT / ITES & Technology Services',
    pageHeading: 'People systems that support scale, capability and consistency.',
    heroTagline: 'Engineering high-velocity people systems that scale technical capability, align distributed teams, and preserve culture.',
    operatingContext: 'Knowledge-work and technology firms operate in hyper-competitive talent ecosystems with complex hybrid work models, rapid project rotations, and heightened expectations for transparent career pathways.',
    coreThemes: [
      'Agile performance and talent practices aligned with sprint deliverables and client SLAs',
      'Manager and technical lead development to prevent micromanagement and burnout',
      'Streamlined HR operations and HRMS adoption across remote and hybrid staff',
      'Workforce insights and people analytics to track skills gaps and retention risks',
      'Consistent employee experience that differentiates the employer brand organically',
    ],
    keyChallenges: [
      'Engineers promoted to managers without people leadership tools or conversation frameworks.',
      'Generic OKR or KPI frameworks that developers view as administrative friction.',
      'Attrition of senior architects and product leads due to opaque progression paths.',
      'Siloed knowledge teams struggling with cross-functional accountability.',
    ],
    advisoryFocus: [
      {
        title: 'Engineering Leadership Development',
        points: [
          'Practical people toolkits for tech leads on 1-on-1s, delegation, and coaching.',
          'Clear technical versus managerial dual-career track architecture.',
          'Continuous feedback mechanisms designed around sprint cadences.',
        ],
      },
      {
        title: 'Scalable HR Operations & Analytics',
        points: [
          'HRMS workflow automation to eliminate manual onboarding and leave bottlenecks.',
          'Attrition predictive modeling and skill inventory tracking.',
          'Competitive compensation structuring and equity/bonus incentive designs.',
        ],
      },
    ],
    ctaText: 'Discuss Your IT/ITES Requirement',
  },
  {
    id: 'real-estate-construction',
    slug: 'real-estate-construction',
    name: 'Real Estate & Construction',
    pageHeading: 'Clearer people processes across projects and operating teams.',
    heroTagline: 'Bridging corporate governance with on-site reality through robust role clarity, contractor oversight, and site safety culture.',
    operatingContext: 'Real estate and infrastructure development involves a complex matrix of corporate headquarters, project-site execution teams, external contractors, and statutory authorities spanning prolonged project lifecycles.',
    coreThemes: [
      'Workforce coordination between corporate headquarters and distributed construction sites',
      'Unambiguous role clarity and authority matrices for project directors and site engineers',
      'Managerial practices that enforce project milestone discipline without operational paralysis',
      'Rigorous documentation and HR process governance meeting statutory codes',
      'Site/office consistency in HR policies, compensation standards, and safety accountability',
    ],
    keyChallenges: [
      'Wide disconnect between corporate HR policies and project-site reality.',
      'Contract labour compliance exposures with third-party labor contractors.',
      'Unclear handoffs between design, procurement, and site execution teams.',
      'High churn of specialized engineering talent and project managers.',
    ],
    advisoryFocus: [
      {
        title: 'Site-to-HQ Governance & Authority Matrices',
        points: [
          'Delegation of Authority (DoA) matrices tailored to project expenditure and hiring.',
          'Standardised site operational handbooks for site managers and administrative staff.',
          'Cross-site performance reviews linked to project timelines and safety milestones.',
        ],
      },
      {
        title: 'Contractor & Labour Compliance Audits',
        points: [
          'Third-party manpower vendor audits for statutory PF, ESI, and safety records.',
          'Risk mitigation blueprints to protect principal employer liability.',
          'Structured safety awareness and site supervisory briefings.',
        ],
      },
    ],
    ctaText: 'Discuss Your Real Estate Requirement',
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial Operations',
    pageHeading: 'Stronger people processes for operational environments.',
    heroTagline: 'Elevating shop-floor discipline, supervisory capability, and industrial harmony through structured HR systems.',
    operatingContext: 'Manufacturing environments operate under strict production schedules, shift handovers, machinery safety norms, and intricate statutory labor frameworks where operational downtime directly impacts the bottom line.',
    coreThemes: [
      'Workforce practices supporting plant productivity, shift discipline, and safety standards',
      'Shop-floor supervisor capability in conflict resolution and operator engagement',
      'Objective performance routines connecting plant targets to shift bonuses and appraisals',
      'Constructive employee relations and proactive grievance redressal to prevent industrial disputes',
      'Consistent, audit-ready HR administration across permanent and contract workers',
    ],
    keyChallenges: [
      'First-line supervisors struggling to maintain discipline without creating worker friction.',
      'Disparate wage structures and incentive schemes that cause shop-floor friction.',
      'Extensive statutory register burdens across factory inspections and safety norms.',
      'Difficulty in attracting and retaining qualified technical and maintenance specialists.',
    ],
    advisoryFocus: [
      {
        title: 'Supervisor Capability & Shop-Floor Culture',
        points: [
          'Practical communication training for shift supervisors on constructive reprimands and recognition.',
          'Daily shift standup briefing playbooks to align on safety and production quotas.',
          'Transparent, rule-based attendance and leave management systems.',
        ],
      },
      {
        title: 'Statutory Vigilance & Industrial Relations',
        points: [
          'Comprehensive Factory Act and contract labour compliance health-checks.',
          'Structured works committee and grievance redressal mechanisms.',
          'Skill matrix mapping to support multi-skilling and cross-line deployment.',
        ],
      },
    ],
    ctaText: 'Discuss Your Manufacturing Requirement',
  },
];
