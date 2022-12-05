import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'

export default function BlogIndex({ more = 'Read more' }) {
  return getPagesUnderRoute('/blog').map((page, index) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = 'a'
    return (
      <div key={index}>
        <h3 className="-mb-4">
          <Link href={page.route}>
            <A style={{ color: 'inherit', textDecoration: 'none' }}>
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-80 mb-2">
          {page.frontMatter?.description}{' '}
          <Link href={page.route}>{more + ' →'}</Link>
        </p>
        {page.frontMatter?.date ? (
          <span className="opacity-50 text-sm">{page.frontMatter.date}</span>
        ) : null}
      </div>
    )
  })
}
