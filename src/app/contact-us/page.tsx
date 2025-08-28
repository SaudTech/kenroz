import { Metadata } from "next";
import Image from "next/image";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";
import { MapPin, Phone, Clock } from "lucide-react";

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

const locations = [
  {
    city: "Hyderabad",
    flag: "/flags/ind.png",
    location: "Madhura Colony, Gachibowli, Hyderabad, Telangana 500104",
    phone: "+91-9849000000",
    operatingHours: "9:00 AM - 6:00 PM (Mon-Sat)",
  },
  {
    city: "Dammam",
    flag: "/flags/sau.png",
    location: "Al Khobar Al Shamalia, Al Khobar 34428, Saudi Arabia",
    phone: "+966-23-234-2342",
    operatingHours: "9:00 AM - 6:00 PM (Mon-Sat)",
  },
  {
    city: "Houston",
    flag: "/flags/usa.png",
    location: "3100 Cleburne St, Houston, TX 77004, USA",
    phone: "+1-642-234-2342",
    operatingHours: "9:00 AM - 6:00 PM (Mon-Sat)",
  },
  {
    city: "Dubai",
    flag: "/flags/uae.png",
    location:
      "19 48A St - Al Barsha - Al Barsha 2 - Dubai - United Arab Emirates",
    phone: "+971-18-923-2342",
    operatingHours: "9:00 AM - 6:00 PM (Mon-Sat)",
  },
];

function LocationCard({
  city,
  flag,
  location,
  phone,
  operatingHours,
}: (typeof locations)[number]) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-6 w-9 overflow-hidden rounded">
          <Image
            src={flag}
            alt={`${city} flag`}
            fill
            sizes="36px"
            className="object-cover"
            priority={false}
          />
        </div>
        <h3 className="text-lg font-semibold">{city}</h3>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
          <p className="leading-snug">{location}</p>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className="leading-snug hover:underline"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
          <p className="leading-snug">{operatingHours}</p>
        </div>
      </div>

      {/* subtle gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
}

type ContactSearchParams = {
  p?: string | string[];
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<ContactSearchParams>;
}) {
  const resolved = (await searchParams) ?? {};
  const rawIntent = resolved.p;
  const intent = Array.isArray(rawIntent) ? rawIntent[0] : rawIntent;

  let heading = "Contact Us";
  let description =
    "Ready to take the next step? We're here to help you succeed. ";

  if (intent === "hire") {
    heading = "Hire an Expert";
    description =
      "Looking to bring skilled professionals on board? Share your requirements and we'll connect you with the right talent.";
  } else if (intent) {
    heading = "Service Inquiry";
    description =
      "Interested in our services? Tell us about your project and we'll get back to you shortly.";
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

      <div className="min-h-screen flex items-center px-6 py-0 ">
        <div className="container mx-auto max-w-7xl py-0">
          <h1 className="w-full text-center text-5xl md:text-7xl font-extrabold text-black">
            {heading}
          </h1>
          <div className="grid lg:grid-cols-2 gap-20 mt-4 items-start">
            {/* Left: heading + cards */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-900 max-w-2xl leading-relaxed">
                {description}
              </p>

              {/* Location cards */}
              {!intent && (
                <div className="grid sm:grid-cols-2 gap-5 mt-6">
                  {locations.map((loc) => (
                    <LocationCard key={loc.city} {...loc} />
                  ))}
                </div>
              )}
            </div>

            {/* Right: contact form */}
            <div className="w-full">
              <EnhancedContactForm
                showContactInfo={false}
                context={intent}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
