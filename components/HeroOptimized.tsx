/**
 * Optimized Hero Component
 * 
 * Performance optimizations:
 * - Uses CSS animations instead of framer-motion for initial load
 * - Logo image loads without motion wrapper for faster LCP
 * - Keeps the same visual design with better Core Web Vitals
 */

import DumpsterButton from '@/components/DumpsterButton'
import Image from 'next/image'

const BOOKING_URL = 'https://app.icans.ai/customer-portal/higgs-hauling-llc/book/'

export default function HeroOptimized() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Clean, Warm, and Professional */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient matching body background for consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#171717] to-[#1f1f1f]" />

        {/* Warm amber spotlight for logo area */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 900px 600px at center 25%, rgba(255, 184, 77, 0.08) 0%, rgba(255, 184, 77, 0.04) 40%, transparent 70%)'
          }}
        />

        {/* Ambient light gradient */}
        <div
          className="absolute inset-0 opacity-30 animate-ambient-drift"
          style={{
            background: 'radial-gradient(ellipse 1200px 800px at 30% 40%, rgba(255, 212, 102, 0.05) 0%, transparent 60%)'
          }}
        />

        {/* Subtle grid pattern */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]/70" />
      </div>

      {/* Content - Using CSS animations for faster LCP */}
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
        {/* Logo - Critical LCP element, no motion wrapper */}
        <div className="mb-8 flex justify-center relative">
          {/* Amber halo effects */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 184, 77, 0.9) 0%, rgba(255, 184, 77, 0.5) 35%, transparent 65%)',
              filter: 'blur(50px)',
              transform: 'scale(1.5)'
            }}
          />
          <div
            className="absolute inset-0 opacity-60 animate-pulse"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 212, 102, 0.8) 0%, rgba(255, 184, 77, 0.4) 40%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'scale(1.6)',
              animationDuration: '3s'
            }}
          />
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
            alt="Higgs Hauling - Roll-Off Dumpster Rentals in Lawton, Oklahoma"
            width={600}
            height={200}
            priority
            className="w-full max-w-2xl h-auto relative z-10 drop-shadow-[0_0_60px_rgba(255,184,77,0.9)] drop-shadow-[0_0_90px_rgba(255,212,102,0.7)]"
          />
        </div>

        {/* H1 for SEO - styled as subheading visually */}
        <h1
          className="text-xl md:text-2xl lg:text-3xl uppercase tracking-extra-wide mb-12 font-light animate-fade-in animation-delay-300"
          style={{ color: '#ffd466' }}
        >
          Roll-Off Dumpster Rentals in Lawton, OK
        </h1>

        {/* CTA Button - Restored animated DumpsterButton */}
        <div className="mb-8 md:mb-10 animate-fade-in animation-delay-600">
          <DumpsterButton redirectUrl={BOOKING_URL} />
        </div>

        {/* Secondary CTA Text */}
        <div className="animate-fade-in animation-delay-600">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold text-sm uppercase tracking-wide transition-colors"
          >
            View Pricing &amp; Availability →
          </a>
        </div>
      </div>
    </section>
  )
}

