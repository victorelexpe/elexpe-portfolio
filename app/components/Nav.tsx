"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  EmailIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/ContactIcons";
import { CONTACT_LINKS, NAV_LINKS } from "@/lib/constants";

const CONTACT_ICONS = {
  email: EmailIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

const ContactMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 font-sans text-meta text-accent-ink transition-opacity hover:opacity-90"
      >
        Contact
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open ? (
        <ul className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-rule bg-paper p-1.5 shadow-lg shadow-ink/10">
          {CONTACT_LINKS.map((link) => {
            const Icon = CONTACT_ICONS[link.icon];
            const isEmail = link.icon === "email";
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent/10"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  <span className="flex-1">
                    <span className="block font-sans text-meta text-ink">
                      {link.label}
                    </span>
                    <span className="block font-sans text-xs text-ink-faint">
                      {link.detail}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-accent/10"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
          {open ? (
            <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-rule bg-paper shadow-lg shadow-ink/5"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-measure px-6 py-4">
            <ul>
              {NAV_LINKS.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 font-serif text-note-title transition-colors hover:text-accent ${
                        isActive ? "text-accent" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-3 border-t border-rule pt-3">
              {CONTACT_LINKS.map((link) => {
                const Icon = CONTACT_ICONS[link.icon];
                const isEmail = link.icon === "email";
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2.5 font-sans text-meta text-ink transition-colors hover:text-accent"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {link.label}
                      <span className="text-ink-faint">{link.detail}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-measure items-center justify-between gap-4 px-6 lg:max-w-6xl 2xl:max-w-7xl">
        <Link
          href="/"
          className="font-serif text-lg text-ink transition-colors hover:text-accent"
          aria-label="Victor Elexpe, home"
        >
          Victor Elexpe
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-sans text-meta transition-colors hover:text-accent ${
                  isActive ? "text-ink" : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ContactMenu />
        </nav>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
};
