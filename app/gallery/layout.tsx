import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Bubble Pillar Project Gallery | Real Installations",
  description:
    "View real Water Bubble Pillar installations in homes, hotels, offices, restaurants, events and luxury commercial interiors.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
