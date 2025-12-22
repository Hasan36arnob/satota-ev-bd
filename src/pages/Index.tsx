import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Products } from '@/components/sections/Products';
import { WhyUs } from '@/components/sections/WhyUs';
import { Locations } from '@/components/sections/Locations';
import { Features } from '@/components/sections/Features';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyUs />
        <Locations />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
