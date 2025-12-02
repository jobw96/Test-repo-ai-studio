import React from 'react';
import { SKILLS } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative border-white/10 border-t pt-24 pb-24">
      <div className="bg-gradient-to-r from-white/10 to-transparent max-w-6xl mx-auto rounded-3xl p-1">
        <div className="bg-black/40 backdrop-blur-sm rounded-[22px] p-6 md:p-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Image & Bio */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="w-full h-80 bg-neutral-800 rounded-xl overflow-hidden ring-1 ring-white/10 mb-8 relative group">
                  <img 
                    src="https://picsum.photos/600/800?random=about" 
                    alt="Alex Chen Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl leading-[1.05] font-medium tracking-tight mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-white/80">
                  <p>
                    I'm a passionate creative developer with 5+ years of experience crafting digital experiences that seamlessly blend aesthetics with functionality. My journey began in graphic design, but I quickly fell in love with the endless possibilities of code.
                  </p>
                  <p>
                    Today, I specialize in building modern web applications, designing intuitive user interfaces, and creating interactive experiences that captivate and engage users. I believe great design should be accessible, performant, and meaningful.
                  </p>
                  <p>
                    When I'm not coding or designing, you'll find me exploring new creative techniques, contributing to open-source projects, or sharing knowledge with the design and development community.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Skills Grid */}
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 gap-4">
                {SKILLS.map((skillGroup, index) => (
                  <FadeIn key={skillGroup.title} delay={index * 50}>
                    <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-5 h-full hover:bg-white/[0.05] transition-colors">
                      <h3 className="text-base font-medium mb-4 flex items-center gap-2 text-white/90">
                        <skillGroup.icon className="w-4 h-4 text-white/70" />
                        {skillGroup.title}
                      </h3>
                      <div className={skillGroup.title === 'Tools & Software' || skillGroup.title === 'Interests' || skillGroup.title === 'Recognition' || skillGroup.title === 'Tech Stack' ? 'flex flex-wrap gap-2' : 'space-y-3'}>
                        {skillGroup.items.map((item, idx) => {
                          if (skillGroup.title === 'Tools & Software' || skillGroup.title === 'Interests' || skillGroup.title === 'Recognition' || skillGroup.title === 'Tech Stack') {
                             return (
                                <span key={idx} className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">
                                    {item.label}
                                </span>
                             );
                          }
                          return (
                            <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                              <span className="text-xs text-white/80">{item.label}</span>
                              {item.subLabel && <span className="text-xs text-white/50 text-right ml-2">{item.subLabel}</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
