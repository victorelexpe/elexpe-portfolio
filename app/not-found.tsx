import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20">
      <h1 className="font-serif text-hero text-ink">404</h1>
      <p className="mt-6 font-serif text-editorial text-ink-muted">
        Page not found.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-sans text-meta text-accent-ink transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
      <Footer />
    </main>
  );
}
