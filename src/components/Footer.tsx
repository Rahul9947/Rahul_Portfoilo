import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenAnalytics: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onOpenAnalytics }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          {/* Identity & Subtitle */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              MCA Student • Developer • Cybersecurity Enthusiast
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
              Srinath University · Jamshedpur, Jharkhand, India
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright & Quick Utilities */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Rahul Sharma. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={onOpenGuide}
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Developer Setup Guide
            </button>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenAnalytics}
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Visitor Analytics
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
