import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fellory - Pinky Body Care | Solusi Kulit Cerah Ramah Kantong",
  description: "Body care viral yang aman BPOM dengan harga pelajar. Cerahkan kulit dengan Fellory Pinky - produk body care terpercaya Gen Z. Cek harga spesial hari ini!",
  keywords: [
    "Fellory",
    "body care lokal",
    "kulit cerah",
    "BPOM",
    "harga pelajar",
    "body lotion",
    "Miss V spray",
    "bar soap",
    "glow up ramah kantong",
    "body care viral",
    "aman bumil busui",
    "skincare lokal Indonesia"
  ],
  authors: [{ name: "Fellory Team", url: "https://fellory.my.id" }],
  creator: "Fellory Official",
  openGraph: {
    title: "Fellory - Pinky Body Care | Glow Up Ramah Kantong",
    description: "Body care viral aman BPOM dengan harga pelajar. Kulit cerah, awet seharian, harga terjangkau!",
    url: "https://fellory.my.id",
    siteName: "Fellory",
    images: [
      {
        url: "https://fellory.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fellory - Pinky Body Care | Glow Up Ramah Kantong",
        type: "image/jpeg",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellory - Pinky Body Care",
    description: "Glow up ramah kantong dengan produk body care BPOM.",
    images: ["https://fellory.my.id/og-image.jpg"],
    creator: "@fellory_official",
  },
  metadataBase: new URL("https://fellory.my.id"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#ec4899" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${nunito.variable} ${inter.variable} font-sans antialiased bg-white text-stone-800`}
        style={{ fontFamily: 'var(--font-nunito)' }}
      >
        {children}
      </body>
    </html>
  );
}
