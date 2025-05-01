import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "/src/data/blogs");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getAllPosts(): Promise<Post[] | null> {
  const slugs = getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );
  return posts.filter((post): post is Post => post !== null);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if(!slug || !slug.endsWith('.md')) return null;
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export type Author = {
  name: string;
  image: string;
  url?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: number;
  coverImage: string;
  author: Author;
  ogImage: {
    url: string;
  };
  image?: string;
  tags: string[];
  keywords: string[];
};
