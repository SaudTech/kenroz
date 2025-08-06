import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="website"
        data={{
          "@type": "WebPage",
          name: "Kenroz - Leading IT Solutions & Software Development Company",
          description:
            "Empowering businesses to lead with clarity, transform with technology, and excel with confidence",
          url: "https://kenroz.com",
          mainEntity: {
            "@type": "Organization",
            name: "Kenroz",
          },
        }}
      />

      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <FAQ />
        <section
          className="bg-red-900 py-16"
          id="contact"
          aria-label="Contact Us"
        >
          <EnhancedContactForm
            title="Get in touch with our experts"
            description="Our experts are here to help you with your IT solutions and software development needs. Fill out the form below to start a conversation."
            showContactInfo={true}
          />
        </section>
      </div>
    </>
  );
}
