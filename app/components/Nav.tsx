import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export const Nav = () => {
  return (
    <header className="mx-auto flex max-w-xl items-center justify-between px-6 py-6">
      <Link
        href="/"
        className="text-stone-900 transition-colors hover:text-stone-600 focus:outline-none focus-visible:underline"
        aria-label="Victor Elexpe home"
      >
        Victor Elexpe
      </Link>

      <nav aria-label="Main navigation" className="flex gap-5">
        {SITE_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
