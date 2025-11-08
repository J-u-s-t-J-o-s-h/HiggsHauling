'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type FormData = {
  name: string
  phone: string
  email: string
  address: string
  dumpsterSize: string
  rentalDuration: string
  startDate: Date | null
  endDate: Date | null
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
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Format dates for submission
      const formattedData = {
        ...data,
        startDate: data.startDate ? data.startDate.toLocaleDateString() : '',
        endDate: data.endDate ? data.endDate.toLocaleDateString() : '',
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message')
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
      {/* Decorative grid pattern with orange accents */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.4) 1.5px, transparent 1.5px),
                           linear-gradient(90deg, rgba(255, 107, 53, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Bold orange accent orbs */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-construction-orange/[0.12] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-construction-orange-light/[0.09] rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-3xl" />

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
          <div className="flex gap-2 justify-center mx-auto mb-6">
            <div className="w-12 h-1 bg-gold"></div>
            <div className="w-12 h-1 bg-construction-orange"></div>
          </div>
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
                  placeholder="123 Main St, Lawton, OK"
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

            {/* Date Range Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Delivery Date *
                </label>
                <Controller
                  control={control}
                  name="startDate"
                  rules={{ required: 'Please select a delivery date' }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value}
                      onChange={onChange}
                      minDate={new Date()}
                      placeholderText="Select delivery date"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                               focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                      calendarClassName="bg-matte-black border border-gold/30"
                      dayClassName={(date) => 
                        date < new Date() 
                          ? "text-gray-500 cursor-not-allowed" 
                          : "text-white hover:bg-gold hover:text-matte-black"
                      }
                    />
                  )}
                />
                {errors.startDate && (
                  <p className="mt-1 text-sm text-red-400">{errors.startDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gold uppercase tracking-wide mb-2">
                  Pickup Date
                </label>
                <Controller
                  control={control}
                  name="endDate"
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value}
                      onChange={onChange}
                      minDate={new Date()}
                      placeholderText="Select pickup date (optional)"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/30 rounded-sm text-white 
                               focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                      calendarClassName="bg-matte-black border border-gold/30"
                      dayClassName={(date) => 
                        date < new Date() 
                          ? "text-gray-500 cursor-not-allowed" 
                          : "text-white hover:bg-gold hover:text-matte-black"
                      }
                    />
                  )}
                />
                <p className="mt-1 text-xs text-gray-400">Leave blank if flexible pickup date</p>
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
              <a href="tel:+15802844717" className="hover:text-gold-dark transition-colors">
                📞 (580) 284-4717
              </a>
              <a href="mailto:higgshauling2024@gmail.com" className="hover:text-gold-dark transition-colors">
                ✉️ higgshauling2024@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

