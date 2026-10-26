import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Sim racing — Victor Elexpe";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "Sim racing",
    title: "Best laps in a McLaren 720S GT3 Evo",
    subtitle: "Assetto Corsa Competizione and iRacing.",
  });
}
