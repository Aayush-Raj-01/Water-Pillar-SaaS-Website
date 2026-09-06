import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InteractiveBubbleCanvas from "./Components/InteractiveBubbleCanvas";
import ProductShowcaseSection from "./Components/ProductShowcaseSection";
import SpaceShowcase from "./Components/SpaceShowcase";

export const metadata: Metadata = {
  title: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
  description:
    "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events. Pan-India installation.",
  alternates: { canonical: "/" },
};

const whyChooseItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Customized Dimensions",
    desc: "Each project can be planned according to the height, width and available installation area.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Premium Clear Acrylic",
    desc: "Our pillars are made using high-quality transparent acrylic for a clean and elegant appearance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "RGB LED Lighting",
    desc: "Create different moods with colour-changing lighting and multiple illumination modes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Remote or App Control",
    desc: "Selected designs can be provided with convenient remote or app-based lighting control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Premium Side Finishes",
    desc: "Choose from golden, silver, rose-gold or other suitable finishes based on your interior.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Pan-India Installation",
    desc: "We manufacture, deliver and arrange professional installation for projects across India.",
  },
];

const applications = [
  "Luxury homes and villas",
  "Hotel entrances and lobbies",
  "Restaurants, cafés and lounges",
  "Office receptions",
  "Salons and spas",
  "Showrooms and retail stores",
  "Banquet halls and wedding venues",
  "Clinics and wellness spaces",
  "Exhibition and event setups",
  "Interior partitions and decorative corners",
];

const customizationFeatures = [
  {
    num: "01",
    title: "Dimensions & Spatial Fit",
    subtitle: "Engineered to Millimeter Accuracy",
    desc: "From slender 200mm foyer columns up to monumental 600mm monoliths, customized to exact floor-to-ceiling heights from 6ft to 15ft.",
    specs: ["Heights: 6ft to 15ft+", "Diameter: 200–600mm", "Cylindrical or Square"],
  },
  {
    num: "02",
    title: "Cast Acrylic & Hydro-Acoustics",
    subtitle: "German Optical Cast Acrylic",
    desc: "Crystal-clear optical transparency with 99.2% light transmission, sealed hermetic top caps, and ultra-quiet <22dB diaphragm pumps.",
    specs: ["100% Cast Acrylic", "Whisper-Quiet <22dB", "Zero-Evaporation Seal"],
  },
  {
    num: "03",
    title: "Dynamic Lighting & DMX Sync",
    subtitle: "Synchronized Spectrum Controls",
    desc: "RGBW LED illumination with pre-programmed diurnal shifts (daylight white to evening amber) controlled via smartphone app, RF remote, or building DMX.",
    specs: ["RGBW 16M Colors", "Scheduled Scenes", "DMX-512 & App Sync"],
  },
  {
    num: "04",
    title: "Atelier Pedestals & Metal Finishes",
    subtitle: "Architectural Base Hardware",
    desc: "Precision CNC-machined metal base and top finishes tailored to your interior fixtures: brushed champagne gold, mirror chrome, rose gold, or matte obsidian.",
    specs: ["Champagne Gold", "Mirror Chrome", "Matte Obsidian / Brass"],
  },
];

const steps = [
  { num: "01", title: "Share Your Requirements", desc: "Send us the available dimensions, site photograph, location and preferred design." },
  { num: "02", title: "Design Consultation", desc: "Our team recommends the most suitable pillar shape, size, finish and lighting arrangement." },
  { num: "03", title: "Quotation and Confirmation", desc: "You receive a project quotation based on the selected dimensions and customization." },
  { num: "04", title: "Manufacturing", desc: "The Water Bubble Pillar is carefully manufactured and prepared according to the approved requirements." },
  { num: "05", title: "Delivery and Installation", desc: "The product is securely delivered and professionally installed at the project location." },
  { num: "06", title: "Usage Guidance", desc: "Our team explains the basic operation, water care and lighting controls after installation." },
];

