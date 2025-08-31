import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import StructuredData from "@/components/seo/StructuredData";
import { cn } from "@/lib/utils";
import OurStory from "@/components/sections/OurStory";
import StrategicPartner from "@/components/sections/StrategicPartner";
import OurClients from "@/components/sections/OurClients";
import EngagementSection from "@/components/EngagementSection";

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="website"
        data={{
          "@type": "WebPage",
          name: "Kenroz IT Solutions - Digital Transformation & Enterprise Software Company",
          description:
            "Kenroz empowers businesses with innovative IT solutions, from Microsoft Dynamics 365 and Cloud to Web & Mobile Development, Digital Marketing, and IT Outsourcing. Partner with us to transform your business with technology.",
          url: "https://kenroz.com",
          mainEntity: {
            "@type": "Organization",
            name: "Kenroz IT Solutions",
          },
        }}
      />

      <div className="min-h-screen overflow-x-hidden relative">

        <Section is="even">
          <Hero />
        </Section>
        <Section is="odd">
          <OurStory />
        </Section>
        <Section is="odd">
          <StrategicPartner />
        </Section>
        <Section is="odd">
          <OurClients />
        </Section>
        <Section is="odd">
          <Services />
        </Section>
        <Section is="odd">
          <Technologies />
        </Section>
        <EngagementSection
          title="Ready to Transform Your Business?"
          description="Let’s explore your goals and craft the right IT solutions—whether it’s ERP, Cloud, Web, Mobile, Marketing, or Outsourcing. Partner with us to drive growth with confidence."
          button1Url="/contact-us"
          button1Text="Contact us"
        />
      </div>
    </>
  );
}

export const Section = ({
  children,
  id,
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  is: _is,
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
        "w-full min-h-[calc(100vh-64px)] h-full overflow-hidden ",
        className
      )}
    >
      {children}
    </section>
  );
};
