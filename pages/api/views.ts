import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

const {
  UPSTASH_REDIS_REST_URL: url,
  UPSTASH_REDIS_REST_TOKEN: token,
} = process.env

const redis = new Redis({url, token})

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { slug } = req.query as { slug: string; }

  let count: number|null = await redis.get(slug);

  if (req.method === 'POST') {
    count++
    redis.set(slug, count)
  }

  res.status(200).json({count: count})
}