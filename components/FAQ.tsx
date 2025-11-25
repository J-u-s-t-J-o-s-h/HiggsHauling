'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const faqs = [
  {
    question: 'What size dumpster do I need?',
    answer: 'It depends on your project! Our 13-yard dumpster works great for small cleanouts, minor renovations, and yard waste. The 15-yard is our most popular choice for medium projects like bathroom remodels. Our 20-yard handles larger jobs like roofing, flooring removal, and major cleanouts. Not sure? Give us a call and we\'ll help you choose the right size!'
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'Our standard rental period is 7 days, but we offer flexible terms to fit your schedule. Need it longer? No problem! Just let us know and we can arrange extended rental periods. Short-term rentals are also available for quick projects.'
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
    answer: 'We proudly serve Lawton, Oklahoma and surrounding areas. Contact us to confirm we service your location - we\'re always looking to expand our service area to help more customers!'
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
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gold/20 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:text-gold transition-colors"
      >
        <h3 className="text-lg md:text-xl font-bold pr-8 text-white group-hover:text-gold transition-colors">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg 
            className="w-6 h-6 text-construction-orange" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="section-padding bg-dark-gray relative overflow-hidden">
      {/* Orange accent orbs */}
      <div className="absolute top-10 right-20 w-[500px] h-[500px] bg-construction-orange/[0.1] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-10 left-20 w-[450px] h-[450px] bg-construction-orange-light/[0.08] rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="flex gap-2 justify-center mx-auto mb-6">
            <div className="w-12 h-1 bg-gold"></div>
            <div className="w-12 h-1 bg-construction-orange"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions our customers ask.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="btn-secondary inline-block"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

