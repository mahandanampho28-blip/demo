export interface PracticeArea {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  featured?: boolean;
  iconName: 'gavel' | 'briefcase' | 'users' | 'building' | 'shield' | 'landmark';
  highlights: string[];
  casesHandled: number;
  statLabel: string;
  leadAttorney: string;
  fullOverview: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  iconName: string;
}

export interface LegalShieldFeature {
  text: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  urgency: 'low' | 'medium' | 'urgent';
  caseSummary: string;
}

export interface AiCaseAnalysis {
  practiceAreaIdentified: string;
  severityLevel: 'Standard' | 'Elevated' | 'Critical';
  recommendedActions: string[];
  requiredDocuments: string[];
  estimatedTimeline: string;
  attorneyRecommendation: string;
  preliminaryAssessment: string;
}
