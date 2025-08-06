import { Metadata } from 'next';
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "IT Services - Microsoft Dynamics 365, Cloud Solutions & More | Kenroz",
  description: "Explore Kenroz's comprehensive IT services including Microsoft Dynamics 365 implementation, Cloud Solutions, Web & Mobile Development, Digital Marketing, and IT Outsourcing services in Saudi Arabia.",
  keywords: [
    "IT services Saudi Arabia",
    "Microsoft Dynamics 365 services",
    "cloud solutions",
    "web development services",
    "mobile app development",
    "digital marketing services",
    "IT outsourcing",
    "DevOps services",
    "enterprise software services",
    "business automation services"
  ],
  openGraph: {
    title: "IT Services - Microsoft Dynamics 365, Cloud Solutions & More | Kenroz",
    description: "Comprehensive IT services to transform your business. From Microsoft Dynamics 365 to custom software development and cloud solutions.",
    url: "https://kenroz.com/services",
    type: "website",
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          "@type": "Service",
          "name": "IT Solutions and Software Development Services",
          "description": "Comprehensive IT services including Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development, Digital Marketing, and IT Outsourcing",
          "provider": {
            "@type": "Organization",
            "name": "Kenroz"
          },
          "areaServed": "Saudi Arabia",
          "serviceType": "Information Technology Services"
        }}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  )
}
