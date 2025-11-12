import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const blogLikes = sqliteTable("blog_likes", {
	slug: text("slug").notNull().primaryKey(),
	count: integer("count").notNull().default(0),
});

export const blogComment = sqliteTable(
	"blog_comment",
	{
		id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		slug: text("slug").notNull(),
		comment: text("comment").notNull(),
		createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
		likesCount: integer("likes_count").notNull().default(0),
	},
	(t) => [index("slug_id_blog_comment").on(t.slug)],
);
