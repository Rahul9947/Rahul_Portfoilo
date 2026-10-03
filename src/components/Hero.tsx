import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  FileDown,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Terminal,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { downloadResumePDF } from '../utils/pdfResume';
import { trackEvent } from '../utils/analytics';

export const Hero: React.FC = () => {
  const roles = [
    'MCA Student',
    'Software Developer',
    'Cybersecurity Enthusiast',
    'Python & Java Builder'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    trackEvent('resume_download');
    downloadResumePDF();
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:py-24 overflow-hidden">
      {/* Subtle background tech ambient gradients */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Identity & Intent */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Location & Institution unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Srinath University</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Jamshedpur, Jharkhand</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>

              {/* Sub-headline with typing indicator */}
              <div className="mt-3 flex items-center min-h-[32px] sm:min-h-[36px]">
                <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  <span>{displayText}</span>
                  <span className="inline-block w-0.5 h-5 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse align-middle" />
                </p>
              </div>
            </div>

            {/* Required exact short introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-800 transition-all focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <FileDown className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Professional Social Links */}
            <div className="pt-3 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title="GitHub: github.com/rahulsharma-dev"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title="LinkedIn: linkedin.com/in/rahulsharma-mca"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Terminal Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl overflow-hidden backdrop-blur-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    rahul@srinath-workstation:~
                  </span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-4 text-slate-700 dark:text-slate-300">
                <div className="space-y-1">
                  <p className="text-slate-400 dark:text-slate-500 text-xs"># Developer profile inspect</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">$ whoami --academic</p>
                  <div className="pl-3 border-l-2 border-slate-200 dark:border-slate-800 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <p><span className="text-slate-400">Name:</span> Rahul Sharma</p>
                    <p><span className="text-slate-400">Degree:</span> Master of Computer Applications (MCA)</p>
                    <p><span className="text-slate-400">Campus:</span> Srinath University, Jamshedpur</p>
                    <p><span className="text-slate-400">Prior:</span> BCA (Jamshedpur Co-operative College)</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">$ cat current_focus.json</p>
                  <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Primary:</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">Python · Flask · Java · C++</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Hardware & Bridge:</span>
                      <span className="text-slate-800 dark:text-slate-300">ADB · scrcpy · Linux Shell</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Security Practice:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>TryHackMe Labs</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open to Internships & Roles
                  </span>
                  <span>Jamshedpur, IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
