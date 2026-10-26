import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Notes — Victor Elexpe";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "Notes",
    title: "Essays on how technology shapes the people who use it",
    subtitle: "Data, cloud, AI, and the philosophy around them.",
  });
}
