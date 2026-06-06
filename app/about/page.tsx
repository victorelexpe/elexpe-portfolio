import { Metadata } from "next";
import { ABOUT_BIO, CONTACT_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About Victor Elexpe — Cloud Architect and Founder based in Madrid, Spain.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-xl font-normal text-stone-900">About</h1>

      <div className="mt-8 space-y-4 text-stone-700 leading-relaxed">
        {ABOUT_BIO.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section aria-labelledby="contact-heading" className="mt-12">
        <h2 id="contact-heading" className="text-sm text-stone-500">
          Contact
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {CONTACT_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
                aria-label={link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
