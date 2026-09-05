import { Nav } from '@/components/Nav';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { DifferentiatorsSection } from '@/components/DifferentiatorsSection';
import { OpenSourceSection } from '@/components/OpenSourceSection';
import { WaitlistCTASection } from '@/components/WaitlistCTASection';
import { Footer } from '@/components/Footer';
export default function Page() { return <><Nav /><main id="main"><HeroSection /><ProblemSection /><HowItWorksSection /><DifferentiatorsSection /><OpenSourceSection /><WaitlistCTASection /></main><Footer /></>; }
