"use client";

import React, { JSX, useCallback, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/../public/logo.png";
import { cn } from "@/lib/utils";

type ServiceLink = { name: string; href: string };

const serviceLinks: ServiceLink[] = [
  { name: "Microsoft Dynamic 365", href: "microsoft-dynamic-365" },
  { name: "Cloud Solutions", href: "cloud-solutions" },
  { name: "Web Application Development", href: "web-application-management" },
  { name: "Mobile Application Development", href: "mobile-application-management" },
  { name: "Digital Marketing", href: "digital-marketing" },
  { name: "Outsourcing", href: "outsourcing" },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <Link
            href="/"
            className="flex items-center "
            aria-label="Kenroz - Home"
          >
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Right-aligned links */}
          <div className="hidden lg:flex items-center space-x-0 ">
            <NavItem href="/#about" text="WHO WE ARE" />
            <Separator />
            <NavItem href="/#about" text="WHAT WE DO" />
            <Separator />
            <DropdownMenu label="WHAT WE SERVE">
              {serviceLinks.map((service) => (
                <DropdownItem
                  key={service.name}
                  label={service.name}
                  href={"/services/" + service.href}
                />
              ))}
            </DropdownMenu>
            <Separator />
            <NavItem href="/products" text="PRODUCTS" />
            <Separator />
            <NavItem
              text="CONTACT"
              onClick={() => scrollToSection("contact")}
            />
            <Separator />
          </div>

          <div className="flex gap-5 items-center">
            <ButtonLink
              href="/contact-us?p=hire"
              className="hidden lg:inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3 border border-solid text-[#e31b25] transition-colors hover:bg-gradient-to-r hover:from-[#e31b25] hover:to-[#7e141c]  border-[#e31b25] bg-transparent  hover:text-white rounded-full"
            >
              Careers
            </ButtonLink>
            <ButtonLink
              href="/contact-us?p=hire"
              className="hidden lg:inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3 border-[#e31b25] transition-colors bg-gradient-to-r from-[#e31b25] to-[#7e141c] hover:from-[#7e141c] hover:to-[#e31b25] text-white rounded-full"
            >
              <Phone className="me-2 h-5 w-5" />
              Contact Our Experts
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#fffde7] transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            type="button"
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
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200/50">
                <MobileNavItem
                  href="/"
                  text="WHO WE ARE"
                  onClick={() => setIsMenuOpen(false)}
                />
                <MobileNavItem
                  text="WHAT WE DO"
                  onClick={() => scrollToSection("about")}
                />
                <MobileNavItem
                  text="WHAT WE SERVE"
                  onClick={() => scrollToSection("services")}
                />
                <MobileNavItem
                  href="/products"
                  text="PRODUCTS"
                  onClick={() => setIsMenuOpen(false)}
                />
                <MobileNavItem
                  text="CONTACT"
                  onClick={() => scrollToSection("contact")}
                />
                <div className="pt-2 flex flex-col gap-2">
                  <HireExperts mobile />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

/* ---------- Helper Components ---------- */

function Separator(): JSX.Element {
  return (
    <span
      className="mx-4 text-gray-300 select-none font-bold"
      aria-hidden="true"
    >
      |
    </span>
  );
}

interface NavItemProps {
  href?: string;
  text: string;
  onClick?: () => void;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
}

function NavItem({
  href,
  text,
  onClick,
  className,
}: NavItemProps): JSX.Element {
  return href ? (
    <Link
      href={href}
      className={cn(
        "px-1 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200",
        className
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-1 py-2 text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200",
        className
      )}
    >
      {text}
    </button>
  );
}

interface DropdownMenuProps {
  label: string;
  children: ReactNode;
}

function DropdownMenu({ label, children }: DropdownMenuProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="relative px-1"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="text-sm font-semibold text-gray-700 hover:text-[#e31b25] transition-colors duration-200 flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label} <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg min-w-[220px] z-10"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

function DropdownItem({ label, href, onClick }: DropdownItemProps): JSX.Element {
  return (
    <div role="none">
      <Link href={href}
        role="menuitem"
        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#fffde7] hover:text-[#e31b25] cursor-pointer transition-colors duration-200"
        onClick={onClick}
      >
        {label}
      </Link>
      <div className="border-t border-gray-100" />
    </div>
  );
}

interface HireExpertsProps {
  mobile?: boolean;
}

function HireExperts({ mobile = false }: HireExpertsProps): JSX.Element {
  return (
    <Link
      href="/contact-us?p=hire"
      className={`inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3 
         border-[#e31b25] transition-colors bg-gradient-to-r from-[#e31b25] to-[#7e141c] hover:from-[#7e141c] hover:to-[#e31b25] text-white rounded-full
        ${mobile ? "w-full justify-center" : ""} transition-all duration-200`}
      role="button"
      aria-label="Contact Our Experts"
    >
      <Phone className="me-2 h-5 w-5" />
      Contact Our Experts
    </Link>
  );
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  mobile?: boolean;
}

export function ButtonLink({
  href,
  children,
  className,
  mobile = false,
}: ButtonLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      role="button"
      className={cn(
        `inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3
        border-[#e31b25] transition-colors bg-gradient-to-r from-[#e31b25] to-[#7e141c] 
        hover:from-[#7e141c] hover:to-[#e31b25] text-white rounded-full
        transition-all duration-200`,
        mobile && "w-full justify-center",
        className
      )}
    >
      {children}
    </Link>
  );
}

interface MobileNavItemProps {
  href?: string;
  text: string;
  onClick?: () => void;
}

function MobileNavItem({
  href,
  text,
  onClick,
}: MobileNavItemProps): JSX.Element {
  return href ? (
    <Link
      href={href}
      className="block text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left text-gray-700 hover:text-[#e31b25] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
    >
      {text}
    </button>
  );
}
