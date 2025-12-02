import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="bg-black/80 backdrop-blur-xl w-full fixed top-0 z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex items-center">
              <a href="#" className="text-xl font-semibold tracking-tight text-white">Alex Cole</a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 text-sm items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm py-2 px-1 text-white/80 transition-colors duration-200"
                >
                  {link.label}
                  <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="flex gap-3 items-center">
              <a href="#" className="group relative hidden sm:inline-flex items-center hover:text-white whitespace-nowrap text-sm text-white/80 py-2 px-2">
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Resume</span>
                  <span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Resume</span>
                </span>
                <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>

              <Button variant="glow" onClick={() => window.location.href = '#contact'}>
                Let's Talk
              </Button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}
        >
          <nav className="px-6 py-6">
            <div className="space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};
