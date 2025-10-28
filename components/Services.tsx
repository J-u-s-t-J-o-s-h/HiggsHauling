'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const dumpsterSizes = [
  {
    size: '10 Yard',
    dimensions: '12\' L × 8\' W × 3.5\' H',
    capacity: '~4 pickup truck loads',
    ideal: 'Small cleanouts, minor renovations, yard waste',
    price: 'Call for Quote'
  },
  {
    size: '20 Yard',
    dimensions: '22\' L × 8\' W × 4.5\' H',
    capacity: '~8 pickup truck loads',
    ideal: 'Medium projects, roofing, flooring removal',
    price: 'Call for Quote',
    popular: true
  },
  {
    size: '30 Yard',
    dimensions: '22\' L × 8\' W × 6\' H',
    capacity: '~12 pickup truck loads',
    ideal: 'Large renovations, new construction',
    price: 'Call for Quote'
  },
  {
    size: '40 Yard',
    dimensions: '22\' L × 8\' W × 8\' H',
    capacity: '~16 pickup truck loads',
    ideal: 'Major construction, commercial projects',
    price: 'Call for Quote'
  }
]

const features = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Same-day or next-day delivery available'
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
      className={`card relative ${service.popular ? 'border-gold' : ''}`}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-matte-black px-4 py-1 rounded-sm text-sm font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <h3 className="heading-tertiary text-gold mb-4">{service.size}</h3>
      <div className="space-y-3 text-gray-300">
        <p className="text-sm">
          <span className="text-white font-semibold">Dimensions:</span> {service.dimensions}
        </p>
        <p className="text-sm">
          <span className="text-white font-semibold">Capacity:</span> {service.capacity}
        </p>
        <p className="text-sm">
          <span className="text-white font-semibold">Ideal for:</span> {service.ideal}
        </p>
        <div className="pt-4 border-t border-gold/20">
          <p className="text-gold font-bold text-xl">{service.price}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-padding bg-matte-black">
      <div className="container-custom">
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
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose the right dumpster size for your project. We serve Lawton, Oklahoma and surrounding areas 
            with flexible rental terms and professional service.
          </p>
        </motion.div>

        {/* Dumpster Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dumpsterSizes.map((service, index) => (
            <ServiceCard key={service.size} service={service} index={index} />
          ))}
        </div>

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
              <p className="text-gray-300">{feature.description}</p>
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
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            Proudly serving Lawton, Oklahoma and surrounding areas • Flexible rental terms • Call for custom quotes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

