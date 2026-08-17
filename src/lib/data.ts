export const profile = {
  name: "Felipe Salazar",
  firstName: "Felipe",
  lastName: "Salazar",
  role: "Senior React & Next.js Engineer",
  tagline:
    "Front-end engineer crafting fast, elegant web applications — I help startups accelerate, shipping high-quality products at speed.",
  location: "Itajaí, Santa Catarina — Brazil",
  email: "salazarfelipe.fs@gmail.com",
  availability: "Open to select projects",
  summary:
    "Felipe is a front-end engineer specializing in React and modern web applications. Over 3+ years working through Toptal, he has shipped diverse products and untangled complex technical challenges for teams across the globe. Most recently, he led web development at Tea — growing the engineering team and shaping its architecture from the ground up.",
  stats: [
    { value: "7+", label: "Years of experience" },
    { value: "20+", label: "Products shipped" },
    { value: "3M+", label: "Users supported at scale" },
    { value: "4", label: "Engineers led & hired" },
  ],
  socials: [
    { label: "Email", href: "mailto:salazarfelipe.fs@gmail.com" },
    { label: "GitHub", href: "https://github.com/" },
    {
      label: "Toptal",
      href: "https://www.toptal.com/developers/resume/felipe-salazar",
    },
  ],
};

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Core & Languages",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "GraphQL", "Python"],
  },
  {
    title: "Frameworks & UI",
    skills: ["Tailwind CSS", "Redux Toolkit", "Context API", "Shadcn", "Chakra UI", "Storybook", "Framer Motion"],
  },
  {
    title: "Back-end & Data",
    skills: ["Node.js", "NestJS", "Express.js", "Prisma", "PostgreSQL", "MongoDB", "Redis", "REST", "WebSockets"],
  },
  {
    title: "Tooling & Cloud",
    skills: ["Git & GitHub", "Vercel", "AWS", "GCP", "Firebase", "Jest", "Cypress", "Jenkins", "Turbo"],
  },
  {
    title: "Practices",
    skills: ["Atomic Design", "Compound Pattern", "TDD", "Component Libraries", "CI/CD", "Feature Architecture", "SSO"],
  },
];

