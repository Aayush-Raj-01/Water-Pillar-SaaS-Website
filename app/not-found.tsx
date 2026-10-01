import Link from "next/link";

export default function NotFound() {
  return (
    <section
      id="not-found-page"
      className="section-charcoal min-h-screen flex items-center justify-center px-5"
    >
      <div className="text-center max-w-xl mx-auto">
        {/* 404 Display */}
        <div
          className="text-[10rem] font-bold leading-none mb-6 opacity-15"
          style={{ fontFamily: "BebasNeue, serif", color: "#C2A062" }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="heading-serif text-4xl md:text-5xl text-white mb-4 -mt-10">
          This Page Could Not Be Found
        </h1>
        <div className="gold-line mx-auto" />
        <p className="text-white/60 text-base mt-4 mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
          The page may have been moved or the address may be incorrect.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" id="not-found-home-btn" className="btn-gold">
            Return to Home
          </Link>
          <Link href="/contact" id="not-found-contact-btn" className="btn-outline-white">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
