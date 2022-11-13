import { components } from '@/components/mdx'
import PostLayout from '@/layouts/post'
import { mdxToHtml } from '@/lib/mdx'
import { postQuery, postSlugsQuery } from '@/lib/queries'
import { getClient, sanityClient } from '@/lib/sanity-server'
import type { Post } from '@/lib/types'
import type { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

export default function SingleWriting({ post }: { post: Post }) {
  return (
    <PostLayout {...post}>
      <MDXRemote {...post.content} components={components} />
    </PostLayout>
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

  const { html, readingTime } = await mdxToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime
      }
    }
  }
}
