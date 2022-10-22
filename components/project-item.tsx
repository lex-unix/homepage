import React from 'react'
import s from '@/styles/project-item.module.scss'

interface Props {
  name: string
  href: string
  year: number
}

const ProjectItem: React.FC<Props> = ({ name, href, year }) => {
  return (
    <a href={href} rel="noreferrer noopener" className={s.a}>
      <span>{name}</span>
      <div className={s.div}></div>
      <p>{year}</p>
    </a>
  )
}

export default ProjectItem
