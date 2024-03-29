import { ReactNode } from 'react'
import Image, { type StaticImageData } from 'next/image'
import s from '@/styles/media-list.module.scss'

interface Props {
  src: string | StaticImageData
  title: string
  href: string
  size?: number
  children: ReactNode
}

export default function MediaListItem({
  src,
  title,
  href,
  size = 48,
  children
}: Props) {
  const useBlur = typeof src !== 'string'

  return (
    <li className={s['list-item']}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={s.content}
      >
        <div className={s['image-container']}>
          <Image
            src={src}
            alt={title}
            width={size}
            height={size}
            placeholder={useBlur ? 'blur' : 'empty'}
          />
          <Image
            src={src}
            alt={title}
            width={size}
            height={size}
            className={s.glow}
            placeholder={useBlur ? 'blur' : 'empty'}
          />
        </div>
        <div className={s['text-container']}>
          <p>{title}</p>
          <p className={s.description}>{children}</p>
        </div>
      </a>
    </li>
  )
}
