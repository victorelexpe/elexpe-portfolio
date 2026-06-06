import { siteMetadata } from "./lib/metadata";

export default function sitemap() {
  const routes = ["", "/about", "/work", "/notes"].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
