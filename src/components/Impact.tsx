export default function Impact() {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '250+', label: 'Events Hosted' },
    { value: '50,000+', label: 'Industry Professionals' },
    { value: '500+', label: 'Speakers & Thought Leaders' }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary text-primary border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-16 md:mb-24 text-center lg:text-left max-w-md">
          Our Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200/50">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 md:p-12 border-b border-r border-gray-200/50 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-sans text-text-muted leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 max-w-3xl mx-auto text-center lg:text-left">
          <span className="text-6xl text-accent/60 font-serif leading-none block mb-6">"</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-text-muted leading-relaxed">
            "We believe in the power of conversations to create opportunities, solve real-world challenges and drive lasting impact."
          </p>
        </div>

      </div>
    </section>
  );
}
