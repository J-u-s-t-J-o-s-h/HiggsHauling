import { MetadataRoute } from 'next'

/**
 * Robots.txt Configuration
 * 
 * This generates /robots.txt for search engine crawlers.
 * Next.js automatically serves this at /robots.txt after build.
 * 
 * Current config: Allow all crawlers to access all public pages.
 * No Disallow rules for main content.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.higgshauling.com/sitemap.xml',
  }
}
