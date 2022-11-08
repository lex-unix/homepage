import Container from '@/components/container'
import type { Post } from '@/lib/types'
import React from 'react'
import s from '@/styles/post.module.scss'

interface Props extends Post {
  children: React.ReactNode
}

export const WritingLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container title={title}>
      <article className={s.post}>
        <h1>{title}</h1>
        {children}
      </article>
    </Container>
  )
}
