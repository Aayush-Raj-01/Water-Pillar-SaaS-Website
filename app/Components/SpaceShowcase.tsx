"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SpaceProject {
  id: string;
  category: "all" | "residential" | "hospitality" | "dining" | "corporate" | "events";
  badge: string;
  location: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  desc: string;
  specs: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

const spaceProjects: SpaceProject[] = [
  {
    id: "residential",
    category: "residential",
    badge: "Private Estate",
    location: "Worli Penthouse • Mumbai",
    title: "Penthouses, Villas & Luxury Living Rooms",
    subtitle: "Calming Movement & Ambient Evening Illumination",
    image: "/img/penthouse_dining_pillar.jpg",
    alt: "Water bubble pillar installed in high-rise penthouse dining and living room",
    desc: "Transform double-height foyers, living spaces, and stairwell voids into serene architectural sanctuaries. The gentle rhythmic movement of rising bubbles provides a soothing acoustic buffer against busy urban environments.",
    specs: ["8ft to 14ft Custom Ceiling Fit", "Whisper-Quiet < 22dB Pump", "Zero-Evaporation Sealed Top"],
    ctaLabel: "Consult for Residential",
    whatsappMessage: "Hello Water Bubble Pillar, I am interested in a custom installation for a Luxury Villa / Penthouse.",
  },
  {
    id: "hospitality",
    category: "hospitality",
    badge: "5-Star Hospitality",
    location: "5-Star Hotel Lobby • Navi Mumbai",
    title: "Hotel Lobbies, Concierges & Atriums",
    subtitle: "Monolithic Geometry for Grand Arrival Portals",
    image: "/img/square_pillar_hotel.jpg",
    alt: "Square water bubble pillar monolith at luxury hotel reception concierge",
    desc: "Make an indelible first impression on arriving guests. Ideal for framing concierge desks, elevator banks, and central atriums with continuous kinetic light and commercial-grade structural presence.",
    specs: ["Heavy-Duty Cast Acrylic", "DMX-512 Lighting Synchronization", "Turnkey Pan-India Installation"],
    ctaLabel: "Consult for Hospitality",
    whatsappMessage: "Hello Water Bubble Pillar, I am interested in a custom installation for a Hotel / Resort lobby.",
  },
  {
    id: "dining",
    category: "dining",
    badge: "Fine Dining & Bars",
    location: "Luxury Atrium Lounge • New Delhi",
    title: "Cocktail Lounges, Fine Dining & Cafés",
    subtitle: "Illuminated VIP Spatial Dividers",
    image: "/img/grand_atrium_cluster.jpg",
    alt: "Water bubble installation in high-end dining and cocktail lounge",
    desc: "Create high-end table division and moody cocktail atmospheres. Customers naturally gravitate towards moving water elements, creating an irresistible backdrop for guest photographs.",
    specs: ["Diurnal Amber-to-Cyan Shifts", "Spatial VIP Acoustic Divider", "Safe 12V Concealed Wiring"],
    ctaLabel: "Enquire for Dining",
    whatsappMessage: "Hello Water Bubble Pillar, I am interested in custom bubble pillars for a Restaurant / Lounge.",
  },
  {
    id: "corporate",
    category: "corporate",
    badge: "Corporate HQ",
    location: "Tech Park Boardroom • Bengaluru",
    title: "Executive Suites & Boardrooms",
    subtitle: "Biophilic Kinetic Focus for Workplaces",
    image: "/img/boardroom_water_pillar.jpg",
    alt: "Twin water bubble pillars in executive corporate boardroom",
    desc: "Incorporate biophilic architectural design into executive boardrooms and client welcome centers. Moving water elements reduce executive cognitive fatigue and enhance creative focus.",
    specs: ["Biophilic Stress Reduction", "Mirror Chrome / Obsidian Pedestal", "Smart App & Wall Control"],
    ctaLabel: "Enquire for Corporate",
    whatsappMessage: "Hello Water Bubble Pillar, I am interested in custom bubble features for a Corporate HQ / Boardroom.",
  },
  {
    id: "events",
    category: "events",
    badge: "Weddings & Galas",
    location: "Palace Ballroom • Mumbai",
    title: "Event Stages & Royal Entrance Portals",
    subtitle: "Symmetrical Majesty for High-Profile Celebrations",
    image: "/img/pillar_pair_wedding.jpg",
    alt: "Matching bubble pillar pair framing royal wedding and banquet stage",
    desc: "Harmonized twin bubble columns creating magnificent entrance statements and royal stage backdrops for weddings, gala dinners, and milestone celebrations.",
    specs: ["Dual Synchronized RGB Channels", "Cinematic 4K Optical Refraction", "Modular Stage-Ready Bases"],
    ctaLabel: "Enquire for Events",
    whatsappMessage: "Hello Water Bubble Pillar, I am interested in symmetrical pillar pairs for Weddings / Event Venues.",
  },
];