export const marqueeSkills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS",
  "GraphQL", "Redux", "PostgreSQL", "MongoDB", "AWS", "GCP", "Firebase",
  "Prisma", "Cypress", "Jest", "Storybook", "Claude API",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tea For Women",
    role: "Web Developer Lead",
    period: "2025 — Present",
    current: true,
    description:
      "Leading web engineering: shipped the Trust & Safety admin portal and a PWA replicating the mobile experience, while growing and structuring the team.",
    highlights: [
      "Built an admin portal for Trust & Safety and Moderation teams",
      "Launched a PWA web app replicating the mobile experience",
      "Hired and grew the web engineering team to 4 members",
      "Reorganized the codebase into a feature-based Data / Domain / Presentation architecture",
      "Implemented a CI/CD pipeline with automated checks",
    ],
    stack: ["React", "Next.js", "TypeScript", "NestJS", "Firebase", "Claude API"],
  },
  {
    company: "Spots Soluções em Tecnologia",
    role: "Senior React Engineer",
    period: "2018 — Present",
    current: true,
    description:
      "Co-founded technology firm delivering custom solutions — from restaurant-independent delivery at scale to hardware telemetry systems.",
    highlights: [
      "Designed systems for restaurant-independent delivery supporting 1000+ simultaneous restaurants",
      "Partnered with the hardware team on telemetry for 300+ claw machines",
      "Built enterprise-grade scalable applications with a travel-agency IT team",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS Lambda"],
  },
  {
    company: "Sam Hill Entertainment, LLC",
    role: "Next.js Developer",
    period: "2023 — 2024",
    description:
      "Delivered a pixel-perfect marketing site with advanced animations, headless CMS, and Salesforce-backed reservations.",
    highlights: [
      "Built with Next.js, Tailwind CSS, ButterCMS, Nodemailer, Auth0 and Vercel",
      "Led creation of all components and structured the CMS",
      "Engineered Auth0-based authentication and Salesforce integration",
      "Used webhooks for automatic actions on content publishing",
    ],
    stack: ["Next.js", "React", "Salesforce", "SSO", "CSS"],
  },
  {
    company: "Southern Made Services LLC",
    role: "React Developer",
    period: "2022 — 2023",
    description:
      "Crafted the pixel-perfect Invenergy corporate site (invenergy.com) with live-preview CMS editing and rich motion.",
    highlights: [
      "Built with Next.js, Chakra UI, Turbo, Storybook, Contentstack, Mapbox and Nodemailer",
      "Structured the CMS and created all necessary components",
      "Enabled live-preview editing and real-time updates via webhooks",
    ],
    stack: ["Next.js", "React", "GraphQL", "Chakra UI", "Storybook", "Turbo"],
  },
  {
    company: "NTT Data",
    role: "Front-end Web Developer",
    period: "2022 — 2023",
    description:
      "Developed features for BEES — InBev's global marketplace — on the cart team, with a strong testing and review culture.",
    highlights: [
      "Shipped features for the BEES marketplace cart team",
      "Tracked and fixed bugs through Jira",
      "Analyzed and approved team pull requests",
    ],
    stack: ["React", "TypeScript", "Redux", "Next.js", "Jest", "Atomic Design"],
  },
  {
    company: "ADA Travel",
    role: "Senior React Engineer",
    period: "2019 — 2022",
    description:
      "Architected front-ends for enterprise travel-tech: flight/hotel/car reservations and a flight-ticket intelligence platform used by JBS.",
    highlights: [
      "Developed a travel-tech app for flight, hotel and car reservations",
      "Built a flight-ticket expiration tracker used by JBS, one of Brazil's largest companies",
      "Architected the entire front-end and integrated airline web services",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "AWS", "GCP", "Figma"],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Tea For Women",
    tag: "Platform · Trust & Safety",
    description:
      "Admin portal and PWA for content moderation and user management, backed by a clean feature-based architecture.",
    stack: ["Next.js", "TypeScript", "NestJS", "Firebase"],
    accent: "from-cyan-400/20 to-blue-500/10",
  },
  {
    name: "Lume",
    tag: "Startup · Data Mapping",
    description:
      "Front-end for AI-driven data-mapping pipelines, built for speed with a modern React data stack.",
    stack: ["React", "Next.js", "Tailwind", "React Query", "Redux Toolkit"],
    href: "https://lume.ai/",
    accent: "from-indigo-400/20 to-violet-500/10",
  },
  {
    name: "Invenergy",
    tag: "Corporate · Pixel-perfect",
    description:
      "Marketing site with live-preview CMS editing, interactive maps and advanced motion. Deployed on Vercel.",
    stack: ["Next.js", "Chakra UI", "Turbo", "Contentstack", "Mapbox"],
    href: "https://www.invenergy.com/",
    accent: "from-emerald-400/20 to-teal-500/10",
  },
  {
    name: "ADA Travel Tech",
    tag: "Enterprise · Travel",
    description:
      "Travel-agency platform with self-management, policy configuration and expense services for corporate clients.",
    stack: ["React", "TypeScript", "AWS", "GCP"],
    href: "https://adatravel.com.br/",
    accent: "from-fuchsia-400/20 to-purple-500/10",
  },
  {
    name: "BENV — Flight Intelligence",
    tag: "Enterprise · FinTech",
    description:
      "Ticket-intelligence platform calculating reissue/refund amounts, integrated with Brazilian airlines.",
    stack: ["React", "TypeScript", "REST", "Node.js"],
    href: "http://benv.adatravel.com.br/",
    accent: "from-sky-400/20 to-cyan-500/10",
  },
  {
    name: "Spots Delivery",
    tag: "Product · Real-time",
    description:
      "Restaurant-manager web portal with operational dashboards, serving 1000+ simultaneous restaurants.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    accent: "from-amber-400/20 to-orange-500/10",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
