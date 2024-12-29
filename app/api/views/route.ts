import { getViewsSchema, storeViewsSchema } from '@/lib/zod/views';
import { Redis } from '@upstash/redis';
import { NextResponse, type NextRequest } from 'next/server';

import { env } from '@/env';

const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const schema = getViewsSchema();
  const { slug } = schema.parse({
    slug: searchParams.get('slug'),
  });

  const count: number | null = await redis.get(slug);

  if (count === 0 || count === null) {
    await redis.set(slug, 1);
  }

  return NextResponse.json(
    {
      count: count || 1,
    },
    {
      status: 200,
    },
  );
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const schema = storeViewsSchema();
  const { slug } = schema.parse({
    slug: searchParams.get('slug'),
  });

  let count: number | null = await redis.get(slug);

  if (count) {
    count++;
    await redis.set(slug, count);
  }

  return NextResponse.json(
    {
      count: count || 1,
    },
    {
      status: 200,
    },
  );
}
