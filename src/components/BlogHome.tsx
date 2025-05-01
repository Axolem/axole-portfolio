import Link from "next/link";

import type { Post } from "@/lib/blog";
import { RSSFeed } from "@/components/RSSFeed";
import { BlogList } from "@/components/BlogList";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const BlogHome = ({
  selectedTag,
  selectedAuthor,
  data,
}: {
  selectedTag: string;
  selectedAuthor: string;
  data?: Post[];
}) => {
  return (
    <div className="relative bg-background min-h-screen">
      <BackgroundEffects />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center mb-6">
            <h1 className="bg-clip-text bg-gradient-to-r from-white to-purple-400 font-space-grotesk font-bold text-transparent text-4xl md:text-5xl">
              Tech Insights & Tutorials
            </h1>
            <RSSFeed />
          </div>

          <p className="mb-6 max-w-3xl text-gray-400">
            Explorations in code, design, and entrepreneurship. I share what
            I&apos;m learning and building to help others on their journey.
          </p>

          <div className="mb-12">
            <BlogNewsletter />
          </div>

          <div className="mb-8">
            {(selectedTag || selectedAuthor) && (
              <div className="flex items-center mb-6">
                <span className="text-gray-400">Filtering by: </span>
                {selectedTag && (
                  <Link
                    href={{
                      pathname: "blog",
                      query: selectedAuthor ? { author: selectedAuthor } : {},
                    }}
                    scroll={false}
                    passHref
                  >
                    <button className="flex items-center bg-purple-500/20 ml-2 px-3 py-1 rounded-full text-purple-300 text-sm cursor-pointer">
                      Tag: {selectedTag}
                      <span className="ml-1">×</span>
                    </button>
                  </Link>
                )}
                {selectedAuthor && (
                  <Link
                    href={{
                      pathname: "blog",
                      query: selectedTag ? { tag: selectedTag } : {},
                    }}
                    scroll={false}
                    passHref
                  >
                    <button className="flex items-center bg-purple-500/20 ml-2 px-3 py-1 rounded-full text-purple-300 text-sm cursor-pointer">
                      Author: {selectedAuthor}
                      <span className="ml-1">×</span>
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>

          <BlogList
            data={data}
            selectedTag={selectedTag}
            selectedAuthor={selectedAuthor}
          />
        </div>
      </section>
    </div>
  );
};

export { BlogHome };
