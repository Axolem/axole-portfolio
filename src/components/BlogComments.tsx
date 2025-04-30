"use client";

import { useState } from "react";
import { formatDistance } from "date-fns";
import { MessageSquare, Heart, User } from "lucide-react";

import type { Comment } from "@/types/blog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogCommentsProps {
  blogSlug: string;
}

export const BlogComments: React.FC<BlogCommentsProps> = ({ blogSlug }) => {
  const [commentText, setCommentText] = useState("");

  const { data: comments } = { data: [] as Comment[] };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-12 pt-8 border-gray-800 border-t">
      <h3 className="flex items-center gap-2 mb-6 font-space-grotesk font-bold text-xl">
        <MessageSquare size={20} />
        Comments ({comments.length})
      </h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="mb-3 min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!commentText.trim()}>
            Post Comment
          </Button>
        </div>
      </form>

      {comments?.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-secondary/10 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="border border-gray-700 w-8 h-8">
                    {comment.avatar ? (
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                    ) : (
                      <AvatarFallback className="bg-secondary">
                        <User size={14} />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <p className="font-medium">{comment.author}</p>
                    <p className="text-gray-400 text-xs">
                      {formatDistance(new Date(comment.date), new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-3 text-gray-300">{comment.content}</p>
              <button
                // onClick={() => onLikeComment && onLikeComment(comment.id)}
                className="flex items-center gap-1 text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                <Heart
                  size={14}
                  className={
                    comment.likes > 0 ? "fill-purple-500 text-purple-500" : ""
                  }
                />
                <span>{comment.likes > 0 ? comment.likes : "Like"}</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-8 text-gray-400 text-center">
          Be the first to comment!
        </p>
      )}
    </div>
  );
};
