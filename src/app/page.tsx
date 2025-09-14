"use client";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import JsonLd from "@/lib/seo/jsonld";
import { SITE } from "@/lib/seo/site";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  url: SITE.url,
});
import OurStory from "@/components/sections/OurStory";
import StrategicPartner from "@/components/sections/StrategicPartner";
import OurClients from "@/components/sections/OurClients";
import EngagementSection from "@/components/EngagementSection";
import { useEffect } from "react";
import { Section } from "@/components/Section";

function HomeJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
        sameAs: [
          "https://twitter.com/kenroz",
          "https://www.linkedin.com/company/kenroz",
        ],
      }}
    />
  );
}

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
      <HomeJsonLd />

      <div className="min-h-screen overflow-x-hidden relative">
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