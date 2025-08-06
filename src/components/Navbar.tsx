"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/../public/logo.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const serviceLinks = [
  { name: "Microsoft Dynamic 365", href: "#services" },
  { name: "Cloud Solutions", href: "#services" },
  { name: "Web Application Development", href: "#services" },
  { name: "Mobile Application Development", href: "#services" },
  { name: "Digital Marketing", href: "#services" },
  { name: "Outsourcing", href: "#services" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200"
            >
              About
            </button>

            <Menubar className="bg-transparent border-none shadow-none">
              <MenubarMenu>
                <MenubarTrigger className="bg-transparent hover:bg-[#fffde7] px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200 flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
                  {serviceLinks.map((service, index) => (
                    <div key={service.name}>
                      <MenubarItem 
                        className="px-4 py-3 text-sm text-gray-700 hover:bg-[#fffde7] hover:text-[#e31b25] cursor-pointer transition-colors duration-200"
                        onClick={() => scrollToSection('services')}
                      >
                        {service.name}
                      </MenubarItem>
                      {index < serviceLinks.length - 1 && <MenubarSeparator />}
                    </div>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Link
              href={"/products"}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200"
            >
              Products
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#e31b25] to-[#7e141c] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#fffde7] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200/50">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="w-full text-left text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                >
                  Contact
                </button>
                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-[#e31b25] to-[#7e141c] text-white px-4 py-3 rounded-lg text-center font-semibold shadow-lg min-h-[44px] transition-all duration-300 hover:shadow-xl"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
