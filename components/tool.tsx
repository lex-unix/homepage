import React from 'react'
import Image from 'next/image'
import s from '@/styles/dashboard.module.scss'

interface Props {
  name: string
  description: string
  href: string
  src: string
}

const Tool: React.FC<Props> = ({ name, description, href, src }) => {
  return (
    <li className={s['list-item']}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={s.content}
      >
        <div className={s['image-container']}>
          <Image src={src} alt={name} width={48} height={48} />
          <Image
            src={src}
            alt={name}
            width={48}
            height={48}
            className={s.glow}
          />
        </div>
        <div className={s['text-container']}>
          <p>{name}</p>
          <p className={s.description}>{description}</p>
        </div>
      </a>
    </li>
  )
}

export default Tool
