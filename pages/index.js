import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ForWho from '../components/ForWho';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import TransferCompetence from '../components/TransferCompetence';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ForWho />
      <Services />
      <Expertise />
      <TransferCompetence />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
