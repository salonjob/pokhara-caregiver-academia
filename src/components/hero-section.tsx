'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Globe, Award } from 'lucide-react'
import { siteConfig } from '@/data/site'

export default function HeroSection() {
  const destinations = ['Japan', 'Israel', 'Australia', 'Canada', 'USA', 'UK']

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Graduation photo background with Ken Burns zoom ── */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg-image"
        style={{ backgroundImage: "url('/images/hero-graduation.webp')" }}
        aria-hidden="true"
      />

      {/* ── Brand colour overlay: deep navy → primary → teal accent ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(15,45,82,0.82) 45%, rgba(14,165,233,0.20) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Ambient glow orbs (brand accents) ── */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-6"
          >
            <Shield className="w-4 h-4 text-accent-green" />
            <span>Gandaki Province&apos;s #1 Government-Affiliated Institute</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Caregiver Academia Pokhara —{' '}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              {`Nepal's #1 Institute`}
            </span>{' '}
            in Gandaki Province
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto"
          >
            CTEVT Affiliated · CPD UK Member No. 20520 · SDC Canada Partner Code 1226 · ISO 9001:2015 Certified
          </motion.p>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Globe className="w-4 h-4" /> Train for:
            </span>
            {destinations.map((dest) => (
              <span
                key={dest}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
              >
                {dest}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-base"
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors shadow-lg text-base"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {siteConfig.accreditations.map((acc) => (
              <div
                key={acc.name}
                className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
              >
                <Award className="w-4 h-4 text-accent-gold" />
                <div className="text-left">
                  <p className="text-white text-xs font-semibold">{acc.name}</p>
                  <p className="text-white/50 text-xs">{acc.tag}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background-light/30 to-transparent pointer-events-none" />
    </section>
  )
}
