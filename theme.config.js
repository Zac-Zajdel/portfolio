/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

const Logo = ({ height }) => (
  <>
    <svg height={height} viewBox="0 0 24 24">
      <path d="M0,0v24h24v-24L0,0Z" fill="#010101" />
      <path d="M3,3v18h18v-18L3,3Z" fill="#fff" />
      <path d="M5,5v14h14v-14L5,5Z" fill="#010101" />
      <path d="M9,8l3,2-3,6h7l-3-2l3-6h-7Z" fill="#fff" />
    </svg>
    <span
      className="mx-2 font-bold hidden md:inline select-none"
      title="Learn with Zac"
    >
      Learn with Zac
    </span>
  </>
)

export default {
  projectLink: 'https://github.com/Zac-Zajdel',
  docsRepositoryBase: 'https://github.com/Zac-Zajdel/portfolio/tree/main/pages',
  titleSuffix: '',
  search: true,
  staticImage: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: 'Question or feedback? Let me know →',
  feedbackLabels: 'feedback',
  gitTimestamp: () => {
    return null
  },
  logo: () => {
    return <Logo height={30} />
  },
  head: ({ title, meta }) => {
    const ogImage = meta.image

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
            'Learn With Zac is Zac Zajdels personal blog and portfolio showing my passion and all the cool things I have built in my career.'
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            'Learn With Zac is Zac Zajdels personal blog and portfolio showing my passion and all the cool things I have built in my career.'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zac_zajdel" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="og:title" content={title ? title : 'Learn with Zac'} />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Learn with Zac" />
      </>
    )
  },
  footerEditLink: () => {
    return ''
  },
  footerText: false,
}
