import type { Metadata } from "next";
import { EntryRow } from "@/components/EntryRow";
import { Footer } from "@/components/Footer";
import { EDUCATION, WORK_EXPERIENCE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Victor Elexpe's work on data, cloud, and AI platforms at Almanzor Cloud, Seguros Ocaso, Havas Media Group, and Telefónica, and his studies at UPM, TalTech, and UNED.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20 lg:max-w-6xl 2xl:max-w-7xl">
      <h1 className="font-serif text-page-title text-ink">Experience</h1>
      <p className="mt-4 max-w-xl font-serif text-editorial text-ink-muted">
        Telecom, media, insurance, and academia: different industries, the same
        job of building platforms that keep working after the launch.
      </p>

      <div className="mt-16 lg:max-w-3xl">
        <h2 className="mb-4 font-sans text-meta text-ink-faint">Work</h2>
        <div className="divide-y divide-rule border-t border-rule">
          {WORK_EXPERIENCE.map((item) => (
            <EntryRow
              key={item.company}
              title={item.company}
              subtitle={item.role}
              href={item.url}
              badge={"current" in item && item.current ? "Current" : undefined}
            />
          ))}
        </div>

        <h2 className="mb-4 mt-16 font-sans text-meta text-ink-faint">
          Education
        </h2>
        <div className="divide-y divide-rule border-t border-rule">
          {EDUCATION.map((item) => (
            <EntryRow
              key={item.institution}
              title={item.institution}
              subtitle={item.degree}
              href={item.url}
              badge={item.inProgress ? "In progress" : undefined}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
