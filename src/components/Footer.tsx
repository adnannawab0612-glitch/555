import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        
        <div className="mb-10 flex flex-col items-center">
          <span className="font-serif text-3xl tracking-wide text-white mb-2">NEXORA</span>
          <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-white/50">
            Ideas. People. Impact.
          </span>
        </div>

        <div className="flex gap-6 mb-12">
          <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
            <Linkedin size={16} />
          </a>
          <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
            <Instagram size={16} />
          </a>
          <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
            <Youtube size={16} />
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 font-sans text-sm text-white/70 mb-12">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="text-white/40 font-sans text-xs">
          &copy; 2024 Nexora. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
