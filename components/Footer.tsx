import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">Alex Cole</span>
            <span className="text-white/60">© 2024</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            Built with passion using modern web technologies. 
            <span className="text-white/70 ml-1">Made with ❤️ in San Francisco</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
