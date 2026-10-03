import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Formal computer science degree programs and institutional learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_LIST.map((edu) => {
            const isPursuing = edu.status === 'Currently pursuing';

            return (
              <div
                key={edu.degree}
                className="relative p-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Status indicator unboxed text */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <GraduationCap className="w-4 h-4" />
                      {edu.degree}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        isPursuing
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {isPursuing ? (
                        <>
                          <Clock className="w-3.5 h-3.5" />
                          <span>Currently Pursuing</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Completed</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Institution name */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.institution}
                  </h3>

                  {/* Affiliation if applicable */}
                  {edu.affiliation && (
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      {edu.affiliation}
                    </p>
                  )}

                  {/* Location unboxed */}
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1 select-none font-bold">›</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-500">
                  <span>Verified academic record · Srinath University & Kolhan University</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
