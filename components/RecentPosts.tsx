// @ts-ignore
import { getPagesUnderRoute } from "nextra/context";
import Image from "components/image";

interface PageMetadata {
  frontMatter: {
    date: string;
    description: string;
  };
  meta: {
    title: string;
  };
  locale: string;
  name: string;
  route: string;
}

const RecentPosts = () => {
  const threeRecentBlogs = getPagesUnderRoute("/blog").slice(0, 3);
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-10 text-gray-900 dark:text-gray-100">
        Recent Posts
      </h1>
      <div className="my-12 flex flex-wrap justify-center gap-x-7 gap-y-10">
        {threeRecentBlogs.map((page: PageMetadata, index: number) => {
          return (
            <div key={index}>
              <a
                className="flex w-[278px] cursor-pointer flex-col overflow-hidden rounded-md border border-solid bg-gray-900 transition-colors hover:border-gray-200 no-underline dark:border-transparent dark:bg-gray-900 hover:dark:border-gray-200"
                href={page.route}
              >
                <Image
                  src="/static/me.jpeg"
                  alt="Article Logo"
                  width={200}
                  height={200}
                  className="drag-none h-[164px] w-full object-cover"
                />
                <div className="flex grow flex-col p-5">
                  <h2 className="m-0 text-lg font-bold leading-7 dark:text-gray-100 line-clamp-3">
                    {page.meta.title}
                  </h2>
                  <p className="text-gray-500 mb-6 text-xs leading-4 line-clamp-3 overflow-hidden text-ellipsis !leading-[18px]">
                    {page.frontMatter.description}
                  </p>
                  <div className="mt-auto text-xs">
                    <span className="font-bold dark:text-[#C4C4C4]">
                      Zac Zajdel
                    </span>
                    <span className="dark:text-gray-500">
                      <span className="select-none"> • </span>
                      {page.frontMatter.date}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentPosts;
