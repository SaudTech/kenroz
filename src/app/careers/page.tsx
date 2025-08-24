import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import JobList from '@/components/careers/JobList';

export const metadata: Metadata = {
  title: 'Careers at Kenroz',
  description: 'Join the Kenroz team and help build innovative technology solutions.',
};

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/photo-1521898284481-a5ec348cb555.avif"
          alt="Kenroz team"
          fill
          className="object-cover -z-10" />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container mx-auto px-4 py-32 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Build the future with us. We craft impactful digital experiences for clients across the globe.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Work With Us</h2>
        <ul className="grid gap-6 md:grid-cols-3 text-gray-700">
          <li className="p-6 bg-white rounded-xl shadow">Remote flexibility</li>
          <li className="p-6 bg-white rounded-xl shadow">Health insurance</li>
          <li className="p-6 bg-white rounded-xl shadow">Learning budget</li>
        </ul>
        <div className="mt-12 text-center">
          <blockquote className="text-xl italic">
            “Working at Kenroz has been a growth experience. The team is supportive and innovative.”
          </blockquote>
          <p className="mt-2 font-semibold">— Jane, Developer</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
          <JobList />
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Diversity & Inclusion</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          We celebrate diversity and are committed to creating an inclusive environment for all employees.
        </p>
      </section>

      {/* Application CTA */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
        <Link href="mailto:hr@kenroz.com" className="bg-white text-primary px-6 py-3 rounded-md font-semibold">
          Apply Now
        </Link>
      </section>
    </div>
  );
}
