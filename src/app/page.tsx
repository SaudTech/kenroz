import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import StructuredData from "@/components/seo/StructuredData";
import { cn } from "@/lib/utils";
import OurStory from "@/components/sections/OurStory";
import StrategicPartner from "@/components/sections/StrategicPartner";
import OurClients from "@/components/sections/OurClients";
import Blob from "@/components/Blob";
import EngagementSection from "@/components/EngagementSection";

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="we
        site"
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

      <div className="min-h-screen overflow-x-hidden relative">
        <Blob className="top-[22%] left-0" />
        <Blob className="top-[38%] right-0" />
        <Blob className="top-[54%] left-0" />
        <Blob className="top-[70%] right-0" />
        <Blob className="top-[86%] left-0" />

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
          title="Ready to Build Your Web Application?"
          description="Let's discuss your project requirements and create a custom web application that drives your business success. Get started today!"
          button1Url="/contact-us?p=web-application-development"
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
        "w-full min-h-[calc(100vh-64px)] h-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
