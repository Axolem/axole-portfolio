import {
  text,
  index,
  integer,
  numeric,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

export const blogLikes = sqliteTable(
  "blog_likes",
  {
    slug: text("slug"),
    count: integer("count"),
  },
  (t) => [index("slug_id_blog_likes").on(t.slug)]
);

export const blogComment = sqliteTable(
  "blog_comment",
  {
    slug: text("slug"),
    comment: integer("count"),
    createdAt: numeric("created_at"),
  },
  (t) => [index("slug_id_blog_comment").on(t.slug)]
);
