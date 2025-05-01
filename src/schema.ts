import {
  text,
  index,
  integer,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

export const blogLikes = sqliteTable(
  "blog_likes",
  {
    slug: text("slug").notNull(),
    count: integer("count").notNull(),
  },
  (t) => [index("slug_id_blog_likes").on(t.slug)]
);

export const blogComment = sqliteTable(
  "blog_comment",
  {
    slug: text("slug").notNull(),
    comment: text("comment").notNull(),
    createdAt: integer("created_at").notNull(),
  },
  (t) => [index("slug_id_blog_comment").on(t.slug)]
);
