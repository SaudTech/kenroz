import { Metadata } from 'next';
import Services from "@/components/sections/Services";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Our Services - Complete IT Solutions & Software Development | Kenroz",
  description: "Discover Kenroz's full range of IT services: Microsoft Dynamics 365 implementation, Cloud & DevOps solutions, Web & Mobile development, Digital Marketing, and IT Outsourcing. Transform your business today.",
  keywords: [
    "IT services",
    "Microsoft Dynamics 365 implementation",
    "cloud solutions Saudi Arabia",
    "web application development",
    "mobile app development services",
    "digital marketing agency",
    "IT outsourcing services",
    "DevOps consulting",
    "enterprise software solutions",
    "business process automation"
  ],
  openGraph: {
    title: "Our Services - Complete IT Solutions & Software Development | Kenroz",
    description: "Transform your business with our comprehensive IT services. From Microsoft Dynamics 365 to custom software development and digital marketing solutions.",
    url: "https://kenroz.com/services",
    type: "website",
  },
  twitter: {
    title: "Our Services - Complete IT Solutions & Software Development | Kenroz",
    description: "Transform your business with our comprehensive IT services and software development solutions.",
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      name: "Microsoft Dynamics 365",
      description: "Complete implementation and customization of Microsoft Dynamics 365 to streamline your business operations",
      category: "Enterprise Solutions"
    },
    {
      name: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices to accelerate your digital transformation",
      category: "Cloud Services"
    },
    {
      name: "Web Application Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience",
      category: "Development Services"
    },
    {
      name: "Mobile Application Development",
      description: "Native and cross-platform mobile apps that engage users and drive business growth",
      category: "Development Services"
    },
    {
      name: "Digital Marketing",
      description: "Data-driven digital marketing strategies to boost your online presence and drive conversions",
      category: "Marketing Services"
    },
    {
      name: "IT Outsourcing",
      description: "Reliable IT outsourcing services with skilled professionals to extend your development capabilities",
      category: "Outsourcing Services"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          "@type": "ItemList",
          "itemListElement": services.map((service, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": service.name,
            "description": service.description,
            "category": service.category,
            "provider": {
              "@type": "Organization",
              "name": "Kenroz"
            }
          }))
        }}
      />
      
      <div className="bg-gradient-to-br from-[#df2a33]/5 via-white to-[#9B2730]/5 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <header className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9B2730] via-[#df2a33] to-black bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive IT solutions and software development services 
              to help businesses transform, grow, and succeed in the digital age.
            </p>
          </header>

          {/* Services Section */}
          <Services />

          {/* Call to Action */}
          <section className="mt-20 text-center bg-gradient-to-r from-[#df2a33]/10 to-[#9B2730]/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our IT solutions can help you achieve your business goals. 
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#df2a33] to-[#9B2730] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a 
                href="/products" 
                className="inline-flex items-center px-8 py-4 border-2 border-[#df2a33] text-[#df2a33] font-semibold rounded-xl hover:bg-[#df2a33] hover:text-white transition-all duration-300"
              >
                View Our Products
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}