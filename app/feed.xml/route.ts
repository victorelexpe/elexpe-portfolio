import { NOTES } from "@/lib/constants";
import { siteMetadata } from "@/lib/metadata";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const items = NOTES.map((note) => {
    const url = `${siteMetadata.siteUrl}/notes/${note.slug}`;
    return `    <item>
      <title>${escapeXml(note.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(note.date).toUTCString()}</pubDate>
      <description>${escapeXml(note.description)}</description>
      <dc:creator>${escapeXml(siteMetadata.author)}</dc:creator>
      <content:encoded><![CDATA[${note.paragraphs.map((paragraph) => `<p>${escapeXml(paragraph)}</p>`).join("")}]]></content:encoded>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteMetadata.siteName)} — Notes</title>
    <link>${siteMetadata.siteUrl}/notes</link>
    <description>${escapeXml(siteMetadata.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(NOTES[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
