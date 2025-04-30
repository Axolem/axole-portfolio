"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { RSSFeed } from "@/components/RSSFeed";
import { BlogList } from "@/components/BlogList";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    // const params = new URLSearchParams(location.search);
    const tagParam = params.get("tag");
    const authorParam = params.get("author");

    if (tagParam) setSelectedTag(tagParam);
    if (authorParam) setSelectedAuthor(authorParam);
  }, [params]);

  const handleTagFilter = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    // Reset author filter when a tag is selected
    if (selectedAuthor && selectedTag !== tag) {
      setSelectedAuthor(null);
    }
  };

  const handleAuthorFilter = (author: string) => {
    setSelectedAuthor(selectedAuthor === author ? null : author);
    // Reset tag filter when an author is selected
    if (selectedTag && selectedAuthor !== author) {
      setSelectedTag(null);
    }
  };

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
                  <button
                    className="flex items-center bg-purple-500/20 ml-2 px-3 py-1 rounded-full text-purple-300 text-sm"
                    onClick={() => setSelectedTag(null)}
                  >
                    Tag: {selectedTag}
                    <span className="ml-1">×</span>
                  </button>
                )}
                {selectedAuthor && (
                  <button
                    className="flex items-center bg-purple-500/20 ml-2 px-3 py-1 rounded-full text-purple-300 text-sm"
                    onClick={() => setSelectedAuthor(null)}
                  >
                    Author: {selectedAuthor}
                    <span className="ml-1">×</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <BlogList
            selectedTag={selectedTag}
            selectedAuthor={selectedAuthor}
            onTagClick={handleTagFilter}
            onAuthorClick={handleAuthorFilter}
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
