import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import { BlogAuthor } from "./BlogAuthor";

export const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<article
			aria-label={post.slug}
			className="bg-secondary/10 p-6 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all"
		>
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
					<Link href={`/blog/${post.slug}`} className="group block" prefetch>
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
							<Link
								scroll={false}
								href={{
									pathname: "blog",
									query: {
										tag,
									},
								}}
								passHref
								key={tag}
							>
								<button className="bg-secondary/20 hover:bg-purple-500/20 px-3 py-1 rounded-full text-gray-300 hover:text-purple-300 text-sm transition-colors cursor-pointer">
									{tag}
								</button>
							</Link>
						))}
					</div>

					<Link
						href={`/blog/${post.slug}`}
						prefetch
						className="flex items-center gap-1 font-medium text-purple-400 hover:text-purple-300"
					>
						Continue reading
						<ArrowRight />
					</Link>
				</div>
			</div>
		</article>
	);
};

interface BlogCardProps {
	post: Post;
}
