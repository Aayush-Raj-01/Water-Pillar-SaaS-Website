import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
    template: "%s | Water Bubble Pillar",
  },
  description:
    "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events. Pan-India installation.",
  keywords: [
    "water bubble pillar",
    "acrylic bubble pillar",
    "RGB water pillar",
    "decorative water feature",
    "bubble pillar India",
    "custom water pillar",
    "interior water feature",
    "water bubble wall",
  ],
  authors: [{ name: "Water Bubble Pillar by Water Bubble Wall" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Water Bubble Pillar",
    title: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
    description:
      "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

