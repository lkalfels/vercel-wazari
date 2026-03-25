import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Benefits } from "@/components/sections/Benefits";
import { Modalities } from "@/components/sections/Modalities";
import { Differentiators } from "@/components/sections/Differentiators";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Offer } from "@/components/sections/Offer";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProposition />
      <Benefits />
      <Modalities />
      <Differentiators />
      <HowItWorks />
      <Offer />
      <ScheduleSection />
      <Testimonials />
      <LeadForm />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
