"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface DropdownItem {
  name: string;
  href: string;
}

const productDropdownItems: DropdownItem[] = [
  { name: "All Water Bubble Pillars", href: "/water-bubble-pillars" },
  { name: "Classic Cylindrical Pillar", href: "/water-bubble-pillars#classic-cylindrical" },
  { name: "Square Monolith Pillar", href: "/water-bubble-pillars#square-pillar" },
  { name: "Symmetrical Pillar Pair", href: "/water-bubble-pillars#pillar-pair" },
  { name: "Multi-Pillar Cluster", href: "/water-bubble-pillars#multi-pillar" },
];

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Water Bubble Pillars", href: "/water-bubble-pillars" },
  { label: "Customization", href: "/customization" },
  { label: "Applications", href: "/applications" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Scroll detection to stick to the top flush on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key closes mobile menu & dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── 1. NAVBAR (BIG AT TOP & STICKS TO CEILING ON SCROLL) ─── */}
      <header
        id="site-navbar"
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${
          scrolled ? "top-0 px-0" : "top-3 sm:top-5 px-3 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`transition-all duration-300 flex items-center justify-between pointer-events-auto ${
            scrolled
              ? "w-full max-w-full rounded-none bg-[#070B11]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.85)] py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12"
              : "w-full max-w-7xl mx-auto rounded-2xl sm:rounded-full bg-[#080C14]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.65)] py-3 sm:py-4 pl-4 sm:pl-8 pr-4 sm:pr-8"
          }`}
        >
          {/* Brand Logo with transparent luxury branding */}
          <Link
            href="/"
            id="nav-brand-logo"
            className="flex items-center group select-none shrink-0"
            aria-label="Water Bubble Pillar Home"
          >
            <div className="relative h-10 sm:h-11 md:h-12 w-[185px] sm:w-[210px] md:w-[230px]">
              <Image
                src="/logo-horizontal.png"
                alt="Water Bubble Pillar Logo"
                fill
                priority
                className="object-contain object-left transition-transform duration-300 group-hover:scale-103"
                sizes="(max-width: 640px) 185px, 230px"
              />
            </div>
          </Link>

          {/* ─── DESKTOP NAVIGATION LINKS (Centered & Spacious) ─── */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0"
            aria-label="Desktop Navigation"
          >
            <Link
              href="/"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                  pathname.startsWith("/water-bubble-pillars") || dropdownOpen
                    ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                    : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                }`}
                style={{ fontFamily: "'Manrope', sans-serif" }}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Pillars & Models</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-[#C2A062]" : "text-white/60"
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Clean Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-2 px-1.5 rounded-2xl bg-[#0B111A] border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                  {productDropdownItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 rounded-xl text-[14.5px] font-medium whitespace-nowrap transition-colors ${
                        index === 0
                          ? "text-[#C2A062] font-semibold border-b border-white/[0.08] mb-1 pb-2.5"
                          : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                      }`}
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/customization"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/customization"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Customization
            </Link>

            <Link
              href="/applications"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/applications"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Applications
            </Link>

            <Link
              href="/gallery"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/gallery"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Gallery
            </Link>

            <Link
              href="/about-us"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/about-us"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-3 xl:px-4 py-2 rounded-full text-[14px] xl:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all ${
                pathname === "/contact"
                  ? "text-[#C2A062] bg-[#C2A062]/10 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/[0.06]"
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Contact
            </Link>
          </nav>

          {/* ─── DESKTOP RIGHT CTA + PREMIER HAMBURGER TRIGGER ─── */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Get Quote CTA (Desktop / Tablet >= 768px) */}
            <Link
              href="/contact"
              id="navbar-get-quote-btn"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#C2A062] hover:bg-[#D4B57A] text-[#080C14] font-bold text-xs sm:text-[13px] uppercase tracking-[0.14em] whitespace-nowrap shadow-[0_4px_16px_rgba(194,160,98,0.3)] hover:shadow-[0_6px_22px_rgba(194,160,98,0.45)] active:scale-95 transition-all cursor-pointer select-none group"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>Get Quote</span>
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4l4 4-4 4" />
              </svg>
            </Link>

            {/* ─── PREMIER GOLD LUXURY HAMBURGER BUTTON ─── */}
            <button
              id="nav-hamburger-toggle"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A062] active:scale-95 select-none ${
                mobileOpen
                  ? "bg-[#C2A062]/20 border-2 border-[#C2A062] text-[#C2A062] shadow-[0_0_24px_rgba(194,160,98,0.4)]"
                  : "bg-[#0C121D]/90 hover:bg-[#131C2C] border-2 border-[#C2A062]/50 hover:border-[#C2A062] text-[#C2A062] shadow-[0_0_18px_rgba(194,160,98,0.2)]"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              {/* Premier Gold 24px Bars */}
              <div className="w-6 h-4.5 relative flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 origin-center bg-[#C2A062] ${
                    mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-6 rounded-full bg-[#C2A062] transition-all duration-200 ${
                    mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 origin-center bg-[#C2A062] ${
                    mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── 2. PREMIER MINIMALIST MOBILE DRAWER (NO CALL CARD, NO EXTRA TEXT) ─── */}
      <div
        id="mobile-nav-menu"
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Deep Obsidian Smoked Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />

        {/* Premier Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-[420px] max-w-full bg-[#070B12] border-l border-[#C2A062]/20 shadow-2xl flex flex-col transition-transform duration-300 ease-out z-10 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Subtle Ambient Gold Glow in Background */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C2A062]/06 blur-3xl pointer-events-none" />

          {/* Top Header: Logo on Left, Premier Gold Close '✕' on Right */}
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#070B12]/80 backdrop-blur-md relative z-10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center group"
            >
              <div className="relative h-10 w-[185px]">
                <Image
                  src="/logo-horizontal.png"
                  alt="Water Bubble Pillar Logo"
                  fill
                  className="object-contain object-left"
                  sizes="185px"
                />
              </div>
            </Link>

            {/* Premier Gold Close '✕' Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-11 h-11 rounded-xl bg-[#C2A062]/10 hover:bg-[#C2A062]/20 active:bg-[#C2A062]/30 border border-[#C2A062]/40 text-[#C2A062] hover:text-[#D4B57A] flex items-center justify-center transition-all cursor-pointer focus:outline-none shadow-[0_0_15px_rgba(194,160,98,0.15)]"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Content: Pure Navigation List (No Call Box, No Extraneous Text) */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col justify-between relative z-10">
            {/* Itemized Navigation with Clean Gold Chevrons & Dividers */}
            <nav aria-label="Mobile Navigation" className="divide-y divide-white/[0.08]">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-4.5 transition-colors group ${
                      active
                        ? "text-[#C2A062] font-semibold"
                        : "text-white/90 hover:text-[#D4B57A]"
                    }`}
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    <span className="text-[17.5px] font-medium tracking-wide">
                      {item.label}
                    </span>
                    {/* Premier Gold Right Chevron '>' */}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-none stroke-current stroke-2 text-[#C2A062]/70 group-hover:text-[#D4B57A] group-hover:translate-x-1.5 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Section: Premier Full-Width Action Button */}
            <div className="pt-6 pb-6">
              <Link
                href="/contact"
                id="mobile-drawer-get-quote-btn"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-center gap-2.5 w-full h-14 rounded-2xl bg-[#C2A062] hover:bg-[#D4B57A] active:scale-[0.98] text-[#080C14] font-bold text-sm tracking-[0.14em] uppercase shadow-[0_6px_25px_rgba(194,160,98,0.35)] transition-all cursor-pointer select-none"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                <span>Get a Free Quote</span>
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
