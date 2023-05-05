import { sanityClient } from '@/lib/sanity-server'
import { postSlugsQuery } from '@/lib/queries'
import { GetServerSideProps } from 'next'

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map(slug => {
            return `
                <url>
                    <loc>${`https://lexunix.me/${slug}`}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`

export default function Sitemap() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = await sanityClient.fetch(postSlugsQuery)
  const allPages = [
    ...allPosts.map((slug: string) => `writing/${slug}`),
    '',
    'dashboard',
    'projects',
    'writing'
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(createSitemap(allPages))
  res.end()

  return {
    props: {}
  }
}