const galleryImages = [
  { src: "/img/luxury_villa_staircase.jpg",  caption: "Grand Spiral Staircase Foyer Feature — Luxury Villa", category: "Villa Staircase", location: "Mumbai" },
  { src: "/img/penthouse_dining_pillar.jpg", caption: "High-Rise Penthouse Dining Room — Warm Amber Illumination", category: "Penthouse", location: "New Delhi" },
  { src: "/img/grand_atrium_cluster.jpg",    caption: "3-Tier Staggered Cluster — 5-Star Hotel Grand Atrium", category: "Hotel Atrium", location: "Navi Mumbai" },
  { src: "/img/boardroom_water_pillar.jpg",  caption: "Executive Boardroom Twin Pillars — Cyan & Emerald LED", category: "Corporate HQ", location: "Bengaluru" },
  { src: "/img/square_pillar_hotel.jpg",     caption: "RGB Water Bubble Pillar at Luxury Hotel Reception Desk", category: "Reception", location: "Navi Mumbai" },
  { src: "/img/pillar_pair_wedding.jpg",     caption: "Matching Bubble Pillar Pair for Wedding & Banquet Stage", category: "Wedding Stage", location: "Mumbai" },
  { src: "/img/home_living_room.jpg",        caption: "Customized Bubble Pillar for Contemporary Living Room", category: "Living Room", location: "New Delhi" },
  { src: "/img/multi_pillar_spa.jpg",        caption: "Multi-Pillar Installation for Luxury Spa & Wellness Interior", category: "Spa & Wellness", location: "New Delhi" },
  { src: "/img/bubble_closeup_rgb.jpg",      caption: "Optical Clarity Macro Detail — Rising Bubbles & RGB Spectrum", category: "Craftsmanship", location: "Nashik" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/img/heroSection_img.png"
          alt="Water Bubble Pillar installed in a luxury home with blue RGB lighting"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111820]/80 via-[#111820]/45 to-[#111820]/95" />

        {/* Interactive Rising Bubbles Canvas Engine */}
        <InteractiveBubbleCanvas />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14">

          {/* Main heading */}
          <h1
            className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-medium leading-[1.12] sm:leading-[1.05] tracking-tight mb-5 sm:mb-7 max-w-4xl mx-auto"
            style={{ animation: "fade-in-up 0.8s ease-out 0.1s both", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Transform Your Space<br />
            <span className="font-light italic text-white/90">With A Bespoke</span><br />
            <span className="text-gradient-gold font-semibold tracking-normal">Water Bubble Pillar</span>
          </h1>

          {/* Sub text */}
          <p
            className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4 sm:px-0"
            style={{ animation: "fade-in-up 0.8s ease-out 0.25s both", fontFamily: "'Manrope', sans-serif" }}
          >
            Infuse dynamic light, hypnotic rising bubbles, and whisper-silent elegance into your architecture. Customized for luxury residences, 5-star hotels, fine dining lounges, and flagship corporate spaces.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
            style={{ animation: "fade-in-up 0.8s ease-out 0.4s both" }}
          >
            <Link
              href="/gallery"
              id="hero-gallery-btn"
              className="group relative w-full sm:w-auto min-w-[210px] h-12 sm:h-13 px-8 rounded-xl bg-gradient-to-r from-[#C2A062] via-[#D4B57A] to-[#C2A062] bg-[length:200%_auto] hover:bg-right text-[#070B11] font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase shadow-[0_4px_20px_rgba(194,160,98,0.35)] hover:shadow-[0_6px_30px_rgba(194,160,98,0.55)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden select-none cursor-pointer"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              <span>View Our Projects</span>
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20to%20consult%20for%20a%20customized%20Water%20Bubble%20Pillar."
              id="hero-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto min-w-[210px] h-12 sm:h-13 px-7 rounded-xl bg-[#080D16]/80 hover:bg-[#080D16] backdrop-blur-md text-white border border-[#C2A062]/40 hover:border-[#C2A062] font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 select-none cursor-pointer"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Studio</span>
            </Link>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
          style={{ animation: "fade-in 1s ease-out 0.8s both" }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "Manrope, sans-serif" }}>Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#C2A062] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────── */}
      <section id="introduction" className="section-ivory section-padding glow-gold-bg">
        <div className="container-site">
          {/* Centered Section Header */}
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p
                className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                About Our Product
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>

            <h2
              className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-[#111820] leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              More Than Decoration—<span className="italic font-normal">A Captivating Interior Feature</span>
            </h2>

            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
              style={{ margin: "16px auto 0 auto" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-[#C2A062]/20">
              <Image
                src="/img/home_living_room.jpg"
                alt="Water bubble pillar installed in a luxury home interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111820]/80 text-lg sm:text-xl font-light leading-relaxed mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                A Water Bubble Pillar combines crystal-clear cast acrylic, continuously rising whisper-aeration bubbles and synchronized spectrum illumination to establish an arresting architectural focal point.
              </p>
              <p className="text-[#111820]/70 text-base leading-relaxed mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                Every pillar is calculated and manufactured around your space, interior aesthetic, and desired finish. Whether you require a commanding monolithic pillar, a symmetrical pair for grand foyer entrances, or a multi-column cluster, our engineering atelier brings your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/water-bubble-pillars" id="intro-explore-btn" className="btn-gold">
                  Explore Water Bubble Pillars
                </Link>
                <Link href="/customization" className="px-6 py-3.5 rounded-lg border border-[#111820]/20 hover:border-[#C2A062] text-[#111820] text-xs font-bold uppercase tracking-wider transition-all" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Custom Specs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section id="why-choose-us" className="section-charcoal section-padding">
        <div className="container-site">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
                Our Strengths
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>
            <h2
              className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-white leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Designed Around Your Space
            </h2>
            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
              style={{ margin: "16px auto 0 auto" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, i) => (
              <div
                key={i}
                id={`why-card-${i + 1}`}
                className="p-7 rounded-xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-[#C2A062]/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#C2A062]/15 flex items-center justify-center text-[#C2A062] mb-5 group-hover:bg-[#C2A062]/25 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE (REMODELED ARCHITECTURAL COLLECTION) ── */}
      <ProductShowcaseSection />

      {/* ── APPLICATIONS ─────────────────────────────── */}
      <section id="applications" className="section-charcoal section-padding">
        <div className="container-site">
          {/* Centered Section Header */}
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p
                className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Where They Work
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>

            <h2
              className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-white leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Perfect for Residential & Commercial Interiors
            </h2>

            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
              style={{ margin: "16px auto 0 auto" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1">
              <Image
                src="/img/multi_pillar_spa.jpg"
                alt="Water bubble pillar in a spa and commercial setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-white/85 text-lg leading-relaxed mb-6 font-light" style={{ fontFamily: "Manrope, sans-serif" }}>
                Water Bubble Pillars create an unforgettable visual and acoustic aura across diverse contemporary environments:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {applications.map((app) => (
                  <li key={app} className="flex items-center gap-3 text-white/80 text-sm font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>
                    <span className="w-2 h-2 rounded-full bg-[#C2A062] shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/applications" id="applications-view-btn" className="btn-gold">
                  View Applications
                </Link>
                <Link href="/contact" className="px-6 py-3.5 rounded-lg border border-white/20 hover:border-[#C2A062] text-white text-xs font-bold uppercase tracking-wider transition-all" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Request Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE ARCHITECTURAL SPACES SHOWCASE ── */}
      <SpaceShowcase />

      {/* ── ARCHITECTURAL CUSTOMIZATION SUITE ─────────── */}
      <section id="customization-home" className="section-ivory section-padding relative overflow-hidden">
        <div className="container-site">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p
                className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Tailored Craftsmanship
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#111820] leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Made to Match Your Architecture
            </h2>
            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto mb-4"
              style={{ margin: "0 auto 16px auto" }}
            />
            <p className="text-[#111820]/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
              Every water bubble pillar is fabricated on-demand to integrate seamlessly into your spatial proportions, structural ceiling heights, and lighting palette.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customizationFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-[#E2DDD3] hover:border-[#C2A062] shadow-[0_4px_24px_rgba(17,24,32,0.04)] hover:shadow-[0_16px_36px_rgba(194,160,98,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-3xl font-bold text-[#C2A062]/40 group-hover:text-[#C2A062] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {feat.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F7F4EE] border border-[#E8E1D5] text-[#916E36]">
                      Atelier
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#111820] mb-1.5 group-hover:text-[#A8885A] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-[#8C6D37] text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {feat.subtitle}
                  </p>
                  <p className="text-[#111820]/65 text-[13px] leading-relaxed mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE1] space-y-1.5">
                  {feat.specs.map((s, si) => (
                    <div key={si} className="flex items-center gap-2 text-xs text-[#111820]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062] shrink-0" />
                      <span className="font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              id="customization-discuss-btn"
              className="btn-gold text-xs px-8 py-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Discuss Custom Fabrication
            </Link>
            <Link
              href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20to%20discuss%20custom%20fabrication%20options."
              target="_blank"
              rel="noopener noreferrer"
              id="customization-wa-btn"
              className="px-7 py-3.5 rounded-xl bg-[#111820] hover:bg-[#1B2430] text-white border border-[#C2A062]/40 text-xs font-bold uppercase tracking-wider transition-all"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section id="how-it-works" className="bg-[#0B1017] text-white py-10 sm:py-14 relative overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#36B7C9]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C2A062]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-site relative z-10">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
                Our Process
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>
            <h2
              className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-white leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              From Your Idea to Final Installation
            </h2>
            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
              style={{ margin: "16px auto 0 auto" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                id={`step-${step.num}`}
                className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#C2A062]/50 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-4xl sm:text-5xl font-bold text-[#C2A062] group-hover:scale-105 transition-transform inline-block"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[#C2A062] group-hover:border-[#C2A062]/40 transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Step 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2.5 group-hover:text-[#D4B57A] transition-colors" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-[#C2A062]/80 transition-colors">
                  <span className="font-medium tracking-wider uppercase text-[11px]" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Milestone 0{i + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062]/40 group-hover:bg-[#C2A062] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────── */}
      <section id="gallery-preview" className="section-white pt-10 sm:pt-12 pb-4 sm:pb-5">
        <div className="container-site">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
              <span className="w-8 h-px bg-[#C2A062]" />
              <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
                Project Gallery
              </p>
              <span className="w-8 h-px bg-[#C2A062]" />
            </div>
            <h2
              className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-[#111820] leading-tight mb-4 text-center w-full"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              See Our Work in Real Spaces
            </h2>
            <div
              className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
              style={{ margin: "16px auto 0 auto" }}
            />
            <p className="text-[#111820]/70 max-w-2xl mx-auto mt-4 text-base sm:text-lg text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
              Explore customized Water Bubble Pillars installed in homes, hotels, offices, restaurants, events and commercial interiors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                href="/gallery"
                id={`gallery-preview-${i + 1}`}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-black/10 hover:border-[#C2A062] transition-transform duration-300 ease-out hover:-translate-y-1.5 transform-gpu will-change-transform bg-[#0E1520] ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                style={{ minHeight: i === 0 ? "420px" : "240px" }}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  loading="lazy"
                  quality={80}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu will-change-transform"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/90 via-[#080C14]/20 to-transparent group-hover:from-[#080C14]/95 transition-all duration-300" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-[#111820]/80 backdrop-blur-md text-[#C2A062] text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                    {img.category}
                  </span>
                </div>

                {/* Bottom caption overlay - single container */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col justify-end bg-gradient-to-t from-[#080C14] via-[#080C14]/75 to-transparent pt-10">
                  <p className="text-white text-xs sm:text-sm font-semibold leading-snug group-hover:text-[#F7F4EE] transition-colors" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {img.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-5 sm:mt-6">
            <Link href="/gallery" id="gallery-preview-view-all-btn" className="btn-gold text-sm px-8 py-3.5">
              Explore Full Gallery (16+ Projects)
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section id="final-cta" className="section-charcoal py-10 sm:py-14 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#36B7C9] blur-3xl" />
        </div>

        <div className="relative container-site flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
            <span className="w-8 h-px bg-[#C2A062]" />
            <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
              Start Your Project
            </p>
            <span className="w-8 h-px bg-[#C2A062]" />
          </div>
          <h2
            className="heading-serif text-4xl sm:text-5xl lg:text-[52px] text-white leading-tight mb-4 text-center w-full"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Have a Space in Mind?
          </h2>
          <div
            className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
            style={{ margin: "16px auto 20px auto" }}
          />
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto text-center mb-8 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
            Send us a photograph and approximate dimensions of your space. Our team will help you select the most suitable Water Bubble Pillar design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/contact" id="final-cta-quote-btn" className="btn-gold text-base px-8 py-4">
              Discuss Custom Project
            </Link>
            <Link
              href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20a%20quote%20for%20a%20customized%20Water%20Bubble%20Pillar."
              id="final-cta-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-4"
            >
              Chat on WhatsApp
            </Link>
          </div>

          <p className="text-white/40 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
            Serving clients all over India with turnkey delivery and professional on-site installation across all states.
          </p>
        </div>
      </section>
    </>
  );
}
