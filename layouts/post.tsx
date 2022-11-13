import Container from '@/components/container'
import type { Post } from '@/lib/types'
import React from 'react'
import s from '@/styles/post.module.scss'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlForImage } from '@/lib/sanity'

interface Props extends Post {
  children: React.ReactNode
}

const PostLayut: React.FC<Props> = ({
  title,
  description,
  date,
  readingTime,
  coverImage,
  children
}) => {
  return (
    <Container
      title={title}
      description={description}
      image={urlForImage(coverImage).url()}
      type="article"
    >
      <article className={s.post}>
        <h1>{title}</h1>
        <div className={s['header-container']}>
          <div className={s['header-info']}>
            <div className={s['author-info']}>
              <Image
                src="/profile-square.png"
                alt="Profile Image"
                width={32}
                height={32}
              />
              <span>Alexey Miin</span>
            </div>
            <span>&bull;</span>
            <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
          </div>
          <div>{readingTime}</div>
        </div>
        {children}
      </article>
    </Container>
  )
}

export default PostLayut
