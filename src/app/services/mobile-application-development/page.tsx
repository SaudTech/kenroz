/* eslint-disable @next/next/no-img-element */
export const metadata = { title: 'Mobile Application Development' }

export default function MobileApplicationDevelopmentPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Mobile Application Development</h1>
      <div className="space-y-4 text-lg text-gray-700 mb-8">
        <p>Create engaging mobile apps for Android and iOS platforms.</p>
        <p>We craft intuitive interfaces that keep users coming back.</p>
        <p>Cross-platform solutions reduce maintenance overhead.</p>
        <p>Analytics integration helps you refine features over time.</p>
      </div>
      <img src="https://via.placeholder.com/800x400" alt="Mobile Application Development" className="w-full h-auto rounded-lg" />
    </section>
  )
}
