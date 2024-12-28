import Spotify from '@/components/icons/spotify';
import Image from 'next/image';

export default function SpotifyCard() {
  // todo - create route handler....
  const data = {
    isPlaying: true,
    artist: 'The Eagles',
    title: 'One of These Nights - 2013 Remaster',
    album: 'One of These Nights (2013 Remaster)',
    albumImageUrl:
      'https://i.scdn.co/image/ab67616d0000b2735d0a8e54aba5181c79593b94',
    songUrl: 'https://open.spotify.com/track/608xszaAxVh4m7NcKJiAbF',
  };

  return (
    <section>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          data?.isPlaying
            ? data.songUrl
            : 'https://open.spotify.com/user/zaczajdel213'
        }
        className="relative flex items-center space-x-4 rounded-md py-5 no-underline transition-shadow hover:shadow-md"
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
            <span className="size-6 fill-green-500">
              <Spotify />
            </span>
          )}
        </div>

        <div className="flex-1">
          <p className="overflow-hidden text-ellipsis text-sm">
            {data?.isPlaying ? data.title : 'Not Listening'}
          </p>
          <div className="font-dark flex items-center justify-between pt-2 text-xs">
            <span>{data?.isPlaying ? data.artist : 'Spotify'}</span>
            <span>
              {data?.isPlaying ? (
                <span className="size-6 fill-green-500">
                  <Spotify />
                </span>
              ) : null}
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
