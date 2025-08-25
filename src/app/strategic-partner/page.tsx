import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Partner",
};

export default function StrategicPartnerPage() {
  return (
    <PageLayout title="Strategic Partner">
      <p>
        Partnerships are the secret sauce of business growth. This space will soon
        outline what that means for us and for you.
      </p>
    </PageLayout>
  );
}
