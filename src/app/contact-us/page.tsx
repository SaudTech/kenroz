import { Metadata } from "next";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";
import EngagementSection from "@/components/EngagementSection";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";
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

function formatTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getInterest(intent?: string) {
  if (!intent) {
    return "General Contact";
  }

  const normalized = intent.toLowerCase();

  const interestMap: Record<string, string> = {
    d365: "Microsoft Dynamics 365",
    "digital-marketing": "Digital Marketing",
    "cloud-devops": "Cloud Solutions",
    "mobile-apps": "Mobile Application Development",
    "mobile-application-development": "Mobile Application Development",
    "web-apps": "Web Application Development",
    "web-application-development": "Web Application Development",
    outsourcing: "Outsourcing",
    hire: "Engage with Expert",
    consulting: "Consulting Services",
    "become-a-partner": "Partnership Inquiry",
    "work-with-kenroz": "Careers at Kenroz",
  };

  if (interestMap[normalized]) {
    return interestMap[normalized];
  }

  if (normalized.startsWith("book-a-demo-")) {
    const productSlug = normalized.replace("book-a-demo-", "");
    const productMap: Record<string, string> = {
      "people-sphere": "People Sphere",
      "pay-stream": "Pay Stream",
      "tax-nova": "Tax Nova",
      "insura-core": "Insura Core",
      learnify: "Learnify",
    };

    return productMap[productSlug] ?? formatTitleFromSlug(productSlug);
  }

  return formatTitleFromSlug(normalized) || "General Contact";
}
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
  const interest = getInterest(intent);

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
              telephone: "+91 22 5555 0101",
              contactType: "customer service",
              availableLanguage: ["English", "Arabic"],
              areaServed: "IN",
            },
          },
        }}
      />
      <StructuredData
        type="faq"
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "How soon will Kenroz respond to new enquiries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We respond within one business day with next steps and a suggested time for your 20-minute consult.",
              },
            },
            {
              "@type": "Question",
              name: "Can Kenroz work with distributed or remote teams?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our delivery pods collaborate across time zones with shared playbooks, weekly governance, and SLA tracking.",
              },
            },
          ],
        }}
      />

      <div className="min-h-[80vh] px-6 py-7">
        <Blob className="opacity-25 absolute top-[30%] left-[10%]" />

        <div className="container mx-auto max-w-7xl py-0">
          <SectionHeading blackText={black} primaryText={primary} />
          <div className="w-full text-center">
            <Paragraph className="max-w-3xl text-center">
              {description}
            </Paragraph>
          </div>

          <div className="mt-6">
            <EnhancedContactForm
              showContactInfo
              context={intent}
              contactType={contactType}
              interest={interest}
              className="w-full"
            />
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
