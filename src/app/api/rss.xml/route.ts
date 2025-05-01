import { getAllPosts } from "@/lib/blog";
import { generateRSS } from "@/lib/generateRSS";

export const GET = async () => {
    const posts = await getAllPosts();

    if (!posts) {
        return new Response("No posts were found at the moment.", { status: 404 });
    }

    const file = generateRSS(posts);
    const blob = new Blob([file], { type: "application/xml" });

    return new Response(blob, {
        status: 200,
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8"
        }
    });
};
