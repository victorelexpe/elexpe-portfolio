import type { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.siteName,
    description: siteMetadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#eef4f5",
    theme_color: "#eef4f5",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
