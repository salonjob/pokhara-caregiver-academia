'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryCta?: string
  showPhone?: boolean
}

export default function CTASection({
  title = 'Ready to Start Your International Caregiver Career?',
  subtitle = "Join 1,500+ students from Gandaki Province who trained at Caregiver Academia Pokhara. CTEVT, CPD UK, SDC Canada certified courses for Japan, Israel, Australia, Canada, USA & UK.",
  primaryCta = 'Enroll Now',
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-teal to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-base"
            >
              {primaryCta} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Book Free Counselling
            </a>
          </div>

          {showPhone && (
            <p className="mt-6 text-white/70 text-sm">
              Or call us:{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-white font-semibold hover:underline">
                {siteConfig.phone}
              </a>
              {' '}·{' '}
              <a href={`tel:${siteConfig.secondaryPhone}`} className="text-white font-semibold hover:underline">
                {siteConfig.secondaryPhone}
              </a>
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
