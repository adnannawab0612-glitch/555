import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary text-primary border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6">Let's Connect</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              Be Part of<br />What's Next
            </h2>
            <p className="text-base md:text-lg font-sans text-text-muted leading-relaxed max-w-md mb-12">
              Partner with us, attend an event or explore collaboration opportunities. We'd love to hear from you.
            </p>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border border-gray-300 p-4 font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border border-gray-300 p-4 font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-transparent border border-gray-300 p-4 font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-secondary font-sans text-sm font-medium py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center lg:justify-start">
              <a href="#" className="flex items-center gap-3 font-sans text-sm hover:text-text-muted transition-colors">
                <MessageSquare size={18} className="text-text-muted" />
                Chat on WhatsApp
              </a>
              <a href="#" className="flex items-center gap-3 font-sans text-sm hover:text-text-muted transition-colors">
                <MapPin size={18} className="text-text-muted" />
                View on Map
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
