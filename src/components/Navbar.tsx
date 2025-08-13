"use client";

import React, { JSX, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/../public/logo.png";
import { cn } from "@/lib/utils";

type MainLink = { label: string; href?: string; sectionId?: string };

// Desktop & Mobile link model (shared)
const MAIN_LINKS: MainLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Tech", href: "/#tech" },
  { label: "Clients", href: "/#clients" },
  { label: "FAQ", href: "/#faq" },
  // Contact scrolls to the page section with id="contact"
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Kenroz - Home">
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-0">
            {MAIN_LINKS.map((item, idx) => (
              <React.Fragment key={item.label}>
                {item.href ? (
                  <NavItem href={item.href} text={item.label} />
                ) : (
                  <NavItem
                    text={item.label}
                    onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                  />
                )}
                {idx !== MAIN_LINKS.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex gap-5 items-center">
            <ButtonLink
              href="/careers"
              className="hidden lg:inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3 border border-solid text-[#df2a33] transition-colors hover:bg-gradient-to-r hover:from-[#df2a33] hover:to-[#9B2730] border-[#df2a33] bg-transparent hover:text-white rounded-full"
            >
              Careers
            </ButtonLink>
            <ButtonLink
              href="/contact-us?p=hire"
              className="hidden lg:inline-flex items-center font-semibold text-sm whitespace-nowrap px-8 py-3 border-[#df2a33] transition-colors bg-gradient-to-r from-[#df2a33] to-[#9B2730] hover:from-[#9B2730] hover:to-[#df2a33] text-white rounded-full"
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
                {MAIN_LINKS.map((item) =>
                  item.href ? (
                    <MobileNavItem
                      key={item.label}
                      href={item.href}
                      text={item.label}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  ) : (
                    <MobileNavItem
                      key={item.label}
                      text={item.label}
                      onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                    />
                  )
                )}
                <div className="pt-2 flex flex-col gap-2">
                  <ButtonLink
                    href="/careers"
                    className="w-full justify-center"
                    mobile
                  >
                    Careers
                  </ButtonLink>
                  <ButtonLink
                    href="/contact-us?p=hire"
                    className="w-full justify-center"
                    mobile
                  >
                    <Phone className="me-2 h-5 w-5" />
                    Contact Our Experts
                  </ButtonLink>
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
    <span className="mx-4 text-gray-300 select-none font-bold" aria-hidden="true">
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

function NavItem({ href, text, onClick, className }: NavItemProps): JSX.Element {
  return href ? (
    <Link
      href={href}
      className={cn(
        "px-1 py-2 text-sm font-semibold text-gray-700 hover:text-[#df2a33] transition-colors duration-200",
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
        "px-1 py-2 text-sm font-semibold text-gray-700 hover:text-[#df2a33] transition-colors duration-200",
        className
      )}
    >
      {text}
    </button>
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
        border-[#df2a33] transition-colors bg-gradient-to-r from-[#df2a33] to-[#9B2730]
        hover:from-[#9B2730] hover:to-[#df2a33] text-white rounded-full
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

function MobileNavItem({ href, text, onClick }: MobileNavItemProps): JSX.Element {
  return href ? (
    <Link
      href={href}
      className="block text-gray-700 hover:text-[#df2a33] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left text-gray-700 hover:text-[#df2a33] hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
    >
      {text}
    </button>
  );
}
