import React, { useEffect } from 'react';
import { PERSONAL_INFO, EDUCATION_LIST, SKILL_CATEGORIES, PROJECTS, EXPERIENCE_LIST } from '../data/portfolioData';
import { X, FileDown, Printer, MapPin, Mail, Github, GraduationCap, Briefcase, Code } from 'lucide-react';
import { downloadResumePDF } from '../utils/pdfResume';
import { trackEvent } from '../utils/analytics';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      trackEvent('resume_view');
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    trackEvent('resume_download');
    downloadResumePDF();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-doc-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span id="resume-doc-title" className="text-sm font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name} — Curriculum Vitae
            </span>
            <span className="hidden sm:inline text-xs text-slate-400">
              (A4 Standard Format)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans bg-white text-slate-900 space-y-6">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-blue-700 mt-1">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3 text-slate-400" />
                github.com/rahulsharma-dev
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              MCA student at Srinath University, Jamshedpur, passionate about software development, cybersecurity, programming, and building practical technology applications. Experienced in Python, Flask, Java, C/C++, and Linux systems, with an emphasis on disciplined problem solving, device automation (ADB), and hands-on security laboratories.
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span>Education</span>
            </div>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                    <span>{edu.degree}</span>
                    <span className="text-xs font-medium text-blue-700">{edu.status}</span>
                  </div>
                  <div className="text-xs text-slate-600 mb-1">
                    {edu.institution}{edu.affiliation ? ` (${edu.affiliation})` : ''} — {edu.location}
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc marker:text-blue-600">
                    {edu.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              <Code className="w-3.5 h-3.5 text-blue-700" />
              <span>Technical Skills</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-bold text-slate-900 sm:w-44 shrink-0">{cat.title}:</span>
                  <span className="text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Key Academic & Practical Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-slate-500 font-normal">
                      {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5 mb-1.5">
                    {proj.description}
                  </p>
                  <ul className="text-xs text-slate-700 space-y-0.5 pl-4 list-disc marker:text-blue-600">
                    {proj.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-700" />
              <span>Work Experience</span>
            </div>
            {EXPERIENCE_LIST.map((exp) => (
              <div key={exp.role}>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                  <span>{exp.role}</span>
                  <span className="text-xs font-medium text-slate-500">{exp.period}</span>
                </div>
                <div className="text-xs text-slate-600 mb-1">
                  {exp.company} — {exp.location}
                </div>
                <p className="text-xs text-slate-700 mb-1.5">
                  {exp.overview}
                </p>
                <ul className="text-xs text-slate-700 space-y-0.5 pl-4 list-disc marker:text-blue-600">
                  {exp.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
