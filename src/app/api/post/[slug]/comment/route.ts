import { commentPost, getPostComments } from "@/db/posts";

export const GET = async (
	req: Request,
	{ params }: { params: Promise<{ slug: string }> },
) => {
	const { slug } = await params;
	const data = await getPostComments(slug);
	return Response.json({ data });
};

export const POST = async (
	req: Request,
	{ params }: { params: Promise<{ slug: string }> },
) => {
	const { slug } = await params;
	const data = await req.json();

	if (!("comment" in data)) {
		return new Response("No comment.", { status: 400 });
	}

	await commentPost(slug, data.comment);

	return Response.json({ data: { slug } });
};
