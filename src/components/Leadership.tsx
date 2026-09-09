import { Linkedin } from 'lucide-react';

export default function Leadership() {
  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Riya Kapoor',
      role: 'Co-Founder & COO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Karan Sethi',
      role: 'Chief Strategy Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-primary border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          <div className="lg:col-span-2">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Our Leadership</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              Visionaries Behind Our Journey
            </h2>
            <p className="text-base md:text-lg font-sans text-text-muted leading-relaxed max-w-md">
              Meet the founders and leadership team who bring diverse experience and a shared passion for creating impactful platforms.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            {team.map((member, index) => (
              <div key={index} className="flex items-center gap-6 md:gap-8 group">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-lg md:text-xl mb-1">{member.name}</h3>
                  <p className="font-sans text-sm md:text-base text-text-muted mb-3">{member.role}</p>
                </div>
                <div>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-primary flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-colors">
                    <Linkedin size={16} className="fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
