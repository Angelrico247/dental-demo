import React from "react";

interface IconProps {
  className?: string;
}

/* Trazo fino y uniforme: encaja con el peso ligero de Poppins */
const base = {
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconTooth: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...base}>
    <path d="M12 5.5c-1.4-1.1-3-1.7-4.4-1.3C5.9 4.6 5 6.2 5 8.4c0 1.6.4 3 .8 4.6.4 1.6.6 3.3.8 4.9.2 1.3.6 2.6 1.6 2.6 1.1 0 1.4-1.4 1.7-2.8.3-1.5.6-3.1 2.1-3.1s1.8 1.6 2.1 3.1c.3 1.4.6 2.8 1.7 2.8 1 0 1.4-1.3 1.6-2.6.2-1.6.4-3.3.8-4.9.4-1.6.8-3 .8-4.6 0-2.2-.9-3.8-2.6-4.2-1.4-.4-3 .2-4.4 1.3z" />
  </svg>
);

export const IconSparkle: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1.5c.45 5.1 4.95 9.6 10.5 10.5-5.55.9-10.05 5.4-10.5 10.5-.45-5.1-4.95-9.6-10.5-10.5C7.05 11.1 11.55 6.6 12 1.5z" />
  </svg>
);

export const IconArrowUpRight: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const IconArrowRight: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconChevronRight: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base} strokeWidth={2}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconMenu: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...base} strokeWidth={1.75}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconPhone: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base}>
    <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .4l-.9 1.2a13.6 13.6 0 0 1-6.4-6.4l1.2-.9a1 1 0 0 0 .4-1l-.7-3.3a1 1 0 0 0-1-.8z" />
  </svg>
);

export const IconWhatsapp: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.4.3-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1.2 1.3-1.2 3 0 4.8a12 12 0 0 0 5.2 4.7c1.9.8 2.7.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
  </svg>
);

export const IconClock: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const IconPin: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconStar: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="m12 2.8 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.2l6.1-.8z" />
  </svg>
);

export const IconMail: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);
