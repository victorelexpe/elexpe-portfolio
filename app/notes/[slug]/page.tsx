import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NOTES } from "@/lib/constants";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return NOTES.map((note) => ({
    slug: note.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: NotePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const note = NOTES.find((item) => item.slug === slug);

  if (!note) {
    return {
      title: "Note",
    };
  }

  return {
    title: note.title,
    description: note.description,
  };
};

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = NOTES.find((item) => item.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <Link
        href="/notes"
        className="text-sm text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
      >
        Notes
      </Link>

      <article className="mt-8">
        <h1 className="text-xl font-normal text-stone-900">{note.title}</h1>
        <p className="mt-4 text-stone-700 leading-relaxed">{note.description}</p>

        <div className="mt-8 space-y-5 text-stone-600 leading-relaxed">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
