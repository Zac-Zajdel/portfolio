import Spotify from '@/components/icons/spotify';
import Image from 'next/image';

interface SpotifyContent {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

async function fetchSpotifyData() {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

  try {
    const response = await fetch(`${baseUrl}/api/spotify`, {
      cache: 'no-store',
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return { isPlaying: false };
  }
}

export default async function SpotifyCard() {
  const spotifyData: SpotifyContent = await fetchSpotifyData();

  return (
    <section>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          spotifyData?.isPlaying
            ? spotifyData.songUrl
            : 'https://open.spotify.com/user/zaczajdel213'
        }
        className="relative flex items-center space-x-4 rounded-md py-5 no-underline transition-shadow hover:shadow-md"
      >
        <div className="w-16">
          {spotifyData?.isPlaying ? (
            <Image
              src={spotifyData?.albumImageUrl}
              alt={spotifyData?.album}
              width={80}
              height={80}
              className="w-16 shadow-sm"
            />
          ) : (
            <Spotify className="size-10 fill-green-500" />
          )}
        </div>

        <div className="flex-1">
          <p className="overflow-hidden text-ellipsis text-sm">
            {spotifyData?.isPlaying ? spotifyData.title : 'Not Listening'}
          </p>
          <div className="font-dark flex items-center justify-between pt-2 text-xs">
            <span>
              {spotifyData?.isPlaying ? spotifyData.artist : 'Spotify'}
            </span>
            {spotifyData?.isPlaying ? (
              <Spotify className="ml-2 size-5 fill-green-500" />
            ) : null}
          </div>
        </div>
      </a>
    </section>
  );
}
