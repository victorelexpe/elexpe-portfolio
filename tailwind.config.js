/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#eef4f5",
        ink: "#24414a",
        "ink-muted": "#4f6a72",
        "ink-faint": "#6b8288",
        rule: "#d2e0e3",
        accent: "#0e7c86",
        "accent-ink": "#ffffff",
        "accent-bright": "#6cd3d8",
        link: "#0e7c86",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Newsreader", "serif"],
        sans: ["var(--font-plex-sans)", "IBM Plex Sans", "sans-serif"],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, min(6vw, 8.5vh), 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "page-title": [
          "clamp(2.25rem, 4vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "note-title": ["1.5rem", { lineHeight: "1.3" }],
        editorial: ["1.125rem", { lineHeight: "1.65" }],
        meta: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.04em" }],
      },
      maxWidth: {
        measure: "38rem",
      },
    },
  },
  plugins: [],
};
