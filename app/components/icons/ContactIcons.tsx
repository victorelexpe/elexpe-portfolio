type IconProps = {
  className?: string;
};

export const EmailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H3Zm0 2h18v.3l-9 6.2-9-6.2V7Zm0 2.4 8.4 5.8a1 1 0 0 0 1.2 0L21 9.4V17H3V9.4Z" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h1A1.5 1.5 0 0 1 8 3.5v1A1.5 1.5 0 0 1 6.5 6h-1A1.5 1.5 0 0 1 4 4.5v-1ZM4.3 8.3h3.4V21H4.3V8.3Zm6.2 0h3.3v1.7h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4V21h-3.4v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V21h-3.4V8.3Z" />
  </svg>
);

export const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.26L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.93L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const SpotifyIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.7.7 0 0 1-.96.23c-2.6-1.6-5.9-1.95-9.8-1.07a.7.7 0 0 1-.3-1.36c4.26-.97 7.92-.56 10.84 1.24a.7.7 0 0 1 .22.96Zm1.2-2.8a.86.86 0 0 1-1.19.28c-2.98-1.83-7.52-2.36-11.04-1.3a.86.86 0 0 1-.5-1.65c4.02-1.21 9.02-.62 12.44 1.47a.86.86 0 0 1 .29 1.2Zm.1-2.9C14.6 8.6 9.3 8.4 6.3 9.3a1.03 1.03 0 1 1-.6-1.97c3.46-1.05 9.3-.82 12.98 1.37a1.03 1.03 0 0 1-1.08 1.74Z" />
  </svg>
);

export const ArrowUpRightIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
