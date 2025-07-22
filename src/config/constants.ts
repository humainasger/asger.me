import { AnimationConfig } from "@/types";

// Animation configuration
export const ANIMATION_CONFIG: AnimationConfig = {
  BLUR_FADE_DELAY: 0.04,
  BLUR_FADE_DURATION: 0.6,
  HOVER_SCALE: 1.02,
} as const;

// Layout constants
export const LAYOUT = {
  MAX_WIDTH: "6xl",
  SECTION_SPACING: "space-y-24",
  CARD_SPACING: "space-y-8",
  GRID_GAPS: {
    SMALL: "gap-4",
    MEDIUM: "gap-6",
    LARGE: "gap-8",
  },
} as const;

// Typography constants
export const TYPOGRAPHY = {
  HEADING_SIZES: {
    H1: "text-4xl md:text-6xl lg:text-7xl",
    H2: "text-3xl md:text-5xl",
    H3: "text-2xl md:text-3xl",
    H4: "text-xl md:text-2xl",
  },
  BODY_SIZES: {
    LARGE: "text-lg md:text-xl",
    MEDIUM: "text-base md:text-lg",
    SMALL: "text-sm md:text-base",
    EXTRA_SMALL: "text-xs md:text-sm",
  },
} as const;

// Color scheme constants
export const COLORS = {
  BADGE: {
    BACKGROUND: "bg-muted/30",
    BORDER: "border-border/50",
    TEXT: "text-muted-foreground",
  },
  CARD: {
    BACKGROUND: "bg-card/50",
    BORDER: "border-border/50",
    HOVER: "hover:bg-card/70",
  },
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;

// SEO constants
export const SEO = {
  DEFAULT_TITLE: "Asger Teglgaard - B2B SaaS Marketing & Growth",
  DEFAULT_DESCRIPTION: "Freelance growth marketer med 10 års erfaring. AI til det kedelige, mennesker til det brillante. Book en gratis marketing therapy session.",
  SITE_NAME: "Asger Teglgaard",
  TWITTER_HANDLE: "@asgerteglgaard",
} as const;

// Supported locales
export const LOCALES = ['en', 'da'] as const;
export const DEFAULT_LOCALE = 'da' as const;

// Navigation constants
export const NAVIGATION = {
  SCROLL_OFFSET: 80,
  SMOOTH_SCROLL_DURATION: 500,
} as const;

// Form validation constants
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
} as const;

// API endpoints (if needed in the future)
export const API_ENDPOINTS = {
  CONTACT: "/api/contact",
  NEWSLETTER: "/api/newsletter",
  BLOG: "/api/blog",
} as const;
