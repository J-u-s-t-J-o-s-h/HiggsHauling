'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { reviewsData } from '@/lib/reviewsData'

/**
 * Google Business Profile Review URL
 * 
 * TO UPDATE: Replace the placeholder URL below with your actual Google Business Profile review link.
 * 
 * How to find your review URL:
 * 1. Go to your Google Business Profile dashboard (business.google.com)
 * 2. Click on "Get more reviews" or look for "Share review link"
 * 3. Copy the direct review URL (typically looks like: https://g.page/r/[BUSINESS_ID]/review)
 * 4. Replace the URL below, or set it as an environment variable for easier management
 */
const GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/qjZW2jHMMrbLbgWe9' 

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-gold' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: typeof reviewsData[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card h-full flex flex-col"
    >
      {/* Rating and Source Badge */}
      <div className="flex items-start justify-between mb-4">
        <StarRating rating={review.rating} />
        <span className="text-xs uppercase tracking-wide text-gold bg-gold/10 px-2 py-1 rounded">
          {review.source}
        </span>
      </div>

      {/* Review Text */}
      <p className="text-gray-200 leading-relaxed mb-4 flex-grow">
        &quot;{review.text}&quot;
      </p>

      {/* Customer Name and Date */}
      <div className="pt-4 border-t border-gold/20">
        <p className="text-white font-semibold mb-1">{review.name}</p>
        <p className="text-gray-400 text-sm">{formatDate(review.date)}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Decorative background elements matching site style */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gold/[0.1] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-construction-orange/[0.08] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-construction-orange-light/[0.05] rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">
            Customer <span className="text-gold">Reviews</span>
          </h2>
          <div className="flex gap-2 justify-center mx-auto mb-6">
            <div className="w-12 h-1 bg-gold"></div>
            <div className="w-12 h-1 bg-construction-orange"></div>
          </div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            See what our customers are saying about their experience with Higgs Hauling. 
            We&apos;re committed to delivering exceptional service, every time.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {reviewsData.map((review, index) => (
            <ReviewCard key={`${review.name}-${review.date}`} review={review} index={index} />
          ))}
        </div>

        {/* Leave a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Had a great experience? We&apos;d love to hear from you!
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Leave a Review on Google
            </motion.button>
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Help others discover our veteran-owned service
          </p>
        </motion.div>
      </div>
    </section>
  )
}

