import Image from 'next/image'
import { IconContext } from 'react-icons'
import { FaDiscord, FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

const Welcome = () => {
  return (
    <div className="divide-y">
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-2 xl:pb-8 dark:prose-dark xl:col-span-2">
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

            <div className="mt-6 flex gap-6">
              <a
                className="group -m-1 p-1"
                aria-label="Send me an email"
                target="_blank"
                rel="noreferrer"
                href="mailto:zaczajdel213@gmail.com"
              >
                <IconContext.Provider
                  value={{
                    className:
                      'fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300',
                  }}
                >
                  <AiFillMail size={24} />
                </IconContext.Provider>
              </a>
              <a
                className="group -m-1 p-1"
                aria-label="Follow me on LinkedIn"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/zac-zajdel-9b832b191/"
              >
                <IconContext.Provider
                  value={{
                    className:
                      'fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300',
                  }}
                >
                  <FaLinkedin size={24} />
                </IconContext.Provider>
              </a>
              <a
                className="group -m-1 p-1"
                aria-label="Follow me on Discord"
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/users/ZacZajdel#5036"
              >
                <IconContext.Provider
                  value={{
                    className:
                      'fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300',
                  }}
                >
                  <FaDiscord size={24} />
                </IconContext.Provider>
              </a>
            </div>
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
