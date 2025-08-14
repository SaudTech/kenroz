import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Kenroz',
  description: 'Join the Kenroz team and help build innovative technology solutions.',
};

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-black bg-clip-text text-transparent">
            Careers
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We&apos;re always looking for passionate people to join our growing team. If you love creating
            impactful digital experiences, Kenroz is the place for you.
          </p>
        </header>

        <section className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold mb-2">Junior Frontend Developer, React</h2>
            <p className="text-gray-700 mb-4">
              <strong>Experience:</strong> No minimum experience required
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Requirements:</strong> Solid knowledge of React and at least two personal projects showcasing your skills.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Positions Open:</strong> Multiple
            </p>
            <p className="text-gray-700">
              To apply, send your resume and project links to <a href="mailto:hr@kenroz.com" className="text-primary font-semibold">hr@kenroz.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
