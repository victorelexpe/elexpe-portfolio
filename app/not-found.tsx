import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col justify-center px-6 py-16">
      <h1 className="text-xl font-normal text-stone-900">404</h1>
      <p className="mt-2 text-stone-600">Page not found.</p>
      <Link
        href="/"
        className="mt-8 text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-500 focus:outline-none focus-visible:decoration-stone-600"
        aria-label="Return to homepage"
      >
        Return home
      </Link>
    </main>
  );
}
