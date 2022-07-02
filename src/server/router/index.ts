import superjson from 'superjson';
import { z } from 'zod';
import { createRouter } from './context';

export const appRouter = createRouter()
  .transformer(superjson)
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
