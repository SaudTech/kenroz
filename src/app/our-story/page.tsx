import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <PageLayout title="Our Story">
      <p>
        Every company starts somewhere. This page will eventually tell the tale of
        how we came to be, but for now it&apos;s just filler text.
      </p>
    </PageLayout>
  );
}
