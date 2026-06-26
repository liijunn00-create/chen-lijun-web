import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EvidenceStudio } from "@/components/EvidenceStudio";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <EvidenceStudio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
