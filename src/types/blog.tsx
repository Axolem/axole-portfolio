
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    readingTime: number;
    tags: string[];
    author: {
      name: string;
      avatar?: string;
      bio?: string;
    };
    coverImage?: string;
    likes?: number;
    comments?: Comment[];
  }
  
  export interface Comment {
    id: string;
    author: string;
    avatar?: string;
    content: string;
    date: string;
    likes: number;
  }
  