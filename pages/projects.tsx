import Container from '@/components/container'
import ProjectItem from '@/components/project-item'
import type { NextPage } from 'next'
import s from '@/styles/projects.module.scss'

const ProjectsPage: NextPage = () => {
  return (
    <Container
      title="Projects"
      description="Stuff I built using React, React Native, Next.js, and TypeScript"
    >
      <p className={s.heading}>My Projects</p>
      <ul className={s.list}>
        <ProjectItem
          name="Babyn Yar"
          description="In memory of the victims of the Babyn Yar tragedy"
          href="https://babynyar.org.ua"
          year={2023}
        />
        <ProjectItem
          name="ACRO"
          description="Explore stunning architecture projects worldwide"
          href="https://acro.lexunix.me"
          year={2023}
        />
        <ProjectItem
          name="Shelf"
          description="App for tracking reading goals"
          href="https://shelf.lexunix.me"
          year={2023}
        />
        <ProjectItem
          name="Pravda"
          description="Ukrainian news extension for Raycast"
          href="https://github.com/lex-unix/pravda-extension"
          year={2022}
        />
        <ProjectItem
          name="Mariner"
          description="Website for luxury yachts and apartments in Croatia"
          href="https://www.marinercroatia.net"
          year={2022}
        />
      </ul>
    </Container>
  )
}

export default ProjectsPage
