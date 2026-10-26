import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Experience — Victor Elexpe";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "Experience",
    title: "Telecom, media, insurance, and academia",
    subtitle: "Where I have worked and where I studied.",
  });
}
