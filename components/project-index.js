import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'Jottings',
    project_url: 'https://jottings.dev/',
    github_url: 'https://github.com/Zac-Zajdel/jottings',
    description: 'Create advanced documents and share them with your team!',
  },
]

export default function ProjectIndex() {
  return (
    <>
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
      </div>

      <div className="flex justify-center pt-2">
        <div className="overflow-hidden relative border rounded-xl hover:bg-gray-100/40 dark:hover:bg-zinc-800/10 md:gap-8 dark:hover:border-zinc-400/50 border-zinc-600">    
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between">
                    <a
                      href={project.project_url}
                      target="_blank"
                    >
                      <div className="flex text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-white sm:text-4xl transform transition duration-300 hover:scale-110">
                        {project.title}
                      </div>
                    </a>
                    <a
                      href={project.github_url}
                      target="_blank"
                    >
                      <FaGithub className="h-10 w-10 transform transition duration-300 hover:scale-110" />
                    </a>
                  </div>
                  <p className="mt-4 leading-8 duration-150 text-gray-900 dark:text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      className="transform transition duration-300 hover:scale-110"
                    >
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 mr-2">Next.js</span>
                    </a>
                    <a
                      href="https://planetscale.com/"
                      target="_blank"
                      className="transform transition duration-300 hover:scale-110"
                    >
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300 mr-2">PlanetScale</span>
                    </a>
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      className="transform transition duration-300 hover:scale-110"
                    >
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300 mr-2">TailwindCSS</span>
                    </a>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
