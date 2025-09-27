"use client";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import StructuredData from "@/components/seo/StructuredData";
import OurStory from "@/components/sections/OurStory";
import StrategicPartner from "@/components/sections/StrategicPartner";
import OurClients from "@/components/sections/OurClients";
import EngagementSection from "@/components/EngagementSection";
import { useEffect } from "react";
import { Section } from "@/components/Section";
import { Blob } from "@/components/Blob";

export default function HomePage() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }, 100);
        }
      }
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);
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

        <Blob className="opacity-25 absolute top-[60%] left-0" />
        <Blob className="opacity-25 absolute top-[220%] -left-[20%]" />
        <Blob className="opacity-25 absolute top-[350%] right-0 left-[70%]" />
        <Blob className="opacity-25 absolute top-[510%] -left-[10%]" />
      <div className="min-h-screen overflow-hidden relative">
        <Section is="even" className="max-w-auto">
          <Hero />
        </Section>
        <Section is="odd" id="about-us">
          <OurStory />
        </Section>
        <Section is="odd" id="strategic-partners">
          <StrategicPartner />
        </Section>
        <Section is="odd" id="our-clients">
          <OurClients />
        </Section>
        <Section is="odd" id="services">
          <Services />
        </Section>
        <Section is="odd" id="tech">
          <Technologies />
        </Section>
        <EngagementSection
          title="Ready to Transform Your Business?"
          description="Let’s explore your goals and craft the right IT solutions whether it’s ERP, Cloud, Web, Mobile, Marketing, or Outsourcing. Partner with us to drive growth with confidence."
          button1Url="/contact-us"
          button1Text="Contact us"
        />
      </div>
    </>
  );
}