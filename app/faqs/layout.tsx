import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Bubble Pillar FAQs | Sizes, Installation & Maintenance",
  description:
    "Find answers about Water Bubble Pillar dimensions, RGB lighting, customization, pan-India delivery, installation, cleaning and maintenance.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Water Bubble Pillar FAQs | Answers to Common Questions",
    description:
      "Frequently asked questions about customized acrylic water bubble pillars, RGB illumination, pan-India installation, and maintenance.",
    url: "/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Bubble Pillar FAQs | Sizes, Installation & Maintenance",
    description:
      "Find answers about Water Bubble Pillar dimensions, RGB lighting, customization, delivery, and maintenance across India.",
  },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
