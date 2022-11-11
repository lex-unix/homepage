import type { NextPage } from 'next'
import Container from '@/components/container'
import s from '@/styles/index.module.scss'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Container description="Computer Science student from Kyiv, Ukraine. Building web and mobile applications">
      <div className={s.info}>
        <div className={s['img-container']}>
          <Image
            src="/profile.png"
            alt="Profile"
            width={100}
            height={64}
            className={s.img}
          />
        </div>
        <div>
          <p className={s.name}>Alexey Miin</p>
          <p className={s.muted}>Front&ndash;end engineer</p>
        </div>
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
