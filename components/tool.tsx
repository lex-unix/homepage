import React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import s from '@/styles/tool.module.scss'

interface Props {
  name: string
  description: string
  href: string
  src: string
}

const Tool: React.FC<Props> = ({ name, description, href, src }) => {
  return (
    <div className={s.tool}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <a className={s.link} target="_blank" rel="noopener noreferrer">
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
      </Link>
    </div>
  )
}

export default Tool
