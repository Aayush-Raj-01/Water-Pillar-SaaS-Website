"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export type PhotoSize = "tall" | "wide" | "featured" | "square";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: "residential" | "hospitality" | "commercial" | "events";
  size: PhotoSize;
}

const categories = [
  { id: "all", label: "All Photos" },
  { id: "residential", label: "Villas & Residences" },
  { id: "hospitality", label: "Hotels & Atriums" },
  { id: "commercial", label: "Offices & Showrooms" },
  { id: "events", label: "Weddings & Banquets" },
];

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-grand-atrium",
    src: "/img/grand_atrium_cluster.jpg",
    alt: "3-tier staggered water bubble column cluster",
    category: "hospitality",
    size: "featured",
  },
  {
    id: "photo-villa-staircase",
    src: "/img/luxury_villa_staircase.jpg",
    alt: "Grand spiral staircase tall water bubble column",
    category: "residential",
    size: "tall",
  },
  {
    id: "photo-penthouse-dining",
    src: "/img/penthouse_dining_pillar.jpg",
    alt: "High-rise penthouse dining room water column divider",
    category: "residential",
    size: "wide",
  },
  {
    id: "photo-boardroom-twins",
    src: "/img/boardroom_water_pillar.jpg",
    alt: "Executive boardroom illuminated twin water pillars",
    category: "commercial",
    size: "square",
  },
  {
    id: "photo-hotel-reception",
    src: "/img/square_pillar_hotel.jpg",
    alt: "Square water bubble pillar at hotel reception desk",
    category: "hospitality",
    size: "square",
  },
  {
    id: "photo-wedding-stage",
    src: "/img/pillar_pair_wedding.jpg",
    alt: "Illuminated stage water pillar pair for wedding",
    category: "events",
    size: "wide",
  },
  {
    id: "photo-living-room",
    src: "/img/home_living_room.jpg",
    alt: "Contemporary living room corner water bubble column",
    category: "residential",
    size: "tall",
  },
  {
    id: "photo-multi-spa",
    src: "/img/multi_pillar_spa.jpg",
    alt: "Multi-pillar water bubble installation in wellness spa",
    category: "hospitality",
    size: "wide",
  },
  {
    id: "photo-macro-acrylic",
    src: "/img/bubble_closeup_rgb.jpg",
    alt: "German optical cast acrylic macro aeration detail",
    category: "commercial",
    size: "square",
  },
  {
    id: "photo-cylindrical-pillar",
    src: "/img/cylindrical_pillar.jpg",
    alt: "Cylindrical water bubble pillar in design studio",
    category: "commercial",
    size: "tall",
  },
  {
    id: "photo-cobalt-lounge",
    src: "/img/user_project_1.jpg",
    alt: "Cobalt blue illuminated water pillar in private lounge",
    category: "residential",
    size: "tall",
  },
  {
    id: "photo-banquet-gold",
    src: "/img/user_project_2.jpg",
    alt: "Twin celebration bubble columns with gold pedestal",
    category: "events",
    size: "square",
  },
  {
    id: "photo-warm-amber-foyer",
    src: "/img/user_project_3.jpg",
    alt: "Warm amber ambient water bubble pillar in luxury apartment",
    category: "residential",
    size: "square",
  },
  {
    id: "photo-showroom-monolith",
    src: "/img/user_project_4.jpg",
    alt: "Flagship automotive showroom water column monolith",
    category: "commercial",
    size: "wide",
  },
  {
    id: "photo-event-multi-color",
    src: "/img/user_project_5.jpg",
    alt: "Multi-color celebration water bubble pillar at evening banquet",
    category: "events",
    size: "square",
  },
  {
    id: "photo-penthouse-feature",
    src: "/img/heroSection_img.png",
    alt: "Sky penthouse floor-to-ceiling water bubble pillar statement",
    category: "residential",
    size: "wide",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredPhotos.length - 1 : prev - 1) : null
    );
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === filteredPhotos.length - 1 ? 0 : prev + 1) : null
    );
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Lock body scroll during lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <section id="gallery-header" className="relative pt-32 pb-14 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#36B7C9] blur-3xl" />
        </div>

        <div className="relative container-site text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#C2A062]" />
            <p
              className="text-[#C2A062] text-xs tracking-[0.28em] uppercase font-bold"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Visual Portfolio
            </p>
            <span className="w-8 h-px bg-[#C2A062]" />
          </div>

          <h1
            className="heading-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Installation Gallery
          </h1>

          <div className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto mb-4" />

          <p
            className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            A visual showcase of customized acrylic Water Bubble Pillars across residential,
            hospitality, and commercial spaces.
          </p>
        </div>
      </section>

      {/* ── MINIMAL CATEGORY FILTER BAR ───────────────────────────────────── */}
      <section className="bg-[#0B1017] border-y border-white/10 sticky top-[72px] z-30 shadow-md">
        <div className="container-site py-3.5 px-4 flex justify-center">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? galleryPhotos.length
                  : galleryPhotos.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#C2A062] text-[#080C14] shadow-[0_0_15px_rgba(194,160,98,0.35)]"
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#080C14]/25 text-[#080C14]" : "bg-white/10 text-white/50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHOTO ONLY MOSAIC GRID (NO TEXT, NO DETAILS) ───────────────────── */}
      <section className="section-charcoal py-12 sm:py-16 min-h-[700px]">
        <div className="container-site px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px]">
            {filteredPhotos.map((photo, index) => {
              // Asymmetric Bento photo proportions:
              // Tall columns span 2 rows, wide features span 2 columns, grand cluster spans 2x2
              let spanClasses = "col-span-1 row-span-1";
              if (photo.size === "featured") {
                spanClasses = "md:col-span-2 md:row-span-2";
              } else if (photo.size === "tall") {
                spanClasses = "col-span-1 md:row-span-2";
              } else if (photo.size === "wide") {
                spanClasses = "md:col-span-2 row-span-1";
              }

              return (
                <div
                  key={photo.id}
                  id={`gallery-photo-${index + 1}`}
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxIndex(index);
                    }
                  }}
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C2A062] bg-[#0E1520] transition-colors duration-300 transform-gpu ${spanClasses}`}
                >
                  {/* High Resolution Photo */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu will-change-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Subtle hover darkening to bring out the zoom icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                  {/* Subtle centered gold zoom lens indicator on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-[#C2A062]/60 text-[#C2A062] flex items-center justify-center shadow-xl">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                        <path d="M9 10h2v-2h1v2h2v1h-2v2h-1v-2H9z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PURE PHOTO LIGHTBOX MODAL ─────────────────────────────────────── */}
      {currentPhoto && (
        <div
          id="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between z-30 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs text-white/80 font-mono pointer-events-auto">
              Photo {(lightboxIndex ?? 0) + 1} of {filteredPhotos.length}
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close modal"
              className="w-10 h-10 rounded-full bg-black/70 hover:bg-[#C2A062] text-white hover:text-[#080C14] border border-white/20 transition-all flex items-center justify-center text-sm font-bold pointer-events-auto shadow-xl"
            >
              ✕
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C2A062] text-white hover:text-[#080C14] border border-white/20 transition-all items-center justify-center z-30 shadow-xl text-lg font-bold"
          >
            ←
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C2A062] text-white hover:text-[#080C14] border border-white/20 transition-all items-center justify-center z-30 shadow-xl text-lg font-bold"
          >
            →
          </button>

          {/* Pure Full-Screen Photo Container */}
          <div className="relative w-full max-w-5xl h-[80vh] sm:h-[85vh] flex flex-col items-center justify-center z-20">
            <div className="relative w-full h-full">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            {/* Floating Bottom WhatsApp Enquire Button */}
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20saw%20this%20design%20in%20your%20gallery%20and%20would%20like%20a%20quotation%20for%20my%20space."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-6 py-3 flex items-center gap-2 shadow-xl"
              >
                <span>Enquire About This Design on WhatsApp</span>
                <span>→</span>
              </Link>

              <div className="flex sm:hidden gap-2">
                <button
                  onClick={handlePrev}
                  className="px-3 py-2.5 rounded-xl bg-white/10 text-white text-xs border border-white/15"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-2.5 rounded-xl bg-white/10 text-white text-xs border border-white/15"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM CONVERSION CTA ─────────────────────────────────────────── */}
      <section className="section-ivory py-16 sm:py-20 text-center border-t border-black/5">
        <div className="container-site max-w-3xl mx-auto px-4">
          <p
            className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Custom Architecture
          </p>
          <h2
            className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-[#111820] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Have a Specific Space or Ceiling Height?
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p
            className="text-[#111820]/70 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Send our workshop your ceiling height, floor plan, or site photographs.
            We custom-manufacture acrylic bubble pillars up to 15ft with turnkey installation all over India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              id="gallery-bottom-quote-btn"
              className="btn-gold text-xs px-8 py-4 w-full sm:w-auto"
            >
              Discuss Custom Dimensions
            </Link>
            <Link
              href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20to%20consult%20for%20my%20site."
              target="_blank"
              rel="noopener noreferrer"
              id="gallery-bottom-wa-btn"
              className="px-8 py-4 rounded-xl bg-[#111820] hover:bg-[#1A2330] text-white border border-[#C2A062]/40 text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Consult on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
