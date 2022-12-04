import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from 'react'
import { UrlObject } from 'url'

export default function BlogIndex({ more = 'Read more' }) {
  return getPagesUnderRoute(`/blog`).map(
    (
      page: {
        route: string | UrlObject,
        meta: { title: any },
        frontMatter: {
          title: any,
          description:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined,
          date:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined,
        },
        name: any,
      },
      index: Key | null | undefined
    ) => {
      // Alias `<a>` to avoid it being replaced by MDX components.
      const A = 'a'
      return (
        <div key={index}>
          <h3>
            <Link href={page.route}>
              <A style={{ color: 'inherit', textDecoration: 'none' }}>
                {page.meta?.title || page.frontMatter?.title || page.name}
              </A>
            </Link>
          </h3>
          <p className="opacity-80">
            {page.frontMatter?.description}{' '}
            <Link href={page.route}>{more + ` →`}</Link>
          </p>
          {page.frontMatter?.date ? (
            <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
          ) : null}
        </div>
      )
    }
  )
}
