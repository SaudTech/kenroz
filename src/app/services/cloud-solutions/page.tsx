import DescriptionToggle from "@/components/DescriptionToggle";
import Image from "next/image";

export const metadata = {
  title: "Cloud & DevOps Solutions",
  description:
    "Migrate, build, and operate scalable and secure cloud infrastructure with integrated DevOps automation for faster releases and reliability.",
};

const features = [
  {
    title: "Infrastructure as Code",
    description:
      "Define, provision, and manage cloud resources declaratively for repeatability and auditability.",
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9h16M9 4v16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Automate builds, tests, and deployments to accelerate delivery with confidence.",
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.25-.56 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.55.55 1.3.7 1.98.44H9c.7 0 1.25-.56 1.51-1a1.65 1.65 0 0 0-.33-1.82L10.12 3a2 2 0 1 1 2.83-2.83l.06.06c.55.55.7 1.3.44 1.98V5c.26.44.81 1 1.51 1h.09a2 2 0 1 1 0 4h-.09c-.7 0-1.25.56-1.51 1v.09c0 .7.56 1.25 1 1.51z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Monitoring & Incident Management",
    description:
      "Proactively detect issues and resolve incidents with observability baked into your stack.",
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 13h2l1-2h4l1-2h4l1-2h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="17" r="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const d = `
Embrace the power of the cloud combined with modern DevOps practices to accelerate your business transformation. Our Cloud and DevOps Solutions help you migrate, build, and manage scalable, secure cloud infrastructure while streamlining development through automation and continuous integration. Whether you’re moving legacy systems to the cloud or deploying new applications, we ensure reliability and performance.
  
We specialize in implementing DevOps methodologies that automate your software delivery lifecycle, enabling faster releases, improved quality, and reduced downtime. From infrastructure as code and container orchestration to monitoring and incident management, our team builds a seamless pipeline that supports your business agility and innovation goals.

By integrating cloud platforms like Microsoft Azure, AWS, or Google Cloud with DevOps best practices, we help you reduce operational costs, enhance collaboration between development and operations teams, and maintain robust security and compliance. Partner with us to future-proof your IT environment and accelerate growth with confidence.`;

export default function CloudSolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-6xl font-extrabold leading-tight mb-4">
            Cloud & DevOps Solutions
          </h1>

          {/* Interactive description (client) */}
          <div className="mb-6 max-w-2xl">
            <DescriptionToggle description={d} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-md shadow-sm hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/Cloud Solution.webp"
              alt="Abstract cloud and DevOps illustration symbolizing scalable infrastructure and automation"
              fill
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section
        id="learn-more"
        className="container mx-auto px-6 py-16 bg-white rounded-xl shadow-inner"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A full-stack approach to cloud adoption and DevOps maturity: reduce
            waste, increase reliability, and deliver faster without sacrificing
            security.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-600">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
              </div>
              <p className="text-gray-700 flex-1">{f.description}</p>
              <div>
                <span className="text-sm font-medium text-blue-600">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Cloud Platforms & Tooling
          </h2>
          <p className="text-gray-600">
            We integrate with the major cloud providers and DevOps ecosystems to
            fit your existing or future stack.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
          ].map((p) => (
            <div
              key={p}
              className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-sm border"
            >
              <div className="text-lg font-semibold">{p}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="container mx-auto px-6 py-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-3">
              Future-proof your infrastructure
            </h2>
            <p className="mb-6">
              Whether you&apos;re migrating legacy systems or building greenfield
              apps, we tailor cloud and DevOps strategy to your business goals
              and compliance needs.
            </p>
            <a
              href="mailto:hello@yourcompany.com"
              className="inline-block px-7 py-4 bg-white text-blue-700 font-semibold rounded-md shadow hover:opacity-95 transition"
            >
              Talk to an Expert
            </a>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Quick Start Checklist</h4>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>Assess current infrastructure</li>
                <li>Define CI/CD workflow</li>
                <li>Bootstrap IaC templates</li>
                <li>Deploy observability</li>
                <li>Enable automated releases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="container mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p>
          We integrate with AWS, Azure, Google Cloud, and modern DevOps tools to
          deliver secure, compliant, and scalable systems. Custom SLAs and
          support plans available.
        </p>
      </footer>
    </main>
  );
}
