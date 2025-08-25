import { Metadata } from "next";
import {
  Users,
  Clock,
  DollarSign,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Palette,
  HeadphonesIcon,
  BarChart3,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "IT Outsourcing Services | Dedicated Development Teams & Staff Augmentation",
  description:
    "Professional IT outsourcing services with skilled developers, designers, and technical experts. Flexible engagement models for software development, staff augmentation, and dedicated teams.",
  keywords: [
    "IT outsourcing services",
    "software development outsourcing",
    "dedicated development team",
    "staff augmentation",
    "offshore development",
    "remote development team",
    "IT outsourcing Saudi Arabia",
  ],
};

export default function page() {
  const engagementModels = [
    {
      title: "Dedicated Team",
      description:
        "A full-time dedicated team that works exclusively on your projects with complete focus and commitment.",
      features: [
        "Full-time dedication",
        "Direct communication",
        "Long-term partnership",
        "Scalable team size",
      ],
      bestFor: "Long-term projects, Product development, Ongoing maintenance",
      icon: Users,
      color: "primary",
    },
    {
      title: "Staff Augmentation",
      description:
        "Extend your existing team with skilled professionals who integrate seamlessly with your workflows.",
      features: [
        "Quick onboarding",
        "Flexible duration",
        "Your project management",
        "Direct control",
      ],
      bestFor: "Skill gaps, Peak workloads, Specific expertise",
      icon: Zap,
      color: "secondary",
    },
    {
      title: "Project-Based",
      description:
        "Complete project delivery from start to finish with our experienced project management and development teams.",
      features: [
        "End-to-end delivery",
        "Fixed timeline",
        "Defined scope",
        "Quality assurance",
      ],
      bestFor: "Specific projects, MVP development, Time-bound deliverables",
      icon: Settings,
      color: "primary",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Hand-picked professionals dedicated to your success.",
    },
    {
      icon: CheckCircle,
      title: "Proven Processes",
      description: "Time-tested workflows to ensure high quality.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across regions and time zones.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Responsive assistance whenever you need it.",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Optimize budgets without compromising quality.",
    },
    {
      icon: Clock,
      title: "Speedy Delivery",
      description: "Accelerate time-to-market with agile teams.",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Full-stack developers, mobile app developers, and specialized technology experts.",
      skills: [
        "React/Angular/Vue",
        "Node.js/Python/Java",
        "Mobile Development",
        "Cloud Technologies",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creative designers who craft beautiful, user-friendly interfaces and experiences.",
      skills: [
        "UI/UX Design",
        "Graphic Design",
        "Prototyping",
        "User Research",
      ],
    },
    {
      icon: Database,
      title: "DevOps & Infrastructure",
      description:
        "DevOps engineers and system administrators for robust infrastructure management.",
      skills: [
        "AWS/Azure/GCP",
        "Docker/Kubernetes",
        "CI/CD Pipelines",
        "Monitoring",
      ],
    },
    {
      icon: BarChart3,
      title: "Quality Assurance",
      description:
        "QA engineers and testers to ensure your software meets the highest quality standards.",
      skills: [
        "Manual Testing",
        "Automation Testing",
        "Performance Testing",
        "Security Testing",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description:
        "Technical support specialists and customer service representatives.",
      skills: [
        "24/7 Support",
        "Issue Resolution",
        "Documentation",
        "User Training",
      ],
    },
    {
      icon: BarChart3,
      title: "Project Management",
      description:
        "Experienced project managers to ensure smooth delivery and communication.",
      skills: [
        "Agile/Scrum",
        "Risk Management",
        "Stakeholder Communication",
        "Quality Control",
      ],
    },
  ];
  const process = [
    {
      step: "01",
      title: "Initiation & Planning",
      description:
        "Align on goals, scope out requirements, and assemble your dedicated team.",
    },
    {
      step: "02",
      title: "Setup & Onboarding",
      description:
        "Establish tools, access, and workflows for smooth collaboration.",
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description:
        "Drive development forward with regular check-ins and quality reviews.",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description:
        "Launch your solution and provide ongoing maintenance and enhancements.",
    },
  ];

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                IT Outsourcing
                <span className="block text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                Scale your development capabilities with our skilled
                professionals. From dedicated teams to staff augmentation, we
                provide flexible outsourcing solutions that integrate seamlessly
                with your business.
              </p>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        500+
                      </div>
                      <div className="text-sm text-gray-900">
                        Skilled Professionals
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        24/7
                      </div>
                      <div className="text-sm text-gray-900">
                        Global Coverage
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-sm text-gray-900">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Engagement Models
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((m, i) => (
              <li
                key={i}
                className="p-6 bg-gray-50 rounded-lg flex flex-col items-center"
              >
                <div
                // @ts-expect-error Test
                  className={`${colorClasses[m.color]} p-3 rounded-full mb-4`}
                >
                  <m.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{m.title}</h3>
                <p className="text-gray-900">{m.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-center space-x-4",
                  i % 2 !== 0 ? "" : "justify-end"
                )}
              >
                <s.icon className="w-6 h-6 text-primary" />
                <span className="font-medium text-gray-900">{s.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Us
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((w, i) => (
              <li key={i} className="flex items-start space-x-3">
                <w.icon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">{w.title}</h3>
                  <p className="text-gray-900 text-sm">{w.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Process
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <li
                key={i}
                className="text-center p-6 bg-white rounded-lg shadow"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto flex items-center justify-center mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-900 text-sm">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Team?</h2>
        <p className="mb-8">
          Let&apos;s discuss your needs and assemble the perfect team.
        </p>
        <Link
          href={"/contact-us?p=outsourcing"}
          className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-100 transition"
        >
          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
