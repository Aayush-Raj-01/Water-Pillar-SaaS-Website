import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Water Bubble Pillar | Custom Quotation & Site Consultation",
  description:
    "Contact Water Bubble Pillar for customized quotes, site consultations, pan-India delivery, and turnkey installation of acrylic RGB water bubble columns.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Water Bubble Pillar | Get a Custom Project Quotation",
    description:
      "Share your space dimensions and preferences for bespoke water bubble pillar manufacturing and installation across India.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Water Bubble Pillar | Custom Quotation & Consultation",
    description:
      "Get in touch for customized water bubble pillar designs, quotations, and installation across India.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
