import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
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
        <Partners />
        <Services />
        <Technologies />
        <Clients />
        <Testimonials />
        <FAQ />
        <section
          className="bg-red-900 py-16"
          id="contact"
          aria-label="Contact Us"
        >
          <EnhancedContactForm showContactInfo={true} />
        </section>
      </div>
    </>
  );
}
