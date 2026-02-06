import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ROICalculator from '@/components/ROICalculator';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="bg-white text-black antialiased selection:bg-black selection:text-white overflow-x-hidden">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ROICalculator />
      <ContactForm />
    </div>
  );
}
