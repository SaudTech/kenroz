'use client'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center rounded-2xl text-2xl font-bold mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-3xl shadow-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                Kenroz
              </div>
            </div>
            <p className="text-base text-gray-300 font-medium">Innovative Solutions for Tomorrow</p>
          </div>
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Transform Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-bold mb-4">Innovation Meets Excellence</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through cutting-edge technology solutions. From web development to mobile apps, we craft digital experiences that drive growth and success.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r flex items-center from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border border-blue-500/30 hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
