import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next';
import { siteMetadata } from './lib/metadata';
import { PersonStructuredData } from '@/components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.description,
  keywords: [
    'Victor Elexpe',
    'Data Engineering',
    'Computer Engineer',
    'Madrid',
    'Spain',
    'Sim Racing',
    'Music Producer',
    'Spanish Engineer',
    'Data Engineer Madrid',
    'Tech Professional Spain',
    ...siteMetadata.keywords
  ],
  authors: [{ name: siteMetadata.siteName }],
  creator: siteMetadata.siteName,
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victor Elexpe - Data Engineer & Music Producer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <PersonStructuredData />
      </head>
      <body className="bg-black text-white antialiased font-sans">{children}</body>
    </html>
  );
}
