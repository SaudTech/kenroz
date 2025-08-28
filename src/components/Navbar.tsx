"use client";

import React, { JSX, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/../public/logo.png";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href?: string; // e.g. "/#services"
  sectionId?: string; // e.g. "services"
  links?: NavLink[]; // sub links
};

const MAIN_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/products" },
  {
    label: "Resources",
    links: [
      { label: "Our Story", href: "/#our-story" },
      { label: "Why us", href: "/#why-us" },
      { label: "Our Clients", href: "/#our-clients" },
      { label: "Strategic Partners", href: "/#strategic-partners" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);

  // smooth-scroll helper for in-page ids (e.g., "services")
  const scrollToSection = useCallback((id: string) => {
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    } else {
      // fallback: navigate to hash on home
      window.location.href = `/#${id}`;
      setIsMenuOpen(false);
    }
  }, []);

  // normalize click handling for any item
  const handleNav = useCallback(
    (item: NavLink) => {
      if (item.sectionId) {
        scrollToSection(item.sectionId);
        return;
      }
      if (item.href) {
        // if href has a "#id" part for current page, let Link handle; mobile menu closes on click
        setIsMenuOpen(false);
      }
    },
    [scrollToSection]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 py-6 bg-black backdrop-blur-xl  z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Kenroz - Home"
          >
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={200}
              height={200}
              className="w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex text-xl items-center space-x-0">
            {MAIN_LINKS.map((item, idx) => (
              <React.Fragment key={item.label}>
                {item.links?.length ? (
                  <DesktopDropdown item={item} onNavigate={handleNav} />
                ) : (
                  <NavItem
                    href={item.href}
                    text={item.label}
                    onClick={() => handleNav(item)}
                  />
                )}
                {idx !== MAIN_LINKS.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex gap-5 items-center">
            <ButtonLink href="/careers" variant="outline">
              Careers
            </ButtonLink>
            <ButtonLink
              href="/contact-us?p=hire"
              className="hidden lg:inline-flex items-center font-semibold whitespace-nowrap px-8 py-3 border-primary transition-colors text-white rounded-full"
            >
              Hire an Expert
              <Phone className="ms-2 h-5 w-5" />
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
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200/50">
                {MAIN_LINKS.map((item) =>
                  item.links?.length ? (
                    <MobileExpandable
                      key={item.label}
                      item={item}
                      isOpen={mobileOpenKey === item.label}
                      onToggle={() =>
                        setMobileOpenKey((k) =>
                          k === item.label ? null : item.label
                        )
                      }
                      onLeafClick={(leaf) => {
                        handleNav(leaf);
                      }}
                    />
                  ) : (
                    <MobileNavItem
                      key={item.label}
                      href={item.href}
                      text={item.label}
                      onClick={() => handleNav(item)}
                    />
                  )
                )}
                <div className="pt-2 flex flex-col gap-2">
                  <ButtonLink
                    href="/contact-us?p=hire"
                    className="w-full justify-center"
                    mobile
                  >
                    Hire an Expert
                    <Phone className="ms-2 h-5 w-5" />
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

/* ---------- Desktop Dropdown ---------- */

function DesktopDropdown({
  item,
  onNavigate,
}: {
  item: NavLink;
  onNavigate: (item: NavLink) => void;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="px-1 py-2 font-bold text-md bg-clip-text text-transparent bg-gradient-to-r from-white to-white hover:from-secondary hover:to-primary transition-colors duration-200 inline-flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        {item.label}
        <ChevronDown className="h-4 w-4 text-card-foreground group-hover:text-primary" />
      </button>

      {/* Menu */}
      <div
        className={cn(
          "invisible opacity-0 group-hover:visible group-hover:opacity-100",
          "absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-150"
        )}
        role="menu"
      >
        <ul className="py-2">
          {item.links?.map((child) => {
            const content = (
              <span
                className="block group w-full text-left px-4 py-2.5 text-lg font-semibold hover:bg-black rounded-md"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent">
                  {child.label}
                </span>
              </span>
            );
            return (
              <li key={child.label} role="none">
                {child.href ? (
                  <Link
                    href={child.href}
                    onClick={() => onNavigate(child)}
                    role="menuitem"
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate(child)}
                    role="menuitem"
                    className="w-full"
                  >
                    {content}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Mobile Expandable ---------- */

function MobileExpandable({
  item,
  isOpen,
  onToggle,
  onLeafClick,
}: {
  item: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  onLeafClick: (leaf: NavLink) => void;
}) {
  return (
    <div className="rounded-lg">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left font-bold text-md text-white hover:text-primary hover:bg-[#fffde7] px-4 py-3 text-base rounded-lg transition-all duration-200 min-h-[44px] flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls={`mobile-sub-${item.label}`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            id={`mobile-sub-${item.label}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-2 pr-2"
          >
            {item.links?.map((child) => (
              <li key={child.label} className="mt-1">
                {child.href ? (
                  <Link
                    href={child.href}
                    onClick={() => onLeafClick(child)}
                    className="block text-gray-700 hover:text-primary hover:bg-[#fffde7] px-4 py-2.5 text-base rounded-lg"
                  >
                    {child.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => onLeafClick(child)}
                    className="w-full text-left text-gray-700 hover:text-primary hover:bg-[#fffde7] px-4 py-2.5 text-base rounded-lg"
                  >
                    {child.label}
                  </button>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
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
        "px-1 py-2 text-sm font-bold text-md text-white hover:text-primary transition-colors duration-200",
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
        "px-1 py-2 text-sm font-bold text-md text-white hover:text-primary transition-colors duration-200",
        className
      )}
    >
      {text}
    </button>
  );
}

type ButtonLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
  mobile?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  mobile = false,
  onClick,
}: ButtonLinkProps): JSX.Element {
  const baseClasses = cn(
    // Base styles
    `inline-flex items-center justify-center font-semibold text-lg whitespace-nowrap px-8 py-3
     rounded-full transition-all duration-300 ease-in-out transform
     hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
     focus:outline-none focus:ring-4 focus:ring-primary/20`,

    // Primary variant (default)
    variant === "default" &&
      `bg-gradient-to-r from-primary via-primary/90 to-secondary
       hover:from-transparent hover:via-transparent hover:to-transparent hover:text-primary hover:border-primary
       text-white border border-primary/20 text-lg
       hover:shadow-primary/25 shadow-primary/20 min-w-[235px]`,

    // Secondary variant
    variant === "secondary" &&
      `bg-gradient-to-r from-primary/20 via-primary/10 to-primary/10 
       border-2 border-primary
       text-white 
       shadow-inner hover:shadow-lg
       backdrop-blur-sm
       hover:from-primary/30 hover:via-primary/20 hover:to-primary/30`,

    // Outline variant
    variant === "outline" &&
      `bg-transparent border-2 border-primary
       text-white hover:text-primary
       shadow-none hover:shadow-lg hover:shadow-primary/25`,

    // Mobile full width
    mobile && "w-full",

    // Custom className override
    className
  );

  if (href) {
    return (
      <Link href={href} role="button" className={baseClasses}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
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
      className="block text-white hover:text-primary hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left text-white hover:text-primary hover:bg-[#fffde7] px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
    >
      {text}
    </button>
  );
}
