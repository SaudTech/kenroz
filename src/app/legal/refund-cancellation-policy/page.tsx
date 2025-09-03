import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "How Kenroz handles refunds, cancellations, pro-rations, deposits, milestones, and SLA credits for software products and professional services.",
  openGraph: {
    title: "Refund & Cancellation Policy",
    description:
      "How Kenroz handles refunds, cancellations, pro-rations, deposits, milestones, and SLA credits for software products and professional services.",
    type: "article",
  },
  alternates: { canonical: "/refund-cancellation-policy" },
};

export default function RefundCancellationPolicyPage() {
  return (
    <PageLayout
      title="Refund & Cancellation Policy"
      subtitle="How refunds, cancellations, and credits work for our products and services."
    >
      <div className="text-sm mb-6">Last updated: August 26, 2025</div>

      {/* Quick nav */}
      <nav aria-label="Table of contents" className="mb-8 rounded-xl border bg-card/60 backdrop-blur-sm p-4">
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {[
            ["1. Purpose & Scope", "#scope"],
            ["2. Definitions", "#definitions"],
            ["3. General Principles", "#principles"],
            ["4. Software Subscriptions", "#subscriptions"],
            ["5. Professional Services", "#services"],
            ["6. Delivery & Data", "#delivery"],
            ["7. SLA Credits", "#sla"],
            ["8. How to Request", "#process"],
            ["9. Taxes & FX", "#taxes"],
            ["10. Abuse & Fair Use", "#abuse"],
            ["11. Exceptions & Rights", "#exceptions"],
            ["12. Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:underline">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id="scope" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">1. Purpose & Scope</h2>
        <p>
          This Refund & Cancellation Policy (“<strong>Policy</strong>”) explains how refunds, cancellations, and credits
          are handled for purchases made from Kenroz across our software products (licenses/subscriptions) and
          professional services (implementation, customization, support, retainers).
        </p>
      </section>

      <section id="definitions" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">2. Definitions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Products:</strong> Our software offerings (hosted SaaS, licensed apps, add-ons).</li>
          <li><strong>Services:</strong> Consulting, implementation, integration, customization, training, managed support, retainers.</li>
          <li><strong>Subscription:</strong> Recurring plan (monthly/annual) for Products and/or support Services.</li>
          <li><strong>Milestone:</strong> Defined deliverable or phase in a Services Statement of Work (SOW).</li>
          <li><strong>Service Credit:</strong> Non-cash credit applied to future invoices, typically for SLA compensation.</li>
        </ul>
      </section>

      <section id="principles" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">3. General Principles</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Refund eligibility depends on the item purchased, timing of request, and delivery/usage status.</li>
          <li>Refunds are issued to the original payment method and currency; processor and exchange fees are non-refundable.</li>
          <li>We may provide <em>Service Credits</em> in place of refunds in certain cases (e.g., SLA remedies).</li>
          <li>To avoid chargebacks, contact us first; unresolved chargebacks may lead to suspension.</li>
        </ul>
      </section>

      <section id="subscriptions" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">4. Software Products (Licenses & Subscriptions)</h2>
        <h3 className="font-medium">4.1 Free Trials</h3>
        <p>Cancel before trial end to avoid charges. Fees charged after trial end are generally non-refundable.</p>
        <h3 className="font-medium">4.2 Monthly Subscriptions</h3>
        <p>Cancel any time; access continues until the end of the billing period. No pro-rated refunds for partial months.</p>
        <h3 className="font-medium">4.3 Annual Subscriptions</h3>
        <p>Cancel any time; access continues until term end. Pro-rated refunds are not provided by default once the term begins.</p>
        <p className="text-sm">
          Exception: material service outage beyond 7 consecutive days (outside scheduled maintenance and not caused by your environment) may qualify for pro-rated credits at our discretion.
        </p>
        <h3 className="font-medium">4.4 Upgrades & Downgrades</h3>
        <p>Upgrades charge immediately on a pro-rated basis. Downgrades take effect at renewal; no mid-term refunds.</p>
        <h3 className="font-medium">4.5 Non-Refundable Product Items</h3>
        <p>One-time license keys, activation/setup fees, provisioning, usage overages, communication credits, connectors, and third-party pass-through fees.</p>
      </section>

      <section id="services" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">5. Professional Services (Projects, Retainers, Support)</h2>
        <h3 className="font-medium">5.1 Deposits & Advance Payments</h3>
        <p>Deposits are non-refundable once work begins or resources are allocated.</p>
        <h3 className="font-medium">5.2 Milestone-Based Projects</h3>
        <p>Completed/accepted milestones are non-refundable. Cancelling before a milestone starts may allow partial refunds minus consumed T&M, non-recoverable costs, and applicable cancellation fees.</p>
        <h3 className="font-medium">5.3 Time & Materials / Retainers</h3>
        <p>Prepaid retainers are non-refundable once the service window begins. Rollover only if explicitly stated.</p>
        <h3 className="font-medium">5.4 Change Requests</h3>
        <p>Approved change requests are billable and non-refundable once performed.</p>
        <h3 className="font-medium">5.5 Cancellation Notice</h3>
        <p>If your agreement includes a notice period, cancellations take effect after that period; fees remain payable during notice.</p>
      </section>

      <section id="delivery" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">6. Delivery, Access & Data</h2>
        <p>Delivery failures due to customer-side issues (contact details, firewalls, environment) are not refundable. Post-cancellation, access continues until end of term; data retention/export follows your plan and policies.</p>
      </section>

      <section id="sla" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">7. SLA Credits (Not Cash Refunds)</h2>
        <p>Where applicable, SLA remedies are Service Credits applied to future invoices and are not cash; unused credits may expire.</p>
      </section>

      <section id="process" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">8. How to Request a Refund/Cancellation</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Email <a href="mailto:billing@kenroz.com" className="underline">billing@kenroz.com</a> or submit a ticket from your account.</li>
          <li>Provide account email, invoice/order ID, and reason.</li>
          <li>For Services: include SOW/project name, milestone details, and acceptance notes.</li>
          <li>We may request logs/screenshots for Product issues. Reviews in 5–7 business days; approved refunds in 7–14 business days.</li>
        </ol>
      </section>

      <section id="taxes" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">9. Taxes, Currency & Fees</h2>
        <p>Taxes (e.g., GST/VAT) are non-refundable once remitted. Currency conversion and card processor fees are non-refundable.</p>
      </section>

      <section id="abuse" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">10. Abuse & Fair Use</h2>
        <p>We may deny refunds in cases of fraud, abuse, excessive requests, or Terms/AUP violations. Chargeback abuse may lead to suspension.</p>
      </section>

      <section id="exceptions" className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">11. Exceptions & Statutory Rights</h2>
        <p>Local consumer rights are not affected. We may make reasonable exceptions in good faith (e.g., duplicate charges).</p>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-xl font-semibold">12. Contact</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Billing & Refunds: <a href="mailto:billing@kenroz.com" className="underline">billing@kenroz.com</a></li>
          <li>Support: <a href="mailto:support@kenroz.com" className="underline">support@kenroz.com</a></li>
          <li>Legal: <a href="mailto:legal@kenroz.com" className="underline">legal@kenroz.com</a></li>
        </ul>
      </section>
    </PageLayout>
  );
}