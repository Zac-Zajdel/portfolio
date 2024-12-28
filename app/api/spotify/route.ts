import { NextResponse } from 'next/server';
import querystring from 'querystring';

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: Array<{ url: string }>;
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const {
  SPOTIFY_CLIENT_ID: CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN: REFRESH_TOKEN,
} = process.env;

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (
      response.status === 204 ||
      response.status > 400 ||
      response.data.currently_playing_type !== 'track'
    ) {
      return NextResponse.json(
        { isPlaying: false },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=90',
          },
        },
      );
    }

    return NextResponse.json(
      {
        isPlaying: response.data.is_playing,
        title: response.data.item.name,
        album: response.data.item.album.name,
        artist: response.data.item.album.artists
          .map((artist) => artist.name)
          .join(', '),
        albumImageUrl: response.data.item.album.images[0].url,
        songUrl: response.data.item.external_urls.spotify,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=90',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { isPlaying: false },
      {
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=90',
        },
      },
    );
  }
}

const getNowPlaying = async (): Promise<{
  status: number;
  data: SpotifyData;
}> => {
  const accessToken = await getAccessToken();

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data: SpotifyData = await response.json();
  return { status: response.status, data };
};

const getAccessToken = async (): Promise<string> => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch access token');
  }

  const data = await res.json();
  return data.access_token ?? '';
};
