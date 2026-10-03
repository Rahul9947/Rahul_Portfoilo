import React from 'react';
import { SECURITY_JOURNEY } from '../data/portfolioData';
import { ShieldCheck, Terminal, Network, Search, Lock, Flag } from 'lucide-react';

export const Cybersecurity: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Network className="w-4 h-4 text-blue-500" />;
      case 1:
        return <Terminal className="w-4 h-4 text-emerald-500" />;
      case 2:
        return <Lock className="w-4 h-4 text-indigo-500" />;
      case 3:
        return <Search className="w-4 h-4 text-amber-500" />;
      case 4:
        return <Flag className="w-4 h-4 text-rose-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section id="cybersecurity" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Hands-on Security Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cybersecurity Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Developing practical cybersecurity knowledge through hands-on learning, network packet analysis, Linux system hardening, web security fundamentals, and self-paced security laboratories.
          </p>
        </div>

        {/* Learning philosophy callout banner */}
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Defensive Mindset & Systematic Learning
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Rather than relying on ungrounded claims, my focus is mastering computer networking fundamentals, Linux command-line fluency, web application request architectures, and guided TryHackMe security scenarios.
              </p>
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shrink-0">
              Active Platform: TryHackMe
            </div>
          </div>
        </div>

        {/* Visual Learning Journey Timeline */}
        <div className="relative">
          {/* Vertical timeline spine line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800"
          />

          <div className="space-y-6">
            {SECURITY_JOURNEY.map((milestone, idx) => (
              <div
                key={milestone.step}
                className="relative flex flex-col md:flex-row items-start gap-6 group"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                  {getStepIcon(idx)}
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        <span>PHASE {milestone.step}</span>
                        <span aria-hidden="true">·</span>
                        <span>{milestone.focus}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {milestone.title}
                      </h3>
                    </div>

                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {milestone.status}
                    </span>
                  </div>

                  {/* Topics list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {milestone.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="text-blue-500 mt-0.5 font-bold">›</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
