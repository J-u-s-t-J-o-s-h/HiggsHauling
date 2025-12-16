/**
 * Optimized Navigation Component
 * 
 * Performance optimizations:
 * - CSS animation for initial slide-down instead of framer-motion
 * - Removed priority from logo (hero logo is the LCP element)
 * - Kept essential interactivity (scroll detection, mobile menu)
 * - Removed hover animations on nav items for cleaner interaction
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navigationItems = [
  { name: 'Home', href: '/#hero', id: 'hero' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Reviews', href: '/#testimonials', id: 'testimonials' },
  { name: 'Areas', href: '/#service-areas', id: 'service-areas' },
  { name: 'FAQ', href: '/#faq', id: 'faq' },
]

const PORTAL_LOGIN_URL = 'https://app.icans.ai/customer-portal/higgs-hauling-llc/auth/login/'
const BOOKING_URL = 'https://app.icans.ai/customer-portal/higgs-hauling-llc/book/'

export default function NavigationOptimized() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      const sections = navigationItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        scrolled 
          ? 'bg-matte-black/95 backdrop-blur-md shadow-[0_4px_8px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid #ffb84d' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 0 rgba(255, 184, 77, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo - No priority, hero logo is LCP */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 blur-xl rounded-lg" style={{ background: 'rgba(255, 184, 77, 0.35)' }} />
              <div className="absolute inset-0 blur-lg rounded-lg animate-pulse" style={{ background: 'rgba(255, 212, 102, 0.3)', animationDuration: '3s' }} />
              <Image
                src="/logo.png"
                alt="Higgs Hauling"
                width={220}
                height={73}
                className="h-14 w-auto relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 flex-1 justify-center">
            {navigationItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                className={`relative font-bold uppercase tracking-wide text-sm lg:text-base transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-gold' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-construction-orange" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={PORTAL_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold font-bold uppercase tracking-wide text-sm transition-colors"
            >
              Customer Login
            </a>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-2.5 flex-shrink-0 inline-block hover:scale-105 transition-transform"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-gold block transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-gold block transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-gold block transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gold/20 bg-matte-black/95 backdrop-blur-md animate-fade-in">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left py-3 px-4 font-bold uppercase tracking-wide text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-gold bg-gold/10' 
                      : 'text-white hover:text-gold hover:bg-gold/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-800 my-2 pt-2">
                <a 
                  href={PORTAL_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left py-3 px-4 font-bold uppercase tracking-wide text-sm text-white hover:text-gold"
                >
                  Customer Login
                </a>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full mt-2 btn-primary text-sm text-center"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

