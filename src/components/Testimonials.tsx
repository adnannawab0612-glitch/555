export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary text-primary border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Testimonials</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              Trusted by Leaders.<br />Valued by Many.
            </h2>
          </div>

          <div className="bg-[#F0EBE1] p-8 md:p-12 relative">
            <span className="text-6xl text-accent-dark font-serif leading-none absolute top-8 left-8 md:top-12 md:left-12 opacity-50">"</span>
            <div className="pt-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-primary mb-12">
                "An exceptional platform for meaningful discussions and networking. The quality of speakers and the audience is unmatched."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-300 shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                      alt="Rohit Malhotra"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base">Rohit Malhotra</h4>
                    <p className="font-sans text-xs md:text-sm text-text-muted">VP, Microsoft</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
