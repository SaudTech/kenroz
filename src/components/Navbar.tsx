"use client";

import React, { JSX, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/../public/logo.png";
import { cn } from "@/lib/utils";
import PageDividerOne from "./pageDividers/PageDividerOne";

type NavLink = {
  label: string;
  href?: string;
  sectionId?: string;
  links?: NavLink[];
};

const MAIN_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#services" },
  { label: "Tools & Products", href: "/products" },
  {
    label: "Insights",
    links: [
      { label: "About Us", href: "/#about-us" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "Our Clients", href: "/#our-clients" },
      { label: "Strategic Partners", href: "/#strategic-partners" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
      setIsMenuOpen(false);
    }
  }, []);

  const handleNav = useCallback(
    (item: NavLink) => {
      if (item.sectionId) {
        scrollToSection(item.sectionId);
        return;
      }
      if (item.href) {
        setIsMenuOpen(false);
      }
    },
    [scrollToSection]
  );

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "white" : "black",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed top-0 left-0 right-0 z-[120] p-4 py-6 backdrop-blur-xl shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              aria-label="Kenroz - Home"
            >
              <motion.div
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={logo}
                  alt="Kenroz Logo"
                  width={200}
                  height={200}
                  className="w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div
              className={cn(
                "hidden lg:flex text-xl items-center space-x-0",
                scrolled ? "text-black" : "text-white"
              )}
            >
              {MAIN_LINKS.map((item, idx) => (
                <React.Fragment key={item.label}>
                  {item.links?.length ? (
                    <DesktopDropdown
                      item={item}
                      onNavigate={handleNav}
                      scrolled={scrolled}
                    />
                  ) : (
                    <NavItem
                      href={item.href}
                      text={item.label}
                      onClick={() => handleNav(item)}
                      scrolled={scrolled}
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
                variant="outline"
                className={cn(scrolled ? "text-black" : "text-white")}
              >
                Careers
              </ButtonLink>
              <ButtonLink
                href="/contact-us?p=hire"
                className="hidden lg:inline-flex items-center font-semibold whitespace-nowrap px-8 py-3 border-primary transition-colors text-white rounded-full"
              >
                Engage Our Experts
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
                      Engage Our Experts
                      <Phone className="ms-2 h-5 w-5" />
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <PageDividerOne
        color={"black"}
        className={cn(
          "w-full z-[60] fixed top-28 left-0 transition-all duration-300 shadow-none",
          scrolled && "opacity-0"
        )}
      />
    </>
  );
}

/* ---------- Desktop Dropdown ---------- */
function DesktopDropdown({
  item,
  onNavigate,
  scrolled,
}: {
  item: NavLink;
  onNavigate: (item: NavLink) => void;
  scrolled: boolean;
}) {
  return (
    <div className="relative group z-[9999]">
      <button
        type="button"
        className={cn(
          "px-1 py-2 font-bold text-md transition-colors duration-200 inline-flex items-center gap-1",
          scrolled
            ? "text-black hover:text-primary"
            : "bg-clip-text text-transparent bg-gradient-to-r from-white to-white hover:from-secondary hover:to-primary"
        )}
        aria-haspopup="menu"
        aria-expanded="false"
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 group-hover:text-primary", scrolled ? "text-black" : "text-card-foreground")} />
      </button>

      <div
        className={cn(
          "invisible opacity-0 z-[9999] group-hover:visible group-hover:opacity-100",
          "absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-150"
        )}
        role="menu"
      >
        <ul className="py-2">
          {item.links?.map((child) => {
            const content = (
              <span className="block group w-full text-left px-4 py-2.5 text-lg font-semibold hover:bg-black rounded-md">
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
  scrolled?: boolean;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
}

function NavItem({
  href,
  text,
  onClick,
  scrolled,
  className,
}: NavItemProps): JSX.Element {
  return href ? (
    <Link
      href={href}
      className={cn(
        "px-1 py-2 text-sm font-bold text-md transition-colors duration-200",
        scrolled
          ? "text-black hover:text-primary"
          : "text-white hover:text-primary",
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
        "px-1 py-2 text-sm font-bold text-md transition-colors duration-200",
        scrolled
          ? "text-black hover:text-primary"
          : "text-white hover:text-primary",
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
    `inline-flex items-center justify-center font-semibold text-lg whitespace-nowrap px-8 py-3
     rounded-full transition-all duration-300 ease-in-out transform
     hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
     focus:outline-none focus:ring-8 ring-0 focus:ring-primary/20`,
    variant === "default" &&
      `bg-gradient-to-r from-primary via-primary/90 to-secondary
       hover:from-transparent hover:via-transparent hover:to-transparent hover:text-primary hover:border-primary
       text-white border border-primary/20 text-lg
       hover:shadow-primary/25 shadow-primary/20 min-w-[235px]`,
    variant === "secondary" &&
      `bg-gradient-to-r from-primary/20 via-primary/10 to-primary/10 
       border-2 border-primary
       text-white 
       shadow-inner hover:shadow-lg
       backdrop-blur-sm
       hover:from-primary/30 hover:via-primary/20 hover:to-primary/30`,
    variant === "outline" &&
      `bg-transparent border-2 border-primary
       text-white hover:text-primary
       shadow-none hover:shadow-lg hover:shadow-primary/25`,
    mobile && "w-full",
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
