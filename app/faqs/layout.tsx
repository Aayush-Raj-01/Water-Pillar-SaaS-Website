import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Bubble Pillar FAQs | Installation and Maintenance",
  description:
    "Find answers about Water Bubble Pillar sizes, lighting, customization, installation, delivery, cleaning and maintenance.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
