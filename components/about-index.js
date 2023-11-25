import Image from './image'
import SpotifyCard from '@/components/about/spotifyCard'
import TechStack from './about/techStack'

export default function AboutIndex() {
  return (
    <>
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
          <div>
            <section>
              <SpotifyCard />
            </section>
          </div>
        </div>

        <div className="prose max-w-none py-8 dark:prose-dark xl:col-span-2">
          <div>Hey 👋,</div>
          <br />
          I'm Zac, based in Dallas, Texas, honing my craft in web development.
          Between tackling side projects,you'll catch me enjoying movies, constantly tuned into music, and hanging out with friends.
          <br />
          <br />
          In the tech realm, I'm a big fan for the React, Vue, Laravel, and a bunch of other game-changers that redefine how developers bring their ideas to life.
          This industry never lets us get bored or complacent, and that's what makes it so invigorating.
          The commitment and generosity of developers worldwide inspire me to strive for excellence.
          self.
          <br />
          <br />
          I started this blog with the hope of sharing my discoveries with others.
          It's my way of giving back to the community that has given me so much.
          If you've made it this far, let's connect :)
        </div>
      </div>

      <TechStack />

      {/* Experience Section */}
      <div className="space-y-2 pt-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <div className="pt-8 max-w-none xl:col-span-2 text-gray-900 dark:text-gray-100">
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
                  Core contributor to rebuilding Rimsys using modern technologies and establishing best practices.
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="mr-2 text-lg"> ‣</div>
                <div>
                  A team lead for several developers helping organizing sprint objectives, PR reviews, releases, and meetings.
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
