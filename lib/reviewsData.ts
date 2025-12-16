/**
 * Reviews Data - Single source of truth for customer reviews
 * 
 * To add reviews:
 * 1. Add review objects to the array below following the Review interface structure
 * 2. Include: name, rating (1-5), text, date (ISO format), and source
 * 3. Example:
 *    {
 *      name: 'Customer Name',
 *      rating: 5,
 *      text: 'Review text here...',
 *      date: '2024-12-15',
 *      source: 'Google Business'
 *    }
 * 
 * Future: This data structure is designed to be easily replaced with Google Business Profile API data.
 */

export interface Review {
  name: string
  rating: number // 1-5 stars
  text: string
  date: string // ISO date string or formatted date
  source: string // e.g., "Google Business", "Facebook", etc.
}

export const reviewsData: Review[] = [
  // Add real customer reviews here as they come in
]

