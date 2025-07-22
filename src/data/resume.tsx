import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";
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
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
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
      company: "Keyshot (Digizuite)",
      href: "https://keyshot.com",
      badges: ["B2B", "SaaS", "Enterprise", "DAM"],
      location: "Remote",
      title: "Sr. Growth Marketing Manager",
      logoUrl: "/keyshot.png",
      start: "Jun 2023",
      end: "present",
      description:
        "Post-Acquisition Integration: Successfully integrated Digizuite's marketing operations post-acquisition. Streamlined marketing processes, leading to improved efficiency and team performance. Enhanced collaboration with sales teams to accelerate growth.",
    },
    {
      company: "Opus Group",
      href: "https://opusgroup.dk",
      badges: ["B2B", "Tech", "Consulting"],
      location: "Copenhagen, Denmark",
      title: "Head of Marketing for LearnX",
      logoUrl: "/opus.png",
      start: "May 2023",
      end: "January 2024",
      description:
        "Leadership & Project Execution at CoWeb: Founded and grew a successful marketing agency. Led a diverse team, delivering over 150 client projects. Specialized in performance marketing and conversion optimization, enhancing client online presence.",
    },
    {
      company: "KUBO Robotics",
      badges: ["EdTech", "B2B"],
      href: "https://kubo-robot.com",
      location: "Copenhagen, Denmark",
      title: "Growth & Retention Manager",
      logoUrl: "/kubo.png",
      start: "May 2021",
      end: "April 2023",
      description:
        "Market Expansion at KUBO Robotics: Led growth strategy for U.S. market entry. Generated over 15,000 MQLs through strategic partnerships and paid media. Strengthened alignment between marketing and sales teams, improving conversion rates.",
    },
    {
      company: "QuickOrder",
      href: "https://quickorder.io",
      badges: ["SaaS", "B2B", "Food"],
      location: "Copenhagen, Denmark",
      title: "Head of Marketing",
      logoUrl: "/quickorder.png",
      start: "Oct 2019",
      end: "May 2021",
      description:
        "Valuation Growth at QuickOrder: Increased company valuation tenfold from $20M to $200M. Implemented data-driven marketing strategies, achieving 20% month-over-month growth. Developed a scalable growth funnel, instrumental in SDR hiring and sales expansion.",
    },
    {
      company: "Rambøll ENVIRON",
      href: "https://ramboll.com",
      badges: ["Consulting", "B2B"],
      location: "Copenhagen, Denmark",
      title: "Digital marketing & Webshop Leader",
      logoUrl: "/ramboll.png",
      start: "Feb 2019",
      end: "Sep 2021",
      description:
        "Digital transformation and e-commerce leadership in environmental consulting sector.",
    },
    {
      company: "CoWeb",
      href: "https://coweb.dk",
      badges: ["Agency", "B2B"],
      location: "Copenhagen, Denmark",
      title: "Founder",
      logoUrl: "/coweb.png",
      start: "Oct 2015",
      end: "Nov 2018",
      description:
        "Founded and operated a successful digital marketing agency specializing in B2B lead generation.",
    },
    {
      company: "TreeTime",
      href: "https://treetime.dk",
      badges: ["E-commerce", "B2C"],
      location: "Copenhagen, Denmark",
      title: "Founder",
      logoUrl: "/treetime.png",
      start: "Sep 2014",
      end: "Sep 2018",
      description:
        "Founded and operated an e-commerce business in the sustainable products sector.",
    },
  ],
  education: [
    {
      school: "University College Lillebælt",
      href: "https://ucl.dk",
      degree: "AP Graduate in Marketing Management",
      logoUrl: "/ucl.png",
      start: "2015",
      end: "2017",
    },
  ],
  achievements: [
    {
      category: "Strategic Leadership at Keyshot",
      items: [
        "Successfully integrated Digizuite's marketing operations post-acquisition.",
        "Streamlined marketing processes, leading to improved efficiency and team performance.",
        "Enhanced collaboration with sales teams to accelerate growth.",
      ],
    },
    {
      category: "Market Expansion at KUBO Robotics",
      items: [
        "Led growth strategy for U.S. market entry.",
        "Generated over 15,000 MQLs through strategic partnerships and paid media.",
        "Strengthened alignment between marketing and sales teams, improving conversion rates.",
      ],
    },
    {
      category: "Valuation Growth at QuickOrder",
      items: [
        "Increased company valuation tenfold from $20M to $200M.",
        "Implemented data-driven marketing strategies, achieving 20% month-over-month growth.",
        "Developed a scalable growth funnel, instrumental in SDR hiring and sales expansion.",
      ],
    },
    {
      category: "Leadership & Project Execution at CoWeb",
      items: [
        "Founded and grew a successful marketing agency.",
        "Led a diverse team, delivering over 150 client projects.",
        "Specialized in performance marketing and conversion optimization, enhancing client online presence.",
      ],
    },
  ],
  certifications: [
    {
      name: "Certified Growth Hacker",
      issuer: "Growth Tribe",
      year: "2020",
      location: "Copenhagen, Denmark",
    },
  ],
  additional: [
    {
      category: "ABM Expertise and Knowledge of ABM Platforms",
      description: "Proficient in implementing Account-Based Marketing strategies, leveraging intent data, and engaging ideal customer profiles; familiar with ABM platforms like N.Rich and their role in enhancing B2B go-to-market strategies, particularly targeting enterprise buyers.",
    },
    {
      category: "Collaboration with Sales Teams",
      description: "Extensive experience working in selected organizations to build established outbound and inbound marketing strategies; working closely with sales and other revenue teams to achieve common goals.",
    },
    {
      category: "Location",
      description: "Based in Europe; willing and able to travel across Europe 1-2 times per quarter. Uses co-working remote.",
    },
    {
      category: "Leadership Skills",
      description: "Demonstrated ability to build and manage high-performing teams; strategic leader focused on creating a team that is greater than the sum of its parts.",
    },
    {
      category: "Strategic Vision",
      description: "Strong strategic planning skills with a focus on data-driven decision-making, ABM strategies, and measurable results.",
    },
  ],
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