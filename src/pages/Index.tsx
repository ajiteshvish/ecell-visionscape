import { Scene3D } from '@/components/3d/Scene3D';
import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/Hero';
import { AboutEcell } from '@/components/sections/AboutEcell';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ParticipantsShowcase } from '@/components/sections/ParticipantsShowcase';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <AboutEcell />
        <HowItWorks />
        <ParticipantsShowcase />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
