import { Metadata } from "next";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";
import {
  Phone,
  Clock,
  Mail,
  MessageSquare,
  CheckCircle2,
  Shield,
} from "lucide-react";
import EngagementSection from "@/components/EngagementSection";
import SectionHeading from "@/components/typography/SectionHeading";

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
  switch (intent) {
    case "hire":
      return { black: "Engage", primary: "Our Experts" };
    case "become-a-partner":
      return { black: "Partner", primary: "With Kenroz" };
    case "work-with-kenroz":
      return { black: "Work", primary: "with Kenroz" };
    case undefined:
    case "":
      return { black: "Let’s", primary: "Connect" };
    default:
      return { black: "Service", primary: "Inquiry" };
  }
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
              <p className="text-lg md:text-xl text-gray-900 max-w-2xl leading-relaxed">
                {description}
              </p>

              {/* Quick Channels */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a
                  href="tel:+919704730500"
                  className="group flex items-center gap-2 rounded-xl bg-card text-card-foreground px-3 py-2 text-sm hover:shadow-sm transition"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call us</span>
                </a>
                <a
                  href="https://wa.me/919704730500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-card text-card-foreground px-3 py-2 text-sm hover:shadow-sm transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:hello@kenroz.com"
                  className="group flex items-center gap-2 rounded-xl bg-card text-card-foreground px-3 py-2 text-sm hover:shadow-sm transition col-span-2 sm:col-span-1"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </div>

              {/* Info tiles */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-card text-card-foreground p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4" />
                    <h3 className="font-medium">Office Hours</h3>
                  </div>
                  <p className="text-sm">Mon–Sat, 9:00 AM – 6:00 PM</p>
                </div>
                <div className="rounded-2xl bg-card text-card-foreground p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4" />
                    <h3 className="font-medium">Assurance</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Secure & confidential engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Clear proposals & timelines</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tiny FAQ */}
              <div className="space-y-2">
                {/* <h3 className="text-sm font-semibold">Quick FAQ</h3> */}
                <div className="rounded-2xl bg-card text-card-foreground divide-y divide-black/5">
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
                    <p className="mt-2 text-sm">
                      Yes, engagements across India, KSA, and UAE are common.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* ---------- Right Column: sticky form ---------- */}
            <div className="w-full h-full lg:sticky lg:top-24">
              <EnhancedContactForm
                showContactInfo={false}
                context={intent}
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
