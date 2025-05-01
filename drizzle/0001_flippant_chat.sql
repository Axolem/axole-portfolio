PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_blog_comment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`comment` text NOT NULL,
	`created_at` integer NOT NULL,
	`likes_count` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_blog_comment`("id", "slug", "comment", "created_at", "likes_count") SELECT "id", "slug", "comment", "created_at", "likes_count" FROM `blog_comment`;--> statement-breakpoint
DROP TABLE `blog_comment`;--> statement-breakpoint
ALTER TABLE `__new_blog_comment` RENAME TO `blog_comment`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `slug_id_blog_comment` ON `blog_comment` (`slug`);--> statement-breakpoint
CREATE TABLE `__new_blog_likes` (
	`slug` text PRIMARY KEY NOT NULL,
	`count` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_blog_likes`("slug", "count") SELECT "slug", "count" FROM `blog_likes`;--> statement-breakpoint
DROP TABLE `blog_likes`;--> statement-breakpoint
ALTER TABLE `__new_blog_likes` RENAME TO `blog_likes`;