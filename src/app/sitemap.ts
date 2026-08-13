import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nextgenbookpublishers.com";

  const routes = [
    "/home",
    "/services",
    "/ghostwriting",
    "/editing-proofreading",
    "/cover-design-typesetting",
    "/publishing-distribution",
    "/book-marketing-pr",
    "/audiobook-production",
    "/process",
    "/Ourbook",
    "/pricing",
   
    "/contact",
    
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/home" ? "weekly" : "monthly",
    priority: route === "/home" ? 1.0 : 0.8,
  }));
}