import ExperienceSection from '@/components/about/experience-section';
import IntroSection from '@/components/about/intro-section';
import TechStackSection from '@/components/about/tech-stack-section';
import PageWrapper from '@/components/core/page-wrapper';

export default function AboutPage() {
  return (
    <PageWrapper className="space-y-20">
      <IntroSection />
      <TechStackSection />
      <ExperienceSection />
    </PageWrapper>
  );
}
