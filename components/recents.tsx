import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
import { getPagesUnderRoute } from 'nextra/context'
import { Folder, FrontMatter, MdxFile, Meta } from 'nextra';

type Page = (MdxFile | Folder<Page>) & {
  meta?: Exclude<Meta, string>;
  frontMatter: FrontMatter;
};

export default function RecentPosts() {
  const threeRecentBlogs = getPagesUnderRoute('/blogs')
    .sort(
      (a: Page, b: Page) =>
        b.frontMatter.order - a.frontMatter.order,
    )
    .slice(0, 3)

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-8 text-gray-900 dark:text-gray-100">
        Recent Posts
      </h1>
      <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {threeRecentBlogs.map((page, index) => {
          return (
            <Tilt
              tiltMaxAngleX={2.5}
              tiltMaxAngleY={5}
              glareEnable
              tiltAngleYInitial={0}
              glareMaxOpacity={0.1}
              className="fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-white p-px dark:from-zinc-700 dark:via-zinc-800 dark:to-darker"
              key={index}
            >
              <Link href={page.route}>
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-zinc-900">
                  <div>
                    <h4 className="text-md font-semibold text-zinc-900 dark:text-white line-clamp-3">
                    {page.meta.title}
                    </h4>
                    <p className="mt-3 text-zinc-600 dark:text-zinc-400 line-clamp-3 overflow-hidden text-ellipsis">{page.frontMatter.description}</p>
                  </div>
                </div>
              </Link>
            </Tilt>
          )
        })}
      </div>
    </>
  )
}
