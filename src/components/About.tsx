import React from 'react';
import { PERSONAL_INFO, WHAT_I_DO } from '../data/portfolioData';
import { Code2, Globe, Shield, Cpu, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'code':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-emerald-500" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  const coreInterests = [
    'Software development',
    'Cybersecurity',
    'Web development',
    'Programming',
    'Database systems',
    'Computer networks',
    'Operating systems',
    'Problem solving',
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Profile Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {PERSONAL_INFO.aboutDetailed}
          </p>
        </div>

        {/* Core Interest Highlights without pill boxes */}
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 mb-16">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Core Areas of Interest & Study
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-700 dark:text-slate-300">
            {coreInterests.map((interest, index) => (
              <React.Fragment key={interest}>
                <span className="font-medium text-slate-900 dark:text-slate-100">{interest}</span>
                {index < coreInterests.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* What I Do - 4 Cards */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What I Do
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Key domains where I apply and build technical knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_I_DO.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-lg bg-slate-100 dark:bg-slate-800 mb-4 group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags rendered as clean unboxed text with typographic bullet separators */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={tag} className="inline-flex items-center">
                      <span>{tag}</span>
                      {idx < item.tags.length - 1 && <span className="ml-1.5 text-slate-400">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
