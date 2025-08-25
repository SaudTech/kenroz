import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <p>
        We respect your privacy. This temporary policy gives a rough idea of how
        data might be handled once a real policy is written.
      </p>
      <p>
        Until then, assume we are doing our best and not selling your secrets to
        space aliens.
      </p>
    </PageLayout>
  );
}
