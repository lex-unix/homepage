import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
  _id: string
  title: string
  slug: string
  coverImage: string
  description: string
  content: MDXRemoteSerializeResult
  date: string
}
