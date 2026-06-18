'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/data/site'

export default function TrustBar() {
  return (
    <section className="bg-white py-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm font-semibold uppercase tracking-wider mb-6"
        >
          Internationally Accredited & Government Affiliated
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {siteConfig.accreditations.map((acc, index) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="relative h-12 w-24">
                <Image
                  src={acc.logo}
                  alt={acc.fullName}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-primary">{acc.name}</p>
                <p className="text-xs text-text-muted">{acc.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
