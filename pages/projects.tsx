import Container from '@/components/container'
import ProjectItem from '@/components/project-item'
import ProjectsList from '@/components/projects-list'
import type { NextPage } from 'next'

const ProjectsPage: NextPage = () => {
  return (
    <Container title="Projects">
      <p>Stuff I built using React, React Native, Next.js, and TypeScript</p>
      <ProjectsList>
        <ProjectItem name="KYI" href="#" year={2022} />
        <ProjectItem
          name="Plugged"
          href="https://plugged.kyivangels.com"
          year={2022}
        />
        <ProjectItem
          name="Pravda"
          href="https://github.com/lex-unix/pravda-extension"
          year={2022}
        />
        <ProjectItem
          name="Mariner"
          href="https://mariner.kyivangels.com"
          year={2022}
        />
      </ProjectsList>
    </Container>
  )
}

export default ProjectsPage
