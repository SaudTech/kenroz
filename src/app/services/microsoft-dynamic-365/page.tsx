/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Microsoft Dynamic 365' }

export default function MicrosoftDynamic365Page() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Microsoft Dynamic 365</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Our Microsoft Dynamic 365 experts connect your CRM and ERP capabilities.</p>
        <p>The platform streamlines operations across sales, service, and finance.</p>
        <p>Custom configurations let the system adapt to unique business processes.</p>
        <p>Gain real-time insights with integrated analytics and dashboards.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Microsoft Dynamic 365" className="w-full h-auto rounded-lg" />
    </section>
  )
}
