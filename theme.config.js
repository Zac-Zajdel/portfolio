/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from 'next/router'

export default {
  projectLink: 'https://github.com/Zac-Zajdel',
  docsRepositoryBase: 'https://github.com/vercel/swr-site/blob/master/pages',
  titleSuffix: '',
  search: true,
  staticImage: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: 'Question? Give us feedback →',
  feedbackLabels: 'feedback',
  logo: () => {
    return <>Learn With Zac</>
  },
  head: ({ title, meta }) => {
    const { route } = useRouter()

    const ogImage =
      meta.image ||
      `https://swr-card.vercel.app${
        /\/index\.+/.test(route) ? '' : '?title=' + encodeURIComponent(title)
      }`

    return (
      <>
        {/* Favicons, meta */}
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
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            'SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.'
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            'SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="og:title" content={title ? title : 'Learn with Zac'} />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Learn with Zac" />
      </>
    )
  },
  footerEditLink: () => {
    return 'Edit this page on GitHub →'
  },
  footerText: false,
}
