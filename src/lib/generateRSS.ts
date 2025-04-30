import { BlogPost } from "@/types/blog";

export const generateRSS = (
  posts: BlogPost[],
  siteUrl: string = "https://axole.dotenv.co.za"
): string => {
  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      ${post.author ? `<author>${post.author.name}</author>` : ""}
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("")}
    </item>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Axole Maranjana's Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Technical articles, tutorials, and insights from Axole Maranjana - Software Developer & Tech Entrepreneur.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;
};
