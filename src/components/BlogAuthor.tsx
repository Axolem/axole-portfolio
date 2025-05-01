import Link from "next/link";
import { ArrowUpRightIcon, User } from "lucide-react";

import { Button } from "./ui/button";
import type { Post } from "@/lib/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogAuthorProps {
  author: Post["author"];
  date: string;
  showBio?: boolean;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({
  author,
  date,
  // showBio = false,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="border border-gray-700 w-10 h-10">
        {author.image ? (
          <AvatarImage src={author.image} alt={author.name} />
        ) : (
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            <User size={16} className="text-gray-400" />
          </AvatarFallback>
        )}
      </Avatar>
      <div>
        <div className="flex gap-4">
          <div>
            <Link
              href={`/blog?author=${encodeURIComponent(author.name)}`}
              scroll={false}
              className="font-medium text-white hover:text-purple-300 transition-colors"
            >
              {author.name}
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{date}</span>
              {/* {showBio && author.bio && (
            <>
              <span>•</span>
              <span>{author.bio}</span>
            </>
          )} */}
            </div>
          </div>
          {author.url && (
            <Link passHref href={author.url}>
              <Button size="icon">
                <ArrowUpRightIcon />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
