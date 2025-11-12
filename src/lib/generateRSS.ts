import "server-only";

import type { Post } from "./blog";

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
	return unsafe.replace(/[<>&'"]/g, function (c) {
		switch (c) {
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "'":
				return "&apos;";
			case '"':
				return "&quot;";
			default:
				return c; // Should not happen with the regex
		}
	});
}

export const generateRSS = (
	posts: Post[],
	siteUrl: string = "https://axole.dotenv.co.za",
): string => {
	const rssItems = posts
		.map(
			(post) => `
    <item>
      <title>${escapeXml(post.title)}</title> 
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.author ? `<author>${escapeXml(post.author.name)}</author>` : ""} 
      ${post.tags
				.map((tag) => `<category>${escapeXml(tag)}</category>`)
				.join("")} 
    </item>
  `,
		)
		.join("");

	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml("Axole Maranjana's Blog")}</title> 
    <link>${siteUrl}/blog</link>
    <description>${escapeXml(
			"Technical articles, tutorials, and insights from Axole Maranjana - Software Developer & Tech Entrepreneur.",
		)}</description> 
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;
};
