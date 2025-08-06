import { Metadata } from 'next';
import StructuredData from "@/components/seo/StructuredData";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us - Kenroz IT Solutions & Software Development Company",
  description: "Learn about Kenroz, a leading IT solutions company in Saudi Arabia. We specialize in Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development, and custom software products. Empowering businesses since 2020.",
  keywords: [
    "about Kenroz",
    "IT company Saudi Arabia",
    "software development company",
    "Microsoft Dynamics 365 partner",
    "cloud solutions provider",
    "web development company",
    "mobile app development",
    "digital transformation",
    "IT consulting services",
    "enterprise software solutions"
  ],
  openGraph: {
    title: "About Us - Kenroz IT Solutions & Software Development Company",
    description: "Discover how Kenroz empowers businesses to lead with clarity, transform with technology, and excel with confidence. Learn about our expertise in IT solutions and software development.",
    url: "https://kenroz.com/about",
    type: "website",
  },
  twitter: {
    title: "About Us - Kenroz IT Solutions & Software Development Company",
    description: "Discover how Kenroz empowers businesses to lead with clarity, transform with technology, and excel with confidence.",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData 
        type="organization" 
        data={{
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Kenroz",
            "description": "At Kenroz, we believe in empowering businesses to lead with clarity, transform with technology, and excel with confidence. We are a forward-thinking IT solutions company committed to delivering high-impact digital services and innovative software products.",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Information Technology",
            "knowsAbout": [
              "Microsoft Dynamics 365",
              "Cloud Solutions",
              "Web Development",
              "Mobile Development",
              "Digital Marketing",
              "IT Outsourcing",
              "HRMS Systems",
              "Payroll Management",
              "ZATCA Taxation",
              "Insurance Systems",
              "Learning Management Systems"
            ]
          }
        }}
      />
      
      <div className="bg-gradient-to-br from-[#e31b25]/5 via-white to-[#7e141c]/5 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <About />

          {/* Company Values */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open communication, honest feedback, and clear expectations 
                  throughout every project and partnership.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agility</h3>
                <p className="text-gray-600">
                  We adapt quickly to changing requirements and market conditions, 
                  ensuring our solutions remain relevant and effective.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest quality in everything we deliver, 
                  from code to customer service and ongoing support.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mt-20 bg-gradient-to-r from-[#e31b25]/10 to-[#7e141c]/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Kenroz?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re more than just a service provider — we&apos;re your technology partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold text-[#e31b25] mb-2">50+</div>
                <p className="text-gray-700 font-medium">Expert Team Members</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold text-[#e31b25] mb-2">100+</div>
                <p className="text-gray-700 font-medium">Successful Projects</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold text-[#e31b25] mb-2">24/7</div>
                <p className="text-gray-700 font-medium">Support Available</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold text-[#e31b25] mb-2">5+</div>
                <p className="text-gray-700 font-medium">Years of Excellence</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}