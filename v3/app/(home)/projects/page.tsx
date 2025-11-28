import ProjectCard from '@/components/card/project-card';
import PageTitle from '@/components/core/page-title';
import PageWrapper from '@/components/core/page-wrapper';
import { projects } from '@/types/projects';

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageTitle title="Projects" />
      <div className="grid auto-rows-fr grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
