import Container from '@/components/container'
import Tool from '@/components/tool'
import type { NextPage } from 'next'
import s from '@/styles/tool.module.scss'

const Tools: NextPage = () => {
  return (
    <Container title="Tools">
      <p className={s.heading}>Tools i use everyday</p>
      <div className={s['tools-list']}>
        <Tool
          name="Arc"
          description="Browser of choice"
          href="https://arc.net/"
          src="/tools/arc.png"
        />
        <Tool
          name="Raycast"
          description="Fast, extendable launcher"
          href="https://www.raycast.com/"
          src="/tools/raycast.png"
        />
        <Tool
          name="iTerm2"
          description="Terminal of choice"
          href="https://iterm2.com/"
          src="/tools/iterm.png"
        />
        <Tool
          name="Inkdrop"
          description="Markdown note taking app"
          href="https://www.inkdrop.app/"
          src="/tools/inkdrop.png"
        />
        <Tool
          name="Cron"
          description="Calendar of choice"
          href="https://cron.com/"
          src="/tools/cron.png"
        />
        <Tool
          name="Todoist"
          description="To-do list app"
          href="https://todoist.com/"
          src="/tools/todoist.png"
        />
        <Tool
          name="Spotify"
          description="Music player"
          href="https://open.spotify.com/"
          src="/tools/spotify.png"
        />
        <Tool
          name="Spark"
          description="Mail client"
          href="https://sparkmailapp.com//"
          src="/tools/spark.png"
        />
      </div>
    </Container>
  )
}

export default Tools
