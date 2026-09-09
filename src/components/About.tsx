import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">About Us</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              More Than Events, A Platform for Progress
            </h2>
            <p className="text-base md:text-lg font-sans text-text-muted mb-10 leading-relaxed max-w-lg">
              We are a leading event and conference company dedicated to creating meaningful platforms for knowledge exchange, collaboration and real-world impact.
            </p>
            <button className="bg-primary text-secondary font-sans text-sm md:text-base font-medium px-6 py-3 flex items-center gap-2 hover:bg-primary/90 transition-colors">
              Our Journey <ArrowRight size={18} />
            </button>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" 
                alt="Conference event" 
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
              />
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-col text-white font-sans text-xl md:text-2xl font-medium tracking-wide">
                <span>PEOPLE</span>
                <span>IDEAS</span>
                <span>INDUSTRIES</span>
                <span>IMPACT</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
