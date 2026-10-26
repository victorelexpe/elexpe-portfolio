import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BlogStructuredData } from "@/components/StructuredData";
import { NOTES } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { formatDate, readingTime } from "@/lib/notes";

export const metadata: Metadata = pageMetadata({
  title: "Notes",
  description:
    "Short essays by Victor Elexpe on how data, cloud, and AI systems shape the people who end up using them.",
  path: "/notes",
});

export default function NotesPage() {
  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20 lg:max-w-6xl 2xl:max-w-7xl">
      <BlogStructuredData />
      <h1 className="font-serif text-page-title text-ink">Notes</h1>

      <div className="mt-16 divide-y divide-rule border-t border-rule lg:max-w-3xl">
        {NOTES.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group block py-6"
          >
            <p className="mb-2 font-sans text-meta text-ink-faint">
              {formatDate(note.date)} · {readingTime(note)}
            </p>
            <h2 className="font-serif text-note-title text-ink transition-colors group-hover:text-accent">
              {note.title}
            </h2>
            <p className="mt-2 font-serif text-editorial text-ink-muted">
              {note.description}
            </p>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
