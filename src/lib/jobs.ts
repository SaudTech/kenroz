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
  // ——— Engineering ———
  {
    slug: "python-developer",
    title: "Python Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    description:
      "As a Python Developer, you’ll build and scale core backend services that directly power our customer-facing applications. You will design APIs and distributed systems that handle high traffic, ensuring performance, maintainability, and security. You’ll collaborate with cross-functional teams to deliver impactful features while following best practices around code quality, testing, and architecture.",
    responsibilities: [
      "Design and develop scalable Python backends and microservices for core platform functionality",
      "Collaborate with engineers, designers, and product managers to define requirements and balance tradeoffs",
      "Write high-quality, maintainable, and test-driven code that facilitates long-term stability",
      "Participate in design reviews and contribute to improving engineering standards and practices",
      "Continuously monitor and optimize application performance, ensuring resilience under load",
    ],
    requirements: [
      "2+ years of professional Python experience",
      "Understanding of RESTful APIs and microservices",
      "Experience with relational and NoSQL databases",
    ],
    postedAt: "2025-08-20",
    employmentType: "Full-time",
    level: "Mid",
  },
  {
    slug: "java-developer",
    title: "Java Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    description:
      "As a Java Developer, you’ll design and maintain the backend services that form the foundation of our scalable applications. You will focus on building reliable systems with Spring Boot, optimizing performance, and ensuring code quality. You’ll work in a collaborative environment with strong engineering practices and opportunities for technical growth.",
    responsibilities: [
      "Implement and enhance backend features and APIs using Java and Spring Boot",
      "Ensure applications are highly performant, secure, and optimized for scale",
      "Collaborate with product and engineering teams to align technical work with business needs",
      "Conduct code reviews, uphold coding standards, and mentor peers when needed",
      "Design and integrate API contracts with front-end and third-party systems",
    ],
    requirements: [
      "3+ years of Java development experience",
      "Strong with Spring Boot and cloud-native patterns",
      "Familiarity with CI/CD pipelines and unit testing",
    ],
    postedAt: "2025-08-12",
    employmentType: "Full-time",
    level: "Mid",
  },
  {
    slug: "devops-engineer",
    title: "DevOps / Cloud Engineer",
    department: "Engineering",
    location: "Dammam, Saudi Arabia",
    description:
      "As a DevOps / Cloud Engineer, you’ll be responsible for architecting cloud infrastructure, managing CI/CD workflows, and ensuring reliability in highly available distributed systems. You’ll drive automation, improve developer workflows, and establish observability practices to maintain secure, cost-effective operations. This role is critical for enabling developers to deploy and scale services with confidence.",
    responsibilities: [
      "Design, provision, and manage cloud infrastructure using Terraform and Kubernetes",
      "Build and optimize automated CI/CD pipelines for frequent, reliable releases",
      "Implement observability best practices, including metrics, tracing, and alerting",
      "Collaborate with development teams to improve build, release, and monitoring processes",
      "Continuously optimize infrastructure for performance, reliability, and cost savings",
    ],
    requirements: [
      "Hands-on with AWS or GCP and Docker/Kubernetes",
      "Experience with Terraform and observability stacks",
      "Strong scripting (Bash/Python) and automation mindset",
    ],
    postedAt: "2025-08-18",
    employmentType: "Full-time",
    level: "Senior",
  },
  {
    slug: "qa-sdet",
    title: "QA Engineer (SDET)",
    department: "Engineering",
    location: "Dubai, United Arab Emirates",
    description:
      "As a Software Development Engineer in Test (SDET), you will ensure high product quality through test automation frameworks, exploratory testing, and CI/CD integration. You’ll collaborate with developers to embed testability and prevent defects early, shaping a culture of quality across the engineering org.",
    responsibilities: [
      "Build and maintain robust UI and API automated test suites",
      "Integrate automated testing pipelines into CI/CD processes to ensure reliable deployments",
      "Monitor, report, and track key quality metrics to drive continuous improvement",
      "Collaborate with engineers to identify areas for improved reliability and test coverage",
      "Perform exploratory testing to uncover complex, high-impact issues",
    ],
    requirements: [
      "Experience with Playwright/Cypress or similar",
      "Solid API testing and mocking knowledge",
      "Strong debugging and root-cause skills",
    ],
    postedAt: "2025-08-07",
    employmentType: "Full-time",
    level: "Mid",
  },
  {
    slug: "mobile-engineer-react-native",
    title: "Mobile Engineer (React Native)",
    department: "Engineering",
    location: "Dammam, Saudi Arabia",
    description:
      "As a Mobile Engineer (React Native), you’ll deliver seamless, performant mobile applications across iOS and Android. You’ll own the full lifecycle of mobile development — from component design and API integration to performance tuning and release management. This role is ideal for developers passionate about mobile UX and app reliability at scale.",
    responsibilities: [
      "Design and implement new features and reusable components in React Native",
      "Integrate APIs and native modules for deep mobile platform functionality",
      "Ensure apps deliver high performance and responsiveness under varied conditions",
      "Implement mobile-optimized logging, crash reporting, and analytics",
      "Collaborate with designers and backend engineers to deliver smooth, consistent user experiences",
    ],
    requirements: [
      "2+ years with React Native, TypeScript",
      "Released apps in production (App Store/Play Store)",
      "Familiarity with mobile performance and accessibility",
    ],
    postedAt: "2025-07-28",
    employmentType: "Full-time",
    level: "Mid",
  },

  // ——— Product ———
  {
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Dubai, United Arab Emirates",
    description:
      "As a Product Manager, you will lead end-to-end product development, driving discovery, roadmap prioritization, and successful launches. You’ll balance customer needs, technical feasibility, and business impact to ensure our products deliver measurable value. This role requires strong cross-functional collaboration and the ability to turn complex problems into elegant solutions.",
    responsibilities: [
      "Define and communicate a clear product strategy, roadmap, and success metrics",
      "Lead discovery efforts through user interviews, market research, and data analysis",
      "Prioritize initiatives to maximize impact while balancing technical feasibility and time-to-market",
      "Work closely with Design and Engineering teams during execution, ensuring smooth delivery",
      "Track and analyze product metrics, iterating on features based on customer feedback and experiments",
    ],
    requirements: [
      "3+ years PM experience in B2B SaaS or platforms",
      "Strong discovery, prioritization, and storytelling",
      "Comfort with metrics, experiments, and tradeoffs",
    ],
    postedAt: "2025-08-19",
    employmentType: "Full-time",
    level: "Senior",
  },
  {
    slug: "technical-program-manager",
    title: "Technical Program Manager",
    department: "Product",
    location: "Houston, United States of America",
    description:
      "As a Technical Program Manager, you will orchestrate large-scale initiatives across multiple teams, ensuring seamless execution, risk mitigation, and alignment with business goals. You’ll be a central communicator between executives, stakeholders, and delivery teams while driving predictability and accountability in critical projects.",
    responsibilities: [
      "Develop program plans, timelines, dependencies, and risk management strategies",
      "Facilitate cross-team communication and remove blockers to maintain program momentum",
      "Run effective program rituals (planning, stand-ups, retrospectives) across multiple teams",
      "Deliver accurate reporting on milestones, risks, and status to senior leadership",
      "Drive alignment across technical and non-technical stakeholders to meet program goals",
    ],
    requirements: [
      "4+ years in TPM/Program Management",
      "Experience with large, multi-team deliveries",
      "Excellent communication and stakeholder management",
    ],
    postedAt: "2025-08-10",
    employmentType: "Full-time",
    level: "Senior",
  },

  // ——— Design ———
  {
    slug: "product-designer",
    title: "Product Designer (UX/UI)",
    department: "Design",
    location: "Hyderabad, India",
    description:
      "As a Product Designer, you’ll own the design of critical product experiences, from early discovery sketches to polished UI. You’ll create intuitive user flows, build prototypes, and maintain a scalable design system. This role balances creativity with practicality, ensuring designs are not just beautiful but highly functional and accessible.",
    responsibilities: [
      "Design user flows, wireframes, and polished UI for web and mobile experiences",
      "Partner with Product and Engineering teams to scope and deliver features that solve user pain points",
      "Create interactive prototypes to validate ideas quickly with stakeholders and customers",
      "Maintain and evolve the design system to ensure consistency and scalability",
      "Advocate for accessibility and usability best practices in all design outputs",
    ],
    requirements: [
      "Portfolio demonstrating shipped work and process",
      "Proficiency in Figma and prototyping",
      "Strong interaction design and accessibility sense",
    ],
    postedAt: "2025-08-16",
    employmentType: "Full-time",
    level: "Mid",
  },
  {
    slug: "ux-researcher",
    title: "UX Researcher",
    department: "Design",
    location: "Dubai, United Arab Emirates",
    description:
      "As a UX Researcher, you’ll uncover deep insights into user behaviors and needs to shape product decisions. You’ll use qualitative and quantitative research methods to validate hypotheses and guide product roadmaps. Your findings will equip design, product, and engineering with the evidence they need to make user-centered decisions.",
    responsibilities: [
      "Plan, execute, and analyze usability tests, interviews, and surveys across diverse user groups",
      "Synthesize complex findings into actionable insights and compelling narratives",
      "Collaborate with PMs and Designers to translate research into roadmap direction",
      "Build and maintain a repository of research data to improve institutional knowledge",
      "Champion a culture of evidence-based decision-making across the product organization",
    ],
    requirements: [
      "2+ years applied UX research experience",
      "Strong research ops and synthesis skills",
      "Ability to influence roadmap with insights",
    ],
    postedAt: "2025-08-03",
    employmentType: "Full-time",
    level: "Mid",
  },

  // ——— Marketing ———
  {
    slug: "growth-marketing-manager",
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Dammam, Saudi Arabia",
    description:
      "As a Growth Marketing Manager, you’ll own acquisition, engagement, and conversion campaigns across digital channels. You’ll experiment with creative campaigns, analyze funnel metrics, and drive rapid improvements in customer acquisition cost and lifetime value. This role requires a strong blend of analytical thinking, creativity, and a bias toward execution.",
    responsibilities: [
      "Develop multi-channel campaigns spanning paid media, email, and A/B experiments",
      "Analyze funnel performance to optimize key acquisition, activation, and retention metrics",
      "Collaborate with Sales to ensure high-quality leads pass seamlessly through the funnel",
      "Run and iterate growth experiments based on clear hypotheses and measurable outcomes",
      "Maintain accurate campaign reporting to track ROI and growth trends",
    ],
    requirements: [
      "3+ years in B2B growth/performance marketing",
      "Hands-on with ads platforms and attribution",
      "Strong analytical and experimentation skills",
    ],
    postedAt: "2025-08-21",
    employmentType: "Full-time",
    level: "Senior",
  },
  {
    slug: "content-marketer",
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Hyderabad, India",
    description:
      "As a Content Marketing Specialist, you’ll produce high-quality written content that educates users, builds authority, and fuels inbound growth. You’ll own the editorial calendar, develop SEO strategies, and collaborate with experts to create content formats ranging from blogs and case studies to technical whitepapers.",
    responsibilities: [
      "Write and publish blogs, case studies, and thought leadership articles optimized for SEO",
      "Own the editorial calendar to ensure a consistent cadence of high-quality output",
      "Interview subject matter experts and customers to create engaging, accurate content",
      "Collaborate with design and marketing teams to produce multimedia content assets",
      "Monitor performance of content campaigns and iterate for traffic and conversion improvements",
    ],
    requirements: [
      "Excellent writing and editing portfolio",
      "SEO basics and CMS experience",
      "Comfort interviewing customers and experts",
    ],
    postedAt: "2025-07-30",
    employmentType: "Full-time",
    level: "Mid",
  },

  // ——— Sales ———
  {
    slug: "account-executive",
    title: "Account Executive (SaaS)",
    department: "Sales",
    location: "Hyderabad, India",
    description:
      "As an Account Executive, you’ll be responsible for running full-cycle SaaS sales processes, from prospecting and demos to contract negotiation and closing. You’ll engage mid-market customers, understand their challenges, and position our platform as a strategic solution that drives measurable value.",
    responsibilities: [
      "Manage a healthy pipeline of mid-market accounts through proactive outreach and follow-up",
      "Run tailored discovery meetings and demos that address customer pain points",
      "Negotiate contracts and maintain strong relationships with decision-makers",
      "Forecast consistently and deliver predictable quota attainment",
      "Collaborate with Marketing and Customer Success to ensure smooth client onboarding and expansion",
    ],
    requirements: [
      "2+ years closing experience in B2B SaaS",
      "Strong discovery and objection-handling",
      "Familiarity with CRM and MEDDIC/SPICED",
    ],
    postedAt: "2025-08-14",
    employmentType: "Full-time",
    level: "Mid",
  },
  {
    slug: "sdr",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Dammam, Saudi Arabia",
    description:
      "As a Sales Development Representative, you’ll generate sales pipeline by researching target accounts, crafting outbound campaigns, and engaging prospects across multiple channels. This role is the foundation of our sales organization, offering high visibility, measurable impact, and fast career progression opportunities.",
    responsibilities: [
      "Identify high-potential accounts through research and LinkedIn prospecting",
      "Craft and execute personalized outreach campaigns through email, calls, and social channels",
      "Qualify inbound and outbound leads to move them into sales cycles with Account Executives",
      "Maintain detailed notes and accurate data in CRM systems to ensure pipeline visibility",
      "Experiment with new outreach techniques and report learnings to improve team productivity",
    ],
    requirements: [
      "Excellent written and spoken communication",
      "Resilience and a metrics-driven approach",
      "CRM hygiene and time management",
    ],
    postedAt: "2025-08-05",
    employmentType: "Full-time",
    level: "Junior",
  },

  // ——— People & Talent ———
  {
    slug: "hr-business-partner",
    title: "HR Business Partner",
    department: "People & Talent",
    location: "Hyderabad, India",
    description:
      "As an HR Business Partner, you will work closely with leaders to drive organizational effectiveness, improve engagement, and champion culture initiatives. You’ll coach managers, influence people strategies, and support performance management, compensation, and learning programs across business units.",
    responsibilities: [
      "Partner with leaders on workforce planning, retention, and performance initiatives",
      "Coach managers on feedback, career development, and team dynamics",
      "Oversee compensation and benefits programs in compliance with labor laws",
      "Design and lead employee engagement and learning programs that impact culture and growth",
      "Leverage people analytics to identify opportunities for improvement in org health",
    ],
    requirements: [
      "4+ years HRBP/People Ops experience",
      "Strong employment law and policy grounding",
      "Empathy, discretion, and data literacy",
    ],
    postedAt: "2025-07-31",
    employmentType: "Full-time",
    level: "Senior",
  },

  // ——— Operations ———
  {
    slug: "project-manager",
    title: "Project Manager",
    department: "Operations",
    location: "Houston, United States of America",
    description:
      "As a Project Manager, you’ll oversee the execution of cross-functional initiatives, ensuring projects are delivered on time, within scope, and aligned to strategic objectives. You’ll lead planning rituals, risk management, and stakeholder communication while driving accountability across teams.",
    responsibilities: [
      "Define project scope, timelines, and deliverables in collaboration with stakeholders",
      "Track progress and manage risks to keep projects running smoothly",
      "Facilitate key project rituals including planning, stand-ups, and retrospectives",
      "Create clear, consistent communication plans for executives and team members",
      "Implement best practices in project management to improve organizational performance",
    ],
    requirements: [
      "3+ years in project/delivery management",
      "Strong tooling (Jira/Asana) and communication",
      "Certification (PMP/Agile) a plus",
    ],
    postedAt: "2025-08-02",
    employmentType: "Full-time",
    level: "Mid",
  },
];
