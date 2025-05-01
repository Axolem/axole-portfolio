import { BlogHome } from "@/components/BlogHome";
import { getAllPosts, type Post } from "@/lib/blog";

const page = async ({
  searchParams,
}: PageParams<object, { author: string; tag: string }>) => {
  const { author, tag } = await searchParams;

  const data = (await getAllPosts()) ?? undefined;

  let posts: Post[] | undefined = data;

  if (author) {
    posts = data?.filter(
      (p) =>{
        console.log(p?.author?.name?.toLowerCase(), author?.toLowerCase())
        return p?.author?.name?.toLowerCase() === author?.toLowerCase()}
    );
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
