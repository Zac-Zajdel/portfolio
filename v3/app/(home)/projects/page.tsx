import ProjectCard from '@/components/card/project-card';
import { projects } from '@/types/projects';

export default function ProjectsPage() {
  return (
    <main className="xl:px-42 container mx-auto px-5">
      <h1 className="text-4xl tracking-tight md:text-5xl">Projects</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
