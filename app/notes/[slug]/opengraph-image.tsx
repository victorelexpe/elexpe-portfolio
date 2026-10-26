import { NOTES } from "@/lib/constants";
import { formatDate } from "@/lib/notes";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "A note by Victor Elexpe";

export const generateStaticParams = () => NOTES.map((note) => ({ slug: note.slug }));

type OgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OgImage({ params }: OgImageProps) {
  const { slug } = await params;
  const note = NOTES.find((item) => item.slug === slug) ?? NOTES[0];

  return renderOgCard({
    eyebrow: "Notes",
    title: note.title,
    subtitle: note.description,
    footer: formatDate(note.date),
  });
}
