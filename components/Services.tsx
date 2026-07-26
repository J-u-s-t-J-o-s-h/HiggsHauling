'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BookingTermsDisclosure from '@/components/BookingTermsDisclosure'

const BOOKING_URL = 'https://app.icans.ai/customer-portal/higgs-hauling-llc/book/'

const dumpsterSizes = [
  {
    size: '13 Yard',
    dimensions: '14\' L × 8\' W × 3.5\' H',
    price1to3: '$340',
    price4to7: '$395',
    includedTons: '1 ton',
    overageFee: '$60 per additional ton or portion',
    ideal: 'Small cleanouts, minor renovations, yard waste'
  },
  {
    size: '15 Yard',
    dimensions: '16\' L × 8\' W × 3.5\' H',
    price1to3: '$360',
    price4to7: '$415',
    includedTons: '1 ton',
    overageFee: '$60 per additional ton or portion',
    ideal: 'Medium projects, bathroom remodels',
    popular: true
  },
  {
    size: '20 Yard',
    dimensions: '16\' L × 8\' W × 4.5\' H',
    price1to3: '$420',
    price4to7: '$470',
    includedTons: '2 tons',
    overageFee: '$60 per additional ton or portion',
    ideal: 'Roofing, flooring removal, large cleanouts'
  }
]

const features = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Same-day or next-day delivery available depending on inventory'
  },
  {
    icon: '🎯',
    title: 'Reliable Service',
    description: 'On-time pickup and drop-off, every time'
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    description: 'Transparent pricing with no hidden fees'
  }
]

function ServiceCard({ service, index }: { service: typeof dumpsterSizes[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card relative flex flex-col ${service.popular ? 'border-gold' : ''}`}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-construction-orange text-white px-4 py-1 rounded-sm text-sm font-bold uppercase tracking-wide shadow-lg shadow-construction-orange/50">
          Most Popular
        </div>
      )}
      <h3 className="heading-tertiary text-gold mb-2">{service.size}</h3>
      <p className="text-gray-300 text-sm mb-4">{service.dimensions}</p>
      <div className="space-y-3 text-gray-300 mb-6 flex-grow">
        <div className="bg-dark-gray/50 p-3 rounded">
          <p className="text-xs text-gold font-bold uppercase tracking-wide mb-1">Short Rental</p>
          <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">Up to 3 days</p>
          <p className="text-gold font-bold text-2xl">{service.price1to3} <span className="text-sm font-normal text-gray-400">+ tax</span></p>
        </div>
        <div className="bg-dark-gray/50 p-3 rounded">
          <p className="text-xs text-gold font-bold uppercase tracking-wide mb-1">Weekly Rental</p>
          <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">Up to 7 days</p>
          <p className="text-gold font-bold text-2xl">{service.price4to7} <span className="text-sm font-normal text-gray-400">+ tax</span></p>
        </div>
        <div className="pt-2 border-t border-gold/20">
          <p className="text-sm">
            <span className="text-white font-semibold">Included:</span> {service.includedTons}
          </p>
          <p className="text-sm">
            <span className="text-white font-semibold">Overage:</span> {service.overageFee}
          </p>
        </div>
        <p className="text-sm pt-2">
          <span className="text-white font-semibold">Ideal for:</span> {service.ideal}
        </p>
      </div>

      {/* Reserve Button */}
      <div className="w-full space-y-2">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block"
        >
          <motion.button
            className="w-full btn-primary py-3 text-sm uppercase tracking-wide font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reserve Now
          </motion.button>
        </a>
        <BookingTermsDisclosure />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Bold orange accent orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-construction-orange/[0.1] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-construction-orange-light/[0.08] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.05] rounded-full blur-3xl" />

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
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="flex gap-2 justify-center mx-auto mb-6">
            <div className="w-12 h-1 bg-gold"></div>
            <div className="w-12 h-1 bg-construction-orange"></div>
          </div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Choose the right dumpster size for your project. We serve Lawton, Oklahoma and surrounding areas.
          </p>
          <div className="mt-6 inline-block bg-dark-gray/80 border border-gold/30 rounded-lg px-6 py-3">
            <p className="text-gold font-bold uppercase tracking-wide flex items-center gap-2">
              <span>🪖</span> 10% Military Discount for Active Duty & Veterans
            </p>
          </div>
        </motion.div>

        {/* Dumpster Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dumpsterSizes.map((service, index) => (
            <ServiceCard key={service.size} service={service} index={index} />
          ))}
        </div>
        <p className="text-center text-gray-300 text-sm md:text-base max-w-3xl mx-auto mt-6 mb-16">
          Kept longer than 3 days? Your rental automatically converts to the weekly rate.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gold mb-2 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-sm uppercase tracking-wide">
            Proudly serving Lawton, Oklahoma and surrounding areas • Flexible rental terms • Call for custom quotes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
