/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Web Application Development' }

export default function WebApplicationDevelopmentPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Web Application Development</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Build responsive web applications tailored to your goals.</p>
        <p>Modern frameworks deliver fast and accessible experiences.</p>
        <p>Our agile approach accelerates delivery without sacrificing quality.</p>
        <p>Robust testing ensures your app performs across all devices.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Web Application Development" className="w-full h-auto rounded-lg" />
    </section>
  )
}
