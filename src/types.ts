export interface Project {
  id: string;
  title: string;
  category: 'python' | 'web' | 'java' | 'tools';
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDetails: string[];
  runCommand?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: 'Currently pursuing' | 'Completed';
  affiliation?: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  overview: string;
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface SecurityMilestone {
  step: string;
  title: string;
  focus: string;
  topics: string[];
  status: 'In Progress' | 'Continuous Lab Practice' | 'Core Competency';
}

export interface WhatIDoItem {
  title: string;
  description: string;
  iconName: 'code' | 'globe' | 'shield' | 'cpu';
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface SiteAnalytics {
  totalVisits: number;
  uniqueSessions: number;
  resumeDownloads: number;
  resumeViews: number;
  projectsViewed: Record<string, number>;
  contactSubmissions: number;
  lastActive: string;
  timeOnSiteSeconds: number;
}
