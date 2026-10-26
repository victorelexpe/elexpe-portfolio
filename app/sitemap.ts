import type { MetadataRoute } from "next";
import { NOTES } from "./lib/constants";
import { absoluteUrl } from "./lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = NOTES[0].date;

  const pages = [
    { path: "/", priority: 1 },
    { path: "/what-i-do", priority: 0.8 },
    { path: "/experience", priority: 0.8 },
    { path: "/notes", priority: 0.8 },
    { path: "/sim-racing", priority: 0.4 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: latest,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...NOTES.map((note) => ({
      url: absoluteUrl(`/notes/${note.slug}`),
      lastModified: note.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
