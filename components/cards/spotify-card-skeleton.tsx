import Spotify from '@/components/icons/spotify';

export default function SpotifyCardSkeleton() {
  return (
    <section className="relative flex items-center space-x-4 rounded-md py-5">
      <span className="size-16 fill-green-500">
        <Spotify />
      </span>

      <p className="pl-5 text-sm">Loading...</p>
    </section>
  );
}
