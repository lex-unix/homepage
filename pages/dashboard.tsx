import Container from '@/components/container'
import type { NextPage } from 'next'
import s from '@/styles/dashboard.module.scss'
import useSWR from 'swr'
import type { Playlist, Track } from '@/lib/types'
import fetcher from '@/lib/fetcher'
import MediaListItem from '@/components/media-list-item'
import firefoxThumb from '@/public/tools/firefox.png'
import raycastThumb from '@/public/tools/raycast.png'
import kittyThumb from '@/public/tools/kitty.png'
import neovimThumb from 'public/tools/neovim.png'
import bearThumb from '@/public/tools/bear-notes.png'
import cronThumb from '@/public/tools/cron.png'
import spotifyThumb from '@/public/tools/spotify.png'
import mailThumb from '@/public/tools/mail.png'
import soundsourceThumb from '@/public/tools/soundsource.png'
import cleanshotThumb from '@/public/tools/cleanshot-x.png'

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
        <MediaListItem
          title="Firefox"
          href="https://www.mozilla.org/en-US/firefox/new/"
          src={firefoxThumb}
        >
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
          title="Kitty"
          href="https://sw.kovidgoyal.net/kitty/"
          src={kittyThumb}
        >
          Terminal of choice
        </MediaListItem>
        <MediaListItem
          title="Neovim"
          href="https://neovim.io/"
          src={neovimThumb}
        >
          Code editor
        </MediaListItem>
        <MediaListItem title="Bear" href="https://bear.app/" src={bearThumb}>
          Note taking app
        </MediaListItem>
        <MediaListItem title="Cron" href="https://cron.com/" src={cronThumb}>
          Calendar of choice
        </MediaListItem>
        <MediaListItem
          title="Apple Mail"
          href="https://apps.apple.com/us/app/mail/id1108187098"
          src={mailThumb}
        >
          Mail client
        </MediaListItem>
        <MediaListItem
          title="SoundSource"
          href="https://rogueamoeba.com/soundsource/"
          src={soundsourceThumb}
        >
          Superior sound control for Mac
        </MediaListItem>
        <MediaListItem
          title="CleanShot X"
          href="https://cleanshot.com/"
          src={cleanshotThumb}
        >
          Screenshot tool for Mac
        </MediaListItem>
        <MediaListItem
          title="Spotify"
          href="https://open.spotify.com/"
          src={spotifyThumb}
        >
          Music player
        </MediaListItem>
      </ul>
      {playlists && (
        <>
          <p className={s.heading}>Spotify playlists</p>
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
