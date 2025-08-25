import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <PageLayout title="Cookie Policy">
      <p>
        Cookies make this site function, and sometimes they even taste good. This
        placeholder explains our future cookie practices.
      </p>
      <p>
        Real details will eventually describe what crumbs we leave on your
        browser.
      </p>
    </PageLayout>
  );
}
