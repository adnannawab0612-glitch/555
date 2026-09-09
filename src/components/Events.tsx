import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Leadership Summit 2024',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Global Innovation Forum 2023',
      location: 'Bengaluru, India',
      image: 'https://images.unsplash.com/photo-1475721025599-cf1dea74b46c?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="events" className="py-24 md:py-32 bg-secondary text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Past Events</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
              Ideas in Action
            </h2>
            <p className="text-base md:text-lg font-sans text-text-muted leading-relaxed">
              A glimpse into our past conferences and forums that have brought together industry leaders and changemakers.
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          
          {/* Main Event Feature (like a carousel item) */}
          <div className="relative group">
            <div className="aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-primary mb-6">
              <img 
                src={events[0].image} 
                alt={events[0].title}
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-between px-4 md:px-8">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <ArrowLeft size={20} className="text-primary" />
                </button>
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <span className="font-serif text-white/90 text-sm md:text-base uppercase tracking-widest text-center border-b border-white/50 pb-2 inline-block">NEXORA</span>
                </div>
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <ArrowRight size={20} className="text-primary" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg md:text-xl mb-2">{events[0].title}</h3>
              <p className="font-sans text-sm md:text-base text-text-muted">{events[0].location}</p>
            </div>
          </div>

          {/* Secondary Event */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-primary order-2 md:order-1">
               <img 
                  src={events[1].image} 
                  alt={events[1].title}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
                />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-sans font-bold text-lg md:text-xl mb-2">{events[1].title}</h3>
              <p className="font-sans text-sm md:text-base text-text-muted">{events[1].location}</p>
            </div>
          </div>

        </div>

        <div className="mt-16 md:mt-24 text-center md:text-left">
          <a href="#" className="inline-flex items-center gap-2 font-sans font-medium text-sm md:text-base border-b border-primary pb-1 hover:text-text-muted hover:border-text-muted transition-colors">
            View All Events <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
