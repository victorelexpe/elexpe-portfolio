"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL_HREF, SOCIAL_LINKS } from "@/lib/constants";

const LINK_CLASSES = "text-ink-faint transition-colors hover:text-accent";

export const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="mt-24 flex flex-col gap-4 border-t border-rule pt-5 font-sans text-meta sm:flex-row sm:items-center sm:justify-between">
      {isHome ? (
        <span className="text-ink">Victor Elexpe</span>
      ) : (
        <Link href="/" className={LINK_CLASSES}>
          Victor Elexpe
        </Link>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {pathname === "/notes" ? null : (
          <Link href="/notes" className={LINK_CLASSES}>
            Notes
          </Link>
        )}
        {pathname === "/sim-racing" ? null : (
          <Link href="/sim-racing" className={LINK_CLASSES}>
            Sim racing
          </Link>
        )}
        <a href={CONTACT_EMAIL_HREF} className={LINK_CLASSES}>
          Email
        </a>
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASSES}
        >
          LinkedIn
        </a>
        <a
          href={SOCIAL_LINKS.TWITTER}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASSES}
        >
          @elexpeDev
        </a>
        <a href="/feed.xml" className={LINK_CLASSES}>
          RSS
        </a>
      </div>
    </footer>
  );
};
