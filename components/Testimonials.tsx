'use client'

import Script from 'next/script'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Decorative background elements matching site style */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gold/[0.1] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-construction-orange/[0.08] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-construction-orange-light/[0.05] rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Elfsight All-in-One Reviews | Higgs Hauling */}
        <div className="w-full relative z-20 min-h-[400px]">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" crossOrigin="anonymous" />
          <div className="elfsight-app-53ab60e2-03b7-4579-99d6-4edb980a79a7" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}

