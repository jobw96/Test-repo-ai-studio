import React from 'react';
import { Play, ExternalLink, Calendar, User } from 'lucide-react';
import { PROJECTS } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Work: React.FC = () => {
  return (
    <section id="work" className="relative border-white/10 border-t pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="sm:text-4xl md:text-5xl leading-[1.05] text-3xl font-medium tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A selection of recent projects showcasing my expertise in design and development
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <article className="group overflow-hidden hover:bg-white/[0.03] transition-all duration-500 ring-white/10 ring-1 rounded-xl h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-neutral-900 group">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex transition-transform hover:scale-110 text-black bg-white/90 w-16 h-16 border-0 rounded-full backdrop-blur-sm items-center justify-center">
                      <Play className="ml-1 w-6 h-6 fill-black" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    {project.isLive && <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded backdrop-blur-sm border border-green-500/30">Live Project</span>}
                    {project.isCaseStudy && <span className="text-xs bg-orange-500/20 text-orange-200 px-2 py-1 rounded backdrop-blur-sm border border-orange-500/30">Case Study</span>}
                    {project.isAward && <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded backdrop-blur-sm border border-purple-500/30">Award Winner</span>}
                    {project.isOpenSource && <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded backdrop-blur-sm border border-blue-500/30">Open Source</span>}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-white/90">{project.title}</h3>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
