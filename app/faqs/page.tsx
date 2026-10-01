"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What is a Water Bubble Pillar?",
    a: "A Water Bubble Pillar is a transparent decorative water feature in which air bubbles continuously rise through water while LED lighting creates a colourful visual effect.",
  },
  {
    q: "Can its size be customized?",
    a: "Yes. Dimensions can be planned according to the available space and project requirements. Final feasibility is confirmed after reviewing the measurements and site conditions.",
  },
  {
    q: "Which shapes are available?",
    a: "Common options include cylindrical and square pillars. Paired and multi-pillar arrangements can also be designed.",
  },
  {
    q: "Can I change the light colour?",
    a: "Yes. RGB lighting provides multiple colour and transition options. Remote or app control may be available depending on the selected configuration.",
  },
  {
    q: "Can artificial fish be added?",
    a: "Artificial decorative fish can be added to selected designs.",
  },
  {
    q: "Does it require a continuous water connection?",
    a: "Most installations operate as enclosed decorative systems and do not need a continuous water connection. Exact requirements will be explained according to the chosen model.",
  },
  {
    q: "Does it require regular maintenance?",
    a: "Basic periodic cleaning and water care help maintain clarity and performance. Usage and maintenance guidance is provided after installation.",
  },
  {
    q: "Where can it be installed?",
    a: "It can be installed in homes, hotels, restaurants, receptions, offices, showrooms, salons, spas, events and other suitable indoor spaces.",
  },
  {
    q: "Do you provide installation?",
    a: "Professional installation can be arranged depending on the city and project requirements.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, projects can be delivered across India. Installation arrangements depend on the product design and location.",
  },
  {
    q: "How can I receive a quotation?",
    a: "Send your site photograph, approximate dimensions, installation city and preferred design through WhatsApp. Our team will prepare a quotation based on your requirements.",
  },
  {
    q: "Is pricing displayed on the website?",
    a: "Because dimensions and customization vary, quotations are prepared individually after reviewing the project details.",
  },
  {
    q: "How long does manufacturing take?",
    a: "The timeline depends on size, customization, current workload and delivery location. An estimated schedule is shared with the quotation.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`faq-item-${index + 1}`}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[#C2A062]/50 bg-white shadow-md"
          : "border-[#111820]/10 bg-white hover:border-[#C2A062]/30"
      }`}
    >
      <button
        id={`faq-toggle-${index + 1}`}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="heading-serif text-[#111820] text-lg">{faq.q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            open ? "border-[#C2A062] bg-[#C2A062] text-white rotate-180" : "border-[#111820]/25 text-[#111820]/50"
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="w-full h-px bg-[#C2A062]/20 mb-4" />
          <p className="text-[#111820]/65 text-base leading-relaxed">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waterbubblepillar.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
      name: "FAQs",
      item: `${baseUrl}/faqs`,
    },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="faqs-header" className="relative pt-32 pb-20 section-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#C2A062] blur-3xl" />
        </div>
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <p className="text-[#C2A062] text-xs tracking-[0.25em] uppercase mb-3 font-bold">
            Common Questions
          </p>
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-5">
            Frequently Asked Questions
          </h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/65 text-base mt-4">
            Everything you need to know before getting started.
          </p>
        </div>
      </section>

      <section id="faqs-list" className="section-ivory section-padding">
        <div className="container-site max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <div id="faqs-contact-cta" className="mt-14 text-center bg-[#111820] rounded-2xl p-10">
            <h2 className="heading-serif text-2xl text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-white/60 text-sm mb-6">
              Our team is happy to help. Send your question on WhatsApp or fill in our enquiry form.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20have%20a%20question%20about%20your%20products."
                id="faqs-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Ask on WhatsApp
              </Link>
              <Link href="/contact" id="faqs-contact-btn" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
