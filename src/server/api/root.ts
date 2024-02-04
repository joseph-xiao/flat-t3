import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/ should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
