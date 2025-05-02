"use client";

import useSWR from "swr";
import { toast } from "sonner";
import { useState } from "react";
import posthog from "posthog-js";
import { formatDistance } from "date-fns";
import { MessageSquare, Heart, User, Loader } from "lucide-react";

import { Skeleton } from "./ui/skeleton";
import useSWRMutation from "swr/mutation";
import { fetcher, mutator } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { PostComment } from "@/db/post.types";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogCommentsProps {
  blogSlug: string;
}

export const BlogComments: React.FC<BlogCommentsProps> = ({ blogSlug }) => {
  const [commentText, setCommentText] = useState("");

  const { data, isLoading, mutate } = useSWR(
    `/api/post/${blogSlug}/comment`,
    fetcher
  );
  const { trigger, isMutating } = useSWRMutation(
    `/api/post/${blogSlug}/comment`,
    mutator
  );

  const comments = data?.data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trigger({ comment: commentText })
      .then(() => {
        mutate();
        setCommentText("");
        toast.success("Commented successfully");
        posthog.capture("post_comment", { blogSlug });
      })
      .catch((error) => {
        toast.error("Error commenting", {
          description: (error as Error).message,
        });
        posthog.capture("post_comment_fail", { blogSlug, error, commentText });
      });
  };

  return (
    <div className="mt-12 pt-8 border-gray-800 border-t">
      <h3 className="flex items-center gap-2 mb-6 font-space-grotesk font-bold text-xl">
        <MessageSquare size={20} />
        Comments{" "}
        {isLoading ? <Skeleton className="w-8 h-8" /> : comments?.length || 0}
      </h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="mb-3 min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!commentText.trim() || isMutating}>
            {isMutating ? <Loader className="animate-spin" /> : "Post Comment"}
          </Button>
        </div>
      </form>

      {isLoading ? (
        <Skeleton className="w-full h-24" />
      ) : (
        <>
          {comments?.length > 0 ? (
            <div className="space-y-6">
              {comments?.map((comment: PostComment[number]) => (
                <div
                  key={comment.id}
                  className="bg-secondary/10 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="border border-gray-700 w-8 h-8">
                        {avatar ? (
                          <AvatarImage src={avatar} alt={author} />
                        ) : (
                          <AvatarFallback className="bg-secondary">
                            <User size={14} />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-medium">{author}</p>
                        <p className="text-gray-400 text-xs">
                          {formatDistance(
                            new Date(comment.createdAt),
                            new Date(),
                            {
                              addSuffix: true,
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3 text-gray-300">{comment.comment}</p>
                  <CommentLike
                    id={comment.id}
                    slug={blogSlug}
                    likesCount={comment.likesCount}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="py-8 text-gray-400 text-center">
              Be the first to comment!
            </p>
          )}
        </>
      )}
    </div>
  );
};

const author = "Anonymous";
const avatar = "/axole-maranjana.jpg";

const CommentLike = ({
  id,
  slug,
  likesCount,
}: {
  id: number;
  slug: string;
  likesCount: number;
}) => {
  const [liked, setLiked] = useState(false);

  const { trigger, isMutating } = useSWRMutation(
    `/api/post/${slug}/comment/like?id=${id}`,
    fetcher
  );

  const onLikeComment = () => {
    if (liked) {
      setLiked(true);
      posthog.capture("comment_like", { id });
      return;
    }

    setLiked(false);
    trigger();
    posthog.capture("comment_dislike", { id });
  };

  return (
    <button
      disabled={isMutating}
      onClick={() => onLikeComment && onLikeComment()}
      className="flex items-center gap-1 text-gray-400 hover:text-purple-400 text-sm transition-colors"
    >
      <Heart
        size={14}
        className={
          liked
            ? "fill-purple-500 text-purple-500"
            : likesCount > 0
            ? "text-purple-500"
            : ""
        }
      />
      {isMutating ? (
        <Loader className="animate-spin" />
      ) : (
        <span>{likesCount > 0 ? likesCount : "Like"}</span>
      )}
    </button>
  );
};
