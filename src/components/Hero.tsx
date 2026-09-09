import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from './Header';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary text-secondary overflow-hidden flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2400&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent md:block hidden" />

      <Header theme="light" />

      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-24 md:pb-32 w-full pt-32">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-white/80 mb-6">
            Building Meaningful<br/>Connections
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6">
            Curating<br />
            Conversations<br />
            That Create <br className="md:hidden" />
            <span className="italic">Impact</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/80 font-sans max-w-md mb-10 leading-relaxed">
            We bring together industry leaders, innovators and changemakers through world-class conferences and forums that inspire ideas, collaboration and growth.
          </p>
          
          <button className="bg-accent text-primary font-sans text-sm md:text-base font-medium px-6 py-3 rounded flex items-center gap-2 hover:bg-accent-dark transition-colors">
            Discover Our Story <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-8 flex justify-between items-center text-white/70">
        <div className="font-sans text-sm tracking-widest">
          <span className="text-white">01</span> / 03
        </div>
        <div className="flex gap-6">
          <button className="hover:text-white transition-colors"><ArrowLeft size={20} strokeWidth={1} /></button>
          <button className="hover:text-white transition-colors"><ArrowRight size={20} strokeWidth={1} /></button>
        </div>
      </div>
    </section>
  );
}
