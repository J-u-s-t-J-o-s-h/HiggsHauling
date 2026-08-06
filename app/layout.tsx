import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LocalBusinessJsonLd } from '@/components/StructuredData'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

/**
 * Global Metadata Configuration
 * 
 * This defines default metadata for all pages. Individual pages can override
 * these values by exporting their own metadata or using generateMetadata.
 * 
 * To update site-wide title/description patterns, edit this file.
 * For page-specific metadata, see:
 * - Home page: inherits from this layout
 * - Service area pages: app/service-areas/[area]/metadata.ts
 */
export const metadata: Metadata = {
  title: 'Higgs Hauling | Roll-Off Dumpster Rentals | Lawton OK',
  description: 'Veteran-owned roll-off dumpster rental company serving Lawton, Oklahoma and surrounding areas. Fast delivery, on-time service, and military-class professionalism. 13, 15, and 20-yard dumpsters available.',
  keywords: [
    'dumpster rental',
    'roll-off dumpster',
    'waste management',
    'Lawton OK',
    'Lawton Oklahoma',
    'dumpster rental Lawton',
    'veteran owned',
    'construction dumpster',
    'residential dumpster',
    'commercial dumpster'
  ],
  authors: [{ name: 'Higgs Hauling' }],
  creator: 'Higgs Hauling',
  publisher: 'Higgs Hauling',
  // Updated to match live site URL with www
  metadataBase: new URL('https://www.higgshauling.com'),
  // Default homepage canonical; child routes override via their own metadata.
  // Do not hardcode a <link rel="canonical"> in <head> — it cannot be overridden
  // and produces conflicting dual canonical tags on every non-home page.
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Higgs Hauling | Roll-Off Dumpster Rentals',
    description: 'Veteran-owned dumpster rental service in Lawton, OK. On time. Every time.',
    url: 'https://www.higgshauling.com',
    siteName: 'Higgs Hauling',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Higgs Hauling - Veteran-Owned Dumpster Rentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Higgs Hauling | Roll-Off Dumpster Rentals',
    description: 'Veteran-owned dumpster rental service in Lawton, OK. On time. Every time.',
    images: ['/logo.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* LocalBusiness structured data for search engines - update in components/StructuredData.tsx */}
        <LocalBusinessJsonLd />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1NKM6DZ5GN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1NKM6DZ5GN');
          `}
        </Script>
        <Script
          src="https://rapidscansecure.com/siteseal/siteseal.js?code=64,39585FCF3B2F8D60CA5C9FADD04E96BA14290771"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
