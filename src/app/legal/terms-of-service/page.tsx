import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Kenroz. These terms govern your access to and use of our website, products, and services.",
  openGraph: {
    title: "Terms of Service",
    description:
      "Read the Terms of Service for Kenroz. These terms govern your access to and use of our website, products, and services.",
    type: "article",
  },
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service Agreement"
      subtitle="Please read these terms carefully before using our services."
    >
      <div className="text-sm text-foreground mb-6">
        Last updated: August 26, 2025
      </div>

      {/* Quick nav */}
      <nav
        aria-label="Table of contents"
        className="mb-8 rounded-xl border bg-card text-card-foreground backdrop-blur-sm p-4"
      >
        {" "}
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {[
            ["1. Acceptance of Terms", "#acceptance"],
            ["2. Eligibility & Accounts", "#eligibility"],
            ["3. Access & Use", "#access"],
            ["4. Prohibited Conduct", "#prohibited"],
            ["5. Subscriptions & Billing", "#billing"],
            ["6. Trials & Beta", "#trials"],
            ["7. Third-Party Services", "#third-party"],
            ["8. IP Ownership", "#ip"],
            ["9. Confidentiality", "#confidentiality"],
            ["10. Privacy & Data", "#privacy"],
            ["11. Security", "#security"],
            ["12. Availability & Support", "#availability"],
            ["13. Disclaimers", "#disclaimers"],
            ["14. Liability", "#liability"],
            ["15. Indemnity", "#indemnity"],
            ["16. Termination", "#termination"],
            ["17. Governing Law", "#law"],
            ["18. Changes to Terms", "#changes"],
            ["19. Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id="acceptance" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (“<strong>Terms</strong>”) govern your access
          to and use of Kenroz websites, applications, products, and services
          (collectively, the “<strong>Services</strong>”). By accessing or using
          the Services, you agree to be bound by these Terms and our{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          . If you do not agree, you must not use the Services.
        </p>
      </section>

      <section id="eligibility" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">2. Eligibility & Accounts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You must be at least the age of majority in your jurisdiction to use
            the Services.
          </li>
          <li>
            When creating an account, you must provide accurate information and
            keep it up to date. You are responsible for maintaining the
            confidentiality of your credentials and all activities under your
            account.
          </li>
          <li>
            If you sign up on behalf of an organization, you represent that you
            have authority to bind that organization to these Terms.
          </li>
        </ul>
      </section>

      <section id="access" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">3. Access & Permitted Use</h2>
        <p>
          Subject to these Terms and any applicable order forms, Kenroz grants
          you a limited, non-exclusive, non-transferable, revocable right to
          access and use the Services for your internal business purposes.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must comply with all applicable laws and regulations.</li>
          <li>
            You may not sublicense, resell, or make the Services available to
            third parties without written consent.
          </li>
          <li>
            You are responsible for your content, configurations, and use of the
            Services.
          </li>
        </ul>
      </section>

      <section id="prohibited" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">4. Prohibited Conduct</h2>
        <p>Without limiting the foregoing, you agree you will not:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Reverse engineer, decompile, or attempt to derive source code from
            the Services.
          </li>
          <li>
            Bypass or interfere with security, rate limits, or access controls.
          </li>
          <li>
            Introduce malware, attempt unauthorized access, or disrupt network
            integrity.
          </li>
          <li>
            Use the Services to process illegal content or infringe intellectual
            property or privacy rights.
          </li>
          <li>
            Misrepresent identity, impersonate others, or engage in fraudulent
            or abusive behavior.
          </li>
        </ul>
      </section>

      <section id="billing" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          5. Subscriptions, Fees & Billing
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Fees, billing cycles, and plan limits are described at purchase or
            in your order form. Taxes (e.g., VAT) may apply and will be added as
            required by law.
          </li>
          <li>
            Unless otherwise stated, subscriptions automatically renew at the
            then-current rates. You may cancel renewal per the instructions in
            your account or order form.
          </li>
          <li>
            Late or failed payments may result in suspension or termination of
            access. All fees are non-refundable except where required by law or
            expressly stated.
          </li>
        </ul>
      </section>

      <section id="trials" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          6. Trials, Evaluations & Beta Features
        </h2>
        <p>
          We may offer trials or beta features (“<strong>Beta</strong>”) at our
          discretion. Beta is provided “as is” without warranties and may be
          modified or discontinued at any time. Beta may be excluded from
          support or SLAs.
        </p>
      </section>

      <section id="third-party" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          7. Third-Party Services & Integrations
        </h2>
        <p>
          The Services may interoperate with third-party products or services.
          Your use of third-party offerings is governed by their terms and
          privacy policies. Kenroz is not responsible for third-party acts or
          omissions.
        </p>
      </section>

      <section id="ip" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          8. Intellectual Property & License
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Kenroz and its licensors retain all right, title, and interest in
            and to the Services, including all software, documentation, designs,
            and trademarks.
          </li>
          <li>
            You retain ownership of your content and grant Kenroz a limited
            license to host, process, and display such content solely to provide
            the Services.
          </li>
          <li>
            Feedback you provide may be used by Kenroz to improve the Services
            without obligation or compensation.
          </li>
        </ul>
      </section>

      <section id="confidentiality" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">9. Confidentiality</h2>
        <p>
          “Confidential Information” means non-public information disclosed by
          either party that is marked or reasonably understood to be
          confidential. Each party will protect the other’s Confidential
          Information and use it only as necessary to perform under these Terms.
          This obligation does not apply to information that is public,
          independently developed, rightfully obtained from a third party, or
          required to be disclosed by law.
        </p>
      </section>

      <section id="privacy" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">10. Privacy & Data Processing</h2>
        <p>
          Our collection and use of personal data is described in our{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          . Where applicable, a separate data processing agreement (DPA) may
          apply. You are responsible for providing all necessary notices and
          obtaining any required consents from your end users.
        </p>
      </section>

      <section id="security" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">11. Security</h2>
        <p>
          We implement administrative, technical, and organizational measures
          designed to protect the security of the Services. However, no method
          of transmission or storage is 100% secure, and we cannot guarantee
          absolute security. You remain responsible for securing your accounts,
          endpoints, and credentials.
        </p>
      </section>

      <section id="availability" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          12. Availability, Maintenance & Support
        </h2>
        <p>
          We aim to provide high availability and timely support. We may perform
          scheduled or emergency maintenance, during which the Services may be
          temporarily unavailable. Certain plans may include service-level
          commitments or response targets as specified in your order form.
        </p>
      </section>

      <section id="disclaimers" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">13. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
          EXTENT PERMITTED BY LAW, KENROZ DISCLAIMS ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
          UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
        </p>
      </section>

      <section id="liability" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">14. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, KENROZ AND ITS AFFILIATES,
          OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR
          ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL. IN NO EVENT WILL OUR
          AGGREGATE LIABILITY EXCEED THE AMOUNTS PAID BY YOU TO KENROZ FOR THE
          SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO
          LIABILITY.
        </p>
      </section>

      <section id="indemnity" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">15. Indemnification</h2>
        <p>
          You will indemnify and hold harmless Kenroz, its affiliates, and their
          respective officers, employees, and agents from and against any
          claims, damages, liabilities, costs, and expenses (including
          reasonable legal fees) arising out of or related to your content, your
          use of the Services, or your breach of these Terms.
        </p>
      </section>

      <section id="termination" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">16. Suspension & Termination</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            We may suspend or terminate access to the Services (in whole or in
            part) for violations of these Terms, risk to security or network
            integrity, non-payment, legal compliance, or to protect users.
          </li>
          <li>
            You may terminate by following the cancellation process in your
            account or order form. Upon termination, your right to access the
            Services ceases, but sections intended to survive (e.g., IP,
            confidentiality, liability, indemnity) will remain in effect.
          </li>
          <li>
            Data retention or export (if available) will be handled according to
            your plan and our policies at the time of termination.
          </li>
        </ul>
      </section>

      <section id="law" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">
          17. Governing Law & Dispute Resolution
        </h2>
        <p>
          These Terms are governed by the laws of the jurisdiction where Kenroz
          is established, without regard to conflict of laws principles. The
          exclusive venue for disputes will be the competent courts located in
          that jurisdiction. Nothing prevents either party from seeking
          injunctive relief for urgent matters.
        </p>
      </section>

      <section id="changes" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">18. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will
          revise the “Last updated” date at the top of this page. If changes
          materially affect your rights, we will provide additional notice where
          required by law. Your continued use of the Services after changes take
          effect constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-xl font-semibold">19. Contact Us</h2>
        <p>
          For questions about these Terms, please contact us at{" "}
          <a href="mailto:support@kenroz.com" className="underline">
            support@kenroz.com
          </a>
          . For data-protection inquiries, contact{" "}
          <a href="mailto:support@kenroz.com" className="underline">
            support@kenroz.com
          </a>
          .
        </p>
      </section>
    </PageLayout>
  );
}
