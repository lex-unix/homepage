import Container from '@/components/container'
import type { InferGetStaticPropsType } from 'next'
import s from '@/styles/writing.module.scss'
import PostPreview from '@/components/post-preview'
import { Post } from '@/lib/types'
import { getClient } from '@/lib/sanity-server'
import { allPosts } from '@/lib/queries'

export default function Writing({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Writing">
      <p className={s.heading}>Place for sharing my thoughts and other stuff</p>
      <div className={s.posts}>
        {posts.map(post => (
          <PostPreview
            key={post._id}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))}
        <PostPreview
          title="Neovim as my main editor for 2023"
          description="Setting up Neovim and working from terminal"
          slug="2"
        />
        <PostPreview
          title="Building calendar bot for Telegram using Python"
          description="Your Google calendar right in Telegram"
          slug="3"
        />
      </div>
    </Container>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(allPosts)

  return { props: { posts } }
}
