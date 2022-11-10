import type { Playlist } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import s from '@/styles/dashboard.module.scss'

interface Props extends Playlist {}

const PlaylistItem: React.FC<Props> = ({ name, href, imgUrl, description }) => {
  return (
    <li className={s['list-item']}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={s.content}
      >
        <div className={s['image-container']}>
          <Image
            src={imgUrl}
            alt={`Spotify Playlist - ${name}`}
            width={40}
            height={40}
          />
          <Image
            src={imgUrl}
            alt={`Spotify Playlist - ${name}`}
            width={40}
            height={40}
            className={s.glow}
          />
        </div>
        <div className={s['text-container']}>
          <p>{name}</p>
          {description && <p className={s.description}>{description}</p>}
        </div>
      </a>
    </li>
  )
}

export default PlaylistItem
