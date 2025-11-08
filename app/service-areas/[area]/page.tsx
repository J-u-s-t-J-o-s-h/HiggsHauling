'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAreaBySlug, serviceAreas } from '@/lib/serviceAreasData'

export default function ServiceAreaPage() {
  const params = useParams()
  const areaSlug = params.area as string
  const area = getAreaBySlug(areaSlug)

  // If area not found, show 404-style message
  if (!area) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="relative min-h-screen flex items-center justify-center section-padding">
          <div className="container-custom text-center">
            <h1 className="heading-primary mb-6" style={{ color: '#ffb84d' }}>
              Area Not Found
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We couldn't find information for this service area.
            </p>
            <Link href="/#service-areas" className="btn-primary">
              View All Service Areas
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  // Get other areas for recommendations
  const otherAreas = serviceAreas.filter(a => a.slug !== areaSlug).slice(0, 3)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      suppressHydrationWarning
    >
      <Navigation />

      {/* Hero Section for Area */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #0d0d0d 0%, #1a1a1a 100%)'
        }}
      >
        {/* Background elements */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 184, 77, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 184, 77, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Ambient glow */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at center 30%, rgba(255, 184, 77, 0.08) 0%, transparent 70%)'
          }}
        />

        <div className="container-custom relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/" className="text-gold-amber hover:text-gold-bright transition-colors text-sm">
                Home
              </Link>
              <span className="text-gray-500 mx-2">/</span>
              <Link href="/#service-areas" className="text-gold-amber hover:text-gold-bright transition-colors text-sm">
                Service Areas
              </Link>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-gray-400 text-sm">{area.name}</span>
            </div>

            {/* Area Name */}
            <h1 
              className="heading-primary mb-4"
              style={{ color: '#ffb84d' }}
            >
              Dumpster Rentals in {area.name}
            </h1>
            
            {area.population && (
              <p className="text-lg text-gray-400 mb-6">
                Population: {area.population}
              </p>
            )}

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {area.fullDescription}
            </p>

            <Link href="/#contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section 
        className="relative section-padding"
        style={{
          background: 'linear-gradient(to bottom, #1a1a1a 0%, #0d0d0d 100%)'
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="heading-tertiary mb-6"
                style={{ color: '#ffb84d' }}
              >
                Services in {area.name}
              </h2>
              <ul className="space-y-4">
                {area.servicesOffered.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-gold-amber text-xl mr-3">✓</span>
                    <span className="text-gray-300 text-lg">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Local Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="heading-tertiary mb-6"
                style={{ color: '#ffb84d' }}
              >
                Why Choose Us in {area.name}?
              </h2>
              <ul className="space-y-4">
                {area.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-construction-orange text-xl mr-3">★</span>
                    <span className="text-gray-300 text-lg">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section 
        id="contact-section"
        className="relative section-padding"
        style={{
          background: 'linear-gradient(to bottom, #0d0d0d 0%, #1a1a1a 100%)'
        }}
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="heading-secondary mb-6"
              style={{ color: '#ffb84d' }}
            >
              Ready to Get Started in {area.name}?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today for a free quote on dumpster rentals in {area.name}. 
              Fast delivery, flexible scheduling, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+15802844717" className="btn-secondary">
                Call (580) 284-4717
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Service Areas */}
      {otherAreas.length > 0 && (
        <section 
          className="relative section-padding"
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a 0%, #0d0d0d 100%)'
          }}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="heading-tertiary mb-4"
                style={{ color: '#ffb84d' }}
              >
                We Also Serve
              </h2>
              <p className="text-gray-400">
                Explore other communities in Southwest Oklahoma
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAreas.map((otherArea, index) => (
                <motion.div
                  key={otherArea.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/service-areas/${otherArea.slug}`}
                    className="block group relative overflow-hidden rounded-sm border border-gold/20 bg-dark-gray
                               transition-all duration-300 hover:border-gold-amber hover:shadow-[0_0_30px_rgba(255,184,77,0.3)]
                               hover:scale-[1.03] active:scale-[1.01]"
                  >
                    <div className="relative h-32 sm:h-40 overflow-hidden">
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
                      <div className="absolute inset-0 bg-matte-black/50 group-hover:bg-matte-black/70 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                          📍
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center px-3">
                        <h3 
                          className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-center group-hover:scale-105 transition-transform duration-300"
                          style={{ 
                            color: '#ffb84d',
                            textShadow: '0 0 20px rgba(255, 184, 77, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {otherArea.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {otherArea.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/#service-areas" className="btn-secondary text-sm sm:text-base">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </motion.main>
  )
}

