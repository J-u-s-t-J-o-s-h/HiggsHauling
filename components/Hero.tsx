'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import DumpsterButton from './DumpsterButton'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Clean, Warm, and Professional */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient matching body background for consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0f0f0f] to-[#1a1a1a]" />
        
        {/* Warm amber spotlight for logo area - brighter and warmer */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse 900px 600px at center 25%, rgba(255, 184, 77, 0.08) 0%, rgba(255, 184, 77, 0.04) 40%, transparent 70%)'
          }}
        />
        
        {/* Ambient animated light gradient for cinematic depth */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 1200px 800px at 30% 40%, rgba(255, 212, 102, 0.05) 0%, transparent 60%)',
            animation: 'ambient-drift 8s ease-in-out infinite alternate'
          }}
        />
        
        {/* Subtle grid pattern - minimal and clean with amber tone */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 184, 77, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 184, 77, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]/70" />
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
            {/* Brighter amber halo with increased blur for warmth */}
            <div 
              className="absolute inset-0 opacity-70"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 184, 77, 0.9) 0%, rgba(255, 184, 77, 0.5) 35%, transparent 65%)',
                filter: 'blur(50px)',
                transform: 'scale(1.5)'
              }}
            />
            {/* Secondary warm glow layer with animation */}
            <div 
              className="absolute inset-0 opacity-60 animate-pulse"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 212, 102, 0.8) 0%, rgba(255, 184, 77, 0.4) 40%, transparent 70%)',
                filter: 'blur(60px)',
                transform: 'scale(1.6)',
                animationDuration: '3s'
              }}
            />
            {/* Subtle accent glow */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 200, 87, 0.7) 0%, transparent 55%)',
                filter: 'blur(40px)',
                transform: 'scale(1.4)'
              }}
            />
            <Image
              src="/logo.png"
              alt="Higgs Hauling Logo"
              width={600}
              height={200}
              priority
              className="w-full max-w-2xl h-auto relative z-10 drop-shadow-[0_0_60px_rgba(255,184,77,0.9)] drop-shadow-[0_0_90px_rgba(255,212,102,0.7)]"
            />
          </div>

          {/* Subheading - Brighter gold for better contrast */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl uppercase tracking-extra-wide mb-12 font-light"
            style={{ color: '#ffd466' }}
          >
            Roll-Off Dumpster Rentals
          </motion.p>

          {/* CTA Button with Dumpster Animation */}
          <div className="mb-20 md:mb-24">
            <DumpsterButton onClick={scrollToContact} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

