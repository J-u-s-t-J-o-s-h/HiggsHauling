import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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

export const metadata: Metadata = {
  title: 'Higgs Hauling | Roll-Off Dumpster Rentals | Lawton OK',
  description: 'Military-class professionalism meets reliable dumpster rental services. Veteran-owned roll-off dumpster rentals serving Lawton, Oklahoma and surrounding areas. Fast delivery, on-time service.',
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
  metadataBase: new URL('https://higgshauling.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Higgs Hauling | Roll-Off Dumpster Rentals',
    description: 'Mission-driven dumpster rental service. On time. Every time. Veteran-owned and operated in Lawton, Oklahoma.',
    url: 'https://higgshauling.com',
    siteName: 'Higgs Hauling',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Higgs Hauling Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Higgs Hauling | Roll-Off Dumpster Rentals',
    description: 'Mission-driven dumpster rental service. On time. Every time.',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

