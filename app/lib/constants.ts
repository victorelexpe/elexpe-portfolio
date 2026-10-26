import type { TrackId } from "./trackPaths";

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/victorelexpe",
  LINKEDIN: "https://linkedin.com/in/victorelexpe",
  TWITTER: "https://x.com/elexpeDev",
  SPOTIFY: "https://open.spotify.com/intl-es/artist/3tbBV517Zagfk4lMMpyjp7?si=E5tMWO5ITzWc6bwzthQHvg",
  EMAIL: "mailto:projects@elexpe.dev",
};

export const HOME_INTRO =
  "I build data, cloud, and AI systems designed to still make sense once the hype fades.";

export const WORK_EXPERIENCE = [
  {
    company: "Almanzor Cloud",
    role: "Founder & AI Platform Architect",
    url: "https://almanzor.cloud/",
    current: true,
  },
  {
    company: "Seguros Ocaso",
    role: "AI Platform Architect",
    url: "https://www.ocaso.es/",
    current: true,
  },
  {
    company: "Havas Media Group",
    role: "Platform Architect",
    url: "https://havasmedia.com/",
  },
  {
    company: "Telefónica",
    role: "Data Engineer",
    url: "https://www.telefonica.com/",
  },
  {
    company: "Technical University of Madrid",
    role: "Full-Stack Developer",
    url: "https://www.upm.es/",
  },
];

export const NAV_LINKS = [
  { href: "/what-i-do", label: "What I do" },
  { href: "/experience", label: "Experience" },
  { href: "/notes", label: "Notes" },
  { href: "/sim-racing", label: "Sim racing" },
];

export const SERVICES = [
  {
    title: "Data platforms",
    description:
      "Pipelines, models, and governance that teams can trust today and still understand a year from now.",
  },
  {
    title: "Cloud architecture",
    description:
      "Infrastructure on Google Cloud that is boring in the best way: observable, cost-aware, and easy to change.",
  },
  {
    title: "AI in production",
    description:
      "Taking AI from a promising demo to something people rely on every day, with evaluation, guardrails, and a clear owner.",
  },
];

export const SECTORS = [
  { sector: "Telecom", company: "Telefónica" },
  { sector: "Media & advertising", company: "Havas" },
  { sector: "Insurance", company: "Ocaso" },
  { sector: "Academia", company: "UPM" },
];

export const EDUCATION = [
  {
    institution: "UNED",
    degree: "BA in Philosophy",
    url: "https://www.uned.es/",
    inProgress: true,
  },
  {
    institution: "Technical University of Madrid",
    degree: "BSc in Computer Engineering",
    url: "https://www.upm.es/",
  },
  {
    institution: "Tallinn University of Technology",
    degree: "Erasmus exchange · Computer Engineering",
    url: "https://taltech.ee/en",
  },
];

export const SIM_RACING = {
  platforms: ["Assetto Corsa Competizione", "iRacing"],
  car: "McLaren 720S GT3 Evo",
  rig: "Logitech G920",
  // Estimated laps apply the Nürburgring 24h gap (8:20 vs ~8:05 fast GT3, +3.1%)
  // to fast GT3 reference times. Replace with real laps and drop `estimated`.
  laps: [
    { track: "Spa-Francorchamps", outline: "spa", country: "BE", lengthKm: 7.004, time: "2:20.7", estimated: true },
    { track: "Silverstone", outline: "silverstone", country: "GB", lengthKm: 5.891, time: "2:01.1", estimated: true },
    { track: "Barcelona-Catalunya", outline: "barcelona", country: "ES", lengthKm: 4.657, time: "1:45.7", estimated: true },
    { track: "Mount Panorama", outline: "bathurst", country: "AU", lengthKm: 6.213, time: "2:03.7", estimated: true },
    { track: "Suzuka", outline: "suzuka", country: "JP", lengthKm: 5.807, time: "2:02.2", estimated: true },
    { track: "Nürburgring 24h", outline: "nurburgring24h", country: "DE", lengthKm: 25.378, time: "8:20" },
  ] as SimLap[],
};

export type SimLap = {
  track: string;
  outline: TrackId;
  country: string;
  lengthKm: number;
  time: string | null;
  estimated?: boolean;
  game?: "ACC" | "iRacing";
};

