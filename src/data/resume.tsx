import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ResumeData } from "@/types";

export const DATA: ResumeData = {
  name: "Asger Johannes Teglgaard",
  initials: "AT",
  url: "https://asger.me",
  location: "Copenhagen, Denmark",
  locationLink: "https://www.google.com/maps/place/copenhagen",
  description:
    "10 års erfaring med at få B2B SaaS virksomheder til at vokse. AI til det kedelige. Mennesker til det brillante.",
  summary:
    "Husker du hvorfor du startede i marketing? Kreativiteten? At gøre en forskel? Det der sus når en kampagne bare virker?\n\nJa, jeg savner det også.\n\nDerfor er jeg gået freelance. For at arbejde med virksomheder der tør tage chancer. Der vil have marketing der flytter noget. Og som forstår at B2B ikke behøver betyde boring.\n\nEfter 10 år i B2B SaaS trenches ved jeg hvad der virker. Og vigtigere - hvad der ikke gør.\n\nNu hjælper jeg andre med at bryde fri fra spreadsheet hell og faktisk have det sjovt med marketing igen. Én fokuseret indsats ad gangen.",
  avatarUrl: "/me.png",
  skills: [
    "Growth Marketing",
    "ABM",
    "Demand Gen",
    "Performance Marketing",
    "Content Strategy",
    "Marketing Automation",
    "PostHog",
    "Mixpanel",
    "Google Analytics",
    "Python",
    "JavaScript",
    "SQL",
    "HubSpot",
    "Salesforce",
    "LinkedIn Ads",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "teglgaard@asger.me",
    tel: "+45 93 93 77 96",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/asgerteglgaard",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/asgerteglgaard",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/asgerteglgaard",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@asgerteglgaard",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:teglgaard@asger.me",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "KeyShot",
      href: "https://keyshot.com",
      badges: ["B2B SaaS", "Enterprise", "DAM"],
      location: "Remote",
      title: "Sr. Growth Marketing Manager",
      logoUrl: "/keyshot.png",
      start: "2023",
      end: "2025",
      description:
        "Post-Acquisition Integration: Succesfuldt integreret to marketing teams uden at tabe momentum. Streamlined processer, bevaret team performance, øget efficiency.",
    },
    {
      company: "KUBO Robotics",
      badges: ["EdTech", "Market Entry", "B2B"],
      href: "https://kubo-robot.com",
      location: "Copenhagen, Denmark",
      title: "Growth & Retention Manager",
      logoUrl: "/kubo.png",
      start: "2021",
      end: "2023",
      description:
        "US Market Entry Success: 15.000+ kvalificerede leads gennem strategiske partnerskaber og paid media. Succesfuld US ekspansion, optimeret CAC.",
    },
    {
      company: "QuickOrder",
      href: "https://quickorder.io",
      badges: ["B2B SaaS", "Growth", "Scale-up"],
      location: "Copenhagen, Denmark",
      title: "Head of Marketing",
      logoUrl: "/quickorder.png",
      start: "2019",
      end: "2021",
      description:
        "10x værdistigning på 18 måneder: Fra $20M til $200M gennem systematisk growth marketing. 20% MoM vækst, skaleret SDR team.",
    },
  ],
  education: [],
  stats: [
    {
      number: "10+",
      label: "År i B2B SaaS"
    },
    {
      number: "200M",
      label: "USD i skabt værdi"
    },
    {
      number: "15K+",
      label: "Genererede MQLs"
    }
  ],
  projects: [],
  hackathons: [],
  services: [
    {
      icon: "🧠",
      title: "Marketing Therapy",
      price: "Gratis 30 min",
      description: "Fortæl mig hvad der holder dig vågen om natten. Ingen pitch. Bare ærlig snak om dine udfordringer."
    },
    {
      icon: "🚀",
      title: "Quick Wins",
      price: "Fra 5.000 kr",
      description: "Landing page på 4 dage. Email sequence på 2 uger. LinkedIn kampagne audit. One-off projekter med klare deadlines."
    },
    {
      icon: "🎯",
      title: "Strategisk Sparring",
      price: "1-2 dage/uge",
      description: "Jeg bliver del af dit team. Uden at fylde dine mødelokaler. Med fokus på execution, ikke PowerPoints."
    },
    {
      icon: "📈",
      title: "Growth Partner",
      price: "Custom",
      description: "Lad os bygge en growth-motor der faktisk virker. Med klare mål, kort responstid og resultater du kan mærke."
    }
  ],
  testimonials: [
    {
      quote: "Asger forstår at kombinere data-drevet marketing med kreativitet på en måde, jeg sjældent har set.",
      author: "CMO, B2B SaaS"
    },
    {
      quote: "Endelig en marketer der faktisk eksekverer i stedet for bare at lave strategier.",
      author: "CEO, Tech Startup"
    }
  ],
} as const;