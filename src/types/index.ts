import { ReactNode } from "react";

// Core data types
export interface PersonalInfo {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
}

export interface ContactInfo {
  email: string;
  tel: string;
  social: {
    [key: string]: {
      name: string;
      url: string;
      icon: React.ComponentType<{ className?: string }>;
      navbar: boolean;
    };
  };
}

export interface WorkExperience {
  company: string;
  href?: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
}

export interface Education {
  school: string;
  href?: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    type: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  image?: string;
  video?: string;
}

export interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  links?: readonly {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
  }[];
}

export interface Service {
  icon: string;
  title: string;
  price: string;
  description: string;
  features?: readonly string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface Achievement {
  category: string;
  items: readonly string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  location: string;
}

export interface Additional {
  category: string;
  description: string;
}

// Main data structure
export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: readonly string[];
  navbar: readonly NavItem[];
  contact: ContactInfo;
  work: readonly WorkExperience[];
  education: readonly Education[];
  projects: readonly Project[];
  hackathons: readonly Hackathon[];
  services: readonly Service[];
  testimonials: readonly Testimonial[];
  stats: readonly Stat[];
  achievements: readonly Achievement[];
  certifications: readonly Certification[];
  additional: readonly Additional[];
}

// Component prop types
export interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export interface BlurFadeTextProps {
  text: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

// Blog types
export interface BlogMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

export interface BlogPost {
  metadata: BlogMetadata;
  slug: string;
  source: string;
}

// Locale types
export type Locale = 'en' | 'da';

export interface LocaleParams {
  locale: Locale;
}

// Animation constants
export interface AnimationConfig {
  BLUR_FADE_DELAY: number;
  BLUR_FADE_DURATION: number;
  HOVER_SCALE: number;
}
