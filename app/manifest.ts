import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Water Bubble Pillar | Bespoke Water Features",
    short_name: "Water Bubble Pillar",
    description:
      "Customized acrylic water bubble pillars with RGB lighting for luxury residential, hospitality, and commercial spaces across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#080C14",
    theme_color: "#080C14",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
