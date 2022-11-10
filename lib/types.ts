import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
  _id: string
  title: string
  slug: string
  coverImage: string
  description: string
  content: MDXRemoteSerializeResult
  date: string
  readingTime: string
}

export type Playlist = {
  name: string
  description: string
  imgUrl: string
  href: string
}

export type Track = {
  name: string
  artist: string
  imgUrl: string
  href: string
}
