import { NOTES } from "./constants";

type Note = (typeof NOTES)[number];

const WORDS_PER_MINUTE = 200;

export const readingTime = (note: Note) => {
  const words = note.paragraphs.join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
};

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

export const nextNote = (slug: string) => {
  const index = NOTES.findIndex((note) => note.slug === slug);
  return NOTES[(index + 1) % NOTES.length];
};
