import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { siteMetadata } from "./lib/metadata";
import { PersonStructuredData } from "@/components/StructuredData";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [
    {
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
    },
  ],
  creator: siteMetadata.siteName,
  publisher: siteMetadata.siteName,
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    type: "profile",
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteMetadata.siteName} - Cloud Architect`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    site: siteMetadata.twitterHandle,
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#faf8f5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <PersonStructuredData />
      </head>
      <body className="bg-beige text-stone-800 antialiased font-sans">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
