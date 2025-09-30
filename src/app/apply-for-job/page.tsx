import { Metadata } from "next";
import { jobs } from "@/lib/jobs";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";

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

        <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
          <div className="w-full h-full lg:sticky lg:top-24">
            <JobApplicationForm job={job?.title} className="w-full h-full" />
          </div>
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
              Fill out the form below and we will get back to you shortly.
            </p>
            <div className="p-10 bg-card rounded-lg border border-primary">
              <Paragraph className="text-2xl text-card-foreground font-semibold mb-4 text-center w-full">
                Alternative Submission Method
              </Paragraph>
              <div className="text-center">
                <Paragraph className="text-lg text-card-foreground">
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
        </div>
      </div>
    </div>
  );
}
