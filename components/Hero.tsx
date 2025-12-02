import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex pt-16 items-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 w-full h-screen -z-10">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
             <iframe src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" frameBorder="0" width="100%" height="100%" title="Spline Background"></iframe>
        </div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid xl:grid-cols-12 gap-6 items-center">
          
          {/* Left: Quick info (Hidden on mobile) */}
          <div className="hidden xl:block xl:col-span-3">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-3">Specialties</h3>
                <ul className="text-sm text-white/70 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/50 rounded-full"></div>Frontend Development</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/50 rounded-full"></div>UI/UX Design</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/50 rounded-full"></div>Creative Coding</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/50 rounded-full"></div>Web Animations</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white/50 rounded-full"></div>Brand Identity</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-3">Currently</h3>
                <p className="text-sm text-white/70">Available for freelance projects & full-time opportunities</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Open to work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="xl:col-span-9">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 ring-1 ring-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for new projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-medium tracking-tight mb-6">
                Creative Developer<br />
                <span className="text-neutral-50/70">& Digital Designer</span>
              </h1>

              <p className="text-lg leading-relaxed font-normal text-white/80 max-w-2xl mb-8">
                I craft digital experiences that blend beautiful design with seamless functionality. 
                Specializing in modern web technologies, interactive animations, and user-centered design 
                that makes brands memorable and products delightful to use.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#work" className="group relative inline-flex items-center justify-center hover:scale-95 transition-transform duration-300 ease-out text-sm font-medium text-black bg-white ring-black/10 ring-1 rounded-lg py-3 px-6">
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">View My Work</span>
                    <span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">View My Work</span>
                  </span>
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>

                <Button variant="glow" onClick={() => window.location.href = '#about'}>
                  About Me
                </Button>

                <a href="mailto:hello@alexchen.dev" className="group relative inline-flex items-center justify-center gap-2 hover:bg-white/5 text-sm font-medium text-white/80 hover:text-white transition-colors py-3 px-6 rounded-lg">
                  <Mail className="w-4 h-4" />
                  <div className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">hello@alexchen.dev</span>
                    <span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">hello@alexchen.dev</span>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-md">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <p className="text-3xl font-semibold tracking-tight text-white mb-1">{stat.value}</p>
                        <p className="text-sm text-white/60">{stat.label}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
