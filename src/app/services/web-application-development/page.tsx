import { Metadata } from "next";
import {
  Code,
  Smartphone,
  Zap,
  Shield,
  Search,
  Users,
  ArrowRight,
  Monitor,
  Layers,
  Globe,
  BarChart2,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import EngagementSection from "@/components/EngagementSection";

export const metadata: Metadata = {
  title: "Custom Web Application Development Services | Modern & Scalable",
  description:
    "Professional web application development services using modern frameworks like React, Next.js, and Node.js. Build responsive, fast, and secure web applications tailored to your business needs.",
  keywords: [
    "web application development",
    "custom web apps",
    "React development",
    "Next.js development",
    "responsive web design",
    "full-stack development",
    "web app development Saudi Arabia",
  ],
};

export default function WebApplicationDevelopmentPage() {
  const developmentProcess = [
    {
      section: "Planning & Design",
      description:
        "We kick things off by understanding your goals, mapping out requirements, and crafting the look and feel of the product.",
    },
    {
      section: "Build & Integration",
      description:
        "Our team implements both user-facing interfaces and server-side logic, stitching together frontend and backend into a cohesive whole.",
    },
    {
      section: "Quality Assurance",
      description:
        "Before launch, we rigorously test for functionality, performance, and security to make sure everything works flawlessly.",
    },
    {
      section: "Launch & Support",
      description:
        "We deploy your application into production and stick around to provide updates, training, and ongoing maintenance.",
    },
  ];

  const technologies = [
    {
      category: "Frontend",
      icon: Monitor,
      techs: [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: Layers,
      techs: ["Node.js", "Python", "PHP", "Java", "C#", ".NET Core"],
    },
    {
      category: "Database",
      icon: Shield,
      techs: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "SQL Server",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Globe,
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Applications that work perfectly on all devices – desktop, tablet, and mobile.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed with fast loading times and smooth user interactions.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built with security best practices including data encryption and secure authentication.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description:
        "Search engine friendly architecture to improve your online visibility.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Intuitive interfaces designed with your users’ needs and behaviors in mind.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Well-structured, maintainable code following industry best practices.",
    },
    // New additions:
    {
      icon: Globe,
      title: "Internationalization",
      description:
        "Built-in support for multiple languages and locales to reach a global audience.",
    },
    {
      icon: BarChart2,
      title: "Analytics Integration",
      description:
        "Seamless hooks into analytics platforms for real-time insights and reporting.",
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description:
        "Modular, microservices-friendly design that grows with your user base and feature set.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Custom Web Application
                <span className="block text-primary">Development</span>
              </h1>
              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                Build powerful, scalable web applications that drive your
                business forward. Our expert developers create custom solutions
                using modern technologies and best practices for optimal
                performance and user experience.
              </p>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Code className="w-12 h-12 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-8 bg-primary/10 rounded"></div>
                      <div className="h-8 bg-secondary/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We deliver exceptional web applications with cutting-edge
              technology and user-focused design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Modern, proven technologies for building robust and scalable web
              applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {tech.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {tech.techs.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              A systematic approach that ensures quality, timely delivery, and
              client satisfaction
            </p>
          </div>
          <div className="space-y-8 grid grid-cols-4 gap-2 lg:gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row items-start gap-8 p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="flex-shrink-0 absolute top-0 left-2/4 transform -translate-x-2/4 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {step.section}
                  </h3>
                  <p className="text-gray-900 mb-6 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EngagementSection
        title="Ready to Build Your Web Application?"
        description="Let&apos;s discuss your project requirements and create a custom web application that drives your business success. Get started today!"
        button1Url="/contact-us?p=web-application-development"
        button1Text="Contact us"
      />
    </main>
  );
}
