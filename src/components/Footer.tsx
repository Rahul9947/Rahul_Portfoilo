import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left"><p className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">MCA Student · Aspiring IT Professional · Jamshedpur, India</p></div>
      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400"><a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a><a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600">Email</a><a href="#home" className="inline-flex items-center gap-1 hover:text-blue-600">Top <ArrowUp className="w-3.5 h-3.5" /></a></div>
      <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} Rahul Sharma</p>
    </div>
  </footer>
);
