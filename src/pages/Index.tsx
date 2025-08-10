import WebGLErrorBoundary from '@/components/3d/WebGLErrorBoundary';
import { Scene3D } from '@/components/3d/Scene3D';
import { AnimatedBackground } from '@/components/3d/AnimatedBackground';
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
      {/* 3D Background Scene with Fallback */}
      <WebGLErrorBoundary fallback={<AnimatedBackground />}>
        <Scene3D />
      </WebGLErrorBoundary>
      
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
