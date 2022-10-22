import React from 'react'
import s from '@/styles/projects-list.module.scss'

interface Props {
  children: React.ReactNode
}

const ProjectsList: React.FC<Props> = ({ children }) => {
  return <div className={s.list}>{children}</div>
}

export default ProjectsList
