import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:hello@alexchen.dev" className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-white/60">hello@alexchen.dev</p>
                  </div>
                </a>

                <a href="tel:+1234567890" className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-white/60">+1 (555) 123-4567</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-white/80">
                  <div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-white/60">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Follow Me</h3>
              <div className="flex gap-3">
                <a href="#" className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors">
                  <Dribbble className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={200}>
            <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Project inquiry" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <Button variant="glow" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
