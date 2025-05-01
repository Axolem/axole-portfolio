import Link from "next/link";
import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogAuthorProps {
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  date: string;
  showBio?: boolean;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({
  author,
  date,
  showBio = false,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="border border-gray-700 w-10 h-10">
        {author.avatar ? (
          <AvatarImage src={author.avatar} alt={author.name} />
        ) : (
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            <User size={16} className="text-gray-400" />
          </AvatarFallback>
        )}
      </Avatar>
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
          {showBio && author.bio && (
            <>
              <span>•</span>
              <span>{author.bio}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
