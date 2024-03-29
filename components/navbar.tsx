import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'nextra-theme-docs'
import Logo from './logo'
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter() 
  const { theme, setTheme } = useTheme()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="mx-auto mb-5 p-4 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-100/20">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Logo />
              <div className="circle-container" id="circle"></div>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <div className="pointer-events-auto md:hidden">
                <button
                  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                  type="button"
                  aria-expanded="false"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  Menu
                  <svg
                    viewBox="0 0 8 6"
                    aria-hidden="true"
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                  >
                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              {
                openMenu ? ( 
                  <div className="absolute right-7 mt-10 z-10 w-40 origin-top-right flex rounded-lg bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    <div className="py-1" role="none" onClick={() => setOpenMenu(!openMenu)}>
                      <Link href="/blogs">
                        <span className={`relative block px-3 py-2 transition ${router.pathname.includes('/blogs') ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Blog</span>
                      </Link>
                      <Link href="/projects">
                        <span className={`relative block px-3 py-2 transition ${router.pathname === '/projects' ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Projects</span>
                      </Link>
                      <Link href="/snippets/javascript/human-readable-format">
                        <span className={`relative block px-3 py-2 transition ${router.pathname.includes('/snippets') ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Snippets</span>
                      </Link>
                      <Link href="/about">
                        <span className={`relative block px-3 py-2 transition ${router.pathname === '/about' ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>About</span>
                      </Link>
                    </div>
                  </div>
                ) : null
              }
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <Link href="/blogs">
                    <span className={`relative block px-3 py-2 transition ${router.pathname.includes('/blogs') ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Blog</span>
                  </Link>
                  <Link href="/projects">
                    <span className={`relative block px-3 py-2 transition ${router.pathname === '/projects' ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Projects</span>
                  </Link>
                  <Link href="/snippets/javascript/human-readable-format">
                    <span className={`relative block px-3 py-2 transition ${router.pathname.includes('/snippets') ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>Snippets</span>
                  </Link>
                  <Link href="/about">
                    <span className={`relative block px-3 py-2 transition ${router.pathname === '/about' ? 'text-[#0089E5]' : null } hover:text-[#0089E5]`}>About</span>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <button
                  type="button"
                  aria-label="Switch to light theme"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden"
                  >
                    <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                    <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                  </svg>
                  
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                  >
                    <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
