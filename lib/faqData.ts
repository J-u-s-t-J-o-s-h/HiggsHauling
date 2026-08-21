/**
 * FAQ Data - Single source of truth for FAQ content
 * 
 * This data is used by:
 * - components/FAQ.tsx (UI display)
 * - components/StructuredData.tsx (FAQPage JSON-LD for search engines)
 * 
 * To update FAQs, edit this file to keep both UI and schema in sync.
 */

export interface FAQItem {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: 'What size dumpster do I need?',
    answer: 'It depends on your project! Our 13-yard dumpster works great for small cleanouts, minor renovations, and yard waste. The 15-yard is our most popular choice for medium projects like bathroom remodels. Our 20-yard handles larger jobs like roofing, flooring removal, and major cleanouts. Not sure? Give us a call and we\'ll help you choose the right size!'
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'We offer short rentals (up to 3 days) and weekly rentals (up to 7 days). If a short rental is kept past the 3rd day, it automatically converts to the current weekly (1–7 day) rate. Need it longer than 7 days? Additional days are available at the published extension rate, and we can arrange longer-term rentals—just let us know.'
  },
  {
    question: 'What can I put in the dumpster?',
    answer: 'Most household and construction debris is welcome: furniture, appliances, wood, metal, drywall, shingles, flooring, and yard waste. We cannot accept hazardous materials, chemicals, paints, tires, batteries, or electronics. Contact us if you\'re unsure about specific items.'
  },
  {
    question: 'Do I need to be present for delivery and pickup?',
    answer: 'No! As long as we have clear access to the placement area, you don\'t need to be home. We\'ll place the dumpster exactly where you specified and pick it up when you\'re done. Just call us when you\'re ready for pickup.'
  },
  {
    question: 'How much does dumpster rental cost?',
    answer: 'Pricing varies based on dumpster size, rental duration, and your location. We offer transparent, competitive pricing with no hidden fees. Call us for a free quote tailored to your specific project needs!'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Lawton, Oklahoma and surrounding areas including Cache, Medicine Park, Fletcher, Snyder, Chattanooga, Walters, and Elgin. Contact us to confirm we service your location!'
  },
  {
    question: 'Can you deliver same-day or next-day?',
    answer: 'Yes! We offer same-day or next-day delivery depending on inventory availability. We understand projects don\'t wait, so we work hard to accommodate urgent requests. Call us as early as possible for the fastest service.'
  },
  {
    question: 'Where will the dumpster be placed?',
    answer: 'You choose! We can place it in your driveway, yard, or street (permit may be required for street placement). We need a flat, accessible area with enough clearance for our truck. We\'ll use boards under the dumpster to protect your surface if needed.'
  },
  {
    question: 'Do I need a permit?',
    answer: 'If placing the dumpster on private property (your driveway or yard), you typically don\'t need a permit. If it needs to go on a public street, you may need a permit from your local municipality. We can advise you based on your specific situation.'
  },
  {
    question: 'What makes Higgs Hauling different?',
    answer: 'We\'re a veteran-owned business committed to mission-driven service. We pride ourselves on reliability, professionalism, and treating every customer with respect. On-time delivery and pickup, transparent pricing, and exceptional customer service are our standards - every time.'
  },
  {
    question: 'Do you offer military discounts?',
    answer: 'Yes! We offer a 10% discount for all active duty military and veterans. It\'s our way of saying thank you for your service.'
  }
]
