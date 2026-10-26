import type { Metadata } from "next";

export const siteMetadata = {
  title: "Victor Elexpe — Data, Cloud & AI Systems",
  description:
    "I build data, cloud, and AI systems designed to still make sense once the hype fades. Based in Madrid.",
  siteUrl: "https://elexpe.dev",
  siteName: "Victor Elexpe",
  author: "Victor Elexpe",
  twitterHandle: "@elexpeDev",
  locale: "en_US",
  language: "en",
  keywords: [
    "Victor Elexpe",
    "AI Platform Architect",
    "Data Engineer",
    "Cloud Architect",
    "Data Platforms",
    "AI in production",
    "Google Cloud",
    "Almanzor Cloud",
    "Philosophy of Technology",
    "Madrid",
  ],
};

export const absoluteUrl = (path = "/") => new URL(path, siteMetadata.siteUrl).toString();

// Feeds every page advertises. Kept here because a page's `alternates` replaces
// the layout's instead of merging with it.
export const alternateTypes = {
  "application/rss+xml": [{ url: "/feed.xml", title: "Victor Elexpe — Notes" }],
  "text/markdown": [{ url: "/llms.txt", title: "Site summary for LLMs" }],
};

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
  publishedTime?: string;
};

// Canonical, Open Graph and Twitter tags for one page. The share image comes
// from the route's own `opengraph-image`, so it is not set here.
export const pageMetadata = ({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata => {
  const fullTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.title;
  const url = absoluteUrl(path);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url, types: alternateTypes },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      ...(type === "article"
        ? { publishedTime, authors: [absoluteUrl("/")] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteMetadata.twitterHandle,
      site: siteMetadata.twitterHandle,
    },
  };
};
