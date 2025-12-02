import React from 'react';
import { SERVICES } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
              What I Do
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              I offer a comprehensive range of services to help bring your digital vision to life
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 50}>
              <article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors h-full flex flex-col group">
                <div className="flex bg-white/5 w-12 h-12 border-white/10 border rounded-lg mb-4 items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-3 text-white/90">{service.title}</h3>
                <p className="text-sm text-white/70 mb-4 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
