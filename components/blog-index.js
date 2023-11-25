import { getPagesUnderRoute } from 'nextra/context'
import { useState } from 'react'
import Link from 'next/link'

export default function BlogIndex() {
  const blogs = getPagesUnderRoute('/blogs')
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  const handleChange = (event) => {
    const input = event.target.value.toLowerCase()
    setFilteredBlogs(
      blogs.filter(
        (blog) =>
          blog.meta.title.toLowerCase().match(input) ||
          blog.frontMatter.description.toLowerCase().match(input)
      )
    )
  }

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-8 text-gray-900 dark:text-gray-100">
        Blog Posts
      </h1>
      <div className="relative mt-6 flex w-[80%]">
        <input
          type="text"
          className="
            block
            w-full
            px-3
            py-2
            leading-tight
            rounded-lg
            bg-zinc-400/25
            dark:bg-zinc-800/50
            border-none
            focus:ring-1
            focus:ring-green-200
            hover:bg-opacity-5
            transition-colors
            dark:focus:bg-[#121212]"
          aria-label="Search articles"
          placeholder="Search articles..."
          spellCheck="false"
          onChange={handleChange}
        />
        <svg
          className="absolute right-3 top-1.5 h-6 w-6 bg-white dark:bg-transparent dark:bg-opacity-50 text-gray-500 dark:text-gray-400 dark:border-gray-100 dark:border-opacity-20 border rounded p-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      {filteredBlogs.map((page, index) => {
        return (
          <Link href={page.route} key={index}>
            <div className="hover:bg-zinc-200/60 dark:hover:bg-zinc-900/60 p-4 rounded-xl mt-4 cursor-pointer w-[80%]">
              <h3>
                <div style={{ color: 'inherit', textDecoration: 'none' }}>
                  {page.meta?.title || page.frontMatter?.title || page.name}
                </div>
              </h3>
              <p className="opacity-80 my-4">
                {page.frontMatter?.description}{' '}
              </p>
              {page.frontMatter?.date ? (
                <span className="opacity-60 text-sm">
                  {page.frontMatter.date}
                </span>
              ) : null}
            </div>
          </Link>
        )
      })}
    </>
  )
}
