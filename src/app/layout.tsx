import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import SiteGuard from "@/components/SiteGuard";
import { Analytics } from "@vercel/analytics/next";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { SITE } from "@/lib/seo/site";

const font = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.defaultTitle, template: "%s | Kenroz" },
  description: SITE.defaultDescription,
  openGraph: { siteName: SITE.name, images: [{ url: SITE.defaultOgImage }] },
  twitter: { card: "summary_large_image", site: SITE.twitterHandle },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased min-h-screen bg-background overflow-x-hidden`}
      >
        <Analytics />
        <PerformanceOptimizer />
        <SiteGuard>
          <Navbar />
          <main className="mt-[88px]">{children}</main>

          {/* <Section is="even" className="bg-navbar"> */}
            <Footer />
          {/* </Section> */}
          <ThemeCustomizer />
        </SiteGuard>
      </body>
    </html>
  );
}
