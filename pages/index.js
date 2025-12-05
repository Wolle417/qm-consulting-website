import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ForWho from '../components/ForWho';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ForWho />
      <Services />
      <Industries />
      <Footer />
    </main>
  );
}
