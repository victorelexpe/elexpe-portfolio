import { Metadata } from "next";
import { WORK_EXPERIENCE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description: "Work experience of Victor Elexpe.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-xl font-normal text-stone-900">Work</h1>

      <ul className="mt-8 space-y-4">
        {WORK_EXPERIENCE.map((item) => (
          <li key={item.company} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
            >
              {item.company}
            </a>
            <span className="text-stone-600">{item.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
