import { jobs } from '@/lib/jobs';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) {
    return { title: 'Job not found' };
  }
  return {
    title: `${job.title} - Careers at Kenroz`,
    description: job.description,
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/careers" className="text-primary font-semibold mb-6 inline-block">
        ← Back to Careers
      </Link>
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-8">
        {job.department} · {job.location}
      </p>
      <p className="mb-8">{job.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        {job.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        {job.requirements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a
        href="mailto:hr@kenroz.com"
        className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold"
      >
        Apply Now
      </a>
    </div>
  );
}
