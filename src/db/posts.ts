import "server-only";
import { db } from ".";
import { blogComment, blogLikes } from "../schema";
import { eq } from "drizzle-orm";

export const likePost = async (slug: string) => {
  const currentLikes = await getPostLikes(slug);
  if (currentLikes === 0) {
    await db.insert(blogLikes).values({
      count: 0,
      slug,
    });
  }

  await db
    .update(blogLikes)
    .set({
      count: currentLikes + 1,
    })
    .where(eq(blogLikes.slug, slug));
};

export const getPostLikes = async (slug: string) => {
  const postLikes = await db
    .select()
    .from(blogLikes)
    .where(eq(blogLikes.slug, slug));
  return postLikes?.at(0)?.count || 0;
};

export const commentPost = async (slug: string, comment: string) => {
  return await db.insert(blogComment).values({
    comment,
    slug,
    createdAt: Date.now(),
  });
};

export const getPostComments = async (slug: string) => {
  return await db.select().from(blogComment).where(eq(blogComment.slug, slug));
};
