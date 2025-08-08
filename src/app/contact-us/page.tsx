import { Metadata } from 'next';
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Kenroz IT Solutions",
  description: "Contact Kenroz for expert IT solutions, software development, and digital transformation services. Get a free consultation for Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development.",
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
    "Saudi Arabia IT company contact"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Kenroz IT Solutions",
    description: "Ready to transform your business with cutting-edge IT solutions? Contact our expert team for a free consultation on software development, cloud solutions, and digital transformation.",
    url: "https://kenroz.com/contact-us",
    type: "website",
  },
  twitter: {
    title: "Contact Us - Get in Touch with Kenroz IT Solutions",
    description: "Ready to transform your business with cutting-edge IT solutions? Contact our expert team for a free consultation.",
  },
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData 
        type="organization" 
        data={{
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Kenroz",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966-XX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Arabic"],
              "areaServed": "SA"
            }
          }
        }}
      />
      
      <div className="bg-gradient-to-br from-[#e31b25]/10 via-white to-[#7e141c]/10 min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7e141c] via-[#e31b25] to-black bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to take the next step? We&apos;re here to help you succeed. Reach
              out and let&apos;s discuss how we can work together to transform your business
              with innovative IT solutions.
            </p>
          </header>

          {/* Enhanced Contact Form */}
          <EnhancedContactForm
            title="Let's Start a Conversation"
            description="Tell us about your project and we'll get back to you within 24 hours with a detailed proposal."
            showContactInfo={true}
          />

          {/* Additional Contact Information */}
          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Kenroz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">
                  We respond to all inquiries within 24 hours during business days
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Free initial consultation to understand your specific needs
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e31b25]/20 to-[#7e141c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Trusted Partner</h3>
                <p className="text-gray-600 text-sm">
                  Long-term partnership approach with ongoing support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
