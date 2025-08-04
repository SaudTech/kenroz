import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Newsletter />
      <FAQ />
      <div className="bg-gray-50">
        <ContactForm />
      </div>
    </div>
  );
}
