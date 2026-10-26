import { CompanyLogo } from "@/components/CompanyLogo";
import { ArrowUpRightIcon } from "@/components/icons/ContactIcons";

type EntryRowProps = {
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
};

export const EntryRow = ({ title, subtitle, href, badge }: EntryRowProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 py-5 transition-colors hover:text-accent"
  >
    <CompanyLogo company={title} size="sm" />
    <div className="flex-1">
      <div className="flex flex-wrap items-center gap-x-2">
        <span className="font-serif text-note-title text-ink group-hover:text-accent">
          {title}
        </span>
        {badge ? (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 font-sans text-xs uppercase tracking-wide text-accent">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-1 font-sans text-meta text-ink-faint">{subtitle}</p>
    </div>
    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);
