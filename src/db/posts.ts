import "server-only";

import { eq } from "drizzle-orm";
import { blogComment, blogLikes } from "../schema";
import { db } from ".";

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

export const likePostComment = async (id: number) => {
	const currentLikes = await getPostCommentLikes(id);
	await db
		.update(blogComment)
		.set({
			likesCount: currentLikes + 1,
		})
		.where(eq(blogComment.id, id));
};

export const getPostLikes = async (slug: string) => {
	const postLikes = await db
		.select()
		.from(blogLikes)
		.where(eq(blogLikes.slug, slug));
	return postLikes?.at(0)?.count || 0;
};

export const getPostCommentLikes = async (id: number) => {
	const postLikes = await db
		.select()
		.from(blogComment)
		.where(eq(blogComment.id, id));
	return postLikes?.at(0)?.likesCount || 0;
};

export const commentPost = async (slug: string, comment: string) => {
	return await db.insert(blogComment).values({
		comment,
		slug,
		createdAt: new Date(),
	});
};

export const getPostComments = async (slug: string) => {
	return await db.select().from(blogComment).where(eq(blogComment.slug, slug));
};
