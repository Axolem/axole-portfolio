import type { getPostComments } from "./posts";

export type PostComment = Awaited<ReturnType<typeof getPostComments>>;
