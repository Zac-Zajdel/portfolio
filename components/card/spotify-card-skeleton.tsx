import Spotify from '@/components/icons/spotify';

export default function SpotifyCardSkeleton() {
  return (
    <section className="mt-5 flex items-center space-x-8">
      <Spotify className="size-10 fill-green-500" />
      <p className="text-sm">Loading....</p>
    </section>
  );
}
