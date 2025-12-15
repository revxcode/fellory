import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fellory Official - Pinky Body Care",
  description: "Smooth, bright, and fragrant body care products for radiant skin. Discover natural ingredients, gentle formulas, and a luxurious self-care experience with Fellory.",
  keywords: [
    "Fellory",
    "body care",
    "skin care",
    "natural ingredients",
    "fragrant",
    "smooth skin",
    "bright skin",
    "luxury self-care",
    "beauty products",
    "moisturizer",
    "body lotion"
  ],
  authors: [{ name: "Fellory Team", url: "https://fellory.my.id" }],
  openGraph: {
    title: "Fellory - Pinky Body Care",
    description: "Smooth, bright, and fragrant body care products for radiant skin.",
    url: "https://fellory.my.id",
    siteName: "Fellory",
    images: [
      {
        url: "https://fellory.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fellory - Pinky Body Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellory - Pinky Body Care",
    description: "Smooth, bright, and fragrant body care products for radiant skin.",
    images: ["https://fellory.my.id/og-image.jpg"],
    site: "@fellory",
    creator: "@fellory",
  },
  metadataBase: new URL("https://fellory.my.id"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  );
}
