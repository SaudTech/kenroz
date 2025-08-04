/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const metadata = { title: "Microsoft Dynamics 365" };

const steps = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We analyze your current systems, workflows, and goals to craft a tailored Dynamics 365 plan.",
  },
  {
    step: 2,
    title: "Customization & Configuration",
    description:
      "Modules, dashboards, and automations are adapted to align with your business processes.",
  },
  {
    step: 3,
    title: "Integration & Migration",
    description:
      "Seamlessly connect legacy systems, third-party tools, and migrate data with minimal disruption.",
  },
  {
    step: 4,
    title: "Training & Support",
    description:
      "Empower your team with onboarding, ongoing support, and continuous optimization.",
  },
];

const faqs = [
  {
    question: "What is Microsoft Dynamics 365?",
    answer: `Microsoft Dynamics 365 is a suite of intelligent business applications that unifies CRM and ERP capabilities to streamline operations, improve customer engagement, and enable data-driven decisions.`,
  },
  {
    question: "Can you integrate Dynamics 365 with existing systems?",
    answer: `Yes. We handle integration with legacy systems, third-party services, and custom APIs to ensure seamless data flow and interoperability across your tech stack.`,
  },
  {
    question: "Do you provide ongoing support?",
    answer: `Absolutely. Our offerings include training, support, and proactive maintenance to keep your Dynamics 365 environment optimized as your business evolves.`,
  },
];

export default function MicrosoftDynamic365Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero with image on right */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold mb-4">
              Microsoft Dynamics 365
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Unified business applications that help you streamline operations,
              enhance customer engagement, and make intelligent, real-time
              decisions. We tailor, integrate, and support Dynamics 365 to fit
              your unique processes and growth goals.
            </p>
            <div className="inline-flex gap-3 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                Get Consultation
              </button>
              <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-md font-medium transition">
                Learn More
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Microsoft Dynamic 365.webp"
                alt="Microsoft Dynamics 365"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services / Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold">Our Process</h2>
          <p className="text-gray-600 mt-2">
            Four clear steps to implement and optimize Dynamics 365 for your
            business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="border rounded-xl p-6 relative hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                  {s.step}
                </div>
                <h3 className="ml-3 text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-700">{s.description}</p>
              <div className="absolute top-4 right-4 text-sm text-blue-600 font-medium">
                Step {s.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Description */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Why Choose Dynamics 365 with Us
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Microsoft Dynamics 365 offers a unified solution to manage every
              facet of your business, from sales and customer service to finance
              and operations. Our team specializes in customizing and
              implementing Dynamics 365 to fit your unique business processes
              and goals. Whether you're looking to improve customer engagement
              or optimize internal operations, we ensure a smooth, scalable
              transformation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We take a tailored approach: analyzing your workflow, integrating
              existing systems, and configuring modules to support your
              strategy. From planning through deployment, you get expert
              guidance and continuous optimization—including AI insights,
              real-time analytics, and secure cloud integration.
            </p>
            <p className="text-lg text-gray-700">
              Ongoing support, training, and upgrades keep your team empowered
              as your business evolves.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Optionally a complementary illustration or graphic */}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 text-white py-14">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-2">
              Ready to transform your business?
            </h2>
            <p className="text-lg">
              Leverage Dynamics 365 with a tailored implementation that scales
              as you grow. Let’s build a roadmap together.
            </p>
          </div>
          <div>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-semibold mb-1 ">
              Frequently Asked Questions
            </h2>
            <div className="bg-[#e31b25] rounded-full w-[40%] h-2 ml-4"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((f) => (
              <Accordion type="multiple" key={f.question}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold hover:bg-gray-100 transition-all">
                    {f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
