import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <Navbar />

      {/* Side Navigation (Desktop Only) */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <nav className="space-y-6">
          <div className="space-y-4">
             {/* Manually adding Hero to nav items logic */}
             <a href="#hero" className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === 'hero' || activeSection === '' ? 'bg-white/80' : 'bg-white/30 group-hover:bg-white/60'}`}></div>
                <span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Home</span>
            </a>
            {NAV_LINKS.map(link => {
                const sectionId = link.href.substring(1);
                return (
                    <a key={link.label} href={link.href} className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === sectionId ? 'bg-white/80' : 'bg-white/30 group-hover:bg-white/60'}`}></div>
                        <span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">{link.label}</span>
                    </a>
                )
            })}
             <a href="#experience" className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === 'experience' ? 'bg-white/80' : 'bg-white/30 group-hover:bg-white/60'}`}></div>
                <span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Experience</span>
            </a>
            <a href="#testimonials" className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === 'testimonials' ? 'bg-white/80' : 'bg-white/30 group-hover:bg-white/60'}`}></div>
                <span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Testimonials</span>
            </a>
          </div>
          <div className="w-px h-12 bg-white/20 ml-0.5"></div>
          <div className="space-y-3">
            <a href="#" className="block text-white/40 hover:text-white/80 transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="block text-white/40 hover:text-white/80 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="block text-white/40 hover:text-white/80 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="block text-white/40 hover:text-white/80 transition-colors"><Dribbble className="w-4 h-4" /></a>
          </div>
        </nav>
      </aside>

      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
