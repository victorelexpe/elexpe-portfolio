import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NoteStructuredData } from "@/components/StructuredData";
import { NOTES } from "@/lib/constants";
import { pageMetadata, siteMetadata } from "@/lib/metadata";
import { formatDate, nextNote, readingTime } from "@/lib/notes";

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

  return pageMetadata({
    title: note.title,
    description: note.description,
    path: `/notes/${note.slug}`,
    type: "article",
    publishedTime: note.date,
  });
};

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = NOTES.find((item) => item.slug === slug);

  if (!note) {
    notFound();
  }

  const upcoming = nextNote(note.slug);

  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20">
      <NoteStructuredData note={note} />
      <article>
        <Link
          href="/notes"
          className="font-sans text-meta text-ink-faint transition-colors hover:text-accent"
        >
          ← Notes
        </Link>

        <h1 className="mt-6 font-serif text-page-title text-ink">
          {note.title}
        </h1>

        <p className="mt-4 font-sans text-meta text-ink-faint">
          By{" "}
          <Link href="/" rel="author" className="text-ink-muted transition-colors hover:text-accent">
            {siteMetadata.author}
          </Link>{" "}
          · <time dateTime={note.date}>{formatDate(note.date)}</time> · {readingTime(note)}
        </p>

        <div className="mt-12 space-y-6 font-serif text-editorial text-ink-muted">
          {note.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? "text-xl leading-relaxed text-ink" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <Link
        href={`/notes/${upcoming.slug}`}
        className="group mt-16 block border-t border-rule pt-5"
      >
        <span className="font-sans text-meta text-ink-faint">Next</span>
        <span className="mt-1 block font-serif text-note-title text-ink transition-colors group-hover:text-accent">
          {upcoming.title} →
        </span>
      </Link>

      <Footer />
    </main>
  );
}
