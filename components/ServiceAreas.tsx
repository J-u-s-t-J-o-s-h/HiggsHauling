'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { serviceAreas } from '@/lib/serviceAreasData'

export default function ServiceAreas() {
  const [showAllAreas, setShowAllAreas] = useState(false)
  
  // Show only first 3 areas in preview
  const previewAreas = serviceAreas.slice(0, 3)
  const displayAreas = showAllAreas ? serviceAreas : previewAreas

  return (
    <section 
      id="service-areas" 
      className="relative section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0d0d0d 0%, #1a1a1a 100%)'
      }}
    >
      {/* Subtle ambient background glow */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 1000px 800px at 50% 30%, rgba(255, 184, 77, 0.03) 0%, transparent 70%)'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header - Mobile optimized spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 
            className="heading-secondary mb-3 md:mb-4 px-4"
            style={{ color: '#ffb84d' }}
          >
            Areas We Serve
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4" style={{ color: '#cccccc' }}>
            Proudly serving communities across Southwest Oklahoma.
          </p>
        </motion.div>

        {/* Service Areas Preview Grid - Compact for mobile */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="block"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-sm border border-gold/20 bg-dark-gray
                             transition-all duration-300 hover:border-gold-amber hover:shadow-[0_0_30px_rgba(255,184,77,0.3)]
                             hover:scale-[1.03] active:scale-[1.01] cursor-pointer touch-manipulation h-full"
                >
              {/* Card Image Container - Compact mobile height */}
              <div className="relative h-32 sm:h-40 md:h-44 overflow-hidden">
                {/* Placeholder background - dark with subtle texture */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-dark-gray to-matte-black"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 184, 77, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 184, 77, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* Dark overlay that lightens on hover/touch */}
                <div className="absolute inset-0 bg-matte-black/50 group-hover:bg-matte-black/70 group-active:bg-matte-black/70 transition-all duration-300" />
                
                {/* Oklahoma icon/landmark placeholder - centered, mobile optimized size */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl opacity-20 group-hover:opacity-30 group-active:opacity-30 transition-opacity duration-300">
                    📍
                  </div>
                </div>

                {/* Town Name Overlay - Compact mobile text size */}
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide z-10 text-center group-hover:scale-105 group-active:scale-105 transition-transform duration-300"
                    style={{ 
                      color: '#ffb84d',
                      textShadow: '0 0 20px rgba(255, 184, 77, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {area.name}
                  </h3>
                </div>
              </div>

              {/* Card Content - Compact mobile padding */}
              <div className="p-3 sm:p-4 md:p-5">
                <p 
                  className="text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3"
                  style={{ color: '#cccccc' }}
                >
                  {area.description}
                </p>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatePresence>

        {/* View All Areas Button */}
        {!showAllAreas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6 sm:mt-8"
          >
            <button
              onClick={() => setShowAllAreas(true)}
              className="btn-primary text-sm sm:text-base"
            >
              View All {serviceAreas.length} Service Areas
            </button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAllAreas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-6 sm:mt-8"
          >
            <button
              onClick={() => {
                setShowAllAreas(false)
                // Smooth scroll back to section top
                document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="btn-secondary text-sm sm:text-base"
            >
              Show Less
            </button>
          </motion.div>
        )}

        {/* Optional CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4 pt-6 border-t border-gold/10"
        >
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
            Don&apos;t see your area listed? <span className="text-gold-amber font-semibold">Give us a call!</span> We may still be able to serve you.
          </p>
          <a 
            href="#contact" 
            className="inline-block btn-secondary text-sm sm:text-base"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

