export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  isFeatured?: boolean;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
  relevantCta: {
    text: string;
    href: string;
  };
}

export const insightCategories = [
  'All Insights',
  'Strategic HR & Business Performance',
  'HR Operations & Transformation',
  'Compensation & Performance',
  'Leadership & Organisational Effectiveness',
  'Labour Compliance & Workplace Practices',
  'Professional Learning & Capability',
];

export const insightsData: InsightArticle[] = [
  {
    id: 'art-01',
    slug: 'why-performance-management-fails-even-when-the-process-exists',
    title: 'Why Performance Management Fails Even When the Process Exists',
    excerpt: 'Most organisations invest in software, goal forms, and annual reviews—yet managers still dread appraisals and employees feel unvalued. Here is why the process fails in practice and how to fix the underlying human execution.',
    category: 'Leadership & Organisational Effectiveness',
    tags: ['Performance Management', 'Goal Setting', 'Manager Capability'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'People & Business Advisory Practice',
    },
    publishedAt: 'October 2026',
    readTime: '6 min read',
    isFeatured: true,
    content: {
      introduction: 'Across corporate boardrooms and business units, one complaint is virtually universal: performance appraisals are tedious, bureaucratic, and detached from daily work. Yet paradoxically, almost every company already has a documented policy, rating scales, and expensive software forms. If the formal process exists, why does the outcome fail so consistently?',
      sections: [
        {
          heading: '1. Confusing Administrative Compliance with Leadership Dialogue',
          body: [
            'The foundational failure of traditional performance management is treating the review as a data-entry exercise rather than an ongoing conversation.',
            'Managers frequently delay feedback until December or March, rushing through ratings in a single afternoon to beat HR deadlines. By that time, the feedback is either stale, defensive, or irrelevant to current priorities.',
          ],
          keyTakeaway: 'Software records ratings; managers create performance. A digital tool cannot substitute for regular, candid feedback dialogues.'
        },
        {
          heading: '2. Vague Goals Masked as KPIs',
          body: [
            'Many goal sheets are filled with loose activity statements: "Improve client responsiveness" or "Support digital initiatives". Because these are not anchored in clear outputs, quality measures, or time horizons, year-end evaluations inevitably devolve into subjective arguments.',
            'Effective goal setting requires distinguishing true business outcomes from mere busywork, ensuring both the manager and employee share the exact same definition of success from day one.',
          ],
          keyTakeaway: 'Ambiguous goals create subjective evaluations. Sharp, outcome-based measures make ratings self-evident.'
        },
        {
          heading: '3. The Missing Manager Toolkit',
          body: [
            'Most supervisors are promoted based on technical or operational competence, not their ability to facilitate difficult conversations or coach underperforming peers.',
            'Without structured frameworks—such as Situation-Behavior-Impact feedback models and clear calibration routines—managers naturally avoid friction, resulting in artificial "grade inflation" where everyone is rated above average.',
          ],
          keyTakeaway: 'Investing in manager conversation capability delivers ten times the return of buying another appraisal software feature.'
        }
      ],
      conclusion: 'Performance management succeeds when it moves off the software screen and into daily management habits. By replacing annual administrative rituals with clear goal frameworks and practical quarterly conversation routines, organisations turn performance reviews from a dreaded chore into a true business growth driver.',
    },
    relevantCta: {
      text: 'Explore the Performance Management in Practice Programme',
      href: '/learning/programmes/performance-management-in-practice',
    },
  },
  {
    id: 'art-02',
    slug: 'from-kpis-to-better-conversations',
    title: 'From KPIs to Better Conversations: What Managers Need to Do Differently',
    excerpt: 'KPIs do not manage people; managers do. Discover how progressive leaders shift from policing metrics to facilitating evidence-based, forward-looking review discussions.',
    category: 'Leadership & Organisational Effectiveness',
    tags: ['KPIs', '1-on-1s', 'Manager Enablement'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'People Advisory Practice',
    },
    publishedAt: 'October 2026',
    readTime: '5 min read',
    content: {
      introduction: 'In many businesses, the arrival of Key Performance Indicators (KPIs) is greeted with skepticism. Frontline managers see them as surveillance tools, while teams feel reduced to rows on a spreadsheet. To generate value, leaders must learn how to bridge the gap between hard numbers and meaningful coaching.',
      sections: [
        {
          heading: 'The Shift from Monitoring to Coaching',
          body: [
            'Monitoring asks: "Did you hit this number?" Coaching asks: "What systemic friction is preventing you from reaching this number, and what can we adjust?"',
            'When managers adopt an inquiry-led posture, employees stop hiding operational roadblocks and start bringing early solutions to review meetings.',
          ],
          keyTakeaway: 'Metrics indicate where friction exists; conversation discovers why it occurred and how to solve it.'
        },
        {
          heading: 'Structuring the 30-Minute Monthly Cadence',
          body: [
            'High-performing teams avoid annual marathons by maintaining a predictable 30-minute monthly checkpoint structured in three parts: 10 minutes on milestone progress, 10 minutes on blockers and resource needs, and 10 minutes on developmental commitments.',
          ],
          keyTakeaway: 'Consistency beats intensity. Twelve monthly 30-minute dialogues prevent 12 months of surprise at appraisal time.'
        }
      ],
      conclusion: 'The most sophisticated dashboard is useless if managers cannot translate numbers into productive behavior. Elevating supervisory conversation skills is the fastest path to sustainable productivity.',
    },
    relevantCta: {
      text: 'Discuss Leadership & Manager Development Support',
      href: '/contact',
    },
  },
  {
    id: 'art-03',
    slug: 'five-signs-hr-processes-have-outgrown-your-organisation',
    title: 'Five Signs Your HR Processes Have Outgrown Your Organisation',
    excerpt: 'What worked at 30 people will actively paralyze an organisation at 150. Spot the operational warning signs that your informal HR methods are dragging down company growth.',
    category: 'HR Operations & Transformation',
    tags: ['Organisation Scaling', 'HR Transformation', 'SOPs'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'People Operations Practice',
    },
    publishedAt: 'September 2026',
    readTime: '6 min read',
    content: {
      introduction: 'Early-stage agility thrives on informal trust, direct founder access, and ad-hoc problem solving. However, as headcounts surpass critical milestones—50, 100, 250 employees—processes that once felt nimble begin to buckle under administrative weight.',
      sections: [
        {
          heading: 'Sign 1: Founders Are Still Approving Leave and Expenses',
          body: [
            'When executive leadership is required to sign off on everyday operational requests, delegation of authority has broken down, creating an executive bottleneck.',
          ],
        },
        {
          heading: 'Sign 2: Inconsistent Policies Across Regional Offices or Teams',
          body: [
            'If employee entitlements, probation extensions, or notice period rules vary depending on which manager is asked, the organisation faces severe legal exposure and employee mistrust.',
          ],
        },
        {
          heading: 'Sign 3: Heavy Dependence on Offline Spreadsheets Alongside Your HRMS',
          body: [
            'If payroll inputs and leave balances are manually reconciled in disconnected Excel files every month, your software is not serving as a single source of truth.',
          ],
        },
        {
          heading: 'Sign 4: Onboarding Consists of Filling Forms with No Cultural Orientation',
          body: [
            'New hires who spend their first week chasing IT equipment and deciphering unwritten rules take twice as long to become commercially productive.',
          ],
        },
        {
          heading: 'Sign 5: Exit Interviews Reveal Recurrent, Unaddressed Manager Friction',
          body: [
            'When top talent departs for reasons that were preventable, it signals that employee relations channels and supervisor coaching are missing in action.',
          ],
        }
      ],
      conclusion: 'Recognizing these signs is not an admission of failure; it is the natural consequence of business expansion. Transitioning to structured, auditable HR processes protects leadership focus and preserves cultural health.',
    },
    relevantCta: {
      text: 'Review HR Transformation & Process Optimisation',
      href: '/services/hr-transformation',
    },
  },
  {
    id: 'art-04',
    slug: 'how-to-prepare-for-an-hr-process-review',
    title: 'How to Prepare for an HR Process Review',
    excerpt: 'A practical, step-by-step preparation guide for CEOs, HR heads, and finance leaders preparing for a comprehensive people systems and statutory audit.',
    category: 'Labour Compliance & Workplace Practices',
    tags: ['HR Audit', 'Statutory Compliance', 'Process Review'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'Compliance & Governance Practice',
    },
    publishedAt: 'September 2026',
    readTime: '5 min read',
    content: {
      introduction: 'An HR audit should never be an exercise in finger-pointing or anxiety. When designed correctly, an objective process review functions as an organisational health-check, uncovering hidden liabilities, streamlining bloated paperwork, and shielding directors from statutory risk.',
      sections: [
        {
          heading: '1. Establish Exact Scope Boundaries',
          body: [
            'Define whether the review will encompass statutory registers (PF, ESI, Minimum Wages, Gratuity), employment contracts, third-party vendor compliance, or full lifecycle SOPs. Clarity of scope ensures timely delivery.',
          ],
        },
        {
          heading: '2. Gather Core Evidence Across Entities',
          body: [
            'Collate sample offer letters, wage registers, contractor agreements, and statutory returns. Reviewing actual operational documents rather than theoretical policies is the only way to establish ground reality.',
          ],
        },
        {
          heading: '3. Prioritise by Legal and Operational Exposure',
          body: [
            'Not all discrepancies carry equal risk. A missing emergency contact in a personal file is an administrative oversight; a non-compliant wage structure or unfiled statutory return is a critical institutional exposure.',
          ],
        }
      ],
      conclusion: 'Preparation transforms a compliance audit from a stressful intrusion into an empowering strategic upgrade. It provides peace of mind to investors, board members, and executive management.',
    },
    relevantCta: {
      text: 'Explore Labour Law Compliance & HR Audits',
      href: '/services/labour-law-compliance-audits',
    },
  },
  {
    id: 'art-05',
    slug: 'what-a-useful-hr-dashboard-should-help-leaders-decide',
    title: 'What a Useful HR Dashboard Should Help Leaders Decide',
    excerpt: 'Too many HR dashboards are crowded with vanity charts that look impressive but answer no commercial questions. Here is how to design executive metrics that guide business decisions.',
    category: 'Strategic HR & Business Performance',
    tags: ['HR Analytics', 'Workforce Metrics', 'Executive Decision Making'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'People Analytics Practice',
    },
    publishedAt: 'August 2026',
    readTime: '6 min read',
    content: {
      introduction: 'In modern enterprises, leadership teams are flooded with reports: headcounts, age distributions, birthday calendars, and generic attendance rates. Yet when executive committees convene, the fundamental strategic questions remain unanswered: Where is our talent bottleneck? Are people costs growing faster than revenue? Which critical skills are at risk?',
      sections: [
        {
          heading: 'The Three Tests of a Useful People Metric',
          body: [
            'Every number on an executive dashboard must pass three tests: Is it accurate? Does it reveal a trend rather than a static snapshot? And if this number changes, does it trigger a specific business decision?',
          ],
        },
        {
          heading: 'Core Metrics that Matter to Executive Boards',
          body: [
            '1. Quality of Hire & 90-Day Regrettable Attrition Rate.',
            '2. Revenue per Employee & Full-Time Equivalent (FTE) Cost Trends.',
            '3. Critical Role Backup Coverage & Single-Point Failure Vulnerability.',
            '4. Time-to-Productivity across Revenue-Generating Roles.',
          ],
        }
      ],
      conclusion: 'The purpose of analytics is not visual ornamentation; it is commercial clarity. Strip away the vanity graphs and anchor your dashboard in decisions that protect margins and scale capability.',
    },
    relevantCta: {
      text: 'Discuss HR Technology & Analytics Architecture',
      href: '/services/hr-technology-analytics',
    },
  },
  {
    id: 'art-06',
    slug: 'difference-between-training-attendance-and-workplace-application',
    title: 'The Difference Between Training Attendance and Workplace Application',
    excerpt: 'Corporate training often ends when the PowerPoint presentation closes. Discover how to build learning experiences that change daily manager habits on the job.',
    category: 'Professional Learning & Capability',
    tags: ['Corporate Learning', 'Capability Development', 'Training ROI'],
    author: {
      name: 'Merit & Beyond Advisory Council',
      role: 'Learning & Capability Practice',
    },
    publishedAt: 'August 2026',
    readTime: '5 min read',
    content: {
      introduction: 'Companies spend considerable budgets sending managers and professionals to workshops, only to find that three weeks later, everyone has reverted to their old operating habits. High participant feedback scores ("the trainer was engaging!") frequently mask a total absence of workplace application.',
      sections: [
        {
          heading: 'The Illusion of Event-Based Learning',
          body: [
            'Learning is not an event; it is an implementation cycle. When workshops are treated as single-day offsites without pre-work, real-scenario practice, or managerial follow-through, retention evaporates within 72 hours.',
          ],
        },
        {
          heading: 'Designing for the Workplace Floor',
          body: [
            'To stick, corporate learning must be designed around real professional challenges. Participants must leave the room not just with concepts, but with usable job aids: conversation cue cards, goal templates, and personal action plans they can deploy immediately the next morning.',
          ],
        }
      ],
      conclusion: 'Effective learning connects classroom insight to observable workplace behavior. Measure learning success not by attendance registers, but by changes in operating execution.',
    },
    relevantCta: {
      text: 'Explore Practical Corporate Learning Programs',
      href: '/learning',
    },
  },
];
