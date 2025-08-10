"use client";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import logo from "@/../public/logo.png";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const quickLinks = ["About Us", "Services", "Portfolio", "Contact", "Blog"];
  const services = [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Integration",
    "Consulting",
  ];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Kenroz Logo"
                width={200}
                height={40}
                className="inline-block mr-2"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm">
              Transforming businesses through innovative technology solutions.
              We create digital experiences that drive growth and deliver
              exceptional results for companies worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#df2a33]" />
                <span className="text-gray-300 text-sm">
                  +91 (810) 624-9040
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#df2a33]" />
                <span className="text-gray-300 text-sm">
                  contact@kenroz.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#df2a33]" />
                <span className="text-gray-300 text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-[#df2a33] transition-colors duration-300 hover:translate-x-1 transform inline-block text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        link.toLowerCase().replace(" ", "")
                      );
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#df2a33] transition-colors duration-300 hover:translate-x-1 transform inline-block text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 mb-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kenroz. All rights reserved. Made
            with ❤️ in Hyderabad
          </p>
          <div className="flex space-x-4">
            {legalLinks.map((legal) => (
              <a
                key={legal}
                href="#"
                className="text-gray-400 hover:text-[#df2a33] transition-colors duration-300 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                {legal}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socials.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-[#9B2730] hover:to-[#df2a33] text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-[#9B2730]"
                onClick={(e) => e.preventDefault()}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-[#9B2730] to-[#df2a33] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-[#9B2730]/50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
