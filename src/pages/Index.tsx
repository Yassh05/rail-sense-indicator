 import HeroSection from "@/components/HeroSection";
import PrototypeSection from "@/components/PrototypeSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import ImpactSection from "@/components/ImpactSection";
import TechStackSection from "@/components/TechStackSection";
// import TeamSection from "@/components/TeamSection";
// import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PrototypeSection />
      <FeaturesSection />
      <DemoSection />
      <ImpactSection />
      <TechStackSection />
    {/* <TeamSection /> */}
    {/* <ContactSection /> */}
    </div>
  );
};

export default Index;
