import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-normal text-stone-900">Victor Elexpe</h1>
      <p className="mt-2 text-stone-600">Cloud Architect</p>

      <nav aria-label="Site sections" className="mt-12 flex flex-col gap-2">
        {SITE_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
