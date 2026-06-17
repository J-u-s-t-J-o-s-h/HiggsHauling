'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-matte-black border-t-4 border-t-gold relative">
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-construction-orange"></div>
      <div className="container-custom py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              {/* Warm amber glow for footer logo */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255, 184, 77, 0.5) 0%, rgba(255, 184, 77, 0.3) 40%, transparent 65%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.3)'
                }}
              />
              <div
                className="absolute inset-0 opacity-40 animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255, 212, 102, 0.4) 0%, transparent 60%)',
                  filter: 'blur(35px)',
                  transform: 'scale(1.4)',
                  animationDuration: '3s'
                }}
              />
              <Image
                src="/logo.png"
                alt="Higgs Hauling - Veteran-Owned Dumpster Rentals in Lawton, Oklahoma"
                width={200}
                height={67}
                sizes="200px"
                className="relative z-10 w-auto h-auto"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 184, 77, 0.6)) drop-shadow(0 0 40px rgba(255, 212, 102, 0.4))'
                }}
              />
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left">
              Mission-driven service. On time. Every time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-bold uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  Dumpster Sizes & Pricing
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>

            {/* Service Area Links - SEO keyword-rich anchor text */}
            <h3 className="text-gold font-bold uppercase tracking-wide mb-4 mt-6">Service Areas</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/service-areas/lawton" className="hover:text-gold transition-colors">
                  Dumpster Rentals in Lawton, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/cache" className="hover:text-gold transition-colors">
                  Dumpster Rentals in Cache, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/elgin" className="hover:text-gold transition-colors">
                  Dumpster Rentals in Elgin, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/medicine-park" className="hover:text-gold transition-colors">
                  Dumpster Rentals in Medicine Park
                </Link>
              </li>
              <li>
                <Link href="/#service-areas" className="hover:text-gold transition-colors text-gold-amber">
                  View All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-bold uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+15802844717" className="hover:text-gold transition-colors">
                  📞 (580) 284-4717
                </a>
              </li>
              <li>
                <a href="mailto:higgshauling2024@gmail.com" className="hover:text-gold transition-colors">
                  ✉️ higgshauling2024@gmail.com
                </a>
              </li>
              <li className="text-gray-300">
                📍 Lawton, Oklahoma
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8 pt-8 border-t border-gold/20">
          <a
            href="https://www.facebook.com/profile.php?id=61583883958299"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border-2 border-gold rounded-sm 
                     hover:bg-gold hover:text-matte-black transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border-2 border-gold rounded-sm 
                     hover:bg-gold hover:text-matte-black transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="mailto:higgshauling2024@gmail.com"
            className="w-10 h-10 flex items-center justify-center border-2 border-gold rounded-sm 
                     hover:bg-gold hover:text-matte-black transition-all duration-300"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-gold/20">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Higgs Hauling. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Proudly Veteran-Owned and Operated
          </p>
          <a
            href="#"
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault()
              window.open(
                'https://www.rapidscansecure.com/siteseal/Verify.aspx?code=64,39585FCF3B2F8D60CA5C9FADD04E96BA14290771',
                'Verification',
                'location=no, toolbar=no, resizable=no, scrollbars=yes, directories=no, status=no, top=100, left=100, width=960, height=526'
              )
              return false
            }}
            className="inline-block mt-2"
            aria-label="View CompliAssure SiteSeal verification"
          >
            <img
              alt="CompliAssure SiteSeal"
              src="https://www.rapidscansecure.com/siteseal/Seal.aspx?code=64,39585FCF3B2F8D60CA5C9FADD04E96BA14290771"
              className="border-0"
              width={120}
              height={60}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
