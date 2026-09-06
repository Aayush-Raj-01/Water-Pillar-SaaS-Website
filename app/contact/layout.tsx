import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Water Bubble Pillar | Get a Customized Quote",
  description:
    "Contact Water Bubble Pillar for customized designs, quotations, delivery and installation of acrylic RGB bubble pillars across India.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
