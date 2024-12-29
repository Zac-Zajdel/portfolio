import ExperienceSection from '@/components/about/experience-section';
import IntroSection from '@/components/about/intro-section';
import TechStackSection from '@/components/about/tech-stack-section';

export default function AboutPage() {
  return (
    <main className="container mx-auto space-y-20 md:px-16 xl:px-48">
      <IntroSection />
      <TechStackSection />
      <ExperienceSection />
      <div className="mt-10" />
    </main>
  );
}
