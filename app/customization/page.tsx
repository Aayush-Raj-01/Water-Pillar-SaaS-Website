import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customize Your Water Bubble Pillar | Sizes, Lights and Finishes",
  description:
    "Customize the size, shape, RGB lighting, metallic finish, artificial fish and arrangement of your Water Bubble Pillar.",
  alternates: { canonical: "/customization" },
};

const sections = [
  {
    id: "size",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Size and Height",
    desc: "The pillar dimensions can be planned according to the available area and visual proportion of the interior.",
    note: "Maximum size is subject to design feasibility, transportation and site conditions.",
    items: [],
  },
  {
    id: "shape",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.125A1.125 1.125 0 013.375 16.5m0 0h17.25m0 0a1.125 1.125 0 011.125 1.125M20.625 16.5h-1.5C18.504 16.5 18 17.004 18 17.625m3.75-.125v1.125A1.125 1.125 0 0120.625 19.5m0-15h-17.25m17.25 0a1.125 1.125 0 011.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75-.125v1.125A1.125 1.125 0 0120.625 7.5m0 0h-17.25m0 0A1.125 1.125 0 003.375 6.375M3.375 7.5h1.5C5.496 7.5 6 6.996 6 6.375m-3.75.125v-1.125A1.125 1.125 0 013.375 4.5" />
      </svg>
    ),
    title: "Shape",
    desc: "Choose from a range of shapes to match your interior concept:",
    note: "",
    items: ["Cylindrical pillar", "Square pillar", "Rectangular feature", "Paired pillars", "Multi-pillar arrangement", "Customized installation"],
  },
  {
    id: "lighting",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Lighting",
    desc: "Available lighting options may include:",
    note: "",
    items: ["RGB colour-changing lights", "Single-colour lighting", "Smooth colour transitions", "Different lighting modes", "Remote control", "App control on selected configurations"],
  },
  {
    id: "finishing",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Finishing",
    desc: "The top, bottom or side areas can be finished to complement your interior. Popular choices include:",
    note: "",
    items: ["Golden finish", "Silver finish", "Rose-gold finish", "Black finish", "White finish", "Customized finish based on project requirements"],
  },
  {
    id: "decorative",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Decorative Elements",
    desc: "Depending on the selected design, decorative elements may include:",
    note: "",
    items: ["Artificial fish", "Decorative bubbles", "Logo or branding", "Customized base", "Coordinated surrounding décor"],
  },
];

const whatToSend = [
  "Site photograph",
  "Available height and width",
  "Installation city",
  "Preferred shape",
  "Preferred lighting colour",
  "Reference design, if available",
  "Expected installation timeline",
];


export default function CustomizationPage() {
  return (
    <>
      {/* Header */}
      <section id="customization-header" className="relative pt-32 pb-20 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#36B7C9] blur-3xl" />
        </div>
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
            Made for Your Space
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            Designed Especially for Your Space
          </h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/65 text-base mt-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            No two interiors are exactly the same. That is why we offer multiple customization options to make your Water Bubble Pillar suitable for your space.
          </p>
        </div>
      </section>

      {/* Customization Grid */}
      <section id="customization-options" className="section-ivory section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((sec) => (
              <div
                key={sec.id}
                id={`custom-${sec.id}`}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#111820]/8 hover:shadow-md hover:border-[#C2A062]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#C2A062]/12 flex items-center justify-center text-[#C2A062] mb-5">
                  {sec.icon}
                </div>
                <h2 className="heading-serif text-2xl text-[#111820] mb-3">{sec.title}</h2>
                <p className="text-[#111820]/65 text-sm mb-4 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {sec.desc}
                </p>
                {sec.note && (
                  <p className="text-[#111820]/45 text-xs italic mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {sec.note}
                  </p>
                )}
                {sec.items.length > 0 && (
                  <ul className="grid grid-cols-1 gap-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#111820]/70 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>


          {/* What to Send */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl text-[#111820] mb-4">
                What to Send for a Custom Quote
              </h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/65 text-sm mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                Please share the following details so our team can recommend the most suitable design:
              </p>
              <ol className="flex flex-col gap-4">
                {whatToSend.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span
                      className="w-8 h-8 rounded-full bg-[#C2A062] flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[#111820]/70 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#111820] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="heading-serif text-2xl text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                Send your details directly on WhatsApp for a fast, personalized response from our team.
              </p>
              <Link
                href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20to%20share%20my%20requirements%20for%20a%20customized%20Water%20Bubble%20Pillar."
                id="customization-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
              >
                Send Details on WhatsApp
              </Link>
              <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Or call us at +91 98341 23136
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
