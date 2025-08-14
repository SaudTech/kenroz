import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import StructuredData from "@/components/seo/StructuredData";
import { cn } from "@/lib/utils";

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
        <Section is="even">
          <Hero />
        </Section>
        <Section is="odd">
          <About />
        </Section>
        <Section is="even">
          <Services />
        </Section>
        <Section is="odd">
          <Technologies />
        </Section>
        <Section is="even">
          <Clients />
        </Section>
        <Section is="odd">
          <FAQ />
        </Section>
        <Section is="even">
          <EnhancedContactForm showContactInfo={true} />
        </Section>

        {/* <section
          className="py-16"
          id="contact"
          aria-label="Contact Us"
          >
        </section> */}
      </div>
    </>
  );
}

export const Section = ({
  children,
  id,
  className = "",
  is,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  is: "odd" | "even";
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-br",
        className,
        is === "odd" ? "from:primary to:secondary" : "from:blue-300 to-yellow-500"
      )}
    >
      {children}
    </section>
  );
};
