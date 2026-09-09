import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Journey from './components/Journey';
import Leadership from './components/Leadership';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full bg-[#F6F5F2]">
      <Hero />
      <About />
      <Impact />
      <Journey />
      <Leadership />
      <Events />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
