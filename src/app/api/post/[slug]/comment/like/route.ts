import type { NextRequest } from "next/server";
import { likePostComment } from "@/db/posts";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const id = searchParams.get("id");

	const idNumber = Number(id);

	if (!idNumber) {
		return new Response("Invalid request", { status: 400 });
	}

	await likePostComment(idNumber);

	return Response.json({ data: { id: idNumber } });
}
