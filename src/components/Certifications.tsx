import React from 'react';
import { CERTIFICATION_NOTICE } from '../data/portfolioData';
import { Award, Compass } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Credentials
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {CERTIFICATION_NOTICE.heading}
          </h2>
        </div>

        <div className="p-7 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200">
                  {CERTIFICATION_NOTICE.message}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Adhering to strict professional authenticity: Only verified and awarded credentials will be showcased here upon completion.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Targeted Certification & Curriculum Roadmaps</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {CERTIFICATION_NOTICE.plannedPathways.map((path) => (
                    <div key={path} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{path}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
