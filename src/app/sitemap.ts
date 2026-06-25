import { MetadataRoute } from "next";
import { getModules, getExercises } from "@/lib/content";

const siteUrl = "https://vibe-course.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const modules = getModules().map((m) => ({
    url: `${siteUrl}/modules/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const exercises = getExercises().map((e) => ({
    url: `${siteUrl}/exercices/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/modules`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/exercices`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...modules,
    ...exercises,
  ];
}