export const NOTES = [
  {
    slug: "the-hidden-politics-of-convenience",
    date: "2026-10-18",
    title: "The hidden politics of convenience",
    description:
      "Convenience often arrives as a neutral improvement, but it quietly changes who has agency and who becomes optimized.",
    paragraphs: [
      "A lot of technology is sold as convenience. Fewer clicks, less waiting, less friction, fewer decisions. That sounds obviously good, and often it is.",
      "But convenience is never only about saving time. It also decides which choices remain visible and which ones disappear into the system.",
      "When a tool suggests the next sentence, the next purchase, the next route, or the next action, it is not forcing anyone. It is shaping the path of least resistance.",
      "The overlooked question is who designed that path, what incentives shaped it, and what kinds of behavior it makes feel natural.",
      "In the new age of AI, this matters even more because the interface can feel personal, helpful, and intelligent. The politics become softer, but not less real.",
      "A humane technology culture should ask not only whether something is easier, but what kind of person, worker, citizen, or customer the ease is training us to become.",
    ],
  },
  {
    slug: "when-speed-becomes-culture",
    date: "2026-10-05",
    title: "When speed becomes culture",
    description:
      "Faster output does not only change productivity. It changes expectations, pressure, and the meaning of good work.",
    paragraphs: [
      "Speed is useful until it becomes the main value system. Then every slow process starts to look suspicious, even when slowness is the thing protecting quality.",
      "AI will make many forms of output faster: drafts, prototypes, decisions, code, plans, reports. The obvious benefit is that people can move with less friction.",
      "The less obvious effect is cultural. Once something can be done quickly, it becomes harder to explain why it should take time.",
      "That pressure can be unhealthy. Some work needs silence, disagreement, research, boredom, revision, or the courage to not ship yet.",
      "A fast answer can also close a conversation too early. It gives the feeling of resolution before the deeper question has had time to appear.",
      "The important distinction is between acceleration and thoughtfulness. The future should not be slower for romantic reasons, but it should leave room for the kinds of thinking that cannot be compressed without loss.",
    ],
  },
  {
    slug: "trust-after-infinite-content",
    date: "2026-09-21",
    title: "Trust after infinite content",
    description:
      "When content becomes cheap, trust becomes the scarce material.",
    paragraphs: [
      "The internet already made publishing cheap. AI makes the production of convincing content cheap too: text, images, summaries, arguments, advice, voices, and soon entire experiences.",
      "The overlooked problem is not that everything will be fake. It is that everything will be plausible.",
      "Plausibility is dangerous because it asks less from the reader. It sounds coherent enough to move on. It gives the comfort of understanding without always requiring the work of verification.",
      "In that world, trust cannot come only from polish. Polished language may become the default surface of low-effort communication.",
      "Trust will depend more on context, provenance, relationships, accountability, and the history of someone being careful over time.",
      "This is a social problem before it is a technical one. We will need better tools, but we will also need better habits for deciding who and what deserves belief.",
    ],
  },
  {
    slug: "the-right-to-remain-human-scale",
    date: "2026-09-08",
    title: "The right to remain human-scale",
    description:
      "Some parts of life should resist acceleration because their value depends on time, ambiguity, and presence.",
    paragraphs: [
      "Modern technology often treats time as something to eliminate. Waiting, searching, learning, writing, deciding, and even remembering are framed as inefficiencies.",
      "There is truth in that. Many forms of friction are unnecessary. But not all friction is waste.",
      "Some experiences need human scale. Learning something deeply, changing your mind, building trust, understanding grief, making art, or noticing what you actually want cannot always be rushed.",
      "The overlooked danger is that once instant output becomes normal, slower human processes may start to feel like defects.",
      "AI will be most useful when it removes meaningless friction. It will be most harmful when it teaches us to distrust every form of slowness.",
      "The right to remain human-scale is not nostalgia. It is the idea that some things deserve enough time to become real.",
    ],
  },
  {
    slug: "who-gets-the-leverage",
    date: "2026-08-24",
    title: "Who gets the leverage",
    description:
      "AI impact depends on ownership, incentives, and power, not only capability.",
    paragraphs: [
      "A tool can save time, but the value of that saved time is not distributed equally.",
      "For one person, AI can mean autonomy: more creative range, faster learning, better leverage. For another, it can mean surveillance, tighter metrics, lower bargaining power, or replacement risk.",
      "This is why talking about capability alone misses the point. The same technology can liberate in one setting and discipline in another.",
      "The key question is who owns the tool, who decides how it is deployed, and who captures the benefit when productivity increases.",
      "If workers become more efficient but only organizations capture the upside, the technology changes labor without necessarily improving life.",
      "The overlooked impact of AI is not just what it automates. It is how it rearranges leverage between people, companies, institutions, and the public.",
    ],
  },
  {
    slug: "the-age-of-plausible-answers",
    date: "2026-08-11",
    title: "The age of plausible answers",
    description:
      "Plausibility can replace understanding if people stop checking the difference.",
    paragraphs: [
      "A good generated answer often has rhythm, structure, and confidence. It can feel complete even when it is missing the hardest part: contact with reality.",
      "This is not only about hallucinations. The more subtle issue is that plausible answers can reduce our appetite for understanding.",
      "If the answer sounds reasonable, we may stop asking what assumptions it depends on, what it leaves out, and whether the question was framed correctly.",
      "Software, business, education, and politics already struggle with confident simplifications. AI can make those simplifications smoother and more abundant.",
      "The important skill may become epistemic taste: the ability to sense when something is merely well-formed and when it has actually earned trust.",
      "In a world full of plausible answers, understanding becomes a discipline, not a default outcome.",
    ],
  },
  {
    slug: "attention-as-public-infrastructure",
    date: "2026-07-27",
    title: "Attention as public infrastructure",
    description:
      "Attention is not just a personal productivity problem. It is shaped by the systems we live inside.",
    paragraphs: [
      "We often talk about attention as if it belongs only to the individual. Be disciplined. Turn off notifications. Focus better.",
      "That advice is not wrong, but it is incomplete. Attention is also designed by feeds, incentives, meetings, metrics, interfaces, and workplace norms.",
      "One person's notification becomes another person's interruption. One team's unclear process becomes another team's context switching. One platform's engagement model becomes a public environment.",
      "AI will increase the amount of generated information around us. More summaries, more drafts, more messages, more recommendations, more things asking to be read.",
      "The overlooked question is not whether people can personally focus harder. It is whether we can design environments that deserve attention and protect it.",
      "In the new information climate, quiet may become infrastructure.",
    ],
  },
  {
    slug: "software-maintenance-as-ethics",
    date: "2026-07-13",
    title: "Software maintenance as ethics",
    description:
      "Maintainable systems are a form of care toward future users and future engineers.",
    paragraphs: [
      "Maintenance is usually treated as the unglamorous part of software. It happens after the launch, after the excitement, after the demo.",
      "But maintenance is where the real character of a system appears. Can it be changed without fear? Can a new person understand it? Can failures be diagnosed honestly?",
      "Unmaintainable software creates hidden social costs. It burns time, creates anxiety, slows teams, and makes people afraid to improve things.",
      "This is why readability, naming, deletion, boring abstractions, and clear boundaries are not just technical preferences. They affect how people work together.",
      "A maintained system says: someone thought about the next person.",
      "That is a small ethical act inside engineering. It respects the future instead of extracting from it.",
    ],
  },
  {
    slug: "boring-interfaces-serious-systems",
    date: "2026-06-25",
    title: "Boring interfaces, serious systems",
    description:
      "Predictable contracts matter more than clever abstractions in systems people depend on.",
    paragraphs: [
      "Engineers often enjoy the inside of systems: architecture, frameworks, patterns, clever abstractions, and performance details.",
      "But many of the most painful failures happen at boundaries. A vague input. A surprising output. An error that hides the real cause. A contract that was assumed but never written down.",
      "Boring interfaces are underrated because they do not feel impressive. They are explicit, predictable, documented, and sometimes almost dull.",
      "That dullness is the point. It lets people reason about the system without carrying the entire implementation in their head.",
      "In serious systems, clarity is a feature. It reduces coordination cost, limits damage, and makes change less frightening.",
      "The overlooked engineering skill is not always inventing better abstractions. Sometimes it is making the boundary so obvious that nobody has to be clever to use it correctly.",
    ],
  },
  {
    slug: "the-things-we-choose-not-to-automate",
    date: "2026-06-09",
    title: "The things we choose not to automate",
    description:
      "Refusal, restraint, and taste may become important technical and cultural skills.",
    paragraphs: [
      "The dominant question around technology is often whether something can be automated. If it can, the next assumption is that eventually it should be.",
      "That assumption deserves more resistance. Some tasks are not valuable only because of their output. They are valuable because of what they ask from the person doing them.",
      "Writing can clarify thought. Teaching can build patience. Reviewing work can create shared standards. Doing something manually can reveal details that automation would hide.",
      "This does not mean rejecting automation. It means being more precise about what should be delegated and what should remain close to human judgment.",
      "As AI becomes more capable, taste will involve knowing where not to use it.",
      "The future may belong not only to people who automate well, but to people who understand what should stay human on purpose.",
    ],
  },
];

export const CONTACT_PITCH =
  "Building a data, cloud, or AI platform and need a second pair of hands? Tell me about it.";

export const CONTACT_EMAIL_HREF = `${SOCIAL_LINKS.EMAIL}?subject=${encodeURIComponent("Project inquiry")}`;

export const CONTACT_LINKS = [
  { href: CONTACT_EMAIL_HREF, label: "Email", detail: "Project inquiries", icon: "email" },
  { href: SOCIAL_LINKS.LINKEDIN, label: "LinkedIn", detail: "in/victorelexpe", icon: "linkedin" },
  { href: SOCIAL_LINKS.TWITTER, label: "X", detail: "@elexpeDev", icon: "x" },
] as const;

export const ABOUT_BIO = [
  "I work where data platforms, cloud infrastructure, and AI meet — mostly on the part that has to keep working long after the launch.",
  "Most of my time goes to data engineering. I also make music, and occasionally drive a sim rig.",
  "I'm also studying Philosophy at UNED, which is where most of my writing comes from: how these systems shape the people who end up using them.",
];
