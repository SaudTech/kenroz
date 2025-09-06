"use client";

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'product' | 'website';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let structuredData: Record<string, unknown> = {};

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kenroz",
          "description": "Leading IT solutions and software development company specializing in Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development, and custom software products.",
          "url": "https://kenroz.com",
          "logo": "https://kenroz.com/logo_mini.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-XX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA"
          },
          "sameAs": [
            "https://linkedin.com/company/kenroz",
            "https://twitter.com/kenroz"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Information Technology",
          "services": [
            "Microsoft Dynamics 365",
            "Cloud Solutions",
            "Web Application Development",
            "Mobile Application Development",
            "Digital Marketing",
            "IT Outsourcing"
          ],
          ...data
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Kenroz"
          },
          ...data
        };
        break;

      case 'product':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "provider": {
            "@type": "Organization",
            "name": "Kenroz"
          },
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web-based",
          ...data
        };
        break;

      case 'website':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Kenroz",
          "url": "https://kenroz.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://kenroz.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
        break;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = `structured-data-${type}`;

    // Remove existing script if it exists
    const existingScript = document.getElementById(`structured-data-${type}`);
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}