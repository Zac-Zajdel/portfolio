import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useConfig, useTheme } from 'nextra-theme-docs'

const Logo = ({ height }) => (
  <Link href="/">
    <div className="flex justify-center">
      <svg height={height} viewBox="0 0 24 24">
        <path d="M0,0v24h24v-24L0,0Z" fill="#010101" />
        <path d="M3,3v18h18v-18L3,3Z" fill="#fff" />
        <path d="M5,5v14h14v-14L5,5Z" fill="#010101" />
        <path d="M9,8l3,2-3,6h7l-3-2l3-6h-7Z" fill="#fff" />
      </svg>
      <span
        className="mx-2 mt-[0.2rem] font-bold hidden md:inline select-none"
        title="Learn with Zac"
      >
        Learn with Zac
      </span>
    </div>
  </Link>
)

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mx-auto mb-5 pt-5 pb-3 bg-[#121212] border-b border-gray-100/20">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Logo height={30} />
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2miqla:">
                  Menu
                  <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none">
              </div>
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <Link href="/blogs">
                    <span className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Blog</span>
                  </Link>
                  <Link href="/projects">
                    <span className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Projects</span>
                  </Link>
                  <Link href="/snippets/javascript/filter-array-on-input">
                    <span className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Snippets</span>
                  </Link>
                  <Link href="/about">
                    <span className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">About</span>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} type="button" aria-label="Switch to light theme" className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                  <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
                    <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                    <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                  </svg>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
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

export default {
  logo: () => {
    return <Logo height={30} />
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Zac Zajdel'
      }
    } else {
      return {
        titleTemplate: '%s'
      }
    }
  },
  navbar: {
    component: () => {
      return <Navbar />
    },
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  project: {
    link: 'https://github.com/Zac-Zajdel',
  },
  docsRepositoryBase: 'https://github.com/Zac-Zajdel',
  footer: {
    component: null,
  },
  head: () => {
    const { frontMatter } = useConfig()
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon/favicon.svg"
        />
        <link
          rel="manifest"
          href="/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={frontMatter.description || 'The personal blog and portfolio of Zac Zajdel.'}
        />
        <meta
          name="og:description"
          content={frontMatter.description || 'The personal blog and portfolio of Zac Zajdel.'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zac_zajdel" />
        <meta name="og:title" content={frontMatter.title || 'Learn with Zac'} />
        <meta name="apple-mobile-web-app-title" content="Learn with Zac" />
      </>
    )
  },
  gitTimestamp: () => {
    return null
  },
}
