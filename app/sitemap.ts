import { MetadataRoute } from 'next'
import { getAllAreaSlugs } from '@/lib/serviceAreasData'

/**
 * Sitemap Configuration
 * 
 * This generates /sitemap.xml for search engines.
 * All public, indexable routes should be listed here.
 * 
 * Next.js automatically serves this at /sitemap.xml after build.
 * 
 * To add new routes, add entries to the array below.
 * Service area pages are generated dynamically from lib/serviceAreasData.ts.
 */

const BASE_URL = 'https://www.higgshauling.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all service area slugs dynamically from shared data
  const areaSlugs = getAllAreaSlugs()

  // Generate service area page entries
  const serviceAreaPages: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // All sitemap entries
  return [
    // Home page - highest priority
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Service area pages
    ...serviceAreaPages,
  ]
}
