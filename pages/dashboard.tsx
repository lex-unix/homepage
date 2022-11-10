import Container from '@/components/container'
import Tool from '@/components/tool'
import type { NextPage } from 'next'
import s from '@/styles/dashboard.module.scss'
import useSWR from 'swr'
import type { Playlist, Track } from '@/lib/types'
import fetcher from '@/lib/fetcher'
import PlaylistItem from '@/components/playlist'
import TrackItem from '@/components/track'

const Dashboard: NextPage = () => {
  const { data: playlists } = useSWR<Playlist[]>('/api/playlists', fetcher)
  const { data: topTracks } = useSWR<Track[]>('/api/top-tracks', fetcher)

  return (
    <Container title="Tools">
      <p className={s.heading}>Tools i use everyday</p>
      <ul className={s.list}>
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
          href="https://sparkmailapp.com/"
          src="/tools/spark.png"
        />
      </ul>
      {playlists && (
        <>
          <p className={s.heading}>Daily dose of music</p>
          <ul className={s.list}>
            {playlists.map(playlist => (
              <PlaylistItem key={playlist.name} {...playlist} />
            ))}
          </ul>
        </>
      )}
      {topTracks && (
        <>
          <p className={s.heading}>My top tracks at the momement</p>
          <ul className={s.list}>
            {topTracks.map(track => (
              <TrackItem key={track.name} {...track} />
            ))}
          </ul>
        </>
      )}
    </Container>
  )
}

export default Dashboard
