import Image from './image'
import useSWR from 'swr'
import { SiSpotify } from 'react-icons/si'

export default function SpotifyCard() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  const { data } = useSWR('/api/spotify', fetcher)

  return (
    <>
      <section>
        <a
          target="_blank"
          rel="noopener noreferer noreferrer"
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/zaczajdel213'
          }
          className="relative flex items-center space-x-4 rounded-md pl-2 p-5 transition-shadow hover:shadow-md no-underline"
        >
          <div className="w-16">
            {data?.isPlaying ? (
              <Image
                src={data?.albumImageUrl}
                alt={data?.album}
                width={80}
                height={80}
                className="w-16 shadow-sm"
              />
            ) : (
              <SiSpotify size={64} color={'#1ED760'} />
            )}
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-ellipsis overflow-hidden">
              {data?.isPlaying ? data.title : 'Not Listening'}
            </p>
            <span className="font-dark text-xs flex justify-between items-center pt-2">
              <span>{data?.isPlaying ? data.artist : 'Spotify'}</span>
              <span>
                {data?.isPlaying ? (
                  <div className="pl-2">
                    <SiSpotify size={20} color={'#1ED760'} />
                  </div>
                ) : null}
              </span>
            </span>
          </div>
        </a>
      </section>
    </>
  )
}
