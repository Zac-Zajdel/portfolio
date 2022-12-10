import { getPagesUnderRoute } from 'nextra/context'
import { useState } from 'react'
import Link from 'next/link'

export default function BlogIndex() {
  const blogs = getPagesUnderRoute('/blog')
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
      <div className="relative max-w-lg">
        <input
          aria-label="Search articles"
          type="text"
          placeholder="Search articles"
          className="block w-full rounded-md border border-gray-300 dark:bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:border-gray-900 dark:text-gray-100"
          onChange={handleChange}
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      {filteredBlogs.map((page, index) => {
        // Alias `<a>` to avoid it being replaced by MDX components.
        const A = 'a'
        return (
          <div key={index}>
            <h3 className="-mb-4">
              <Link href={page.route}>
                <A style={{ color: 'inherit', textDecoration: 'none' }}>
                  {page.meta?.title || page.frontMatter?.title || page.name}
                </A>
              </Link>
            </h3>
            <p className="opacity-80 mb-2">
              {page.frontMatter?.description}{' '}
              <Link href={page.route}>Read more →</Link>
            </p>
            {page.frontMatter?.date ? (
              <span className="opacity-50 text-sm">
                {page.frontMatter.date}
              </span>
            ) : null}
          </div>
        )
      })}
    </>
  )
}
