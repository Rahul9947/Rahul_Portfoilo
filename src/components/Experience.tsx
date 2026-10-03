import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Briefcase, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Work History
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Current operational role and workplace contributions
          </p>
        </div>

        <div className="max-w-3xl">
          {EXPERIENCE_LIST.map((exp) => (
            <div
              key={exp.role}
              className="p-7 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {exp.overview}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Key Responsibilities & Operations
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => {
                    const isPlaceholderText = resp.startsWith('[Placeholder');

                    return (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isPlaceholderText ? 'text-amber-500' : 'text-blue-500'
                          }`}
                        />
                        <span className={isPlaceholderText ? 'italic text-slate-500 dark:text-slate-400 font-mono text-xs' : 'leading-relaxed'}>
                          {resp}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {exp.isPlaceholder && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span>Note: Exact departmental responsibilities use editable placeholders to preserve factual accuracy.</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
