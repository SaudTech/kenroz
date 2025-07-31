import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import Newsletter from '@/components/sections/Newsletter'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-yellow-500 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  )
}
