import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { PartnerChallenges } from "@/components/sections/PartnerChallenges";
import { Challenges } from "@/components/sections/Challenges";
import { ApproachInPractice } from "@/components/sections/ApproachInPractice";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Portfolio } from "@/components/sections/Portfolio";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BlueCta } from "@/components/sections/BlueCta";
import { Services } from "@/components/sections/Services";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <main>
        <PartnerChallenges />
        <Challenges />
        <ApproachInPractice />
        <CtaBanner />
        <Portfolio />
        <Testimonials />
        <ConsultationForm />
        <ProcessSteps />
        <BlueCta />
        <Services />
        <Faq />
        <ConsultationForm 
          label="DOWIEDZ SIĘ JAK ZWIĘKSZYĆ SWOJĄ SPRZEDAŻ. POROZMAWIAJMY!" 
          heading="Najwyższy czas zrobić coś dobrego!" 
        />
      </main>
    </>
  );
}
