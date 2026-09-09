import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark' || isScrolled;
  const textColor = isDark ? 'text-primary' : 'text-white';
  const bgColor = isScrolled ? 'bg-secondary/90 backdrop-blur-md shadow-sm' : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif text-2xl md:text-3xl tracking-wide ${textColor}`}>NEXORA</span>
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-sans ${isDark ? 'text-text-muted' : 'text-white/70'}`}>
            Ideas. People. Impact.
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav className={`hidden md:flex gap-8 font-sans text-sm tracking-wide ${textColor}`}>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#journey" className="hover:opacity-70 transition-opacity">Journey</a>
          <a href="#events" className="hover:opacity-70 transition-opacity">Events</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-secondary shadow-lg border-t border-gray-200 md:hidden flex flex-col p-6 gap-6 font-sans text-lg text-primary">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a>
          <a href="#events" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
