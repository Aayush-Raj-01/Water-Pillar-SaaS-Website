import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Bubble Pillars for Homes, Hotels, Offices and Events",
  description:
    "Discover Water Bubble Pillar applications for homes, hotels, restaurants, offices, showrooms, salons, spas, weddings and commercial spaces.",
  alternates: { canonical: "/applications" },
};

const applications = [
  {
    id: "app-homes",
    title: "Homes and Villas",
    desc: "Create a relaxing visual feature in a living room, entrance, staircase area, dining space or unused corner.",
    image: "/img/home_living_room.jpg",
  },
  {
    id: "app-hotels",
    title: "Hotels and Resorts",
    desc: "Make reception areas, entrances and lobbies more memorable with customized illuminated bubble pillars.",
    image: "/img/square_pillar_hotel.jpg",
  },
  {
    id: "app-restaurants",
    title: "Restaurants and Cafés",
    desc: "Add movement and ambient lighting to dining areas, waiting spaces, counters and decorative partitions.",
    image: "/img/multi_pillar_spa.jpg",
  },
  {
    id: "app-offices",
    title: "Offices and Receptions",
    desc: "Create a professional yet distinctive focal point for visitors, employees and clients.",
    image: "/img/square_pillar_hotel.jpg",
  },
  {
    id: "app-salons",
    title: "Salons and Spas",
    desc: "Use soft bubbles and controlled lighting to create a relaxing and premium atmosphere.",
    image: "/img/multi_pillar_spa.jpg",
  },
  {
    id: "app-showrooms",
    title: "Showrooms and Retail Spaces",
    desc: "Draw customer attention to entrances, product displays and branded areas.",
    image: "/img/cylindrical_pillar.jpg",
  },
  {
    id: "app-weddings",
    title: "Weddings and Events",
    desc: "Use coordinated Water Bubble Pillars beside stages, entryways, photo areas and reception counters.",
    image: "/img/pillar_pair_wedding.jpg",
  },
  {
    id: "app-clinics",
    title: "Clinics and Wellness Centres",
    desc: "Introduce a calming decorative element into waiting areas, therapy spaces and wellness interiors.",
    image: "/img/multi_pillar_spa.jpg",
  },
  {
    id: "app-banquet",
    title: "Banquet Halls",
    desc: "Enhance large entrances, stages and corridors with paired or multi-pillar installations.",
    image: "/img/pillar_pair_wedding.jpg",
  },
  {
    id: "app-custom",
    title: "Custom Interior Projects",
    desc: "Interior designers and architects can work with our team to develop project-specific pillar arrangements.",
    image: "/img/cylindrical_pillar.jpg",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Header */}
      <section id="applications-header" className="relative pt-32 pb-20 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#36B7C9] blur-3xl" />
        </div>
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
            Where We Install
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            One Feature, Many Possibilities
          </h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/65 text-base mt-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Water Bubble Pillars can be customized for virtually any residential or commercial interior space.
          </p>
        </div>
      </section>

      {/* Application Cards */}
      <section id="applications-grid" className="section-ivory section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <article key={app.id} id={app.id} className="card-premium group overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="heading-serif text-xl text-[#111820] mb-2">{app.title}</h2>
                  <p className="text-[#111820]/65 text-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {app.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-[#111820] rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="heading-serif text-3xl text-white mb-4">
                Planning an Interior Project?
              </h2>
              <p className="text-white/65 text-base mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                Our team works with interior designers, architects and property owners to develop project-specific Water Bubble Pillar arrangements.
              </p>
              <Link
                href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project."
                id="applications-discuss-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Discuss an Interior Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
