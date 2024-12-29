import ProjectCard from '@/components/cards/project-card';
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    title: 'Bookmark Oasis',
    url: 'https://www.bookmarkoasis.com/',
    github: 'https://github.com/Zac-Zajdel/bookmark-oasis',
    description: 'Re-imagined Browser Bookmarking.',
    slug: 'oasis',
  },
  {
    title: 'Jottings',
    url: 'https://jottings.dev/',
    github: 'https://github.com/Zac-Zajdel/jottings',
    description: 'Create and publish documents with your team.',
    slug: 'jottings',
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto space-y-10">
      <h1 className="text-4xl md:px-16 md:text-5xl xl:px-48">Projects</h1>
      <div className="sm:px-5 md:px-24 lg:px-48 xl:px-72">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
