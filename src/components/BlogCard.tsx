import Link from "next/link";
import Image from "next/image";

import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";
import { BlogAuthor } from "./BlogAuthor";

interface BlogCardProps {
  post: BlogPost;
  onTagClick: (tag: string) => void;
  onAuthorClick: (author: string) => void;
}

export const BlogCard = ({
  post,
  onTagClick,
  // onAuthorClick,
}: BlogCardProps) => {
  return (
    <article className="bg-secondary/10 p-6 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all">
      <div className="flex md:flex-row flex-col gap-6">
        {post.coverImage && (
          <div className="md:w-1/3">
            <Link href={`/blog/${post.slug}`} className="block">
              <Image
                src={post.coverImage}
                alt={post.title}
                className="rounded-lg w-full h-48 object-cover"
                width={1080}
                height={1080}
              />
            </Link>
          </div>
        )}
        <div className={post.coverImage ? "md:w-2/3" : "w-full"}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <h2 className="mb-4 font-space-grotesk font-bold group-hover:text-purple-400 text-2xl transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="mb-4 text-gray-400 line-clamp-3">{post.excerpt}</p>

          <div className="mb-4">
            <BlogAuthor
              author={post.author || { name: "Axole Maranjana" }}
              date={formatDate(post.date)}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick(tag)}
                className="bg-secondary/20 hover:bg-purple-500/20 px-3 py-1 rounded-full text-gray-300 hover:text-purple-300 text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 font-medium text-purple-400 hover:text-purple-300"
          >
            Continue reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};
