import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

const resources = [
  { label: "Our Story", href: "/#our-story" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Strategic Partner", href: "/#strategic-partner" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function ResourcesPage() {
  return (
    <PageLayout title="Resources">
      <ul className="space-y-2">
        {resources.map((r) => (
          <li key={r.href}>
            <a href={r.href} className="text-primary hover:underline">
              {r.label}
            </a>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
