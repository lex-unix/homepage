import Container from '@/components/container'
import ProjectItem from '@/components/project-item'
import type { NextPage } from 'next'
import s from '@/styles/projects.module.scss'
import { projects } from '@/lib/projects'

const ProjectsPage: NextPage = () => {
  return (
    <Container title="Projects" description="Some stuff I've built">
      <p className={s.heading}>My Projects</p>
      <ul className={s.list}>
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} />
        ))}
      </ul>
    </Container>
  )
}

export default ProjectsPage