export default function SpaceShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Environments (5)" },
    { id: "residential", label: "Villas & Penthouses" },
    { id: "hospitality", label: "Hotels & Resorts" },
    { id: "dining", label: "Fine Dining & Bars" },
    { id: "corporate", label: "Corporate HQs" },
    { id: "events", label: "Weddings & Galas" },
  ] as const;

  const displayedProjects =
    activeFilter === "all"
      ? spaceProjects
      : spaceProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="architectural-spaces" className="pt-10 sm:pt-14 pb-16 sm:pb-20 section-ivory relative overflow-hidden">
      {/* Soft ambient lighting glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C2A062]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site max-w-[1360px] mx-auto relative z-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
            <span className="w-8 h-px bg-[#C2A062]" />
            <p
              className="text-[#C2A062] text-xs uppercase tracking-[0.25em] font-bold text-center"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Bespoke Environments
            </p>
            <span className="w-8 h-px bg-[#C2A062]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111820] leading-tight mb-4 text-center w-full"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Engineered for <span className="italic font-normal">Extraordinary</span> Spaces
          </h2>

          <p
            className="text-[#111820]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Discover how Water Bubble Pillars elevate residences, world-class hotels, dining lounges, and corporate atriums across India.
          </p>

          <div
            className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto mt-5"
            style={{ margin: "20px auto 0 auto" }}
          />
        </div>

        {/* ── 2. SECTOR FILTER PILLS ── */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 px-2 sm:px-0 mx-auto max-w-4xl text-center">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#111820] text-[#C2A062] border border-[#C2A062] shadow-[0_4px_16px_rgba(17,24,32,0.18)]"
                    : "bg-white/85 text-[#111820]/70 hover:bg-white hover:text-[#111820] border border-[#111820]/10 hover:border-[#C2A062]/40 shadow-sm"
                }`}
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── 3. EDITORIAL SPATIAL MONOGRAPH GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 justify-center">
          {displayedProjects.map((project, index) => {
            // Asymmetrical editorial sizing when in "all" view, or centered when filtered
            const isFullFilter = activeFilter !== "all";
            const colSpan = isFullFilter
              ? "lg:col-span-8 lg:col-start-3"
              : index === 0
              ? "lg:col-span-7"
              : index === 1
              ? "lg:col-span-5"
              : "lg:col-span-4";

            const imageHeight =
              isFullFilter
                ? "h-72 sm:h-80"
                : index === 0 || index === 1
                ? "h-72 sm:h-96"
                : "h-64 sm:h-72";

            return (
              <div
                key={project.id}
                className={`${colSpan} group rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD3] hover:border-[#C2A062] shadow-[0_4px_25px_rgba(17,24,32,0.04)] hover:shadow-[0_20px_45px_rgba(194,160,98,0.18)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col overflow-hidden`}
              >
                {/* Visual Viewport */}
                <div className={`relative ${imageHeight} w-full overflow-hidden bg-[#111820]`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Ambient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#0B111A]/85 backdrop-blur-md border border-white/15 text-white shadow-sm inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062] animate-pulse" />
                      <span>{project.location}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md border border-[#C2A062]/40 text-[#A8885A] shadow-sm">
                      {project.badge}
                    </span>
                  </div>

                  {/* Bottom Subtitle Ribbon */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 z-10 pointer-events-none">
                    <p className="text-white/90 text-xs sm:text-[13px] font-medium leading-snug drop-shadow-md">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3
                      className="text-2xl sm:text-[26px] font-bold text-[#111820] group-hover:text-[#A8885A] transition-colors leading-snug mb-2.5"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-[#111820]/65 text-[13.5px] leading-relaxed mb-5 line-clamp-3"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {project.desc}
                    </p>

                    {/* Architectural Specifications Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.specs.map((spec, si) => (
                        <span
                          key={si}
                          className="text-[11px] font-semibold text-[#111820]/80 bg-[#F6F3EC] border border-[#E5DFD5]/70 px-2.5 py-1 rounded-md"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-4 border-t border-[#F0EBE1]">
                    <Link
                      href={`https://wa.me/919834123136?text=${encodeURIComponent(project.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full h-11.5 px-4 rounded-xl bg-[#111820] hover:bg-[#C2A062] text-[#F7F4EE] hover:text-[#0B111A] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-[#C2A062]/40 hover:border-[#C2A062] shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(194,160,98,0.35)] transition-all duration-300 cursor-pointer select-none overflow-hidden"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      <span className="whitespace-nowrap">{project.ctaLabel}</span>
                      <svg
                        viewBox="0 0 16 16"
                        className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. ARCHITECTURAL CONSULTATION BANNER ── */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-[#E2DDD3] bg-white/90 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(17,24,32,0.04)]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#C2A062]/15 border border-[#C2A062]/30 flex items-center justify-center text-[#C2A062] shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div>
              <h4
                className="text-lg sm:text-xl font-bold text-[#111820]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Planning a Custom Architectural Feature for Your Space?
              </h4>
              <p
                className="text-xs sm:text-sm text-[#111820]/65"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Share your architectural floor plans or site photographs with our engineering team for customized 3D dimensions and illumination planning.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              id="spaces-calc-cta"
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-[#F4EFE6] hover:bg-[#EBE4D8] text-[#111820] border border-[#E0D7C7] text-xs font-bold tracking-wider uppercase transition-colors text-center"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Request Quote
            </Link>
            <a
              href="tel:+919834123136"
              id="spaces-call-cta"
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-[#C2A062] hover:bg-[#D4B57A] text-[#080C14] text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md text-center"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Call: +91 98341 23136
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
