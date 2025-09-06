import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StructuredData from "@/components/seo/StructuredData";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import { Section } from "./page";
import SiteGuard from "@/components/SiteGuard";
import { Analytics } from "@vercel/analytics/next";

const font = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: {
    default: "Kenroz - Leading IT Solutions & Software Development Company",
    template: "%s | Kenroz",
  },
  description:
    "Kenroz delivers innovative IT solutions including Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development, Digital Marketing, and custom software products like HRMS, Payroll, and ZATCA taxation systems. Empowering businesses to lead with clarity, transform with technology, and excel with confidence.",
  keywords: [
    "IT solutions",
    "Microsoft Dynamics 365",
    "Cloud Solutions",
    "Web Development",
    "Mobile Development",
    "Digital Marketing",
    "HRMS",
    "Payroll",
    "ZATCA",
    "Software Development",
    "Saudi Arabia IT company",
    "Enterprise software",
    "Custom software development",
    "Business automation",
    "Digital transformation",
    "IT consulting",
    "Cloud migration",
    "DevOps solutions",
  ],
  authors: [{ name: "Kenroz", url: "https://kenroz.com" }],
  creator: "Kenroz",
  publisher: "Kenroz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kenroz.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-SA": "/ar-SA",
    },
  },
  openGraph: {
    title: "Kenroz - Leading IT Solutions & Software Development Company",
    description:
      "Empowering businesses to lead with clarity, transform with technology, and excel with confidence. Expert IT solutions and custom software development in Saudi Arabia.",
    url: "https://kenroz.com",
    siteName: "Kenroz",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo_mini.png",
        width: 1200,
        height: 630,
        alt: "Kenroz - IT Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenroz - Leading IT Solutions & Software Development Company",
    description:
      "Empowering businesses to lead with clarity, transform with technology, and excel with confidence.",
    site: "@kenroz",
    creator: "@kenroz",
    images: ["/logo_mini.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo_mini.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData
          type="organization"
          data={{
            name: "Kenroz",
            description:
              "Leading IT solutions and software development company specializing in Microsoft Dynamics 365, Cloud Solutions, Web & Mobile Development, and custom software products.",
            url: "https://kenroz.com",
            logo: "https://kenroz.com/logo_mini.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966-XX-XXX-XXXX",
              contactType: "customer service",
              availableLanguage: ["English", "Arabic"],
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "Riyadh",
            },
            foundingDate: "2020",
            numberOfEmployees: "50-100",
            industry: "Information Technology",
            services: [
              "Microsoft Dynamics 365 Implementation",
              "Cloud Solutions and DevOps",
              "Web Application Development",
              "Mobile Application Development",
              "Digital Marketing Services",
              "IT Outsourcing Services",
            ],
          }}
        />
        <StructuredData
          type="website"
          data={{
            name: "Kenroz",
            url: "https://kenroz.com",
            description:
              "Leading IT solutions and software development company",
            inLanguage: "en-US",
          }}
        />
      </head>
      <body
        className={`${font.className} antialiased min-h-screen bg-background overflow-x-hidden`}
      >
        <Analytics />
        <PerformanceOptimizer />
        <SiteGuard>
          <Navbar />
          <main className="mt-[88px]">{children}</main>

          <Section is="even" className="bg-navbar">
            <Footer />
          </Section>
        </SiteGuard>
      </body>
    </html>
  );
}
