import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <PageLayout title="Terms of Service">
      <p>
        This Terms of Service page is a placeholder. Replace it with actual terms
        that explain how your service can be used.
      </p>
      <p>
        By accessing our site you agree to these terms. Consult a lawyer for real
        legal advice.
      </p>
    </PageLayout>
  );
}
