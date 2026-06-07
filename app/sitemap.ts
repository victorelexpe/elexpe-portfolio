import { siteMetadata } from "./lib/metadata";
import { NOTES } from "./lib/constants";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/work",
    "/notes",
    ...NOTES.map((note) => `/notes/${note.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
}
