import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waterbubblepillar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
    template: "%s | Water Bubble Pillar",
  },
  description:
    "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events. Pan-India turnkey installation.",
  keywords: [
    "water bubble pillar",
    "acrylic bubble pillar",
    "water bubble column",
    "sensory bubble tube",
    "RGB water pillar",
    "decorative water feature",
    "bubble pillar India",
    "custom water pillar",
    "interior water feature",
    "water bubble wall",
    "acrylic water column India",
    "water bubble pillar manufacturer",
    "luxury interior water features",
    "bubble pillar Mumbai",
    "bubble pillar Delhi",
    "bubble pillar Bangalore",
  ],
  authors: [{ name: "Water Bubble Pillar by Water Bubble Wall" }],
  creator: "Water Bubble Pillar",
  publisher: "Water Bubble Pillar",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Water Bubble Pillar",
    title: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
    description:
      "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events. Turnkey delivery across India.",
    images: [
      {
        url: "/img/heroSection_img.png",
        width: 1365,
        height: 768,
        alt: "Water Bubble Pillar luxury residential interior installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Water Bubble Pillars in India | Water Bubble Pillar",
    description:
      "Customized acrylic water bubble pillars with RGB lighting and premium finishes for homes, hotels, offices, restaurants and events.",
    images: ["/img/heroSection_img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Water Bubble Pillar",
      alternateName: "Water Bubble Pillar by Water Bubble Wall",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/img/heroSection_img.png`,
      description:
        "Manufacturer and turnkey installer of customized acrylic water bubble pillars, RGB bubble columns, and architectural water features across India.",
      telephone: "+919834123136",
      email: "waterbubblewall01@gmail.com",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", "name": "India" },
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Pune" },
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Ahmedabad" },
      ],
      knowsAbout: [
        "Water Bubble Pillars",
        "Acrylic Bubble Columns",
        "RGB LED Water Features",
        "Indoor Water Walls",
        "Sensory Bubble Tubes",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Water Bubble Pillar",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${alexBrush.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

