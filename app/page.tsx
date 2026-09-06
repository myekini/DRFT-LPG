import { Nav } from '@/components/Nav';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { DifferentiatorsSection } from '@/components/DifferentiatorsSection';
import { OpenSourceSection } from '@/components/OpenSourceSection';
import { ComingSoonRoadmap } from '@/components/ComingSoonRoadmap';
import { WaitlistCTASection } from '@/components/WaitlistCTASection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <DifferentiatorsSection />
        <OpenSourceSection />
        <ComingSoonRoadmap />
        <WaitlistCTASection />
      </main>
      <Footer />
    </>
  );
}
