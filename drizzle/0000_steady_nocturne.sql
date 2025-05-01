CREATE TABLE `blog_comment` (
	`slug` text,
	`count` integer,
	`created_at` numeric
);
--> statement-breakpoint
CREATE INDEX `slug_id_blog_comment` ON `blog_comment` (`slug`);--> statement-breakpoint
CREATE TABLE `blog_likes` (
	`slug` text,
	`count` integer
);
--> statement-breakpoint
CREATE INDEX `slug_id_blog_likes` ON `blog_likes` (`slug`);