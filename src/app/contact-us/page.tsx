import { Metadata } from "next";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";
import { Phone, Clock, Mail, MessageSquare } from "lucide-react";
import EngagementSection from "@/components/EngagementSection";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Kenroz IT Solutions",
  description:
    "Contact Kenroz for expert IT solutions, software development, and digital transformation services. Get a free consultation for Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development.",
  keywords: [
    "contact Kenroz",
    "IT solutions consultation",
    "software development inquiry",
    "Microsoft Dynamics 365 consultation",
    "cloud solutions contact",
    "web development quote",
    "mobile app development",
    "digital marketing services",
    "IT outsourcing inquiry",
    "Saudi Arabia IT company contact",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Kenroz IT Solutions",
    description:
      "Ready to transform your business with cutting-edge IT solutions? Contact our expert team for a free consultation on software development, cloud solutions, and digital transformation.",
    url: "https://kenroz.com/contact-us",
    type: "website",
  },
  twitter: {
    title: "Contact Us - Get in Touch with Kenroz IT Solutions",
    description:
      "Ready to transform your business with cutting-edge IT solutions? Contact our expert team for a free consultation.",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

type ContactSearchParams = {
  p?: string | string[];
};
function getHeadingParts(intent?: string) {
  // first letter capitalize each word after splitting by hyphen
  const product =
    intent
      ?.split("book-a-demo-")[1]
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Our Products";
  const isBookDemo = intent?.startsWith("book-a-demo");
  if (isBookDemo) {
    return { black: "Book a demo for", primary: product };
  }
  switch (intent) {
    case "hire":
      return { black: "Engage", primary: "Our Experts" };
    case "become-a-partner":
      return { black: "Partner", primary: "With Kenroz" };
    case "work-with-kenroz":
      return { black: "Work", primary: "with Kenroz" };
    case "consulting":
      return { black: "Kenroz", primary: "Consulting" };
    case undefined:
    case "":
      return { black: "Let’s", primary: "Connect" };
    default:
      return { black: "Service", primary: "Inquiry" };
  }
}

function getContactType(intent?: string) {
  const normalizedIntent = intent?.toLowerCase() ?? "";

  if (!normalizedIntent) {
    return "General Contact";
  }

  if (normalizedIntent === "hire") {
    return "Engage with Expert";
  }

  if (normalizedIntent.startsWith("book-a-demo")) {
    return "Service Inquiry";
  }

  if (normalizedIntent === "consulting") {
    return "Service Inquiry";
  }

  if (normalizedIntent === "become-a-partner") {
    return "General Contact";
  }

  if (normalizedIntent === "work-with-kenroz") {
    return "General Contact";
  }

  return "Service Inquiry";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<ContactSearchParams>;
}) {
  const resolved = (await searchParams) ?? {};
  const rawIntent = resolved.p;
  const intent = Array.isArray(rawIntent) ? rawIntent[0] : rawIntent;
  const { black, primary } = getHeadingParts(intent);
  const contactType = getContactType(intent);

  let description =
    "Have a project in mind or need expert guidance? Our team at Kenroz is here to listen, understand, and help you achieve your goals. Reach out today and let’s start building your success story.";

  if (intent === "hire") {
    description =
      "Looking for skilled professionals to strengthen your team? Share your requirements and we’ll match you with the right talent from Kenroz to accelerate your projects with confidence";
  } else if (intent === "become-a-partner") {
    description =
      "Collaboration drives innovation. If you’re ready to partner with us, tell us about your business, and let’s explore how we can grow stronger together.";
  } else if (intent === "work-with-kenroz") {
    description =
      "Passionate about technology and innovation? Explore opportunities to work with us and be part of a team shaping the future of IT solutions across the globe.";
  } else if (intent === "consulting") {
    description =
      "Need expert advice on digital transformation, cloud adoption, or Microsoft Dynamics 365? Our consultants are ready to understand your challenges and provide tailored solutions.";
  } else if (intent) {
    description =
      "Interested in our solutions? Whether it’s cloud, digital transformation, or custom development, tell us about your project and we’ll get back to you with the right approach.";
  }

  return (
    <>
      <StructuredData
        type="organization"
        data={{
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Kenroz",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966-XX-XXX-XXXX",
              contactType: "customer service",
              availableLanguage: ["English", "Arabic"],
              areaServed: "SA",
            },
          },
        }}
      />

      <div className="min-h-screen flex items-center px-6 py-0">
        <div className="container mx-auto max-w-7xl py-0">
          <SectionHeading blackText={black} primaryText={primary} />

          <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
            {/* ---------- Left Column: filled + useful ---------- */}
            <div className="space-y-8">
              {/* Intro */}
              <Paragraph>{description}</Paragraph>

              {/* Quick Channels */}

              {/* Info tiles */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-card hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] transition-all duration-300 text-card-foreground p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4" />
                    <h3 className="font-medium">Business Hours</h3>
                  </div>
                  <p className="text-sm">
                    Monday to Friday, <br /> 9:00 AM - 6:00 PM
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <a href="tel:+919704730500">
                    <div className="group relative flex items-center justify-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 bg-card text-card-foreground text-sm font-medium border border-card hover:shadow-lg transition-all duration-300">
                      <Phone className="w-4 h-4 text-card-foreground" />
                      <span>Call us</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919704730500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group relative flex items-center justify-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 bg-card text-card-foreground text-sm font-medium border border-card hover:shadow-lg transition-all duration-300">
                      <MessageSquare className="w-4 h-4 text-card-foreground" />
                      <span>WhatsApp</span>
                    </div>
                  </a>
                  <a href="mailto:support@kenroz.com">
                    <div className="group relative flex items-center justify-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 bg-card text-card-foreground text-sm font-medium border border-card hover:shadow-lg transition-all duration-300">
                      <Mail className="w-4 h-4 text-card-foreground" />
                      <span>Email</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Tiny FAQ */}
              <div className="space-y-2">
                {/* <h3 className="text-sm font-semibold">Quick FAQ</h3> */}
                <div className="rounded-2xl bg-card hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] transition-all duration-300 text-card-foreground divide-y divide-black/5">
                  <details className="p-4">
                    <summary className="cursor-pointer text-sm font-medium">
                      How soon will you respond?
                    </summary>
                    <p className="mt-2 text-sm">
                      We usually reply within one business day.
                    </p>
                  </details>
                  <details className="p-4">
                    <summary className="cursor-pointer text-sm font-medium">
                      Do you work with remote teams?
                    </summary>
                    <p className="mt-2 text-sm">Yes.</p>
                  </details>
                </div>
              </div>
            </div>

            {/* ---------- Right Column: sticky form ---------- */}
            <div className="w-full h-full lg:sticky lg:top-24">
              <EnhancedContactForm
                showContactInfo={false}
                context={intent}
                contactType={contactType}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <EngagementSection
        title="Contact us now to get started"
        description="We will help you understand your needs and provide a tailored solution."
      />
    </>
  );
}
