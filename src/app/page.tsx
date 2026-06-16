import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { PartnerChallenges } from "@/components/sections/PartnerChallenges";
import { Challenges } from "@/components/sections/Challenges";
import { ApproachInPractice } from "@/components/sections/ApproachInPractice";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PartnerLogos />
      <main>
        <PartnerChallenges />
        <Challenges />
        <ApproachInPractice />
        <Testimonials />
        {/* sekcje będą dodawane krok po kroku */}
      </main>
    </>
  );
}
