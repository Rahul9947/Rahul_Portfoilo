import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      trackEvent('project_view', project.id);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Tagline */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>{project.category.toUpperCase()} PROJECT</span>
          <span aria-hidden="true">·</span>
          <span>ACADEMIC & PRACTICAL</span>
        </div>

        <h3 id="modal-project-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {project.tagline}
        </p>

        {/* Technologies - Unboxed metadata */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-2">
            Technology Stack
          </p>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-mono">
            {project.technologies.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="ml-2.5 text-slate-300 dark:text-slate-700">/</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Comprehensive Description */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Core Features & Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat) => (
              <div
                key={feat}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Details */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Engineering Highlights</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {project.architectureDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 font-bold">›</span>
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Run command snippet */}
        {project.runCommand && (
          <div className="mb-6">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Local Execution</span>
            </div>
            <pre className="p-3 rounded-lg bg-slate-950 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800">
              <code>{project.runCommand}</code>
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code (GitHub)</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo / Documentation</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
