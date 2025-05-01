/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { formatDate } from "@/lib/formatDate";
import { BlogLike } from "@/components/BlogLike";
import { Markdown } from "@/components/Markdown";
import { BlogAuthor } from "@/components/BlogAuthor";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { BlogComments } from "@/components/BlogComments";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const post = await getPostBySlug(`${slug}.md`);

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="mb-4 font-bold text-2xl">Post not found</h1>
        <Link href="/blog" className="text-purple-400 hover:text-purple-300">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="relative bg-background -mt-24 md:-mt-12 min-h-screen">
      <BackgroundEffects />

      <article className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center mb-6 text-purple-400 hover:text-purple-300"
          >
            <ArrowLeft />
            Back to all posts
          </Link>

          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              className="mb-8 rounded-xl w-full h-64 md:h-96 object-cover"
              width={1080}
              height={1080}
            />
          )}

          <h1 className="mb-6 font-space-grotesk font-bold text-3xl md:text-4xl">
            {post.title}
          </h1>

          <div className="mb-8">
            <BlogAuthor
              author={post.author || { name: "Axole Maranjana" }}
              date={formatDate(post.date)}
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-gray-400">
              <span>{post.readingTime} min read</span>
            </div>
            <BlogLike slug={post.slug} />
          </div>

          <div className="prose-invert max-w-none prose prose-purple">
            <Markdown content={post.content} />
          </div>

          <div className="mt-12 pt-8 border-gray-800 border-t">
            <h3 className="mb-4 font-semibold text-xl">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="bg-secondary/20 hover:bg-purple-500/20 px-3 py-1 rounded-full text-gray-300 hover:text-purple-300 text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <BlogNewsletter />

          <BlogComments blogSlug={post.slug} />
        </div>
      </article>
    </div>
  );
};

export default page;

export async function generateStaticParams(): Promise<any[]> {
  const posts = await getAllPosts();

  return posts?.map((post) => ({
    slug: post.slug,
  })) as any;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);

  console.log("HHHHH: ", post)

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt.substring(0, 155), // Ensure it's within 160 characters
    authors: [{ name: post.author.name, url: post.author.url }],
    keywords: [
      ...post.keywords,
    ],
  };
}
