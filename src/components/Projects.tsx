import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Terminal, Monitor, Database } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'python' | 'web' | 'java'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const getVisualAccent = (id: string) => {
    switch (id) {
      case 'wireless-phone-controller':
        return {
          icon: <Monitor className="w-5 h-5 text-blue-500" />,
          accentColor: 'from-blue-600/10 to-indigo-600/5',
          label: 'Desktop & Hardware Automation'
        };
      case 'student-attendance-system':
        return {
          icon: <Terminal className="w-5 h-5 text-emerald-500" />,
          accentColor: 'from-emerald-600/10 to-teal-600/5',
          label: 'Full-Stack Web & Database'
        };
      case 'student-management-system':
        return {
          icon: <Database className="w-5 h-5 text-amber-500" />,
          accentColor: 'from-amber-600/10 to-orange-600/5',
          label: 'Object-Oriented System Architecture'
        };
      default:
        return {
          icon: <Terminal className="w-5 h-5 text-blue-500" />,
          accentColor: 'from-blue-600/10 to-indigo-600/5',
          label: 'Software Project'
        };
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Practical software engineering projects built with Python, Flask, Java, and low-level system tooling
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter('python')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'python'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Python & ADB
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'web'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Flask Web
            </button>
            <button
              type="button"
              onClick={() => setFilter('java')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'java'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Java OOP
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const visual = getVisualAccent(project.id);

            return (
              <div
                key={project.id}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Tech Art / Visual Banner Fallback (Anti-slop, clean SVG geometry) */}
                <div
                  className={`h-36 w-full p-5 bg-gradient-to-br ${visual.accentColor} border-b border-slate-100 dark:border-slate-800/80 flex flex-col justify-between relative`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
                      {visual.icon}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {visual.label}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 truncate">
                    {project.tagline}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Technologies - Unboxed inline text with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                      {project.technologies.map((t, i) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Key Features
                      </p>
                      {project.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="View Live Demo or Documentation"
                          aria-label={`View live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
