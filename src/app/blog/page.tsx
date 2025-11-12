import type { Metadata } from "next";
import { BlogHome } from "@/components/BlogHome";
import { getAllPosts, type Post } from "@/lib/blog";

export const metadata: Metadata = {
	creator: "Axole Maranjana",
	category: "blog",
	title: " Blog",
	openGraph: {
		images: [
			{
				url: "/blog-og.png",
				width: 1200,
				height: 630,
				alt: "Axole Maranjana - Blog",
			},
		],
	},
};

const page = async ({
	searchParams,
}: PageParams<object, { author: string; tag: string }>) => {
	const { author, tag } = await searchParams;

	const data = (await getAllPosts()) ?? undefined;

	let posts: Post[] | undefined = data;

	if (author) {
		posts = data?.filter((p) => {
			return p?.author?.name?.toLowerCase() === author?.toLowerCase();
		});
	}

	if (tag) {
		posts = data?.filter((p) => p?.tags?.includes(tag));
	}

	return <BlogHome selectedAuthor={author} selectedTag={tag} data={posts} />;
};

export default page;

interface PageParams<PathParams, QueryParams> {
	searchParams: Promise<QueryParams>;
	params: Promise<PathParams>;
}
