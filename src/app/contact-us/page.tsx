import { Metadata } from "next";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";

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

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ p?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const intent = resolvedSearchParams?.p;
  let heading = "Contact Us";
  let description =
    "Ready to take the next step? We\u2019re here to help you succeed. Reach out and let\u2019s discuss how we can work together to transform your business with innovative IT solutions.";

  if (intent === "hire") {
    heading = "Hire an Expert";
    description =
      "Looking to bring skilled professionals on board? Share your requirements and we\u2019ll connect you with the right talent.";
  } else if (intent) {
    heading = "Service Inquiry";
    description =
      "Interested in our services? Tell us about your project and we\u2019ll get back to you shortly.";
  }

  const locations = [
    { city: "Hyderabad", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
    { city: "Dammam", flag: "\uD83C\uDDF8\uD83C\uDDE6" },
    { city: "Chicago", flag: "\uD83C\uDDFA\uD83C\uDDF8" },
    { city: "Dubai", flag: "\uD83C\uDDE6\uD83C\uDDEA" },
  ];

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

      <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 min-h-screen flex items-center py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left column with heading and locations */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-secondary via-primary to-black bg-clip-text text-transparent">
                {heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-900 max-w-xl leading-relaxed">
                {description}
              </p>
              {!intent && (
                <ul className="mt-10 space-y-4">
                  {locations.map((loc) => (
                    <li
                      key={loc.city}
                      className="flex items-center text-xl font-medium"
                    >
                      <span className="text-3xl mr-3">{loc.flag}</span>
                      {loc.city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right column with contact form */}
              <EnhancedContactForm
                showContactInfo={false}
                context={intent}
                className="w-full"
              />
          </div>
        </div>
      </div>
    </>
  );
}
