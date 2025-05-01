import { Post } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  selectedTag: string | null;
  selectedAuthor: string | null;
  data?: Post[];
}

export const BlogList = ({
  selectedTag,
  selectedAuthor,
  data,
}: BlogListProps) => {
  let filteredPosts = data;

  if (selectedTag) {
    filteredPosts = filteredPosts?.filter((post) =>
      post.tags.includes(selectedTag)
    );
  }

  if (selectedAuthor) {
    filteredPosts = filteredPosts?.filter(
      (post) => post.author?.name === selectedAuthor
    );
  }

  return (
    <div className="space-y-16">
      {filteredPosts?.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-gray-400">
            {selectedTag && selectedAuthor
              ? `No posts found with tag "${selectedTag}" by ${selectedAuthor}.`
              : selectedTag
              ? `No posts found with tag "${selectedTag}".`
              : selectedAuthor
              ? `No posts found by ${selectedAuthor}.`
              : "No posts found."}
          </p>
        </div>
      ) : (
        filteredPosts?.map((post) => <BlogCard key={post.slug} post={post} />)
      )}
    </div>
  );
};
