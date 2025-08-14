'use client'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, StartupCo',
    content: 'Kenroz transformed our startup vision into a market-ready platform. Their expertise and dedication are unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, FinanceHub',
    content: "The team's technical prowess and ability to deliver on time exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, HealthTech',
    content: 'Working with Kenroz was a game-changer. They understood our needs and delivered a solution that scaled beautifully.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from real clients who&apos;ve experienced the Kenroz difference</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
