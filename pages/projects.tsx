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
      <p className={s.heading}>
        Stuff I built using React, React Native, Next.js, and TypeScript
      </p>
      <ul className={s.list}>
        <ProjectItem
          name="KYI"
          description="Find all Kyiv events in one app"
          href="#"
          year={2022}
        />
        <ProjectItem
          name="Plugged"
          description="Modern web app for sharing forbidden experience"
          href="https://plugged.kyivangels.com"
          year={2022}
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
          href="https://mariner.kyivangels.com"
          year={2022}
        />
      </ul>
    </Container>
  )
}

export default ProjectsPage
