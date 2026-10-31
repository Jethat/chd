import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import LatestUpdates from "@/components/LatestUpdates";
import { latestUpdates } from "@/data/updates";
import SchemesSection from "@/components/SchemesSection";
import LogoMarquee from "@/components/LogoMarquee";

const notices = [...latestUpdates]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 4)
  .map((u) => u.title);

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