import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import StructuredData from "@/components/seo/StructuredData";
import { cn } from "@/lib/utils";
import OurStory from "@/components/sections/OurStory";
import StrategicPartner from "@/components/sections/StrategicPartner";

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
          <OurStory />
        </Section>
        <Section is="odd">
          <StrategicPartner />
        </Section>
        <Section is="odd">
          <Services />
        </Section>
        <Section is="odd">
          <Technologies />
        </Section>
        {/* <Section is="even">
          <Clients />
        </Section> */}
        {/* <Section is="odd">
          <FAQ />
        </Section> */}
        {/* <Section is="even">
          <ShowLocations />
        </Section> */}
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
        "w-full min-h-[calc(100vh-64px)] h-full overflow-hidden",
        className,
        is === "odd" ? "bg-primary/10" : "from:blue-300 to-yellow-500"
      )}
    >
      {children}
    </section>
  );
};
