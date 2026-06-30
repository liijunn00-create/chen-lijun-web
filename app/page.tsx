import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { EvidenceStudio } from "@/components/EvidenceStudio";
import { ExperienceCases } from "@/components/ExperienceCases";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SkillTags } from "@/components/SkillTags";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <CoreCapabilities />
        <EvidenceStudio />
        <ExperienceCases />
        <SkillTags />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
