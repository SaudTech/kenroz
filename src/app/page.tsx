import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Products />
      <Newsletter />
      <FAQ />
      <div className="bg-gray-50">
        <ContactForm />
      </div>
    </div>
  );
}
