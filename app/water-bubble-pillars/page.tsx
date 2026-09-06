import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customized Water Bubble Pillar Designs | View Products",
  description:
    "Explore cylindrical, square, paired and customized acrylic water bubble pillars with RGB LED lighting for residential and commercial interiors.",
  alternates: { canonical: "/water-bubble-pillars" },
};

const products = [
  {
    id: "classic-cylindrical",
    num: "01",
    image: "/img/cylindrical_pillar.jpg",
    title: "Classic Cylindrical Bubble Pillar",
    desc: "A clean, elegant and highly versatile pillar that fits beautifully into entrances, empty corners, reception areas and decorative displays.",
    options: [
      "Customized height",
      "Clear acrylic construction",
      "RGB LED lighting",
      "Colour-changing modes",
      "Remote or app control options",
      "Decorative artificial fish",
      "Customized top and base finishing",
    ],
    bestFor: "Homes, offices, salons, restaurants, spas and hotel receptions.",
    btnLabel: "Request Price",
    btnMsg: "Classic Cylindrical Bubble Pillar",
  },
  {
    id: "square-pillar",
    num: "02",
    image: "/img/square_pillar_hotel.jpg",
    title: "Square Water Bubble Pillar",
    desc: "A bold architectural design with clean lines, ideal for contemporary interiors and modern commercial spaces.",
    options: [
      "Customized dimensions",
      "Transparent acrylic body",
      "Integrated bubble effect",
      "RGB lighting",
      "Metallic finishing options",
      "Single or paired arrangement",
    ],
    bestFor: "Corporate receptions, showrooms, luxury residences, cafés and retail spaces.",
    btnLabel: "Request Price",
    btnMsg: "Square Water Bubble Pillar",
  },
  {
    id: "pillar-pair",
    num: "03",
    image: "/img/pillar_pair_wedding.jpg",
    title: "Water Bubble Pillar Pair",
    desc: "Two matching pillars create symmetry and make entrances, stages and reception areas appear more premium.",
    options: [
      "Matching dimensions",
      "Synchronized colour theme",
      "Customized bases",
      "Decorative fish options",
      "Entrance or stage placement planning",
    ],
    bestFor: "Wedding venues, hotel entrances, banquet halls, event stages and luxury showrooms.",
    btnLabel: "Discuss Your Project",
    btnMsg: "Water Bubble Pillar Pair",
  },
  {
    id: "multi-pillar",
    num: "04",
    image: "/img/multi_pillar_spa.jpg",
    title: "Multi-Pillar Installation",
    desc: "A group of Water Bubble Pillars can be arranged as an artistic feature, interior divider or statement installation.",
    options: [
      "Different pillar heights",
      "Symmetrical or staggered arrangements",
      "Coordinated lighting",
      "Customized common base",
      "Site-specific design planning",
    ],
    bestFor: "Hotels, malls, commercial lobbies, clubs, restaurants and large event spaces.",
    btnLabel: "Request Custom Design",
    btnMsg: "Multi-Pillar Installation",
  },
  {
    id: "branded-pillar",
    num: "05",
    image: "/img/square_pillar_hotel.jpg",
    title: "Branded Bubble Pillar",
    desc: "Selected pillar designs can incorporate a business name, logo or branding element where technically suitable.",
    options: [
      "Business name or logo integration",
      "Custom colour themes",
      "Premium metallic finishes",
      "Spotlight-ready design",
      "Promotional installation planning",
    ],
    bestFor: "Corporate receptions, exhibitions, restaurants, showrooms and promotional installations.",
    btnLabel: "Ask About Branding",
    btnMsg: "Branded Bubble Pillar",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section
        id="products-header"
        className="relative pt-32 pb-20 section-charcoal overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl" />
        </div>
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
            Our Collection
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            Our Water Bubble Pillar Collection
          </h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/65 text-base mt-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Every Water Bubble Pillar is made according to the project's available space, design preference and lighting requirements.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products-list" className="section-ivory section-padding">
        <div className="container-site flex flex-col gap-20">
          {products.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative h-[420px] rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute top-5 left-5 w-12 h-12 rounded-full bg-[#111820]/80 backdrop-blur-sm flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className="text-[#C2A062] text-lg font-bold"
                    style={{ fontFamily: "BebasNeue, serif" }}
                  >
                    {product.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="heading-serif text-3xl md:text-4xl text-[#111820] mb-4">
                  {product.title}
                </h2>
                <div className="gold-line-left" />
                <p className="text-[#111820]/70 text-base mb-6 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {product.desc}
                </p>

                <div className="mb-5">
                  <h3 className="text-[#111820] font-bold text-sm tracking-wide uppercase mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Available Options
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.options.map((opt) => (
                      <li key={opt} className="flex items-center gap-2 text-[#111820]/70 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062] flex-shrink-0" />
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#C2A062]/8 rounded-lg border border-[#C2A062]/20">
                  <span className="text-[#111820] font-bold text-xs tracking-wide uppercase" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Best Suited For:{" "}
                  </span>
                  <span className="text-[#111820]/70 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {product.bestFor}
                  </span>
                </div>

                <Link
                  href={`https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.btnMsg)}.%20Please%20share%20pricing%20details.`}
                  id={`product-${product.id}-cta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  {product.btnLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section id="products-notice" className="section-charcoal section-padding-sm">
        <div className="container-site text-center max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-[#C2A062]/30 bg-[#C2A062]/5">
            <h2 className="heading-serif text-2xl text-white mb-3">
              Every Project is Customized
            </h2>
            <p className="text-white/65 text-base mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
              Final pricing depends on dimensions, shape, lighting, finishing, installation requirements and delivery location. Share your site photograph and approximate measurements for an accurate quotation.
            </p>
            <Link href="/contact" id="products-notice-quote-btn" className="btn-gold">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
