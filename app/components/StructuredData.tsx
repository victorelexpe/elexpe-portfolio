import { EDUCATION, NOTES, SERVICES, SOCIAL_LINKS, WORK_EXPERIENCE } from "@/lib/constants";
import { absoluteUrl, siteMetadata } from "@/lib/metadata";

type Note = (typeof NOTES)[number];

const PERSON_ID = absoluteUrl("/#person");
const WEBSITE_ID = absoluteUrl("/#website");

const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const organization = (name: string, url: string, type = "Organization") => ({
  "@type": type,
  name,
  url,
});

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteMetadata.author,
  url: absoluteUrl("/"),
  image: absoluteUrl("/profile.jpeg"),
  jobTitle: "AI Platform Architect",
  description: siteMetadata.description,
  sameAs: [SOCIAL_LINKS.LINKEDIN, SOCIAL_LINKS.TWITTER, SOCIAL_LINKS.GITHUB],
  knowsAbout: [
    ...SERVICES.map((service) => service.title),
    "Data Engineering",
    "Google Cloud",
    "Philosophy of Technology",
  ],
  worksFor: WORK_EXPERIENCE.filter((item) => "current" in item && item.current).map(
    (item) => organization(item.company, item.url),
  ),
  alumniOf: EDUCATION.filter((item) => !item.inProgress).map((item) =>
    organization(item.institution, item.url, "CollegeOrUniversity"),
  ),
  affiliation: EDUCATION.filter((item) => item.inProgress).map((item) =>
    organization(item.institution, item.url, "CollegeOrUniversity"),
  ),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absoluteUrl("/"),
  name: siteMetadata.siteName,
  description: siteMetadata.description,
  inLanguage: siteMetadata.language,
  publisher: { "@id": PERSON_ID },
};

// Person and WebSite, on every page.
export const SiteStructuredData = () => (
  <JsonLd data={{ "@context": "https://schema.org", "@graph": [person, website] }} />
);

// Home: the page is about the person.
export const ProfilePageStructuredData = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: absoluteUrl("/"),
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    }}
  />
);

const notePosting = (note: Note) => ({
  "@type": "BlogPosting",
  "@id": absoluteUrl(`/notes/${note.slug}#article`),
  headline: note.title,
  description: note.description,
  url: absoluteUrl(`/notes/${note.slug}`),
  datePublished: note.date,
  author: { "@id": PERSON_ID },
});

export const BlogStructuredData = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": absoluteUrl("/notes#blog"),
      url: absoluteUrl("/notes"),
      name: `${siteMetadata.siteName} — Notes`,
      description:
        "Short essays on how data, cloud, and AI systems shape the people who end up using them.",
      inLanguage: siteMetadata.language,
      author: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
      blogPost: NOTES.map(notePosting),
    }}
  />
);

export const NoteStructuredData = ({ note }: { note: Note }) => {
  const url = absoluteUrl(`/notes/${note.slug}`);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            ...notePosting(note),
            image: absoluteUrl(`/notes/${note.slug}/opengraph-image`),
            dateModified: note.date,
            inLanguage: siteMetadata.language,
            wordCount: note.paragraphs.join(" ").split(/\s+/).length,
            articleBody: note.paragraphs.join("\n\n"),
            mainEntityOfPage: url,
            isPartOf: { "@id": absoluteUrl("/notes#blog") },
            publisher: { "@id": PERSON_ID },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Notes", item: absoluteUrl("/notes") },
              { "@type": "ListItem", position: 3, name: note.title, item: url },
            ],
          },
        ],
      }}
    />
  );
};
