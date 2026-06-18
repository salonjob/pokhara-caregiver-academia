'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const destinations = [
  {
    country: 'Japan',
    flag: '🇯🇵',
    course: 'Kaigo Course',
    salary: 'JPY 1.8M–2.8M/yr',
    salaryNPR: '≈ NPR 16–25 lakhs',
    highlight: 'SSW Visa pathway',
    courses: 1,
    color: 'from-red-50 to-white',
    border: 'border-red-100',
  },
  {
    country: 'Israel',
    flag: '🇮🇱',
    course: 'G2G Caregiver Course',
    salary: 'USD 1,500–2,200/mo',
    salaryNPR: '≈ NPR 2–3 lakhs/mo',
    highlight: 'Government G2G Program',
    courses: 1,
    color: 'from-blue-50 to-white',
    border: 'border-blue-100',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    course: 'Aged Care / Level IV',
    salary: 'AUD 45,000–65,000/yr',
    salaryNPR: '≈ NPR 40–60 lakhs',
    highlight: 'High demand aged care',
    courses: 2,
    color: 'from-yellow-50 to-white',
    border: 'border-yellow-100',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    course: 'PSW / CNA / Level IV',
    salary: 'CAD 35,000–55,000/yr',
    salaryNPR: '≈ NPR 35–55 lakhs',
    highlight: 'PR immigration pathway',
    courses: 3,
    color: 'from-red-50 to-white',
    border: 'border-red-100',
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    course: 'CNA / Aged Care',
    salary: 'USD 28,000–48,000/yr',
    salaryNPR: '≈ NPR 38–65 lakhs',
    highlight: 'H-2B & EB-3 Visa options',
    courses: 2,
    color: 'from-blue-50 to-white',
    border: 'border-blue-100',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    course: 'Aged Care / Level IV',
    salary: 'GBP 20,000–30,000/yr',
    salaryNPR: '≈ NPR 34–52 lakhs',
    highlight: 'Health & Care Worker Visa',
    courses: 2,
    color: 'from-purple-50 to-white',
    border: 'border-purple-100',
  },
]

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">6 Destination Countries</h2>
          <p className="section-subheading mx-auto">
            Our graduates work across 6 countries — each with its own visa pathway and earning potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`bg-gradient-to-br ${dest.color} border ${dest.border} rounded-2xl p-5 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-4xl">{dest.flag}</span>
                  <h3 className="font-heading font-bold text-xl text-primary mt-1">{dest.country}</h3>
                </div>
                <span className="bg-accent-green/10 text-accent-green text-xs font-semibold px-2 py-1 rounded-full">
                  {dest.courses} course{dest.courses > 1 ? 's' : ''}
                </span>
              </div>
              <p className="text-sm text-text-muted mb-2">{dest.course}</p>
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-4 h-4 text-accent-teal" />
                <span className="font-semibold text-primary text-sm">{dest.salary}</span>
              </div>
              <p className="text-xs text-text-muted mb-3">{dest.salaryNPR}</p>
              <span className="inline-block text-xs font-medium bg-white border border-slate-200 text-text-muted px-2 py-1 rounded-full">
                {dest.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
