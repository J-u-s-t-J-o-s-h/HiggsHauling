'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type FormData = {
  name: string
  phone: string
  email: string
  address: string
  dumpsterSize: string
  rentalDuration: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary text-white mb-4">
            Get Your <span className="text-gold">Free Estimate</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to get started? Fill out the form below and we'll get back to you with a quote within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
            {/* Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9\s\-\(\)]+$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Service Address *
                </label>
                <input
                  id="address"
                  type="text"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="123 Main St, Augusta, GA"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-400">{errors.address.message}</p>
                )}
              </div>
            </div>

            {/* Dumpster Size and Rental Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dumpsterSize" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Dumpster Size *
                </label>
                <select
                  id="dumpsterSize"
                  {...register('dumpsterSize', { required: 'Please select a dumpster size' })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                >
                  <option value="">Select a size</option>
                  <option value="10-yard">10 Yard</option>
                  <option value="20-yard">20 Yard (Most Popular)</option>
                  <option value="30-yard">30 Yard</option>
                  <option value="40-yard">40 Yard</option>
                  <option value="not-sure">Not Sure - Need Help</option>
                </select>
                {errors.dumpsterSize && (
                  <p className="mt-1 text-sm text-red-400">{errors.dumpsterSize.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="rentalDuration" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Rental Duration *
                </label>
                <select
                  id="rentalDuration"
                  {...register('rentalDuration', { required: 'Please select rental duration' })}
                  className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                           focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                >
                  <option value="">Select duration</option>
                  <option value="1-3-days">1-3 Days</option>
                  <option value="1-week">1 Week</option>
                  <option value="2-weeks">2 Weeks</option>
                  <option value="1-month">1 Month</option>
                  <option value="flexible">Flexible - Let's Discuss</option>
                </select>
                {errors.rentalDuration && (
                  <p className="mt-1 text-sm text-red-400">{errors.rentalDuration.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={5}
                className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                         focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                placeholder="Tell us about your project and any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Free Quote'}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900/30 border border-green-500 text-green-400 px-4 py-3 rounded-sm"
              >
                <p className="font-bold">Success!</p>
                <p>Thank you for your request. We'll contact you within 24 hours with a quote.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded-sm"
              >
                <p className="font-bold">Error</p>
                <p>{errorMessage}</p>
              </motion.div>
            )}
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gold">
              <a href="tel:+15555551234" className="hover:text-gold-dark transition-colors">
                📞 (555) 555-1234
              </a>
              <a href="mailto:info@higgshauling.com" className="hover:text-gold-dark transition-colors">
                ✉️ info@higgshauling.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

