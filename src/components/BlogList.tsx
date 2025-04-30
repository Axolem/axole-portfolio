
import { BlogCard } from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";

interface BlogListProps {
  selectedTag: string | null;
  selectedAuthor: string | null;
  onTagClick: (tag: string) => void;
  onAuthorClick: (author: string) => void;
}

export const BlogList = ({ 
  selectedTag, 
  selectedAuthor, 
  onTagClick,
  onAuthorClick
}: BlogListProps) => {
  let filteredPosts = blogPosts;
  
  if (selectedTag) {
    filteredPosts = filteredPosts.filter(post => post.tags.includes(selectedTag));
  }
  
  if (selectedAuthor) {
    filteredPosts = filteredPosts.filter(post => post.author?.name === selectedAuthor);
  }

  return (
    <div className="space-y-16">
      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400">
            {selectedTag && selectedAuthor ? (
              `No posts found with tag "${selectedTag}" by ${selectedAuthor}.`
            ) : selectedTag ? (
              `No posts found with tag "${selectedTag}".`
            ) : selectedAuthor ? (
              `No posts found by ${selectedAuthor}.`
            ) : (
              "No posts found."
            )}
          </p>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <BlogCard 
            key={post.slug}
            post={post}
            onTagClick={onTagClick}
            onAuthorClick={onAuthorClick}
          />
        ))
      )}
    </div>
  );
};
