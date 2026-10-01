import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waterbubblepillar.com";

export const metadata: Metadata = {
  title: "About Us | Water Bubble Pillar Manufacturers & Turnkey Installers",
  description:
    "Learn about Water Bubble Pillar by Water Bubble Wall — leading Indian manufacturers of bespoke acrylic water bubble pillars, RGB columns, and architectural water features.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | Water Bubble Pillar by Water Bubble Wall",
    description:
      "Crafting customized acrylic bubble pillars and providing turnkey delivery and installation across all states in India.",
    url: "/about-us",
    type: "website",
    images: [
      {
        url: "/img/luxury_villa_staircase.jpg",
        width: 1200,
        height: 896,
        alt: "Water Bubble Pillar craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Water Bubble Pillar",
    description:
      "Leading Indian manufacturers of bespoke acrylic water bubble pillars and architectural water features.",
    images: ["/img/luxury_villa_staircase.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${baseUrl}/about-us`,
    },
  ],
};

const approach = [
  "Customized project planning",
  "Quality acrylic materials",
  "Clean and elegant finishing",
  "Reliable bubble and lighting systems",
  "Secure delivery",
  "Professional installation",
  "Clear operating guidance",
  "Responsive customer support",
];

const clients = [
  "Homeowners",
  "Interior designers",
  "Architects",
  "Hotels and restaurants",
  "Corporate offices",
  "Retail showrooms",
  "Salons and spas",
  "Event planners",
  "Wedding decorators",
  "Commercial developers",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="about-header" className="relative pt-32 pb-24 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#36B7C9] blur-3xl" />
        </div>
        <div className="relative container-site max-w-3xl mx-auto text-center">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold">
            Our Story
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            About Water Bubble Pillar
          </h1>
          <div className="gold-line mx-auto" />
        </div>
      </section>

      <section id="about-story" className="section-ivory section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[#111820]/75 text-lg leading-relaxed mb-5">
              Water Bubble Pillar is a specialized platform by <strong>Water Bubble Wall</strong>, created to help homeowners, architects, interior designers and businesses discover customized decorative bubble pillar solutions.
            </p>
            <p className="text-[#111820]/65 text-base leading-relaxed mb-5">
              We design and manufacture acrylic Water Bubble Pillars that combine transparent surfaces, continuously rising bubbles and LED lighting to create memorable interior features.
            </p>
            <p className="text-[#111820]/65 text-base leading-relaxed">
              Every project begins with understanding the available space and the client&apos;s expectations. The shape, size, finish and lighting are then planned to complement the surrounding interior.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div id="about-approach" className="lg:col-span-2 bg-white rounded-2xl p-8 border border-[#111820]/8 shadow-sm">
              <h2 className="heading-serif text-3xl text-[#111820] mb-4">Our Approach</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/65 text-sm mb-6">
                We focus on delivering a complete, quality experience from concept to installation:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#111820]/70 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#C2A062]/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="about-locations" className="bg-[#111820] rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-white/10 shadow-lg">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2A062]/15 border border-[#C2A062]/30 text-[#C2A062] text-[11px] font-bold uppercase tracking-wider mb-3">
                  <span>🇮🇳</span>
                  <span>Pan-India Presence</span>
                </div>
                <h2 className="heading-serif text-2xl sm:text-3xl text-white mb-2">All Over India</h2>
                <div className="w-12 h-0.5 bg-[#C2A062] mb-4" />
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  We fabricate, deliver, and arrange professional on-site installation for residential and commercial projects across all states and union territories in India.
                </p>

                <div className="flex flex-col gap-3 mb-6 text-left">
                  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/5 rounded-xl p-3">
                    <span className="text-base shrink-0 mt-0.5">📍</span>
                    <div>
                      <h4 className="text-white text-xs font-bold">All Major Metros & Cities</h4>
                      <p className="text-white/50 text-[11px] mt-0.5">Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad & across India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/5 rounded-xl p-3">
                    <span className="text-base shrink-0 mt-0.5">🚚</span>
                    <div>
                      <h4 className="text-white text-xs font-bold">Insured Pan-India Transit</h4>
                      <p className="text-white/50 text-[11px] mt-0.5">Specialized custom wooden crating with zero-damage doorstep shipping guarantee</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/5 rounded-xl p-3">
                    <span className="text-base shrink-0 mt-0.5">🛠️</span>
                    <div>
                      <h4 className="text-white text-xs font-bold">On-Site Engineering Crew</h4>
                      <p className="text-white/50 text-[11px] mt-0.5">Our specialized technical team visits your site for assembly, testing, and illumination calibration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#C2A062] hover:bg-[#D4B57A] text-[#080C14] text-xs font-bold tracking-wider uppercase transition-all shadow-md"
                >
                  Request Installation in Your City →
                </Link>
              </div>
            </div>
          </div>

          <div id="about-clients" className="mt-12 bg-white rounded-2xl p-8 border border-[#111820]/8 shadow-sm">
            <h2 className="heading-serif text-3xl text-[#111820] mb-4 text-center">Who We Work With</h2>
            <div className="gold-line mx-auto mb-6" />
            <div className="flex flex-wrap gap-3 justify-center">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-5 py-2 rounded-full border border-[#C2A062]/30 bg-[#C2A062]/6 text-[#111820] text-sm font-semibold"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div id="about-goal" className="mt-12 text-center bg-[#111820] rounded-2xl p-10 max-w-2xl mx-auto">
            <h2 className="heading-serif text-3xl text-white mb-4">Our Goal</h2>
            <div className="gold-line mx-auto" />
            <p className="text-white/70 text-base mt-4 mb-7 leading-relaxed">
              Our goal is to turn ordinary spaces into visually engaging environments through thoughtfully designed Water Bubble Pillars.
            </p>
            <Link href="/contact" id="about-start-project-btn" className="btn-gold">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
