export default function Journey() {
  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      desc: 'Our journey started with a vision to create impactful platforms.'
    },
    {
      year: '2017',
      title: 'Expanding Horizons',
      desc: 'Brought together larger communities across industries.'
    },
    {
      year: '2020',
      title: 'Going Global',
      desc: 'Expanded to international markets.'
    },
    {
      year: '2024',
      title: 'Stronger Than Ever',
      desc: 'Continuing to drive conversations that create real change.'
    }
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-secondary text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Our Journey</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              A Decade of<br />Meaningful Impact
            </h2>
            <p className="text-base md:text-lg font-sans text-text-muted leading-relaxed max-w-md mb-12 lg:mb-0">
              From our first event to global conferences, our journey has been driven by a simple belief – bringing the right people together can create a better tomorrow.
            </p>
          </div>

          <div className="relative pl-6 md:pl-10">
            {/* Vertical Line */}
            <div className="absolute top-2 bottom-2 left-[7px] md:left-[11px] w-[1px] bg-gray-300"></div>
            
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-6 md:-left-10 top-1.5 w-3 h-3 rounded-full bg-accent-dark border-2 border-secondary shadow-[0_0_0_4px_var(--color-secondary)]"></div>
                  
                  <div className="font-serif text-xl md:text-2xl font-bold mb-2">{item.year}</div>
                  <div className="font-sans font-medium text-base md:text-lg mb-2">{item.title}</div>
                  <div className="font-sans text-sm md:text-base text-text-muted max-w-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
