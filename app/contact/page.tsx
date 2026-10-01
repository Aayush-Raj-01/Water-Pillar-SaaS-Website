"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const propertyOptions = [
  "Home or Villa",
  "Hotel or Resort",
  "Restaurant or Café",
  "Office",
  "Showroom",
  "Salon or Spa",
  "Wedding or Event",
  "Banquet Hall",
  "Other",
];

const shapeOptions = [
  "Cylindrical",
  "Square",
  "Rectangular",
  "Pillar Pair",
  "Multi-Pillar",
  "Not Sure Yet",
];

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push("/thank-you");
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waterbubblepillar.com";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Water Bubble Pillar",
    description:
      "Get in touch with Water Bubble Pillar for quotations, design consultation, and turnkey installation across India.",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Water Bubble Pillar",
      telephone: "+919834123136",
      email: "waterbubblewall01@gmail.com",
      areaServed: "India",
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
        name: "Contact",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="contact-header" className="relative pt-32 pb-20 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#C2A062] blur-3xl" />
        </div>
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold">
            Get in Touch
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            Let&apos;s Create Something Beautiful for Your Space
          </h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/65 text-base mt-4">
            Share your idea, site photograph and approximate dimensions. Our team will help you choose a suitable Water Bubble Pillar.
          </p>
        </div>
      </section>

      <section id="contact-body" className="section-ivory section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div id="contact-call-info" className="bg-white rounded-2xl p-7 border border-[#111820]/8 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#C2A062]/12 flex items-center justify-center text-[#C2A062] mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h2 className="heading-serif text-xl text-[#111820] mb-3">Call Us</h2>
              <a href="tel:+919834123136" id="contact-phone-1" className="block text-[#111820]/75 hover:text-[#C2A062] transition-colors font-semibold mb-1">
                +91 98341 23136
              </a>
              <a href="tel:+917011548364" id="contact-phone-2" className="block text-[#111820]/75 hover:text-[#C2A062] transition-colors font-semibold">
                +91 70115 48364
              </a>
            </div>

            <div id="contact-email-info" className="bg-white rounded-2xl p-7 border border-[#111820]/8 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#C2A062]/12 flex items-center justify-center text-[#C2A062] mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="heading-serif text-xl text-[#111820] mb-3">Email Us</h2>
              <a href="mailto:waterbubblewall01@gmail.com" id="contact-email-link" className="text-[#111820]/75 hover:text-[#C2A062] transition-colors font-semibold text-sm break-all">
                waterbubblewall01@gmail.com
              </a>
            </div>

            <div id="contact-whatsapp-info" className="bg-[#111820] rounded-2xl p-7">
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="heading-serif text-xl text-white mb-2">Quick WhatsApp Message</h2>
              <p className="text-white/50 text-xs mb-5">
                Tap to send a pre-filled message with your enquiry.
              </p>
              <Link
                href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20would%20like%20a%20quotation%20for%20a%20customized%20Water%20Bubble%20Pillar.%0A%0AMy%20city%20is%3A%0AAvailable%20height%3A%0AAvailable%20width%3A%0APreferred%20shape%3A%0AExpected%20installation%20date%3A"
                id="contact-whatsapp-prefill-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
              >
                Open WhatsApp
              </Link>
            </div>

            <div id="contact-service-area" className="bg-white rounded-2xl p-7 border border-[#111820]/8 shadow-sm">
              <h2 className="heading-serif text-xl text-[#111820] mb-3">Service Area</h2>
              <p className="text-[#111820]/65 text-sm mb-3">Pan-India Delivery and Installation</p>
              <p className="text-[#111820]/50 text-xs">
                Active turnkey delivery and on-site professional installation all over India.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div id="contact-form-container" className="bg-white rounded-2xl p-8 border border-[#111820]/8 shadow-sm">
              <h2 className="heading-serif text-3xl text-[#111820] mb-2">Send Project Inquiry</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/55 text-sm mb-7 mt-2">
                Fill in your project details and our team will get back to you shortly.
              </p>

              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input id="contact-name" name="name" type="text" required className="form-input" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
                    <input id="contact-phone" name="phone" type="tel" required className="form-input" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-whatsapp" className="form-label">WhatsApp Number</label>
                    <input id="contact-whatsapp" name="whatsapp" type="tel" className="form-input" placeholder="If different from phone" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">Email Address</label>
                    <input id="contact-email" name="email" type="email" className="form-input" placeholder="yourname@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-city" className="form-label">Installation City *</label>
                    <input id="contact-city" name="city" type="text" required className="form-input" placeholder="e.g. Mumbai, Delhi, Pune" />
                  </div>
                  <div>
                    <label htmlFor="contact-property" className="form-label">Type of Property *</label>
                    <select id="contact-property" name="property" required className="form-input">
                      <option value="">Select property type</option>
                      {propertyOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-height" className="form-label">Available Height</label>
                    <input id="contact-height" name="height" type="text" className="form-input" placeholder="e.g. 7 feet, 2.1 meters" />
                  </div>
                  <div>
                    <label htmlFor="contact-width" className="form-label">Available Width</label>
                    <input id="contact-width" name="width" type="text" className="form-input" placeholder="e.g. 3 feet, 1 meter" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-shape" className="form-label">Preferred Pillar Shape</label>
                    <select id="contact-shape" name="shape" className="form-input">
                      <option value="">Select shape</option>
                      {shapeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-pillars" className="form-label">Number of Pillars</label>
                    <input id="contact-pillars" name="pillars" type="number" min={1} className="form-input" placeholder="e.g. 1, 2, 4" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-date" className="form-label">Expected Installation Date</label>
                  <input id="contact-date" name="date" type="date" className="form-input" />
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Share any additional details, design ideas or reference images you have in mind..."
                  />
                </div>

                <div>
                  <label htmlFor="contact-photo" className="form-label">Upload Site Photograph</label>
                  <input
                    id="contact-photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    className="form-input py-2.5 file:mr-4 file:py-1.5 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#C2A062]/15 file:text-[#111820] hover:file:bg-[#C2A062]/25 file:cursor-pointer"
                  />
                  <p className="text-[#111820]/40 text-xs mt-1.5">
                    Accepted formats: JPG, PNG, HEIC. Max 10MB.
                  </p>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="btn-gold justify-center text-base py-4 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "Request My Quote"}
                </button>

                <p className="text-[#111820]/40 text-xs text-center">
                  Your details will only be used to understand your requirements and contact you regarding your enquiry.{" "}
                  <Link href="/privacy-policy" className="underline hover:text-[#C2A062]">Privacy Policy</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
