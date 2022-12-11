import Image from './image'
import useSWR from 'swr'
import { SiSpotify } from 'react-icons/si'

export default function AboutIndex() {
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data } = useSWR('/api/spotify', fetcher)

  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src="/static/me.jpeg"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Zac Zajdel
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Full-Stack Software Engineer
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Indiana University of Pennsylvania
            </div>
            <div>
              <section className="">
                <a
                  target="_blank"
                  rel="noopener noreferer noreferrer"
                  href={
                    data?.isPlaying
                      ? data.songUrl
                      : 'https://open.spotify.com/user/zaczajdel213'
                  }
                  className="relative flex items-center space-x-4 rounded-md pl-2 p-5 transition-shadow hover:shadow-md no-underline"
                >
                  <div className="w-16">
                    {data?.isPlaying ? (
                      <Image
                        src={data?.albumImageUrl}
                        alt={data?.album}
                        width={80}
                        height={80}
                        className="w-16 shadow-sm"
                      />
                    ) : (
                      <SiSpotify size={64} color={'#1ED760'} />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-ellipsis overflow-hidden">
                      {data?.isPlaying ? data.title : 'Not Listening'}
                    </p>
                    <span className="font-dark text-xs flex justify-between items-center pt-2">
                      <span>{data?.isPlaying ? data.artist : 'Spotify'}</span>
                      <span>
                        {data?.isPlaying ? (
                          <div className="pl-2">
                            <SiSpotify size={20} color={'#1ED760'} />
                          </div>
                        ) : null}
                      </span>
                    </span>
                  </div>
                </a>
              </section>
            </div>
          </div>

          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div>Hey Fellow Tech Enthusiast,</div>
            <br />
            My name is Zac and I am based in Dallas, Texas focusing my career on
            web development technologies. You can usually find me working on
            some side project, watching movies, listening to music just about
            24/7, and hanging with friends.
            <br />
            <br />
            With technology, I am a big fan of the React & Vue ecosystems as
            well as Next.js, Nuxt.js, Laravel, Node, PHP, AWS, and a host of
            other technologies which have helped revolutionize how developers
            brings their ideas to life! One thing this industry promises is that
            we will never get bored or complacent which is so refreshing. The
            generosity and commitment of developers worldwide keeps me striving
            to be my best self.
            <br />
            <br />I created this blog in hopes that what I learn and discover
            can be transferred to others. I wanna give to the community rather
            than only take so this is my attempt and if you made it this far
            then let&apos;s connect :)
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <div className="pt-8 pb-8 max-w-none xl:col-span-2 text-gray-900 dark:text-gray-100">
        <div className="my-3">
          <div className="flex flex-row text-xl">
            <span>Lead Full Stack Software Engineer</span>{' '}
            <span>&nbsp;-&nbsp;</span>{' '}
            <span className="text-primary-color dark:text-primary-color-dark">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.rimsys.io/"
                className="no-underline"
              >
                Rimsys
              </a>
            </span>
          </div>
          <div>
            <div className="p-1 font-mono text-gray-500 dark:text-gray-400 text-sm">
              January 2020 - Current
            </div>
            <div className="p-2 text-gray-900 dark:text-gray-100">
              <div className="flex flex-row">
                <div className="mr-2 text-lg"> ‣</div>
                <div>
                  A significant contributor of rebuilding Rimsys from the ground
                  up using modern technologies and instituting best practices.
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="mr-2 text-lg"> ‣</div>
                <div>
                  A team lead of several devs organizing sprint objectives, pull
                  request reviews, deployments, and meetings.
                </div>
              </div>
              <div className="flex flex-row items-top">
                <div className="mr-2 text-lg"> ‣</div>
                <div>
                  Handling a diverse spectrum of projects on a daily basis, such
                  as helping with daily operations, deployments, customer
                  support, architecture meetings, new features, etc...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
