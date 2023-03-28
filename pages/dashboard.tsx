import Container from '@/components/container'
import type { NextPage } from 'next'
import s from '@/styles/dashboard.module.scss'
import useSWR from 'swr'
import type { Playlist, Track } from '@/lib/types'
import fetcher from '@/lib/fetcher'
import MediaListItem from '@/components/media-list-item'
import arcThumb from '@/public/tools/arc.png'
import raycastThumb from '@/public/tools/raycast.png'
import itermThumb from '@/public/tools/iterm.png'
import inkdropThumb from '@/public/tools/inkdrop.png'
import cronThumb from '@/public/tools/cron.png'
import todoistThumb from '@/public/tools/todoist.png'
import spotifyThumb from '@/public/tools/spotify.png'
import mimestreamThumb from '@/public/tools/mimestream.png'

const Dashboard: NextPage = () => {
  const { data: playlists } = useSWR<Playlist[]>('/api/playlists', fetcher)
  const { data: topTracks } = useSWR<Track[]>('/api/top-tracks', fetcher)

  return (
    <Container
      title="Dashboard"
      description="Spotify music and favourite tools"
    >
      <p className={s.heading}>Tools i use everyday</p>
      <ul className={s.list}>
        <MediaListItem title="Arc" href="https://arc.net/" src={arcThumb}>
          Browser of choice
        </MediaListItem>
        <MediaListItem
          title="Raycast"
          href="https://raycast.com/"
          src={raycastThumb}
        >
          Fast, extendable launcher
        </MediaListItem>
        <MediaListItem
          title="iTerm2"
          href="https://iterm2.com/"
          src={itermThumb}
        >
          Terminal of choice
        </MediaListItem>
        <MediaListItem
          title="Inkdrop"
          href="https://inkdrop.app/"
          src={inkdropThumb}
        >
          Markdown note takink app
        </MediaListItem>
        <MediaListItem title="Cron" href="https://cron.com/" src={cronThumb}>
          Calendar of choice
        </MediaListItem>
        <MediaListItem
          title="Todoist"
          href="https://todoist.com/"
          src={todoistThumb}
        >
          To-do list app
        </MediaListItem>
        <MediaListItem
          title="Spotify"
          href="https://open.spotify.com/"
          src={spotifyThumb}
        >
          Music player
        </MediaListItem>
        <MediaListItem
          title="Mimestream"
          href="https://mimestream.com/"
          src={mimestreamThumb}
        >
          Mail client
        </MediaListItem>
      </ul>
      {playlists && (
        <>
          <p className={s.heading}>My spotify playlists</p>
          <ul className={s.list}>
            {playlists.map(playlist => (
              <MediaListItem
                key={playlist.name}
                title={playlist.name}
                src={playlist.imgUrl}
                href={playlist.href}
                size={40}
              >
                {playlist.description}
              </MediaListItem>
            ))}
          </ul>
        </>
      )}
      {topTracks && (
        <>
          <p className={s.heading}>Spoify most played songs</p>
          <ul className={s.list}>
            {topTracks.map(track => (
              <MediaListItem
                key={track.name}
                title={track.name}
                src={track.imgUrl}
                href={track.href}
                size={40}
              >
                {track.artist}
              </MediaListItem>
            ))}
          </ul>
        </>
      )}
    </Container>
  )
}

export default Dashboard
