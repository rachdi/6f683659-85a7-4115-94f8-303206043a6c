import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RealisationsSection } from "@/components/RealisationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleRequestQuote = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <WelcomeModal onRequestQuote={handleRequestQuote} />
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <RealisationsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
