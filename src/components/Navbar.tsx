"use client";

import React, { JSX, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/../public/logo/logo_red.png";
// import logo from "@/../public/logo/logo_green.png";
// import logo from "@/../public/logo/logo_purple.png";
import { cn } from "@/lib/utils";
import DesktopDropdown from "./Navbar/DesktopDropdown";
import MobileExpandable from "./Navbar/MobileExpandable";
import MobileNavItem from "./Navbar/MobileNavItem";
export type NavLink = {
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
      { label: "Who we are", href: "/#about-us" },
      { label: "Our Clients & Successes", href: "/#our-clients" },
      { label: "Partners & Alliances", href: "/#strategic-partners" },
      { label: "Get in Touch", href: "/contact-us" },
      { label: "Join Our Team", href: "/careers" },
    ],
  },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleScroll = () => setScrolled(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `/#${id}`);
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
          backgroundColor: scrolled ? "var(--background)" : "var(--navbar)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed top-0 left-0 right-0 z-[80] p-4 px-4 py-6 backdrop-blur-xl shadow-sm"
      >
        <div>
          <div className="flex justify-between items-center h-10">
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
                  className="h-auto max-w-[200px] w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div
              className={cn(
                "hidden min-[1222px]:flex text-xl items-center space-x-0 text-background")}
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
            <div className="flex gap-5 items-center max-[1222px]:hidden">
              <ButtonLink
                href="/contact-us?p=hire"
              >
                Engage Our Experts
                <Phone className="ms-2 h-4 w-4" />
              </ButtonLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="min-[1222px]:hidden p-2 rounded-lg hover:bg-background transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
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
                className="min-[1222px]:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2 border-t border-border">
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
      {/* <PageDividerOne
        color={"black"}
        className={cn(
          "w-full z-[60] fixed top-28 left-0 transition-all duration-300 shadow-none",
          scrolled && "opacity-0"
        )}
      /> */}
    </>
  );
}

/* ---------- Helper Components ---------- */
function Separator(): JSX.Element {
  return (
    <span
      className="mx-4 text-muted-foreground select-none font-bold"
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
          ? "text-navbar-foreground hover:text-primary"
          : "text-card-foreground hover:text-primary",
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
          ? "text-navbar-foreground hover:text-primary"
          : "text-card-foreground hover:text-primary",
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
  disabled?: boolean;
};

export function ButtonLink({
  href,
  children,
  className,
  disabled,
  variant = "default",
  mobile = false,
  onClick,
}: ButtonLinkProps): JSX.Element {
  const baseClasses = cn(
    `inline-flex items-center justify-center font-semibold text-base whitespace-nowrap px-4 py-2
     rounded-full transition-all duration-300 ease-in-out transform
     hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
     focus:outline-none focus:ring-8 ring-0 focus:ring-primary/20 max-w-[250px] w-[250px] min-w-[250px]`,
    variant === "default" &&
      `bg-gradient-to-r from-primary via-primary/90 to-secondary
       hover:from-transparent hover:via-transparent hover:to-transparent hover:text-primary hover:border-primary
       text-primary-foreground border border-primary/20 
       hover:shadow-primary/25 shadow-primary/20`,
    variant === "secondary" &&
      `bg-gradient-to-r from-primary/20 via-primary/10 to-primary/10 
       border-2 border-primary
       text-primary-foreground 
       shadow-inner hover:shadow-lg
       backdrop-blur-sm
       hover:from-primary/30 hover:via-primary/20 hover:to-primary/30`,
    variant === "outline" &&
      `bg-transparent border-2 border-primary
       text-card-foreground hover:text-primary
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
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
