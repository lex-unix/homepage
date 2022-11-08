import { WritingLayout } from '@/layouts/writing'
import { mdxToHtml } from '@/lib/mdx'
import { postQuery, postSlugsQuery } from '@/lib/queries'
import { getClient, sanityClient } from '@/lib/sanity-server'
import type { Post } from '@/lib/types'
import type { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

export default function SingleWriting({ post }: { post: Post }) {
  return (
    <WritingLayout {...post}>
      <MDXRemote {...post.content} />
    </WritingLayout>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false
}) => {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params?.slug
  })

  if (!post) {
    return { notFound: true }
  }

  const html = await mdxToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content: html
      }
    }
  }
}
