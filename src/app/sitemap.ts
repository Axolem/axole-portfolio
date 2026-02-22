import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
			images: [`${baseUrl}/axole-maranjana.jpg`],
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/axole-maranjana-cv.pdf`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/blog/building-extensible-http-response-plugins-javascript`,
			lastModified: new Date("02/05/2025"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/architecting-enterprise-multi-tenant-saas-part-1`,
			lastModified: new Date("02/22/2026"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?author=Axole%20Maranjana`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?tag=bun`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?tag=typescript`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?tag=plugins`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?tag=architecture`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog?tag=web-development`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];
}

const baseUrl = "https://axole.dotenv.co.za";
