import Container from '@/components/container'
import type { InferGetStaticPropsType } from 'next'
import s from '@/styles/writing.module.scss'
import PostPreview from '@/components/post-preview'
import type { Post } from '@/lib/types'
import { getClient } from '@/lib/sanity-server'
import { allPostsQuery } from '@/lib/queries'

export default function Writing({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Writing"
      description="Place for sharing my thoughts and other stuff"
    >
      <p className={s.heading}>Place to Share My Thoughts</p>
      <ul className={s.list}>
        {posts.map(post => (
          <PostPreview
            key={post._id}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </ul>
    </Container>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(allPostsQuery)

  return { props: { posts } }
}
