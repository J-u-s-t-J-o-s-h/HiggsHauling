'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navigationItems = [
  { name: 'Home', href: '/#hero', id: 'hero' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Areas', href: '/#service-areas', id: 'service-areas' },
  { name: 'FAQ', href: '/#faq', id: 'faq' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // Determine active section
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          {/* Logo - Always returns to homepage */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                {/* Warmer amber glow for navbar logo */}
                <div className="absolute inset-0 blur-xl rounded-lg" style={{ background: 'rgba(255, 184, 77, 0.35)' }} />
                <div className="absolute inset-0 blur-lg rounded-lg animate-pulse" style={{ background: 'rgba(255, 212, 102, 0.3)', animationDuration: '3s' }} />
                <Image
                  src="/logo.png"
                  alt="Higgs Hauling"
                  width={220}
                  height={73}
                  className="h-14 w-auto relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 flex-1 justify-center">
            {navigationItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <motion.div
                  className={`relative font-bold uppercase tracking-wide text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-gold' 
                      : 'text-white hover:text-gold'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-construction-orange"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link href="/#contact" className="hidden md:block">
            <motion.div
              className="btn-secondary text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-2.5 flex-shrink-0 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block transition-all"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gold block transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block transition-all"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gold/20 bg-matte-black/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <Link key={item.id} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block w-full text-left py-3 px-4 font-bold uppercase tracking-wide text-sm transition-colors cursor-pointer ${
                        activeSection === item.id 
                          ? 'text-gold bg-gold/10' 
                          : 'text-white hover:text-gold hover:bg-gold/5'
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                    className="w-full mt-4 btn-primary text-sm inline-block text-center"
                  >
                    Get Quote
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
