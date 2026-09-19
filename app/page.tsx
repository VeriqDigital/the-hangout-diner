import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustStrip from "@/components/sections/TrustStrip";
import CleaningChecklist from "@/components/sections/CleaningChecklist";
import LifestyleSection from "@/components/sections/LifestyleSection";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <Section id="services" tone="white">
        <ServicesSection />
      </Section>
      <Section id="checklist" tone="blue">
        <CleaningChecklist />
      </Section>
      <Section id="why-us" tone="cream">
        <AboutIntro />
      </Section>
      <LifestyleSection />
      <Section id="process" tone="white">
        <ProcessSection />
      </Section>
      <Section id="service-area" tone="white" className="home-service-area">
        <LocationSection />
      </Section>
      <Section id="faq" tone="cream">
        <FAQ />
      </Section>
      <ContactCtaSection />
    </main>
  );
}
