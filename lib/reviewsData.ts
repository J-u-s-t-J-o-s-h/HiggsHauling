/**
 * Reviews Data - Single source of truth for customer reviews
 * 
 * IMPORTANT: These are PLACEHOLDER/SAMPLE reviews for demonstration purposes.
 * Replace these with real customer reviews as they come in from Google Business Profile.
 * 
 * To update reviews:
 * 1. Replace the placeholder reviews below with real customer reviews
 * 2. Update the date field to reflect the actual review date
 * 3. Keep the same data structure for consistency
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
  {
    name: 'Michael R.',
    rating: 5,
    text: 'Excellent service from start to finish! Needed a 15-yard dumpster for a bathroom remodel. Higgs Hauling delivered on time, the dumpster was clean, and pickup was prompt. The team was professional and courteous. Highly recommend for any project!',
    date: '2024-12-15',
    source: 'Google Business'
  },
  {
    name: 'Sarah T.',
    rating: 5,
    text: 'Veteran-owned business with military precision. They dropped off our 20-yard dumpster exactly when promised and picked it up right on schedule. No hidden fees, transparent pricing. Will definitely use again for our next construction project.',
    date: '2024-12-10',
    source: 'Google Business'
  },
  {
    name: 'James W.',
    rating: 5,
    text: 'Fast, reliable, and professional. We needed same-day delivery for a roofing project and they made it happen. The dumpster was perfect for our needs and the pricing was competitive. Great communication throughout the rental period.',
    date: '2024-12-05',
    source: 'Google Business'
  },
  {
    name: 'Patricia L.',
    rating: 5,
    text: 'Outstanding customer service! The team helped us choose the right size dumpster for our home cleanout. Delivery was smooth, the dumpster was in great condition, and they worked around our schedule. Very satisfied with the service.',
    date: '2024-11-28',
    source: 'Google Business'
  }
]

