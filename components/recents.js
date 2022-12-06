import Link from 'next/link'
import { getPagesUnderRoute } from 'nextra/context'

const RecentPosts = () => {
  const threeRecentBlogs = getPagesUnderRoute('/blog').slice(0, 3)

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-8 text-gray-900 dark:text-gray-100">
        Recent Posts
      </h1>
      <div className="my-6 flex flex-wrap justify-center gap-x-8 gap-y-10">
        {threeRecentBlogs.map((page, index) => {
          return (
            <div key={index}>
              <Link href={page.route}>
                <span className="flex cursor-pointer flex-col overflow-hidden w-[250px] rounded-xl border border-solid bg-slate-800 dark:bg-black hover:border-gray-200 no-underline">
                  <div className="flex grow flex-col p-5">
                    <h2 className="m-0 text-lg font-bold leading-7 text-white dark:text-gray-200 line-clamp-3">
                      {page.meta.title}
                    </h2>
                    <p className="text-white dark:text-gray-200 mb-6 text-xs font-bold leading-4 line-clamp-2 overflow-hidden text-ellipsis">
                      {page.frontMatter.description}
                    </p>
                    <div className="mt-auto text-xs">
                      <span className="text-white dark:text-gray-100">
                        {page.frontMatter.date}
                      </span>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentPosts
