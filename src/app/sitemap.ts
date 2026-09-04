import type { MetadataRoute } from "next";
import { stories } from "@/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const storyPages: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `https://sewapaws.com/stories/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://sewapaws.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://sewapaws.com/stories",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...storyPages,
  ];
}