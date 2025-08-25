import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us",
};

export default function WhyUsPage() {
  return (
    <PageLayout title="Why Us">
      <p>
        Here is where we convince you we&apos;re the best choice. Until real content
        arrives, please enjoy this modest placeholder text.
      </p>
    </PageLayout>
  );
}
