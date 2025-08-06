"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
  { name: "Microsoft Dynamic 365", href: "/services/microsoft-dynamic-365" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  {
    name: "Web Application Development",
    href: "/services/web-application-development",
  },
  {
    name: "Mobile Application Development",
    href: "/services/mobile-application-development",
  },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Outsourcing", href: "/services/outsourcing" },
];

export default function Navbar() {
  const [isMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={200}
              height={40}
              className="inline-block mr-2"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e31b25]"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e31b25]"
            >
              About
            </Link>

            <Menubar className="bg-transparent border-none shadow-none focus:bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="bg-transparent">Services <ChevronDown /></MenubarTrigger>
                <MenubarContent>
                  {serviceLinks.map((service) => (
                    <>
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50"
                      >
                        <MenubarItem>{service.name}</MenubarItem>
                      </Link>
                      <MenubarSeparator />
                    </>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <Link
              href="/products"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e31b25]"
            >
              Products
            </Link>
            <Link
              href="/contact-us"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e31b25]"
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:block">
            <Link
              href="/hire-an-expert"
              className="bg-[#e31b25] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#c3151e]"
            >
              Hire an expert
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#e31b25] px-3 py-2 text-base font-medium hover:bg-yellow-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-gray-700 hover:text-[#e31b25] px-3 py-2 text-base font-medium hover:bg-yellow-50 rounded-lg"
            >
              About
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-[#e31b25] px-3 py-2 text-base font-medium hover:bg-yellow-50 rounded-lg"
            >
              Products
            </Link>
            <Link
              href="/#contact"
              className="block text-gray-700 hover:text-[#e31b25] px-3 py-2 text-base font-medium hover:bg-yellow-50 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/#contact"
              className="block bg-[#e31b25] text-white px-3 py-2 rounded-lg text-center font-medium shadow-lg"
            >
              Hire an expert
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
