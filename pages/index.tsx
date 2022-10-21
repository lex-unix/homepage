import type { NextPage } from 'next'
import Container from '@/components/container'
import s from '@/styles/index.module.scss'

const Home: NextPage = () => {
  return (
    <Container>
      <div className={s.info}>
        <p id={s.name}>Alexey Miin</p>
        <p>Front&ndash;end engineer</p>
      </div>
      <div className={s.about}>
        <p>
          Computer Science student from Kyiv, Ukraine. Building web and mobile
          applications. Having interest in machine learning.
        </p>
        <p>Currently, building Pugged.</p>
      </div>
    </Container>
  )
}

export default Home
