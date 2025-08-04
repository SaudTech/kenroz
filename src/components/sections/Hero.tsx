"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#e31b25]/10  to-[#7e141c]/10 text-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#e31b25]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7e141c]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-2/4">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-3xl font-bold text-white leading-tight">
              Web Application Development / Cloud Solutions / Microsoft Dynamic
              365 / Digital Marketing
            </h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              A Healthy Mix Of Innovation, Dedication & Hardwork. It is a
              well-established team of Web designers, Web developers, Digital
              Marketing strategists and Business Growth Experts. ABLION Provides
              Web Design, Software Development, Digital Marketing, Website
              development and mobile app development services in Burdwan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r flex items-center from-[#7e141c] to-[#e31b25] hover:from-[#7e141c]/90 hover:to-[#e31b25]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group border border-[#7e141c]/30 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="border-2 border-gray-600 hover:border-[#e31b25] text-gray-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-[#e31b25]/10 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
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
  );
}
