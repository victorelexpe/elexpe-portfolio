import { HOME_INTRO } from "@/lib/constants";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Victor Elexpe — Data, Cloud & AI Systems";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "AI Platform Architect",
    title: HOME_INTRO,
    photo: "large",
  });
}
