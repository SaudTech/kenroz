// lib/jobs.ts

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedAt?: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Internship";
  level?: "Junior" | "Mid" | "Senior" | "Lead";
}

// lib/jobs.ts

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedAt?: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Internship";
  level?: "Junior" | "Mid" | "Senior" | "Lead";
}

export const jobs: Job[] = [
  // 1) React / Frontend
  {
    slug: "frontend-engineer-react-nextjs",
    title: "Frontend Engineer (React / Next.js)",
    department: "Engineering",
    location: "Hyderabad, India",
    description:
      "Build beautiful, high-performance web apps with React and Next.js. You’ll own component architectures, state management, performance tuning, and collaborate closely with Design and Backend to ship delightful, accessible experiences.",
    responsibilities: [
      "Develop reusable UI components with React/TypeScript and Tailwind",
      "Implement pages and data fetching with Next.js App Router",
      "Optimize performance (LCP/CLS), accessibility, and SEO",
      "Collaborate with designers to translate Figma into pixel-perfect UI",
      "Integrate REST/GraphQL APIs and handle auth, caching, and error states",
    ],
    requirements: [
      "2+ years with React and TypeScript (Next.js a plus)",
      "Strong CSS/Tailwind skills and component design patterns",
      "Experience with performance profiling and accessibility",
    ],
    postedAt: "2025-08-25",
    employmentType: "Full-time",
    level: "Mid",
  },

  // 2) Digital Marketing
  {
    slug: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Hyderabad, India",
    description:
      "Own multi-channel digital marketing to drive qualified pipeline and brand growth. Plan campaigns, run experiments, and optimize the funnel across paid/organic, email, and social.",
    responsibilities: [
      "Plan and execute paid + organic campaigns (Search, Social, Email)",
      "Own the content calendar with SEO-driven briefs and landing pages",
      "Measure CAC/LTV, conversion rates, and campaign ROI; iterate fast",
      "Partner with Sales to improve lead quality and handoff",
      "Run A/B tests on creatives, copy, and landing pages",
    ],
    requirements: [
      "3+ years in digital/growth marketing (B2B preferred)",
      "Hands-on with ads platforms, analytics, and SEO basics",
      "Strong copy, experimentation mindset, and reporting",
    ],
    postedAt: "2025-08-21",
    employmentType: "Full-time",
    level: "Senior",
  },

  // 3) DevOps / Cloud
  {
    slug: "devops-engineer",
    title: "DevOps / Cloud Engineer",
    department: "Engineering",
    location: "Dammam, Saudi Arabia",
    description:
      "Architect cloud infra, ship reliable CI/CD, and level up observability. Enable teams to deploy confidently with secure, cost-efficient, and scalable platforms.",
    responsibilities: [
      "Design and manage cloud infra with Terraform and Kubernetes",
      "Build CI/CD pipelines for fast, reliable releases",
      "Implement observability (metrics, tracing, alerting) and SRE practices",
      "Partner with developers to improve build/release workflows",
      "Continuously optimize reliability, performance, and costs",
    ],
    requirements: [
      "AWS/GCP experience; Docker/Kubernetes proficiency",
      "Terraform and monitoring/observability stacks",
      "Scripting with Bash/Python and automation mindset",
    ],
    postedAt: "2025-08-18",
    employmentType: "Full-time",
    level: "Senior",
  },

  // 4) Product Design
  {
    slug: "product-designer",
    title: "Product Designer (UX/UI)",
    department: "Design",
    location: "Hyderabad, India",
    description:
      "Own end-to-end product design, from discovery to polished UI. Create intuitive flows, interactive prototypes, and evolve a scalable design system.",
    responsibilities: [
      "Design user flows, wireframes, and production-ready UI",
      "Prototype interactions and validate with quick user feedback",
      "Collaborate with PM/Eng to scope and deliver impactful features",
      "Maintain and expand the design system for consistency",
      "Champion accessibility and usability best practices",
    ],
    requirements: [
      "Portfolio with shipped work and process",
      "Fluency in Figma and interaction design",
      "Strong grasp of accessibility and UX fundamentals",
    ],
    postedAt: "2025-08-16",
    employmentType: "Full-time",
    level: "Mid",
  },
];
