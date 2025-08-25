import { Metadata } from 'next';
import { jobs } from '@/lib/jobs';
import JobApplicationForm from '@/components/careers/JobApplicationForm';

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
  const job = jobSlug ? jobs.find(j => j.slug === jobSlug) : null;

  return (
    <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Apply for {job ? job.title : 'a Position'}</h1>
          <p className="text-gray-900">Fill out the form below and we will get back to you shortly.</p>
        </header>
        <JobApplicationForm job={job?.title} />
      </div>
    </div>
  );
}

