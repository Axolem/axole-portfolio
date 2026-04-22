import type { Metadata } from "next";
import { BlogHome } from "@/components/BlogHome";
import { getAllPosts, type Post } from "@/lib/blog";

export const metadata: Metadata = {
	creator: "Axole Maranjana",
	category: "blog",
	title: "Blog",
	description:
		"Technical writing by Axole Maranjana on software architecture, Java, Spring Boot, TypeScript, Next.js, fintech engineering, dividend investing, and quantitative finance.",
	keywords: [
		"Axole Maranjana blog",
		"software architecture blog",
		"Java developer blog",
		"fintech engineering",
		"dividend investing South Africa",
		"TypeScript tutorials",
	],
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		type: "website",
		title: "Blog | Axole Maranjana",
		description:
			"Technical writing on software architecture, Java, TypeScript, fintech, and investing by Axole Maranjana.",
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
