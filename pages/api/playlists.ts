import { getPlaylists } from '@/lib/spotify'

export const runtime = 'experimental-edge'

export default async function handler() {
  const response = await getPlaylists()
  const { items } = await response.json()
  const playlists = items.map((item: any) => ({
    name: item.name,
    description: item.description,
    href: item.external_urls.spotify,
    imgUrl: item.images[1].url
  }))

  return new Response(JSON.stringify(playlists), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
