import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Water Bubble Pillar",
  description:
    "Privacy policy for Water Bubble Pillar by Water Bubble Wall. Learn how we handle and protect customer enquiry data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Water Bubble Pillar",
    description:
      "Privacy policy for Water Bubble Pillar by Water Bubble Wall. Learn how we protect customer information.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section id="privacy-header" className="pt-32 pb-16 section-charcoal">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h1 className="heading-serif text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <div className="gold-line mx-auto" />
          <p className="text-white/50 text-sm mt-4">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section id="privacy-content" className="section-ivory section-padding">
        <div className="container-site max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#111820]/8 shadow-sm">
            <div className="prose max-w-none text-[#111820]">
              <p className="text-[#111820]/70 text-base leading-relaxed mb-6">
                Water Bubble Pillar respects your privacy. Information submitted through our website, WhatsApp, telephone or enquiry forms may include your name, telephone number, email address, city, site photographs and project requirements.
              </p>

              <h2 className="heading-serif text-2xl text-[#111820] mb-3 mt-8">How We Use Your Information</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/70 text-sm mb-3">We use this information only to:</p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Respond to enquiries",
                  "Understand project requirements",
                  "Prepare quotations",
                  "Coordinate manufacturing, delivery or installation",
                  "Provide relevant service updates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#111820]/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="heading-serif text-2xl text-[#111820] mb-3 mt-8">Third Parties</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/70 text-sm mb-6">
                We do not sell personal information to third parties.
              </p>

              <h2 className="heading-serif text-2xl text-[#111820] mb-3 mt-8">Project Photographs</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/70 text-sm mb-6">
                Project photographs are not published for promotional use without suitable permission.
              </p>

              <h2 className="heading-serif text-2xl text-[#111820] mb-3 mt-8">Cookies and Analytics</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/70 text-sm mb-6">
                The website may use essential cookies and analytics tools to understand website usage and improve performance.
              </p>

              <h2 className="heading-serif text-2xl text-[#111820] mb-3 mt-8">Contact for Privacy Questions</h2>
              <div className="gold-line-left" />
              <p className="text-[#111820]/70 text-sm mb-2">
                For privacy-related questions, contact:
              </p>
              <a
                href="mailto:waterbubblewall01@gmail.com"
                id="privacy-email-link"
                className="text-[#C2A062] font-semibold text-sm hover:underline"
              >
                waterbubblewall01@gmail.com
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[#111820]/8 flex flex-wrap gap-4">
              <Link href="/" id="privacy-home-btn" className="btn-gold">
                Return to Home
              </Link>
              <Link href="/contact" id="privacy-contact-btn" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
