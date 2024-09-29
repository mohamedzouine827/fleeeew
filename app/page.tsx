import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Platforms from "./_components/Platforms";
import CTA from "./_components/CTA";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <HeroSection />
      <Platforms/>
      <CTA/>
    </section>
  );
}
