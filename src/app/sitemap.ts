import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			images: [`${baseUrl}/axole-maranjana.jpg`, `${baseUrl}/og.png`],
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
			images: [`${baseUrl}/blog-og.png`],
		},
		{
			url: `${baseUrl}/blog/building-extensible-http-response-plugins-javascript`,
			lastModified: new Date("2025-05-02"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/architecting-enterprise-multi-tenant-saas-part-1`,
			lastModified: new Date("2026-02-22"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/global-dividend-portfolio-high-yield-income-strategy`,
			lastModified: new Date("2026-04-21"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}

const baseUrl = "https://axole.dotenv.co.za";
