import { SiteAnalytics } from '../types';

const STORAGE_KEY = 'rahul_portfolio_analytics';

const defaultAnalytics: SiteAnalytics = {
  totalVisits: 1,
  uniqueSessions: 1,
  resumeDownloads: 0,
  resumeViews: 0,
  projectsViewed: {
    'wireless-phone-controller': 0,
    'student-attendance-system': 0,
    'student-management-system': 0
  },
  contactSubmissions: 0,
  lastActive: new Date().toISOString(),
  timeOnSiteSeconds: 0
};

export function getStoredAnalytics(): SiteAnalytics {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultAnalytics));
      return defaultAnalytics;
    }
    return JSON.parse(raw);
  } catch {
    return defaultAnalytics;
  }
}

export function saveAnalytics(data: SiteAnalytics): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save analytics', err);
  }
}

export function trackEvent(
  eventType: 'visit' | 'resume_download' | 'resume_view' | 'project_view' | 'contact_submit' | 'time_increment',
  meta?: string
): SiteAnalytics {
  const current = getStoredAnalytics();
  current.lastActive = new Date().toISOString();

  if (eventType === 'resume_download') {
    current.resumeDownloads = (current.resumeDownloads || 0) + 1;
  } else if (eventType === 'resume_view') {
    current.resumeViews = (current.resumeViews || 0) + 1;
  } else if (eventType === 'project_view' && meta) {
    current.projectsViewed[meta] = (current.projectsViewed[meta] || 0) + 1;
  } else if (eventType === 'contact_submit') {
    current.contactSubmissions = (current.contactSubmissions || 0) + 1;
  } else if (eventType === 'time_increment') {
    current.timeOnSiteSeconds = (current.timeOnSiteSeconds || 0) + 10;
  }

  saveAnalytics(current);
  return current;
}

export function resetAnalytics(): SiteAnalytics {
  saveAnalytics(defaultAnalytics);
  return defaultAnalytics;
}
