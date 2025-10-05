import { Metadata } from "next";
import { jobs } from "@/lib/jobs";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";
import { File } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for a Job - Kenroz",
  description: "Submit your application to join the Kenroz team.",
  alternates: { canonical: "/apply-for-job" },
};

export default async function ApplyForJobPage({
  searchParams,
}: {
  searchParams?: Promise<{ job?: string }>;
}) {
  const params = await searchParams;
  const jobSlug = params?.job;
  const job = jobSlug ? jobs.find((j) => j.slug === jobSlug) : null;

  return (
    <div className="min-h-[80vh] flex items-start px-6 py-10">
      <Blob className="opacity-25 absolute top-[0%] left-[-25%]" />
      <div className="container mx-auto max-w-7xl py-0">
        <SectionHeading
          blackText="Apply for"
          primaryText={job ? job.title : "a Position"}
        />
        <div className="w-full text-center">
          <Paragraph className="max-w-3xl text-center">
            Interested in <b>{job?.title ?? "a role"}</b>? Apply via the form or email
            your resume to{" "}
            <a
              href="mailto:support@kenroz.com"
              className="underline decoration-border/60 underline-offset-4 hover:decoration-primary"
            >
              <span className="font-semibold">support@kenroz.com</span>
            </a>
            .
          </Paragraph>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
          <div className="w-full h-full lg:sticky lg:top-24">
            <JobApplicationForm job={job?.title} className="w-full h-full" />
          </div>
          <div className="space-y-8">
            <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card backdrop-blur hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  {/* lucide-react */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-card-foreground">
                    Apply by Email
                  </h3>
                  <p className="mt-1 text-sm text-card-foreground">
                    Prefer email? Send your application directly. We respond
                    within 2-3 business days.
                  </p>
                </div>
              </div>

              {/* CTA */}
              {(() => {
                const subject = encodeURIComponent(
                  `Job Application - ${typeof job !== "undefined" && job?.title ? job.title : "General"}`
                );
                const body = encodeURIComponent(
                  `Hi Kenroz Team,

I'm applying for the ${typeof job !== "undefined" && job?.title ? job.title : "role"}.

• Full name: 
• Phone Number:
• LinkedIn:
• Current location:
• Notice period:
• Resume attached

Thanks,`
                );
                const mailHref = `mailto:support@kenroz.com?subject=${subject}&body=${body}`;

                return (
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-card-foreground">
                    <a
                      href={mailHref}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card  px-4 py-2 text-sm font-medium transition-all hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      aria-label="Email Kenroz with a pre-filled application"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16v16H4z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      <span>Start Email Application</span>
                    </a>

                    <a
                      href="mailto:support@kenroz.com"
                      className="text-sm underline decoration-border/60 underline-offset-4 hover:decoration-primary"
                    >
                      Or use{" "}
                      <span className="font-semibold">support@kenroz.com</span>
                    </a>
                  </div>
                );
              })()}

              {/* Checklist */}
              <div className="mt-6 rounded-xl border border-border/50 bg-card">
                <div className="px-4 py-3 border-b border-border/50">
                  <p className="text-sm font-medium text-card-foreground">
                    Include these in your email
                  </p>
                </div>
                <ul className="p-4 grid sm:grid-cols-2 gap-3 text-sm text-card-foreground">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>
                    Full name & phone number
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>
                    Resume
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>
                    Portfolio / LinkedIn
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>
                    Role of interest
                  </li>
                </ul>
              </div>

              {/* Fine print */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-card-foreground">
                <div className="inline-flex items-center gap-2">
                  <File className="h-3.5 w-3.5 text-card-foreground" />
                  Attachments up to 20&nbsp;MB
                </div>
                <span aria-hidden="true">•</span>
                <div>We keep your data confidential.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
