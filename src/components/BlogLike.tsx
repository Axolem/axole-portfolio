"use client";
import useSWR from "swr";
import { useState } from "react";
import posthog from "posthog-js";
import useSWRMutation from "swr/mutation";
import { Heart, Loader } from "lucide-react";

import { Button } from "./ui/button";
import { fetcher, mutator } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const BlogLike = (props: BlogLikeProps) => {
  const { data, isLoading, mutate } = useSWR(
    `/api/post/${props.slug}/like`,
    fetcher
  );
  const { trigger, isMutating } = useSWRMutation(
    `/api/post/${props.slug}/like`,
    mutator
  );

  const [hasLiked, setHasLiked] = useState(false);
  const likes = data?.data;

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      return;
    }
    setHasLiked(true);
    trigger().then(() => {
      posthog.capture("blog_like", { blogSlug: props.slug });
      mutate();
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`flex items-center gap-1 ${
        hasLiked ? "text-purple-400" : "text-gray-400"
      }`}
      disabled={isMutating}
    >
      {isMutating ? (
        <Loader className="animate-spin" size={16} />
      ) : (
        <>
          <Heart size={16} className={hasLiked ? "fill-purple-500" : ""} />
          {isLoading ? (
            <Skeleton className="rounded-full w-6 h-6" />
          ) : (
            <span>{likes}</span>
          )}
        </>
      )}
    </Button>
  );
};

export { BlogLike };

interface BlogLikeProps {
  slug: string;
}
