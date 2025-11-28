import { z } from 'zod';

export const getViewsSchema = () => {
  return z.object({
    slug: z.enum(['oasis', 'feat_sync']),
  });
};

export const storeViewsSchema = () => {
  return z.object({
    slug: z.enum(['oasis', 'feat_sync']),
  });
};
