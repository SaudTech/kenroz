import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Kenroz. Learn how we collect, use, and protect your personal data when you use our website, products, and services.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read the Privacy Policy for Kenroz. Learn how we collect, use, and protect your personal data when you use our website, products, and services.",
    type: "article",
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
    >
      <div className="text-sm text-foreground mb-6">
        Last updated: August 26, 2025
      </div>

      {/* Quick nav */}
      <nav
        aria-label="Table of contents"
        className="mb-8 rounded-xl border bg-card text-card-foreground backdrop-blur-sm p-4"
      >
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {[
            ["1. Introduction", "#introduction"],
            ["2. Information We Collect", "#collection"],
            ["3. How We Use Information", "#use"],
            ["4. Legal Bases", "#legal-bases"],
            ["5. Sharing & Disclosure", "#sharing"],
            ["6. Cookies & Tracking", "#cookies"],
            ["7. Data Retention", "#retention"],
            ["8. International Transfers", "#transfers"],
            ["9. Your Rights", "#rights"],
            ["10. Security", "#security"],
            ["11. Children’s Privacy", "#children"],
            ["12. Third-Party Links", "#third-party"],
            ["13. Changes to Policy", "#changes"],
            ["14. Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-foreground">
        <section id="introduction" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Kenroz (“<strong>we</strong>”, “<strong>us</strong>”, or “
            <strong>our</strong>”) values your privacy. This Privacy Policy
            explains how we collect, use, store, and share information when you
            use our websites, applications, and services (collectively, the “
            <strong>Services</strong>”). By using the Services, you agree to
            this Policy.
          </p>
        </section>

        <section id="collection" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Personal information you provide:</strong> such as your
              name, email, phone, billing info, or account details when signing
              up, contacting support, or making a purchase.
            </li>
            <li>
              <strong>Usage data:</strong> including IP address, device info,
              browser type, pages visited, actions taken, and time spent.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> to remember
              preferences, measure engagement, and improve performance.
            </li>
          </ul>
        </section>

        <section id="use" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">3. How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain the Services.</li>
            <li>Process payments, subscriptions, and transactions.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Improve, personalize, and expand the Services.</li>
            <li>Detect, prevent, and address technical issues or abuse.</li>
            <li>Comply with legal obligations and enforce terms.</li>
          </ul>
        </section>

        <section id="legal-bases" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            4. Legal Bases for Processing
          </h2>
          <p>
            We process personal data under the following bases (where
            applicable):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Performance of a contract (to deliver Services).</li>
            <li>Consent (e.g., marketing communications).</li>
            <li>Legitimate interests (e.g., service improvement, security).</li>
            <li>Legal obligations (e.g., tax, regulatory compliance).</li>
          </ul>
        </section>

        <section id="sharing" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">5. Sharing & Disclosure</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Trusted vendors, partners, and service providers who support our
              operations.
            </li>
            <li>
              Authorities, regulators, or law enforcement if required by law or
              to protect rights and safety.
            </li>
            <li>
              In case of merger, acquisition, or asset sale, your information
              may be transferred as part of the business transaction.
            </li>
          </ul>
        </section>

        <section id="cookies" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            6. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies, pixels, and similar tools to enable essential
            functions, analyze usage, and improve user experience. You can
            manage cookie preferences in your browser settings. Some features
            may not function properly without cookies.
          </p>
        </section>

        <section id="retention" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p>
            We retain personal data as long as necessary to fulfill the purposes
            outlined in this Policy, unless a longer retention period is
            required by law. When no longer needed, we securely delete or
            anonymize data.
          </p>
        </section>

        <section id="transfers" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            8. International Data Transfers
          </h2>
          <p>
            As a global service provider, we may process and store information
            outside your country of residence. We implement safeguards (e.g.,
            standard contractual clauses) to ensure your data receives adequate
            protection.
          </p>
        </section>

        <section id="rights" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">9. Your Rights</h2>
          <p>Depending on your location, you may have rights such as:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access, correct, or delete your personal data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>
              Withdraw consent at any time for processing based on consent.
            </li>
            <li>Request portability of your data to another provider.</li>
            <li>
              Lodge a complaint with a supervisory authority if you believe your
              rights are violated.
            </li>
          </ul>
        </section>

        <section id="security" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">10. Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your data from unauthorized access, alteration, disclosure, or
            destruction. However, no system is completely secure, and we cannot
            guarantee absolute protection.
          </p>
        </section>

        <section id="children" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">11. Children’s Privacy</h2>
          <p>
            Our Services are not directed to individuals under the age of 16 (or
            the applicable age of digital consent in your jurisdiction). We do
            not knowingly collect personal data from children. If we learn we
            have collected data from a child, we will delete it promptly.
          </p>
        </section>

        <section id="third-party" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            12. Third-Party Links & Services
          </h2>
          <p>
            The Services may contain links to or integrate with third-party
            websites, apps, or services. We are not responsible for the privacy
            practices of third parties. We encourage you to review their
            policies.
          </p>
        </section>

        <section id="changes" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            13. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Policy periodically. Updates will be posted on
            this page with a revised “Last updated” date. Material changes may
            also be communicated by email or in-app notification, where required
            by law.
          </p>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-xl font-semibold">14. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              By email (general inquiries):{" "}
              <a href="mailto:privacy@kenroz.com" className="underline">
                privacy@kenroz.com
              </a>
            </li>
            <li>
              By email (legal inquiries):{" "}
              <a href="mailto:legal@kenroz.com" className="underline">
                legal@kenroz.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
