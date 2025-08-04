/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Outsourcing' }

export default function OutsourcingPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Outsourcing</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Extend your team with our skilled outsourcing professionals.</p>
        <p>Flexible engagement models fit short and long-term projects.</p>
        <p>Dedicated experts integrate seamlessly with your workflows.</p>
        <p>Cost-effective delivery lets you focus on core business goals.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Outsourcing" className="w-full h-auto rounded-lg" />
    </section>
  )
}
