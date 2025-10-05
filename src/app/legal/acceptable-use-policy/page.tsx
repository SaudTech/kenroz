import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "Kenroz Acceptable Use Policy (AUP). Detailed rules for permitted use, prohibited conduct, security, API limits, messaging, content standards, monitoring and enforcement.",
  openGraph: {
    title: "Acceptable Use Policy",
    description:
      "Kenroz Acceptable Use Policy (AUP). Detailed rules for permitted use, prohibited conduct, security, API limits, messaging, content standards, monitoring and enforcement.",
    type: "article",
  },
  alternates: { canonical: "/acceptable-use-policy" },
};

export default function AcceptableUsePolicyPage() {
  return (
    <PageLayout
      title="Acceptable Use Policy"
      subtitle="Rules to protect our customers, infrastructure, and the wider Internet."
    >
      <div className="text-sm text-foreground mb-6">
        Last updated: April 19, 2025
      </div>

      {/* Quick nav */}
      <nav
        aria-label="Table of contents"
        className="mb-8 rounded-xl border bg-card text-card-foreground backdrop-blur-sm p-4"
      >
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {[
            ["1. Introduction & Scope", "#scope"],
            ["2. Definitions", "#definitions"],
            ["3. General Responsibilities", "#responsibilities"],
            ["4. Prohibited Conduct", "#prohibited"],
            ["5. Security & Abuse", "#security"],
            ["6. Platform Integrity", "#integrity"],
            ["7. API & Automation Limits", "#api"],
            ["8. Email/SMS & Messaging", "#messaging"],
            ["9. Content Standards", "#content"],
            ["10. Intellectual Property", "#ip"],
            ["11. Privacy & Data Protection", "#privacy"],
            ["12. Third-Party Services", "#thirdparty"],
            ["13. Monitoring & Enforcement", "#monitoring"],
            ["14. Violations & Consequences", "#consequences"],
            ["15. Reporting Abuse", "#reporting"],
            ["16. Law Enforcement", "#lawenforcement"],
            ["17. Changes to this AUP", "#changes"],
            ["18. Contact", "#contact"],
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
        <section id="scope" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">1. Introduction & Scope</h2>
          <p>
            This Acceptable Use Policy (“<strong>AUP</strong>”) governs your
            access to and use of Kenroz websites, applications, products, and
            services (the “<strong>Services</strong>”). The AUP applies to all
            users, organizations, and end users under your account. Capitalized
            terms not defined here have the meanings given in our{" "}
            <Link href="/terms-of-service" className="underline">
              Terms of Service
            </Link>
            .
          </p>
          <p>
            By using the Services, you agree to comply with this AUP. If you do
            not agree, you must not use the Services. We may update this AUP
            from time to time; changes will be posted on this page.
          </p>
        </section>

        <section id="definitions" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Customer Content:</strong> Data, text, files, images, or
              other materials you or your end users provide to or through the
              Services.
            </li>
            <li>
              <strong>Malicious Code:</strong> Viruses, worms, time bombs,
              Trojan horses, ransomware, spyware, or other code intended to
              disrupt, damage, or gain unauthorized access.
            </li>
            <li>
              <strong>Automated Access:</strong> Access by scripts, bots,
              scrapers, or automated tools rather than human-operated
              browsers/clients.
            </li>
            <li>
              <strong>Resource Abuse:</strong> Use that degrades the Services
              for others, including excessive API calls, CPU/RAM/disk usage, or
              network bandwidth consumption.
            </li>
          </ul>
        </section>

        <section id="responsibilities" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">3. General Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Comply with all applicable laws, regulations, and industry
              standards (e.g., anti-spam, privacy, IP laws).
            </li>
            <li>
              Maintain the confidentiality of your credentials and ensure
              authorized use by your personnel and end users.
            </li>
            <li>
              Promptly update contact and billing information and implement
              reasonable security measures on your systems.
            </li>
            <li>
              Ensure all Customer Content is lawful, accurate where required,
              and properly licensed.
            </li>
          </ul>
        </section>

        <section id="prohibited" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">4. Prohibited Conduct</h2>
          <p>You must not, and must not allow others to use the Services to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Illegal activity:</strong> Engage in, promote, or
              facilitate unlawful acts, including fraud, money laundering, human
              trafficking, distribution of illegal substances, or violation of
              export controls/sanctions.
            </li>
            <li>
              <strong>Security violations:</strong> Attempt unauthorized access,
              probe/scan/penetration testing of networks without consent,
              exploit vulnerabilities, or bypass authentication/authorization.
            </li>
            <li>
              <strong>Network abuse:</strong> DDoS, reflection/amplification
              attacks, traffic flooding, port scanning, or packet crafting
              causing network degradation.
            </li>
            <li>
              <strong>Malware:</strong> Distribute Malicious Code,
              crypto-jacking, botnets, droppers, or command-and-control
              infrastructure.
            </li>
            <li>
              <strong>Spam & deceptive practices:</strong> Send unsolicited bulk
              messages, snowshoeing, list harvesting, sending without consent,
              or misleading headers/subject lines.
            </li>
            <li>
              <strong>Harassment & harm:</strong> Bully, harass, threaten
              violence or property damage; incite or celebrate harm; stalk or
              dox individuals.
            </li>
            <li>
              <strong>Child sexual exploitation (CSE) & abuse material:</strong>{" "}
              Strictly prohibited; will be reported to authorities where
              required.
            </li>
            <li>
              <strong>Hate or extremist content:</strong> Promote or support
              terrorism or violent extremism; content intended to dehumanize or
              harm protected groups.
            </li>
            <li>
              <strong>IP infringement:</strong> Upload or share content that
              infringes copyrights, trademarks, trade secrets, or other
              intellectual property rights.
            </li>
            <li>
              <strong>Privacy violations:</strong> Collect, process, or disclose
              personal data without proper notice, consent, or legal basis;
              unlawful surveillance or tracking.
            </li>
            <li>
              <strong>Impersonation & misrepresentation:</strong> Misuse
              identities, claim false affiliations, spoof domains/emails, or
              deepfake individuals to deceive.
            </li>
            <li>
              <strong>Scraping & automated collection:</strong> Scrape personal
              data or restricted areas, or circumvent robots.txt, rate limits,
              or access controls.
            </li>
            <li>
              <strong>Reverse engineering:</strong> Decompile, disassemble, or
              otherwise attempt to derive source code or underlying models where
              not permitted by law.
            </li>
            <li>
              <strong>Resource abuse:</strong> Overuse compute, storage, or
              bandwidth causing material service degradation; circumvent
              quotas/billing.
            </li>
            <li>
              <strong>High-risk use:</strong> Use in life-critical or
              safety-critical systems without appropriate redundancies and
              written authorization.
            </li>
            <li>
              <strong>Payment abuse:</strong> Use stolen cards, synthetic
              identities, or initiate fraudulent chargebacks.
            </li>
          </ul>
          <p className="text-sm">
            <em>Examples (non-exhaustive):</em> running stress tests on our
            endpoints, mass account creation, credential stuffing, scraping
            logged-in dashboards, sending bulk emails to purchased lists,
            phishing pages, or operating exit nodes/relays that obscure origins
            for abuse.
          </p>
        </section>

        <section id="security" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">5. Security & Abuse</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Implement reasonable endpoint security (patching, anti-malware,
              least privilege) and rotate credentials as needed.
            </li>
            <li>
              Do not share API keys publicly or embed secrets in client-side
              code; use server-side storage and environment variables.
            </li>
            <li>
              Immediately notify us of suspected breaches, credential exposure,
              or misuse of your account.
            </li>
            <li>
              Respect other customers’ data and tenancy boundaries; no
              cross-tenant access or enumeration.
            </li>
          </ul>
        </section>

        <section id="integrity" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">6. Platform Integrity</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Do not interfere with monitoring, logging, metering, or billing
              mechanisms.
            </li>
            <li>
              Do not attempt to disable or degrade protective controls
              (firewalls, WAF, rate limiting, bot detection).
            </li>
            <li>
              Do not falsify telemetry (e.g., user agents) to evade detection or
              inflate metrics.
            </li>
          </ul>
        </section>

        <section id="api" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">7. API & Automation Limits</h2>
          <p>
            Automated Access must respect published limits in documentation or
            your plan. Unless otherwise stated in your order form:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Rate limits:</strong> Do not exceed concurrency or
              requests-per-second (RPS) limits. Back-off on HTTP 429/503.
            </li>
            <li>
              <strong>Caching:</strong> Use reasonable caching to avoid
              excessive polling; avoid hot-loop retries.
            </li>
            <li>
              <strong>Non-interactive use:</strong> Long-running bots or daemons
              must be resilient and not hammer endpoints on failures.
            </li>
            <li>
              <strong>Fair use:</strong> We may throttle or shape traffic to
              protect stability for all users.
            </li>
          </ul>
        </section>

        <section id="messaging" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">8. Email/SMS & Messaging</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Obtain valid consent for marketing communications and provide a
              clear opt-out/unsubscribe mechanism.
            </li>
            <li>
              Maintain accurate sender identity (From/Reply-To), subject lines,
              and contact details.
            </li>
            <li>
              Honor opt-outs promptly; do not re-subscribe users without
              explicit renewed consent.
            </li>
            <li>
              Respect carrier, anti-spam, and anti-abuse rules (e.g., CAN-SPAM,
              GDPR/ePrivacy, TRAI, CTIA, TCPA where applicable).
            </li>
            <li>
              No purchased/rented lists, list harvesting, or sending to users
              without a provable consent record.
            </li>
          </ul>
        </section>

        <section id="content" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">9. Content Standards</h2>
          <p>Customer Content must not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Be unlawful, defamatory, libelous, invasive of privacy, or
              otherwise objectionable.
            </li>
            <li>
              Contain sexually exploitative content, non-consensual intimate
              imagery, or CSE material.
            </li>
            <li>
              Promote violence, self-harm instructions, or credible threats
              against persons or property.
            </li>
            <li>
              Infringe IP rights or contain trade secrets you are not authorized
              to disclose.
            </li>
            <li>
              Include sensitive personal data without lawful basis and
              safeguards (e.g., health, biometric, financial identifiers).
            </li>
          </ul>
        </section>

        <section id="ip" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">10. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Respect copyrights, trademarks, and other IP rights. Respond to
              takedown notices in accordance with applicable law.
            </li>
            <li>
              Do not remove, obscure, or alter proprietary notices or branding
              on the Services.
            </li>
            <li>
              Provide proper attribution where required by licenses or
              third-party terms.
            </li>
          </ul>
        </section>

        <section id="privacy" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            11. Privacy & Data Protection
          </h2>
          <p>
            You must comply with applicable data protection laws and our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            . Obtain necessary consents, provide required notices, and implement
            appropriate technical and organizational measures when processing
            personal data.
          </p>
        </section>

        <section id="thirdparty" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            12. Third-Party Services & Integrations
          </h2>
          <p>
            If you enable third-party integrations, you are responsible for
            their configuration and for complying with their terms. We are not
            responsible for third-party products or services.
          </p>
        </section>

        <section id="monitoring" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            13. Monitoring & Enforcement
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We may monitor, investigate, and take action to enforce this AUP,
              including throttling, filtering, or blocking traffic.
            </li>
            <li>
              We may remove or disable access to content that allegedly violates
              this AUP or the rights of others.
            </li>
            <li>
              We may contact you for remediation and require corrective actions
              within a specified time.
            </li>
          </ul>
        </section>

        <section id="consequences" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            14. Violations & Consequences
          </h2>
          <p>Depending on severity and context, consequences may include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Warning and request to remediate within a set timeframe.</li>
            <li>
              Temporary suspension, throttling, or limitation of features or API
              calls.
            </li>
            <li>
              Removal of offending content, quarantine of resources, or
              isolation of impacted components.
            </li>
            <li>
              Termination of access or account for repeated or egregious
              violations.
            </li>
            <li>
              Reporting to authorities where required by law, and/or pursuit of
              legal remedies.
            </li>
          </ul>
          <p className="text-sm">
            Suspension/termination does not relieve payment obligations already
            incurred. Some violations may trigger fees for remediation,
            recovery, or third-party costs (e.g., abuse desk handling, blacklist
            delisting).
          </p>
        </section>

        <section id="reporting" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            15. Reporting Abuse & Vulnerabilities
          </h2>
          <p>
            To report abuse or suspected AUP violations, email{" "}
            <a href="mailto:support@kenroz.com" className="underline">
              support@kenroz.com
            </a>{" "}
            with relevant logs/headers/URLs. For security vulnerabilities, email{" "}
            <a href="mailto:support@kenroz.com" className="underline">
              support@kenroz.com
            </a>
            . Do not publicly disclose vulnerabilities until we confirm
            remediation or provide guidance.
          </p>
        </section>

        <section id="lawenforcement" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">
            16. Law Enforcement Requests
          </h2>
          <p>
            We respond to valid legal process consistent with applicable law.
            Requests should be addressed to{" "}
            <a href="mailto:support@kenroz.com" className="underline">
              support@kenroz.com
            </a>
            . Emergency disclosure requests must include sufficient context to
            assess imminent harm.
          </p>
        </section>

        <section id="changes" className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">17. Changes to this AUP</h2>
          <p>
            We may update this AUP periodically. Updates will be posted on this
            page with a revised “Last updated” date. Material changes may also
            be communicated by email or in-app notices where required.
          </p>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-xl font-semibold">18. Contact</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Abuse Desk:{" "}
              <a href="mailto:support@kenroz.com" className="underline">
                support@kenroz.com
              </a>
            </li>
            <li>
              Security:{" "}
              <a href="mailto:support@kenroz.com" className="underline">
                support@kenroz.com
              </a>
            </li>
            <li>
              Legal:{" "}
              <a href="mailto:support@kenroz.com" className="underline">
                support@kenroz.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
