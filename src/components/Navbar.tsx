'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "@/../public/logo.png"
import Image from 'next/image'

const sections = ['home', 'about', 'services', 'portfolio', 'contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
              {/* Kenroz */}
              <Image 
                src={logo}
                alt="Kenroz Logo"
                width={200}
                height={40}
                className="inline-block mr-2"
              />
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg relative group ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg bg-blue-600 text-white shadow-lg">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-blue-50 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
