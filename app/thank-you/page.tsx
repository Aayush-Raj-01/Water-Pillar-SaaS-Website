import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Enquiry",
  description: "We have received your enquiry. Our team will get in touch with you shortly.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section
      id="thank-you-page"
      className="section-charcoal min-h-screen flex items-center justify-center px-5"
    >
      <div className="text-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[#C2A062]/20 border-2 border-[#C2A062] flex items-center justify-center mx-auto mb-8">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#C2A062]" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="heading-serif text-4xl md:text-5xl text-white mb-4">
          Thank You for Your Enquiry
        </h1>
        <div className="gold-line mx-auto" />
        <p className="text-white/70 text-base mt-5 mb-3 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
          We have received your details. Our team will review your requirements and contact you shortly.
        </p>
        <p className="text-white/50 text-sm mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
          For a quicker response, send your site photograph and measurements through WhatsApp.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20have%20just%20submitted%20an%20enquiry%20form%20and%20would%20like%20to%20follow%20up."
            id="thank-you-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Continue on WhatsApp
          </Link>
          <Link href="/" id="thank-you-home-btn" className="btn-outline-white">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
