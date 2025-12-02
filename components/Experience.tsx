import React from 'react';
import { EXPERIENCE } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-lg text-white/70">
              My professional journey and key milestones
            </p>
          </FadeIn>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-white/20 last:before:h-auto group">
                {/* Timeline Dot */}
                <div className={`absolute -left-1 top-0 w-2 h-2 rounded-full ring-4 ring-black transition-colors duration-300 ${index === 0 ? 'bg-white' : 'bg-white/40 group-hover:bg-white'}`}></div>
                
                <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.06] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-medium text-white/90">{item.role}</h3>
                    <span className="text-sm text-white/60 bg-white/5 px-2 py-0.5 rounded-full">{item.period}</span>
                  </div>
                  <p className="text-sm text-white/80 font-medium mb-3">{item.company}</p>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
