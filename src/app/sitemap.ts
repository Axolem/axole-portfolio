import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [`${baseUrl}/axole-maranjana.jpg`]
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/axole-maranjana-cv.pdf`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/blog/building-extensible-http-response-plugins-javascript`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
  ];
}

const baseUrl = "https://axole.dotenv.co.za";
