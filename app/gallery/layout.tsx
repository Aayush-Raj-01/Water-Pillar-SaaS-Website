import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Bubble Pillar Project Gallery | Real Installations Across India",
  description:
    "Explore photography of real Water Bubble Pillar installations in luxury villas, hotel atriums, corporate boardrooms, and wedding venues across India.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Water Bubble Pillar Project Gallery | Real Installations",
    description:
      "Explore real-world photography of custom acrylic water bubble pillars installed in homes, hotels, and luxury spaces across India.",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/img/luxury_villa_staircase.jpg",
        width: 1200,
        height: 896,
        alt: "Water Bubble Pillar project gallery installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Bubble Pillar Project Gallery | Real Installations",
    description:
      "View photography of custom water bubble pillars installed in homes, hotels, and luxury spaces.",
    images: ["/img/luxury_villa_staircase.jpg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
