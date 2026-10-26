import {
  ABOUT_BIO,
  EDUCATION,
  HOME_INTRO,
  NOTES,
  SECTORS,
  SERVICES,
  SIM_RACING,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from "./constants";
import { absoluteUrl, siteMetadata } from "./metadata";

// llms.txt (https://llmstxt.org): a Markdown map of the site for LLMs and agents,
// built from the same data as the pages so it never drifts.
export const buildLlmsTxt = ({ full }: { full: boolean }) => {
  const lines: string[] = [
    `# ${siteMetadata.author}`,
    "",
    `> ${HOME_INTRO} ${siteMetadata.author} is an AI Platform Architect based in Madrid, founder of Almanzor Cloud, who writes about how technology shapes the people who use it.`,
    "",
    ...ABOUT_BIO.flatMap((paragraph) => [paragraph, ""]),
    "## What I do",
    "",
    ...SERVICES.map((service) => `- **${service.title}**: ${service.description}`),
    `- Sectors: ${SECTORS.map((item) => `${item.sector} (${item.company})`).join(", ")}`,
    `- More: [What I do](${absoluteUrl("/what-i-do")})`,
    "",
    "## Experience",
    "",
    ...WORK_EXPERIENCE.map(
      (item) =>
        `- [${item.company}](${item.url}): ${item.role}${"current" in item && item.current ? " (current)" : ""}`,
    ),
    "",
    "## Education",
    "",
    ...EDUCATION.map(
      (item) => `- [${item.institution}](${item.url}): ${item.degree}${item.inProgress ? " (in progress)" : ""}`,
    ),
    "",
    "## Notes",
    "",
    ...NOTES.map(
      (note) => `- [${note.title}](${absoluteUrl(`/notes/${note.slug}`)}) (${note.date}): ${note.description}`,
    ),
    "",
    "## Contact",
    "",
    `- LinkedIn: ${SOCIAL_LINKS.LINKEDIN}`,
    `- X: ${SOCIAL_LINKS.TWITTER}`,
    `- GitHub: ${SOCIAL_LINKS.GITHUB}`,
    `- Email: use the contact link on ${absoluteUrl("/")}`,
    "",
    "## Optional",
    "",
    `- [Sim racing](${absoluteUrl("/sim-racing")}): ${SIM_RACING.platforms.join(" and ")}, usually in a ${SIM_RACING.car}.`,
    `- [RSS feed](${absoluteUrl("/feed.xml")})`,
    full ? "" : `- [Full text of every note](${absoluteUrl("/llms-full.txt")})`,
  ];

  if (full) {
    lines.push("", "---", "", "# Notes (full text)", "");
    for (const note of NOTES) {
      lines.push(
        `## ${note.title}`,
        "",
        `${absoluteUrl(`/notes/${note.slug}`)} · ${note.date}`,
        "",
        ...note.paragraphs.flatMap((paragraph) => [paragraph, ""]),
      );
    }
  }

  return `${lines.join("\n").trim()}\n`;
};

export const markdownResponse = (body: string) =>
  new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
