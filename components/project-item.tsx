import React from 'react'
import Link from 'next/link'
import s from '@/styles/projects.module.scss'

interface Props {
  name: string
  description: string
  href: string
  year: number
}

const ProjectItem: React.FC<Props> = ({ name, description, href, year }) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer noopener">
      <li className={s.item}>
        <p>
          {name}
          <span className={s.description}>{description}</span>
        </p>
        <div className={s.line}></div>
        <p>{year}</p>
      </li>
    </Link>
  )
}

export default ProjectItem
