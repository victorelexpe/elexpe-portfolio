import { Metadata } from "next";
import Link from "next/link";
import { NOTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes and thoughts by Victor Elexpe.",
};

export default function NotesPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-xl font-normal text-stone-900">Notes</h1>

      <ul className="mt-8 space-y-3">
        {NOTES.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
            >
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
