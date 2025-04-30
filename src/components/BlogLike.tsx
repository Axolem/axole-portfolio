"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const BlogLike = (props: BlogLikeProps) => {
  const [hasLiked, setHasLiked] = useState(false);
  const likes = 0;

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      return;
    }
    setHasLiked(true);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`flex items-center gap-1 ${
        hasLiked ? "text-purple-400" : "text-gray-400"
      }`}
    >
      <Heart size={16} className={hasLiked ? "fill-purple-500" : ""} />
      <span>{likes}</span>
    </Button>
  );
};

export { BlogLike };

interface BlogLikeProps {
  slug: string;
}
