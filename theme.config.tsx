import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Navbar from './components/navbar'
import Logo from './components/logo'

export default {
  logo: () => {
    return <Logo />
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
