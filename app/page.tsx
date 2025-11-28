'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import ServiceAreas from '@/components/ServiceAreas'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { FaqPageJsonLd } from '@/components/StructuredData'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      suppressHydrationWarning
    >
      {/* FAQPage structured data - synced with FAQ component via lib/faqData.ts */}
      <FaqPageJsonLd />
      
      <Navigation />
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <FAQ />
      <ContactForm />
      <Footer />
    </motion.main>
  )
}
