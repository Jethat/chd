import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import LatestUpdates from "@/components/LatestUpdates";
import SchemesSection from "@/components/SchemesSection";
import LogoMarquee from "@/components/LogoMarquee";


export default function Home() {
  return (
    <>
      <HeroSlider />

      <AboutSection />
      <LatestUpdates />
      <SchemesSection />
      <LogoMarquee />
    </>
  );
}