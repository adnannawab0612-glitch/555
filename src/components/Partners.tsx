export default function Partners() {
  const partners = [
    { name: 'Microsoft', type: 'text' },
    { name: 'Google', type: 'text' },
    { name: 'Deloitte', type: 'text' },
    { name: 'IBM', type: 'text' },
    { name: 'Adobe', type: 'text' },
    { name: 'PwC', type: 'text' },
    { name: 'Infosys', type: 'text' },
    { name: 'accenture', type: 'text' }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-primary border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center md:text-left mb-16 md:mb-24">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Our Partners</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
            In Good Company
          </h2>
          <p className="text-base md:text-lg font-sans text-text-muted leading-relaxed max-w-2xl mx-auto md:mx-0">
            We are proud to collaborate with global organizations, industry leaders and innovative brands.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-24 items-center justify-items-center md:justify-items-start">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity grayscale">
               {/* Simulating logos with typography for this design since we lack SVGs */}
               <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight ${partner.name === 'accenture' ? 'lowercase' : ''} ${partner.name === 'IBM' ? 'font-serif tracking-widest' : ''}`}>
                 {partner.name === 'Adobe' && <span className="text-red-600 mr-1">A</span>}
                 {partner.name === 'Deloitte' && <span className="font-serif italic mr-1">Deloitte.</span>}
                 {partner.name !== 'Deloitte' ? partner.name : ''}
               </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
