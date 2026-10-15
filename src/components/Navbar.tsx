import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileDown, Moon, Sun, Menu, X } from 'lucide-react';
import { downloadResumePDF } from '../utils/pdfResume';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">{PERSONAL_INFO.name}</a>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => <a key={link.href} href={link.href} className={`py-1 transition-colors whitespace-nowrap ${activeSection === link.href.slice(1) ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'hover:text-slate-900 dark:hover:text-white'}`}>{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onToggleTheme} aria-label="Toggle color theme" title={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">{isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}</button>
          <button type="button" onClick={downloadResumePDF} className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white"><FileDown className="w-3.5 h-3.5" /><span>Resume</span></button>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>
      {mobileMenuOpen && <nav aria-label="Mobile navigation" className="lg:hidden px-4 pt-2 pb-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col gap-2">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">{link.label}</a>)}</nav>}
    </header>
  );
};
