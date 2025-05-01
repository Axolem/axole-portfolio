import { getPostLikes, likePost } from "@/db/posts";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;
  const data = await getPostLikes(slug);
  return Response.json({ data });
};

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  await likePost(slug);

  return Response.json({ data: { slug } });
};
