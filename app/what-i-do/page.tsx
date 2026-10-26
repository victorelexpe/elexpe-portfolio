import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ServiceStack } from "@/components/ServiceStack";
import { EmailIcon } from "@/components/icons/ContactIcons";
import { CONTACT_EMAIL_HREF, CONTACT_PITCH, SECTORS } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "What I do",
  description:
    "Data platforms, cloud architecture, and AI in production: the layers Victor Elexpe builds and looks after, across telecom, media, insurance, and academia.",
  path: "/what-i-do",
});

export default function WhatIDoPage() {
  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20 lg:max-w-6xl 2xl:max-w-7xl">
      <h1 className="font-serif text-page-title text-ink">What I do</h1>
      <p className="mt-4 max-w-xl font-serif text-editorial text-ink-muted">
        Three layers that depend on each other. AI is only as good as the data
        underneath it, and both need infrastructure that someone can still
        operate a year from now.
      </p>

      <div className="mt-16">
        <ServiceStack variant="full" />
      </div>

      <div className="mt-20 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <h2 className="shrink-0 font-sans text-meta text-ink-faint">Sectors</h2>
        <ul className="flex flex-wrap gap-2">
          {SECTORS.map((item) => (
            <li
              key={item.sector}
              className="rounded-full border border-rule px-3 py-1 font-sans text-meta text-ink"
            >
              {item.sector}
              <span className="text-ink-faint"> · {item.company}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-rule p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md font-serif text-editorial text-ink">
          {CONTACT_PITCH}
        </p>
        <a
          href={CONTACT_EMAIL_HREF}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-sans text-meta text-accent-ink transition-opacity hover:opacity-90"
        >
          <EmailIcon className="h-4 w-4" />
          Get in touch
        </a>
      </div>

      <Footer />
    </main>
  );
}
