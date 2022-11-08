import React from 'react'
import s from '@/styles/writing.module.scss'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  slug: string
}

const PostPreview: React.FC<Props> = ({ title, description, slug }) => {
  return (
    <Link href={`/writing/${slug}`}>
      <article className={s.post}>
        <p>{title}</p>
        <p className={s.description}>{description}</p>
      </article>
    </Link>
  )
}

export default PostPreview
