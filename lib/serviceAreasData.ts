// Service Areas Data - Centralized location for all area information

export interface ServiceArea {
  name: string
  slug: string
  description: string
  fullDescription: string
  population?: string
  highlights: string[]
  servicesOffered: string[]
  image: string
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Lawton, OK',
    slug: 'lawton',
    description: 'Reliable roll-off dumpster rentals for residential and commercial projects throughout Lawton and surrounding neighborhoods.',
    fullDescription: 'Lawton is the largest city we serve and home to Fort Sill. We provide comprehensive dumpster rental services for residential renovations, commercial construction, and large-scale cleanup operations. Our veteran-owned business understands the unique needs of the Lawton community.',
    population: '~92,000',
    highlights: [
      'Commercial construction projects',
      'Residential home renovations',
      'Property management services',
      'Storm debris removal',
      'Local community focused',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Same-day delivery available',
      'Flexible rental periods',
      'Residential & Commercial',
    ],
    image: '/placeholder-lawton.jpg',
  },
  {
    name: 'Cache, OK',
    slug: 'cache',
    description: 'Efficient waste removal services for Cache residents and businesses. Same-day delivery available for urgent projects.',
    fullDescription: 'Cache is a growing community just north of Lawton. We serve homeowners, small businesses, and agricultural operations with reliable dumpster rental services. Whether you\'re cleaning out a barn, renovating your home, or managing a construction site, we\'ve got you covered.',
    population: '~3,000',
    highlights: [
      'Agricultural waste disposal',
      'Home renovation support',
      'Small business solutions',
      'Storm cleanup services',
      'Same-day delivery options',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Farm & Ranch cleanup',
      'Construction debris',
      'Household cleanouts',
    ],
    image: '/placeholder-cache.jpg',
  },
  {
    name: 'Medicine Park, OK',
    slug: 'medicine-park',
    description: 'Eco-friendly dumpster solutions for Medicine Park. Perfect for home renovations, landscaping, and community cleanup events.',
    fullDescription: 'Medicine Park is a unique cobblestone village nestled in the Wichita Mountains. We provide environmentally conscious waste removal services that respect the natural beauty of this tourist destination. Ideal for vacation rental cleanouts, property maintenance, and community events.',
    population: '~400',
    highlights: [
      'Vacation rental cleanouts',
      'Landscaping projects',
      'Community event support',
      'Eco-friendly disposal',
      'Tourism industry services',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Landscaping debris',
      'Vacation rental support',
      'Event cleanup',
    ],
    image: '/placeholder-medicine-park.jpg',
  },
  {
    name: 'Fletcher, OK',
    slug: 'fletcher',
    description: 'Dependable dumpster rentals in Fletcher for construction sites, property cleanouts, and agricultural waste disposal needs.',
    fullDescription: 'Fletcher is a tight-knit rural community where reliability matters. We provide dumpster rental services for agricultural operations, home improvements, and small business needs. Our flexible scheduling works around your farm or ranch operations.',
    population: '~1,200',
    highlights: [
      'Agricultural support',
      'Rural property cleanouts',
      'Construction projects',
      'Flexible scheduling',
      'Family-owned business friendly',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Farm equipment debris',
      'Property maintenance',
      'Barn cleanouts',
    ],
    image: '/placeholder-fletcher.jpg',
  },
  {
    name: 'Snyder, OK',
    slug: 'snyder',
    description: 'Professional waste management for Snyder area homes and farms. Flexible rental periods to fit your project timeline.',
    fullDescription: 'Snyder is a small agricultural community where we provide reliable dumpster services for farms, ranches, and residential properties. We understand rural schedules and offer flexible rental periods to accommodate harvest seasons and weather-dependent projects.',
    population: '~1,400',
    highlights: [
      'Farm and ranch services',
      'Seasonal flexibility',
      'Agricultural waste removal',
      'Home improvement support',
      'Long-term rentals available',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Harvest season support',
      'Equipment disposal',
      'Extended rental periods',
    ],
    image: '/placeholder-snyder.jpg',
  },
  {
    name: 'Chattanooga, OK',
    slug: 'chattanooga',
    description: 'Comprehensive dumpster services for Chattanooga. Supporting local contractors and homeowners with timely, affordable solutions.',
    fullDescription: 'Chattanooga is a small town with big needs. We support local contractors, homeowners, and businesses with prompt dumpster delivery and pickup. Our affordable pricing and personal service make us the preferred choice for Chattanooga residents.',
    population: '~500',
    highlights: [
      'Local contractor support',
      'Residential services',
      'Small business solutions',
      'Affordable pricing',
      'Personal service',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Home renovations',
      'Contractor support',
      'Property cleanouts',
    ],
    image: '/placeholder-chattanooga.jpg',
  },
  {
    name: 'Walters, OK',
    slug: 'walters',
    description: 'Quality roll-off containers delivered to Walters. Veteran-owned service you can trust for any size cleanup project.',
    fullDescription: 'Walters is a proud rural community near the Red River. As a veteran-owned business, we bring military precision and reliability to every dumpster rental. We serve residential, commercial, and agricultural customers with the same commitment to excellence.',
    population: '~2,500',
    highlights: [
      'Veteran-owned reliability',
      'Red River area coverage',
      'Agricultural services',
      'Commercial support',
      'Community focused',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'Residential cleanouts',
      'Commercial construction',
      'Farm & ranch support',
    ],
    image: '/placeholder-walters.jpg',
  },
  {
    name: 'Elgin, OK',
    slug: 'elgin',
    description: 'Reliable dumpster rentals for Elgin residents and businesses. Serving the growing community with fast, professional waste removal.',
    fullDescription: 'Elgin is a thriving community just east of Lawton along Highway 277. We provide dependable dumpster rental services for residential projects, new construction, and commercial developments. As the area continues to grow, we\'re here to support your cleanup and waste management needs.',
    population: '~3,200',
    highlights: [
      'New construction support',
      'Residential developments',
      'Growing community focused',
      'Highway 277 corridor',
      'Fast delivery times',
    ],
    servicesOffered: [
      '13-Yard Dumpsters',
      '15-Yard Dumpsters',
      '20-Yard Dumpsters',
      'New home construction',
      'Residential cleanouts',
      'Commercial projects',
    ],
    image: '/placeholder-elgin.jpg',
  },
]

// Helper function to get area by slug
export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find(area => area.slug === slug)
}

// Helper function to get all slugs for static generation
export function getAllAreaSlugs(): string[] {
  return serviceAreas.map(area => area.slug)
}

