import type { Metadata } from "next";
import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { ServiceStack } from "@/components/ServiceStack";
import { ProfilePageStructuredData } from "@/components/StructuredData";
import { ArrowUpRightIcon } from "@/components/icons/ContactIcons";
import {
  ABOUT_BIO,
  HOME_INTRO,
  NOTES,
  WORK_EXPERIENCE,
} from "@/lib/constants";
import { pageMetadata, siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  description: siteMetadata.description,
  path: "/",
  type: "profile",
});

const CURRENT_ROLE = WORK_EXPERIENCE[0];

export default function Page() {
  return (
    <>
      <ProfilePageStructuredData />
      <HeroBackground />
      <main className="mx-auto max-w-measure px-6 py-12 sm:py-16 lg:max-w-6xl 2xl:max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <Avatar size="lg" priority className="hidden lg:order-2 lg:col-span-4 lg:block lg:justify-self-end" />
          <div className="lg:order-1 lg:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <Avatar size="xs" priority className="lg:hidden" />
              <a
                href={CURRENT_ROLE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-0 items-center gap-2.5 rounded-full border border-rule bg-white/60 py-1.5 pl-3 pr-4 font-sans text-meta text-ink-muted transition-colors hover:border-accent"
              >
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="whitespace-nowrap">Currently building</span>
                <span className="hidden sm:inline-flex">
                  <CompanyLogo company={CURRENT_ROLE.company} size="xs" />
                </span>
                <span className="truncate text-ink transition-colors group-hover:text-accent">
                  {CURRENT_ROLE.company}
                </span>
                <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
              </a>
            </div>
            <h1 className="font-serif text-hero font-normal text-ink">{HOME_INTRO}</h1>
          </div>
        </div>

        <div className="mt-12 max-w-2xl space-y-6 font-serif text-editorial text-ink-muted">
          {ABOUT_BIO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-20">
          <p className="mb-4 font-sans text-meta text-ink-faint">What I do</p>
          <ServiceStack variant="preview" />
        </section>

        <section className="mt-20">
          <p className="mb-4 font-sans text-meta text-ink-faint">Latest notes</p>
          <ul className="grid grid-cols-1 border-t border-rule sm:grid-cols-2">
            {NOTES.slice(0, 4).map((note) => (
              <li key={note.slug} className="border-b border-rule">
                <Link href={`/notes/${note.slug}`} className="group block py-5 sm:pr-8">
                  <span className="font-serif text-note-title text-ink transition-colors group-hover:text-accent">
                    {note.title}
                  </span>
                  <span className="mt-1 block font-serif text-ink-muted">
                    {note.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/notes"
            className="mt-4 inline-block font-sans text-meta text-accent hover:underline"
          >
            All notes →
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
