'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    title: 'Reliability',
    description: 'Count on us for consistent, dependable service every single time'
  },
  {
    title: 'Professionalism',
    description: 'Military-trained precision and attention to detail in every job'
  },
  {
    title: 'Local Service',
    description: 'Proudly serving our community with personalized care'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-dark-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-secondary text-white mb-6">
              About <span className="text-gold">Higgs Hauling</span>
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Higgs Hauling is a <strong className="text-gold">veteran-owned and operated</strong> roll-off 
                dumpster rental company serving Augusta, GA and the surrounding areas. Founded on the principles 
                of discipline, integrity, and excellence, we bring military-class professionalism to every project.
              </p>
              
              <p>
                Whether you're tackling a home renovation, managing a construction site, or handling a major 
                cleanout, we provide reliable dumpster rental services with the same commitment to excellence 
                we learned in service.
              </p>

              <p>
                Our mission is simple: deliver exceptional service with precision timing and unwavering reliability. 
                We understand the importance of keeping your project on schedule, and we're here to make waste 
                management the easiest part of your job.
              </p>
            </div>

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 border-l-4 border-gold pl-6 py-4 bg-matte-black/50"
            >
              <p className="text-2xl md:text-3xl font-bold text-gold italic leading-relaxed">
                "Mission-driven service.<br />On time. Every time."
              </p>
              <p className="text-gray-400 mt-4 text-sm uppercase tracking-wide">
                — Our Promise to You
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-2xl font-bold text-gold mb-3 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="text-center card">
                <div className="text-4xl font-bold text-gold mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Veteran Owned
                </div>
              </div>
              <div className="text-center card">
                <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Support Available
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

