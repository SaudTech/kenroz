'use client'

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated with Kenroz</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest insights on technology trends, development tips, and exclusive updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">No spam, ever. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
