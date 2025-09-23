import { Metadata } from "next";
import { jobs } from "@/lib/jobs";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";

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
    <div className="min-h-screen flex items-center px-6 py-0">
      <div className="container mx-auto max-w-7xl py-0">
        <SectionHeading
          blackText="Apply for"
          primaryText={job ? job.title : "a Position"}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
              Fill out the form below and we will get back to you shortly.
            </p>
            <div className="p-10 bg-card rounded-lg border border-primary">
              <SectionHeading
                blackTextClassName="text-2xl"
                primaryTextClassName="text-2xl"
                blackText="Alternative submission"
                primaryText="method"
              />
              <div className="text-center">
                <Paragraph className="text-lg">
                  You can also send your application details directly via email
                  to{" "}
                  <a
                    href="mailto:support@kenroz.com"
                    className="font-semibold underline hover:text-card-foreground"
                  >
                    support@kenroz.com
                  </a>
                  .
                  <br />
                  <br />
                  Please include your full name, contact information and resume.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="w-full h-full lg:sticky lg:top-24">
            <JobApplicationForm job={job?.title} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
