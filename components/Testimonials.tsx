import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative border-white/10 border-t pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-white/70">
              Testimonials from some amazing people I've had the pleasure to work with
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 h-full flex flex-col hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-white/80 mb-6 leading-relaxed flex-1 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">{testimonial.author}</p>
                    <p className="text-xs text-white/60">{testimonial.role}</p>
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
