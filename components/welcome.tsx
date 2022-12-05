import Image from 'next/image'

const Welcome = () => {
  return (
    <div className="divide-y">
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight -mb-5 text-gray-900 dark:text-gray-100">
              Zac Zajdel
            </h1>
            <p className="text-gray-900 dark:text-gray-200 -mb-4">
              Full-Stack Software Engineer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Changing the world one keystroke at a time. Let&apos;s go learn
              together and become the best version of ourselves!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:pt-0 xl:pt-8">
          <Image
            src="/static/me.jpeg"
            alt="avatar"
            width={152}
            height={152}
            className="h-48 w-48 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome
