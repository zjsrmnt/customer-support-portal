import { Hero } from "../components/sections/Hero.jsx";
import { FeaturesGrid } from "../components/sections/FeaturesGrid.jsx";
import { HowItWorks } from "../components/sections/HowItWorks.jsx";
import { SupportStrip } from "../components/sections/SupportStrip.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <SupportStrip />
    </>
  );
}
