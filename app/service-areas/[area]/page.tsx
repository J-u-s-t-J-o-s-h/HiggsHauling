import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAreaBySlug, getAllAreaSlugs } from '@/lib/serviceAreasData'
import ServiceAreaContent from './ServiceAreaContent'

/**
 * Dynamic Metadata for Service Area Pages
 * 
 * This generates SEO metadata for each location page.
 * To update metadata patterns for all areas, edit this file.
 * To update content for a specific area, edit lib/serviceAreasData.ts.
 */

interface PageProps {
  params: Promise<{ area: string }>
}

// Only allow statically generated area slugs. Unknown paths must 404 instead of
// returning an indexable HTTP 200 "Area Not Found" soft-404 page.
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: areaSlug } = await params
  const area = getAreaBySlug(areaSlug)

  if (!area) {
    return {
      title: 'Service Area Not Found | Higgs Hauling',
      description: 'The requested service area could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const pageUrl = `/service-areas/${areaSlug}`
  const fullDescription = `${area.description} Veteran-owned roll-off dumpster rental service serving ${area.name} and Southwest Oklahoma. Fast delivery, flexible scheduling.`

  return {
    title: `Dumpster Rentals in ${area.name} | Higgs Hauling`,
    description: fullDescription,
    keywords: [
      `dumpster rental ${area.name}`,
      `roll-off dumpster ${area.name}`,
      `waste removal ${area.name}`,
      `construction dumpster ${area.name}`,
      'Southwest Oklahoma dumpster',
      'veteran owned dumpster rental',
    ],
    // Canonical URL for this specific area page (metadataBase makes it absolute)
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Dumpster Rentals in ${area.name} | Higgs Hauling`,
      description: area.description,
      url: pageUrl,
      type: 'website',
      siteName: 'Higgs Hauling',
      locale: 'en_US',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `Higgs Hauling - Dumpster Rentals in ${area.name}`,
        },
      ],
    },
    // Twitter card metadata for area pages
    twitter: {
      card: 'summary_large_image',
      title: `Dumpster Rentals in ${area.name} | Higgs Hauling`,
      description: area.description,
      images: ['/logo.png'],
    },
  }
}

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({
    area: slug,
  }))
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params
  const area = getAreaBySlug(areaSlug)

  if (!area) {
    notFound()
  }

  return <ServiceAreaContent area={area} areaSlug={areaSlug} />
}
