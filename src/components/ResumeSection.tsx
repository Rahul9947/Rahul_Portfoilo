import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileDown, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { downloadResumePDF } from '../utils/pdfResume';
import { trackEvent } from '../utils/analytics';
import { ResumeModal } from './ResumeModal';

export const ResumeSection: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleDownload = () => {
    trackEvent('resume_download');
    downloadResumePDF();
  };

  const handleView = () => {
    trackEvent('resume_view');
    setIsViewerOpen(true);
  };

  return (
    <section id="resume" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Curriculum Vitae
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Resume
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Comprehensive overview of academic background, technical skills, projects, and work experience
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name} — Resume
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Standardized ATS-Compatible PDF · Updated 2026
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleView}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-blue-500" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Short professional summary */}
          <div className="pt-6 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Executive Profile Summary
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                MCA student at Srinath University, Jamshedpur, passionate about software development, cybersecurity, programming, and building practical technology applications. Experienced in Python, Flask, Java, C/C++, and Linux systems, with an emphasis on disciplined problem solving, device automation (ADB), and hands-on security laboratories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Active MCA Student at Srinath University</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>BCA Graduate from Jamshedpur Co-operative College</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Practical Python, Flask, Java & ADB Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Continuous TryHackMe & Networking Labs</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-mono">
              <span>File: {PERSONAL_INFO.resumeFileName}</span>
              <a
                href={PERSONAL_INFO.resumePath}
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload();
                }}
                className="hover:underline text-blue-500"
              >
                Direct Link: {PERSONAL_INFO.resumePath}
              </a>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </section>
  );
};
