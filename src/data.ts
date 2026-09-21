import { PracticeArea, ProcessStep } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Defense representations for mere various criminal charges and investigations. Comprehensive constitutional rights safeguarding.',
    featured: false,
    iconName: 'gavel',
    highlights: [
      'White-Collar & Financial Defense',
      'Federal & State Investigations',
      'Appellate Litigation',
      'Grand Jury Representation'
    ],
    casesHandled: 1420,
    statLabel: '98.4% Favorable Resolution',
    leadAttorney: 'Marcus Sterling, Esq. (Partner)',
    fullOverview: 'Our criminal defense practice provides relentless trial advocacy for corporate officers, licensed professionals, and private individuals. We intervene in early prosecutorial stages, scrutinizing evidentiary integrity and constitutional procedures to secure pre-trial dismissals or trial acquittals.'
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    description: 'Legal advocacy for diverse enterprise needs, conducting in-depth contract structuring, M&A advisory, and regulatory compliance.',
    featured: true,
    iconName: 'briefcase',
    highlights: [
      'Cross-Border Mergers & Acquisitions',
      'Venture Capital & Securities Advisory',
      'Antitrust & Regulatory Compliance',
      'Commercial Contract Negotiation'
    ],
    casesHandled: 860,
    statLabel: '$2.8B+ Deal Volume Closed',
    leadAttorney: 'Elena Rostova, Managing Partner',
    fullOverview: 'Lexovia serves as outside general counsel to Fortune 500 enterprises, high-growth tech innovators, and private equity syndicates. From complex joint ventures to boardroom governance disputes, our attorneys deliver surgical deal execution and defensive corporate posturing.'
  },
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Expert defense strategies for variety of domestic matters. Comprehensive evidence analysis, asset division, and child custody protection.',
    featured: false,
    iconName: 'users',
    highlights: [
      'High-Net-Worth Asset Distribution',
      'Pre- & Post-Nuptial Agreements',
      'Cross-Jurisdictional Custody Disputes',
      'Discreet Private Mediation'
    ],
    casesHandled: 950,
    statLabel: '99% Confidentiality Rating',
    leadAttorney: 'Julianna Vance, Senior Counsel',
    fullOverview: 'Family legal matters demand equal measures of legal prowess and emotional discernment. We represent high-net-worth individuals, executives, and public figures in intricate marital estate dissolutions, complex trust partition, and parental custody litigation.'
  },
  {
    id: 'real-estate-law',
    title: 'Real Estate Law',
    description: 'Representation in numerous property matters, including detailed investment diligence, zoning litigation, and commercial leases.',
    featured: false,
    iconName: 'building',
    highlights: [
      'Commercial Acquisition & Financing',
      'Zoning, Land Use & Municipal Permitting',
      'Title Defect & Boundary Litigation',
      'Commercial Landlord-Tenant Advisory'
    ],
    casesHandled: 1180,
    statLabel: 'Over 14M Sq. Ft. Transacted',
    leadAttorney: 'David H. Thorne, Partner',
    fullOverview: 'Our real estate attorneys represent institutional developers, private syndicates, and corporate tenants across Manhattan and the tri-state area. We navigate municipal boards, draft airtight conveyance contracts, and defend title claims before appellate courts.'
  }
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Initial Consultation',
    description: 'Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear, actionable counsel.',
    duration: '24 - 48 Hours',
    deliverables: [
      'Confidential Case Intake & Discovery Review',
      'Statutory Limitation Check & Risk Assessment',
      'Preliminary Strategy Roadmap & Fee Transparency'
    ],
    iconName: 'file-text'
  },
  {
    step: '02',
    number: '02',
    title: 'Case Evaluation',
    description: 'We prioritize understanding your concerns and aligning with your goals. Your satisfaction and long-term security is our top priority.',
    duration: '3 - 5 Business Days',
    deliverables: [
      'Multi-Attorney Internal Review & Precedent Matching',
      'Financial & Evidentiary Discovery Audit',
      'Adversary Leverage & Vulnerability Mapping'
    ],
    iconName: 'search'
  },
  {
    step: '03',
    number: '03',
    title: 'Legal Strategy',
    description: 'We develop a customized plan to protect your rights and achieve the best possible outcome in settlement or courtroom litigation.',
    duration: 'Active Representation',
    deliverables: [
      'Pre-Trial Injunctions & Protective Filings',
      'Aggressive Settlement Negotiation Posture',
      'Full Trial Preparation & Supreme Court Readiness'
    ],
    iconName: 'shield-check'
  }
];

export const HERO_SLIDES = [
  {
    tagline: 'Your Legal Shield',
    headline: 'Experienced Attorneys, Trusted Results',
    subtext: 'Providing formidable courtroom advocacy, discrete corporate counsel, and relentless protection of your fundamental rights across New York and federal jurisdictions.',
    statNumber: '25+',
    statLabel: 'Years of Proven Legal Mastery'
  },
  {
    tagline: 'Corporate Excellence',
    headline: 'Defending Enterprise, Protecting Growth',
    subtext: 'Advising boardrooms on high-stakes transactions, regulatory compliance, and cross-border commercial litigation with surgical precision.',
    statNumber: '$2.8B+',
    statLabel: 'Institutional Transactions Closed'
  },
  {
    tagline: 'Uncompromising Defense',
    headline: 'Formidable Defense When Stakes Are Highest',
    subtext: 'When your reputation, liberty, or enterprise is on the line, Lexovia brings decades of trial experience and prosecutorial insight to bear.',
    statNumber: '98%',
    statLabel: 'Success Rate in Trial & Arbitration'
  }
];
