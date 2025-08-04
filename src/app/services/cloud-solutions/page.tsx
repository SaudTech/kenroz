/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Cloud Solutions' }

export default function CloudSolutionsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Cloud Solutions</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Scale your infrastructure with secure and reliable cloud services.</p>
        <p>We design architectures that grow with your business demands.</p>
        <p>Migration strategies minimize downtime and maximize resilience.</p>
        <p>Ongoing optimization keeps costs predictable and performance high.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Cloud Solutions" className="w-full h-auto rounded-lg" />
    </section>
  )
}
