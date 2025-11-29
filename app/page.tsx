/**
 * Home Page - Optimized for Core Web Vitals
 * 
 * Performance strategy:
 * - Server component (no 'use client' on the page itself)
 * - Critical above-the-fold content renders immediately (Hero, Navigation)
 * - Below-the-fold sections lazy-loaded with next/dynamic
 * - framer-motion deferred to non-critical sections
 */

import dynamic from 'next/dynamic'
import NavigationOptimized from '@/components/NavigationOptimized'
import HeroOptimized from '@/components/HeroOptimized'
import { FaqPageJsonLd } from '@/components/StructuredData'

// Lazy load below-the-fold components to reduce initial JS bundle
// These use framer-motion but are loaded after initial paint
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="section-padding bg-matte-black min-h-[600px]" />,
})

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="section-padding bg-dark-gray min-h-[600px]" />,
})

const ServiceAreas = dynamic(() => import('@/components/ServiceAreas'), {
  loading: () => <div className="section-padding bg-matte-black min-h-[400px]" />,
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-padding bg-dark-gray min-h-[600px]" />,
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="section-padding bg-matte-black min-h-[600px]" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <footer className="bg-matte-black min-h-[300px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* FAQPage structured data */}
      <FaqPageJsonLd />
      
      {/* Critical above-the-fold content - renders immediately */}
      <NavigationOptimized />
      <HeroOptimized />
      
      {/* Below-the-fold sections - lazy loaded */}
      <Services />
      <About />
      <ServiceAreas />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
