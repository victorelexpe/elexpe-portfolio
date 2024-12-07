import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-4xl font-bold">404</h2>
      <p className="mb-8 text-xl">Page not found</p>
      <Link 
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Return to homepage"
      >
        Return Home
      </Link>
    </div>
  );
}