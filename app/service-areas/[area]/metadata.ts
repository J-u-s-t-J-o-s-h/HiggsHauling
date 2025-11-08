import { Metadata } from 'next'
import { getAreaBySlug, getAllAreaSlugs } from '@/lib/serviceAreasData'

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = getAreaBySlug(params.area)

  if (!area) {
    return {
      title: 'Service Area Not Found | Higgs Hauling',
      description: 'The requested service area could not be found.',
    }
  }

  return {
    title: `Dumpster Rentals in ${area.name} | Higgs Hauling`,
    description: `${area.description} Veteran-owned roll-off dumpster rental service serving ${area.name} and Southwest Oklahoma.`,
    keywords: [
      `dumpster rental ${area.name}`,
      `roll-off dumpster ${area.name}`,
      `waste removal ${area.name}`,
      `construction dumpster ${area.name}`,
      'Southwest Oklahoma dumpster',
      'veteran owned dumpster rental',
    ],
    openGraph: {
      title: `Dumpster Rentals in ${area.name} | Higgs Hauling`,
      description: area.description,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({
    area: slug,
  }))
}

