import { Metadata } from 'next';
import { jobs } from '@/lib/jobs';
import JobApplicationForm from '@/components/careers/JobApplicationForm';
import SectionHeading from '@/components/typography/SectionHeading';
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: 'Apply for a Job - Kenroz',
  description: 'Submit your application to join the Kenroz team.',
  alternates: { canonical: '/apply-for-job' },
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
            <div className="p-4 bg-card rounded-lg border border-primary">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-card-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-card-foreground font-medium mb-1">
                    Alternative submission method
                  </p>
                  <p className="text-sm text-card-foreground/80">
                    You can also send your application details directly via email to{" "}
                    <a
                      href="mailto:career@kenroz.com"
                      className="font-semibold underline hover:text-card-foreground"
                    >
                      career@kenroz.com
                    </a>
                    . Please include your resume, cover letter, and contact
                    information.
                  </p>
                </div>
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

