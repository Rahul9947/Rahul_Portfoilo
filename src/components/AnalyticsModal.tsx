import React, { useState, useEffect } from 'react';
import { getStoredAnalytics, resetAnalytics } from '../utils/analytics';
import { SiteAnalytics } from '../types';
import { X, BarChart3, Eye, FileDown, MessageSquare, Clock, RefreshCw, Smartphone, Laptop } from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  const [data, setData] = useState<SiteAnalytics>(getStoredAnalytics());

  useEffect(() => {
    if (isOpen) {
      setData(getStoredAnalytics());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReset = () => {
    if (window.confirm('Reset all local engagement statistics?')) {
      const reset = resetAnalytics();
      setData(reset);
    }
  };

  const minutesOnSite = Math.floor((data.timeOnSiteSeconds || 0) / 60);
  const secondsOnSite = (data.timeOnSiteSeconds || 0) % 60;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="analytics-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close analytics"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 id="analytics-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              Visitor Engagement Analytics
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Real-time client telemetry & portfolio interaction tracking
            </p>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <Eye className="w-3.5 h-3.5 text-blue-500" />
              <span>Site Visits</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {data.totalVisits}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <FileDown className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume Downloads</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {data.resumeDownloads}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
              <span>Inquiries</span>
            </div>
            <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {data.contactSubmissions}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Session Time</span>
            </div>
            <p className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums pt-0.5">
              {minutesOnSite}m {secondsOnSite}s
            </p>
          </div>
        </div>

        {/* Project Interest Breakdown */}
        <div className="mb-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Project Interaction Breakdown
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Wireless Phone Controller (Python/ADB)</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white tabular-nums">
                {data.projectsViewed['wireless-phone-controller'] || 0} views
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Student Attendance Management (Flask/SQLite)</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white tabular-nums">
                {data.projectsViewed['student-attendance-system'] || 0} views
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Student Management System (Java OOP)</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white tabular-nums">
                {data.projectsViewed['student-management-system'] || 0} views
              </span>
            </div>
          </div>
        </div>

        {/* Environment details */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Laptop className="w-3.5 h-3.5" />
              <span>Screen: {typeof window !== 'undefined' ? `${window.innerWidth}×${window.innerHeight}` : '1440×900'}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Touch: {typeof window !== 'undefined' && 'ontouchstart' in window ? 'Active' : 'Mouse'}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Counts</span>
          </button>
        </div>
      </div>
    </div>
  );
};
