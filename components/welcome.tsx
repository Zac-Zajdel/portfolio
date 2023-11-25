import Image from 'next/image'
import { IconContext } from 'react-icons'
import { FaDiscord, FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Welcome() {
  return (
    <div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-2 xl:pb-8 dark:prose-dark xl:col-span-2">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-gray-900 dark:text-gray-100">
              Zac Zajdel
            </h1>
            <p className="text-gray-900 dark:text-gray-200 my-4">
              Full-Stack Software Engineer
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              I'm lucky — I get to build full stack web apps for a living.
              There's nothing better than bringing ideas to life and picking up new skills along the way!
              Feel free to take a look around and hit me up on my socials below 😊
            </p>

            <div className="my-6 flex gap-6">
              <a
                className="group -m-1 p-1"
                aria-label="Follow me on Github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Zac-Zajdel"
              >
                <IconContext.Provider
                  value={{
                    className:
                      'fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300',
                  }}
                >
                  <FaGithub size={24} />
                </IconContext.Provider>
              </a>
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
                aria-label="Follow me on X"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/zac_zajdel"
              >
                <IconContext.Provider
                  value={{
                    className:
                      'fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300',
                  }}
                >
                  <BsTwitterX size={24} />
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

          <div className="text-gray-900 dark:text-gray-200 text-sm">
            Dallas, TX · 32.775° N, -96.809° W
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
          <p className="flex items-center mt-2">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0089E5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0089E5]"></span>
            </span>
            <span className="text-gray-900 dark:text-gray-200 text-sm">Interested in new opportunities</span>
          </p>
        </div>
      </div>
    </div>
  )
}
