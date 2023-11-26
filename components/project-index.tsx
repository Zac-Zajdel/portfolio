import ProjectCard from "./project-card";

type Project = {
  title: string
  url: string 
  github: string
  description: string
  slug: string
}

const projects: Project[] = [
  {
    title: 'Jottings',
    url: 'https://jottings.dev/',
    github: 'https://github.com/Zac-Zajdel/jottings',
    description: 'Create advanced documents and share them with your team!',
    slug: 'jottings'
  },
]

export default function ProjectIndex() {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-8 text-gray-900 dark:text-gray-100">
        Projects
      </h1>

      <div className="flex justify-center pt-2">
        <div className="overflow-hidden relative border rounded-xl hover:bg-gray-100/40 dark:hover:bg-zinc-800/10 md:gap-8 dark:hover:border-zinc-400/50 border-zinc-600">    
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
