import { z } from 'zod';

export const getViewsSchema = () => {
  return z.object({
    slug: z.enum(['oasis', 'jottings']),
  });
};

export const storeViewsSchema = () => {
  return z.object({
    slug: z.enum(['oasis', 'jottings']),
  });
};
