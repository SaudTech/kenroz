import { CheckCircle, Cloud, Layers, Repeat, ServerCrash, Settings, Zap } from "lucide-react";
import Image from "next/image";
import DescriptionToggle from "@/components/DescriptionToggle";

export const metadata = {
  title: "Cloud & DevOps Solutions",
  description: "Migrate, build, and operate scalable and secure cloud infrastructure with integrated DevOps automation for faster releases and reliability.",
};

const heroDescription =
  `
Embrace the power of the cloud combined with modern DevOps practices to accelerate your business transformation. 
Our Cloud and DevOps Solutions help you migrate, build, and manage scalable, secure cloud infrastructure while streamlining development through automation and continuous integration.
Whether you're moving legacy systems to the cloud or deploying new applications, we ensure reliability and performance. We specialize in implementing DevOps methodologies that automate your software delivery lifecycle, enabling faster releases, improved quality, and reduced downtime. From infrastructure as code and container orchestration to monitoring and incident management, our team builds a seamless pipeline that supports your business agility and innovation goals. By integrating cloud platforms like Microsoft Azure, AWS, or Google Cloud with DevOps best practices, we help you reduce operational costs, enhance collaboration between development and operations teams, and maintain robust security and compliance.
Partner with us to future-proof your IT environment and accelerate growth with confidence.`;

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Infrastructure as Code",
    description:
      "Define, provision, and manage cloud resources declaratively for repeatability and auditability."
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "CI/CD Pipelines",
    description: "Automate builds, tests, and deployments to accelerate delivery with confidence."
  },
  {
    icon: <ServerCrash className="w-6 h-6" />,
    title: "Monitoring & Incident Management",
    description:
      "Proactively detect issues and resolve incidents with observability baked into your stack."
  },
];

const platforms = [
  { label: "AWS" },
  { label: "Microsoft Azure" },
  { label: "Google Cloud" },
  { label: "Kubernetes" },
  { label: "Terraform" },
  { label: "GitHub Actions" },
];

const benefits = [
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Faster Releases",
    description:
      "Accelerate your software delivery while reducing errors and bottlenecks with modern automation."
  },
  {
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: "Improved Reliability",
    description:
      "Achieve high uptime and robust performance for business-critical apps with proven cloud architectures."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Reduced Cost & Waste",
    description:
      "Eliminate manual work, optimize infrastructure, and stay cost-effective at scale."
  },
];

const checklist = [
  "Assess current infrastructure",
  "Define CI/CD workflow",
  "Bootstrap IaC templates",
  "Deploy observability",
  "Enable automated releases",
];

export default function CloudSolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cloud & DevOps{" "}
              <span className="block text-primary">Solutions</span>
            </h1>
            <div className="mb-8 max-w-2xl">
              <DescriptionToggle description={heroDescription} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 flex justify-center">
            {/* Replace or supply your illustration here */}
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Cloud Solution.webp"
                alt="Modern illustration of cloud infrastructure, containers, and DevOps automation"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Features */}
      <section id="learn-more" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud & DevOps Solutions</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Accelerate your journey to the cloud and DevOps maturity with a secure, automated, and reliable tech stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 flex-1">{feature.description}</p>
                <div>
                  <span className="text-sm font-medium text-primary cursor-pointer">Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Drive productivity and innovation with cloud-native agility and DevOps discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-900">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Cloud Platforms & DevOps Tooling</h2>
            <p className="text-gray-900">
              We integrate with the leading cloud providers and DevOps ecosystems tailored to your needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-2 bg-gray-50 px-6 py-4 rounded-lg shadow border font-semibold text-gray-800"
              >
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-center rounded-b-xl"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/3 text-left">
            <h2 className="text-4xl font-bold mb-4">Future-Proof Your Infrastructure</h2>
            <p className="text-xl mb-6">
              Whether you&apos;re migrating legacy systems or building cloud-native apps, we tailor each solution to your business goals and compliance needs.
            </p>
            <a
              href="mailto:hello@yourcompany.com"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow hover:bg-primary/10 transition-all duration-300"
            >
              Talk to an Expert
            </a>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-white">Quick Start Checklist</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-white/90">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p>
          We integrate with AWS, Azure, Google Cloud, and modern DevOps tools to deliver secure, compliant, and scalable systems. Custom SLAs and support plans available.
        </p>
      </footer>
    </main>
  );
}
