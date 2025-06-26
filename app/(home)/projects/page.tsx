import ProjectCard from '@/components/cards/project-card';
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    title: 'Bookmark Oasis',
    url: 'https://www.bookmarkoasis.com/',
    github: 'https://github.com/Zac-Zajdel/bookmark-oasis',
    description: 'Re-imagined Browser Bookmarking.',
    slug: 'oasis',
    image: '/static/bookmark-oasis.png',
  },
  {
    title: 'Vibe Log',
    url: 'https://github.com/Zac-Zajdel/win-the-take',
    github: 'https://github.com/Zac-Zajdel/win-the-take',
    description: 'A More Personalized Standup Platform.',
    slug: 'vibe-log',
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto space-y-10">
      <h1 className="text-4xl md:px-16 md:text-5xl xl:px-44">Projects</h1>
      <div className="sm:px-5 md:px-24 lg:px-44 xl:px-72">
        <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2">
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
