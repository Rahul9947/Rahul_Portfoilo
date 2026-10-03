import React, { useEffect } from 'react';
import { X, BookOpen, Terminal, CheckCircle2, Copy } from 'lucide-react';

interface DeveloperGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperGuideModal: React.FC<DeveloperGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 id="guide-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Developer & Portfolio Maintenance Guide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Setup, customization, project additions, and deployment instructions
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close guide"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-8">
          {/* Section 1: Complete Project Architecture */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">1</span>
              <span>Project Structure</span>
            </h4>
            <pre className="p-3.5 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`/
├── index.html                    # SEO metadata, OpenGraph, JSON-LD Schema
├── package.json                  # Dependencies (React 19, Tailwind v4, jsPDF, Lucide)
├── vite.config.ts                # Vite build configuration
├── src/
│   ├── App.tsx                   # Main layout container & active section spy
│   ├── main.tsx                  # React DOM hydration
│   ├── index.css                 # Tailwind base styles and font configurations
│   ├── types.ts                  # Strong TypeScript models
│   ├── data/
│   │   └── portfolioData.ts      # All profile data, projects, skills, education
│   ├── utils/
│   │   ├── pdfResume.ts          # Programmatic ATS-compliant PDF resume generator
│   │   └── analytics.ts          # Client-side session and engagement tracking
│   └── components/
│       ├── Navbar.tsx            # 3-zone standard top navigation
│       ├── Hero.tsx              # Name, typing animation, intro & primary CTAs
│       ├── About.tsx             # Academic background & "What I Do" cards
│       ├── Education.tsx         # Srinath University (MCA) & Jamshedpur Co-op (BCA)
│       ├── Skills.tsx            # Categorized skills (Programming, Web, DB, Tools, Cyber)
│       ├── Projects.tsx          # Featured projects with filtering & detail dialogs
│       ├── Cybersecurity.tsx     # "Cybersecurity Journey" hands-on roadmap
│       ├── Experience.tsx        # Saizar Enterprises LR & Trip Dept role
│       ├── Certifications.tsx    # Professional learning notice & pathways
│       ├── ResumeSection.tsx     # Summary, interactive view, and PDF download
│       ├── Contact.tsx           # Validated contact form and direct coordinates
│       └── Footer.tsx            # Copyright and quick links`}
            </pre>
          </div>

          {/* Section 2: How to Run Locally */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">2</span>
              <span>How to Run Locally</span>
            </h4>
            <div className="space-y-2">
              <div className="relative">
                <pre className="p-3 rounded-lg bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                  <code>git clone https://github.com/rahulsharma-dev/portfolio.git{'\n'}cd portfolio{'\n'}npm install{'\n'}npm run dev</code>
                </pre>
                <button
                  type="button"
                  onClick={() => copyToClipboard('git clone https://github.com/rahulsharma-dev/portfolio.git\ncd portfolio\nnpm install\nnpm run dev')}
                  className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Copy command"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Open <span className="font-mono text-blue-500">http://localhost:3000</span> in your browser.
              </p>
            </div>
          </div>

          {/* Section 3: How to Replace Placeholder Information */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">3</span>
              <span>How to Replace Placeholder Information</span>
            </h4>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <p>
                All data is centralized in <code className="font-mono text-blue-500 font-semibold">src/data/portfolioData.ts</code>:
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-600 dark:text-slate-400">
                <li><strong className="text-slate-800 dark:text-slate-200">Email & Social Links:</strong> Update <code className="font-mono">PERSONAL_INFO.email</code>, <code className="font-mono">PERSONAL_INFO.github</code>, and <code className="font-mono">PERSONAL_INFO.linkedin</code>.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Work Experience:</strong> In <code className="font-mono">EXPERIENCE_LIST</code>, replace the bracketed placeholder strings <code className="font-mono">[Placeholder: ...]</code> with exact daily operational tasks at Saizar Enterprises.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Certifications:</strong> When new certifications (e.g. Security+, AWS, Python Institute) are achieved, update <code className="font-mono">CERTIFICATION_NOTICE</code>.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: How to Add New Projects */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">4</span>
              <span>How to Add Projects</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Add a new object to the <code className="font-mono text-blue-500">PROJECTS</code> array in <code className="font-mono">src/data/portfolioData.ts</code>:
            </p>
            <pre className="p-3.5 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`{
  id: 'my-new-project',
  title: 'Project Title',
  category: 'python', // 'python' | 'web' | 'java' | 'tools'
  tagline: 'Short one-line summary',
  description: 'Detailed description of the problem solved.',
  technologies: ['Python', 'FastAPI', 'Docker'],
  features: ['Feature 1', 'Feature 2'],
  githubUrl: 'https://github.com/rahulsharma-dev/...',
  liveDemoUrl: 'https://...',
  architectureDetails: ['Architecture note 1', 'Architecture note 2'],
  runCommand: 'python main.py'
}`}
            </pre>
          </div>

          {/* Section 5: How to Update or Replace Resume */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">5</span>
              <span>How to Update the Resume</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <p>
                The website includes both an <strong>in-browser generated PDF generator</strong> (<code className="font-mono text-blue-500">src/utils/pdfResume.ts</code>) and support for a static PDF file at <code className="font-mono text-blue-500">/public/resume/Rahul_Sharma_Resume.pdf</code>.
              </p>
              <p>
                When you update skills or education in <code className="font-mono">src/data/portfolioData.ts</code>, the generated PDF updates automatically!
              </p>
            </div>
          </div>

          {/* Section 6: How to Deploy */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono">6</span>
              <span>How to Deploy</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Deploy to Vercel / Netlify / GitHub Pages:
                </p>
                <pre className="p-2 rounded bg-slate-950 text-slate-200 font-mono text-[11px] overflow-x-auto">
npm run build # Generates production static output in /dist
                </pre>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Build command: <code className="font-mono">npm run build</code> · Output directory: <code className="font-mono">dist</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
