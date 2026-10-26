import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "What I do — Victor Elexpe";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "What I do",
    title: "Data platforms, cloud architecture, and AI in production",
    subtitle: "Three layers I build and look after.",
  });
}
