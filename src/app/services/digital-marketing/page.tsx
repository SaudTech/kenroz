/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Digital Marketing' }

export default function DigitalMarketingPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Digital Marketing</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Reach your audience with targeted digital marketing strategies.</p>
        <p>Data-driven campaigns amplify brand visibility and engagement.</p>
        <p>We optimize content and channels to maximize conversions.</p>
        <p>Continuous analysis turns insights into lasting growth.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Digital Marketing" className="w-full h-auto rounded-lg" />
    </section>
  )
}
