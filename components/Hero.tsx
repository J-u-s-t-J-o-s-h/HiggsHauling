'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/70 via-matte-black/50 to-matte-black z-10" />
        {/* Placeholder background - replace with actual dumpster/truck image */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-gray to-matte-black" />
        {/* Optional: Add pattern overlay for texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.05) 10px,
              rgba(255,255,255,0.05) 20px
            )`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center relative">
            {/* Ambient Gold Glow */}
            <div 
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0.3) 40%, transparent 70%)',
                transform: 'scale(1.2)'
              }}
            />
            <Image
              src="/logo.png"
              alt="Higgs Hauling Logo"
              width={600}
              height={200}
              priority
              className="w-full max-w-2xl h-auto relative z-10 drop-shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            />
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gold uppercase tracking-extra-wide mb-12 font-light"
          >
            Roll-Off Dumpster Rentals
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={scrollToContact}
            className="btn-primary text-lg md:text-xl"
          >
            Get a Quote
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

