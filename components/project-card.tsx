import { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(true)

  // Get count of views on page load
  useEffect(() => {
    setLoading(true)
    fetch(`/api/views?slug=${project.slug}`)
      .then(res => res.json())
      .then(data => {
        setCount(data.count)
        setLoading(false)
      })
  }, [])

  // When selecting the hyperlink, increment the project view count.
  function incr() {
    fetch(`/api/views?slug=${project.slug}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setCount(data.count)
      })
  }

  return (
    <article className="relative w-full h-full p-4 md:p-6">
      <div className="flex justify-between marker:items-center">
        <a
          href={project.url}
          target="_blank"
          onClick={() => incr()}
        >
          <div className="flex text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-white sm:text-4xl transition duration-300 hover:scale-110">
            {project.title}
          </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-gray-900 dark:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>

            {isLoading ? (
              <div>
                <svg
                  className="w-4 h-4 ml-1 text-gray-200 animate-spin dark:text-gray-600 fill-[#0089E5]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              ) : <CountUp end={count} duration={2.5} />
            }
          </span>
        </div>
      </div>
      <p className="mt-4 leading-8 duration-150 text-gray-900 dark:text-zinc-400 group-hover:text-zinc-300">
        {project.description}
      </p>
      <div className="flex justify-between mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
        <div>
          <a
            href="https://nextjs.org/"
            target="_blank"
          >
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 mr-2">Next.js</span>
          </a>
          <a
            href="https://planetscale.com/"
            target="_blank"
          >
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300 mr-2">PlanetScale</span>
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300 mr-2">TailwindCSS</span>
          </a>
        </div>
        <div>
          <a
            href={project.github}
            target="_blank"
          >
            <FaGithub className="h-6 w-6 mt-1 transition duration-300 hover:scale-125" />
          </a>
        </div>
      </div>
    </article>
  )
}
