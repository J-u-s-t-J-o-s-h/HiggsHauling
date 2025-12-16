import { faqData } from '@/lib/faqData'
import { reviewsData } from '@/lib/reviewsData'

/**
 * Structured Data Components for SEO
 * 
 * These components inject JSON-LD schema markup for search engines.
 * - LocalBusinessJsonLd: Business identity (used on all pages via layout)
 * - FaqPageJsonLd: FAQ schema (used on home page only)
 * - ReviewsJsonLd: Review schema (used on home page only)
 * 
 * To update contact details or service areas, edit LocalBusinessJsonLd below.
 * To update FAQ content, edit lib/faqData.ts.
 * To update reviews, edit lib/reviewsData.ts.
 */

/**
 * LocalBusiness Schema - Helps search engines understand the business
 * https://schema.org/LocalBusiness
 * 
 * Update business details here if contact info or service areas change.
 */
export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Higgs Hauling',
    url: 'https://www.higgshauling.com/',
    telephone: '+1-580-284-4717',
    email: 'higgshauling2024@gmail.com',
    description: 'Veteran-owned roll-off dumpster rental company serving Lawton, Oklahoma and surrounding areas. Fast delivery, on-time service, and military-class professionalism.',
    image: 'https://www.higgshauling.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lawton',
      addressRegion: 'OK',
      addressCountry: 'US'
    },
    areaServed: [
      { '@type': 'City', name: 'Lawton', addressRegion: 'OK' },
      { '@type': 'City', name: 'Cache', addressRegion: 'OK' },
      { '@type': 'City', name: 'Medicine Park', addressRegion: 'OK' },
      { '@type': 'City', name: 'Fletcher', addressRegion: 'OK' },
      { '@type': 'City', name: 'Snyder', addressRegion: 'OK' },
      { '@type': 'City', name: 'Chattanooga', addressRegion: 'OK' },
      { '@type': 'City', name: 'Walters', addressRegion: 'OK' },
      { '@type': 'City', name: 'Elgin', addressRegion: 'OK' }
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

/**
 * FAQPage Schema - Rich results for FAQ section
 * https://schema.org/FAQPage
 * 
 * Uses FAQ content from lib/faqData.ts to stay in sync with UI.
 * Update FAQ questions/answers in lib/faqData.ts, not here.
 */
export function FaqPageJsonLd() {
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
    />
  )
}

/**
 * Review Schema - Rich results for customer reviews
 * https://schema.org/Review
 * 
 * Uses review content from lib/reviewsData.ts to stay in sync with UI.
 * Update reviews in lib/reviewsData.ts, not here.
 */
export function ReviewsJsonLd() {
  // Calculate average rating
  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Higgs Hauling',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviewsData.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviewsData.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  )
}
